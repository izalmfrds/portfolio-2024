"use client";
import { useState } from "react";
import Tes1 from "@/Assets/Image/BaisMockup.png";
import Tes2 from "@/Assets/Image/Digits Mockup.png";
import Tes3 from "@/Assets/Image/DigitsPortalMobile.png";
import Tes4 from "@/Assets/Image/Neobrutalism.png";
import Image from "next/image";

export default function Home() {
  const images = [
    { src: Tes1.src, alt: "Bais Mockup 1" },
    { src: Tes2.src, alt: "Bais Mockup 2" },
    { src: Tes3.src, alt: "Bais Mockup 3" },
    { src: Tes4.src, alt: "Bais Mockup 4" },
  ];

  const [activeIndex, setActiveIndex] = useState(1); // Mulai dari gambar pertama

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  const getDisplayedImages = () => {
    const start = Math.max(0, activeIndex - 1);
    return images.slice(start, start + 3);
  };

  return (
    <div className="container mx-auto overflow-hidden">
      <div className="CardOpen w-full flex flex-row gap-4 justify-center">
        {getDisplayedImages().map((image, index) => {
          const actualIndex = index + Math.max(0, activeIndex - 1);
          return (
            <div
              key={actualIndex}
              className={`relative transition-all duration-700 ease-in ${
                activeIndex === actualIndex
                  ? "w-full scale-100 opacity-100"
                  : "w-40 scale-90 opacity-70"
              } h-64 bg-gray-100 overflow-hidden cursor-pointer rounded-xl`}
              onClick={() => handleCardClick(actualIndex)}
              style={{
                transitionTimingFunction:
                  activeIndex === actualIndex
                    ? "cubic-bezier(0.25, 1, 0.5, 1)"
                    : "ease-in-out",
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
