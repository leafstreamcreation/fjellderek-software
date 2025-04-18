import { title, subtitle, text } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import {
  Card,
  CardHeader,
  CardBody,
} from "@heroui/react";

import { InProgress } from "@/components/in-progress";

export default function ExperiencePage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>My&nbsp;</span>
          <span className={title({ color: "yellow" })}>Experience&nbsp;</span>
          <br />
          <div className={subtitle({ class: "mt-4" })}>
            Here I will place a timeline of my experience from the beggining as a timeline. A search bar will allow the user to seek along the time line and jump to each point along the timeline which the relevant experience.
          </div>
        </div>
        <InProgress />
        <Card fullWidth className="my-8 px-2 max-w-lg">
          <CardHeader>
            <h2 className="flex w-full gap-2">
              <span className={subtitle({ italic:true, color:"yellow" })}>Proscia Inc</span>
            </h2>
          </CardHeader>
          <CardBody>
            <p className={text()}>
            Stuff I did at Proscia
            </p>
          </CardBody>
        </Card>
        <Card fullWidth className="my-8 px-2 max-w-lg">
          <CardHeader>
            <h2 className="flex w-full gap-2">
              <span className={subtitle({ italic:true, color:"cyan" })}>FreeWave Inc</span>
            </h2>
          </CardHeader>
          <CardBody>
            <p className={text()}>
              Stuff I did at Freewave
            </p>
          </CardBody>
        </Card>
        <Card fullWidth className="my-8 px-2 max-w-lg">
          <CardHeader>
            <h2 className="flex w-full gap-2">
              <span className={subtitle({ italic:true, color:"blue" })}>Hazeron Freehold LLC</span>
            </h2>
          </CardHeader>
          <CardBody>
            <p className={text()}>
              Stuff I did at Hazeron
            </p>
          </CardBody>
        </Card>
        <Button as={Link} href="/projects" size="lg" radius="full" variant="bordered" color="success">Next -&gt; Projects</Button>
      </section>
    </DefaultLayout>
  );
}
