import { Project } from "@/site-content/Projects/types";

export * from "./types.ts";

export const projects: Project[] = [
  {
    id: 1,
    title: "RustDesk Remote Desktop",
    description: "self-hosted remote desktop solution with end-to-end encryption",
    category: "selfhosted",
    image: "https://placehold.co/800x500/0DA6D4/FFFFFF?text=AI+Analytics+Dashboard",
    tags: ["Raspberry Pi", "Linux", "Docker", "BASH"],
    featured: true,
    longDescription: "This project involves deploying RustDesk, a self-hosted remote desktop solution, with a focus on security and performance. The solution provides end-to-end encryption for secure remote access, making it suitable for both personal and enterprise use cases."
  },
  {
    id: 2,
    title: "MailU Email Server",
    description: "A complete self-hosted email server solution with spam filtering and webmail access.",
    category: "selfhosted",
    image: "https://placehold.co/800x500/123758/FFFFFF?text=MailU+SMTP+Server",
    tags: ["Docker", "Nginx", "Postfix", "Dovecot", "BASH", "Custom Certificate Management", "VPS"],
    featured: true,
    demoUrl: "https://mail.fjellworks.dev",
    caseStudyUrl: "/case-studies/MailU-Email-Server",
    longDescription: "This project sets up MailU, a self-hosted email server solution that provides a complete email service with features like spam filtering, webmail access, and custom domain support. The deployment is optimized for security and performance, using Docker for containerization and Nginx for reverse proxying. The solution includes custom certificate management for secure email communication."
  },
  {
    id: 3,
    title: "Kanboard Project Management Tool",
    description: "A self-hosted Kanban project management tool for teams to track tasks and projects efficiently.",
    category: "selfhosted",
    image: "https://placehold.co/800x500/C23F0E/FFFFFF?text=Kanboard+Project+Management",
    tags: ["Docker", "SMTP", "BASH", "Postgres"],
    featured: true,
    demoUrl: "https://kanban.fjellworks.dev",
    caseStudyUrl: "/case-studies/Kanboard-Project-Management",
    longDescription: "This project involves deploying Kanboard, a self-hosted Kanban project management tool that allows teams to visualize and manage their tasks and projects efficiently. The solution includes features like task tracking, project timelines, and team collaboration tools. It is designed to be lightweight and easy to deploy, making it suitable for small to medium-sized teams."
  },
  {
    id: 4,
    title: "Pine Bridge Cleaning Services",
    description: "A comprehensive cleaning service platform that connects clients with local cleaning professionals, offering booking, payment, and review features.",
    category: "frontend",
    image: "https://placehold.co/800x500/0DA6D4/FFFFFF?text=Lake+Effect+Cleaning",
    tags: ["Node.js", "React", "MongoDB", "Express", "HeroUI", "TypeScript", "Tailwind CSS", "Netlify"],
    featured: true,
    demoUrl: "https://serviceseekersfrontend.netlify.app",
    caseStudyUrl: "/case-studies/Pine-Bridge-Cleaning-Services",
    longDescription: "Pine Bridge is a comprehensive platform designed to connect clients with local cleaning professionals. The platform allows users to book cleaning services, make secure payments, and leave reviews for the services received. Built with a modern tech stack including Node.js, React, and MongoDB, the platform provides a seamless user experience with features like real-time availability, service customization, and automated notifications."
  },
  {
    id: 5,
    title: "N8N Social Media Agents",
    description: "AI driven N8N agents that scout social media trends and generate content ideas, automating the creative process for social media managers.",
    category: "AI",
    image: "https://placehold.co/800x500/0DA6D4/FFFFFF?text=AI+Analytics+Dashboard",
    tags: ["React", "Python", "N8N", "LLM"],
    featured: true,
    demoUrl: "https://demo.example.com/N8N-Social-Media-Agents",
    caseStudyUrl: "/case-studies/N8N-Social-Media-Agents",
    longDescription: "This project involves creating AI-driven agents using N8N that scout social media platforms for trends and generate content ideas. The agents leverage large language models (LLMs) to analyze social media data, identify emerging trends, and suggest creative content ideas for social media managers. This automation streamlines the content creation process, allowing teams to focus on strategy and engagement rather than manual trend analysis."
  },
  {
    id: 6,
    title: "Muninn Tech News Aggregator",
    description: "A tech news aggregator that curates the latest technology news from around the web, providing users with the most relevant and up-to-date information.",
    category: "fullstack",
    image: "https://placehold.co/800x500/0DA6D4/FFFFFF?text=AI+Analytics+Dashboard",
    tags: ["Angular", "Java", "Docker", "Maven", "PostgreSQL"],
    featured: true,
    demoUrl: "https://muninn.fjellworks.dev",
    caseStudyUrl: "/case-studies/AI-Analytics-Dashboard",
    longDescription: "This project focuses on building a tech news aggregator that curates the latest technology news from around the web. The aggregator provides users with a personalized news feed, allowing them to stay updated on the latest trends and developments in the tech industry. The solution is built with a modern tech stack including Angular for the frontend and Java microservices for the backend. The platform uses a dockerized architecture for scalability and ease of deployment, with PostgreSQL as the database for storing news articles and user preferences."
  },
  {
    id: 7,
    title: "NGINX Reverse Proxy with SSL",
    description: "A secure NGINX reverse proxy setup that handles SSL termination and forwards requests to backend services.",
    category: "selfhosted",
    image: "https://placehold.co/800x500/0DA6D4/FFFFFF?text=NGINX+Reverse+Proxy+with+SSL",
    tags: ["NGINX", "Docker", "SSL", "Nginx Proxy Manager", "Custom Certificate Management"],
    featured: true,
    // demoUrl: "https://nginx-reverse-proxy.fjellworks.dev",
    caseStudyUrl: "/case-studies/NGINX-Reverse-Proxy-with-SSL",
    longDescription: "This project involves setting up an NGINX reverse proxy with SSL termination to securely forward requests to backend services. The solution is designed to enhance security and performance by offloading SSL encryption and decryption from the backend services. The setup is containerized using Docker for easy deployment and scalability."
  },
  {
    id: 8,
    title: "Kong API Gateway",
    description: "A scalable API gateway solution that manages and secures APIs with features like rate limiting, authentication, and logging.",
    category: "backend",
    image: "https://placehold.co/800x500/0DA6D4/FFFFFF?text=Kong+API+Gateway",
    tags: ["Kong", "API Gateway", "Docker", "Microservices"],
    featured: true,
    // demoUrl: "https://kong-api-gateway.fjellworks.dev",
    caseStudyUrl: "/case-studies/Kong-API-Gateway",
    longDescription: "This project focuses on implementing a Kong API Gateway to manage and secure APIs in a microservices architecture. The solution includes features like rate limiting, authentication, and logging to ensure robust API management. The setup is containerized using Docker for easy deployment and scalability."
  },
  {
    id: 9,
    title: "N8N Workflow Automation",
    description: "An N8N workflow automation solution that integrates various services and automates repetitive tasks.",
    category: "selfhosted",
    image: "https://placehold.co/800x500/0DA6D4/FFFFFF?text=N8N+Workflow+Automation",
    tags: ["N8N", "Workflow Automation", "Docker", "Integration"],
    featured: true,
    demoUrl: "https://n8n.fjellworks.dev",
    caseStudyUrl: "/case-studies/N8N-Workflow-Automation",
    longDescription: "This project involves setting up N8N, a powerful workflow automation tool, to integrate various services and automate repetitive tasks. The solution allows users to create complex workflows that connect different applications and services, streamlining business processes and improving efficiency. The setup is containerized using Docker for easy deployment and scalability."
  },
];