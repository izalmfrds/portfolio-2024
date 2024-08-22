"use client";

import { Tablist } from "../../components/tablist";
import {
  Card,
  CardFooter,
  Button,
  CardHeader,
  CardBody,
} from "@nextui-org/react";
import Particle from "@/components/particles";
import DigitsMockup from "@/Assets/Image/Digits Mockup.png";
import Image from "next/image";

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
            <Card className="p-6 relative shadow-small  flex items-center justify-center group gap-6 transition-colors duration-300 ease-in-out hover:bg-[#343434] bg-opacity-50 cursor-pointer">
              <CardBody className="rounded-lg relative flex items-center justify-center overflow-hidden">
                <Image
                  src={DigitsMockup}
                  height={200}
                  alt="Picture of the author"
                  className="object-cover"
                />
                {/* Overlay with text */}
                <div className="absolute inset-0 bg-[#F6E122] flex items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                  <p className="text-black text-xl font-bold">
                    Logo/Nama Aplikasi
                  </p>
                </div>
              </CardBody>
              <CardFooter className="flex-col gap-2 items-start">
                <div className="flex gap-4 w-full">
                  <small className="p-1 px-2 border rounded-xl text-small bg-slate-200 bg-opacity-20 flex flex-wrap">
                    UI/UX Designn
                  </small>
                  <small className="p-1 px-2 border rounded-xl text-small bg-slate-200 bg-opacity-20">
                    UI/UX
                  </small>
                </div>

                <h1 className="w-full text-3xl pt-6">FINARY APP</h1>
                <small className="text-[#c0c0c0] ">
                  Finary app is an application for managing finances, you can
                  record every income and expense to control your finances.
                </small>
                {/* <Button variant="solid" color="primary" className="mt-6">
                  See More
                </Button> */}
              </CardFooter>
            </Card>

            {/* 2 */}
            <Card className="p-6 relative shadow-small  flex items-center justify-center group gap-6 transition-colors duration-300 ease-in-out hover:bg-[#343434] bg-opacity-50 cursor-pointer">
              <CardBody className="rounded-lg relative flex items-center justify-center overflow-hidden">
                <Image
                  src={DigitsMockup}
                  height={200}
                  alt="Picture of the author"
                  className="object-cover"
                />
                {/* Overlay with text */}
                <div className="absolute inset-0 bg-[#F6E122] flex items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                  <p className="text-black text-xl font-bold">
                    Logo/Nama Aplikasi
                  </p>
                </div>
              </CardBody>
              <CardFooter className="flex-col gap-2 items-start">
                <div className="flex gap-4 w-full">
                  <small className="p-1 px-2 border rounded-xl text-small bg-slate-200 bg-opacity-20 flex flex-wrap">
                    UI/UX Designn
                  </small>
                  <small className="p-1 px-2 border rounded-xl text-small bg-slate-200 bg-opacity-20">
                    UI/UX
                  </small>
                </div>

                <h1 className="w-full text-3xl pt-6">FINARY APP</h1>
                <small className="text-[#c0c0c0] ">
                  Finary app is an application for managing finances, you can
                  record every income and expense to control your finances.
                </small>
                {/* <Button variant="solid" color="primary" className="mt-6">
                  See More
                </Button> */}
              </CardFooter>
            </Card>
            {/* 3 */}
            <Card className="p-6 relative shadow-small  flex items-center justify-center group gap-6 transition-colors duration-300 ease-in-out hover:bg-[#0068E2] bg-opacity-50 cursor-pointer">
              <CardBody className="rounded-lg relative flex items-center justify-center overflow-hidden">
                <Image
                  src={DigitsMockup}
                  height={200}
                  alt="Picture of the author"
                  className="object-cover"
                />
                {/* Overlay with text */}
                <div className="absolute inset-0 bg-[#F6E122] flex items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                  <p className="text-black text-xl font-bold">
                    Logo/Nama Aplikasi
                  </p>
                </div>
              </CardBody>
              <CardFooter className="flex-col gap-2 items-start">
                <div className="flex gap-4 w-full">
                  <small className="p-1 px-2 border rounded-xl text-small bg-slate-200 bg-opacity-20 flex flex-wrap">
                    UI/UX Designn
                  </small>
                  <small className="p-1 px-2 border rounded-xl text-small bg-slate-200 bg-opacity-20">
                    UI/UX
                  </small>
                </div>

                <h1 className="w-full text-3xl pt-6">FINARY APP</h1>
                <small className="text-[#c0c0c0] ">
                  Finary app is an application for managing finances, you can
                  record every income and expense to control your finances.
                </small>
                {/* <Button variant="solid" color="primary" className="mt-6">
                  See More
                </Button> */}
              </CardFooter>
            </Card>
            {/* 4 */}
            <Card className="p-6 relative shadow-small  flex items-center justify-center group gap-6 transition-colors duration-300 ease-in-out hover:bg-[#0068E2] bg-opacity-50 cursor-pointer">
              <CardBody className="rounded-lg relative flex items-center justify-center overflow-hidden">
                <Image
                  src={DigitsMockup}
                  height={200}
                  alt="Picture of the author"
                  className="object-cover"
                />
                {/* Overlay with text */}
                <div className="absolute inset-0 bg-[#F6E122] flex items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                  <p className="text-black text-xl font-bold">
                    Logo/Nama Aplikasi
                  </p>
                </div>
              </CardBody>
              <CardFooter className="flex-col gap-2 items-start">
                <div className="flex gap-4 w-full">
                  <small className="p-1 px-2 border rounded-xl text-small bg-slate-200 bg-opacity-20 flex flex-wrap">
                    UI/UX Designn
                  </small>
                  <small className="p-1 px-2 border rounded-xl text-small bg-slate-200 bg-opacity-20">
                    UI/UX
                  </small>
                </div>

                <h1 className="w-full text-3xl pt-6">FINARY APP</h1>
                <small className="text-[#c0c0c0] ">
                  Finary app is an application for managing finances, you can
                  record every income and expense to control your finances.
                </small>
                {/* <Button variant="solid" color="primary" className="mt-6">
                  See More
                </Button> */}
              </CardFooter>
            </Card>
          </div>
          {/* End Pembungkus Project */}
        </div>
      </Card>
      <Particle />
    </div>
  );
}
