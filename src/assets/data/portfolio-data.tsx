import { PortfolioDataInterface } from './portfolio-data.interface';
import GithubIcon from '../icons/github-icon.svg';
import LinkedinIcon from '../icons/linkedin-icon.svg';
import GmailIcon from '../icons/gmail-icon.svg';
import PhoneIcon from '../icons/phone-icon.svg';
import { SocialMediaIconProps } from '../../components/social-media-icon.component';

export const workHistories: PortfolioDataInterface[] = [
  {
    title: 'Fullstack Developer',
    company: {
      name: 'Multi Matrix Ltd',
      link: 'https://www.multimatrixlimited.com/',
    },
    jobType: 'Full Time',
    period: 'June 2024 - Present',
    location: 'Hong Kong, China (Remote)',
    description: [
      'I am working with the Software Engineering team creating easy to use frontend applications. Tech stack used during my time here include Angular, Ionic, and more',
      'Some of the tasks I am working on include:',
    ],
    bulletPoints: [
      'Participating in a white label based online sports betting project as a frontend angular developer',
      'Learning to use Ionic framework paired with angular-17 to create a mobile first & user friendly version of the sports betting application',
      'Working with the backend team to integrate third party APIs that provide websocket based updates to the web application',
      'Helping with fixing issues on the backend application (with Nest.js) that are related to a 3rd party API implementation',
    ],
  },
  {
    title: 'Team Lead/Full-Stack Developer',
    company: {
      name: 'Ablaze Labs',
      link: 'https://ablazelabs.com/',
    },
    jobType: 'Full Time',
    period: 'January 2023 - June 2024',
    location: 'Addis Ababa, Ethiopia (On-site)',
    description: [
      'I worked with the Software Engineering team creating backend APIs for different clients\' needs. Tech stack used during my time here include Nest.js, React, Python, and more',
      'Some of the projects I have worked on include:',
    ],
    bulletPoints: [
      'Participated as a team lead in the development of a telegram SaaS bot for online virtual betting game that can accommodate multiple companies with multiple players, handles payment and has live updates for game results',
      'Participated as a backend developer in the development of reusable microservices which include authentication, file management, configuration, geo-location, and search engine. I minimized the project preparation time for subsequent microservice based projects by 40%',
      'Participated in an experimental project on a NewSQL database called SurrealDB and its ORM cirql. I’ve used the database to implement tasks from simple CRUDs to graph relationships pairing it with Nest.js framework',
    ],
  },
  {
    title: 'Junior Developer',
    company: {
      name: 'BGI Ethiopia',
      link: 'https://bgiethiopia.com/',
    },
    jobType: 'Full Time',
    period: 'April 2021 - January 2023',
    location: 'Addis Ababa, Ethiopia (On-site)',
    description: [
      'I worked in the Application Development team and were mainly responsible for developing web applications that will aid different departments of the company automate different manual (things done with paper) tasks. Tech stack used during my time here include Laravel, PHP, React.js, Blade Template, MySQL, and more',
      'Some of the projects I have worked on include:',
    ],
    bulletPoints: [
      'Developed a document validation and standardization system that all departments of the company used to standardize their document. My web application helped the company to minimize the time planned for standardization by 60% (from 10 months to 4)',
      'Participated in development of an overtime management system that can handle overtime scheduling and executing in all 6 sites of the company handling more than 450 employees with 3 level of manager approval stages',
      'I have developed an authentication system that leverages the company’s LDAP server for authenticating the users with their LDAP credentials into all the applications I’ve mentioned above. This helped the company’s help center by 100% removing issues related to authentication to in-house applications',
    ],
  },
];

export const projects: PortfolioDataInterface[] = [
  // {
  //   title: 'Mobile Application API',
  //   description: [
  //     'I have worked on a project where I developed a backend API for a mobile application (A broker app for connecting buyers with sellers) using Laravel. I have used token based authentication (JWT), protecting API routes with middlewares, JSON based response generations and many more.',
  //   ],
  // },
  // {
  //   title: 'Telegram Bot',
  //   description: [
  //     'I have worked on a project to a company that lets its customers to know more about the record the company has of them through the famous social media platform’s bot API  (i.e., Telegram bot API). I have used Laravel to fetch messages store on the telegram servers, process the requests and send the message sender the appropriate result.',
  //   ],
  // },
  // {
  //   title: 'e-Commerce React Application',
  //   description: [
  //     'In learning about the fundamentals of react and all the things that come with it, I have made a simple yet highly functional e-commerce cloth selling application. In doing so, I have used the core features of react like hooks, Redux state management, API handling packages (like axios) and many more.',
  //   ],
  // },
  // {
  //   title: 'Social Media App',
  //   description: [
  //     'This is a instagram look-alike app that is made by flutter. I tried to make it create multiple users, accept posts, like, comment, update profile etc. In addition to flutter I have used firebase for this app development for storage (firestore), authentication (google sign in) and for on action triggers (functions).',
  //   ],
  // },
  // {
  //   title: 'Design to Flutter Practice Apps',
  //   description: [
  //     'I have been practicing on making flutter apps by downloading UI designs and implementing them using flutter. I have a two paged app(uvento_app) and an on progress 24 pages (podcast_app). For their code you can check my GitHub link. They are listed under design-to-flutter repository.',
  //   ],
  // },
  {
    title: 'Lynx: A common word guessing game',
    link: 'https://gametrix.org',
    description: [
      'This is a fun game you can play solo or with friends. It shows you a list of cue words which has one common word that can complete them and your job is to guess that common word. It uses Colyseus(https://colyseus.io/) to support in-sync multiplayer experience and LiveKit(https://livekit.io/) to enable a WebRTC based voice communication among players to make the game more fun.',
      'Technologies used: Angular, TailwindCSS, NgRx SignalStore, Nest.js, Express, Node.js, Typescript, Colyseus, LiveKit, PostgreSQL, Prisma, Docker, nginx.'
    ],
  },
  {
    title: 'White-label based sports betting',
    link: 'https://m.freedemokit.com',
    description: [
      'This is a fully fledged sports betting application that enables players to participate in online betting experience. It integrates a third-party API to fetch and display realtime price updates on the user interface, it enables users place bets, see their previous bets and many more.',
      'Technologies used: Angular, Ionic, Typescript, WebSocket, NgRx SignalStore, TailwindCSS, Web-Workers.'
    ],
  },
  {
    title: 'Portfolio website',
    link: 'https://abenezer-ayalneh.vercel.app',
    description: [
      'I\'ve made a very simple portfolio web application to tell my story, what I did, what kind of projects I\'ve participated in, and a way to contact me. I\'ve hosted it on vercel(https://vercel.com).',
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
  // {
  //   title: 'Data Science',
  //   company: {
  //     name: 'ALX',
  //     link: 'https://www.alxafrica.com/',
  //   },
  //   period: 'May 2023 - July 2024',
  //   location: 'Addis Ababa, Ethiopia',
  //   description: [
  //     'Designed to help you gain in-demand data science and machine learning skills, the ALX Data Science Program will equip you with the crucial tools and techniques to analyze visual and statistical data, create models, and communicate results to inform data-driven decisions. In addition, you will learn the universal programming language Python and solve real-world problems using machine learning.',
  //     'I\'m currently enrolled in this program.',
  //   ],
  // },
];

export const enum Tabs {
  WORK,
  PROJECTS,
  EDUCATION,
  CONTACT_ME,
}

export const tabs = [
  { name: '01 --- Work', tab: Tabs.WORK },
  { name: '02 --- Projects', tab: Tabs.PROJECTS },
  { name: '03 --- Education', tab: Tabs.EDUCATION },
  { name: '04 --- Contact Me', tab: Tabs.CONTACT_ME },
];

export const socialMediaLinks: SocialMediaIconProps[] = [
  {
    icon: GithubIcon,
    link: 'https://github.com/abenezer-ayalneh',
  },
  {
    icon: LinkedinIcon,
    link: 'https://www.linkedin.com/in/abenezer-ayalneh-b579911b5/',
  }, {
    icon: GmailIcon,
    link: 'abenezer.ayalneh.42@gmail.com',
  }, {
    icon: PhoneIcon,
    link: '+251916667538',
  },
];
