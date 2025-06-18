import DefaultLayout from "@/layouts/default";
import { 
  Button,
  Link,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Chip,
  Avatar
} from "@heroui/react";

export default function IndexPage() {
  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-tr from-primary-900 to-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <Chip color="secondary" variant="flat" className="mb-2">Full Stack Developer, DevOps, & AI Automation Specialist</Chip>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transforming <span className="text-secondary-400">Ideas</span> into <span className="text-secondary-400">Intelligent</span> Solutions
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Crafting innovative software applications that leverage cutting-edge technologies to solve complex problems. Building the future, one line of code at a time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  color="secondary" 
                  variant="solid" 
                  radius="md"
                  as={Link}
                  href="/portfolio"
                  className="font-medium"
                >
                  View Portfolio
                </Button>
                <Button 
                  size="lg" 
                  variant="bordered" 
                  radius="md"
                  as={Link}
                  href="/contact"
                  className="font-medium bg-white/10 backdrop-blur-sm text-white"
                >
                  Hire Me
                </Button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="absolute -top-5 -left-5 w-24 h-24 bg-secondary-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-3 -right-3 w-32 h-32 bg-primary-300 rounded-full opacity-20 animate-pulse delay-300"></div>
                <Image
                  src="https://placehold.co/600x400/123758/FFFFFF?text=Innovative+Solutions"
                  alt="Digital Innovation"
                  className="rounded-xl shadow-2xl z-10 relative"
                  width={600}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-content1">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Chip color="secondary" variant="flat" className="mb-4">Services</Chip>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
            <p className="text-foreground-500 max-w-2xl mx-auto">
              Specialized services combining technical expertise with creative problem-solving to deliver exceptional results.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6 pt-8">
            <div className="w-full md:w-[calc(33.333%-16px)]">
              <Card className="w-full h-full shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-0 flex flex-col items-center text-center">
                  <div className="bg-primary-100 dark:bg-primary-900 p-4 rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-primary-500">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold">Web Development</h3>
                </CardHeader>
                <CardBody className="text-center">
                  <p className="text-foreground-500">
                    Modern, responsive web applications built with React, Vue.js, and other cutting-edge frameworks. From concept to deployment, creating seamless user experiences.
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mt-4">
                    <Chip size="sm" color="secondary" variant="flat">React</Chip>
                    <Chip size="sm" color="secondary" variant="flat">Next.js</Chip>
                    <Chip size="sm" color="secondary" variant="flat">Node.js</Chip>
                  </div>
                </CardBody>
                <CardFooter className="justify-center">
                  <Button 
                    as={Link} 
                    color="primary" 
                    variant="flat" 
                    radius="md"
                    href="/services"
                  >
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            <div className="w-full md:w-[calc(33.333%-16px)]">
              <Card className="w-full h-full shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-0 flex flex-col items-center text-center">
                  <div className="bg-secondary-100 dark:bg-secondary-900 p-4 rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-secondary-500">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold">AI & ML Solutions</h3>
                </CardHeader>
                <CardBody className="text-center">
                  <p className="text-foreground-500">
                    Custom AI implementations that transform your business capabilities. From predictive analytics to natural language processing and computer vision applications.
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mt-4">
                    <Chip size="sm" color="primary" variant="flat">TensorFlow</Chip>
                    <Chip size="sm" color="primary" variant="flat">PyTorch</Chip>
                    <Chip size="sm" color="primary" variant="flat">OpenAI</Chip>
                  </div>
                </CardBody>
                <CardFooter className="justify-center">
                  <Button 
                    as={Link} 
                    color="secondary" 
                    variant="flat" 
                    radius="md"
                    href="/services"
                  >
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="w-full md:w-[calc(33.333%-16px)]">
              <Card className="w-full h-full shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-0 flex flex-col items-center text-center">
                  <div className="bg-primary-100 dark:bg-primary-900 p-4 rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-primary-500">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold">Developer Operations</h3>
                </CardHeader>
                <CardBody className="text-center">
                  <p className="text-foreground-500">
                    Streamlined DevOps practices to enhance your development lifecycle. CI/CD pipelines, containerization, and cloud infrastructure management for efficient deployment and scaling.
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mt-4">
                    <Chip size="sm" color="secondary" variant="flat">CI/CD</Chip>
                    <Chip size="sm" color="secondary" variant="flat">Docker</Chip>
                    <Chip size="sm" color="secondary" variant="flat">Cloud</Chip>
                  </div>
                </CardBody>
                <CardFooter className="justify-center">
                  <Button 
                    as={Link} 
                    color="primary" 
                    variant="flat" 
                    radius="md"
                    href="/services"
                  >
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            <div className="w-full md:w-[calc(33.333%-16px)]">
              <Card className="w-full h-full shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-0 flex flex-col items-center text-center">
                  <div className="bg-primary-100 dark:bg-primary-900 p-4 rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-primary-500">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold">Tech Consulting</h3>
                </CardHeader>
                <CardBody className="text-center">
                  <p className="text-foreground-500">
                    Strategic technology consulting to help you navigate complex technical decisions. Architecture planning, tech stack selection, and digital transformation guidance.
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mt-4">
                    <Chip size="sm" color="secondary" variant="flat">Architecture</Chip>
                    <Chip size="sm" color="secondary" variant="flat">Strategy</Chip>
                    <Chip size="sm" color="secondary" variant="flat">Optimization</Chip>
                  </div>
                </CardBody>
                <CardFooter className="justify-center">
                  <Button 
                    as={Link} 
                    color="primary" 
                    variant="flat" 
                    radius="md"
                    href="/services"
                  >
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="portfolio" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Chip color="primary" variant="flat" className="mb-4">Portfolio</Chip>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-foreground-500 max-w-2xl mx-auto">
              A showcase of my recent work, demonstrating technical proficiency and creative solutions.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6">
            <div className="w-full lg:w-[calc(50%-12px)]">
              <Card isHoverable className="w-full h-full hover:text-default-500">
                <div className="relative overflow-hidden h-60">
                  <Image
                    src="https://placehold.co/800x500/0DA6D4/FFFFFF?text=Langflow+Resume+Writer"
                    alt="Langflow Resume Writer"
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                    width={800}
                    height={500}
                  />
                  <div className="absolute top-3 right-3 z-10">
                    <Chip color="secondary" variant="solid">Featured</Chip>
                  </div>
                </div>
                <CardBody className="">
                  <h3 className="text-2xl font-bold mb-2">Langflow Resume Writer</h3>
                  <p className="mb-4">
                    A powerful AI-driven resume builder that tailors resumes to job descriptions, enhancing job application success rates.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Chip size="sm" variant="flat" color="secondary">React</Chip>
                    <Chip size="sm" variant="flat" color="secondary">Python</Chip>
                    <Chip size="sm" variant="flat" color="secondary">TensorFlow</Chip>
                  </div>
                </CardBody>
                <CardFooter>
                  <Button 
                    as={Link}
                    href="/portfolio"
                    color="primary"
                    variant="flat"
                    radius="md"
                    className="w-full"
                  >
                    View Project
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            <div className="w-full lg:w-[calc(50%-12px)]">
              <Card isHoverable className="w-full h-full hover:text-default-500">
                <div className="relative overflow-hidden h-60">
                  <Image
                    src="https://placehold.co/800x500/123758/FFFFFF?text=Self+Hosted+SMTP"
                    alt="Mailu Self-Hosted SMTP"
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                    width={800}
                    height={500}
                  />
                  <div className="absolute top-3 right-3 z-10">
                    <Chip color="primary" variant="solid">Latest</Chip>
                  </div>
                </div>
                <CardBody>
                  <h3 className="text-2xl font-bold mb-2">Mailu Self Hosted SMTP</h3>
                  <p className="mb-4">
                    A self-hosted email server solution that provides a secure and private email experience, with full control over your data.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Chip size="sm" variant="flat" color="secondary">Docker</Chip>
                    <Chip size="sm" variant="flat" color="secondary">Nginx</Chip>
                    <Chip size="sm" variant="flat" color="secondary">Postfix/Dovecot</Chip>
                  </div>
                </CardBody>
                <CardFooter>
                  <Button 
                    as={Link}
                    href="/portfolio"
                    color="primary"
                    variant="flat"
                    radius="md"
                    className="w-full"
                  >
                    View Project
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            <div className="w-full lg:w-[calc(50%-12px)]">
              <Card isHoverable className="w-full h-full hover:text-default-500">
                <div className="relative overflow-hidden h-72 md:h-80">
                  <Image
                    src="https://placehold.co/1600x800/C23F0E/FFFFFF?text=Pine+Bridge+Cleaning"
                    alt="Pine Bridge Cleaning Services"
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                    width={800}
                    height={500}
                  />
                  <div className="absolute top-3 right-3 z-10">
                    <Chip color="secondary" variant="solid">Showcase</Chip>
                  </div>
                </div>
                <CardBody>
                  <h3 className="text-2xl font-bold mb-2">Pine Bridge Cleaning Services Platform</h3>
                  <p className="mb-4">
                    A full featured web application for managing cleaning services, including scheduling, payments, and customer management.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Chip size="sm" variant="flat" color="secondary">HeroUI</Chip>
                    <Chip size="sm" variant="flat" color="secondary">Node.js</Chip>
                    <Chip size="sm" variant="flat" color="secondary">MongoDB</Chip>
                  </div>
                </CardBody>
                <CardFooter>
                      <Button 
                        as={Link}
                        href="/portfolio"
                        color="primary"
                        variant="flat"
                        radius="md"
                        className="w-full"
                      >
                        Explore Case Study
                      </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              as={Link}
              href="/portfolio"
              color="secondary"
              variant="bordered"
              radius="md"
              size="lg"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-content1">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Chip color="secondary" variant="flat" className="mb-4">Testimonials</Chip>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Clients Say</h2>
            <p className="text-foreground-500 max-w-2xl mx-auto">
              Feedback from those who have experienced the impact of my work firsthand.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6">
            {/* <div className="w-full md:w-[calc(50%-12px)]">
              <Card className="bg-gradient-to-br from-primary-100 to-primary-50 dark:from-primary-800 dark:to-primary-900 h-full">
                <CardBody>
                  <div className="text-secondary-500 mb-4 text-4xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-foreground-800 dark:text-foreground-200 text-lg mb-6 italic">
                    "The AI solution developed for our company has completely transformed our data analysis capabilities. We're now able to extract insights in minutes that previously took days. The attention to detail and understanding of our business needs was exceptional."
                  </p>
                  <div className="flex items-center">
                    <Avatar 
                      src="https://i.pravatar.cc/150?img=32" 
                      size="lg" 
                      className="mr-4 border-2 border-white"
                    />
                    <div>
                      <p className="font-bold text-lg">Sarah Johnson</p>
                      <p className="text-foreground-500">CTO, TechInnovate Inc.</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div> */}
            
            <div className="w-full md:w-[calc(50%-12px)]">
              <Card className="bg-gradient-to-br from-secondary-100 to-secondary-50 dark:from-secondary-800 dark:to-secondary-900 h-full">
                <CardBody>
                  <div className="text-primary-500 mb-4 text-4xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-foreground-800 dark:text-foreground-200 text-lg mb-6 italic">
                    "Our e-commerce platform needed a complete overhaul to meet modern demands. The new system not only looks beautiful but has increased our conversion rates by 38%. The entire development process was smooth and professional from start to finish."
                  </p>
                  <div className="flex items-center">
                    <Avatar 
                      src="https://i.pravatar.cc/150?img=68" 
                      size="lg" 
                      className="mr-4 border-2 border-white"
                    />
                    <div>
                      <p className="font-bold text-lg">Omar Dames</p>
                      <p className="text-foreground-500">Founder, Buffalo Sparkling Cleaners

                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-tr from-primary-700 to-primary-500 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Chip color="secondary" variant="solid" className="mb-6">Ready to Get Started?</Chip>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Let's Transform Your <span className="text-secondary-300">Ideas</span> into <span className="text-secondary-300">Reality</span>
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Whether you need a cutting-edge web application, AI-powered solution, or strategic tech consulting, I'm here to help you succeed in the digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                href="/contact"
                size="lg"
                color="secondary"
                variant="solid"
                radius="full"
                className="font-medium text-lg px-8"
              >
                Schedule a Consultation
              </Button>
              <Button
                as={Link}
                href="mailto:derek@fjellworks.dev"
                size="lg"
                variant="bordered"
                radius="full"
                className="font-medium text-lg px-8 bg-white/10 backdrop-blur-sm text-white"
              >
                Email Me
              </Button>
            </div>
            <p className="mt-6 opacity-80">
              No obligation, just a conversation about your project needs.
            </p>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
