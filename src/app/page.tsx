"use client";
import Experience from "@/components/experience";
import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import Contact from "@/components/contact/Contact";
import MaterialYou from "@/components/MaterialYou";
import Nav from "@/components/navbar/Nav";
import DynamicMaterialYou from "@/components/DynamicMaterialYou";
import { motion } from "framer-motion";

// import Particle from "@/components/particles";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  // Func Swiper

  return (
    <div className="w-full h-full gap-10 mb-6 mx-auto no-overflow">
      {/* Hero */}
      <Hero />
      {/* End Hero */}

      {/* About Me */}
      <div className="max-w-6xl mx-auto">
        <AboutMe />
      </div>
      {/* End About Me */}

      {/* Selected Project */}
      <div id="project" className="w-full max-w-6xl mx-auto">
        <p className="tomo text-4xl font-semibold pb-10 text-center">
          Best Project
        </p>
        <div className="flex flex-col gap-10">
          <DynamicMaterialYou />
        </div>
      </div>

      {/* End Selected Project */}

      {/* Experience */}
      {/* <div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
        <div className="flex justify-center items-center flex-col my-5 self-start ">
          <motion.div
            className="bg-gray-700 h-1 rounded-full mb-3 self-start"
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.5,

              type: "spring",
            }}
          ></motion.div>
          <motion.div
            className="bg-gray-700  h-1 rounded-full"
            initial={{
              opacity: 0,
              x: 200,
            }}
            whileInView={{
              opacity: 1,
              x: -50,
            }}
            transition={{
              delay: 0.5,

              type: "spring",
            }}
          ></motion.div>
          <motion.h1
            className="text-3xl font-bold mt-3"
            initial={{
              opacity: 0,
              x: -200,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.7,

              type: "spring",
            }}
          >
            Profesional Experienceee
          </motion.h1>
        </div>
      </div> */}
      <div className="max-w-6xl mx-auto">
        <div className="mt-16 flex flex-col justify-start items-center w-full pl-4 md:pl-2">
          {/* <div className="flex justify-center items-center flex-col my-5 self-start ">
           <motion.div
              className="bg-gray-700 h-1 w-5 rounded-full mb-3 self-start"
              initial={{
                opacity: 0,
                x: -100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.5,

                type: "spring",
              }}
            ></motion.div>
            <motion.div
              className="bg-gray-700 w-5 h-1 rounded-full"
              initial={{
                opacity: 0,
                x: 200,
              }}
              whileInView={{
                opacity: 1,
                x: -50,
              }}
              transition={{
                delay: 0.5,

                type: "spring",
              }}
            ></motion.div> 
            <motion.h1
              className="text-3xl font-bold mt-3"
              initial={{
                opacity: 0,
                x: -200,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.7,

                type: "spring",
              }}
            >
              Profesional Experienceee
            </motion.h1>
          </div> */}
        </div>
        <p className="tomo text-4xl ">Profesional Experience</p>
        <Experience />
      </div>
      {/* End Experience */}

      {/* Contact */}
      <Contact />
      {/* <Particle /> */}
      <SpeedInsights />
    </div>
  );
}
