import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export default function VisionPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>My&nbsp;</span>
          <span className={title({ color: "violet" })}>Vision&nbsp;</span>
          <br />
          <div className={subtitle({ class: "mt-4" })}>
            I build tools that help. I design software that puts people first, helping others to gain connection with themselves and others and helping to solve problems that people cannot achieve on their own.
          </div>
        </div>
        <Button as={Link} href="/skills" size="lg" radius="full" variant="bordered" color="success">See My Skills</Button>
      </section>
    </DefaultLayout>
  );
}
