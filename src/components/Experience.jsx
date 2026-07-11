import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#f5f5f7",
        color: "#1d1d1f",
        boxShadow: "none",
        borderRadius: "18px",
      }}
      contentArrowStyle={{ borderRight: "7px solid #f5f5f7" }}
      date={experience.date}
      dateClassName="text-secondary"
      iconStyle={{ background: experience.iconBg, boxShadow: "0 0 0 4px #e8e8ed" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-ink text-[22px] font-semibold tracking-tight">
          {experience.title}
        </h3>
        <p className="text-secondary text-[15px]" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-ink text-[14px] pl-1 leading-[1.6]"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Where I&rsquo;ve been</p>
        <h2 className={styles.sectionHeadText}>Experience.</h2>
      </motion.div>

      <div className="mt-16 flex flex-col">
        <VerticalTimeline lineColor="#e8e8ed">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
