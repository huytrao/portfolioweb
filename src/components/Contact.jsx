import { useState, useRef } from "react";
import { motion } from "framer-motion";


import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_r0jcplm",
        "template_1t76uxq",
        {
          form_name: form.name,
          to_name: "Liron",
          from_email: form.email,
          to_email: "contact@mail.com",
          message: form.message,
        },
        "Jqq9AvwIuSjoMiA5c"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-20 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      

      <motion.div
  variants={slideIn("right", "tween", 0.2, 1)}
  className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
>
  <div style={{ color: '#E0E0E0', padding: '20px', borderRadius: '10px' }}>
    <h2 align="center" style={{ color: '#FFD700', fontSize: '2.5rem', marginBottom: '20px' }}>Huytrao's Skill Objective in the Big Data Area</h2>
    <div align="left">
      <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
        <li>
          <strong style={{ color: '#00BFFF' }}>Programming Skills:</strong>
          <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
            <li><strong>Python & R:</strong> Popular languages for data analysis with extensive libraries like Pandas, NumPy, and Scikit-learn.</li>
          </ul>
        </li>
        <li>
          <strong style={{ color: '#00BFFF' }}>Database Knowledge:</strong>
          <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
            <li><strong>SQL:</strong> Essential for working with relational databases (RDBMS) like MySQL, PostgreSQL.</li>
            <li><strong>NoSQL:</strong> Proficiency in NoSQL databases like MongoDB, Cassandra for handling unstructured data.</li>
          </ul>
        </li>
        <li>
          <strong style={{ color: '#00BFFF' }}>Distributed Data Processing:</strong>
          <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
            <li><strong>Apache Hadoop:</strong> Knowledge of Hadoop ecosystem including HDFS, MapReduce.</li>
            <li><strong>Apache Spark:</strong> Expertise in Spark for fast and efficient data processing, especially with large datasets.</li>
          </ul>
        </li>
        <li>
          <strong style={{ color: '#00BFFF' }}>Real-time Data Processing:</strong>
          <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
            <li><strong>Apache Kafka:</strong> Proficiency in Kafka for real-time data streaming and analysis.</li>
            <li><strong>Apache Flink:</strong> Use Flink for flexible and efficient stream processing.</li>
          </ul>
        </li>
        <li>
          <strong style={{ color: '#00BFFF' }}>Data Science & Analytics:</strong>
          <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
            <li><strong>Machine Learning & AI:</strong> Understanding of ML, deep learning models, and their applications in big data analysis.</li>
            <li><strong>Data Visualization:</strong> Skills in tools like Tableau, Power BI for clear and effective data communication.</li>
          </ul>
        </li>
        <li>
          <strong style={{ color: '#00BFFF' }}>Cloud Computing:</strong>
          <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
            <li><strong>IBM, Azure:</strong> Ability to deploy and manage big data solutions on cloud platforms.</li>
          </ul>
        </li>
        <li>
          <strong style={{ color: '#00BFFF' }}>Data Security:</strong>
          <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
            <li><strong>Data Governance:</strong> Understanding of data governance and protection, including compliance with regulations like GDPR, CCPA.</li>
            <li><strong>Encryption:</strong> Skills in data encryption to ensure secure data storage and transmission.</li>
          </ul>
        </li>
        <li>
          <strong style={{ color: '#00BFFF' }}>Analytical & Problem-Solving Skills:</strong> Ability to analyze, think logically, and devise creative solutions to challenges in big data management and analysis.</li>
        <li>
          <strong style={{ color: '#00BFFF' }}>Soft Skills:</strong>
          <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
            <li><strong>Communication:</strong> Effective communication skills for collaboration with various stakeholders.</li>
            <li><strong>Teamwork:</strong> Ability to work in teams on complex projects involving multiple departments.</li>
          </ul>
        </li>
        <li>
          <strong style={{ color: '#00BFFF' }}>Continuous Learning:</strong> Keeping up with the rapidly evolving big data landscape and continuously learning new technologies.</li>
      </ul>
    </div>
  </div>
</motion.div>

    </div>
  );
};

export default SectionWrapper(Contact, "contact");
