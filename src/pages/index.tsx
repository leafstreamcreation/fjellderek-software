
import { title, subtitle, text } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { 
  Button,
  Link,
  Card,
  CardHeader,
  CardBody,
  Divider,
} from "@heroui/react";


export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center  md:py-10">
        
          <h1 className="mt-4 inline-block w-full pt-8 text-center justify-center bg-gradient-to-b from-[#5EA2EF] to-[#0072F5]">
            <span className={title({ color: "cyan", offset: "topleft" })}>Borderless&nbsp;</span>
            <span className={title()}>Software Applications</span>
          </h1>
          <div className="w-full flex justify-center bg-[#0072F5]">
            <Card fullWidth className="my-8 px-2 mx-4 max-w-lg">
              
              <CardHeader>
                <h2 className="flex w-full gap-2">
                  <span className={subtitle()}>Any&nbsp;problem.&nbsp;Any&nbsp;team.&nbsp;</span>
                  <span className={subtitle({ italic:true, color:"cyan" })}>Anywhere</span>
                </h2>
              </CardHeader>
                <Divider></Divider>
              <CardBody>
                <p className={text()}>
                  Bringing experience, adaptability, diverse perspective and modern techniques
                </p>
                <p>
                  <span className={text()}>to create </span>
                  <span className={text({color: "cyan"})}>software fit for a global stage.</span>
                </p>
              </CardBody>
            </Card>
          </div>
        <h1 className="bg-[#0072F5] inline-block w-full py-8 text-center justify-center bg-gradient-to-b from-[#FF705B] to-[#FFB457]">
          <span className={title({ color: "blue", offset: "topleft" })}>Holistic&nbsp;</span>
          <span className={title()}>Engineering</span>
        </h1>
        <div className="w-full flex justify-center bg-[#FFB457]">
          <Card fullWidth className="mb-8 px-2 mx-4 max-w-lg">
            <CardHeader>
              <h2 className="flex w-full gap-0 sm:gap-2">
                <span className={subtitle({ italic: true, color: "blue" })}>Comprehensive&nbsp;</span>
                <span className={subtitle()}>production&nbsp;methods</span>
              </h2>
            </CardHeader>
              <Divider></Divider>
            <CardBody>
              <p className={text()}>
                Drawing on expansive engineering and domain knowledge
              </p>
              <p className={text()}>
                Building each software component from the ground up
              </p>
              <p className={text()}>
                From specification and architecture to testing and deployment
              </p>
              <p>
                <span className={text()}>
                  Delivering&nbsp;
                </span>
                <span className={text({ color: "blue" })}>
                  robust&nbsp;applications
                </span>
                <span className={text()}>
                  &nbsp;and&nbsp;
                </span>
                <span className={text({ color: "blue", textWrap: "none" })}>
                  total&nbsp;user&nbsp;satisfaction.
                </span>
              </p>
            </CardBody>
          </Card>
        </div>
        <h1 className="inline-block w-full py-8 px-4 text-center justify-center bg-gradient-to-b from-[#5EA2EF] to-[#0072F5]">
          <span className={title({ color: "yellow", offset: "topleft" })}>Human</span>
          <span className={title()}>-First Solutions</span>
        </h1>
        <div className="w-full flex justify-center bg-[#0072F5]">
          <Card fullWidth className="mb-8 px-2 mx-4 max-w-lg">
            <CardHeader>
              <h2 className="flex w-full gap-2">
                <span className={subtitle()}>Software with a&nbsp;</span>
                <span className={subtitle({ italic: true, color: "yellow" })}>Beating&nbsp;Heart</span>
              </h2>
            </CardHeader>
              <Divider></Divider>
            <CardBody>
              <p className={text()}>
                Humane development for people and the planet
              </p>
              <p className={text()}>
                Applications that empower users' lives and communities
              </p>
              <p className={text()}>
                Practical, accessible, localized and user-friendly design
              </p>
              <p className={text({ color: "yellow", textWrap: "none" })}>
                  People&nbsp;and&nbsp;technology working&nbsp;in&nbsp;harmony.
              </p>
            </CardBody>
          </Card>
        </div>
        <h1 className="inline-block w-full py-8 text-center justify-center bg-gradient-to-b from-[#FF705B] to-[#FFB457]">
          <span className={title({ color: "cyan", offset: "topleft" })}>Formidable&nbsp;</span>
          <span className={title()}>Cost Efficiency</span>
        </h1>
        <div className="w-full flex justify-center bg-[#FFB457]">
          <Card fullWidth className="px-2 mx-4 max-w-lg mb-8">
            <CardHeader>
              <h2 className="flex w-full gap-2">
                <span className={subtitle({ italic: true, color: "cyan" })}>More&nbsp;value.&nbsp;</span>
                <span className={subtitle()}>Less&nbsp;resources</span>
              </h2>
            </CardHeader>
              <Divider></Divider>
            <CardBody>
              <p className={text()}>
                Lean workflows, efficient tools and a global advantage come together
              </p>
              <p>
                <span className={text()}>
                  Providing&nbsp;
                </span>
                <span className={text({ color: "cyan"  })}>
                  flexible,&nbsp;equitable&nbsp;
                </span>
                <span className={text()}>
                  and&nbsp;
                </span>
                <span className={text({ color: "cyan", textWrap: "none" })}>
                  competitive&nbsp;pricing&nbsp;
                </span>
                <span className={text()}>
                  for every project.
                </span>
              </p>
            </CardBody>
          </Card>
        </div>
        <Button as={Link} href="/skills" className="my-8" size="lg" radius="full" variant="bordered" color="success">See My Skills -&gt;</Button>
      </section>
    </DefaultLayout>
  );
}
