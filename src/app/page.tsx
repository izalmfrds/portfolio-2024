"use client";
import Spline from "@splinetool/react-spline";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import Image from "next/image";
import Experience from "@/components/experience";
import Timeline from "@/components/timeline";
import MaterialYou from "@/components/MaterialYou";
import DynamicMaterialYou from "@/components/DynamicMaterialYou";
import BestProject from "@/components/bestProject";
import BestProjectMob from "@/components/bestProjectMob";
import Aboutme from "@/Assets/Image/Aboutme.png";
import DownloadIcon from "@/Assets/Icon/Download";
import LeftIcon from "@/Assets//Icon/Arrow";
import Gmail from "@/Assets/Icon/Gmail";
import Planet from "@/Assets/Image/planet.png";
import Comet from "@/Assets/Image/Comet.png";
import Best1 from "@/Assets/Image/best1.png";
import Best1_2 from "@/Assets/Image/best1.2.png";
import Best2 from "@/Assets/Image/best2.png";
import Best3 from "@/Assets/Image/best3.png";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
// import Particle from "@/components/particles";
import { SpeedInsights } from "@vercel/speed-insights/next";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Mousewheel } from "swiper/modules";

export default function Home() {
  // Func Swiper

  return (
    <div className="w-full h-full gap-10 mb-6  mx-auto no-overflow">
      {/* Hero */}
      <div className="h-[calc(100vh-100px)] rounded-3xl bg-gradient-to-t from-[#90c4ffde] from-4% via-[#0068E2] via-5% to-[#1c70d600] to-50%  relative z-50 ">
        <div
          className="absolute flex items-center justify-center w-52 h-52 rounded-full top-[75%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            background: "radial-gradient(circle, , #BABFC5 100%)",
          }}
        >
          {" "}
          {/* Creating multiple spans with varying delays */}
          <span
            className="pulse"
            style={{ "--i": 0 } as React.CSSProperties}
          ></span>
          <span
            className="pulse"
            style={{ "--i": 1 } as React.CSSProperties}
          ></span>
          <span
            className="pulse"
            style={{ "--i": 2 } as React.CSSProperties}
          ></span>
          <span
            className="pulse"
            style={{ "--i": 3 } as React.CSSProperties}
          ></span>
          <style jsx>{`
            .relative {
              position: relative;
            }
            .pulse {
              position: absolute;
              width: 100%;
              height: 100%;
              background: rgba(
                0,
                104,
                226,
                0.3
              ); /* Adjust color and opacity for a similar look */
              border-radius: 50%;
              animation: pulseAnimate 4s ease-out infinite;
              animation-delay: calc(1s * var(--i));
            }

            @keyframes pulseAnimate {
              0% {
                opacity: 0.8;
                transform: scale(1);
              }
              100% {
                opacity: 0;
                transform: scale(2);
              }
            }

            /* Media query for small screens */
            @media (max-width: 640px) {
              .pulse {
                width: 75%; /* Reduce width to 75% on small screens */
                height: 75%; /* Reduce height to 75% on small screens */
                top: 12.5%; /* Center the pulse vertically */
                left: 12.5%; /* Center the pulse horizontally */
              }
            }
            @media (max-width: 360px) {
              .pulse {
                width: 65%; /* Reduce width to 75% on small screens */
                height: 65%; /* Reduce height to 75% on small screens */
                top: 12.5%; /* Center the pulse vertically */
                left: 12.5%; /* Center the pulse horizontally */
              }
            }
          `}</style>
        </div>

        <div className="spline-wrapper">
          <Spline
            className="h-screen absolute content-center place-items-center top-48 flex justify-center items-center"
            scene="https://prod.spline.design/Ut6-u4zKMonMrzN2/scene.splinecode"
          />
        </div>

        <div className="pt-10 text-center">
          <p className="text-5xl w-full font-tomorrow font-medium">
            Crafting Design <br></br> with User Experience Research
          </p>
          <p className="text-base mt-4 text-[#d1d1d1]">
            This website contains details about my explorations, and my work
            experience. <br></br> Hopefully it can give you the insight and
            information you need!
          </p>

          <div className="flex gap-4 mt-6 justify-center">
            <Button
              color="primary"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/10yMNt46Ojl5-oDDIfQXrQh0gJN3k-CR3/view?usp=sharing",
                  "_blank"
                )
              }
            >
              Download CV <DownloadIcon />
            </Button>
            <Button
              variant="bordered"
              className="text-white border-[#d1d1d1]"
              onClick={() =>
                window.open(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=izalmfrds@gmail.com",
                  "_blank"
                )
              }
            >
              Send Email
              <Gmail />
            </Button>
          </div>
        </div>
      </div>

      {/* End Hero */}
      {/* About Me */}
      <div className="max-w-full mx-auto flex flex-rows gap-4 h-screen text-center my-[100px]">
        <div className="content-center space-y-4 my-auto z-50 mx-auto w-[90%]">
          <p className="tomo text-4xl font-semibold pb-2">About Me</p>
          <p className="text-xl text-[#d1d1d1] items-center">
            Hi there! 👋 <br />
            My name is Rizal Maidan Firdaus, someone who has an interest and
            enthusiasm in software development. I work as a full-time UI/UX in
            the software development process. Here are the skills I have:
          </p>
          <div className="flex flex-row gap-6 h-[612px]">
            <div className="w-full ">
              <Card className="h-full">
                <CardHeader className="hover:bg-[#0068E2]">
                  <video autoPlay loop muted>
                    <source
                      src="https://ouch-cdn2.icons8.com/LqVCF4SYIPstICpCXZNovxJuNfXjjdzF1Bem_tlUef4/skp:webm/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy92aWRlb3Mv/NTQwLzM4YjE4ODZh/LTBlNzgtNDNiYi1i/NjNlLWFmYjk0OTgz/Y2RiZC53ZWJt.webm"
                      type="video/webm"
                    />
                  </video>{" "}
                </CardHeader>
                <CardBody>
                  {" "}
                  <p className="text-2xl font-bold text-center pb-2">
                    UI/UX Designer
                  </p>
                  <p className="text-sm text-justify">
                    I love doing research to make it easier for users to design
                    user interfaces. In practice, I am very good at using Figma
                    tools, from designing design systems to creating reusable
                    components. In addition, I focus on details and consistency
                    to keep the user experience optimal across platforms.
                  </p>
                </CardBody>
              </Card>
            </div>
            <div className="w-full  ">
              <Card className="h-full">
                <CardHeader className="hover:bg-[#0068E2]">
                  <video autoPlay loop muted>
                    <source
                      src="https://ouch-cdn2.icons8.com/ItdIGgJQUNuRBi3WvMiyj7gP9enF8Bl9oLpczzmprJ0/skp:webm/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy92aWRlb3Mv/NDg3L2Q5MDdkZmIz/LTRkNzEtNDdiOC04/ZjhlLWI4NmIzODY2/N2ZkZi53ZWJt.webm"
                      type="video/webm"
                    />
                  </video>{" "}
                </CardHeader>
                <CardBody className="text-justify">
                  {" "}
                  <p className="text-2xl font-bold text-center pb-2">
                    Project Manager
                  </p>
                  <p className="text-sm text-justify">
                    As a Project Manager, I enjoy the process of designing
                    projects using methods such as Agile. My main focus is on
                    team collaboration, effective communication, and monitoring
                    each stage to ensure that it is on time and that each
                    deliverable meets quality standards and client expectations.
                  </p>
                </CardBody>
              </Card>
            </div>
            <div className="w-full">
              <Card className="h-full">
                <CardHeader className="hover:bg-[#0068E2]">
                  <video autoPlay loop muted>
                    <source
                      src="https://ouch-cdn2.icons8.com/tocBEnPe0doFuHA4PGdx-G4IANeZl0yAzuZsc4QSaWc/skp:webm/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy92aWRlb3Mv/OTIyL2Y0MWRkY2Ex/LWUxNzctNDhjYy1h/ODc2LWY2MjZmOTVi/Njk5YS53ZWJt.webm"
                      type="video/webm"
                    />
                  </video>{" "}
                </CardHeader>
                <CardBody>
                  {" "}
                  <p className="text-2xl font-bold text-center pb-2">
                    Web Development
                  </p>
                  <p className="text-sm text-justify">
                    I also enjoy implementing my own designs by writing code
                    using React.js and Next.js, and utilizing Tailwind CSS as a
                    styling framework. This allows me to create responsive and
                    efficient interfaces directly from design to code. In
                    addition, I also pay attention to the use of reusable
                    components, making it easier to develop and maintain
                    applications in the future.
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>

        {/* <div className="flex justify-center p-6 w-full items-end z-50">
          <Image
            src={Aboutme}
            alt="Picture of the author"
            className="w-full max-w-[180px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] object-contain"
          />
        </div> */}
      </div>
      {/* End About Me */}

      {/* Selected Project */}
      <div className="w-full max-w-6xl mx-auto">
        <p className="tomo text-4xl font-semibold pb-10 text-center">
          Best Project
        </p>
        <div className="flex flex-col gap-10">
          <DynamicMaterialYou />
          <Card className="flex flex-col md:flex-row gap-10">
            <div className="md:w-[45%]">
              <p className="tomo text-4xl">Baitul Adab Islamic Shools</p>
              <p className="tomo py-4">
                DigiTS is an application to manage all levels of Telkom schools
                from registration to becoming a school alumni, I am a UI/UX
                designer in creating the DigiTS system.
              </p>
              <div className="flex flex-row gap-2">
                <Button className="tomo">Click Me</Button>
                <Button>Click Me</Button>
              </div>
            </div>
            <MaterialYou />
          </Card>
        </div>
      </div>

      {/* End Selected Project */}
      {/* Experience */}
      <Experience />
      {/* End Experience */}
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
            onClick={() =>
              window.open("https://www.instagram.com/izalmfrds", "izalmfrds")
            }
          />

          <AiFillLinkedin
            size={34}
            className="hover:text-[#c6c6c6] cursor-pointer z-50"
            onClick={() =>
              window.open("https://www.linkedin.com/in/izalmfrds", "izalmfrds")
            }
          />

          <AiFillGithub
            size={34}
            className="hover:text-[#c6c6c6] cursor-pointer z-50"
            onClick={() =>
              window.open("https://github.com/izalmfrds", "izalmfrds")
            }
          />
        </div>
      </div>
      {/* <Particle /> */}
      <SpeedInsights />
    </div>
  );
}
