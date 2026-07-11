import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.6)}
    className="card xs:w-[240px] w-full py-10 px-8 flex flex-col items-center gap-5"
  >
    <img src={icon} alt={title} className="w-12 h-12 object-contain" />
    <h3 className="text-ink text-[17px] font-semibold text-center">{title}</h3>
  </motion.div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 text-secondary text-[19px] max-w-3xl leading-[1.6]"
      >
        I&rsquo;m an AI Engineer and Data Science graduate (GPA 3.5/4.0) with
        hands-on experience across deep learning research, robotics systems
        engineering, and production AI deployment. Selected for the Vingroup AI
        in Action program, I&rsquo;ve built everything from a VDA 5050 AMR
        acceptance test bench on ROS 2 and Google Cloud to multimodal fusion
        research and production ML systems serving real-time inference.
      </motion.p>

      <div className="mt-16 flex flex-wrap gap-6 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
