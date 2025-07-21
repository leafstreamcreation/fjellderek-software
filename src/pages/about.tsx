import DefaultLayout from "@/layouts/default";
import {
  Button,
  Link,
  Card,
  CardBody,
  Image,
  Chip,
  Avatar,
  Divider,
  Progress,
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Selection,
  Accordion,
  AccordionItem,
  ButtonGroup,
} from "@heroui/react";

import { experience } from "@/site-content/Experience/experience";
import { certifications } from "@/site-content/Experience/certifications";
import { Skill, Group, Filter, groups } from "@/site-content/Skills/skills";
import { PrimarySkill, SubSkills } from "@/components/skill";
import { useState } from "react";
import { HamburgerMenuIcon } from "@/components/icons";

export default function AboutPage() {
  // Skills state management
  const [groupSelection, setGroupSelection] = useState<Selection>(new Set(["frontend"]));
  const [groupKey, setGroupKey] = useState("frontend");
  const [searchKey, setSearchKey] = useState("");
  const [selectedSkillKey, setSelectedSkillKey] = useState<Selection>(new Set());
  const [sortSelection, setSortSelection] = useState<"none" | "alphabetic-ascending" | "alphabetic-descending" | "years" | "proficiency">("none");
  const [showAllSkills, setShowAllSkills] = useState(false);

  // Featured skills (8 skills from different categories)
  const featuredSkills = [
    groups.all.skills.find(s => s.name === "JavaScript") || groups.all.skills[0],
    groups.all.skills.find(s => s.name === "Typescript") || groups.all.skills[1],
    groups.all.skills.find(s => s.name === "React.js") || groups.all.skills[2],
    groups.all.skills.find(s => s.name === "NodeJS") || groups.all.skills[3],
    groups.all.skills.find(s => s.name === "Python") || groups.all.skills[4],
    groups.all.skills.find(s => s.name === "Docker") || groups.all.skills[5],
    groups.all.skills.find(s => s.name === "CI/CD") || groups.all.skills[6],
    groups.all.skills.find(s => s.name === "Jest") || groups.all.skills[7],
  ];

  const sortFunctions = {
    "none": (_a: Skill, _b: Skill) => 0,
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
    if (groups[selectedKey].featuredFilters) setSearchKey(groups[selectedKey].featuredFilters[0]?.name || "");
  }

  function filterButtonColor(filterName: string) {
    return searchKey.toLowerCase().includes(filterName.toLowerCase()) ? "primary" : "default";
  }

  function sortButtonColor(selection: "none" | "alphabetic-ascending" | "alphabetic-descending" | "years" | "proficiency") {
    return selection === sortSelection ? "primary" : "default";
  }

  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-primary-900 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-48 h-48 bg-secondary-500/20 rounded-full animate-pulse"></div>
                <Avatar 
                  src="Fjellderek.jpeg" 
                  className="w-64 h-64 border-4 border-white shadow-xl z-10"
                  classNames={{ img: "scale-150 translate-y-16 translate-x-4" }}
                  alt="Fjell Derek"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
              <Chip color="secondary" variant="flat" className="mb-2">AI Agent / DevOps / Full Stack Specialist</Chip>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                About <span className="text-secondary-400">Me</span>
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                I'm a passionate software developer with expertise in building innovative, scalable applications that solve real-world problems. With a focus on AI-powered solutions and modern web technologies, I help businesses transform their digital presence.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Chip variant="flat" color="default" className="bg-white/20">Innovative</Chip>
                <Chip variant="flat" color="default" className="bg-white/20">Detail-Oriented</Chip>
                <Chip variant="flat" color="default" className="bg-white/20">Problem Solver</Chip>
                <Chip variant="flat" color="default" className="bg-white/20">Team Player</Chip>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 md:py-20 bg-content1">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Chip color="primary" variant="flat" className="mb-4">My Expertise</Chip>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack & Tools</h2>
            <p className="text-foreground-500 max-w-2xl mx-auto">
              The technologies, frameworks, and tools I use to bring ideas to life.
            </p>
          </div>
          
          {/* Featured Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {featuredSkills.map((skill, index) => (
              <Card key={index} className="shadow-md">
                <CardBody>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                    <Chip size="sm">{skill.proficiency}%</Chip>
                  </div>
                  <Progress 
                    value={skill.proficiency} 
                    color={index % 2 === 0 ? "primary" : "secondary"}
                    className="h-2"
                    aria-label={`${skill.name} skill level`}
                  />
                  {skill.description && (
                    <p className="text-small text-foreground-500 mt-2">{skill.description}</p>
                  )}
                </CardBody>
              </Card>
            ))}
          </div>
          
          {/* Toggle for All Skills */}
          <div className="text-center mb-8">
            <Button
              color="secondary"
              variant={showAllSkills ? "solid" : "bordered"}
              onPress={() => setShowAllSkills(!showAllSkills)}
              size="lg"
            >
              {showAllSkills ? "Show Less" : "View All Skills"}
            </Button>
          </div>

          {/* All Skills Section */}
          {showAllSkills && (
            <div className="max-w-4xl mx-auto">
              <Card fullWidth className="my-8">
                <CardBody className="items-center overflow-hidden">
                  <Dropdown shouldBlockScroll={false}>
                    <DropdownTrigger>
                      <Button size="lg" startContent={<HamburgerMenuIcon />} color="default" className="text-content2 mb-3">
                        Choose Category
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu 
                      disallowEmptySelection
                      aria-label="Skill category options"
                      selectedKeys={groupSelection}
                      selectionMode="single"
                      variant="flat"
                      onSelectionChange={handleSelection}
                    >
                      {Object.values(groups).map((group: Group) => (
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
                      title={
                        <div className="inline-block max-w-lg text-center justify-center">
                          <span className="text-2xl font-bold text-secondary-500">{groups[groupKey].title}</span>
                        </div>
                      }
                      subtitle={
                        <div className="inline-block max-w-lg text-center justify-center">
                          <p className="text-foreground-500 mt-2">{groups[groupKey].description}</p>
                        </div>
                      }
                      classNames={{ trigger: "flex-col", title: "text-center", indicator: "rotate-90" }}
                    >
                      <Divider />
                      
                      <div className="my-4 flex items-center justify-between">
                        <span className="ml-2 mr-4 text-xl font-semibold inline text-foreground">Filters</span>
                        <Input 
                          classNames={{ label: "text-xs" }} 
                          label="Applied Filter:" 
                          size="lg" 
                          value={searchKey} 
                          onValueChange={setSearchKey} 
                          isClearable 
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2">
                        {groups[groupKey].featuredFilters?.map((filter: Filter) => (
                          <Button 
                            key={filter.name} 
                            color={filterButtonColor(filter.name)} 
                            size="sm"
                            variant="bordered"
                            onPress={() => setSearchKey(filter.name)}
                          >
                            {filter.label}
                          </Button>
                        ))}
                      </div>
                      
                      <div className="flex flex-col">
                        <span className="ml-2 mb-2 mt-4 text-xl font-semibold text-foreground">Sort By</span>
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

              {/* Skills Accordion */}
              <Accordion 
                selectionMode="single" 
                selectionBehavior="replace" 
                itemClasses={{ 
                  trigger: "justify-between", 
                  startContent: "w-3/4 grow", 
                  titleWrapper: "w-0 flex-none" 
                }}
                selectedKeys={selectedSkillKey}
                onSelectionChange={setSelectedSkillKey}
                className="max-w-4xl"
              >  
                {groups[groupKey].skills
                  .slice()
                  .sort(sortFunctions[sortSelection])
                  .map((skill: Skill) => {
                    if (skill.name.toLowerCase().includes(searchKey.toLowerCase()) || 
                        skill.keys?.some(key => key.toLowerCase().includes(searchKey.toLowerCase()))) {
                      
                      if (skill.subSkills && skill.subSkills.length > 0) {
                        return (
                          <AccordionItem 
                            key={skill.name}
                            aria-label={`${skill.name} proficiency: ${skill.proficiency}, years experience: ${skill.years || 0}`}
                            textValue={`${skill.name} proficiency: ${skill.proficiency}, years experience: ${skill.years || 0}`}
                            classNames={{ base: "max-w-4xl", content: "mx-4" }}
                            startContent={<PrimarySkill skill={skill} />}
                          >
                            <SubSkills skill={skill} />
                          </AccordionItem>
                        );
                      } else {
                        return (
                          <AccordionItem 
                            key={skill.name}
                            aria-label={`${skill.name} proficiency: ${skill.proficiency}, years experience: ${skill.years || 0}`}
                            textValue={`${skill.name} proficiency: ${skill.proficiency}, years experience: ${skill.years || 0}`}
                            hideIndicator
                            classNames={{ base: "max-w-4xl pointer-events-none" }}
                            startContent={<PrimarySkill skill={skill} />}
                          >
                          </AccordionItem>
                        );
                      }
                    }
                    return null;
                  })
                }
              </Accordion>
            </div>
          )}
          
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6">Additional Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Chip variant="flat" color="primary">Docker</Chip>
              <Chip variant="flat" color="primary">Java</Chip>
              <Chip variant="flat" color="primary">MongoDB</Chip>
              <Chip variant="flat" color="primary">PostgreSQL</Chip>
              <Chip variant="flat" color="secondary">Maven</Chip>
              <Chip variant="flat" color="secondary">Tailwind CSS</Chip>
              <Chip variant="flat" color="secondary">Vue</Chip>
              <Chip variant="flat" color="secondary">Angular</Chip>
              <Chip variant="flat" color="primary">Jest</Chip>
              <Chip variant="flat" color="primary">Cypress</Chip>
            </div>
          </div>
        </div>
      </section>

      {/* Career Highlights */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Chip color="secondary" variant="flat" className="mb-4">Experience</Chip>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Career Highlights</h2>
            <p className="text-foreground-500 max-w-2xl mx-auto">
              My professional journey and key accomplishments along the way.
            </p>
          </div>
          
          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card key={index} className="border-l-4 border-primary-500 dark:border-primary-400">
                <CardBody>
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400">{job.role}</h3>
                      <p className="text-lg font-medium">{job.company}</p>
                    </div>
                    <Chip size="lg" variant="flat" color="secondary" className="self-start md:self-center mt-2 md:mt-0">
                      {job.period}
                    </Chip>
                  </div>
                  <p className="text-foreground-600 dark:text-foreground-400 mb-4">{job.description}</p>
                  
                  <div>
                    <h4 className="text-sm uppercase tracking-wide font-semibold text-foreground-500 mb-2">Key Achievements</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="text-foreground-600 dark:text-foreground-400">{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-16 md:py-20 bg-content1">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Chip color="primary" variant="flat" className="mb-4">Recognition</Chip>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="shadow-md">
                    <CardBody className="flex flex-row items-center gap-4">
                      <Image 
                        src={cert.icon} 
                        alt={cert.title}
                        width={60}
                        height={60}
                        className="rounded-md"
                      />
                      <div>
                        <h4 className="text-lg font-semibold">{cert.title}</h4>
                        <div className="flex items-center gap-2">
                          <p className="text-foreground-500">{cert.issuer}</p>
                          <Divider orientation="vertical" className="h-4" />
                          <Chip size="sm" variant="flat">{cert.year}</Chip>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interested in Working Together?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Download my resume to learn more about my experience, or get in touch to discuss your project needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              isDisabled
              size="lg"
              color="secondary"
              variant="solid"
              radius="full"
              className="font-medium text-lg px-8"
              startContent={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              }
            >
              Download Resume
            </Button>
            <Button
              as={Link}
              href="/contact"
              size="lg"
              variant="bordered"
              radius="full"
              className="font-medium text-lg px-8 bg-white/10 backdrop-blur-sm text-white"
              endContent={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              }
            >
              Contact Me
            </Button>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
