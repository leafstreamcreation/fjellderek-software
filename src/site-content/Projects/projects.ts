import { Project } from "@/site-content/Projects/types";

export * from "./types.ts";

export const projects: Project[] = [
  {
    id: 1,
    title: "RustDesk Self Hosted Deployment",
    description: "self-hosted remote desktop solution with end-to-end encryption",
    category: "self hosted",
    image: "https://placehold.co/800x500/0DA6D4/FFFFFF?text=AI+Analytics+Dashboard",
    tags: ["Raspberry Pi", "Linux", "PM2", "Node.js"],
    featured: true,
    demoUrl: "https://demo.example.com/RustDesk",
    caseStudyUrl: "/case-studies/RustDesk",
    longDescription: "This project involves deploying RustDesk, a self-hosted remote desktop solution, with a focus on security and performance. The solution provides end-to-end encryption for secure remote access, making it suitable for both personal and enterprise use cases."
  },
  {
    id: 2,
    title: "MailU Self Hosted Email Server",
    description: "A complete self-hosted email server solution with spam filtering and webmail access.",
    category: "self hosted",
    image: "https://placehold.co/800x500/123758/FFFFFF?text=MailU+SMTP+Server",
    tags: ["Docker", "Nginx", "Postfix", "Dovecot", "BASH", "Custom Certificate Management"],
    featured: true,
    demoUrl: "https://demo.example.com/mailu",
    caseStudyUrl: "/case-studies/mailu",
    longDescription: "This project sets up MailU, a self-hosted email server solution that provides a complete email service with features like spam filtering, webmail access, and custom domain support. The deployment is optimized for security and performance, using Docker for containerization and Nginx for reverse proxying. The solution includes custom certificate management for secure email communication."
  },
  {
    id: 3,
    title: "Kanboard Project Management Tool",
    description: "A self-hosted Kanban project management tool for teams to track tasks and projects efficiently.",
    category: "self hosted",
    image: "https://placehold.co/800x500/C23F0E/FFFFFF?text=Kanboard+Project+Management",
    tags: ["Docker", "Nginx", "SMTP", "BASH", "Custom Certificate Management"],
    featured: true,
    demoUrl: "https://demo.example.com/kanboard",
    caseStudyUrl: "/case-studies/kanboard",
    longDescription: "This project involves deploying Kanboard, a self-hosted Kanban project management tool that allows teams to visualize and manage their tasks and projects efficiently. The solution includes features like task tracking, project timelines, and team collaboration tools. It is designed to be lightweight and easy to deploy, making it suitable for small to medium-sized teams."
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