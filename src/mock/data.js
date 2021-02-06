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
  img: 'profile.gif',
  paragraphOne: "Young professional with an international background, graduated with a BA Honours degree in Business Management & a Minor in Computer Science at Oxford Brookes University. Well versed in business management and information technology.",
  paragraphTwo: "I'm an exceptionally meticulous and organized problem solver, and have pride in all my work no matter how big or small.",
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
    info2: 'These projects include but are not limited to: Copywriting, Brand overhauls (both in message and design), Creative Ads, Facebook & Instagram Ad campaigns.',
    url: 'https://www.behance.net/francescofulci',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Automation software & A.I. implementations',
    info: "There is a fair amount of demand for bespoke automation scripts, the issue is most don't know it's possible to automate many office tasks. Furthermore there is huge demand for data scrapers and subsequently for AI algorithms, which are necessary in filtering said data. (Most of my github will be kept private for intellectual property reasons).",
    info2: 'These projects include but are not limited to: Scripts, Web scrapers, Cryptography, Machine Learning AI -particularly in Natural Language Processing & Digital Image Processing.',
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
