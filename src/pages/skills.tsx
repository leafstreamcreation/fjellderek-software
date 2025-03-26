import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Button } from "@heroui/button";
import { Radio, RadioGroup } from "@heroui/radio";
import { Link } from "@heroui/link";
import { Input, Select, SelectItem, Selection, Accordion, AccordionItem, } from "@heroui/react";
import { Skill, Group, groups } from "@/site-content/Skills/skills";
import { useState } from "react";
import { PrimarySkill, SubSkills } from "@/components/skill";

import { BrandIcons } from "@/components/icons";


import { InProgress } from "@/components/in-progress";

export default function SkillsPage() {
  const [searchKey, setSearchKey] = useState("");
  const [groupSelection, setGroupSelection] = useState<Selection>((new Set(["all"])));
  const [groupKey, setGroupKey] = useState("all");
  const [selectedSkillKey, setSelectedSkillKey] = useState<Selection>(new Set([groups[groupKey].skills[groups[groupKey].skills.length - 1].name]));
  const [sortSelection, setSortSelection] = useState<"alphabetic-ascending" | "alphabetic-descending" | "years" | "proficiency">("alphabetic-ascending");

  const sortFunctions = {
    "alphabetic-ascending": (a: Skill, b: Skill) => new Intl.Collator("en").compare(a.name, b.name),
    "alphabetic-descending": (a: Skill, b: Skill) => new Intl.Collator("en").compare(b.name, a.name),
    "years": (a: Skill, b: Skill) => (b.years || 0) - (a.years || 0),
    "proficiency": (a: Skill, b: Skill) => b.proficiency - a.proficiency,
  };

  function handleSelection(selection: Selection) {
      if (selection !== 'all' && selection.size == 0) setGroupSelection(new Set([groupKey]));
      else {
        setGroupKey(Array.from(selection).join(', '));
        setGroupSelection(selection);
    }
  }

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">

        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>My&nbsp;</span>
          <span className={title({ color: "blue" })}>Skills&nbsp;</span>
        </div>
        <Select selectedKeys={groupSelection} onSelectionChange={handleSelection} label="Category">
          {Object.values(groups).map((group:Group) => (
            <SelectItem key={group.name}>
              {group.label}
            </SelectItem>
          ))}
        </Select>
        <Input placeholder="Filter within this category:" size="lg" value={searchKey} onValueChange={setSearchKey} />
        <RadioGroup size="sm" orientation="horizontal" value={sortSelection} onValueChange={setSortSelection} label="Sort By">
          <Radio value="alphabetic-ascending">Name</Radio>
          <Radio value="alphabetic-descending">Name Z-A</Radio>
          <Radio value="years">Years</Radio>
          <Radio value="proficiency">Proficiency</Radio>
        </RadioGroup>
        <Accordion 
          selectionMode="single" 
          selectionBehavior="replace" 
          itemClasses={{ trigger: "justify-between", startContent: "w-3/4 grow", titleWrapper: "w-0 flex-none" }}
          selectedKeys={selectedSkillKey}
          onSelectionChange={setSelectedSkillKey}
        >  
        {
          groups[groupKey].skills.sort(sortFunctions[sortSelection]).map((skill:Skill) => {
            if (skill.name.toLowerCase().includes(searchKey.toLowerCase()) || skill.keys?.some(key => key.includes(searchKey.toLowerCase()))) {
              if (skill.subSkills && skill.subSkills.length > 0) {
                return (
                  <AccordionItem 
                    key={skill.name}
                    classNames={{ content: "mx-4" }}
                    startContent={
                      <PrimarySkill skill={skill} />
                    }
                  >
                    <SubSkills skill={skill} />
                  </AccordionItem>
                );
              }
              else return (
                <AccordionItem 
                  key={skill.name}
                  hideIndicator
                  classNames={{ base: "pointer-events-none" }}
                  startContent={
                    <PrimarySkill skill={skill} />
                  }
                >
                </AccordionItem>
              );
            }
            else return null;
          })
        }
        </Accordion>
        <Button as={Link} href="/experience" size="lg" radius="full" variant="bordered" color="success">See My Experience</Button>
      </section>
    </DefaultLayout>
  );
}
