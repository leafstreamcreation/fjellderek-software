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
// import { BrandIcons } from "./icons";

export function PrimarySkill({ skill }: { skill: Skill }) {
  const { name, proficiency, years, description, url, /* icon, subSkills */ } = skill
  return (
    <div>
      <Progress 
        classNames={{ base: "mb-2" }}
        value={proficiency} 
        label={
          !url || url === "" ? name :
          <div>
            <span>{name}</span>
            <Link className="pointer-events-auto" isExternal showAnchorIcon href={url} color="foreground"></Link>
          </div>
        }
        showValueLabel={years ? true : false} 
        valueLabel={(years ? years : 0) + 'y'} 
        size="lg" 
      />
      <p className="mx-2 text-wrap text-left text-foreground">{description}</p>
    </div>
  );
};

export function SubSkills({ skill }: { skill: Skill }) {
  const { subSkills } = skill;

  function SubSkillDescription({ subSkill }: { subSkill: Skill }) {
    const { description } = subSkill;
    return description ? <p className="text-wrap text-left mr-4 text-foreground">{description}</p> : null;
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
                    label={
                      !subSkill.url || subSkill.url === "" ? subSkill.name :
                      <div>
                        <span>{subSkill.name}</span>
                        <Link isExternal showAnchorIcon href={subSkill.url} color="foreground"></Link>
                      </div>
                    } 
                    showValueLabel={subSkill.years ? true : false} 
                    valueLabel={(subSkill.years ? subSkill.years : 0) + 'y'} 
                    size="md" 
                  />
                </CardHeader>
                <CardBody className="pt-0 mx-2">
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