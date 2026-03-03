import KulinerGo from "../src/assets/portfolio/kuliner-go.png";
import Adma from "../src/assets/portfolio/adma-mob.png";
import Antria from "../src/assets/portfolio/antria.png";
import Tactin from "../src/assets/portfolio/tactin.png";
import Portfolio from "../src/assets/portfolio/portfolio.png";

export const projects = [
  {
    id: 1,
    title: "Kuliner Go",
    description: "Mobile app for discovering and ordering local cuisine.",
    tags: ["Flutter", "Dart", "Mobile App", "Firebase"],
    category: "Mobile Apps",
    image: KulinerGo,
    link: "https://github.com/AhmadNaufal2525/kuliner-go-mobile.git",
  },
  {
    id: 2,
    title: "ADMA App",
    description: "Mobile app for tracking tools and equipment.",
    tags: [
      "Flutter",
      "Dart",
      "Mobile App",
      "Firebase",
      "BLoC",
      "MongoDB",
      "Node.js",
    ],
    category: "Mobile Apps",
    image: Adma,
    link: "https://github.com/AhmadNaufal2525/ADMA-APP.git",
  },
  {
    id: 3,
    title: "Antria App",
    description: "Mobile app for managing appointments and bookings.",
    tags: [
      "Flutter",
      "Dart",
      "Mobile App",
      "Clean Architecture",
      "API Integration",
      "BLoC",
    ],
    category: "Mobile Apps",
    image: Antria,
    link: "https://github.com/Antria-id/antria-mitra-mobile.git",
  },
  {
    id: 4,
    title: "Tactin App",
    description:
      "Mobile application designed to translate documents and text into accessible formats for visually impaired users.",
    tags: ["Flutter", "Dart", "Mobile App"],
    category: "Mobile Apps",
    image: Tactin,
    link: "https://github.com/AhmadNaufal2525/braille-app.git",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects and skills.",
    tags: ["React", "Tailwind CSS", "Web App"],
    category: "Web Development",
    image: Portfolio,
    link: "https://github.com/AhmadNaufal2525/portfolio-web-react.git",
  },
];

export const ITEMS_PER_PAGE = 6;

export const categories = ["All", "Web Development", "Mobile Apps"];

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
