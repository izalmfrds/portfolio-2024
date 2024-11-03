import { Card, CardHeader, CardFooter } from "@nextui-org/card";
import TelkomLogo from "@/Assets/Image/TelkomFoundationLogo.png";
import CemindoLogo from "@/Assets/Image/cemindologo.png";
import IflabsLogo from "@/Assets/Image/iflabs logo.png";
import Image from "next/image";

function experience() {
  return (
    // <div className="max-w-6xl mx-auto py-20 space-y-6 z-50 ">
    //   <div className="space-y-2  text-center ">
    //     <p className="tomo text-4xl font-semibold pb-6 grow mt-32 z-50 ">
    //       Work Experience
    //     </p>
    //     <p className="text-base text-[#d1d1d1]">
    //       I am actively involved in organizing various projects, especially in
    //       UI/UX design with over a year of experience, and I have been involved
    //       in UI/UX design in project-based application development and
    //       research-based application development, so that I can adapt faster and
    //       better to software application development tasks and work environment.
    //     </p>
    //   </div>

    //   {/* Company */}
    //   <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
    //     {/* 1 */}
    //     <Card className="p-4 border-white w-full">
    //       <CardHeader className="gap-4 flex flex-col justify-start">
    //         <div className="flex flex-row gap-4 w-full">
    //           <Image
    //             src={TelkomLogo}
    //             alt="Picture of the author"
    //             className="w-[48px] h-[48px]"
    //           />
    //           <div className="flex flex-col gap-1">
    //             <p className="text-xl font-semibold">Telkom Foundation</p>
    //             <p className="text-xs font-normal text-[#d1d1d1]">
    //               Bandung, Indonesia
    //             </p>
    //           </div>
    //         </div>
    //         <div className="gap-0 w-full">
    //           <p className="text-xl font-medium w-full">UI/UX Designer</p>
    //           <p className="text-sm font-medium w-full text-[#d1d1d1]">
    //             Feb, 2024 - Now
    //           </p>
    //         </div>
    //       </CardHeader>
    //     </Card>

    //     {/* 2 */}
    //     <Card className="p-4 border-white w-full">
    //       <CardHeader className="gap-4 flex flex-col">
    //         <div className="flex flex-row gap-4 w-full">
    //           <Image
    //             src={CemindoLogo}
    //             alt="Picture of the author"
    //             className="w-[48px] h-[48px]"
    //           />
    //           <div className="flex flex-col gap-1">
    //             <p className="text-xl font-semibold">PT Cemindo Gemilang</p>
    //             <p className="text-xs font-normal text-[#d1d1d1]">
    //               Banten, Indonesia
    //             </p>
    //           </div>
    //         </div>
    //         <div className="gap-0 w-full">
    //           <p className="text-xl font-medium w-full">UI/UX Designer</p>
    //           <p className="text-sm font-medium w-full text-[#d1d1d1]">
    //             Feb, 2024 - Now
    //           </p>
    //         </div>
    //       </CardHeader>
    //     </Card>

    //     {/* 3 */}
    //     <Card className="p-4 border-white w-full">
    //       <CardHeader className="gap-4 flex flex-col">
    //         <div className="flex flex-row gap-4 w-full">
    //           <Image
    //             src={IflabsLogo}
    //             alt="Picture of the author"
    //             className="w-[48px] h-[48px]"
    //           />
    //           <div className="flex flex-col gap-1">
    //             <p className="text-xl font-semibold">Informatics Laboratory</p>
    //             <p className="text-xs font-normal text-[#d1d1d1]">
    //               Bandung, Indonesia
    //             </p>
    //           </div>
    //         </div>
    //         <div className="gap-0 w-full">
    //           <p className="text-xl font-medium w-full">UI/UX Designer</p>
    //           <p className="text-sm font-medium w-full text-[#d1d1d1]">
    //             Feb, 2024 - Now
    //           </p>
    //         </div>
    //       </CardHeader>
    //     </Card>
    //   </div>
    // </div>

    <section className="grid gap-8 md:gap-12 px-4">
      <div className="relative after:absolute after:inset-y-2 after:w-1 after:bg-gray-700 after:left-[-4px] md:after:left-1 lg:after:left-2 xl:after:left-3 grid gap-8 md:gap-12 pl-6 md:pl-8 ">
        <div className="grid gap-4 relative">
          <div className="aspect-square w-5 bg-white rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
          <div className="font-medium text-lg">2024 - Present</div>
          <div>
            <h3 className="font-semibold text-xl text-white">
              Telkom Foundation
            </h3>
            <h4 className=" font-light text-md mb-4">
              UI/UX Designer | Contract
            </h4>
            <p className="text-justify">
              Collaborated with systems analysts to implement project
              requirements for the DigiTS project, ensuring timely completion of
              technical and functional aspects. Worked with designers to develop
              and implement design systems, achieving project milestones on
              schedule. Developed user interfaces and experiences, consistently
              meeting deadlines, and created reusable design components to
              streamline the process and ensure consistency across projects.
              Coordinated closely with the development team to deliver
              high-quality, specification-compliant final designs.
            </p>
            <div className="flex flex-wrap gap-2 mt-4 text-sm">
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                Figma
              </div>
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                Adobe Photshop
              </div>
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                Adobe Illustrator
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-4 relative">
          <div className="aspect-square w-5 bg-white rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
          <div className="font-medium text-lg">2024 - 2023</div>
          <div>
            <h3 className="font-semibold text-xl text-white">
              Informatics Lab of Telkom University
            </h3>
            <h4 className=" font-light text-md mb-4">
              Practicum Assitance | Freelance
            </h4>
            <p className="text-justify">
              Provided intensive supervision and guidance to web programmers
              during practicums, ensuring optimal skill development. Acted as a
              mentor, supporting participants in understanding key web
              development concepts, current technologies, and best practices.
              Conducted thorough assessments of their work, focusing on
              improving code quality, design effectiveness, and implementing
              innovative solutions.
            </p>

            <div className="flex flex-wrap gap-2 mt-4 text-sm">
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                CI3
              </div>
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                HTML
              </div>
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                CSS
              </div>
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                Bootstrap
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-4 relative">
          <div className="aspect-square w-5 bg-white rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
          <div className="font-medium text-lg"> Mei, 2022 - Jul,2023</div>
          <div>
            <h3 className="font-semibold text-xl text-white">
              PT Cemindo Gemilang Tbk
            </h3>
            <h4 className=" font-light text-md mb-4">
              UI/UX Designer & Web Developer | Magang
            </h4>
            <p className="text-justify">
              Implemented the Design Thinking process to solve problems
              effectively by researching user needs within warehouse systems and
              employees. Designed a user interface using Figma based on the
              research findings, then translated the design into code using
              HTML, Bootstrap, and CodeIgniter 3 (CI3) with a MySQL database.
            </p>
            <div className="flex flex-wrap gap-2 mt-4 text-sm">
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                Figma
              </div>
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                CI3
              </div>
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                Bootstrap
              </div>
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                MySql
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default experience;
