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

export function PrimarySkill({ skill }: { skill: Skill }) {
  const { name, proficiency, years, keys, icon, subSkills, description, url } = skill
  return (
    <Progress value={proficiency} label={name} size="lg" />
  );
};

export function SubSkills({ skill }: { skill: Skill }) {
  const { subSkills } = skill;

  return (
    <>
    {
        subSkills!.map((subSkill: Skill) => {
          return (
            <Progress key={skill.name + '-' + subSkill.name} classNames={{ base: "w-auto mb-4" }} value={subSkill.proficiency} label={subSkill.name} size="md" />
          );    
        }
      )
    }
    </>
  );
}