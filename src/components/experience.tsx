import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import Peopleui from "@/Assets/Image/peopleui.png";
import Neobrutalism from "@/Assets/Image/Neobrutalism.png";
import Peop from "@/Assets/Image/peop.png";
// import Neobrutalism from "../../Assets/Image/Neobrutalism.png";
// import Finary from "../../Assets/Image/Finary.png";

export default function experience() {
  return (
    <div className=" w-full h-screen pl-6 gap-10">
      <div className="flex-col space-y-40">
        <div className="flex flex-row">
          <p className="text-5xl font-semibold pb-6 grow font-mono mt-52">
            Project
          </p>
          <Image
            src={""}
            width={500}
            height={500}
            alt="Picture of the author"
            className="absolute  z-1 end-8 bottom-[-650px] w-auto"
          />
        </div>
        <Card className=" p-6 bg-[#252525]">
          <p className="font-semibold text-2xl">UI/UX Designer</p>
          <div className="flex flex-col sm:flex-row w-full place-items-center gap-4 mb-6">
            <p className="grow align-middle ">Let's see another project </p>
            <Button className="font-semibold">See More</Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
                  <small className="p-1 px-2 border rounded-xl text-small bg-slate-200 bg-opacity-20">
                    UI/UX Design
                  </small>
                  <small className="p-1 px-2 border rounded-xl text-small bg-slate-200 bg-opacity-20">
                    UI/UX
                  </small>
                </div>

                <h1 className="w-full text-3xl pt-6">FINARY APP</h1>
                <small className="text-[#c0c0c0] indent-4 ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
                  dolorem eos commodi a vitae earum magni expedita error,
                  pariatur mollitia id, officia maxime iure saepe quidem omnis
                  dolor tenetur et!
                </small>
                <Button
                  variant="solid"
                  color="primary"
                  className="mt-6">
                  See More
                </Button>
              </CardFooter>
              {/* 2 */}
            </Card>
            {/* 2 */}
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
                  <small className="p-1 px-2 border rounded-xl text-small bg-slate-200 bg-opacity-20">
                    UI/UX Design
                  </small>
                  <small className="p-1 px-2 border rounded-xl text-small bg-slate-200 bg-opacity-20">
                    UI/UX
                  </small>
                </div>

                <h1 className="w-full text-3xl pt-6">FINARY APP</h1>
                <small className="text-[#c0c0c0] indent-4 ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
                  dolorem eos commodi a vitae earum magni expedita error,
                  pariatur mollitia id, officia maxime iure saepe quidem omnis
                  dolor tenetur et!
                </small>
                <Button
                  variant="solid"
                  color="primary"
                  className="mt-6">
                  See More
                </Button>
              </CardFooter>
            </Card>
            {/* 3 */}
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
                  <small className="p-1 px-2 border rounded-xl text-small bg-slate-200 bg-opacity-20">
                    UI/UX Design
                  </small>
                  <small className="p-1 px-2 border rounded-xl text-small bg-slate-200 bg-opacity-20">
                    UI/UX
                  </small>
                </div>

                <h1 className="w-full text-3xl pt-6">FINARY APP</h1>
                <small className="text-[#c0c0c0] indent-4 ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
                  dolorem eos commodi a vitae earum magni expedita error,
                  pariatur mollitia id, officia maxime iure saepe quidem omnis
                  dolor tenetur et!
                </small>
                <Button
                  variant="solid"
                  color="primary"
                  className="mt-6">
                  See More
                </Button>
              </CardFooter>
            </Card>
            {/* 4 */}
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
                  <small className="p-1 px-2 border rounded-xl text-small bg-slate-200 bg-opacity-20">
                    UI/UX Design
                  </small>
                  <small className="p-1 px-2 border rounded-xl text-small bg-slate-200 bg-opacity-20">
                    UI/UX
                  </small>
                </div>

                <h1 className="w-full text-3xl pt-6">FINARY APP</h1>
                <small className="text-[#c0c0c0] indent-4 ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
                  dolorem eos commodi a vitae earum magni expedita error,
                  pariatur mollitia id, officia maxime iure saepe quidem omnis
                  dolor tenetur et!
                </small>
                <Button
                  variant="solid"
                  color="primary"
                  className="mt-6">
                  See More
                </Button>
              </CardFooter>
            </Card>
          </div>
        </Card>
      </div>
    </div>
  );
}
