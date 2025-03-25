import { Progress, AccordionItem, Link } from "@heroui/react";
import { Skill } from "@/site-content/Skills/skills";


// name: string;
// proficiency: number;
// years?: number | null;
// keys?: string[] | null;
// icon?: string | null;
// subSkills?: Skill[] | null;
// description?: string | null;
// url?: string | null;
import { BrandIcons } from "./icons";

export default function PrimarySkill({ skill }: { skill: Skill }) {
  const { name, proficiency, years, keys, icon, subSkills, description, url } = skill
  return (
    <AccordionItem className="w-full" startContent={
      <Progress value={proficiency} label={name} size="lg" />}>
    </AccordionItem>
  );
}