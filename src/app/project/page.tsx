"use client";

import { Tablist } from "../../components/tablist";
import { Card } from "@nextui-org/react";
import Particle from "@/components/particles";
import DigitsMockup from "@/Assets/Image/Digits Mockup.png";
import BAIS from "@/Assets/Image/BaisMockup.png";
import Finary from "@/Assets/Image/Finary.png";
import Healty from "@/Assets/Image/Healty.png";
import DynamicCard from "@/components/card";

export default function Project() {
  return (
    <div
      className="flex flex-col gap-4 w-full pl-6"
      // style={{ height: "calc(100vh - 48px)" }}
    >
      <div className="grid justify-center z-50">
        <Tablist />
      </div>

      <Card className="  drop-shadow-md border-[0.5px] z-50 bg-opacity-50">
        {/* <div className="p-4 border-b-[0.5px] text-dark">
          <h1 className="font-medium text-xl text-dark">Some of My Projcet</h1>
        </div> */}
        <div className="p-4 border-none">
          {/* Pembungkus project */}
          <div className=" grid grid-cols-3 sm-:grid-cols-2 lg:grid-cols-3 gap-4 scroll-smooth bg-opacity-50">
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
            {/* 4 */}
            <DynamicCard
              imageSrc={Healty}
              logoTitle="Healty"
              title="Healty App"
              description="The health app is an online consultation service application, where patients can consult on health problems via chat, call and video call"
              badges={["UI/UX Design"]}
              className="bg-[#605DEC] text-white"
            />
          </div>
          {/* End Pembungkus Project */}
        </div>
      </Card>
      <Particle />
    </div>
  );
}
