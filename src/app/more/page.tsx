"use client";
// import Carousel from "@/components/Carousel";
import Tes from "@/Assets/Image/BaisMockup.png";
import MaterialYou from "@/components/MaterialYou";
export default function Home() {
  return (
    <div className="container  mx-auto">
      <h1 className="text-3xl font-bold text-center my-8">Carousel Slider</h1>
      <div className="flex flex-row w-[700px] mx-auto">
        {/* <div className="w-[800px]">
          <p className="tomo 4xl">DigiTS</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            cupiditate vitae laborum. Numquam necessitatibus unde nesciunt!
            Expedita dolore deserunt quae perspiciatis! Ducimus minima natus vel
            aspernatur illum cupiditate ab omnis.
          </p>
        </div> */}
        <MaterialYou />
      </div>
    </div>
  );
}
