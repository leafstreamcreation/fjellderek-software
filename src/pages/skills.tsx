import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Button } from "@heroui/button";
import { RadioGroup } from "@heroui/radio";
import { Link } from "@heroui/link";
import { 
  Input, 
  Dropdown, 
  DropdownTrigger, 
  DropdownMenu, 
  DropdownItem,
  Selection, 
  Accordion, 
  AccordionItem, 
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider
 } from "@heroui/react";
import { Skill, Group, groups } from "@/site-content/Skills/skills";
import { useState } from "react";
import { PrimarySkill, SubSkills } from "@/components/skill";
import { AlpineRadio } from "@/components/alpine-radio";

import { BrandIcons } from "@/components/icons";


export default function SkillsPage() {
  const [searchKey, setSearchKey] = useState("");
  const [groupSelection, setGroupSelection] = useState<Selection>((new Set(["frontend"])));
  const [groupKey, setGroupKey] = useState("frontend");
  const [selectedSkillKey, setSelectedSkillKey] = useState<Selection>(new Set([groups[groupKey].skills[0].name]));
  const [sortSelection, setSortSelection] = useState<"none" | "alphabetic-ascending" | "alphabetic-descending" | "years" | "proficiency">("none");

  const sortFunctions = {
    "none": (a: Skill, b: Skill) => 0, // No sorting
    "alphabetic-ascending": (a: Skill, b: Skill) => new Intl.Collator("en").compare(a.name, b.name),
    "alphabetic-descending": (a: Skill, b: Skill) => new Intl.Collator("en").compare(b.name, a.name),
    "years": (a: Skill, b: Skill) => (b.years || 0) - (a.years || 0),
    "proficiency": (a: Skill, b: Skill) => b.proficiency - a.proficiency,
  };

  const radioStyles =
            "hover:bg-content2 cursor-pointer p-2 data-[selected=true]:bg-primary data-[selected=true]:border-primary border-default border-x-1 border-y-2 ";

  function handleSelection(selection: Selection) {
      setGroupKey(Array.from(selection).join(', '));
      setGroupSelection(selection);
  }

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="w-full flex items-center justify-center">
          <div className="absolute inline-block max-w-lg text-center">
            <span className={title()}>My&nbsp;</span>
            <span className={title({ color: "blue" })}>Skills&nbsp;</span>
          </div>
            <Dropdown>
              <DropdownTrigger>
                <Button className="relative -right-24" size="sm" isIconOnly variant="bordered" color="default">
                  
                </Button>
              </DropdownTrigger>
              <DropdownMenu 
                disallowEmptySelection
                aria-label="Skill category options"
                selectedKeys={groupSelection}
                selectionMode="single"
                variant="flat"
                onSelectionChange={handleSelection}>
                {Object.values(groups).map((group:Group) => (
                  <DropdownItem key={group.name}>
                    {group.label}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
        </div>
        <Card>
          <CardHeader>
            <div className="inline-block max-w-lg text-center justify-center">
              <span className={title({ color: "yellow" })}>{groups[groupKey].title}</span> 
              <br />
              <p className={subtitle() + " mt-4"}>{groups[groupKey].description}</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <Card fullWidth>
              <CardHeader>
                <span className="mr-4 text-xl font-semibold inline text-default-600">Filters</span>
                <Input classNames={{label: "text-xs"}} label="Applied Filter:" size="lg" value={searchKey} onValueChange={setSearchKey} isClearable />
              </CardHeader>
              <CardBody>
                Foo
              </CardBody>
            </Card>
            
          </CardBody>
          <CardFooter>
            <RadioGroup 
              size="sm" 
              orientation="horizontal" 
              value={sortSelection} 
              onValueChange={(value: string) => setSortSelection(value as "alphabetic-ascending" | "alphabetic-descending" | "years" | "proficiency")} 
              label="Sort By"
              classNames={{
                wrapper: "gap-4"
              }}>
              <AlpineRadio value="none" classNames={{base: radioStyles + "rounded-l-full border-l-2"}}>None</AlpineRadio>
              <AlpineRadio value="alphabetic-ascending" classNames={{base: radioStyles + "border-x-1"}}>Name</AlpineRadio>
              <AlpineRadio value="alphabetic-descending" classNames={{base: radioStyles + "border-x-1"}}>Name Z-A</AlpineRadio>
              <AlpineRadio value="years" classNames={{base: radioStyles + "border-x-1"}}>Years</AlpineRadio>
              <AlpineRadio value="proficiency" classNames={{base: radioStyles + "border-l-1 pr-3 rounded-r-full"}}>Level</AlpineRadio>
            </RadioGroup>
          </CardFooter>
        </Card>
        <Accordion 
          selectionMode="single" 
          selectionBehavior="replace" 
          itemClasses={{ trigger: "justify-between", startContent: "w-3/4 grow", titleWrapper: "w-0 flex-none" }}
          selectedKeys={selectedSkillKey}
          onSelectionChange={setSelectedSkillKey}
        >  
        {
          groups[groupKey].skills.slice().sort(sortFunctions[sortSelection]).map((skill:Skill) => {
            if (skill.name.toLowerCase().includes(searchKey.toLowerCase()) || skill.keys?.some(key => key.includes(searchKey.toLowerCase()))) {
              if (skill.subSkills && skill.subSkills.length > 0) {
                return (
                  <AccordionItem 
                    key={skill.name}
                    textValue={skill.name + ' proficiency: ' + skill.proficiency + ', years experience: ' + (skill.years || 0)}
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
                  textValue={skill.name + ' proficiency: ' + skill.proficiency + ', years experience: ' + (skill.years || 0)}
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
