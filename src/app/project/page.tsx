"use client";

import { Tablist } from "../../components/tablist";
import { Card, CardFooter, Image, Button, CardHeader } from "@nextui-org/react";

export default function Project() {
  return (
    <div
      className="flex flex-col gap-4 w-full pl-6"
      style={{ height: "calc(100vh - 48px)" }}
    >
      <div className="grid justify-center ">
        <Tablist />
      </div>

      <Card className="  drop-shadow-md border-[0.5px]">
        <div className="p-4 border-b-[0.5px] text-dark">
          <h1 className="font-medium text-xl text-dark">Some of My Projcet</h1>
        </div>
        <div className="p-4 border-none  ">
          {/* Pembungkus project */}
          <div className=" grid grid-cols-3 sm-:grid-cols-2 lg:grid-cols-3 gap-4 scroll-smooth ">
            {/* 1 */}
            <div className="">
              <Card
                isFooterBlurred
                className="w-full h-[300px] max-w-sm col-span-12 sm:col-span-7 shadow-none"
              >
                <Image
                  removeWrapper
                  alt="Relaxing app background"
                  className="z-0  object-fit p-4"
                  src="https://framerusercontent.com/images/VutsBKQE78J9ZW2PzD7uK2NpqU.png"
                />
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-100 dark:border-default-100">
                  <div className="flex flex-grow gap-2 items-center">
                    <div className="flex flex-col">
                      <p className="text-md text-dark">Name App</p>
                      <p className="text-tiny text-white/60">
                        Get a good night's sleep.
                      </p>
                    </div>
                  </div>
                  <Button radius="full" size="sm">
                    See More
                  </Button>
                </CardFooter>
              </Card>
            </div>
            {/* 2 */}
            <div>
              <Card
                isFooterBlurred
                className="w-full h-[300px] max-w-sm col-span-12 sm:col-span-7 shadow-none"
              >
                <Image
                  removeWrapper
                  alt="Relaxing app background"
                  className="z-0  object-fit p-4"
                  src="https://framerusercontent.com/images/VutsBKQE78J9ZW2PzD7uK2NpqU.png"
                />
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-100 dark:border-default-100">
                  <div className="flex flex-grow gap-2 items-center">
                    <div className="flex flex-col">
                      <p className="text-md text-dark">Name App</p>
                      <p className="text-tiny text-white/60">
                        Get a good night's sleep.
                      </p>
                    </div>
                  </div>
                  <Button radius="full" size="sm">
                    See More
                  </Button>
                </CardFooter>
              </Card>
            </div>
            {/* 3 */}
            <div>
              <Card
                isFooterBlurred
                className="w-full h-[300px] max-w-sm ] col-span-12 sm:col-span-7 shadow-none"
              >
                <Image
                  removeWrapper
                  alt="Relaxing app background"
                  className="z-0  object-fit p-4"
                  src="https://framerusercontent.com/images/VutsBKQE78J9ZW2PzD7uK2NpqU.png"
                />
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-100 dark:border-default-100">
                  <div className="flex flex-grow gap-2 items-center">
                    <div className="flex flex-col">
                      <p className="text-md text-dark">Name App</p>
                      <p className="text-tiny text-white/60">
                        Get a good night's sleep.
                      </p>
                    </div>
                  </div>
                  <Button radius="full" size="sm">
                    See More
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
