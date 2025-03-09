import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export default function BlogPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>My&nbsp;</span>
          <span className={title({ color: "violet" })}>Blog</span>
          <br />
          <div className={subtitle({ class: "mt-4" })}>
            My blog posts which will be searchable and have cards with descriptions which link to a blog page for each post. Topics covered will be tutorials, learning processes, critical analyses of important technologies, and journal posts.    
          </div>
        </div>
        <Button as={Link} href="/toolkits" size="lg" radius="full" variant="bordered" color="success">Toolkits -&gt;</Button>
      </section>
    </DefaultLayout>
  );
}
