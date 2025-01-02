import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  Javai,
  pythoni,
  Springboot,
  hephium,
  download,
  Deloitte,
  carrent,
  jobit,
  tripguide,
  Oyesters,
} from "../assets";

export const navLinks = [
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

const services = [
  {
    title: "Data Science",
    icon: web,
  },
  {
    title: "Nodejs Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI/ML Developer",
    icon: creator,
  },
];

const technologies = [
  

  {
    name: "JavaScript",
    icon: javascript,
  },
  {
      name: "Java",
    icon: Javai,
  },
  {
    name: "Python",
    icon: pythoni,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Hephium LLC",
    icon: hephium,
    iconBg: "#383E56",
    date: "Jan 2024 - Present",
    points: [
      "Developed and implemented 12+ APIs for real-time audit management and dynamic ticket template creation feature, using typescript and GraphQL in backend.",
      "Utilized Redux Toolkit to manage state, aligning structure with GraphQL for seamless data retrieval, reducing fetch time from 22.7ms to 12.2ms.",
      "Built authentication flow and real-time chat messaging with Firebase and GraphQL."
    ],
  },
  {
    title: "AI/ML Software Intern",
    company_name: " BUILD SYNC",
    icon: download,
    iconBg: "#E6DEDD",
    date: " Aug 2024 - Oct 2024",
    points: [
      "Conducted model performance analysis of SceneCraft and Text2BIM LLM based multi agent frameworks for AI agents, enabling the synthesis of 3D scene generation into Blender code for automated construction plan design based on user input measurements."
    ],
  },
  {
    title: " Software Developer",
    company_name: " Deloitte Consulting",
    icon: Deloitte,
    iconBg: "#383E56",
    date: "Aug 2021 - July 2022",
    points: [
      "Developed a keyword-specific extractive text summarizer using NLP and deep learning, reducing document review time by 70%.",
      "Built an ETL pipeline using AWS Glue, transforming data for querying in AWS Athena and SQL execution",
      "Automated data conversion from Excel to JSON, reducing project time by 25%.",
      "Designed AWS Lambda functions to scrape data from APIs and SQL databases, and manage access removal for terminated users.",
      "Built and deployed a serverless GraphQL API using Docker, AWS AppSync, and RDS",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Oyesters",
    icon: Oyesters,
    iconBg: "#E6DEDD",
    date: "June 2020 - July 2021",
    points: [
      "Performed exploratory data analysis on healthcare data, reducing project costs by 20% through Tableau dashboards.",
       "Developed an ML model using Logistic Regression to predict the severity of mental illnesses with 90% accuracy.",
      "Implemented a prediction model using KNN to forecast healthcare plans based on PII and medical history.",
      "Led the migration process from IDMS to Db2 SQL, successfully designing the migration strategy.",
      "Developed, deployed, and maintained optimized code in production environments",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
