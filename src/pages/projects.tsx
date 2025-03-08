import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export default function ProjectsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>My&nbsp;</span>
          <span className={title({ color: "cyan" })}>Projects&nbsp;</span>
          <br />
          <div className={subtitle({ class: "mt-4" })}>
            Here I will have a project gallery featuring a card for each project with a thumbnail image and an expanding description of the project and a link to the project, if applicable.
          </div>
        </div>
        <Button as={Link} href="/contact" size="lg" radius="full" variant="bordered" color="success">My Contact Page -&gt;</Button>
      </section>
    </DefaultLayout>
  );
}
