import { Group, Skill } from "./types";

const ContinuousIntegration: Skill = {
    name: "CI/CD",
    years: 3,
    proficiency: 80,
    keys: [
        "continuous integration",
        "continuous deployment",
        "automation",
    ],
    description: "Continuous Integration and Continuous Deployment practices and tools",
    url: "https://en.wikipedia.org/wiki/Continuous_integration",
};

const Docker: Skill = {
    name: "Docker",
    years: 2,
    proficiency: 70,
    keys: [
        "containerization",
        "virtualization",
    ],
    description: "Containerization platform for developing, shipping, and running applications",
    url: "https://www.docker.com",
};

const Kubernetes: Skill = {
    name: "Kubernetes",
    years: 1,
    proficiency: 60,
    keys: [
        "container orchestration",
        "virtualization",
    ],
    description: "Container orchestration system for automating deployment, scaling, and management of containerized applications",
    url: "https://kubernetes.io",
};

const TestAutomation: Skill = {
    name: "Test Automation",
    years: 2,
    proficiency: 75,
    keys: [
        "test automation",
        "automation",
    ],
    description: "Automating the execution of tests to ensure software quality",
    url: "https://en.wikipedia.org/wiki/Test_automation",
};

const GithubActions: Skill = {
    name: "GitHub Actions",
    years: 1,
    proficiency: 70,
    keys: [
        "automation",
        "continuous integration",
        "continuous deployment",
    ],
    description: "Automation platform for building, testing, and deploying code right from GitHub",
    url: "https://www.github.com/features/actions",
};

const Virtualization: Skill = {
    name: "Virtualization",
    years: 2,
    proficiency: 70,
    keys: [
        "virtualization",
        "containerization",
    ],
    description: "Creating virtual versions of physical resources, such as servers, storage, and networks",
    url: "https://en.wikipedia.org/wiki/Virtualization",
};

const Virtualbox: Skill = {
    name: "VirtualBox",
    years: 3,
    proficiency: 80,
    keys: [
        "virtualization",
        "containerization",
    ],
    description: "Free and open-source hosted hypervisor for x86 virtualization",
    url: "https://www.virtualbox.org",
};

const BASH: Skill = {
    name: "BASH",
    years: 5,
    proficiency: 90,
    keys: [
        "scripting",
        "automation",
    ],
    description: "Unix shell and command language for automating tasks",
    url: "https://www.gnu.org/software/bash/",
};

const Ansible: Skill = {
    name: "Ansible",
    years: 1,
    proficiency: 60,
    keys: [
        "configuration management",
        "automation",
    ],
    description: "Open-source software provisioning, configuration management, and application-deployment tool",
    url: "https://www.ansible.com",
};

const Powershell: Skill = {
    name: "Powershell",
    years: 4,
    proficiency: 85,
    keys: [
        "scripting",
        "automation",
    ],
    description: "Task automation and configuration management framework from Microsoft",
    url: "https://docs.microsoft.com/en-us/powershell/",
};

const Netlify: Skill = {
    name: "Netlify",
    years: 2,
    proficiency: 75,
    keys: [
        "continuous deployment",
        "static sites",
    ],
    description: "Platform for building, deploying, and managing modern web projects",
    url: "https://www.netlify.com",
};

const Heroku: Skill = {
    name: "Heroku",
    years: 3,
    proficiency: 80,
    keys: [
        "platform as a service",
        "cloud application",
    ],
    description: "Cloud platform as a service supporting several programming languages",
    url: "https://www.heroku.com",
};

const AWSS3: Skill = {
    name: "AWS S3",
    years: 1,
    proficiency: 70,
    keys: [
        "cloud storage",
        "object storage",
    ],
    description: "Amazon Web Services Simple Storage Service for scalable object storage",
    url: "https://aws.amazon.com/s3/",
};

const Helm: Skill = {
    name: "Helm",
    years: 1,
    proficiency: 60,
    keys: [
        "Kubernetes",
        "package manager",
    ],
    description: "Package manager for Kubernetes that helps you manage Kubernetes applications",
    url: "https://helm.sh",
};

export const DevOps: Group = {
    name: "devops",
    label: "Dev Ops",
    title: "Developer Operations",
    description: "What I use to create high-powered developer tools as well as virtualization, test automation, and continuous deployment pipelines",
    skills: [
        ContinuousIntegration,
        Docker,
        Kubernetes,
        TestAutomation,
        GithubActions,
        Virtualization,
        Virtualbox,
        BASH,
        Ansible,
        Powershell,
        Netlify,
        Heroku,
        AWSS3,
        Helm,
    ],
};