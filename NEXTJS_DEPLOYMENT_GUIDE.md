# Next.js Deployment Guide – abenezer-ayalneh.dev

Complete guide to deploy your Next.js project to your VPS with Docker, Nginx, and SSL.

---

## Overview

**Target setup:**
- VPS: Ubuntu/Debian with SSH access
- Domain: abenezer-ayalneh.dev
- App server: Docker container running Next.js
- Reverse proxy: Nginx
- SSL: Let's Encrypt (free)
- Process manager: Docker Compose

---

## Prerequisites

Before starting, ensure you have:

1. **Server access:** SSH key or password to your VPS
2. **Domain DNS:** Ability to point DNS records to your server's IP
3. **Next.js repo:** Git access (public or via SSH key) or code uploaded to server
4. **Software on VPS:** Docker and Docker Compose installed

---

## Step 1: Server Setup

### 1.1 Initial SSH Connection

```bash
ssh root@your-server-ip
# or if you have a non-root user:
ssh user@your-server-ip
```

### 1.2 Update System

```bash
sudo apt update && sudo apt upgrade -y
```

### 1.3 Install Docker & Docker Compose

```bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Add your user to docker group (if not root)
sudo usermod -aG docker $USER
newgrp docker

# Verify Docker
docker --version
docker-compose --version
```

### 1.4 Install Caddy

```bash
# Add Caddy repository
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl
curl -1sLf 'https://dl.caddy.community/packages/debian/pubkey.gpg' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-archive-keyring.gpg
curl -1sLf 'https://dl.caddy.community/packages/debian/caddy.repo' | sudo tee /etc/apt/sources.list.d/caddy-community.list

# Install Caddy
sudo apt update
sudo apt install -y caddy

# Start Caddy
sudo systemctl start caddy
sudo systemctl enable caddy
```

Note: Caddy automatically handles SSL certificates via Let's Encrypt – no separate certbot installation needed!

---

## Step 2: Prepare Your Next.js Project

### 2.1 Dockerfile

Create a `Dockerfile` in the root of your Next.js project:

```dockerfile
# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build Next.js app
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Install only production dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy built app from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./

# Expose port
EXPOSE 3000

# Start app
CMD ["npm", "start"]
```

### 2.2 .dockerignore

Create a `.dockerignore` file (same as `.gitignore`):

```
node_modules
.next
.git
.env.local
.env.*.local
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.DS_Store
```

### 2.3 .env.production

Create `.env.production` for production environment (update as needed):

```env
# Add any production-specific environment variables here
# DO NOT commit secrets; use Docker Compose secrets or env file instead
NODE_ENV=production
```

---

## Step 3: Docker Compose Setup

Create `docker-compose.prod.yml` in the root directory:

```yaml
version: '3.8'

services:
  nextjs:
    image: nextjs-app:latest
    container_name: nextjs-app
    restart: unless-stopped
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      # Add other env vars here
    networks:
      - app-network
    healthcheck:
      test: ["CMD", "wget", "--quiet", "--tries=1", "--spider", "http://localhost:3000/"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s

networks:
  app-network:
    driver: bridge
```

---

## Step 4: Caddy Configuration

### 4.1 Create Caddyfile

Create `/etc/caddy/Caddyfile`:

```caddy
abenezer-ayalneh.dev, www.abenezer-ayalneh.dev {
    # Reverse proxy to Next.js app
    reverse_proxy localhost:3000 {
        # WebSocket support for Next.js features
        header_up Connection "Upgrade"
        header_up Upgrade "websocket"
    }

    # Enable gzip compression
    encode gzip

    # Security headers (Caddy adds many by default)
    header Strict-Transport-Security "max-age=31536000; includeSubDomains"
    header X-Frame-Options "DENY"
    header X-Content-Type-Options "nosniff"
    header X-XSS-Protection "1; mode=block"
}
```

### 4.2 Reload Caddy

```bash
# Test Caddyfile syntax
sudo caddy validate --config /etc/caddy/Caddyfile

# Reload Caddy with new config (it will auto-fetch SSL cert)
sudo systemctl reload caddy

# Check status
sudo systemctl status caddy
```

Caddy automatically:
- Obtains Let's Encrypt certificates
- Redirects HTTP → HTTPS
- Renews certificates before expiry
- No extra certbot setup needed!

---

## Step 5: DNS Configuration

Point your domain's DNS records to your server IP:

### For abenezer-ayalneh.dev (root domain):

| Type | Name | Value           |
|------|------|-----------------|
| A    | @    | YOUR_SERVER_IP  |
| A    | www  | YOUR_SERVER_IP  |

Update these at your domain registrar (GoDaddy, Namecheap, etc.).

**Wait 10-30 minutes for DNS propagation.**

---

## Step 6: SSL Certificate (Automatic with Caddy)

Once DNS is propagated and Caddy is configured:

```bash
# Caddy automatically handles SSL!
# Just ensure your Caddyfile is set up correctly (see Step 4)

# Caddy will:
# ✓ Obtain Let's Encrypt certificate automatically
# ✓ Renew before expiry
# ✓ Handle HTTP → HTTPS redirect
# ✓ Store certs in /var/lib/caddy/

# Monitor certificate renewal
sudo tail -f /var/log/caddy/caddy.log

# Check if certificate was obtained
sudo caddy list-certs
```

That's it! No separate certbot commands needed.

---

## Step 7: Build & Deploy

### 7.1 Clone/Upload Your Project

```bash
# From your VPS, clone your repository (or upload files)
cd /opt
git clone https://github.com/yourusername/your-nextjs-project.git
cd your-nextjs-project

# Or if using SSH key:
# git clone git@github.com:yourusername/your-nextjs-project.git
```

### 7.2 Build Docker Image

```bash
cd /opt/your-nextjs-project
sudo docker build -t nextjs-app:latest .
```

### 7.3 Start Container with Docker Compose

```bash
# Run in background
sudo docker-compose -f docker-compose.prod.yml up -d

# View logs
sudo docker-compose -f docker-compose.prod.yml logs -f nextjs

# Check container status
sudo docker ps
```

### 7.4 Verify Deployment

```bash
# Check if container is healthy
sudo docker ps

# Check logs for errors
sudo docker-compose -f docker-compose.prod.yml logs

# Test locally on VPS
curl http://localhost:3000

# Test through Nginx
curl https://abenezer-ayalneh.dev
```

---

## Step 8: Automated Deployments (Optional)

### Using a Simple Bash Script

Create `deploy.sh` in your project root:

```bash
#!/bin/bash

PROJECT_DIR="/opt/your-nextjs-project"
cd $PROJECT_DIR

echo "Pulling latest code..."
git pull origin main

echo "Building Docker image..."
sudo docker build -t nextjs-app:latest .

echo "Restarting container..."
sudo docker-compose -f docker-compose.prod.yml down
sudo docker-compose -f docker-compose.prod.yml up -d

echo "Deployment complete!"
sudo docker-compose -f docker-compose.prod.yml logs -f
```

Make it executable:
```bash
chmod +x deploy.sh
```

Run deployments:
```bash
./deploy.sh
```

---

## Troubleshooting

### Container won't start

```bash
# Check logs
sudo docker-compose -f docker-compose.prod.yml logs

# Rebuild from scratch
sudo docker-compose -f docker-compose.prod.yml down
sudo docker system prune -a
sudo docker build --no-cache -t nextjs-app:latest .
sudo docker-compose -f docker-compose.prod.yml up -d
```

### Caddy shows "502 Bad Gateway" or "Bad Request"

- Ensure Next.js container is running: `sudo docker ps`
- Check container health: `sudo docker-compose -f docker-compose.prod.yml logs nextjs`
- Test proxy connection: `sudo docker exec nextjs-app curl http://localhost:3000`
- Check Caddy logs: `sudo tail -f /var/log/caddy/caddy.log`

### SSL certificate issues

```bash
# Check if certificate was obtained
sudo caddy list-certs

# Check Caddy logs for certificate errors
sudo journalctl -u caddy -f

# Validate Caddyfile syntax
sudo caddy validate --config /etc/caddy/Caddyfile

# If DNS isn't resolving yet, Caddy will retry automatically
# Check DNS propagation: nslookup abenezer-ayalneh.dev
```

### High memory/CPU usage

```bash
# Check resource usage
sudo docker stats

# Limit resources in docker-compose.prod.yml
services:
  nextjs:
    deploy:
      resources:
        limits:
          cpus: '1.0'
          memory: 512M
```

### DNS not resolving

```bash
# Check DNS propagation
nslookup abenezer-ayalneh.dev
dig abenezer-ayalneh.dev

# Wait longer or check registrar dashboard
```

---

## Maintenance

### Regular Updates

```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Update Docker images
sudo docker pull node:20-alpine
sudo docker build -t nextjs-app:latest .
sudo docker-compose -f docker-compose.prod.yml up -d
```

### Monitor Logs

```bash
# Real-time logs
sudo docker-compose -f docker-compose.prod.yml logs -f

# Last 100 lines
sudo docker-compose -f docker-compose.prod.yml logs --tail=100

# Nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### Backup

```bash
# Backup your project
cd /opt
tar -czf nextjs-app-backup-$(date +%Y%m%d).tar.gz your-nextjs-project/

# Keep backups on your local machine
scp root@your-server-ip:/opt/nextjs-app-backup-*.tar.gz ./backups/
```

---

## Summary Checklist

- [ ] SSH into VPS and run system updates
- [ ] Install Docker, Docker Compose, and Caddy
- [ ] Add Dockerfile and .dockerignore to project
- [ ] Create docker-compose.prod.yml
- [ ] Create Caddyfile configuration
- [ ] Point DNS records to server IP
- [ ] Wait for DNS propagation (5-30 minutes)
- [ ] Reload Caddy (automatic SSL certificate fetching)
- [ ] Upload/clone project to `/opt/`
- [ ] Build Docker image
- [ ] Start container with Docker Compose
- [ ] Verify HTTPS works at abenezer-ayalneh.dev
- [ ] Check Caddy logs to confirm certificate obtained
- [ ] (Optional) Create deploy.sh script

---

## Next Steps

After this is running smoothly, you can:
1. Deploy the main Huddle project to a subdomain (e.g., `huddle.abenezer-ayalneh.dev`)
2. Set up CI/CD for automatic deployments on push
3. Add monitoring and alerting
4. Configure log aggregation

Good luck! 🚀
