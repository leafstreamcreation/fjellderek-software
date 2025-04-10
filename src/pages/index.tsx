
import { title, subtitle, text } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { 
  Button,
  Link,
  Card,
  CardBody,
} from "@heroui/react";

//software for a new age
//holistic software engineering
//borderless software development
//human-first products                    
//competitive pricing


export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center  md:py-10">
        
          <h1 className="inline-block max-w-lg text-center justify-center">
            <span className={title({ color: "cyan", offset: "topleft" })}>Borderless&nbsp;</span>
            <span className={title()}>Software Applications</span>
          </h1>
        <Card fullWidth className="my-8 px-2 max-w-lg">
          <CardBody>
            <p>
              Any problem, any team, anywhere
            </p>
            <br />
            <p>
              Bringing experience, adaptability, diverse perspective and modern techniques
            </p>
            <br />
            <p>
              To create software fit for a global stage
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
          // <h2 className="mt-4">
          //   <span className={subtitle({ color: "yellow", class: "mt-6" })}>Welcome&nbsp;</span>
          //   <span className={subtitle()}>to&nbsp;my&nbsp;</span>
          //   <p className={subtitle({ color: "blue" })}>
          //     software development homepage
          //   </p>
          // </h2>
          // <p className="mt-8">
          //   <span className={text()}>A portal to my </span>
          //   <span className={text({ color: "cyan" })}>
          //   vision, experience, projects,
          //   </span>
          //   <span className={text()}> and </span>
          //   <span className={text({ color: "cyan" })}>
          //   resources
          //   </span>
          // </p>
          // <p className="mt-6">
          //   <span className={text()}>
          //   This site contains&nbsp;
          //   </span>
          //   <span className={text({ color: "yellow" })}>
          //     all about me and my work&nbsp;
          //   </span>
          //   <span className={text()}>
          //   as a software developer
          //   </span>
          // </p>
          // <p className="mt-6">
          //   <span className={text()}>
          //   May you&nbsp;
          //   </span>
          //   <span className={text({ color: "blue" })}>
          //     find what you seek&nbsp;
          //   </span>
          //   <span className={text()}>
          //   here - if not, you are invited to&nbsp;
          //   </span>
          //   <Link href="/contact" className={text({ color: "pink" })}>
          //     connect with me directly&nbsp;
          //   </Link>
          // </p>
          // <p className="mt-6">
          //   <span className={text()}>
          //    Once again,&nbsp;
          //   </span>
          //   <span className={text({ color: "cyan" })}>
          //     welcome!&nbsp;
          //   </span>
          //   <span className={text()}>
          //    press the button below or the links above to get started
          //   </span>
          // </p>
