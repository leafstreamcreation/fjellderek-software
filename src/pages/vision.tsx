import { title, subtitle, text } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export default function VisionPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>My&nbsp;</span>
          <span className={title({ color: "green" })}>Vision&nbsp;</span>
         
          </div>
          <div className={subtitle({ class: "mt-4" })}>
        </div>
        <Button as={Link} href="/contact" size="lg" radius="full" variant="bordered" color="success">See My Skills</Button>
      </section>
    </DefaultLayout>
  );
}
