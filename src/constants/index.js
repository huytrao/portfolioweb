import {
  mobile,
  backend,
  creator,
  web,
  UofS,
  meta,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI / Deep Learning",
    icon: web,
  },
  {
    title: "Robotics & Systems",
    icon: mobile,
  },
  {
    title: "Data Engineering",
    icon: backend,
  },
  {
    title: "MLOps & Deployment",
    icon: creator,
  },
];

const technologies = [
  { name: "Python" },
  { name: "PyTorch" },
  { name: "TensorFlow" },
  { name: "C++" },
  { name: "SQL" },
  { name: "ROS 2" },
  { name: "Google Cloud" },
  { name: "Azure" },
  { name: "Docker" },
  { name: "FastAPI" },
  { name: "MLflow" },
  { name: "LangChain" },
  { name: "Kafka" },
  { name: "Power BI" },
  { name: "Git" },
  { name: "Linux" },
];

const experiences = [
  {
    title: "AI Engineer Trainee",
    company_name: "Vingroup AI in Action",
    icon: meta,
    iconBg: "#f5f5f7",
    date: "May 2026 – Aug 2026",
    points: [
      "Selected for a highly competitive 12-week full-time program by Vingroup & VinUni.",
      "Completed 6 weeks of advanced training in AI application architecture, data infrastructure design, and the AI product development lifecycle.",
      "Executed a 6-week hands-on AI project at a Vingroup tech subsidiary, deploying a model into production with senior AI engineers and product managers.",
      "Applied end-to-end deployment practices — data preprocessing, model training, API packaging, and iterative tuning under real business constraints.",
    ],
  },
  {
    title: "B.Sc. Data Science",
    company_name: "University of Science, VNU-HCMC",
    icon: UofS,
    iconBg: "#f5f5f7",
    date: "Oct 2022 – Jul 2026 (expected)",
    points: [
      "GPA 3.5 / 4.0.",
      "Undergraduate thesis: multimodal attention recognition on the DIPSER dataset (facial video + smartwatch IMU fusion).",
      "IBM Data Engineer Professional Certificate (Coursera, 2023) and AI Engineer Bootcamp (Udemy, 2025).",
      "IELTS 5.5 (Reading 6.5) | TOEIC L&R 745/990.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "IBM Data Engineering",
    name: "Huy Trao",
    designation: "Data Engineer",
    company: "Coursera",
    image:
      "https://github.com/user-attachments/assets/cc089dac-b9cd-4623-bf6b-631190b33760",
  },
  {
    testimonial: "Microsoft Azure Data Engineering Associate (DP-203)",
    name: "Huy Trao",
    designation: "Data Engineer",
    company: "Coursera",
    image:
      "https://github.com/user-attachments/assets/81b284a3-9523-4b0c-b773-73a5899ebe16",
  },
  {
    testimonial: "IBM Data Warehouse Engineer",
    name: "Huy Trao",
    designation: "Data Engineer",
    company: "Coursera",
    image:
      "https://github.com/user-attachments/assets/515d2ea1-8321-4995-81b0-d80273c86214",
  },
  {
    testimonial: "Hands-on Introduction to Linux Commands and Shell Scripting",
    name: "Huy Trao",
    designation: "Linux",
    company: "Coursera",
    image:
      "https://github.com/user-attachments/assets/f576dce1-1194-4f5a-8240-65106d1920c9",
  },
  {
    testimonial: "AI for Everyone",
    name: "Huy Trao",
    designation: "DeepLearning.AI",
    company: "Coursera",
    image:
      "https://github.com/user-attachments/assets/e7bbfc1d-85e0-4aa6-b18a-4eddce6201bf",
  },
];

const projects = [
  {
    name: "VDA 5050 AMR Acceptance Test Bench",
    description:
      "Automated pre-deployment acceptance system for multi-vendor AMR fleets. A three-boundary pipeline — MQTT broker (VDA 5050 contract), ROS 2/Gazebo robot adapter, and a live Google Cloud telemetry ingestor (Pub/Sub → BigQuery) — with 9 automated tests and PASS/FAIL release gating.",
    tags: [
      { name: "ROS 2" },
      { name: "Gazebo" },
      { name: "MQTT" },
      { name: "Google Cloud" },
      { name: "BigQuery" },
    ],
    source_code_link: "https://github.com/huytrao",
  },
  {
    name: "Smart Home PHWM — AI Apartment Handover & Warranty",
    description:
      "Production full-stack platform for apartment defect and warranty lifecycle. Multi-model AI pipeline (Roboflow CV with 50+ defect classes, Gemini Vision, Groq reasoning) with HITL routing, a RAG Operations Copilot, and a 4-role ticket system — 900+ tests across 149 shipped tasks.",
    tags: [
      { name: "Computer Vision" },
      { name: "RAG" },
      { name: "Gemini" },
      { name: "Full-stack" },
    ],
    source_code_link: "https://github.com/huytrao",
  },
  {
    name: "Multimodal Attention Recognition — Thesis",
    description:
      "Dual-stream fusion of facial video (MobileNetV3 + BiLSTM) and smartwatch IMU signals for three-class student attention recognition on the DIPSER dataset. Compared four fusion architectures; Tensor Fusion reached Macro-F1 0.5806, beating both single-modality baselines.",
    tags: [
      { name: "PyTorch" },
      { name: "Multimodal Fusion" },
      { name: "BiLSTM" },
      { name: "Cross-Attention" },
    ],
    source_code_link: "https://github.com/huytrao",
  },
  {
    name: "EEG-Based Mental Attention Classification",
    description:
      "Three-class attention recognition (Focused, Unfocused, Drowsy) from raw EEG time-series. A CNN classifier reached 87% test accuracy, clearly outperforming SVM and KNN baselines.",
    tags: [
      { name: "EEG" },
      { name: "CNN" },
      { name: "PyTorch" },
      { name: "Scikit-learn" },
    ],
    source_code_link: "https://github.com/huytrao",
  },
  {
    name: "RAG-Powered AI Diary Agent",
    description:
      "AI agent for personal memory retrieval and mood tracking. Full RAG pipeline with LangChain, a vector database, FastAPI, Docker, and Streamlit — deployed live on Hugging Face Spaces.",
    tags: [
      { name: "RAG" },
      { name: "LangChain" },
      { name: "FastAPI" },
      { name: "Docker" },
    ],
    source_code_link: "https://github.com/huytrao",
  },
  {
    name: "End-to-End MLOps: Credit Default Prediction",
    description:
      "Production-ready ML service: XGBoost REST API with FastAPI, Gradio, Docker, and MLflow, wired to GitHub Actions CI/CD and deployed on Render with automated model versioning on every push.",
    tags: [
      { name: "XGBoost" },
      { name: "MLflow" },
      { name: "CI/CD" },
      { name: "FastAPI" },
    ],
    source_code_link: "https://github.com/huytrao",
  },
  {
    name: "Enterprise Real-Time Data Pipeline with Azure",
    description:
      "Medallion pipeline (Bronze → Silver → Gold) on Azure Data Lake and Synapse Analytics with Power BI dashboards, letting stakeholders monitor business KPIs in real time without writing SQL.",
    tags: [
      { name: "Azure" },
      { name: "Synapse" },
      { name: "Power BI" },
    ],
    source_code_link:
      "https://github.com/huytrao/build-simple-pipeline-realtime-with-Azure-data-engineer-project",
  },
  {
    name: "Real Estate Price Prediction — Ho Chi Minh City",
    description:
      "End-to-end predictive model built from web-scraped listings: Selenium + BeautifulSoup crawling, LLM parsing of unstructured descriptions, price regression, and an interactive Hugging Face demo with geospatial heatmaps.",
    tags: [
      { name: "Machine Learning" },
      { name: "LLM" },
      { name: "Web Scraping" },
    ],
    source_code_link:
      "https://github.com/huytrao/Realestate-DataScience-PredictHousePrice",
  },
];

export { services, technologies, experiences, testimonials, projects };
