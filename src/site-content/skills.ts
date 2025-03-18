export type Skill = {
    name: string;
    proficiency: number;
    years: number;
    keys: string[];
    icon: string;
    subSkills: Skill[];
    description: string;
};

export type Group = {
    name: string;
    label: string;
    title: string;
    description: string;
    skills: Skill[];
};

interface GroupContainer {
    [key: string]: Group;
};

export const groups: GroupContainer = {
    frontend: {
        name: "frontend",
        label: "Frontend",
        title: "Frontend Technologies & Concepts",
        description: "What I use to create performant and pleasant user interfaces for web applications",
        skills: [

        ],
    },
    backend: {
        name: "backend",
        label: "Backend",
        title: "Backend Technologies & Concepts",
        description: "What I use to build robust servers and data persistence for web-based applications",
        skills: [

        ],
    },
    lifecyclecollab: {
        name: "lifecyclecollab",
        label: "Collaboration",
        title: "Software Lifecycle & Collaboration",
        description: "The tools and methodologies I use to work effectively in local and global software teams",
        skills: [

        ],
    },
    softskills: {
        name: "softskills",
        label: "Soft Skills",
        title: "Personal Qualities & Soft Skills",
        description: "The innate and invaluable qualities and skills I bring to every project and setting",
        skills: [

        ],
    },
    devops: {
        name: "devops",
        label: "Dev Ops",
        title: "Developer Operations",
        description: "What I use to create high-powered developer tools as well as virtualization, test automation, and continuous deployment pipelines",
        skills: [

        ],
    },
    qa: {
        name: "qa",
        label: "QA",
        title: "Quality Assurance",
        description: "What I use to ensure my software performs fast and flawlessly",
        skills: [

        ],
    },
    design: {
        name: "design",
        label: "UX",
        title: "User Experience Design",
        description: "What I use to craft useful, beautiful, and accesible user interfaces",
        skills: [

        ],
    },  
    accesssecurity: {
        name: "accesssecurity",
        label: "Security/Accessibility/Compliance",
        title: "Security, Accessibility, and Compliance",
        description: "What I use to ensure my applications are secure, accessible, and compliant with the highest regulatory standards",
        skills: [

        ],
    },
    knowledge: {
        name: "knowledge",
        label: "Langs/Knowledge",
        title: "Languages, Knowledge, and Patterns",
        description: "My software knowledge providing versatility, innovation, and comprehension to a broad range of project environments",
        skills: [

        ],
    },
    ai: {
        name: "ai",
        label: "AI",
        title: "Artificial Intelligence Tools & Concepts",
        description: "What I use for creating cutting edge AI models and the AI powered tools I use for next-generation application development",
        skills: [

        ],
    },
    nativemobilegames: {
        name: "nativemobilegames",
        label: "Native/Mobile/Games",
        title: "Native, Mobile, and Game Development",
        description: "What I use for proprietary platforms such as Apple, Google, and Unity to deliver applications with supercharged performance and user experience",
        skills: [

        ],
    },
    workspaces: {
        name: "workspaces",
        label: "Workspaces",
        title: "Development Workspaces",
        description: "Platforms, IDEs, and development tools I use to work in a broad range of environments",
        skills: [

        ],
    },
    languagesandmore: {
        name: "languagesandmore",
        label: "Languages",
        title: "Languages and More",
        description: "My spoken languages and skills beyond the software realm which give a human touch to the work I do",
        skills: [

        ],
    },
    all: {
        name: "all",
        label: "All",
        title: "Everything Under the Sun",
        description: "Every skill I use in my expansive software experience",
        skills: [
            {
                name: "React.js",
                proficiency: 50,
                years: 2,
                keys: [
                    "MERN",
                    "Frontend",
                ],
                icon: "react",
                subSkills: [],
                description: "",
            },
            {
                name: "JavaScript",
                proficiency: 90,
                years: 5,
                keys: [
                    "ES6",
                    "web",
                    "node",
                ],
                icon: "javascript",
                subSkills: [],
                description: "",
            },
            {
                name: "TypeScript",
                proficiency: 60,
                years: 2,
                keys: [
                    "web",
                    "node",
                ],
                icon: "typescript",
                subSkills: [],
                description: "",
            },
            {
                name: "HTML",
                proficiency: 90,
                years: 5,
                keys: [
                    "web",
                ],
                icon: "html",
                subSkills: [],
                description: "",
            },
            {
                name: "CSS",
                proficiency: 90,
                years: 5,
                keys: [
                    "web",
                ],
                icon: "css",
                subSkills: [],
                description: "",
            },
            {
                name: "Tailwind CSS",
                proficiency: 60,
                years: 1,
                keys: [
                    "web",
                ],
                icon: "tailwindcss",
                subSkills: [],
                description: "",
            },
            {
                name: "Node.js",
                proficiency: 90,
                years: 5,
                keys: [
                    "backend",
                    "web",
                ],
                icon: "nodejs",
                subSkills: [],
                description: "",
            },
            {
                name: "Express.js",
                proficiency: 85,
                years: 5,
                keys: [
                    "backend",
                    "web",
                ],
                icon: "express",
                subSkills: [],
                description: "",
            },
            {
                name: "MongoDB",
                proficiency: 50,
                years: 1,
                keys: [
                    "MERN",
                    "backend",
                    "web",
                ],
                icon: "mongodb",
                subSkills: [],
                description: "",
            },
            {
                name: "PostgreSQL",
                proficiency: 40,
                years: 3,
                keys: [
                    "backend",
                    "web",
                ],
                icon: "postgresql",
                subSkills: [],
                description: "",
            },
            {
                name: "Git",
                proficiency: 80,
                years: 15,
                keys: [
                    "version control",
                ],
                icon: "git",
                subSkills: [],
                description: "",
            },
            {
                name: "GitHub",
                proficiency: 80,
                years: 15,
                keys: [
                    "version control",
                ],
                icon: "github",
                subSkills: [],
                description: "",
            },
            {
                name: "Jira",
                proficiency: 50,
                years: 3,
                keys: [
                    "project management",
                ],
                icon: "jira",
                subSkills: [],
                description: "",
            },
        ],
    },
}