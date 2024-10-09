"use client";
import { useEffect } from "react";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import Best1 from "@/Assets/Image/best1.png";
import Best1_2 from "@/Assets/Image/best1.2.png";
import Best1_3 from "@/Assets/Image/best1_3.png";
import Best1_4 from "@/Assets/Image/best1_4.png";
import Best2 from "@/Assets/Image/best2.png";
import Best3 from "@/Assets/Image/best3.png";
import LeftIcon from "@/Assets//Icon/Arrow";

export default function BestProject() {
  useEffect(() => {
    const stickySections = document.querySelectorAll(".sticky_wrap");

    const handleScroll = () => {
      stickySections.forEach((section) => {
        transform(section as HTMLElement);
      });
    };

    const transform = (section: HTMLElement) => {
      const offsetTop = section.parentElement?.offsetTop || 0;
      const scrollSection = section.querySelector(
        ".horizontal_scroll"
      ) as HTMLElement;

      if (scrollSection) {
        let percentage =
          ((window.scrollY - offsetTop) / window.innerHeight) * 100;
        percentage = Math.max(0, Math.min(300, percentage));
        scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="w-full h-full">
      <div className="scroll_container h-[400vh]">
        <div className="sticky_wrap sticky top-0 h-screen overflow-hidden">
          <div className="horizontal_scroll absolute top-0 h-full w-[400vw] flex justify-between">
            <div className="scroll_contents w-screen h-full bg-[#DA4641]">
              <div className="w-full sm:w-full md:w-1/3 lg:w-full rounded-md relative">
                <Image src={Best1} alt="best1_2" className="w-full h-auto" />
                <div className="absolute top-[70%] left-[3.5%] transform -translate-y-[45%] flex flex-row gap-6 pl-4">
                  <Button
                    variant="light"
                    className="text-white hover:text-blue-500"
                    startContent={<LeftIcon />}
                  >
                    View Study Case
                  </Button>
                  <Button
                    variant="light"
                    className="text-white hover:text-blue-500"
                    startContent={<LeftIcon />}
                  >
                    View Website
                  </Button>
                </div>
              </div>
            </div>
            <div className="scroll_contents w-screen h-full bg-[#DA4641]">
              <div className="w-full sm:w-full md:w-1/3 lg:w-full rounded-md relative">
                <Image src={Best1_2} alt="best1_2" className="w-full h-auto" />
                <div className="absolute top-[70%] left-[3.5%] transform -translate-y-[45%] flex flex-row gap-6 pl-4">
                  <Button
                    variant="light"
                    className="text-white hover:text-blue-500"
                    startContent={<LeftIcon />}
                  >
                    View Study Case
                  </Button>
                  <Button
                    variant="light"
                    className="text-white hover:text-blue-500"
                    startContent={<LeftIcon />}
                  >
                    View Website
                  </Button>
                </div>
              </div>
            </div>
            <div className="scroll_contents w-screen h-full bg-[#DA4641]">
              <div className="w-full sm:w-full md:w-1/3 lg:w-full rounded-md relative">
                <Image src={Best1_3} alt="best1_3" className="w-full h-auto" />
                <div className="absolute top-[70%] left-[3.5%] transform -translate-y-[45%] flex flex-row gap-6 pl-4">
                  <Button
                    variant="light"
                    className="text-white hover:text-blue-500"
                    startContent={<LeftIcon />}
                  >
                    View Study Case
                  </Button>
                  <Button
                    variant="light"
                    className="text-white hover:text-blue-500"
                    startContent={<LeftIcon />}
                  >
                    View Website
                  </Button>
                </div>
              </div>
            </div>
            <div className="scroll_contents w-screen h-full bg-[#DA4641]">
              <div className="w-full sm:w-full md:w-1/3 lg:w-full rounded-md relative">
                <Image src={Best1_4} alt="best1_4" className="w-full h-auto" />
                <div className="absolute top-[60%] left-[2%] transform -translate-y-[45%] flex flex-row gap-6 pl-4">
                  <Button
                    variant="light"
                    className="text-white hover:text-blue-500"
                    startContent={<LeftIcon />}
                  >
                    View Study Case
                  </Button>
                  <Button
                    variant="light"
                    className="text-white hover:text-blue-500"
                    startContent={<LeftIcon />}
                  >
                    View Website
                  </Button>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>

      <section className="h-screen bg-[#FF9F66]">
        <div className="w-full sm:w-full md:w-1/3 lg:w-full rounded-md relative">
          <Image src={Best2} alt="best2" className="w-full h-auto" />
          <div className="absolute top-[70%] left-[3.5%] transform -translate-y-[45%] flex flex-row gap-6 pl-4">
            <Button
              variant="light"
              className="text-white hover:text-blue-500"
              startContent={<LeftIcon />}
            >
              View Study Case
            </Button>
            <Button
              variant="light"
              className="text-white hover:text-blue-500"
              startContent={<LeftIcon />}
            >
              View Website
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
