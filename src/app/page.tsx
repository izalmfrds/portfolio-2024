"use client";
import Experience from "@/components/experience";
import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import MaterialYou from "@/components/MaterialYou";
import DynamicMaterialYou from "@/components/DynamicMaterialYou";
// import Particle from "@/components/particles";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  // Func Swiper

  return (
    <div className="w-full h-full gap-10 mb-6  mx-auto no-overflow">
      {/* Hero */}
      <Hero />
      {/* End Hero */}

      {/* About Me */}
      <div className="max-w-6xl mx-auto">
        <AboutMe />
      </div>
      {/* End About Me */}

      {/* Selected Project */}
      <div className="w-full max-w-6xl mx-auto">
        <p className="tomo text-4xl font-semibold pb-10 text-center">
          Best Project
        </p>
        <div className="flex flex-col gap-10">
          <DynamicMaterialYou />
        </div>
      </div>

      {/* End Selected Project */}

      {/* Experience */}
      <Experience />
      {/* End Experience */}

      {/* Contact */}
      <Contact />
      {/* <Particle /> */}
      <SpeedInsights />
    </div>
  );
}
