"use client";
import Spline from "@splinetool/react-spline";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import Project from "@/components/project";
import Experience from "@/components/experience";
import Aboutme from "@/Assets/Image/Aboutme.png";
import DownloadIcon from "@/Assets/Icon/Download";
import Gmail from "@/Assets/Icon/Gmail";
import Planet from "@/Assets/Image/planet.png";
import Planet1 from "@/Assets/Image/Planet-9.png";
import Planet2 from "@/Assets/Image/Planet-8.png";
import Planet3 from "@/Assets/Image/Planet-13.png";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
// import Particle from "@/components/particles";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/navbar";

export default function Home1() {
  return (
    <div className="w-full h-full gap-10 mb-6 px-4 mx-auto">
      {/* Hero */}
      <div className="h-[calc(100vh-150px)] rounded-3xl bg-gradient-to-t from-[#90c4ffde] from-4% via-[#0068E2] via-5% to-[#1c70d600] to-50%  relative z-50 ">
        <Spline
          className="h-screen absolute content-center place-items-center top-48  flex justify-center items-center"
          scene="https://prod.spline.design/Ut6-u4zKMonMrzN2/scene.splinecode"
        />

        <div className="pt-10 text-center">
          <p className="tomo font-extrabold text-6xl  w-full">
            Crafting Design <br></br> with User Experience Research
          </p>
          <p className="text-base mt-4 text-[#d1d1d1] font-tomorrow ">
            This website contains details about my explorations, and my work
            experience. <br></br> Hopefully it can give you the insight and
            information you need!
          </p>

          <div className="flex gap-4 mt-6 justify-center">
            <Button color="primary">
              Download CV <DownloadIcon />
            </Button>
            <Button variant="bordered" className="text-white border-[#d1d1d1]">
              Send Email
              <Gmail />
            </Button>
          </div>
        </div>
      </div>
      {/* End Hero */}
      {/* About Me */}
      <div className="max-w-lg mx-auto grid grid-cols-reverse sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 h-screen ">
        <div className="content-center space-y-4  my-auto z-50 w-[430px]">
          <p className="mono text-6xl font-semibold pb-6 grow mt-52">
            About Me
          </p>
          <p className="text-base text-[#d1d1d1]  ">
            Hi there! 👋 <br />
            My name is Rizal Maidan Firdaus, someone who has interest and
            enthusiasm in User Interface Research and User Experience, with 2+
            years of experience in Bandung, Indonesia.
          </p>
          <p className="pt-2 text-[#d1d1d1]">
            I am a Software Engineering graduate from Telkom University. I have
            strong experience and understanding in user experience research,
            user interface design, product research, software development,
            product testing, and evaluation.
          </p>
        </div>

        <div className="flex justify-end p-6 w-full items-end z-50">
          <Image
            src={Aboutme}
            alt="Picture of the author"
            className="w-[430px]"
          />
        </div>
      </div>
      {/* End About Me */}

      {/* Experience */}
      <Experience />
      {/* End Experience */}

      {/* Selected Project */}
      <Project />
      {/* End Selected Project */}

      {/* Contact */}
      <div className="h-screen justify-center items-center content-center relative ">
        <Spline
          scene="https://prod.spline.design/YUN2rBInkhwRaGVX/scene.splinecode"
          className="absolute z-1"
        />
        <div className="grid grid-cols-3 mt-10 z-50">
          <div className="flex justify-center">
            {/* <Image src={Planet1} alt="planet" className="w-[100px]" /> */}
          </div>
          <div className="flex justify-center z-50">
            <Image src={Planet} alt="planet" className="w-[100px]" />
          </div>
          <div className="flex justify-center">
            {/* <Image src={Planet3} alt="planet" className="w-[100px]" /> */}
          </div>
        </div>

        <div className="text-center">
          <p className="text-5xl font-semibold pb-2 grow font-mono mt-20">
            Let’s get to work
          </p>
          <p>
            We’re ready to get started on your next creative project. All you
            need to do is hit the button below
          </p>
        </div>

        <div className="flex justify-center">
          <Button color="primary" className="mt-10">
            Talk to Me
          </Button>
        </div>

        <div className="flex justify-center mt-10 gap-6 ">
          <AiFillInstagram
            size={34}
            className="hover:text-[#c6c6c6] cursor-pointer z-50"
          />

          <AiFillLinkedin
            size={34}
            className="hover:text-[#c6c6c6] cursor-pointer z-50"
          />

          <AiFillGithub
            size={34}
            className="hover:text-[#c6c6c6] cursor-pointer z-50"
          />
        </div>
      </div>
      {/* <Particle /> */}
      <SpeedInsights />
    </div>
  );
}
