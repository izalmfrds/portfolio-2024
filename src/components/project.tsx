import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import Peopleui from "@/Assets/Image/peopleui.png";
import Neobrutalism from "@/Assets/Image/Neobrutalism.png";
import Peop from "@/Assets/Image/peop.png";
import BaisMockup from "@/Assets/Image/Bais Mockup.png";
import DigitsMockup from "@/Assets/Image/Digits Mockup.png";
// import Neobrutalism from "../../Assets/Image/Neobrutalism.png";
// import Finary from "../../Assets/Image/Finary.png";

export default function project() {
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
            <Button className="font-semibold">See More</Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {/* 1 */}
            <Card className="p-6 relative shadow-small  flex items-center justify-center group gap-6 transition-colors duration-300 ease-in-out hover:bg-[#343434]">
              <CardBody className="rounded-lg relative flex items-center justify-center overflow-hidden">
                <Image
                  src={Neobrutalism}
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
              {/* 2 */}
            </Card>
            {/* 2 */}
            <Card className="p-6 relative shadow-small  flex items-center justify-center group gap-6 transition-colors duration-300 ease-in-out hover:bg-[#343434]">
              <CardBody className="rounded-lg relative flex items-center justify-center overflow-hidden">
                <Image
                  src={BaisMockup}
                  height={200}
                  alt="Picture of the author"
                  className="object- rounded-md"
                />
                {/* Overlay with text */}
                <div className="absolute inset-0 bg-[#FFFAE6] flex items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                  <p className="text-black text-xl font-bold">
                    Logo/Nama Aplikasi
                  </p>
                </div>
              </CardBody>
              <CardFooter className="flex-col gap-2 items-start">
                <div className="flex gap-4 w-full">
                  <small className="p-1 px-2 border rounded-xl text-small bg-slate-200 bg-opacity-20">
                    UI/UX Design
                  </small>
                  <small className="p-1 px-2 border rounded-xl text-small bg-slate-200 bg-opacity-20">
                    UI/UX
                  </small>
                </div>

                <h1 className="w-full text-3xl pt-6">
                  Baitul Adab Islamic Schools
                </h1>
                <small className="text-[#c0c0c0] ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
                  dolorem eos commodi a vitae earum magni expedita error,
                </small>
                {/* <Button variant="solid" color="primary" className="mt-6">
                  See More
                </Button> */}
              </CardFooter>
            </Card>
            {/* 3 */}
            <Card className="p-6 relative shadow-small  flex items-center justify-center group gap-6 transition-colors duration-300 ease-in-out hover:bg-[#343434]">
              <CardBody className="rounded-lg relative flex items-center justify-center overflow-hidden">
                <Image
                  src={DigitsMockup}
                  height={200}
                  alt="Picture of the author"
                  className="object-cover"
                />
                {/* Overlay with text */}
                <div className="absolute inset-0 bg-[#DA3732] flex items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                  <p className="text-white text-xl font-bold">
                    Logo/Nama Aplikasi
                  </p>
                </div>
              </CardBody>
              <CardFooter className="flex-col gap-2 items-start">
                <div className="flex gap-4 w-full">
                  <small className="p-1 px-2 border rounded-xl text-small bg-slate-200 bg-opacity-20">
                    UI/UX Design
                  </small>
                  <small className="p-1 px-2 border rounded-xl text-small bg-slate-200 bg-opacity-20">
                    UI/UX
                  </small>
                </div>

                <h1 className="w-full text-3xl pt-6">DigiTS Telkom Schools</h1>
                <small className="text-[#c0c0c0] ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
                  dolorem eos commodi a vitae earum magni expedita error,
                </small>
                {/* <Button variant="solid" color="primary" className="mt-6">
                  See More
                </Button> */}
              </CardFooter>
            </Card>
          </div>
        </Card>
      </div>
    </div>
  );
}
