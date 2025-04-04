
import { title, subtitle, text } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { 
  Button,
  Link,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
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
        <div className="inline-block max-w-lg text-center justify-center">
          <h1>
            <span className={title({ color: "cyan" })}>Borderless &nbsp;</span>
            <span className={title()}>Software Development</span>
          </h1>
        </div>
        <Card fullWidth className="mt-6 max-w-lg">
          <CardHeader>
            <h2>
              <span className={subtitle()}>I am&nbsp;</span>
              <span className={subtitle({ color: "blue" })}>Derek</span>
            </h2>
          </CardHeader>
          <CardBody>
            <p className="text-wrap text-left">
              A software engineer with a passion for creating innovative solutions that make a difference. I specialize in full-stack development, with a focus on building scalable and efficient applications. My goal is to deliver high-quality software that meets the needs of users and businesses alike.
            </p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h2>
              <span className={subtitle({ color: "blue" })}>Holistic&nbsp;</span>
              <span className={subtitle()}>Software Engineering</span>
            </h2>
          </CardHeader>
          <CardBody>
            <p className="text-wrap text-left">
              I have a diverse skill set that includes proficiency in various programming languages, frameworks, and tools. I am constantly learning and adapting to new technologies to stay ahead in the ever-evolving tech landscape.
            </p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h2>
              <span className={subtitle({ color: "blue" })}>Human-first&nbsp;</span>
              <span className={subtitle()}>Products</span>
            </h2>
          </CardHeader>
          <CardBody>
            <p className="text-wrap text-left">
              I believe in creating software that is user-friendly and accessible to everyone. My approach to development is centered around understanding the needs of users and delivering solutions that enhance their experience.
            </p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h2>
              <span className={subtitle({ color: "blue" })}>Competitive&nbsp;</span>
              <span className={subtitle()}>Pricing</span>
            </h2>
          </CardHeader>
          <CardBody>
            <p className="text-wrap text-left">
              I offer competitive pricing for my services, ensuring that you get the best value for your investment. My goal is to build long-term relationships with clients by delivering exceptional results at a fair price.
            </p>
          </CardBody>
        </Card>
        <Button as={Link} href="/skills" className="mt-6" size="lg" radius="full" variant="bordered" color="success">See My Skills -&gt;</Button>
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
