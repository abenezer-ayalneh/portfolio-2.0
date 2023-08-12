import { PortfolioDataInterface } from './portfolio-data.interface';
import GithubIcon from '../icons/github-icon.svg';
import LinkedinIcon from '../icons/linkedin-icon.svg';
import GmailIcon from '../icons/gmail-icon.svg';
import PhoneIcon from '../icons/phone-icon.svg';
import { SocialMediaIconProps } from '../../components/social-media-icon.component';

export const workHistories: PortfolioDataInterface[] = [
  {
    title: 'Backend Developer',
    company: {
      name: 'Ablaze Labs',
      link: 'https://ablazelabs.com/',
    },
    jobType: 'Full Time',
    period: 'Jan 2023 - Present',
    location: 'Addis Ababa, Ethiopia',
    description: [
      "I worked with the Software Engineering team creating backend APIs for different clients' needs. Tech stack used during my time here include Nest.js, React, Python, and more",
      'Some of the projects I have worked on include:',
    ],
    bulletPoints: [
      'I have participated in the development of a virtual game called Keno that is easy to play and intuitive. My responsibility was creating different modular parts of the backend like Authentication & Access Control, Database Management, Search and Filter, Websockets, and interconnecting those different modules. Also I’ve participated in the development of the front-end and hosting it to cloud environment (Nest.js, JWT, PostgreSQL, Prisma, Docker, Meilisearch, Socket.io, React.js, Tailwind, React Query)',
      "I have participated in the development of reusable Microservices for the company's software engineering team. I have created microservices like Authentication, File Management, Config, Geo-Location, Search and Filter (Nest.js, gRPC, TCP, PostgreSQL, Prisma, JWT, Cloudinary, SQLite, Graphhopper, Nominatim, Open Street Maps, Meilisearch)",
      'I have participated in the new database experimenting experience and I have worked with a NewSQL database called SurrealDB and its experimental ORM cirql. I’ve implemented from simple CRUDs to graph relationships with it (Nest.js, SurrealDB, cirql, Dynamic Modules)',
    ],
  },
  {
    title: 'Junior Developer',
    company: {
      name: 'BGI Ethiopia',
      link: 'https://bgiethiopia.com/',
    },
    jobType: 'Full Time',
    period: 'April 2021 - Jan 2023',
    location: 'Addis Ababa, Ethiopia',
    description: [
      'I worked in the Application Development team and were mainly responsible for developing web applications that will aid different departments of the company automate different manual (things done with paper) tasks. Tech stack used during my time here include Laravel, PHP, React.js, Blade Template, MySQL, and more',
      'Some of the projects I have worked on include:',
    ],
    bulletPoints: [
      'I have Developed a document validation and standardization system that all departments of the company used to standardize their document based on the company format and easily access them from the system. It also included a visualized hierarchy and interconnections between different sections of the company and flow of production (Laravel, MySQL, Blade Template, Apache, PHP 8, Chart.js)',
      'I have participated in development of an overtime management system that can handle overtime scheduling and executing in all 6+ sites of the company with 3 level of manager approval stages. This system helped all departments to easily plan overtimes ahead and helped HR to easily access the final results for payroll purposes. It also helped higher managers to easily keep track of the overtime hours using different charts and tables (Laravel, MySQL, MSSQL, Blade Template, Apache, PHP 8, Chart.js)',
      'I have developed an accident reporting web application for safety and health department of the company. Its use is for ease of communication between members of this department whenever an accident occurs. It includes data feeding interface for the representatives and additional report dashboard for managers (Laravel, MySQL, MSSQL, Blade Template, Apache, PHP 8, Chart.js, Morris.js)',
      "I have developed an authentication system that leverages the company's LDAP server for authenticating the users with their LDAP credentials into all the applications I’ve mentioned above",
    ],
  },
];

export const projects: PortfolioDataInterface[] = [
  {
    title: 'Presentation for Out Health Aid App',
    description: [
      'This is a presentation of our health care aiding application called "Hakimie". It briefly explains the concept behind it and what it aims to solve and some prototypes.'
    ],
    link: 'https://docs.google.com/presentation/d/167ZX1kLNm8Afcxecr0pvoTzZ5fFWE8oTsFfFyUUAObI/edit?usp=sharing'
  },
  {
    title: 'Hakimie: A Healthcare Aid App',
    description: [
      'This is the presentation file for the "Hakimie" project. It contains information like our chosen GCGO, what we want to solve, our proposed idea, and some prototypes of the application.',
    ],
    link: 'https://www.youtube.com/watch?v=q4A-CosM5rk'
  },
  {
    title: 'Mobile Application API',
    description: [
      'I have worked on a project where I developed a backend API for a mobile application (A broker app for connecting buyers with sellers) using Laravel. I have used token based authentication (JWT), protecting API routes with middlewares, JSON based response generations and many more.',
    ],
  },
  {
    title: 'Telegram Bot',
    description: [
      'I have worked on a project to a company that lets its customers to know more about the record the company has of them through the famous social media platform’s bot API  (i.e., Telegram bot API). I have used Laravel to fetch messages store on the telegram servers, process the requests and send the message sender the appropriate result.',
    ],
  },
  {
    title: 'e-Commerce React Application',
    description: [
      'In learning about the fundamentals of react and all the things that come with it, I have made a simple yet highly functional e-commerce cloth selling application. In doing so, I have used the core features of react like hooks, Redux state management, API handling packages (like axios) and many more.',
    ],
  },
  {
    title: 'Social Media App',
    description: [
      'This is a instagram look-alike app that is made by flutter. I tried to make it create multiple users, accept posts, like, comment, update profile etc. In addition to flutter I have used firebase for this app development for storage (firestore), authentication (google sign in) and for on action triggers (functions).',
    ],
  },
  {
    title: 'Design to Flutter Practice Apps',
    description: [
      'I have been practicing on making flutter apps by downloading UI designs and implementing them using flutter. I have a two paged app(uvento_app) and an on progress 24 pages (podcast_app). For their code you can check my GitHub link. They are listed under design-to-flutter repository.',
    ],
  },
];

export const education: PortfolioDataInterface[] = [
  {
    title: 'Computer Science',
    company: {
      name: 'Addis Ababa University',
      link: 'http://www.aau.edu.et/',
    },
    period: 'Oct 2016 - Dec 2020',
    location: 'Addis Ababa, Ethiopia',
    description: [
      'In my 4 year stay the the campus I was able to grasp basic programming concepts, skills, components, and architectures that paved the way for me to pursue the dream of being a software engineer.',
    ],
  },
  {
    title: 'Data Science',
    company: {
      name: 'ALX',
      link: 'https://www.alxafrica.com/',
    },
    period: 'May 2023 - July 2024',
    location: 'Addis Ababa, Ethiopia',
    description: [
      'Designed to help you gain in-demand data science and machine learning skills, the ALX Data Science Program will equip you with the crucial tools and techniques to analyze visual and statistical data, create models, and communicate results to inform data-driven decisions. In addition, you will learn the universal programming language Python and solve real-world problems using machine learning.',
      "I'm currently enrolled in this program.",
    ],
  },
];

export const enum Tabs {
  PORTFOLIO,
  WORK,
  ELEVATOR_PITCH,
}

export const tabs = [
  { name: 'Portfolio', tab: Tabs.PORTFOLIO },
  { name: 'Work', tab: Tabs.WORK },
  { name: 'Elevator Pitch', tab: Tabs.ELEVATOR_PITCH },
];

export const socialMediaLinks: SocialMediaIconProps[] = [
  {
    icon: GithubIcon,
    link: 'https://github.com/abenezer-ayalneh',
  },
  {
    icon: LinkedinIcon,
    link: 'https://www.linkedin.com/in/abenezer-ayalneh-b579911b5/',
  },
  {
    icon: GmailIcon,
    link: 'abenezer.ayalneh.42@gmail.com',
  },
  {
    icon: PhoneIcon,
    link: '+251916667538',
  },
];
