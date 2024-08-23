import Image, { StaticImageData } from "next/image";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import clsx from "clsx"; // Optional utility for merging classNames

type card = {
  imageSrc: StaticImageData;
  title: string;
  logoTitle: string;
  description: string;
  badges: string[];
  className: string;
};

export default function DynamicCard(content: card) {
  return (
    <Card className="p-6 relative shadow-small  flex items-center justify-center group gap-6 transition-colors duration-300 ease-in-out hover:bg-[#343434] bg-opacity-50 cursor-pointer">
      <CardBody className="rounded-lg relative flex items-center justify-center overflow-hidden">
        <Image
          src={content.imageSrc}
          height={200}
          alt="Picture of the author"
          className="object-cover"
        />
        {/* Overlay with text */}
        <div
          className={clsx(
            "absolute inset-0  flex items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out",
            content.className
          )}
        >
          <p className="text-xl font-bold">{content.logoTitle}</p>
        </div>
      </CardBody>
      <CardFooter className="flex-col gap-2 items-start">
        <div className="flex gap-4 w-full">
          {content.badges.map((badge, index) => (
            <small
              key={index}
              className="p-1 px-2 border rounded-xl text-small bg-slate-200 bg-opacity-20 flex flex-wrap"
            >
              {badge}
            </small>
          ))}
        </div>

        <h1 className="w-full text-3xl pt-6">{content.title}</h1>
        <small className="text-[#c0c0c0] ">{content.description}</small>
        {/* <Button variant="solid" color="primary" className="mt-6">
                  See More
                </Button> */}
      </CardFooter>
    </Card>
  );
}
