import { title, subtitle, text } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { 
  Button,
  Link,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Chip,
  Avatar,
  Spacer,
  Accordion,
  AccordionItem,
  Tooltip,
  Progress
} from "@heroui/react";

export default function IndexPage() {
  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-20 lg:py-24 bg-gradient-to-r from-primary-600 to-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-secondary-400">Full Stack</span> Development & <span className="text-secondary-400">AI</span> Solutions
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Innovative software applications engineered for a global stage. Any problem. Any team. Anywhere.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  color="secondary" 
                  variant="solid" 
                  radius="md"
                  as={Link}
                  href="#services"
                  className="font-medium"
                >
                  Our Services
                </Button>
                <Button 
                  size="lg" 
                  variant="bordered" 
                  radius="md"
                  as={Link}
                  href="#contact"
                  className="font-medium bg-white/10 backdrop-blur-sm text-white"
                >
                  Get in Touch
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
            <Chip color="secondary" variant="flat" className="mb-4">Our Expertise</Chip>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Services</h2>
            <p className="text-foreground-500 max-w-2xl mx-auto">
              Comprehensive solutions for modern businesses with a focus on quality, innovation, and results.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-8">
            <div className="w-full sm:w-[calc(50%-8px)] md:w-[calc(33.333%-11px)]">
              <Card className="w-full h-full">
                <CardHeader className="pb-0 flex gap-3">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-primary-500">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Full Stack Development</h3>
                </CardHeader>
                <CardBody>
                  <p className="text-foreground-500">
                    End-to-end web application development with modern frameworks and technologies, delivering scalable and responsive experiences.
                  </p>
                </CardBody>
              </Card>
            </div>
            
            <div className="w-full sm:w-[calc(50%-8px)] md:w-[calc(33.333%-11px)]">
              <Card className="w-full h-full">
                <CardHeader className="pb-0 flex gap-3">
                  <div className="bg-secondary-100 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-secondary-500">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">AI Integration</h3>
                </CardHeader>
                <CardBody>
                  <p className="text-foreground-500">
                    Implementing cutting-edge AI solutions to automate processes, gain insights from data, and enhance user experiences.
                  </p>
                </CardBody>
              </Card>
            </div>
            
            <div className="w-full sm:w-[calc(50%-8px)] md:w-[calc(33.333%-11px)]">
              <Card className="w-full h-full">
                <CardHeader className="pb-0 flex gap-3">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-primary-500">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Mobile Applications</h3>
                </CardHeader>
                <CardBody>
                  <p className="text-foreground-500">
                    Cross-platform mobile app development for iOS and Android with seamless integration with backend services.
                  </p>
                </CardBody>
              </Card>
            </div>
            
            <div className="w-full sm:w-[calc(50%-8px)] md:w-[calc(33.333%-11px)]">
              <Card className="w-full h-full">
                <CardHeader className="pb-0 flex gap-3">
                  <div className="bg-secondary-100 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-secondary-500">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Cloud Architecture</h3>
                </CardHeader>
                <CardBody>
                  <p className="text-foreground-500">
                    Robust cloud infrastructure design and implementation for scalable, secure, and cost-effective solutions.
                  </p>
                </CardBody>
              </Card>
            </div>
            
            <div className="w-full sm:w-[calc(50%-8px)] md:w-[calc(33.333%-11px)]">
              <Card className="w-full h-full">
                <CardHeader className="pb-0 flex gap-3">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-primary-500">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Data Analytics</h3>
                </CardHeader>
                <CardBody>
                  <p className="text-foreground-500">
                    Advanced data processing and visualization solutions to derive actionable insights from your business data.
                  </p>
                </CardBody>
              </Card>
            </div>
            
            <div className="w-full sm:w-[calc(50%-8px)] md:w-[calc(33.333%-11px)]">
              <Card className="w-full h-full">
                <CardHeader className="pb-0 flex gap-3">
                  <div className="bg-secondary-100 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-secondary-500">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Security Implementation</h3>
                </CardHeader>
                <CardBody>
                  <p className="text-foreground-500">
                    Comprehensive security measures to protect applications, user data, and infrastructure from threats.
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Chip color="primary" variant="flat" className="mb-4">Our Values</Chip>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Sets Us Apart</h2>
            <p className="text-foreground-500 max-w-2xl mx-auto">
              Our core values drive everything we do, ensuring quality, innovation, and client satisfaction.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6 pt-4">
            <div className="w-full md:w-[calc(50%-12px)]">
              <Card className="w-full h-full bg-gradient-to-b from-[#5EA2EF] to-[#0072F5] text-white">
                <CardHeader>
                  <h3 className="text-2xl font-bold">
                    <span className="text-cyan-300">Borderless</span> Software Applications
                  </h3>
                </CardHeader>
                <Divider />
                <CardBody>
                  <p className="mb-2">
                    Bringing experience, adaptability, diverse perspective and modern techniques
                  </p>
                  <p>
                    <span>to create </span>
                    <span className="text-cyan-300">software fit for a global stage.</span>
                  </p>
                </CardBody>
              </Card>
            </div>
            
            <div className="w-full md:w-[calc(50%-12px)]">
              <Card className="w-full h-full bg-gradient-to-b from-[#FF705B] to-[#FFB457] text-white">
                <CardHeader>
                  <h3 className="text-2xl font-bold">
                    <span className="text-blue-300">Holistic</span> Engineering
                  </h3>
                </CardHeader>
                <Divider />
                <CardBody>
                  <p className="mb-2">Drawing on expansive engineering and domain knowledge</p>
                  <p className="mb-2">Building each software component from the ground up</p>
                  <p className="mb-2">From specification and architecture to testing and deployment</p>
                  <p>
                    <span>Delivering </span>
                    <span className="text-blue-300">robust applications</span>
                    <span> and </span>
                    <span className="text-blue-300">total user satisfaction.</span>
                  </p>
                </CardBody>
              </Card>
            </div>
            
            <div className="w-full md:w-[calc(50%-12px)]">
              <Card className="w-full h-full bg-gradient-to-b from-[#5EA2EF] to-[#0072F5] text-white">
                <CardHeader>
                  <h3 className="text-2xl font-bold">
                    <span className="text-yellow-300">Human</span>-First Solutions
                  </h3>
                </CardHeader>
                <Divider />
                <CardBody>
                  <p className="mb-2">Humane development for people and the planet</p>
                  <p className="mb-2">Applications that empower users' lives and communities</p>
                  <p className="mb-2">Practical, accessible, localized and user-friendly design</p>
                  <p className="text-yellow-300">
                    People and technology working in harmony.
                  </p>
                </CardBody>
              </Card>
            </div>
            
            <div className="w-full md:w-[calc(50%-12px)]">
              <Card className="w-full h-full bg-gradient-to-b from-[#FF705B] to-[#FFB457] text-white">
                <CardHeader>
                  <h3 className="text-2xl font-bold">
                    <span className="text-cyan-300">Formidable</span> Cost Efficiency
                  </h3>
                </CardHeader>
                <Divider />
                <CardBody>
                  <p className="mb-2">
                    Lean workflows, efficient tools and a global advantage come together
                  </p>
                  <p>
                    <span>Providing </span>
                    <span className="text-cyan-300">flexible, equitable </span>
                    <span>and </span>
                    <span className="text-cyan-300">competitive pricing </span>
                    <span>for every project.</span>
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 md:py-24 bg-content1">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Chip color="secondary" variant="flat" className="mb-4">Our Work</Chip>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Projects</h2>
            <p className="text-foreground-500 max-w-2xl mx-auto">
              Innovative solutions we've delivered for our clients across various industries.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-5">
            <div className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]">
              <Card className="w-full h-full">
                <div className="relative overflow-hidden h-48">
                  <Image
                    src="https://placehold.co/600x400/123758/FFFFFF?text=AI+Analytics"
                    alt="AI-Driven Analytics Platform"
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                    width={600}
                    height={400}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-lg font-semibold">AI-Driven Analytics Platform</h3>
                    </div>
                  </div>
                </div>
                <CardBody>
                  <p className="text-foreground-500 mb-4">
                    Advanced data analytics solution with machine learning capabilities for business intelligence.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Chip size="sm" variant="flat" color="primary">AI</Chip>
                    <Chip size="sm" variant="flat">Python</Chip>
                    <Chip size="sm" variant="flat">React</Chip>
                  </div>
                </CardBody>
              </Card>
            </div>
            
            <div className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]">
              <Card className="w-full h-full">
                <div className="relative overflow-hidden h-48">
                  <Image
                    src="https://placehold.co/600x400/0DA6D4/FFFFFF?text=E-commerce"
                    alt="E-commerce Platform"
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                    width={600}
                    height={400}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-lg font-semibold">E-commerce Platform</h3>
                    </div>
                  </div>
                </div>
                <CardBody>
                  <p className="text-foreground-500 mb-4">
                    Full-featured online shopping experience with integrated payment systems and inventory management.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Chip size="sm" variant="flat" color="primary">Node.js</Chip>
                    <Chip size="sm" variant="flat">Vue.js</Chip>
                    <Chip size="sm" variant="flat">MongoDB</Chip>
                  </div>
                </CardBody>
              </Card>
            </div>
            
            <div className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]">
              <Card className="w-full h-full">
                <div className="relative overflow-hidden h-48">
                  <Image
                    src="https://placehold.co/600x400/C23F0E/FFFFFF?text=CRM+Solution"
                    alt="Enterprise CRM Solution"
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                    width={600}
                    height={400}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-lg font-semibold">Enterprise CRM Solution</h3>
                    </div>
                  </div>
                </div>
                <CardBody>
                  <p className="text-foreground-500 mb-4">
                    Custom customer relationship management system with AI-powered insights and automation.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Chip size="sm" variant="flat" color="primary">Java</Chip>
                    <Chip size="sm" variant="flat">Angular</Chip>
                    <Chip size="sm" variant="flat">PostgreSQL</Chip>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              color="secondary" 
              variant="flat" 
              radius="md"
              as={Link}
              href="/portfolio"
              className="font-medium"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-primary-50 dark:bg-primary-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Chip color="primary" variant="flat" className="mb-4">Client Feedback</Chip>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-foreground-500 max-w-2xl mx-auto">
              Hear from the businesses we've helped transform with our innovative solutions.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-5">
            <div className="w-full md:w-[calc(33.333%-14px)]">
              <Card className="w-full h-full bg-white dark:bg-content1">
                <CardBody>
                  <div className="text-secondary-500 mb-4 text-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-foreground-500 mb-4 italic">
                    "Fjellderek Software transformed our business with their innovative AI solution. Their team was professional, responsive, and delivered beyond our expectations."
                  </p>
                  <div className="flex items-center mt-6">
                    <Avatar src="https://i.pravatar.cc/150?img=32" size="lg" className="mr-4" />
                    <div>
                      <p className="font-semibold">Sarah Johnson</p>
                      <p className="text-foreground-400 text-sm">CEO, TechInnovate</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
            
            <div className="w-full md:w-[calc(33.333%-14px)]">
              <Card className="w-full h-full bg-white dark:bg-content1">
                <CardBody>
                  <div className="text-secondary-500 mb-4 text-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-foreground-500 mb-4 italic">
                    "The web application developed by Fjellderek has significantly improved our operational efficiency and user satisfaction. Their technical expertise is impressive."
                  </p>
                  <div className="flex items-center mt-6">
                    <Avatar src="https://i.pravatar.cc/150?img=65" size="lg" className="mr-4" />
                    <div>
                      <p className="font-semibold">Michael Chen</p>
                      <p className="text-foreground-400 text-sm">CTO, GlobalTrade Inc.</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
            
            <div className="w-full md:w-[calc(33.333%-14px)]">
              <Card className="w-full h-full bg-white dark:bg-content1">
                <CardBody>
                  <div className="text-secondary-500 mb-4 text-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-foreground-500 mb-4 italic">
                    "Working with Fjellderek was a pleasure from start to finish. They took the time to understand our needs and delivered a solution that perfectly meets our requirements."
                  </p>
                  <div className="flex items-center mt-6">
                    <Avatar src="https://i.pravatar.cc/150?img=48" size="lg" className="mr-4" />
                    <div>
                      <p className="font-semibold">Elena Rodriguez</p>
                      <p className="text-foreground-400 text-sm">Product Manager, HealthPlus</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise/Skills Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Chip color="secondary" variant="flat" className="mb-4">Our Expertise</Chip>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-foreground-500 max-w-2xl mx-auto">
              Our team's expertise spans across the full technology stack.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-5">
            <div className="w-full md:w-[calc(50%-10px)]">
              <Card className="w-full h-full">
                <CardHeader>
                  <h3 className="text-xl font-semibold">Frontend Development</h3>
                </CardHeader>
                <CardBody className="gap-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>React & Next.js</span>
                      <span>95%</span>
                    </div>
                    <Progress color="primary" value={95} className="mb-3" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Vue & Nuxt</span>
                      <span>88%</span>
                    </div>
                    <Progress color="primary" value={88} className="mb-3" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Angular</span>
                      <span>85%</span>
                    </div>
                    <Progress color="primary" value={85} className="mb-3" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Responsive Design</span>
                      <span>98%</span>
                    </div>
                    <Progress color="primary" value={98} />
                  </div>
                </CardBody>
              </Card>
            </div>
            
            <div className="w-full md:w-[calc(50%-10px)]">
              <Card className="w-full h-full">
                <CardHeader>
                  <h3 className="text-xl font-semibold">Backend Development</h3>
                </CardHeader>
                <CardBody className="gap-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Node.js & Express</span>
                      <span>92%</span>
                    </div>
                    <Progress color="secondary" value={92} className="mb-3" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Python & Django/Flask</span>
                      <span>90%</span>
                    </div>
                    <Progress color="secondary" value={90} className="mb-3" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Java & Spring</span>
                      <span>85%</span>
                    </div>
                    <Progress color="secondary" value={85} className="mb-3" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Database Design</span>
                      <span>94%</span>
                    </div>
                    <Progress color="secondary" value={94} />
                  </div>
                </CardBody>
              </Card>
            </div>
            
            <div className="w-full md:w-[calc(50%-10px)]">
              <Card className="w-full h-full">
                <CardHeader>
                  <h3 className="text-xl font-semibold">AI & Machine Learning</h3>
                </CardHeader>
                <CardBody className="gap-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>ML Algorithms</span>
                      <span>88%</span>
                    </div>
                    <Progress color="primary" value={88} className="mb-3" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Natural Language Processing</span>
                      <span>90%</span>
                    </div>
                    <Progress color="primary" value={90} className="mb-3" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Computer Vision</span>
                      <span>85%</span>
                    </div>
                    <Progress color="primary" value={85} className="mb-3" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Deep Learning</span>
                      <span>82%</span>
                    </div>
                    <Progress color="primary" value={82} />
                  </div>
                </CardBody>
              </Card>
            </div>
            
            <div className="w-full md:w-[calc(50%-10px)]">
              <Card className="w-full h-full">
                <CardHeader>
                  <h3 className="text-xl font-semibold">DevOps & Infrastructure</h3>
                </CardHeader>
                <CardBody className="gap-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>AWS/Azure/GCP</span>
                      <span>95%</span>
                    </div>
                    <Progress color="secondary" value={95} className="mb-3" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Docker & Kubernetes</span>
                      <span>92%</span>
                    </div>
                    <Progress color="secondary" value={92} className="mb-3" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>CI/CD Pipelines</span>
                      <span>90%</span>
                    </div>
                    <Progress color="secondary" value={90} className="mb-3" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Infrastructure as Code</span>
                      <span>88%</span>
                    </div>
                    <Progress color="secondary" value={88} />
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              as={Link}
              href="/skills"
              size="lg" 
              radius="full" 
              variant="bordered" 
              color="success"
              className="font-medium"
            >
              See My Skills -&gt;
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section with Accordion */}
      <section className="py-16 md:py-24 bg-content1">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Chip color="primary" variant="flat" className="mb-4">FAQ</Chip>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-foreground-500 max-w-2xl mx-auto">
              Get answers to common questions about our services and processes.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion selectionMode="multiple" variant="bordered">
              <AccordionItem key="1" title="What technologies do you specialize in?">
                <div className="px-2 py-1">
                  <p>We specialize in a wide range of technologies including React, Vue, Angular, Node.js, Python, 
                  Java, and various cloud platforms (AWS, Azure, GCP). Our expertise also extends to AI/ML frameworks 
                  and tools for building cutting-edge intelligent applications.</p>
                </div>
              </AccordionItem>
              
              <AccordionItem key="2" title="How do you approach new projects?">
                <div className="px-2 py-1">
                  <p>Our approach begins with thorough requirements gathering and understanding your business needs. 
                  We then create a detailed project plan, establish milestones, and implement using agile methodologies 
                  with regular client feedback throughout the development process.</p>
                </div>
              </AccordionItem>
              
              <AccordionItem key="3" title="Can you integrate AI into my existing application?">
                <div className="px-2 py-1">
                  <p>Yes, we have extensive experience integrating AI capabilities into existing applications. 
                  Whether you need natural language processing, computer vision, predictive analytics, or other 
                  AI functionalities, we can enhance your current systems without a complete rebuild.</p>
                </div>
              </AccordionItem>
              
              <AccordionItem key="4" title="What is your typical project timeline?">
                <div className="px-2 py-1">
                  <p>Project timelines vary depending on complexity and scope, but we pride ourselves on efficient 
                  delivery. Small to medium projects typically take 2-3 months, while larger enterprise solutions 
                  may take 4-6 months. We always provide detailed timelines during the planning phase.</p>
                </div>
              </AccordionItem>
              
              <AccordionItem key="5" title="Do you provide ongoing maintenance and support?">
                <div className="px-2 py-1">
                  <p>Absolutely. We offer various support and maintenance packages to ensure your application 
                  continues to run smoothly after launch. This includes bug fixes, security updates, performance 
                  optimization, and feature enhancements according to your evolving needs.</p>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-r from-primary-900 to-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-8">
            <div className="w-full md:w-5/12 space-y-6">
              <Chip color="secondary" variant="flat" className="mb-2">Get In Touch</Chip>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Ideas into Reality?</h2>
              <p className="opacity-90">
                Contact us today to discuss your project needs and discover how our expertise can help you achieve your goals.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm opacity-70">Phone</p>
                    <p>+47 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm opacity-70">Email</p>
                    <p>info@fjellderek.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm opacity-70">Location</p>
                    <p>Oslo, Norway & Remote Worldwide</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-6/12 md:ml-auto">
              <Card className="w-full bg-white text-foreground">
                <CardBody className="gap-4">
                  <div className="flex flex-wrap gap-4">
                    <div className="w-full md:w-[calc(50%-8px)]">
                      <label className="block text-sm font-medium mb-1" htmlFor="name">Your Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full p-2 rounded border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="w-full md:w-[calc(50%-8px)]">
                      <label className="block text-sm font-medium mb-1" htmlFor="email">Your Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full p-2 rounded border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="subject">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full p-2 rounded border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      className="w-full p-2 rounded border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  
                  <Button 
                    color="secondary" 
                    size="lg" 
                    className="font-medium mt-2"
                  >
                    Send Message
                  </Button>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
