import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // gunakan dari react-intersection-observer

export default function AboutMe() {
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.4, // Animasi akan di-trigger saat elemen terlihat 20% di layar
  });
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.6,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.8,
  });

  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div
      id="about"
      className="max-w-full mx-auto flex flex-col md:flex-row gap-4 min-h-screen text-center my-[50px] md:my-[100px] px-4 md:px-0"
    >
      <div className="content-center space-y-4 my-auto z-50 mx-auto w-full pt-12 md:pt-0">
        <p className="text-3xl md:text-4xl font-semibold pb-2">About Me</p>
        <p className="text-base md:text-xl text-[#d1d1d1]">
          Hi there! 👋 <br />
          My name is Rizal Maidan Firdaus, someone who has an interest and
          enthusiasm in software development. I work as a full-time UI/UX in the
          software development process. Here are the skills I have:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[542px]">
          <motion.div
            ref={ref1}
            variants={cardVariant}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            className="w-full"
          >
            <Card className="relative overflow-visible mt-[120px] hover:bg-[#0068E2] min-h-[420px]">
              <CardHeader className="h-full">
                <video
                  autoPlay
                  loop
                  muted
                  className="absolute w-full h-full right-[8px]"
                >
                  <source
                    src="https://ouch-cdn2.icons8.com/6HfJM9AteuBark53a_ZPGFfyhUyvgpPTIZfAo4UEZBY/skp:webm/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy92aWRlb3Mv/NDg1Lzc0N2Y1NGVm/LTA0ZDItNDczNi1i/Y2IwLWNjMGM4ZjE1/ZDBjYi53ZWJt.webm"
                    type="video/webm"
                  />
                </video>
              </CardHeader>
              <CardBody className="pt-[130px]">
                <p className="text-xl md:text-2xl font-bold text-center pb-2">
                  UI/UX Designer
                </p>
                <p className="text-sm md:text-base text-justify">
                  I love doing research to make it easier for users to design
                  user interfaces. In practice, I am very good at using Figma
                  tools, from designing design systems to creating reusable
                  components. In addition, I focus on details and consistency to
                  keep the user experience optimal across platforms.
                </p>
              </CardBody>
            </Card>
          </motion.div>

          <motion.div
            ref={ref2}
            variants={cardVariant}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            className="w-full"
          >
            <Card className="relative overflow-visible mt-[120px] hover:bg-[#0068E2] min-h-[420px]">
              <CardHeader className="">
                <video
                  autoPlay
                  loop
                  muted
                  className="absolute w-full h-full right-[8px]"
                >
                  <source
                    src="https://ouch-cdn2.icons8.com/ItdIGgJQUNuRBi3WvMiyj7gP9enF8Bl9oLpczzmprJ0/skp:webm/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy92aWRlb3Mv/NDg3L2Q5MDdkZmIz/LTRkNzEtNDdiOC04/ZjhlLWI4NmIzODY2/N2ZkZi53ZWJt.webm"
                    type="video/webm"
                  />
                </video>
              </CardHeader>
              <CardBody className="pt-[130px]">
                <p className="text-xl md:text-2xl font-bold text-center pb-2">
                  Project Manager
                </p>
                <p className="text-sm md:text-base text-justify">
                  As a Project Manager, I enjoy the process of designing
                  projects using methods such as Agile. My main focus is on team
                  collaboration, effective communication, and monitoring each
                  stage to ensure that it is on time and that each deliverable
                  meets quality standards and client expectations.
                </p>
              </CardBody>
            </Card>
          </motion.div>

          <motion.div
            ref={ref3}
            variants={cardVariant}
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
            className="w-full"
          >
            <Card className="relative overflow-visible mt-[120px] hover:bg-[#0068E2] min-h-[420px]">
              <CardHeader className="">
                <video
                  autoPlay
                  loop
                  muted
                  className="absolute w-full h-full right-[8px]"
                >
                  <source
                    src="https://ouch-cdn2.icons8.com/c4pcbpitZLxCNCyp6wBDDEF5pHobseDkpWVHpffc2J8/skp:webm/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy92aWRlb3Mv/NDM5L2YzODEyNTJk/LTI2ZWQtNDJhNS04/MWU3LTk2NDA2ZmUx/M2VlOC53ZWJt.webm"
                    type="video/webm"
                  />
                </video>
              </CardHeader>
              <CardBody className="pt-[130px]">
                <p className="text-xl md:text-2xl font-bold text-center pb-2">
                  Web Development
                </p>
                <p className="text-sm md:text-base text-justify">
                  I also enjoy implementing my own designs by writing code using
                  React.js and Next.js, and utilizing Tailwind CSS as a styling
                  framework. This allows me to create responsive and efficient
                  interfaces directly from design to code. In addition, I also
                  pay attention to the use of reusable components, making it
                  easier to develop and maintain applications in the future.
                </p>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
