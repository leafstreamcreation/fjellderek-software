
import { title, subtitle, text } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

//holistic software engineering
//full stack web development
//data science and machine learning
//cloud computing and devops
//mobile app development
//cybersecurity and ethical hacking

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center  md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1>
            <span className={title()}>Hello!&nbsp;I'm&nbsp;</span>
            <span className={title({ color: "cyan" })}>Derek</span>
          </h1>
          <h2 className="mt-4">
            <span className={subtitle({ color: "yellow", class: "mt-6" })}>Welcome&nbsp;</span>
            <span className={subtitle()}>to&nbsp;my&nbsp;</span>
            <p className={subtitle({ color: "blue" })}>
              software development homepage
            </p>
          </h2>
          <p className="mt-8">
            <span className={text()}>A portal to my </span>
            <span className={text({ color: "cyan" })}>
            vision, experience, projects,
            </span>
            <span className={text()}> and </span>
            <span className={text({ color: "cyan" })}>
            resources
            </span>
          </p>
          <p className="mt-6">
            <span className={text()}>
            This site contains&nbsp;
            </span>
            <span className={text({ color: "yellow" })}>
              all about me and my work&nbsp;
            </span>
            <span className={text()}>
            as a software developer
            </span>
          </p>
          <p className="mt-6">
            <span className={text()}>
            May you&nbsp;
            </span>
            <span className={text({ color: "blue" })}>
              find what you seek&nbsp;
            </span>
            <span className={text()}>
            here - if not, you are invited to&nbsp;
            </span>
            <Link href="/contact" className={text({ color: "pink" })}>
              connect with me directly&nbsp;
            </Link>
          </p>
          <p className="mt-6">
            <span className={text()}>
             Once again,&nbsp;
            </span>
            <span className={text({ color: "cyan" })}>
              welcome!&nbsp;
            </span>
            <span className={text()}>
             press the button below or the links above to get started
            </span>
          </p>
        </div>
        <Button as={Link} href="/skills" className="mt-6" size="lg" radius="full" variant="bordered" color="success">Start Here</Button>
      </section>
    </DefaultLayout>
  );
}
