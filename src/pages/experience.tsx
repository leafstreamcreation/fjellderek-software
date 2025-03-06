import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export default function ExperiencePage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>My&nbsp;</span>
          <span className={title({ color: "violet" })}>Experience&nbsp;</span>
          <br />
          <div className={subtitle({ class: "mt-4" })}>
            Here I will place a timeline of my experience from the beggining as a timeline. A search bar will allow the user to seek along the time line and jump to each point along the timeline which the relevant experience.
          </div>
        </div>
        <Button as={Link} href="/projects" size="lg" radius="full" variant="bordered" color="success">Next -&gt; Projects</Button>
      </section>
    </DefaultLayout>
  );
}
