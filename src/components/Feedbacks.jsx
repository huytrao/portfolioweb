import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({ index, testimonial, designation, company, image }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.15, 0.6)}
    className="card p-8 xs:w-[300px] w-full text-center"
  >
    <img
      src={image}
      alt={testimonial}
      className="mx-auto w-full h-auto rounded-xl object-cover"
    />
    <p className="text-ink font-semibold text-[16px] mt-5 tracking-tight">
      {testimonial}
    </p>
    <p className="mt-1 text-secondary text-[13px]">
      {designation} · {company}
    </p>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Credentials</p>
        <h2 className={styles.sectionHeadText}>Certifications.</h2>
      </motion.div>

      <div className="mt-16 flex flex-wrap gap-6 justify-center">
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.testimonial} index={index} {...testimonial} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Feedbacks, "certifications");
