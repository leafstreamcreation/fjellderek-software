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
  const dummy = [
    {
      name: "dummy",
      proficiency: 50,
      years: 0,
      icon: "dummy",
      description: "dummy",
      url: "dumm",
    },
    {
      name: "dummy-er",
      proficiency: 90,
      years: 0,
      icon: "dummy",
      description: "dummy",
      url: "dumm",
    },
    {
      name: "a",
      proficiency: 50,
      years: 0,
      icon: "dummy",
      description: "dummy",
      url: "dumm",
    },
    {
      name: "b",
      proficiency: 50,
      years: 0,
      icon: "dummy",
      description: "dummy",
      url: "dumm",
    },
    {
      name: "c",
      proficiency: 50,
      years: 0,
      icon: "dummy",
      description: "dummy",
      url: "dumm",
    },
    {
      name: "d",
      proficiency: 50,
      years: 0,
      icon: "dummy",
      description: "dummy",
      url: "dumm",
    },
    {
      name: "e",
      proficiency: 50,
      years: 0,
      icon: "dummy",
      description: "dummy",
      url: "dumm",
    },
    {
      name: "f",
      proficiency: 50,
      years: 0,
      icon: "dummy",
      description: "dummy",
      url: "dumm",
    },
    {
      name: "g",
      proficiency: 50,
      years: 0,
      icon: "dummy",
      description: "dummy",
      url: "dumm",
    },
    {
      name: "h",
      proficiency: 50,
      years: 0,
      icon: "dummy",
      description: "dummy",
      url: "dumm",
    },
    {
      name: "i",
      proficiency: 50,
      years: 0,
      icon: "dummy",
      description: "dummy",
      url: "dumm",
    },
    {
      name: "j",
      proficiency: 50,
      years: 0,
      icon: "dummy",
      description: "dummy",
      url: "dumm",
    },
    {
      name: "k",
      proficiency: 50,
      years: 0,
      icon: "dummy",
      description: "dummy",
      url: "dumm",
    },
    {
      name: "l",
      proficiency: 50,
      years: 0,
      icon: "dummy",
      description: "dummy",
      url: "dumm",
    },
    {
      name: "m",
      proficiency: 50,
      years: 0,
      icon: "dummy",
      description: "dummy",
      url: "dumm",
    },
    {
      name: "n",
      proficiency: 50,
      years: 0,
      icon: "dummy",
      description: "dummy",
      url: "dumm",
    },
    {
      name: "o",
      proficiency: 50,
      years: 0,
      icon: "dummy",
      description: "dummy",
      url: "dumm",
    },
    {
      name: "p",
      proficiency: 50,
      years: 0,
      icon: "dummy",
      description: "dummy",
      url: "dumm",
    },
  ]
  return (
    <div className="ml-2">
    {
        dummy.map((subSkill: Skill) => (
          <Progress key={skill.name + '-' + subSkill.name} classNames={{ base: "w-auto mb-2" }} value={subSkill.proficiency} label={subSkill.name} size="md" />
        ))
    }
    </div>
  );
}