"use client";
import Spline from "@splinetool/react-spline";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import Project from "@/components/project";
import Experience from "@/components/experience";
import Aboutme from "@/Assets/Image/Aboutme.png";
import DownloadIcon from "@/Assets/Icon/Download";
import LeftIcon from "@/Assets//Icon/Arrow";
import Gmail from "@/Assets/Icon/Gmail";
import Planet from "@/Assets/Image/planet.png";
import Planet1 from "@/Assets/Image/Planet-9.png";
import Planet2 from "@/Assets/Image/Planet-8.png";
import Planet3 from "@/Assets/Image/Planet-13.png";
import Comet from "@/Assets/Image/Comet.png";
import Best1 from "@/Assets/Image/best1.png";
import Best2 from "@/Assets/Image/best2.png";
import Best3 from "@/Assets/Image/best3.png";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
// import Particle from "@/components/particles";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useRouter } from "next/router";

export default function Home() {
  // const router = useRouter();

  // const Project = () => {
  //   router.push("/project"); // Mengarahkan pengguna ke halaman /project
  // };

  return (
    <div className="w-full h-full gap-10 mb-6 px-4 mx-auto">
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
          `}</style>
        </div>

        <Spline
          className="h-screen absolute content-center place-items-center top-48  flex justify-center items-center"
          scene="https://prod.spline.design/Ut6-u4zKMonMrzN2/scene.splinecode"
        />

        <div className="pt-10 text-center">
          <p className="text-6xl w-full font-tomorrow font-medium">
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
      <div className="max-w-6xl mx-auto grid grid-cols-reverse sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 h-screen ">
        <div className="content-center space-y-4  my-auto z-50">
          <p className="tomo text-4xl font-semibold pb-6 grow mt-52">
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

        <div className="flex justify-center p-6 w-full items-end z-50">
          <Image
            src={Aboutme}
            alt="Picture of the author"
            className="w-full max-w-[180px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] object-contain"
          />
        </div>
      </div>
      {/* End About Me */}

      {/* Experience */}
      <Experience />
      {/* End Experience */}

      {/* Selected Project */}
      <div className="py-32 max-w-6xl mx-auto">
        <div className=" justify-center mt-10 gap-2">
          <Image src={Comet} alt="planet" className="w-[44px] mx-auto" />

          <p className="text-medium font-tomorrow text-center ">Check out my</p>
          <p className="text-4xl font-semibold font-tomorrow text-center">
            Best Project
          </p>
        </div>

        <div className="flex flex-wrap gap-6 mt-6 justify-center items-center sm:flex-cols-1 md:flex-cols-2 lg:flex-cols-3">
          <div className="w-full sm:w-full md:w-1/3 lg:w-full rounded-md">
            <Image src={Best1} alt="best1" className=" " />
            <div className="flex flex-row gap-6">
              <div>link</div>
              <div>View Website</div>
            </div>
          </div>
          <div className="w-full sm:w-full md:w-1/3 lg:w-full border-2 border-white rounded-md">
            <Image src={Best2} alt="best2" className=" " />
          </div>
          <div className="w-full sm:w-full md:w-1/3 lg:w-full border-2 border-white rounded-md">
            <Image src={Best3} alt="best3" className=" " />
          </div>
        </div>

        <div className="flex gap-4 mt-6 justify-center">
          <Button
            variant="light"
            onClick={() => (window.location.href = "/project")} // Langsung menggunakan window.location
            className="text-white border-[#d1d1d1]"
          >
            See All Project
            <LeftIcon />
          </Button>
        </div>
      </div>

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
