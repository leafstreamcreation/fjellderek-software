import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Input, Select, SelectItem, Selection, Accordion, AccordionItem, } from "@heroui/react";
import { Skill, Group, groups } from "@/site-content/Skills/skills";
import { useState } from "react";
import { PrimarySkill, SubSkills } from "@/components/skill";

import { BrandIcons } from "@/components/icons";


import { InProgress } from "@/components/in-progress";

export default function SkillsPage() {
  const [searchKey, setSearchKey] = useState("");
  const [selectedGroup, setSelectedGroup] = useState<Selection>(new Set(["all"]));
  const [groupKey, setGroupKey] = useState("all");
  function handleSelection(selection: Selection) {
    setGroupKey(Array.from(selection).join(', '));
    setSelectedGroup(selection);
  }

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          <InProgress />
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>My&nbsp;</span>
          <span className={title({ color: "blue" })}>Skills&nbsp;</span>
          <br />
          <div className={subtitle({ class: "mt-4" })}>
            Here I will have a skill table that has skills grouped by stack and visual indicators of proficiency level. The user can select a stack and search for relevant skills. There will also be a default set of displayed skills
          </div>
        </div>
        <Select selectedKeys={selectedGroup} onSelectionChange={handleSelection} label="Skill Domain(s)">
          {Object.values(groups).map((group:Group) => (
            <SelectItem key={group.name}>
              {group.label}
            </SelectItem>
          ))}
        </Select>
        <Input placeholder="Search within this domain:" size="lg" value={searchKey} onValueChange={setSearchKey} />
        <Accordion selectionMode="single" selectionBehavior="replace" itemClasses={{ trigger: "justify-between", startContent: "grow", titleWrapper: "w-0 flex-none" }}>  
        {
          groups[groupKey].skills.map((skill:Skill) => {
            if (skill.name.toLowerCase().includes(searchKey.toLowerCase()) || skill.keys?.some(key => key.includes(searchKey.toLowerCase()))) {
              if (skill.subSkills){
                return (
                  <AccordionItem 
                    key={skill.name} 
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
