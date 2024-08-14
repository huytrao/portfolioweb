import {
  // data_science,
  // data_engineer,
  // devOps,
  // software_engineer,
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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  // project_1,
  jobit,
  tripguide,
  threejs,
  UofS,

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
    title: "Objective",
  },
  {
    id: "project",
    title: "Project",
  },
];

const services = [
  {
    title: "Data Science",
    icon: web,
  },
  {
    title: "Data Engineer",
    icon: mobile,
  },
  {
    title: "Data Analysis",
    icon: backend,
  },
  {
    title: "Data Scientist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "Azure",
    icon: css,
  },
  {
    name: "Power BI",
    icon: javascript,
  },
  {
    name: "Anaconda",
    icon: typescript,
  },
  {
    name: "Kafka",
    icon: reactjs,
  },
  {
    name: "Ubuntu-linux",
    icon: redux,
  },
  {
    name: "IBM",
    icon: tailwind,
  },
  {
    name: "Hadoop EcoSystem",
    icon: nodejs,
  },
  {
    name: "Apache Spark",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Learning at University",
    company_name: "University of Science HCMC (HCMUS)",
    icon: UofS,
    iconBg: "#EEEE",
    date: "october 2022 - ? 2026",
    points: [
      "Learning basic knowledge about computer science and data science",
      "Collaborating with cross-functional teams including designers, product managers, and other develope.",
      "Making new acquaintances.",
      "Participating in some exams and projects.",
    ],
  },
  {
    title: "Learning at Mutiple sources",
    company_name: "Coursera, hackerRank, official document ... etc",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - entire life",
    points: [
      "Learning DataScience, Data engineer...",
      "Earn Certification.",
      "Doing projects.",
    ],
  },
  {
    title: "Finding Opportunity",
    company_name: "Participating in competitions, obtaining internships, and displaying my abilities... ",
    icon: shopify,
    iconBg: "#383E56",
    date: "August 2024",
    points: [
      "Joining some competitions about data science, BigData...etc",
      "Searching for internships Opportunities.",
      "Building myself more professionally.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "IBM Data Engineering",
    name: "Huy Trao",
    designation: "Data Engineer",
    company: "Coursera",
    image: "https://github.com/user-attachments/assets/cc089dac-b9cd-4623-bf6b-631190b33760",
  },
  {
    testimonial:
      "Microsoft Azure Data Engineering Associate (DP-203)",
    name: "Huy Trao",
    designation: "Data Engineer",
    company: "Coursera",
    image: "https://github.com/user-attachments/assets/81b284a3-9523-4b0c-b773-73a5899ebe16",
  },
  {
    testimonial:
      "IBM Data Warehouse Engineer",
    name: "Huy Trao",
    designation: "Data Engineer",
    company: "Coursera",
    image: "https://github.com/user-attachments/assets/515d2ea1-8321-4995-81b0-d80273c86214",
  },
  {
    testimonial:
      "Hands-on Introduction to Linux Commands and Shell Scripting",
    name: "Huy Trao",
    designation: "Ubuntu",
    company: "Coursera",
    image: "https://github.com/user-attachments/assets/f576dce1-1194-4f5a-8240-65106d1920c9",
  },
  {
    testimonial:
      "AI for Everyone",
    name: "Huy Trao",
    designation: "Deepleanring",
    company: "Coursera",
    image: "https://github.com/user-attachments/assets/e7bbfc1d-85e0-4aa6-b18a-4eddce6201bf",
  },

];

const projects = [
  {
    name: "Predict House Real Estate Price in Ho Chi Minh City",
    description:
      " By analyzing historical sales data, property features, and neighborhood characteristics, the goal is to create an accurate forecasting tool for real estate values.",
    tags: [
      {
        name: "Machine Learning model",
        color: "blue-text-gradient",
      },
      {
        name: "llm",
        color: "green-text-gradient",
      },
       {
        name: "EDA",
        color: "pink-text-gradient",
      },
      {
        name: "Group Project",
        color: "grey-text-gradient",
      },
      {
        name: "Crawl data",
        color: "orange-text-gradient",
      },
      {
        name: "Heatmap",
        color: "pink-text-gradient",
      },
    ],
    image: "https://github.com/user-attachments/assets/43ffbe9a-d9c5-4f92-b7ca-31bc471dc822",
    source_code_link: "https://github.com/huytrao/Realestate-DataScience-PredictHousePrice",
  },
  {
    name: "Simple Pipeline Using Azure",
    description:
      "To create a cloud robust and scalable data pipeline, we leverage several tools and services.",
    tags: [
      {
        name: "Azure",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "powerBI",
        color: "pink-text-gradient",
      },
      {
        name: "Personal Project",
        color: "grey-text-gradient",
      },

    ],
    image: carrent,
    source_code_link: "https://github.com/huytrao/build-simple-pipeline-realtime-with-Azure-data-engineer-project",
  },

];

export { services, technologies, experiences, testimonials, projects };
