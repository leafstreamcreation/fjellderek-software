import {Card, CardHeader, CardBody, Divider, Image} from "@heroui/react";
import { subtitle, text } from "@/components/primitives";

export const InProgress = () => {
  return (
    <Card className="bg-warning-700 border border-warning-400">
      <CardHeader className="flex gap-3">
        <Image
          alt="lemon"
          height={50}
          radius="sm"
          src="/fallback_lemon.png"
          width={50}
          removeWrapper
        />
        <span className={subtitle()}>Under Construction</span>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className={text()}>This section of the site is under development and will be available with more content and features later.</p>
      </CardBody>
    </Card>
  );
}
