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
    skills: Skill[];
};

export const skills = [
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
];

export const groups = [
    {
        name: "Frontend",
        label: "Frontend",
        skills: [

        ],
    },
    {
        name: "Backend",
        label: "Backend",
        skills: [

        ],
    },
    {
        name: "Full Stack",
        label: "Full Stack",
        skills: [

        ],
    },
    {
        name: "Apple",
        label: "Apple",
        skills: [

        ],
    },
    {
        name: "Google",
        label: "Google",
        skills: [

        ],
    },
    {
        name: "Linux",
        label: "Linux",
        skills: [

        ],
    },
    {
        name: "Microsoft",
        label: "Microsoft",
        skills: [

        ],
    },  
    {
        name: "Mobile",
        label: "Mobile",
        skills: [

        ],
    },
    {
        name: "Cloud",
        label: "Cloud",
        skills: [

        ],
    },
    {
        name: "DevOps",
        label: "DevOps",
        skills: [

        ],
    },
    {
        name: "AI",
        label: "Artificial Intelligence",
        skills: [

        ],
    },
    {
        name: "Lanugages",
        label: "Languages",
        skills: [

        ],
    },
    {
        name: "Soft Skills",
        label: "Soft Skills",
        skills: [

        ],
    },
    {
        name: "All",
        label: "All",
        skills: [

        ],
    },
]