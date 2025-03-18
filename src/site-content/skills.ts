export type Skill = {
    name: string;
    proficiency: number;
    years?: number | null;
    keys?: string[] | null;
    icon?: string | null;
    subSkills?: Skill[] | null;
    description?: string | null;
    url?: string | null;
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

// {
//     name: "",
//     proficiency: ,
//     years: ,
//     keys: [

//     ],
//     icon: "",
//     subSkills: [],
//     description: "",
// }


// {
//     name: "",
//     proficiency: ,
// }

export const groups: GroupContainer = {
    frontend: {
        name: "frontend",
        label: "Frontend",
        title: "Frontend Technologies & Concepts",
        description: "What I use to create performant and pleasant user interfaces for web applications",
        skills: [
            {
                name: "React.js",
                proficiency: 50,
                years: 2,
                keys: [
                    "mern",
                    "frontend",
                    "framework",
                    "component",
                    "spa"
                ],
                icon: "react",
                subSkills: [],
                description: "A frontend component framework for building Single Page Applications",
            },
            {
                name: "Vue.js",
                proficiency: 90,
                years: 2,
                keys: [
                    "frontend",
                    "vue",
                    "framework",
                    "component",
                    "spa"
                ],
                icon: "vue",
                subSkills: [
                    {
                        name: "Options API",
                        proficiency: 90,
                    },
                    {
                        name: "Composition API",
                        proficiency: 90,
                    },
                    {
                        name: "reactivity",
                        proficiency: 90,
                    },
                    {
                        name: "component lifecycle",
                        proficiency: 90,
                    },
                    {
                        name: "vue-router",
                        proficiency: 90,
                        icon: "vue",
                        url: "https://router.vuejs.org",
                        description: "routing library",
                    },
                    {
                        name: "vue-use",
                        proficiency: 70,
                        icon: "vueuse",
                        url: "https://vueuse.org",
                        description: "vue composable library",
                    },
                    {
                        name: "pinia",
                        proficiency: 80,
                        icon: "pinia",
                        url: "https://pinia.vuejs.org",
                        description: "state management library",
                    },
                    {
                        name: "vue-test-utils",
                        proficiency: 60,
                        url: "https://github.com/vuejs/test-utils",
                        description: "component testing utilities",
                    },
                    {
                        name: "Vue I18n",
                        proficiency: 50,
                        icon: "vue-i18n",
                        url: "https://vue-i18n.intlify.dev",
                        description: "internationalization library",
                    },
                ],
                url: "https://vuejs.org",
                description: "A frontend component framework for building Single Page Applications",
            },
            {
                name: "Vuetify",
                proficiency: 70,
                years: 1,
                keys: [
                    "component library",
                    "vue",
                    "material design",
                ],
                icon: "vuetify",
                subSkills: null,
                description: "a material design component library for Vue.js",
                url: "https://vuetifyjs.com/",
            },
            {
                name: "MDBootstrap",
                proficiency: 40,
                years: 1,
                keys: [
                    "component library",
                    "vue",
                    "bootstrap",
                    "material design",
                ],
                icon: "mdbootstrap",
                subSkills: null,
                description: "a material design component library for Vue.js with Bootstrap 5",
                url: "https://mdbootstrap.com/docs/vue/",
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
                name: "SCSS",
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
            {
                name: "Playwright",
                years: 1,
                proficiency: 10,
                keys: [
                    "e2e",
                    "end to end",
                    "vue",
                    "component"
                ],
                icon: "playwright",
                url: "https://playwright.dev",
                description: "end to end component testing library",
            },
            {
                name: "Cypress",
                years: 2,
                proficiency: 10,
                keys: [
                    "e2e",
                    "end to end",
                    "vue",
                    "component"
                ],
                icon: "cypress",
                url: "https://www.cypress.io",
                description: "end to end component testing library",
            },
            {
                name: "vitest",
                years: 3,
                proficiency: 80,
                keys: [
                    "unit test",
                    "vue",
                    "react",
                ],
                icon: "vitest",
                url: "https://vitest.dev",
            },
        ],
    },
    design: {
        name: "design",
        label: "UX",
        title: "User Experience Design",
        description: "What I use to craft useful, beautiful, and accesible user interfaces",
        skills: [
            {
                name: "Storybook",
                years: 1,
                proficiency: 10,
                keys: [
                    "design",
                    "component",
                    "documentation"
                ],
                icon: "storybook",
                url: "https://storybook.js.org",
                description: "a UI component workshop with generated component documentation"
            },
        ],
    },  
    accesssecurity: {
        name: "accesssecurity",
        label: "Security/Accessibility/Compliance",
        title: "Security, Accessibility, and Compliance",
        description: "What I use to ensure my applications are secure, accessible, and compliant with the highest regulatory standards",
        skills: [
            {
                name: "Vue I18n",
                years: 3,
                proficiency: 50,
                keys: [
                    "vue",
                    "i18n",
                    "internationalization",
                ],
                icon: "vue-i18n",
                url: "https://vue-i18n.intlify.dev",
                description: "internationalization library",
            },
        ],
    },
    knowledge: {
        name: "knowledge",
        label: "Langs/Knowledge",
        title: "Languages, Knowledge, and Patterns",
        description: "My software knowledge providing versatility, innovation, and comprehension to a broad range of project environments",
        skills: [
            {
                name: "Typescript",
                years: 2,
                proficiency: 70,
                keys: [
                    "vue",
                    "node",
                    "javascript",
                    "type",
                    "react"
                ],
                icon: "typescript",
                subSkills: [

                ],
                url: "https://www.typescriptlang.org",
                description: "JavaScript with strong typing support",
            },
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
            {
                name: "vite",
                years: 4,
                proficiency: 80,
                keys: [
                    "build",
                    "web",
                    "vue",
                    "react",
                ],
                icon: "vite",
                url: "https://vite.dev",
                description: "a build tool for web applications",
            },
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
                name: "Typescript",
                years: 2,
                keys: [
                    "vue",
                    "node",
                    "javascript",
                    "type",
                    "react"
                ],
                proficiency: 70,
                icon: "typescript",
                subSkills: [
                    
                ],
                url: "https://www.typescriptlang.org",
                description: "JavaScript with strong typing support",
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
            {
                name: "Playwright",
                years: 1,
                proficiency: 10,
                keys: [
                    "e2e",
                    "end to end",
                    "vue",
                    "component"
                ],
                icon: "playwright",
                url: "https://playwright.dev",
                description: "end to end component testing library",
            },
            {
                name: "Cypress",
                years: 2,
                proficiency: 10,
                keys: [
                    "e2e",
                    "end to end",
                    "vue",
                    "component"
                ],
                icon: "cypress",
                url: "https://www.cypress.io",
                description: "end to end component testing library",
            },
            {
                name: "Storybook",
                years: 1,
                proficiency: 10,
                keys: [
                    "design",
                    "component",
                    "documentation"
                ],
                icon: "storybook",
                url: "https://storybook.js.org",
                description: "a UI component workshop with generated component documentation"
            },
            {
                name: "vite",
                years: 4,
                proficiency: 80,
                keys: [
                    "build",
                    "web",
                    "vue",
                    "react",
                ],
                icon: "vite",
                url: "https://vite.dev",
                description: "a build tool for web applications",
            },
            {
                name: "vitest",
                years: 3,
                proficiency: 80,
                keys: [
                    "unit test",
                    "vue",
                    "react",
                ],
                icon: "vitest",
                url: "https://vitest.dev",
            },
            {
                name: "Vue I18n",
                years: 3,
                proficiency: 50,
                keys: [
                    "vue",
                    "i18n",
                    "internationalization",
                ],
                icon: "vue-i18n",
                url: "https://vue-i18n.intlify.dev",
                description: "internationalization library",
            },
        ],
    },
}