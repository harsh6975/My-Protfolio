import p11 from "../../Images/Project/1/1.png";
import p12 from "../../Images/Project/1/2.png";
import p13 from "../../Images/Project/1/3.png";
import p14 from "../../Images/Project/1/4.png";
import p15 from "../../Images/Project/1/5.png";
import p21 from "../../Images/Project/2/1.png";
import p22 from "../../Images/Project/2/2.png";
import p23 from "../../Images/Project/2/3.png";
import p24 from "../../Images/Project/2/4.png";
import p31 from "../../Images/Project/3/1.png";
import p33 from "../../Images/Project/3/3.png";
import p34 from "../../Images/Project/3/4.png";
import p35 from "../../Images/Project/3/5.png";
import p36 from "../../Images/Project/3/6.png";
import p37 from "../../Images/Project/3/7.png";
import p38 from "../../Images/Project/3/8.png";
import p39 from "../../Images/Project/3/9.png";
import p310 from "../../Images/Project/3/10.png";
import p311 from "../../Images/Project/3/11.png";
import p313 from "../../Images/Project/3/13.png";
import p314 from "../../Images/Project/3/14.png";
import p315 from "../../Images/Project/3/15.png";
import p51 from "../../Images/Project/5/1.png";
import p52 from "../../Images/Project/5/2.png";
import p53 from "../../Images/Project/5/3.png";
import p54 from "../../Images/Project/5/4.png";
import p55 from "../../Images/Project/5/5.png";
import p56 from "../../Images/Project/5/6.png";
import p57 from "../../Images/Project/5/7.png";
import p58 from "../../Images/Project/5/8.png";
import p59 from "../../Images/Project/5/9.png";
import p61 from "../../Images/Project/6/1.png";
import p71 from "../../Images/Project/7/1.png";
import p72 from "../../Images/Project/7/2.png";
import p73 from "../../Images/Project/7/3.png";
import p74 from "../../Images/Project/7/4.png";
import p75 from "../../Images/Project/7/5.mp4";
export const projects = [
  {
    name: "CodeBook",
    label: "A social media website",
    banner: p11,
    tools: ["NodeJs", "EJS", "MongoDB", "PassportJs"],
    files: [p11, p12, p13, p14, p15],
    link: "https://github.com/harsh6975/CodeBook.git",
    type: "Personal Project",
    description:
      "The website is a social platform with login authentication, enabling users to connect with friends, share updates, and engage through comments. It employs PassportJS for secure user login and session management. The platform uses ExpressJS to develop RESTful APIs for managing users, posts, and comments. MongoDB serves as the database infrastructure, efficiently storing and managing project data. FrontEnd development uses EJS for dynamic rendering of server-side templates.",
  },
  {
    name: "My Movies",
    label: "The movies website",
    banner: p21,
    tools: ["React", "Redux", "Firebase"],
    files: [p21, p22, p23, p24],
    type: "Personal Project",
    link: "mymovies-1e955.web.app/",
    description:
      "The website is a movie collection platform that allows users to explore, add, remove, and search for movies. Users can also create lists of their favorite movies for easy access and management",
  },
  {
    name: "TheraCure",
    label: "Doctor's website",
    banner: p31,
    tools: ["React", "Node", "JWT", "MongoDB"],
    files: [
      p31,
      p33,
      p34,
      p35,
      p36,
      p37,
      p38,
      p39,
      p310,
      p311,
      p313,
      p314,
      p315,
    ],
    type: "Client-Specific Project",
    description:
      "The web application is designed to revolutionize appointment booking and management for doctors and patients. Powered by the dynamic MERN stack (MongoDB, Express.js, React, and Node.js), our platform offers a seamless experience for both healthcare providers and patients. With a comprehensive appointment workflow in place, patients receive timely email notifications upon booking, while administrators efficiently review and respond to appointment requests. Rest assured, we take security seriously by implementing authentication and authorization techniques that adhere to industry best practices and compliance standards, ensuring the safeguarding of patient data. Join us now to embrace a secure and efficient appointment management system, simplifying healthcare interactions for all.",
  },
  {
    name: "HeavenX",
    label: "A mobile application",
    banner: p21,
    tools: ["React", "Node", "MongoDB", "AWS"],
    files: [],
    link: "",
    description: "",
    type: "Personal Project",
  },
  {
    name: "Snake Game",
    label: "A gaming website",
    banner: p71,
    tools: ["HTML", "CSS", "Javascript"],
    files: [p71, p72, p73, p74, p75],
    type: "Personal Project",
    link: "https://github.com/harsh6975/Snake-Game",
    description:
      "The Snake Game is a web application built using HTML, CSS, and JavaScript. It offers a classic gaming experience where players control a snake to collect food and grow in size. The objective is to avoid collisions with the snake's own body and the game boundaries, challenging players to achieve the highest possible score.",
  },
  {
    name: "Bank Management",
    label: "A console application",
    banner: p51,
    tools: ["C++", "OOPs"],
    files: [p51, p52, p53, p54, p55, p56, p57, p58, p59],
    type: "Personal Project",
    link: "https://github.com/harsh6975/Bank-Management.git",
    description:
      "The Bank Management System is a C++ console application that provides basic banking functionality. It utilizes Object-Oriented Programming (OOPs) concepts to facilitate tasks related to banking operations, such as account management, transactions, and balance inquiries.",
  },
  {
    name: "ReviewZone",
    label: "A mobile application",
    banner: p21,
    tools: [],
    files: [],
    link: "",
    description: "",
    type: "Personal Project",
  },
  {
    name: "Todo App",
    label: "A mobile application",
    banner: p61,
    tools: ["React Native"],
    files: [p61],
    link: "",
    description:
      "Introducing our Simple Todo Mobile Application, a powerful tool designed to streamline task management and boost productivity. Seamlessly built with React Native, HTML, and CSS, this app offers an intuitive and user-friendly interface for organizing daily tasks. Easily add new to-do items, set due dates, and mark tasks as complete with just a tap.",
    type: "Personal Project",
  },
];
