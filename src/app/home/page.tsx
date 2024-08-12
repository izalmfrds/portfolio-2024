import Spline from "@splinetool/react-spline";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import PeopleUI from "../../Assets/Image/peopleui.png";
import Neobrutalism from "../../Assets/Image/Neobrutalism.png";
import Finary from "../../Assets/Image/Finary.png";
import Experience from "@/components/experience";
import Aboutme from "@/Assets/Image/Aboutme.png";
export default function Home() {
  return (
    <div className=" w-full h-screen pl-6 gap-10">
      {/* Hero */}
      <Spline
        className="absolute"
        scene="https://prod.spline.design/Ut6-u4zKMonMrzN2/scene.splinecode"
      />

      <div className="h-screen rounded-3xl bg-gradient-to-t from-[#90c4ffde] from-4% via-[#0068E2] via-5% to-[#1c70d600] to-50% "></div>
      <div className="absolute top-52 w-full text-center">
        <p className="text-6xl font-bold w-full">
          Crafting Design <br></br> with User Experience Research
        </p>
        <p className="text-base mt-4 text-[#d1d1d1]">
          This website contains details about my explorations, and my work
          experience. <br></br> Hopefully it can give you the insight and
          information you need!
        </p>
        <div className="flex gap-4 mt-6 justify-center">
          <Button color="primary">Download CV</Button>
          <Button
            variant="bordered"
            className="text-hite border-[#d1d1d1]">
            Send Email
          </Button>
        </div>
      </div>
      {/* End Hero */}
      <div className="grid grid-cols-2 h-screen">
        <div className="content-center space-y-4 p-6">
          <p className="text-6xl font-bold  ">About Me</p>
          <p className="text-2xl text-[#d1d1d1]  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            nam enim temporibus culpa quis in. Sapiente veniam quae velit
            quaerat debitis perspiciatis inventore omnis. Numquam reiciendis hic
            totam asperiores dolorem?
          </p>
        </div>
        <div className="p-6 content-center">
          <Image
            src={Aboutme}
            width={500}
            height={500}
            alt="Picture of the author"
            // className="absolute  z-1 end-8 bottom-[-650px] w-auto"
          />
        </div>
      </div>
    </div>
  );
}
