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
    title: "Lake Effect Cleaning",
    description: "A comprehensive cleaning service platform that connects clients with local cleaning professionals, offering booking, payment, and review features.",
    category: "web",
    image: "https://placehold.co/800x500/0DA6D4/FFFFFF?text=Lake+Effect+Cleaning",
    tags: ["Node.js", "React", "MongoDB", "Express", "Stripe"],
    featured: true,
    demoUrl: "https://demo.example.com/lake-effect-cleaning",
    caseStudyUrl: "/case-studies/lake-effect-cleaning",
    longDescription: "Lake Effect Cleaning is a comprehensive platform designed to connect clients with local cleaning professionals. The platform allows users to book cleaning services, make secure payments, and leave reviews for the services received. Built with a modern tech stack including Node.js, React, and MongoDB, the platform provides a seamless user experience with features like real-time availability, service customization, and automated notifications."
  },

];