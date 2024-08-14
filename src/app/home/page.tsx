import Spline from "@splinetool/react-spline";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import Project from "@/components/project";
import Experience from "@/components/experience";
import Aboutme from "@/Assets/Image/Aboutme.png";
import DownloadIcon from "@/Assets/Icon/Download";
import Gmail from "@/Assets/Icon/Gmail";

export default function Home() {
  return (
    <div className=" w-full pl-6 gap-10 mb-6 h-full ">
      {/* Hero */}
      <div className="h-screen rounded-3xl bg-gradient-to-t from-[#90c4ffde] from-4% via-[#0068E2] via-5% to-[#1c70d600] to-50%  relative ">
        <Spline
          className="h-screen absolute content-center place-items-center top-48  flex justify-center items-center"
          scene="https://prod.spline.design/Ut6-u4zKMonMrzN2/scene.splinecode"
        />

        <div className="pt-10 text-center">
          <p className="text-6xl font-bold w-full">
            Crafting Design <br></br> with User Experience Research
          </p>
          <p className="text-base mt-4 text-[#d1d1d1]">
            This website contains details about my explorations, and my work
            experience. <br></br> Hopefully it can give you the insight and
            information you need!
          </p>

          <div className="flex gap-4 mt-6 justify-center">
            <Button color="primary">
              Download CV <DownloadIcon />
            </Button>
            <Button variant="bordered" className="text-hite border-[#d1d1d1]">
              Send Email
              <Gmail />
            </Button>
          </div>
        </div>
      </div>
      {/* End Hero */}
      {/* About Me */}
      <div className="grid grid-cols-reverse sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 h-screen ">
        <div className="content-center space-y-4 p-6 my-auto">
          <p className="text-6xl font-bold  ">About Me</p>
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

        <div className="flex justify-center p-6 w-full items-end">
          <Image
            src={Aboutme}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
      {/* Experience */}
      <Experience />
      {/* End Experience */}

      {/* End About Me */}
      {/* Selected Project */}
      <Project />
      {/* End Selected Project */}
    </div>
  );
}
