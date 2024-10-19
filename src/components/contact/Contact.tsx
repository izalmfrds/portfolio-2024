import Spline from "@splinetool/react-spline";
import ContactRounded from "./ContactRounded";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import Planet from "@/Assets/Image/planet.png";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

export default function Contact() {
  return (
    <div
      id="contact"
      className="h-screen justify-center items-center content-center relative "
    >
      {/* <ContactRounded /> */}
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
          We’re ready to get started on your next creative project. All you need
          to do is hit the button below
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
  );
}
