import {
  Document,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
  renderToBuffer,
} from '@react-pdf/renderer'

import { education } from '@/data/education'
import { projects } from '@/data/projects'
import { resume } from '@/data/resume'
import { skillCategories } from '@/data/skills'
import { SITE_CONFIG, socialLinks } from '@/data/social'
import { workHistory } from '@/data/work'

export const runtime = 'nodejs'
export const dynamic = 'force-static'

const COLORS = {
  black: '#111111',
  gray: '#444444',
  lightGray: '#777777',
  rule: '#d4d4d4',
  accent: '#2563eb',
}

const styles = StyleSheet.create({
  page: {
    paddingTop: 36,
    paddingBottom: 36,
    paddingHorizontal: 40,
    fontFamily: 'Times-Roman',
    fontSize: 10,
    color: COLORS.black,
    lineHeight: 1.5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  headerLeft: { flexDirection: 'column', flex: 1 },
  name: {
    fontSize: 24,
    fontFamily: 'Times-Bold',
    letterSpacing: -0.5,
    lineHeight: 1.15,
    marginBottom: 6,
  },
  tagline: {
    marginTop: 0,
    fontSize: 10,
    color: COLORS.gray,
    fontStyle: 'italic',
  },
  headerRight: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    fontSize: 9,
    color: COLORS.gray,
  },
  headerLine: { marginBottom: 2 },
  headerLink: { color: COLORS.accent, textDecoration: 'none' },
  hr: {
    borderBottomWidth: 1.2,
    borderBottomColor: COLORS.rule,
    marginVertical: 10,
  },
  hrThin: {
    borderBottomWidth: 0.6,
    borderBottomColor: COLORS.rule,
    marginVertical: 8,
  },
  section: { marginBottom: 4 },
  sectionTitle: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 8,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: COLORS.accent,
    marginBottom: 8,
  },
  summary: { fontSize: 10, color: COLORS.gray, lineHeight: 1.55 },
  entry: { marginBottom: 8 },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  entryTitleWrap: { flex: 1, flexDirection: 'row', flexWrap: 'wrap' },
  entryTitle: { fontFamily: 'Helvetica-Bold', fontSize: 10 },
  entryCompany: { fontSize: 10, color: COLORS.gray },
  entryMeta: { fontSize: 9, color: COLORS.lightGray, marginLeft: 8 },
  entryLocation: {
    fontSize: 9,
    color: COLORS.lightGray,
    marginBottom: 3,
    marginTop: 1,
  },
  bulletRow: { flexDirection: 'row', marginBottom: 2 },
  bulletMarker: { width: 10, color: COLORS.accent, fontSize: 9.5 },
  bulletText: { flex: 1, fontSize: 9.5, color: COLORS.gray, lineHeight: 1.45 },
  projectsGrid: { flexDirection: 'row', flexWrap: 'wrap' },
  projectCell: {
    width: '50%',
    paddingRight: 12,
    marginBottom: 10,
  },
  projectCellRight: {
    paddingRight: 0,
    paddingLeft: 12,
  },
  projectLink: { fontSize: 9, color: COLORS.accent, marginTop: 1 },
  projectDesc: {
    fontSize: 9.5,
    color: COLORS.gray,
    marginTop: 3,
    lineHeight: 1.45,
  },
  projectTech: {
    fontSize: 8.5,
    color: COLORS.lightGray,
    marginTop: 3,
    fontStyle: 'italic',
  },
  skillsGrid: { flexDirection: 'row', flexWrap: 'wrap' },
  skillCell: {
    width: '33.33%',
    paddingRight: 12,
    marginBottom: 8,
  },
  skillGroup: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 8.5,
    color: COLORS.black,
    marginBottom: 2,
  },
  skillList: { fontSize: 9.5, color: COLORS.gray },
  languagesRow: { fontSize: 9.5, color: COLORS.gray },
  languageName: { fontFamily: 'Helvetica-Bold', color: COLORS.black },
})

function getSocial(name: string) {
  return socialLinks.find((s) => s.name === name)
}

function formatPhone(raw: string) {
  // +251916667538 -> +251 916 667 538
  const m = raw.match(/^(\+\d{1,3})(\d{3})(\d{3})(\d{3,})$/)
  if (!m) return raw
  return `${m[1]} ${m[2]} ${m[3]} ${m[4]}`
}

function prettyUrl(url: string) {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '')
}

function ResumeDocument() {
  const email = getSocial('Email')?.url ?? ''
  const phone = getSocial('Phone')?.url ?? ''
  const linkedIn = getSocial('LinkedIn')?.url ?? ''
  const github = getSocial('GitHub')?.url ?? ''
  const site = SITE_CONFIG.url

  const featuredProjects = projects.filter((p) => p.featured)

  return (
    <Document
      title="Abenezer Ayalneh — Resume"
      author="Abenezer Ayalneh"
      subject="Resume"
    >
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.name}>Abenezer Ayalneh</Text>
            <Text style={styles.tagline}>{resume.tagline}</Text>
          </View>
          <View style={styles.headerRight}>
            <Link src={`mailto:${email}`} style={[styles.headerLink, styles.headerLine]}>
              {email}
            </Link>
            <Text style={styles.headerLine}>{formatPhone(phone)}</Text>
            <Link src={linkedIn} style={[styles.headerLink, styles.headerLine]}>
              {prettyUrl(linkedIn).replace(/\/$/, '')}
            </Link>
            <Link src={github} style={[styles.headerLink, styles.headerLine]}>
              {prettyUrl(github)}
            </Link>
            <Link src={site} style={[styles.headerLink, styles.headerLine]}>
              {prettyUrl(site)}
            </Link>
          </View>
        </View>

        <View style={styles.hr} />

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.summary}>{resume.summary}</Text>
        </View>

        <View style={styles.hr} />

        {/* Work Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle} minPresenceAhead={80}>Work Experience</Text>
          {workHistory.map((job, idx) => (
            <View key={`${job.company.name}-${idx}`} wrap={false}>
              <View style={styles.entry}>
                <View style={styles.entryHeader}>
                  <View style={styles.entryTitleWrap}>
                    <Text style={styles.entryTitle}>{job.title}</Text>
                    <Text style={styles.entryCompany}>{' — '}</Text>
                    <Link src={job.company.link} style={[styles.entryCompany, { color: COLORS.accent }]}>
                      {job.company.name}
                    </Link>
                  </View>
                  <Text style={styles.entryMeta}>{job.period}</Text>
                </View>
                <Text style={styles.entryLocation}>{job.location}</Text>
                {job.bulletPoints.map((b, i) => (
                  <View key={i} style={styles.bulletRow}>
                    <Text style={styles.bulletMarker}>•</Text>
                    <Text style={styles.bulletText}>{b}</Text>
                  </View>
                ))}
              </View>
              {idx < workHistory.length - 1 && <View style={styles.hrThin} />}
            </View>
          ))}
        </View>

        <View style={styles.hr} />

        {/* Projects */}
        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>Projects</Text>
          <View style={styles.projectsGrid}>
            {featuredProjects.map((p, idx) => (
              <View
                key={p.title}
                style={[styles.projectCell, idx % 2 === 1 ? styles.projectCellRight : {}]}
                wrap={false}
              >
                <Text style={styles.entryTitle}>{p.title}</Text>
                {p.liveUrl && (
                  <Link src={p.liveUrl} style={styles.projectLink}>
                    {prettyUrl(p.liveUrl)}
                  </Link>
                )}
                <Text style={styles.projectDesc}>{p.description}</Text>
                <Text style={styles.projectTech}>{p.techStack.join(' · ')}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.hr} />

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle} minPresenceAhead={60}>Skills</Text>
          <View style={styles.skillsGrid}>
            {skillCategories.map((cat) => (
              <View key={cat.category} style={styles.skillCell}>
                <Text style={styles.skillGroup}>{cat.category}</Text>
                <Text style={styles.skillList}>
                  {cat.skills.map((s) => s.name).join(', ')}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.hr} />

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle} minPresenceAhead={40}>Education</Text>
          {education.map((e) => (
            <View key={e.degree} style={styles.entry}>
              <View style={styles.entryHeader}>
                <View style={styles.entryTitleWrap}>
                  <Text style={styles.entryTitle}>{e.degree}</Text>
                  <Text style={styles.entryCompany}>{' — '}</Text>
                  <Link src={e.institution.link} style={[styles.entryCompany, { color: COLORS.accent }]}>
                    {e.institution.name}
                  </Link>
                </View>
                <Text style={styles.entryMeta}>{e.period}</Text>
              </View>
              <Text style={styles.entryLocation}>{e.location}</Text>
            </View>
          ))}
        </View>

        {/* Languages */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle} minPresenceAhead={30}>Languages</Text>
          <Text style={styles.languagesRow}>
            {resume.languages.map((lang, idx) => (
              <Text key={lang.name}>
                <Text style={styles.languageName}>{lang.name}</Text>
                {` — ${lang.level}`}
                {idx < resume.languages.length - 1 ? '    ' : ''}
              </Text>
            ))}
          </Text>
        </View>
      </Page>
    </Document>
  )
}

export async function GET() {
  const buffer = await renderToBuffer(<ResumeDocument />)

  return new Response(new Uint8Array(buffer), {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition':
        'inline; filename="Abenezer Ayalneh -- Resume.pdf"',
      'Cache-Control':
        'public, s-maxage=31536000, stale-while-revalidate=86400',
    },
  })
}
