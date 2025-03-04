
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>Hello!&nbsp;I'm&nbsp;</span>
          <span className={title({ color: "violet" })}>Derek.&nbsp;</span>
          <br />
          <span className={title()}>
            Welcome to my web developer page.
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            Here you may learn about my skills, projects, and vision. Whether you are a fellow coder or a prospective client, there are resources here to find the sofware solution you need.
          </div>
        </div>
        <Button as={Link} href="/vision" size="lg" radius="full" variant="bordered" color="success">Start Here</Button>
      </section>
    </DefaultLayout>
  );
}
