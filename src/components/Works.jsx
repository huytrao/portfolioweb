import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, source_code_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.6)}
      className="card p-8 sm:w-[360px] w-full flex flex-col"
    >
      <h3 className="text-ink font-semibold text-[20px] tracking-tight">
        {name}
      </h3>
      <p className="mt-3 text-secondary text-[15px] leading-[1.6] flex-1">
        {description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag.name} className="text-[13px] text-secondary">
            #{tag.name}
          </span>
        ))}
      </div>
      <a
        href={source_code_link}
        target="_blank"
        rel="noreferrer"
        className="cta-link mt-5 text-[15px]"
      >
        View on GitHub &rsaquo;
      </a>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Selected work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 text-secondary text-[17px] max-w-3xl leading-[1.6]"
      >
        From robotics acceptance testing to production AI platforms — each
        project below links to its repository.
      </motion.p>

      <div className="mt-16 flex flex-wrap gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "project");
