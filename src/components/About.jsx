import React from "react";
import { motion } from "framer-motion";
import '../VerticalHeading.css'; // Import the CSS file

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import resumePdf from "../assets/GauriShirke_Resume.pdf";


// Import images from the assets folder



const About = () => {
  return (
    <>
        <div>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview</h2>
        </div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a MERN Stack enthusiast with a deep interest in building modern web applications👨🏻‍💻. <br /> 
        Currently pursuing 🎓 BE in Computer Science and Engineering from PRMIT&R College of Engineering Badnera Amravati.
        <br />
        Other than technical skills, I love sports 🏀. <br />
        And I continually 🚀 push myself to increase my knowledge and skill set because I enjoy learning new things and challenging myself.
      </motion.p> 

      <div className="mt-6">
        <a
          href={resumePdf}
          download="GauriShirke_Resume.pdf"
          className="inline-block rounded-lg bg-[#915EFF] px-6 py-3 text-white font-semibold shadow-md transition-transform duration-200 hover:scale-[1.02] hover:bg-[#7d4ddf]"
        >
          Download Resume
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
