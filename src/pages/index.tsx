
import { title, subtitle, text } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { 
  Button,
  Link,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
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
        <Card fullWidth className="my-8 px-2">
          <CardHeader>
            <h2 className="mt-4">
              <span className={subtitle({ offset: "topleft"})}>I&nbsp;am&nbsp;</span>
              <span className={subtitle({ color: "blue", offset: "topleft"})}>Derek</span>
              <br />
              <span className={subtitle()}>Welcome to my software page</span>
            </h2>
          </CardHeader>
          <CardBody>
            <Divider className="mb-4"></Divider>
            <p>
              The landscape of technology is ever-growing.
            </p>
            <br />
            <p>
              My experience and open mind are a compass.
            </p>
            <br />
            <p>
              Keeping us from being lost in the possibilities
            </p>
            <br />
            <p>
            And returning from the journey
            </p>
            <br />
            <p>
               With diverse perspectives and modern techniques
            </p>
            <br />
            <p>
               Creating software worthy of a global stage
            </p>
          </CardBody>
        </Card>
        <h1 className="my-8 inline-block max-w-lg text-center justify-center">
          <span className={title({ color: "blue", offset: "topleft" })}>Holistic&nbsp;</span>
          <span className={title()}>Engineering</span>
        </h1>
        <Card fullWidth className="mb-8 px-2">
          <CardBody>
            <p className="text-wrap text-left">
              Software solutions from the ground up, with a focus on every component of the system.
            </p>
          </CardBody>
        </Card>
        <h1 className="my-8 inline-block max-w-lg text-center justify-center">
          <span className={title({ color: "yellow", offset: "topleft" })}>Human</span>
          <span className={title()}>-First Solutions</span>
        </h1>
        <Card fullWidth className="mb-8 px-2">
          <CardBody>
            <p className="text-wrap text-left">
              Software solutions that are scalable, maintainable, and adaptable to the ever-changing needs of users. I focus on creating software that is not only functional but also user-friendly and accessible to everyone.
            </p>
          </CardBody>
        </Card>
        <h1 className="my-8 inline-block max-w-lg text-center justify-center">
          <span className={title({ color: "cyan", offset: "topleft" })}>Formidable&nbsp;</span>
          <span className={title()}>Cost Efficiency</span>
        </h1>
        <Card fullWidth className="px-2">
          <CardBody>
            <p className="text-wrap text-left">
              I offer competitive pricing for my services, ensuring that you get the best value for your investment. My goal is to build long-term relationships with clients by delivering exceptional results at a fair price.
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
