"use client";
import { useEffect } from "react";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import Best1 from "@/Assets/Image/best1.png";
import Best1_2 from "@/Assets/Image/best1.2.png";
import Best2 from "@/Assets/Image/best2.png";
import Best3 from "@/Assets/Image/best3.png";
import LeftIcon from "@/Assets//Icon/Arrow";

export default function bestProject() {
  useEffect(() => {
    const stickySections = document.querySelectorAll(".sticky_wrap");

    stickySections.forEach((section) => {
      transform(section as HTMLElement);
    });

    const handleScroll = () => {
      stickySections.forEach((section) => {
        transform(section as HTMLElement);
      });
    };

    function transform(section: HTMLElement) {
      const offsetTop = section.parentElement?.offsetTop || 0;
      const scrollSection = section.querySelector(
        ".horizontal_scroll"
      ) as HTMLElement;

      if (scrollSection) {
        let percentage =
          ((window.scrollY - offsetTop) / window.innerHeight) * 100;
        percentage = Math.max(0, Math.min(300, percentage)); // Batasi antara 0 dan 300
        scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
      }
    }

    // Function declaration mendukung hoisting, sehingga bisa dipanggil sebelum deklarasi
    stickySections.forEach((section) => {
      transform(section as HTMLElement);
    });

    // Kemudian gunakan fungsi transform
    stickySections.forEach((section) => {
      transform(section as HTMLElement); // Pemanggilan di sini
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="w-full h-full">
      {/* <section className="h-screen">
        <div className="container mx-auto py-20">
          <h1 className="text-4xl font-bold ">Digital Telkom Schools</h1>
          <p className="mt-4">
            Dummy text dummy text dummy text dummy text dummy text.
          </p>
        </div>
      </section> */}

      <div className="scroll_container h-[400vh]">
        <div className="sticky_wrap sticky top-0 h-screen overflow-hidden">
          <div className="horizontal_scroll absolute top-0 h-full w-[400vw] flex justify-between">
            <div className="scroll_contents w-screen h-full bg-[#DA4641] flex items-start">
              <div className="w-full sm:w-full md:w-1/3 lg:w-full rounded-md ">
                <Image src={Best1} alt="best1" className=" " />
                <div className="absolute top-[70%] left-0 transform -translate-y-[45%] flex flex-row   gap-6 pl-4">
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
            <div className="scroll_contents w-screen h-full bg-[#DA4641]">
              <div className="w-full sm:w-full md:w-1/3 lg:w-full rounded-md ">
                <Image src={Best1_2} alt="best1" className=" " />
                <div className="absolute top-[70%] left-0 transform -translate-y-[45%] flex flex-row   gap-6 pl-4">
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
            <div className="scroll_contents w-screen h-full bg-green-500"></div>
            <div className="scroll_contents w-screen h-full bg-blue-500 flex items-end justify-end">
              <h2 className="text-white text-4xl mr-5 mb-5">Goodbye</h2>
            </div>
          </div>
        </div>
      </div>

      <section className="h-screen bg-gray-100">
        <div className="container mx-auto py-20">
          <h1 className="text-4xl font-bold">The End</h1>
          <p className="mt-4">
            Dummy text dummy text dummy text dummy text dummy text.
          </p>
        </div>
      </section>
    </main>
  );
}
