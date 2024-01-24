import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  nextjs,
  nodejs,
  pricewise,
  react,
  python,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  java,
  c,
  cpp,
  dbms,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: java,
    name: "JAVA",
    type: "Programming Language",
  },
  {
    imageUrl: dbms,
    name: "DBMS",
    type: "Database",
  },
  {
    imageUrl: c,
    name: "C",
    type: "Programming Language",
  },
  {
    imageUrl: cpp,
    name: "CPP",
    type: "Programming Language",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Programming Language",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Python",
    company_name: "Intellise IT",
    icon: python,
    iconBg: "#DEF3FD",
    date: "August 2023 - Present",
    points: [
      "Embarking on a journey of continuous learning in web application development using Python.",
      "Exploring advanced concepts and frameworks within the Python ecosystem to enhance application functionality",
      "Ensuring seamless cross-browser compatibility through hands-on experience with graphical user interfaces (GUI) in Python development.",
      "Attended workshops and webinars to expand my knowledge and stay attuned to emerging tools and methodologies in Python application development.",
    ],
  },
  {
    title: "DBMS",
    company_name: "Intellise IT",
    icon: dbms,
    iconBg: "#FDDFDF",
    date: "September 2023 - Present",
    points: [
      "Currently enrolled in an in-depth DBMS course to acquire comprehensive knowledge of database management.",
      "Actively engaging in learning and implementing database concepts, with a primary focus on MySQL.",
      "Acquiring proficiency in executing complex SQL queries for data retrieval, modification, and analysis.",
      "Eagerly looking forward to applying the acquired DBMS knowledge to enhance the functionality and performance of future projects.",
    ],
  },
  {
    title: "Java",
    company_name: "Intellise IT",
    icon: java,
    iconBg: "#FCF7DE",
    date: "April 2023 - June 2023",
    points: [
      "Completed a comprehensive Java course, solidifying skills in web application development.",
      "Skilled in implementing responsive design principles for user-friendly interfaces in Java.",
      "Led the development of an Employee Registration System from inception to implementation.",
      "Hands-on experience in ensuring cross-browser compatibility through Java-based graphical user interfaces (GUI).",
    ],
  },
  {
    title: "Web Designing",
    company_name: "Intellise IT",
    icon: html,
    iconBg: "#DEFDE0",
    date: "August 2022 - October 2022",
    points: [
      "Completed an in-depth course in web design, focusing on key technologies: HTML, CSS, and JavaScript.",
      "Mastered the fundamentals of HTML for structuring content, CSS for styling, and JavaScript for dynamic and interactive features.",
      "Successfully completed practical projects, showcasing the application of HTML, CSS, and JavaScript in real-world scenarios.",
      "Hands-on experience with CSS frameworks (e.g., TailwindCss) for streamlined and efficient web development.",
    ],
  },
  {
    title: "C++",
    company_name: "Intellise IT",
    icon: cpp,
    iconBg: "#F0DEFD",
    date: "October 2022 - Nov 2022",
    points: [
      "Completed an intensive C++ course, solidifying my understanding of this powerful programming language.",
      "Acquired a comprehensive grasp of C++ syntax, principles, and best practices through dedicated coursework.",
      "Successfully implemented theoretical concepts into practical applications, including real-life projects and coding exercises.",
      "Developed proficiency in object-oriented programming (OOP) using C++, mastering concepts like classes, inheritance, and polymorphism.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Pravin223047",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/pravin-kshirsagar-567093229",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Full Stack Discord Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Discord," enabling users to post and engage in 1v1 as well as in group conversations.',
    link: "https://discord-clone-tau-ebon.vercel.app/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Gym Website",
    description:
      "Introducing a cutting-edge gym website meticulously developed with React.js. Immerse yourself in a seamlessly designed platform that not only showcases our fitness programs and offerings but also provides an interactive and engaging experience for users seeking to elevate their fitness journey.",
    link: "https://fitclubpravin.pages.dev/",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Self Portfolio Website",
    description:
      "Crafted a dynamic self-portfolio leveraging the power of React.js, showcasing a personalized and interactive representation of my skills, projects, and achievements. This platform combines a sleek design with seamless navigation, offering visitors an engaging insight into my professional journey and expertise.",
    link: "https://portfolio-pk.pages.dev/",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "IdeaFlow Clone",
    description:
      "Built a complete clone of Ideaflow website using HTML,CSS and JS.",
    link: "https://ideaflow.pages.dev/ideaflow",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Student Registration System",
    description:
      "Crafted a Python application for a streamlined Student Registration System, empowering administrators with functions like adding, updating, and deleting student profiles. The inclusion of admin protection ensures secure management, enhancing the efficiency and security of the registration process.",
    link: "https://github.com/Pravin223047/Student_Registration_System_Python",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Employee Management System",
    description:
      "Created a Java application for an efficient Employee Management System, providing administrators with essential functions such as adding, updating, and deleting employee profiles. The system goes beyond by incorporating a performance-based salary calculation feature. With added admin protection, this application ensures secure and streamlined management, elevating both efficiency and security in the employee management process.",
    link: "https://github.com/Pravin223047/Employee_Managment_system_Java",
  },
];
