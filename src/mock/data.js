import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'FpF Consultancy', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Francesco Fulci',
  subtitle: 'IT & Business Consultant',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: "Manager with an international background, graduated with a BA Honours degree in Business Management & a Minor in Computer Science at Oxford Brookes University. Well versed in business management and information technology.",
  paragraphTwo: "I'm an exceptionally innovative and meticulous problem solver, and have pride in all my work no matter how big or small.",
  paragraphThree: 'Feel free to contact me to inquire about working together.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Business & eCommerce Websites',
    info: "My freelancing has started with creating websites, countless of clients have first come to me for a website as online presence has become a must in today's world. I have worked on numerous smaller websites using pure css and html and a few bigger ones on Wordpress and Shopify.",
    info2: 'These projects include but are not limited to: HTML/CSS editing, Web Design, Business Landing pages, Blogs, Wordpress & Shopify CMS.',
    url: 'https://www.behance.net/francescofulci',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Marketing Campaigns & Brand Design',
    info: 'Some clients have come to me with a product or service to sell but with poor or no online market presence. That is when I started getting experience in marketing and eCommerce. I typically create the website and take care of the marketing, including A/B testing advertisements.',
    info2: 'These projects include but are not limited to: Cold Outreach, Copywriting, Brand overhauls (both in message and design), Creative Ads, Facebook & Instagram Ad campaigns.',
    url: 'https://www.behance.net/francescofulci',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Project Management Consulting & Software',
    info: "I have worked with bleeding edge technology as project manager and can help consult others through it. There is an ever-growing amount of demand for powerful & bespoke software, particularly with A.I. Most just don't know how accessible it can be.",
    info2: "I've worked specifically with Data scraping and Machine Learning AI -Natural Language Processing & Digital Image Processing.',
    url: 'https://www.behance.net/francescofulci',
    repo: 'https://github.com/FPFdeveloper', //if no repo, the button will not show up
  }, 
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'fpfulci@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/FPF_CONSULTANCY',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/FPFdeveloper',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
