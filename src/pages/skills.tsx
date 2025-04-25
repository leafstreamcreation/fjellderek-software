import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
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
  CardBody,
  Divider,
  Button,
  ButtonGroup,
 } from "@heroui/react";
import { Skill, Group, Filter, groups } from "@/site-content/Skills/skills";
import { useState } from "react";
import { PrimarySkill, SubSkills } from "@/components/skill";

import { HamburgerMenuIcon } from "@/components/icons";


export default function SkillsPage() {
  const [groupSelection, setGroupSelection] = useState<Selection>((new Set(["frontend"])));
  const [groupKey, setGroupKey] = useState("frontend");
  const [searchKey, setSearchKey] = useState("vue");
  const [selectedSkillKey, setSelectedSkillKey] = useState<Selection>(new Set([groups[groupKey].skills[0].name]));
  const [sortSelection, setSortSelection] = useState<"none" | "alphabetic-ascending" | "alphabetic-descending" | "years" | "proficiency">("none");

  const sortFunctions = {
    "none": (_a: Skill, _b: Skill) => 0, // No sorting
    "alphabetic-ascending": (a: Skill, b: Skill) => new Intl.Collator("en").compare(a.name, b.name),
    "alphabetic-descending": (a: Skill, b: Skill) => new Intl.Collator("en").compare(b.name, a.name),
    "years": (a: Skill, b: Skill) => (b.years || 0) - (a.years || 0),
    "proficiency": (a: Skill, b: Skill) => b.proficiency - a.proficiency,
  };

  function handleSelection(selection: Selection) {
    const selectedKey = Array.from(selection).join(', ');
    setSearchKey("");
    setGroupKey(selectedKey);
    setGroupSelection(selection);
    setSortSelection("none");
    if (groups[selectedKey].featuredFilters) setSearchKey(groups[selectedKey].featuredFilters[0].name);
  };

  function filterButtonColor(filterName: string) {
    return searchKey.toLowerCase().includes(filterName) ? "primary" : "default";
  }

  function sortButtonColor (selection: "none" | "alphabetic-ascending" | "alphabetic-descending" | "years" | "proficiency") {
    return selection === sortSelection ? "primary" : "default";
  }

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="w-full flex justify-center items-center">
          <div className="flex max-w-lg text-center justify-end items-center">
            <span className={title()}>My&nbsp;</span>
            <span className={title({ color: "blue" })}>Skills&nbsp;</span>
          </div>
        </div>
        <Card fullWidth className="my-8 max-w-xl">
          <CardBody className="items-center overflow-hidden">
          <Dropdown shouldBlockScroll={false}>
              <DropdownTrigger>
                <Button size="lg" startContent={<HamburgerMenuIcon />} color="default" className="text-primary-200 mb-3">
                  Choose Category
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
            <Divider />
            <Accordion>
              <AccordionItem 
                key="1"
                aria-label="Filter and sort options"
                textValue="Filter and sort options"
                title={<div className="inline-block max-w-lg text-center justify-center">
                  <span className={title({ color: "yellow" })}>{groups[groupKey].title}</span> 
                  <br /> </div>}
                subtitle={<div className="inline-block max-w-lg text-center justify-center">
                    <p className={subtitle() + " mt-4"}>{groups[groupKey].description}</p>
                  </div>}
                classNames={{ trigger: "flex-col", title: "text-center", indicator: "rotate-90" }}
              >
                  
                <Divider />
                <div className="my-4 flex items-center justify-between">
                  <span className="ml-2 mr-4 text-xl font-semibold inline text-default-200">Filters</span>
                  <Input classNames={{label: "text-xs", input: "text-default-900"}} label="Applied Filter:" size="lg" value={searchKey} onValueChange={setSearchKey} isClearable />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {
                    groups[groupKey].featuredFilters?.map((filter: Filter) => {
                      return (
                        <Button 
                          key={filter.name} 
                          color={filterButtonColor(filter.name)} 
                          size="sm"
                          variant="bordered"
                          onPress={() => {setSearchKey(filter.name)}}
                        >
                          {filter.label}
                        </Button>
                      );
                    })
                  }
                </div>
                <div className="flex flex-col">
                  <span className="ml-2 mb-2 mt-4 text-xl font-semibold text-default-200">Sort By</span>
                  <ButtonGroup fullWidth size="sm" radius="full" color="default">
                    <Button color={sortButtonColor("none")} onPress={() => setSortSelection("none")}>None</Button>
                    <Button color={sortButtonColor("alphabetic-ascending")} onPress={() => setSortSelection("alphabetic-ascending")}>Name</Button>
                    <Button color={sortButtonColor("alphabetic-descending")} onPress={() => setSortSelection("alphabetic-descending")}>Name Z-A</Button>
                    <Button color={sortButtonColor("years")} onPress={() => setSortSelection("years")}>Years</Button>
                    <Button color={sortButtonColor("proficiency")} onPress={() => setSortSelection("proficiency")}>Level</Button>
                  </ButtonGroup>
                </div>
              </AccordionItem>
            </Accordion>
          </CardBody>
        </Card>
        <Accordion 
          selectionMode="single" 
          selectionBehavior="replace" 
          itemClasses={{ trigger: "justify-between", startContent: "w-3/4 grow", titleWrapper: "w-0 flex-none" }}
          selectedKeys={selectedSkillKey}
          onSelectionChange={setSelectedSkillKey}
          className="max-w-3xl"
        >  
        {
          groups[groupKey].skills.slice().sort(sortFunctions[sortSelection]).map((skill:Skill) => {
            if (skill.name.toLowerCase().includes(searchKey.toLowerCase()) || skill.keys?.some(key => key.includes(searchKey.toLowerCase()))) {
              if (skill.subSkills && skill.subSkills.length > 0) {
                return (
                  <AccordionItem 
                    key={skill.name}
                    aria-label={skill.name + ' proficiency: ' + skill.proficiency + ', years experience: ' + (skill.years || 0)}
                    textValue={skill.name + ' proficiency: ' + skill.proficiency + ', years experience: ' + (skill.years || 0)}
                    classNames={{ base: "max-w-3xl", content: "mx-4" }}
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
                  aria-label={skill.name + ' proficiency: ' + skill.proficiency + ', years experience: ' + (skill.years || 0)}
                  textValue={skill.name + ' proficiency: ' + skill.proficiency + ', years experience: ' + (skill.years || 0)}
                  hideIndicator
                  classNames={{ base: "max-w-3xl pointer-events-none" }}
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
