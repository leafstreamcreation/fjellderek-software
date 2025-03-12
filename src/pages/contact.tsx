import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import { InProgress } from "@/components/in-progress";

export default function ContactPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>Contact&nbsp;</span>
          <span className={title({ color: "pink" })}>Me&nbsp;</span>
          <br />
          <div className={subtitle({ class: "mt-4" })}>
            My contact form which will provide inputs the user to compose an email to me, links to social medias, and maybe an option to schedule time with me - maybe I have greyed out contact feaures that require the user to have a key provided by me?
          </div>
        </div>
        <InProgress />
        <Button as={Link} href="/blog" size="lg" radius="full" variant="bordered" color="success">Blog</Button>
      </section>
    </DefaultLayout>
  );
}
