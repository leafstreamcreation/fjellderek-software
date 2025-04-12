
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
        
          <h1 className="inline-block max-w-lg text-center justify-center">
            <span className={title({ color: "cyan", offset: "topleft" })}>Borderless&nbsp;</span>
            <span className={title()}>Software Applications</span>
          </h1>
        <Card fullWidth className="my-8 px-2 max-w-lg">
          <CardHeader>
            <h2 className="flex justify-between w-full text-center">
              <span className={subtitle()}>Any&nbsp;problem.</span>
              <span className={subtitle()}>Any&nbsp;team.</span>
              <span className={subtitle({ italic:true, color:"cyan" })}>Anywhere.</span>
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
        <h1 className="my-8 inline-block max-w-lg text-center justify-center">
          <span className={title({ color: "blue", offset: "topleft" })}>Holistic&nbsp;</span>
          <span className={title()}>Engineering</span>
        </h1>
        <Card fullWidth className="mb-8 px-2 max-w-lg">
          <CardBody>
            <p>
              A comprehensive approach to development
            </p>
            <br />
            <p>
              Drawing on expansive engineering and domain knowledge
            </p>
            <br />
            <p>
              To build each software component from the ground up
            </p>
            <br />
            <p>
              From specification and architecture to testing and deployment
            </p>
            <br />
            <p>
              Delivering robust applications and total user satisfaction
            </p>
          </CardBody>
        </Card>
        <h1 className="my-8 inline-block max-w-lg text-center justify-center">
          <span className={title({ color: "yellow", offset: "topleft" })}>Human</span>
          <span className={title()}>-First Solutions</span>
        </h1>
        <Card fullWidth className="mb-8 px-2 max-w-lg">
          <CardBody>
            <p>
              Humane development for people and the planet
            </p>
            <br />
            <p>
              Applications that empower users' lives and communities
            </p>
            <br />
            <p>
              With practical, accessible, localized and user-friendly design
            </p>
          </CardBody>
        </Card>
        <h1 className="my-8 inline-block max-w-lg text-center justify-center">
          <span className={title({ color: "cyan", offset: "topleft" })}>Formidable&nbsp;</span>
          <span className={title()}>Cost Efficiency</span>
        </h1>
        <Card fullWidth className="px-2 max-w-lg">
          <CardBody>
            <p>
              More value, less resources
            </p>
            <br />
            <p>
              Lean workflows, efficient tools and a global advantage come together
            </p>
            <br />
            <p>
              Providing flexible, equitable and competitive pricing for every project
            </p>
          </CardBody>
        </Card>
        <Button as={Link} href="/skills" className="my-6" size="lg" radius="full" variant="bordered" color="success">See My Skills -&gt;</Button>
      </section>
    </DefaultLayout>
  );
}
