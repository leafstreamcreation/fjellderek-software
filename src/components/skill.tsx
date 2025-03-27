import { Progress, Link, Card, CardHeader, CardBody } from "@heroui/react";
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
  const { name, proficiency, years, icon, subSkills, description, url } = skill
  return (
    <div>
      <Progress 
        value={proficiency} 
        label={
          !url || url === "" ? name :
          <div>
            <span>{name}</span>
            <Link className="pointer-events-auto" isExternal showAnchorIcon href={url}></Link>
          </div>
        }
        showValueLabel={years ? true : false} 
        valueLabel={(years ? years : 0) + 'y'} 
        size="lg" 
      />
      <p className="mx-2 text-wrap text-left">{description}</p>
    </div>
  );
};

export function SubSkills({ skill }: { skill: Skill }) {
  const { subSkills } = skill;

  function SubSkillDescription({ subSkill }: { subSkill: Skill }) {
    const { description } = subSkill;
    return description ? <p className="text-wrap text-left">{description}</p> : null;
  };

  return (
    <>
      {
          subSkills!.map((subSkill: Skill) => {
            return (
              <Card key={skill.name + '-' + subSkill.name} className="mb-2" fullWidth>
                <CardHeader>
                  <Progress  
                    classNames={{ base: "w-full" }} 
                    value={subSkill.proficiency} 
                    label={subSkill.name} 
                    showValueLabel={subSkill.years ? true : false} 
                    valueLabel={(subSkill.years ? subSkill.years : 0) + 'y'} 
                    size="md" 
                  />
                </CardHeader>
                <CardBody>
                  <SubSkillDescription subSkill={subSkill}></SubSkillDescription>
                </CardBody>
              </Card>
            );    
          }
        )
      }
    </>
  );
}