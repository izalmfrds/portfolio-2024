"use client";
import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import Image from "next/image";
import Peopleui from "@/Assets/Image/peopleui.png";
import Finary from "@/Assets/Image/Finary.png";
import BAIS from "@/Assets/Image/Bais Mockup.png";
import DigitsMockup from "@/Assets/Image/Digits Mockup.png";
import { useRouter } from "next/navigation";
import DynamicCard from "@/components/card";


export default function project() {
  const router = useRouter();

  const handleProjectClick = () => {
    router.push("/project"); // Ganti dengan rute halaman yang dituju
  };

  return (
    <div className=" w-full h-full gap-10 relative z-10">
      <div className="flex-col sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <div className="grid grid-rows sm:grid-cols-1 ">
          <p className="text-5xl font-semibold pb-6 grow font-mono mt-52">
            Selected Project
          </p>
          <Image
            src={Peopleui}
            width={500}
            height={500}
            alt="Picture of the author"
            className="absolute z-1 end-8 top-28 w-60"
          />
        </div>

        <Card className=" p-6">
          <p className="font-semibold text-2xl">UI/UX Designer</p>
          <div className="flex flex-col sm:flex-row w-full place-items-center gap-4 pb-6 ">
            <p className="grow align-middle ">Let's see another project </p>
            <Button className="font-semibold" onClick={handleProjectClick}>
              See More
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {/* 1 */}
            <DynamicCard
              imageSrc={DigitsMockup}
              logoTitle="DigiTS Telkom Schools"
              title="DigiTS Telkom Schools"
              description="DigiTS is a Telkom Schools application to manage all Telkom schools."
              badges={["UI/UX Design"]}
              className="bg-[#DA3732] text-white"
            />
            {/* 2 */}
            <DynamicCard
              imageSrc={BAIS}
              logoTitle="Baitul Adab Islamic Schools"
              title="Baitul Adab Islamic Schools"
              description="Baitul Adab Islamic Schools is a side project for creating a school website"
              badges={["UI/UX Design", "Project Manager"]}
              className="bg-[#FFFAE6] text-black"
            />
            {/* 3 */}
            <DynamicCard
              imageSrc={Finary}
              logoTitle="Finary App"
              title="Finary App"
              description="Finary app is a personal finance management application"
              badges={["UI/UX Design"]}
              className="bg-[#605DEC] text-white"
            />
          </div>
        </Card>
      </div>
    </div>
  );
}
