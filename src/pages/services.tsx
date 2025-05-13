import { subtitle, text } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Chip,
} from "@heroui/react";

export default function ServicesPage() {
  return (
    <DefaultLayout>
      {/* Header Section */}
      <section className="flex flex-col items-center justify-center gap-4 py-12 md:py-16 bg-gradient-to-br from-primary-900 to-primary-700 text-white">
        <div className="inline-block max-w-3xl text-center justify-center px-4">
          <Chip color="secondary" variant="flat" className="mb-4">Professional Services</Chip>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">What I </span>
            <span className="text-secondary-400">Offer</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Transforming complex technical challenges into elegant, efficient solutions that drive business value and enhance user experiences.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="flex flex-col items-center py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Card 1: Full Stack Web Development */}
            <Card className="w-full h-full shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="flex gap-3">
                <div className="bg-primary-100 dark:bg-primary-900 p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-primary-500">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <h2 className={subtitle({ color: "blue" })}>Full Stack Web Development</h2>
                  <p className="text-foreground-500">Frontend and backend expertise</p>
                </div>
              </CardHeader>
              <CardBody>
                <p className={text()}>
                  Building modern, responsive web applications that deliver exceptional user experiences. From interactive frontends with React and Next.js to robust backends powered by Node.js, I create high-performance solutions that scale.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Chip size="sm" variant="flat">React/Next.js</Chip>
                  <Chip size="sm" variant="flat">Node.js</Chip>
                  <Chip size="sm" variant="flat">TypeScript</Chip>
                  <Chip size="sm" variant="flat">RESTful API</Chip>
                  <Chip size="sm" variant="flat">Performance Optimization</Chip>
                </div>
              </CardBody>
              <CardFooter>
                <Button as={Link} href="/contact" color="primary" variant="flat" radius="md">
                  Learn More
                </Button>
              </CardFooter>
            </Card>

            {/* Card 2: AI/ML Solutions */}
            <Card className="w-full h-full shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="flex gap-3">
                <div className="bg-secondary-100 dark:bg-secondary-900 p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-secondary-500">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <h2 className={subtitle({ color: "cyan" })}>AI & ML Solutions</h2>
                  <p className="text-foreground-500">Intelligent applications</p>
                </div>
              </CardHeader>
              <CardBody>
                <p className={text()}>
                  Leveraging artificial intelligence and machine learning to create intelligent systems that analyze data, make predictions, and automate complex tasks. From natural language processing to computer vision, I bring AI capabilities to your projects.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Chip size="sm" variant="flat">Natural Language Processing</Chip>
                  <Chip size="sm" variant="flat">Computer Vision</Chip>
                  <Chip size="sm" variant="flat">Predictive Models</Chip>
                  <Chip size="sm" variant="flat">Data Analysis</Chip>
                </div>
              </CardBody>
              <CardFooter>
                <Button as={Link} href="/contact" color="secondary" variant="flat" radius="md">
                  Learn More
                </Button>
              </CardFooter>
            </Card>

            {/* Card 3: Custom Software Solutions */}
            <Card className="w-full h-full shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="flex gap-3">
                <div className="bg-primary-100 dark:bg-primary-900 p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-primary-500">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <h2 className={subtitle({ color: "yellow" })}>Custom Software Solutions</h2>
                  <p className="text-foreground-500">End-to-end development</p>
                </div>
              </CardHeader>
              <CardBody>
                <p className={text()}>
                  Developing tailor-made software solutions to address your specific business needs. From concept to deployment, I handle the entire development lifecycle, creating scalable, maintainable applications that grow with your business.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Chip size="sm" variant="flat">Bespoke Applications</Chip>
                  <Chip size="sm" variant="flat">Microservices</Chip>
                  <Chip size="sm" variant="flat">Cloud-Native</Chip>
                  <Chip size="sm" variant="flat">Scalable Architecture</Chip>
                </div>
              </CardBody>
              <CardFooter>
                <Button as={Link} href="/contact" color="warning" variant="flat" radius="md">
                  Learn More
                </Button>
              </CardFooter>
            </Card>

            {/* Card 4: Technical Consulting */}
            <Card className="w-full h-full shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="flex gap-3">
                <div className="bg-secondary-100 dark:bg-secondary-900 p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-secondary-500">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <h2 className={subtitle({ color: "cyan" })}>Technical Consulting</h2>
                  <p className="text-foreground-500">Expert guidance and optimization</p>
                </div>
              </CardHeader>
              <CardBody>
                <p className={text()}>
                  Providing expert technical advice to help you make informed decisions. Services include code reviews, architecture audits, technology selection, and development strategy. I help you optimize existing systems and plan for future growth.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Chip size="sm" variant="flat">Code Reviews</Chip>
                  <Chip size="sm" variant="flat">Architecture Audits</Chip>
                  <Chip size="sm" variant="flat">Tech Stack Strategy</Chip>
                  <Chip size="sm" variant="flat">Performance Optimization</Chip>
                </div>
              </CardBody>
              <CardFooter>
                <Button as={Link} href="/contact" color="secondary" variant="flat" radius="md">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-tr from-primary-800 to-primary-600 text-white mt-8">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Bring Your Ideas to Life?</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Let's collaborate to create innovative solutions that solve real-world problems and drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              as={Link} 
              href="/contact" 
              size="lg" 
              color="secondary" 
              variant="solid" 
              radius="md"
              className="font-medium"
            >
              Get in Touch
            </Button>
            <Button 
              as={Link} 
              href="/portfolio" 
              size="lg" 
              variant="bordered" 
              radius="md"
              className="font-medium bg-white/10 backdrop-blur-sm text-white"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
