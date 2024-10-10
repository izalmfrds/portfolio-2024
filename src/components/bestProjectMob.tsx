import { useState } from "react";
import Image from "next/image"; // Import Next.js Image component
import { Button } from "@nextui-org/button";
import Best1 from "@/Assets/Image/Digits Mockup.png"; // Local image
import Best2 from "@/Assets/Image/Digits Mockup.png";
import Best3 from "@/Assets/Image/Digits Mockup.png";
import LogoTS from "@/Assets/Image/TelkomFoundationLogo.png";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      src: Best1, // Local image path
      alt: "Best Image 1",
    },
    {
      src: Best2, // Local image path
      alt: "Best Image 2",
    },
    {
      src: Best3, // Local image path
      alt: "Best Image 3",
    },
  ];

  return (
    <div className="h-screen bg-slate-500">
      <div className="flex flex-col items-center">
        <div>
          <Image
            src={LogoTS}
            alt="Picture of the author"
            className="w-[48px] h-[48px]"
          />
        </div>
        <div className="text-center">
          <h1 className="tomo text-xl">DigiTS Portal</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            libero perferendis molestias dolor vitae aperiam totam optio magni,
            voluptatibus reprehenderit quisquam molestiae cupiditate recusandae
            voluptatem facilis fugit dignissimos commodi ipsa.
          </p>
        </div>
        <Image src={Best1} alt="Picture of the author" className="w-full" />
        <div>
          <Button>View Case Study</Button>
          <Button>View Website</Button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
