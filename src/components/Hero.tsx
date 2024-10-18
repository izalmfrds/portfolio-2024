"use client";
import Spline from "@splinetool/react-spline";
import { Button } from "@nextui-org/button";
import Gmail from "@/Assets/Icon/Gmail";
import DownloadIcon from "@/Assets/Icon/Download";

export default function Hero() {
  return (
    <div className="h-[calc(100vh-100px)] rounded-3xl bg-gradient-to-t from-[#90c4ffde] from-4% via-[#0068E2] via-5% to-[#1c70d600] to-50%  relative z-50 ">
      <div
        className="absolute flex items-center justify-center w-52 h-52 rounded-full top-[75%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          background: "radial-gradient(circle, , #BABFC5 100%)",
        }}
      >
        {" "}
        {/* Creating multiple spans with varying delays */}
        <span
          className="pulse"
          style={{ "--i": 0 } as React.CSSProperties}
        ></span>
        <span
          className="pulse"
          style={{ "--i": 1 } as React.CSSProperties}
        ></span>
        <span
          className="pulse"
          style={{ "--i": 2 } as React.CSSProperties}
        ></span>
        <span
          className="pulse"
          style={{ "--i": 3 } as React.CSSProperties}
        ></span>
        <style jsx>{`
          .relative {
            position: relative;
          }
          .pulse {
            position: absolute;
            width: 100%;
            height: 100%;
            background: rgba(
              0,
              104,
              226,
              0.3
            ); /* Adjust color and opacity for a similar look */
            border-radius: 50%;
            animation: pulseAnimate 4s ease-out infinite;
            animation-delay: calc(1s * var(--i));
          }

          @keyframes pulseAnimate {
            0% {
              opacity: 0.8;
              transform: scale(1);
            }
            100% {
              opacity: 0;
              transform: scale(2);
            }
          }

          /* Media query for small screens */
          @media (max-width: 640px) {
            .pulse {
              width: 75%; /* Reduce width to 75% on small screens */
              height: 75%; /* Reduce height to 75% on small screens */
              top: 12.5%; /* Center the pulse vertically */
              left: 12.5%; /* Center the pulse horizontally */
            }
          }
          @media (max-width: 360px) {
            .pulse {
              width: 65%; /* Reduce width to 75% on small screens */
              height: 65%; /* Reduce height to 75% on small screens */
              top: 12.5%; /* Center the pulse vertically */
              left: 12.5%; /* Center the pulse horizontally */
            }
          }
        `}</style>
      </div>

      <div className="spline-wrapper">
        <Spline
          className="h-screen absolute content-center place-items-center top-48 flex justify-center items-center"
          scene="https://prod.spline.design/Ut6-u4zKMonMrzN2/scene.splinecode"
        />
      </div>

      <div className="pt-10 text-center">
        <p className="text-2xl md:text-5xl lg:text-6xl w-full font-tomorrow font-medium">
          Crafting Design <br /> with User Experience Research
        </p>
        <p className="text-sm md:text-base mt-4 text-[#d1d1d1]">
          This website contains details about my explorations, and my work
          experience. <br /> Hopefully it can give you the insight and
          information you need!
        </p>

        <div className="flex gap-4 mt-6 justify-center">
          <Button
            color="primary"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/10yMNt46Ojl5-oDDIfQXrQh0gJN3k-CR3/view?usp=sharing",
                "_blank"
              )
            }
          >
            Download CV <DownloadIcon />
          </Button>
          <Button
            variant="bordered"
            className="text-white border-[#d1d1d1]"
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=izalmfrds@gmail.com",
                "_blank"
              )
            }
          >
            Send Email
            <Gmail />
          </Button>
        </div>
      </div>
    </div>
  );
}
