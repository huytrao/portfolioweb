import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Contact = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>
          Let&rsquo;s build something.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 text-secondary text-[19px] max-w-2xl leading-[1.6]"
      >
        I&rsquo;m looking for an AI Engineer role where I can ship high-impact
        AI products. If that sounds like your team, I&rsquo;d love to talk.
      </motion.p>

      <motion.div
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-10 flex flex-col sm:flex-row items-center gap-6"
      >
        <a href="mailto:traohuy098@gmail.com" className="cta-button">
          Email me
        </a>
        <a
          href="https://github.com/huytrao"
          target="_blank"
          rel="noreferrer"
          className="cta-link text-[17px]"
        >
          GitHub &rsaquo;
        </a>
        <a
          href="https://www.linkedin.com/in/huy-trao-805062184/"
          target="_blank"
          rel="noreferrer"
          className="cta-link text-[17px]"
        >
          LinkedIn &rsaquo;
        </a>
      </motion.div>

      <p className="mt-16 text-secondary text-[13px]">
        Ho Chi Minh City · (+84) 868 002 348 · traohuy098@gmail.com
      </p>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
