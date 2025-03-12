import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

import { InProgress } from "@/components/in-progress";

export default function ToolkitsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>My&nbsp;</span>
          <span className={title({ color: "green" })}>Toolkits</span>
          <br />
          <div className={subtitle({ class: "mt-4" })}>
            My toolkit page which contains sets of tools I use to develop software. Tools listed will include things like IDE configurations, frameworks, reference sheets, external reference links (like MDN, but also eventually saved internally to enable PWA/offline access), and AI/content generation tools, all of which will be searchable by topic. Topics will concern all areas of software development I have needed tools for.
          </div>
        </div>
        <InProgress />
      </section>
    </DefaultLayout>
  );
}
