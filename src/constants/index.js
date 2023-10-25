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
    title: "Contact",
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
    title: "DevOps Engineer",
    icon: backend,
  },
  {
    title: "Software Engineer",
    icon: creator,
  },
];

const technologies = [
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
      "Learning DevOps, Data engineer...",
      "Earn Certification.",
      "Doing projects.",
    ],
  },
  {
    title: "Finding Opportunity",
    company_name: "Participating in competitions, obtaining internships, and displaying my abilities... ",
    icon: shopify,
    iconBg: "#383E56",
    date: "october 2023",
    points: [
      "Joining some competitions about data science, devOps...etc",
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
      "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
    name: "Charles Darwin",
    // designation: "CTO",
    // company: "456 Enterprises",
    image: "https://th.bing.com/th/id/OIP.psEkZ30gGcpxVF5Jq8dsEgHaJQ?pid=ImgDet&w=600&h=750&rs=1",
  },
  {
    testimonial:
      "The only way to do great work is to love what you do.",
    name: "Steve Jobs",
    // designation: "CFO",
    // company: "Acme Co",
    image: "https://cdn3.vox-cdn.com/thumbor/7S8n1XL0IChDdcoEug7cP_qBnV0=/0x104:438x396/1280x854/cdn0.vox-cdn.com/imported_assets/846325/steve-jobs-1.jpg",
  },
  {
    testimonial:
      "Life is inherently unfair - get used to it                                                                           ",
    name: "Bill Gates,",
    // designation: "COO",
    // company: "DEF Corp",
    image: "https://content.fortune.com/wp-content/uploads/2020/09/CNV.10.20.FORTUNE_BILL_AND_MELINDA_GATES_030.jpg",
  },
];

const projects = [
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
    ],
    image: carrent,
    source_code_link: "https://github.com/huytrao/build-simple-pipeline-realtime-with-Azure-data-engineer-project",
  },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
