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

const projects = [
  {
    id: 1,
    title: "AI Analytics Dashboard",
    description: "A comprehensive analytics platform using machine learning to generate actionable business insights from complex datasets.",
    category: "ai",
    image: "https://placehold.co/800x500/0DA6D4/FFFFFF?text=AI+Analytics+Dashboard",
    tags: ["React", "Python", "TensorFlow", "AWS"],
    featured: true,
    demoUrl: "https://demo.example.com/ai-analytics",
    caseStudyUrl: "/case-studies/ai-analytics",
    longDescription: "This AI-powered analytics dashboard transforms raw business data into actionable insights through advanced machine learning algorithms. The platform includes predictive analytics, anomaly detection, and automated reporting features that help businesses make data-driven decisions quickly and accurately. Built with a React frontend and Python backend using TensorFlow for machine learning models."
  },
  {
    id: 2,
    title: "Next-Gen E-Commerce Platform",
    description: "A full-featured online shopping experience with AI-powered product recommendations and advanced search capabilities.",
    category: "fullstack",
    image: "https://placehold.co/800x500/123758/FFFFFF?text=E-Commerce+Platform",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    featured: true,
    demoUrl: "https://demo.example.com/ecommerce",
    caseStudyUrl: "/case-studies/ecommerce",
    longDescription: "This modern e-commerce platform delivers a seamless shopping experience with personalized product recommendations powered by AI algorithms. The application features real-time inventory management, secure payment processing with Stripe, and a responsive design that works perfectly across all devices. Built with Next.js for frontend and Node.js with MongoDB for backend services."
  },
  {
    id: 3,
    title: "Smart City Management Platform",
    description: "An integrated IoT and AI solution for modern urban management, processing real-time data from thousands of sensors.",
    category: "ai",
    image: "https://placehold.co/800x500/C23F0E/FFFFFF?text=Smart+City+Platform",
    tags: ["React", "Python", "TensorFlow", "IoT", "AWS"],
    featured: true,
    demoUrl: "https://demo.example.com/smart-city",
    caseStudyUrl: "/case-studies/smart-city",
    longDescription: "This comprehensive smart city management platform integrates data from thousands of IoT sensors to optimize urban resources and improve quality of life. The system includes modules for traffic management, energy optimization, waste management, and public safety monitoring. The platform uses advanced AI algorithms to predict and prevent urban issues before they occur."
  },
  {
    id: 4,
    title: "Personal Finance App",
    description: "A mobile-first application that helps users track expenses, set budgets, and receive AI-powered financial advice.",
    category: "web",
    image: "https://placehold.co/800x500/0DA6D4/FFFFFF?text=Finance+App",
    tags: ["React Native", "Firebase", "Node.js"],
    featured: false,
    demoUrl: "https://demo.example.com/finance-app",
    caseStudyUrl: "/case-studies/finance-app",
    longDescription: "This personal finance application helps users take control of their financial health through intuitive expense tracking, budget setting, and smart notifications. The app includes features for receipt scanning, automatic categorization of expenses, and personalized insights based on spending patterns. Built with React Native for cross-platform compatibility and Firebase for backend services."
  },
  {
    id: 5,
    title: "Healthcare Patient Portal",
    description: "A secure, HIPAA-compliant patient portal allowing users to access medical records, schedule appointments, and communicate with providers.",
    category: "fullstack",
    image: "https://placehold.co/800x500/123758/FFFFFF?text=Healthcare+Portal",
    tags: ["React", "Node.js", "PostgreSQL", "HIPAA"],
    featured: false,
    demoUrl: "https://demo.example.com/patient-portal",
    caseStudyUrl: "/case-studies/patient-portal",
    longDescription: "This HIPAA-compliant healthcare portal provides a secure interface for patients to access their medical records, schedule appointments, and communicate with healthcare providers. The platform includes features for prescription refills, telehealth consultations, and secure messaging. Built with strict attention to security and privacy requirements using industry best practices."
  },
  {
    id: 6,
    title: "Predictive Maintenance System",
    description: "An industrial IoT solution that uses machine learning to predict equipment failures before they occur, minimizing downtime.",
    category: "ai",
    image: "https://placehold.co/800x500/C23F0E/FFFFFF?text=Predictive+Maintenance",
    tags: ["Python", "TensorFlow", "IoT", "AWS"],
    featured: false,
    demoUrl: "https://demo.example.com/predictive-maintenance",
    caseStudyUrl: "/case-studies/predictive-maintenance",
    longDescription: "This predictive maintenance system uses machine learning algorithms to analyze sensor data from industrial equipment and predict potential failures before they occur. The solution has helped manufacturing clients reduce downtime by up to 78% and maintenance costs by 35%. The system includes real-time monitoring dashboards, alert mechanisms, and detailed analytics on equipment performance."
  },
  {
    id: 7,
    title: "Educational Learning Platform",
    description: "An interactive learning management system with adaptive content delivery based on student performance and learning patterns.",
    category: "web",
    image: "https://placehold.co/800x500/0DA6D4/FFFFFF?text=Learning+Platform",
    tags: ["React", "Node.js", "MongoDB", "ML"],
    featured: false,
    demoUrl: "https://demo.example.com/learning-platform",
    caseStudyUrl: "/case-studies/learning-platform",
    longDescription: "This comprehensive learning management system revolutionizes education by adapting content delivery based on individual student performance and learning patterns. The platform includes interactive lessons, progress tracking, assessment tools, and a recommendation engine that suggests personalized learning resources. The system has been implemented in multiple educational institutions with significant improvements in student engagement and outcomes."
  },
  {
    id: 8,
    title: "Supply Chain Optimization Platform",
    description: "A logistics and supply chain management system using AI to optimize routes, inventory, and delivery scheduling.",
    category: "fullstack",
    image: "https://placehold.co/800x500/123758/FFFFFF?text=Supply+Chain",
    tags: ["React", "Node.js", "PostgreSQL", "AI", "Google Maps API"],
    featured: false,
    demoUrl: "https://demo.example.com/supply-chain",
    caseStudyUrl: "/case-studies/supply-chain",
    longDescription: "This supply chain optimization platform uses advanced AI algorithms to streamline logistics operations, optimize delivery routes, manage inventory levels, and improve overall supply chain efficiency. The system includes real-time tracking, predictive analytics for demand forecasting, and automated scheduling tools that have helped clients reduce operational costs by up to 25% while improving delivery times and customer satisfaction."
  },
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  interface Project {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
    tags: string[];
    featured: boolean;
    demoUrl: string;
    caseStudyUrl: string;
    longDescription: string;
  }
  
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
