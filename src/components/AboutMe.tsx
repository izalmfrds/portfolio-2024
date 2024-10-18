import { Card, CardHeader, CardBody } from "@nextui-org/card";

export default function AboutMe() {
  return (
    <div className="max-w-full mx-auto flex flex-col md:flex-row gap-4 min-h-screen text-center my-[50px] md:my-[100px] px-4 md:px-0">
      <div className="content-center space-y-4 my-auto z-50 mx-auto w-full pt-12 md:pt-0">
        <p className="text-3xl md:text-4xl font-semibold pb-2">About Me</p>
        <p className="text-base md:text-xl text-[#d1d1d1]">
          Hi there! 👋 <br />
          My name is Rizal Maidan Firdaus, someone who has an interest and
          enthusiasm in software development. I work as a full-time UI/UX in the
          software development process. Here are the skills I have:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="w-full">
            <Card className="h-full">
              <CardHeader className="hover:bg-[#0068E2]">
                <video
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover"
                >
                  <source
                    src="https://ouch-cdn2.icons8.com/LqVCF4SYIPstICpCXZNovxJuNfXjjdzF1Bem_tlUef4/skp:webm/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy92aWRlb3Mv/NTQwLzM4YjE4ODZh/LTBlNzgtNDNiYi1i/NjNlLWFmYjk0OTgz/Y2RiZC53ZWJt.webm"
                    type="video/webm"
                  />
                </video>
              </CardHeader>
              <CardBody>
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
          </div>
          <div className="w-full">
            <Card className="h-full">
              <CardHeader className="hover:bg-[#0068E2]">
                <video
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover"
                >
                  <source
                    src="https://ouch-cdn2.icons8.com/ItdIGgJQUNuRBi3WvMiyj7gP9enF8Bl9oLpczzmprJ0/skp:webm/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy92aWRlb3Mv/NDg3L2Q5MDdkZmIz/LTRkNzEtNDdiOC04/ZjhlLWI4NmIzODY2/N2ZkZi53ZWJt.webm"
                    type="video/webm"
                  />
                </video>
              </CardHeader>
              <CardBody>
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
          </div>
          <div className="w-full">
            <Card className="h-full">
              <CardHeader className="hover:bg-[#0068E2]">
                <video
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover"
                >
                  <source
                    src="https://ouch-cdn2.icons8.com/tocBEnPe0doFuHA4PGdx-G4IANeZl0yAzuZsc4QSaWc/skp:webm/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy92aWRlb3Mv/OTIyL2Y0MWRkY2Ex/LWUxNzctNDhjYy1h/ODc2LWY2MjZmOTVi/Njk5YS53ZWJt.webm"
                    type="video/webm"
                  />
                </video>
              </CardHeader>
              <CardBody>
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
          </div>
        </div>
      </div>
    </div>
  );
}
