import { motion } from "framer-motion";
import { linkin } from "../assets";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { github } from "../assets";

const Hero = () => {
  return (
    // <section className={`relative w-full h-screen mx-auto`}>
    <section className={`relative w-full h-screen mx-auto`} style={{ 
      background: 'linear-gradient(45deg, #007bff, #8A2BE2 50%, #007bff)' 
    }}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, I'm <span className="text-[#DAA520]">Trao An Huy</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Let's scroll to discover HuyTrao's Porfolio <br className="sm:block hidden" />
          </p>
        </div>
      </div>

  <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
      {/* icon */}
      <div className="relative">
  <div className="absolute inset-0 flex flex-col-reverse justify-center items-end m-3 card-img_hover">
    {/* GitHub Icon */}
    <div
      onClick={() => window.open("https://github.com/huytrao", "_blank")}
      className="white-gradient w-35 h-16 rounded-full flex justify-center items-below absolute-bottom-right cursor-pointer mt-3"
    >
      <img
        src={github}
        alt="github"
        className="w-1/2 h-1/2 object-contain"
      />
    </div>  

    {/* LinkedIn Icon */}
    <div
      onClick={() => window.open("https://www.linkedin.com/in/huy-trao-805062184/", "_blank")}
      id="yourElementId"
      className="white-gradient w-60 h-30 rounded-full flex justify-center items-below cursor-pointer mt-3 absolute-bottom-left hidden-part"
      onmouseover="expandElement()"
    >
      <img
        src={linkin}
        alt="linkin"
        className="w-1/2 h-1/2 object-contain"
      />
    </div>
  </div>
  <div className="overlay" style={{position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, pointerEvents: 'none'}}></div>
</div>



    </section>
  );
};

export default Hero;
