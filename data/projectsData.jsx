import KulinerGo from "../src/assets/portfolio/kuliner-go.png";
import Adma from "../src/assets/portfolio/adma-mob.png";
import Antria from "../src/assets/portfolio/antria.png";
import Tactin from "../src/assets/portfolio/tactin.png";
import Portfolio from "../src/assets/portfolio/portfolio.png";
import AdmaScreen from "../src/assets/portfolio/adma-screen.png";
import QA from "../src/assets/portfolio/qa.png";

export const projects = [
  {
    id: 1,
    title: "Kuliner Go",
    description: "Mobile app for discovering and ordering local cuisine.",
    detailedDescription:
      "Kuliner Go is a mobile application designed to help users discover and order local cuisine. The app provides a platform for food enthusiasts to explore a wide variety of dishes from different regions, read reviews, and place orders directly through the app. With an intuitive interface and seamless ordering process, Kuliner Go aims to connect food lovers with their favorite local eateries and promote culinary diversity.",
    tags: ["Flutter", "Mobile App", "Firebase"],
    category: "Mobile Apps",
    image: KulinerGo,
    link: "https://github.com/Xiraj/kuliner.go-mobile.git",
  },
  {
    id: 2,
    title: "ADMA App",
    description: "Mobile app for tracking requested equipment.",
    detailedDescription:
      "ADMA is a website-based and mobile app program initiated by PT Sucofindo PERSERO Bandung branch. ADMA was created to make it easier for administrators to manage incoming and outgoing assets and to facilitate Sucofindo employees in borrowing and returning assets at PT Sucofindo Bandung branch.",
    tags: ["Flutter", "Mobile App", "Firebase", "MongoDB", "Node.js"],
    category: "Mobile Apps",
    image: Adma,
    screenshot: AdmaScreen,
    link: "https://github.com/AhmadNaufal2525/ADMA-APP.git",
  },
  {
    id: 3,
    title: "Antria App",
    description: "Mobile app for managing appointments and bookings.",
    tags: [
      "Flutter",
      "Mobile App",
      "Clean Architecture",
      "API Integration",
      "BLoC",
    ],
    detailedDescription:
      "Antria application is a website and mobile app platform that provides convenience for users (customers and partners). The Antria application allows customers to place orders much faster because they can perform a Virtual Queue to make an order, and for partners, they can see customer orders based on the queue number of customers who place orders through the Virtual Queue.",
    category: "Mobile Apps",
    image: Antria,
    link: "https://github.com/Antria-id/antria-mitra-mobile.git",
  },
  {
    id: 4,
    title: "Tactin App",
    description:
      "Mobile application designed to translate documents and text into accessible formats for visually impaired users.",
    detailedDescription:
      "Tactin is a mobile application designed to translate documents and text into accessible formats for visually impaired users. The app can convert text into Braille, allowing users to read and interact with content through tactile feedback and also can translate file formats such as PDF into Braille.",
    tags: ["Flutter", "Dart", "Mobile App"],
    category: "Mobile Apps",
    image: Tactin,
    link: "https://github.com/AhmadNaufal2525/braille-app.git",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects and skills.",
    detailedDescription:
      "This portfolio website is a personal project designed to showcase my skills, experience, and projects. Built using React and Tailwind CSS, the website features a clean and modern design with responsive layouts. It includes sections for an about me, project portfolio, and contact information, allowing visitors to easily navigate and learn more about my work and background.",
    tags: ["React", "Tailwind CSS", "Web App"],
    category: "Web Development",
    image: Portfolio,
    link: "https://ahmadnaufaldp.vercel.app/",
  },
  {
    id: 6,
    title: "QA Project Capstone",
    description:
      "A comprehensive software quality assurance project for a web application.",
    detailedDescription:
      "This capstone project focuses on software quality assurance for a web application. It involves manual testing, test planning, and bug reporting to ensure the application's functionality, usability, and performance meet the required standards. The project includes creating detailed test cases, executing tests, and documenting any issues found during the testing process. Additionally, Postman is used for API testing to validate the backend services of the application.",
    tags: ["Manual Testing", "Test Planning", "Bug Reporting", "Postman"],
    category: "Quality Assurance",
    image: QA,
    link: "https://www.canva.com/design/DAFs0IdAJAY/7HWhTCojFZLpbEtSRsYu7g/view?utm_content=DAFs0IdAJAY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he90166014b",
  },
];

export const ITEMS_PER_PAGE = 6;

export const categories = [
  "All",
  "Web Development",
  "Mobile Apps",
  "Quality Assurance",
];

export const tagColors = {
  "Web App": "#5067FF",
  React: "#61dafb",
  Tailwind: "#38bdf8",
  "UI Design": "#a78bfa",
  Mobile: "#34d399",
  Flutter: "#54c5f8",
  Dart: "#0175c2",
  default: "#5067FF",
};
