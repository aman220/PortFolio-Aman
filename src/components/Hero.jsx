import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas, StarsCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex flex-row overflow-hidden">
      <div className="flex flex-grow">
        {/* left container */}
        <div className="flex flex-col justify-center items-center h-full w-1/2">
          <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto px-5 flex flex-row items-start gap-5">
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>

            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm <span className="text-[#915EFF]">Aman </span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                Software Developer Intern
                <br className="sm:block hidden" />
                Mobile and web applications
              </p>
            </div>
          </div>
        </div>

        {/* Right container */}
        <div className="relative flex flex-col justify-center items-center h-full w-1/2">
          <div className="absolute  ml-20 inset-0">
            <ComputersCanvas />
          </div>
          <img
            className="absolute w-50 h-50  mr-20  z--1 object-contain"
            src="./src/assets/person.png"
            alt="person"
          />
        </div>
      </div>
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
    </section>
  );
};

export default Hero;
