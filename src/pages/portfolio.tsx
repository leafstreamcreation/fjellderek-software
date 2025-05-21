import { useState } from "react";
import DefaultLayout from "@/layouts/default";
import { 
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Chip,
  Tabs,
  Tab,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";
import { Link } from "@heroui/link";

import { Project, projects } from "@/site-content/Projects/projects";

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);
  
  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    onOpen();
  };

  return (
    <DefaultLayout>
      {/* Header Section */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-tr from-primary-900 to-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Chip color="secondary" variant="flat" className="mb-4">My Portfolio</Chip>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Featured <span className="text-secondary-400">Work</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            A showcase of diverse projects spanning web applications, artificial intelligence 
            solutions, and full-stack builds. Each project represents a unique challenge solved
            with cutting-edge technology and creative problem-solving.
          </p>
        </div>
      </section>

      {/* Project Filter Tabs */}
      <section className="py-12 bg-content1">
        <div className="max-w-7xl mx-auto px-4">
          <Tabs 
            aria-label="Project categories" 
            color="secondary" 
            variant="underlined"
            size="lg"
            classNames={{
              tabList: "justify-center mb-8",
              cursor: "bg-secondary-400"
            }}
            selectedKey={selectedCategory}
            onSelectionChange={(key) => setSelectedCategory(String(key))}
          >
            <Tab key="all" title="All Projects" />
            <Tab key="web" title="Web Development" />
            <Tab key="ai" title="AI & ML" />
            <Tab key="fullstack" title="Full Stack" />
          </Tabs>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card 
                key={project.id} 
                className="overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                    width={800}
                    height={500}
                  />
                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <Chip color="secondary" variant="solid">Featured</Chip>
                    </div>
                  )}
                </div>
                <CardBody>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-foreground-500 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map((tag, index) => (
                      <Chip key={index} size="sm" variant="flat" color="primary">{tag}</Chip>
                    ))}
                  </div>
                </CardBody>
                <CardFooter className="flex justify-between">
                  <Button 
                    isDisabled
                    color="primary"
                    variant="flat"
                    radius="md"
                    size="sm"
                    as={Link}
                    href={project.demoUrl}
                    target="_blank"
                    className="flex-1 mr-2"
                  >
                    Live Demo
                  </Button>
                  <Button 
                    isDisabled
                    color="secondary"
                    variant="flat"
                    radius="md"
                    size="sm"
                    className="flex-1"
                    onPress={() => {
                      openProjectModal(project);
                    }}
                  >
                    Case Study
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-foreground-500">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-tr from-secondary-900 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interested in something similar?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can create a custom solution tailored to your specific needs and goals.
          </p>
          <Button 
            as={Link}
            href="/contact"
            size="lg"
            color="primary" 
            variant="solid"
            radius="full"
            className="font-medium px-8"
          >
            Let's Talk
          </Button>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <Modal 
          isOpen={isOpen} 
          onClose={onClose}
          size="3xl"
          scrollBehavior="outside"
        >
          <ModalContent>
            <ModalHeader className="flex flex-col gap-1">
              {selectedProject.title}
            </ModalHeader>
            <ModalBody>
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                className="object-cover w-full h-64 rounded-lg mb-4"
                width={800}
                height={400}
              />
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tags.map((tag, index) => (
                  <Chip key={index} variant="flat" color="primary">{tag}</Chip>
                ))}
              </div>
              <p className="text-foreground-700 dark:text-foreground-300 mb-4">
                {selectedProject.longDescription}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-content2 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Key Features</h4>
                  <ul className="list-disc pl-5">
                    <li>Responsive design for all devices</li>
                    <li>Interactive data visualization</li>
                    <li>Real-time updates and notifications</li>
                    <li>Advanced search and filtering</li>
                  </ul>
                </div>
                <div className="bg-content2 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Technologies Used</h4>
                  <ul className="list-disc pl-5">
                    {selectedProject.tags.map((tag, index) => (
                      <li key={index}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                color="danger"
                variant="light"
                onPress={onClose}
              >
                Close
              </Button>
              <Button
                as={Link}
                href={selectedProject.demoUrl}
                target="_blank"
                color="primary"
              >
                View Live Demo
              </Button>
              <Button
                as={Link}
                href={selectedProject.caseStudyUrl}
                color="secondary"
              >
                Full Case Study
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </DefaultLayout>
  );
}
