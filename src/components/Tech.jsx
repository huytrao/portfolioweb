import { motion } from "framer-motion";

import { styles } from "../styles";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>Toolbox</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <div className="mt-12 flex flex-row flex-wrap justify-center gap-3 max-w-3xl mx-auto">
        {technologies.map((technology) => (
          <span
            key={technology.name}
            className="card px-5 py-2.5 text-[15px] text-ink"
          >
            {technology.name}
          </span>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
