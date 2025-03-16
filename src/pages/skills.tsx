import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Progress, Input, Select, SelectItem, Selection } from "@heroui/react";
import { skills, Skill, groups, Group } from "@/site-content/skills.ts";
import { useState } from "react";


import { InProgress } from "@/components/in-progress";

export default function SkillsPage() {
  const [searchKey, setSearchKey] = useState("");
  const [selectedGroup, setSelectedGroup] = useState<Selection>(new Set(["All"]));

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
        <Select selectedKeys={selectedGroup} onSelectionChange={setSelectedGroup} label="Skill Domain(s)">
          {groups.map((group:Group) => (
            <SelectItem key={group.name}>
              {group.label}
            </SelectItem>
          ))}
        </Select>
        <Input placeholder="Search within this domain:" size="lg" value={searchKey} onValueChange={setSearchKey} />
        {
          skills.map((skill:Skill) => {
            if (skill.name.toLowerCase().includes(searchKey.toLowerCase()) || skill.keys.some(key => key.toLowerCase().includes(searchKey.toLowerCase()))) {
              return (
                <Progress key={skill.name} value={skill.proficiency}  label={skill.name} size="lg" />
              );
            }
            else return null;
          })
        }
        <Button as={Link} href="/experience" size="lg" radius="full" variant="bordered" color="success">See My Experience</Button>
      </section>
    </DefaultLayout>
  );
}
