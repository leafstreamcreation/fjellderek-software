import DefaultLayout from "@/layouts/default";
import {
  Button,
  Link,
  Card,
  CardBody,
  // CardHeader,
  // CardFooter,
  Image,
  Chip,
  Avatar,
  Divider,
  Progress,
} from "@heroui/react";

import { experience } from "@/site-content/Experience/experience";
import { certifications } from "@/site-content/Experience/certifications";

export default function AboutPage() {
  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "React", level: 92 },
    { name: "Next.js", level: 88 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "TensorFlow", level: 70 },
    { name: "AWS", level: 78 },
  ];


  // const awards = [
  //   {
  //     title: "Innovation Award",
  //     organization: "Tech Leaders Summit",
  //     year: 2023,
  //     description: "Recognized for groundbreaking work in AI-powered analytics solutions."
  //   },
  //   {
  //     title: "Best Web Application",
  //     organization: "Developer Excellence Awards",
  //     year: 2022,
  //     description: "Awarded for exceptional user experience and technical implementation."
  //   }
  // ];

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
                  src="https://placehold.co/400x400/0DA6D4/FFFFFF?text=FD" 
                  className="w-64 h-64 border-4 border-white shadow-xl z-10"
                  alt="Fjell Derek"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
              <Chip color="secondary" variant="flat" className="mb-2">Full Stack Developer & AI Specialist</Chip>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                About <span className="text-secondary-400">Fjell Derek</span>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {skills.map((skill, index) => (
              <Card key={index} className="shadow-md">
                <CardBody>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                    <Chip size="sm">{skill.level}%</Chip>
                  </div>
                  <Progress 
                    value={skill.level} 
                    color={index % 2 === 0 ? "primary" : "secondary"}
                    className="h-2"
                    aria-label={`${skill.name} skill level`}
                  />
                </CardBody>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6">Additional Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Chip variant="flat" color="primary">Docker</Chip>
              <Chip variant="flat" color="primary">GraphQL</Chip>
              <Chip variant="flat" color="primary">MongoDB</Chip>
              <Chip variant="flat" color="primary">PostgreSQL</Chip>
              <Chip variant="flat" color="secondary">Redux</Chip>
              <Chip variant="flat" color="secondary">Tailwind CSS</Chip>
              <Chip variant="flat" color="secondary">Firebase</Chip>
              <Chip variant="flat" color="secondary">CI/CD</Chip>
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
            {/* <p className="text-foreground-500 max-w-2xl mx-auto">
              Professional certifications and industry recognition for my work.
            </p> */}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              {/* <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Certifications</h3> */}
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
            
            {/* <div>
              <h3 className="text-2xl font-bold mb-6 text-center md:text-left mt-8 md:mt-0">Awards</h3>
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <Card key={index} className="bg-gradient-to-r from-primary-100 to-transparent dark:from-primary-900/40 dark:to-transparent">
                    <CardBody>
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold">{award.title}</h4>
                        <Chip size="sm" variant="flat" color="secondary">{award.year}</Chip>
                      </div>
                      <p className="text-sm text-foreground-500 mb-2">{award.organization}</p>
                      <p className="text-foreground-600 dark:text-foreground-400">{award.description}</p>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </div> */}
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
