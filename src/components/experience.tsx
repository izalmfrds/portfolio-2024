import { Card, CardHeader, CardFooter } from "@nextui-org/card";
import TelkomLogo from "@/Assets/Image/TelkomFoundationLogo.png";
import CemindoLogo from "@/Assets/Image/cemindologo.png";
import IflabsLogo from "@/Assets/Image/iflabs logo.png";
import Image from "next/image";

function experience() {
  return (
    <div className="max-w-6xl mx-auto py-20 space-y-6 z-50 ">
      <div className="space-y-2  text-center ">
        <p className="tomo text-4xl font-semibold pb-6 grow mt-32 z-50 ">
          Work Experience
        </p>
        <p className="text-base text-[#d1d1d1]">
          I am actively involved in organizing various projects, especially in
          UI/UX design with over a year of experience, and I have been involved
          in UI/UX design in project-based application development and
          research-based application development, so that I can adapt faster and
          better to software application development tasks and work environment.
        </p>
      </div>

      {/* Company */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {/* 1 */}
        <Card className="p-4 border-white w-full">
          <CardHeader className="gap-4 flex flex-col justify-start">
            <div className="flex flex-row gap-4 w-full">
              <Image
                src={TelkomLogo}
                alt="Picture of the author"
                className="w-[48px] h-[48px]"
              />
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">Telkom Foundation</p>
                <p className="text-xs font-normal text-[#d1d1d1]">
                  Bandung, Indonesia
                </p>
              </div>
            </div>
            <div className="gap-0 w-full">
              <p className="text-xl font-medium w-full">UI/UX Designer</p>
              <p className="text-sm font-medium w-full text-[#d1d1d1]">
                Feb, 2024 - Now
              </p>
            </div>
          </CardHeader>
        </Card>

        {/* 2 */}
        <Card className="p-4 border-white w-full">
          <CardHeader className="gap-4 flex flex-col">
            <div className="flex flex-row gap-4 w-full">
              <Image
                src={CemindoLogo}
                alt="Picture of the author"
                className="w-[48px] h-[48px]"
              />
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">PT Cemindo Gemilang</p>
                <p className="text-xs font-normal text-[#d1d1d1]">
                  Banten, Indonesia
                </p>
              </div>
            </div>
            <div className="gap-0 w-full">
              <p className="text-xl font-medium w-full">UI/UX Designer</p>
              <p className="text-sm font-medium w-full text-[#d1d1d1]">
                Feb, 2024 - Now
              </p>
            </div>
          </CardHeader>
        </Card>

        {/* 3 */}
        <Card className="p-4 border-white w-full">
          <CardHeader className="gap-4 flex flex-col">
            <div className="flex flex-row gap-4 w-full">
              <Image
                src={IflabsLogo}
                alt="Picture of the author"
                className="w-[48px] h-[48px]"
              />
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">Informatics Laboratory</p>
                <p className="text-xs font-normal text-[#d1d1d1]">
                  Bandung, Indonesia
                </p>
              </div>
            </div>
            <div className="gap-0 w-full">
              <p className="text-xl font-medium w-full">UI/UX Designer</p>
              <p className="text-sm font-medium w-full text-[#d1d1d1]">
                Feb, 2024 - Now
              </p>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}

export default experience;
