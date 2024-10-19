"use client";
import { useState } from "react";
import { Card } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import Portal from "@/Assets/Image/portal.png";
import Registrasi from "@/Assets/Image/regis.png";
import Kurikulum from "@/Assets/Image/kurikulum.png";
import Akademik from "@/Assets/Image/akademik.png";
import Image from "next/image";

export default function Home() {
  const images = [
    { src: Portal.src, alt: "Bais Mockup 1" },
    { src: Registrasi.src, alt: "Bais Mockup 2" },
    { src: Kurikulum.src, alt: "Bais Mockup 3" },
    { src: Akademik.src, alt: "Bais Mockup 4" },
  ];

  const buttonLinks = [
    {
      link1: "https://dev-digits.telkomschools.sch.id/",
      link2: "/portal/info",
    },
    {
      link1: "https://dev-digits.telkomschools.sch.id/auth/login_siswa",
      link2: "/registrasi/info",
    },
    { link1: "/kurikulum", link2: "/kurikulum/info" },
    { link1: "/akademik", link2: "/akademik/info" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  const getDisplayedImages = () => {
    const imagesToShow = [];
    for (let i = 0; i < 3; i++) {
      imagesToShow.push(images[(activeIndex + i) % images.length]);
    }
    return imagesToShow;
  };

  return (
    <Card className="flex flex-col md:flex-row gap-10 p-6 ">
      <div className="container mx-auto overflow-hidden">
        <div className="CardOpen w-full flex flex-row gap-4 justify-center">
          {getDisplayedImages().map((image, index) => {
            const actualIndex = index + Math.max(0, activeIndex - 1);
            const isActive = activeIndex === actualIndex;
            return (
              <div
                key={actualIndex}
                className={`relative transition-all duration-500 cubic-bezier(0.25, 1, 0.5, 1) ${
                  isActive ? "w-full scale-100" : "w-40 scale-80"
                } h-64 bg-gray-100 overflow-hidden cursor-pointer rounded-xl`}
                onClick={() => handleCardClick(actualIndex)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="object-cover"
                />
                {/* Layer hitam dengan efek hover */}
                {!isActive && (
                  <div
                    className="absolute inset-0 bg-black opacity-50 hover:opacity-0 transition-opacity duration-300"
                    // Layer hitam ini hilang saat di hover dengan efek transisi
                  ></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="md:w-[45%]">
        <p className="tomo text-4xl">Digital Telkom Schools</p>
        <p className="py-4">
          DigiTS is an application to manage all levels of Telkom schools from
          registration to becoming a school alumni, I am a UI/UX designer in
          creating the DigiTS system.
        </p>
        <div className="flex flex-row gap-2">
          <Button
            as="a"
            href={
              buttonLinks[activeIndex]?.link1 ||
              "https://dev-digits.telkomschools.sch.id/"
            }
          >
            View Website
          </Button>
        </div>
      </div>
    </Card>
  );
}
