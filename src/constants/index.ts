
import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  starbucks,
  shopify,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Full-Stack Web Developer",
    icon: web,
  },
  {
    title: "Machine Learning Developer",
    icon: web, // Replace with appropriate ML icon if available
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "PHP",
    icon: git, // Replace with PHP icon if available
  },
  {
    name: "MySQL",
    icon: git, // Replace with MySQL icon if available
  },
  {
    name: "Python",
    icon: git, // Replace with Python icon if available
  },
  {
    name: "OpenCV",
    icon: git, // Replace with OpenCV icon if available
  },
  {
    name: "Figma",
    icon: figma,
  },
];

const experiences: TExperience[] = [
  {
    title: "Full Stack Web Developer (Intern)",
    companyName: "Eagle Tech IT Solutions",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2024 - May 2024",
    points: [
      "Developed and integrated front-end and back-end systems using React.js, PHP, and MySQL to create scalable web applications.",
      "Focused on enhancing user experience and system performance through optimized code and responsive design.",
      "Collaborated with team members to debug complex systems and meet project deadlines.",
    ],
  },
  {
    title: "Full Stack Web Developer (Intern)",
    companyName: "Viskamnix Technology",
    icon: shopify,
    iconBg: "#383E56",
    date: "December 2024 - Present",
    points: [
      "Engineered scalable web applications by integrating React.js front-end with SQL back-end.",
      "Improved user experience and system performance through responsive design and efficient code.",
      "Worked closely with cross-functional teams to deliver high-quality, user-centric solutions.",
    ],
  },
];

const testimonials: TTestimonial[] = [];

const projects: TProject[] = [
  {
    name: "Driver Drowsiness Detection System",
    description:
      "A real-time ML system using OpenCV and dlib's facial landmark model to detect driver drowsiness, achieving a 40% increase in detection accuracy and enhancing driver safety with timely alerts.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "dlib",
        color: "pink-text-gradient",
      },
    ],
    image: starbucks, // Replace with project-specific image if available
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "ICVTE Institute Management System",
    description:
      "A full-stack web application automating institute affiliation and student management, reducing processing time by 50% using PHP, MySQL, and Tailwind CSS.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: shopify, // Replace with project-specific image if available
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };