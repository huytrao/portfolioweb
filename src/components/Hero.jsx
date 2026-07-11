import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-primary">
      <div
        className={`absolute inset-0 top-[120px] max-w-5xl mx-auto ${styles.paddingX} flex flex-col items-center text-center gap-5`}
      >
        <h1 className={styles.heroHeadText}>Trao An Huy</h1>
        <p className={`${styles.heroSubText} max-w-2xl`}>
          Data engineering. Done simply.
        </p>
        <div className="flex items-center gap-8 mt-2">
          <a href="#work" className="cta-button">
            View my work
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
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute bottom-8 w-full flex justify-center items-center">
        <a href="#about" aria-label="Scroll to about">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, repeatType: "loop" }}
            className="text-secondary text-[24px]"
          >
            &#x2304;
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
