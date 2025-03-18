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
                        description: "routing library",
                        url: "https://router.vuejs.org",
                    },
                    {
                        name: "vue-use",
                        proficiency: 70,
                        icon: "vueuse",
                        description: "vue composable library",
                        url: "https://vueuse.org",
                    },
                    {
                        name: "pinia",
                        proficiency: 80,
                        icon: "pinia",
                        description: "state management library",
                        url: "https://pinia.vuejs.org",
                    },
                    {
                        name: "vue-test-utils",
                        proficiency: 60,
                        description: "component testing utilities",
                        url: "https://github.com/vuejs/test-utils",
                    },
                    {
                        name: "Vue I18n",
                        proficiency: 50,
                        icon: "vue-i18n",
                        description: "internationalization library",
                        url: "https://vue-i18n.intlify.dev",
                    },
                ],
                description: "A frontend component framework for building Single Page Applications",
                url: "https://vuejs.org",
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
                name: "Typescript",
                years: 2,
                keys: [
                    "vue",
                    "node",
                    "javascript",
                    "type",
                    "vue",
                    "react",
                ],
                proficiency: 70,
                icon: "typescript",
                subSkills: [
                    
                ],
                description: "JavaScript with strong typing support",
                url: "https://www.typescriptlang.org",
            },
            {
                name: "JavaScript",
                proficiency: 90,
                years: 5,
                keys: [
                    "ES6",
                    "web",
                    "node",
                    "script",
                    "w3",
                    "vue",
                    "react",
                ],
                icon: "javascript",
                subSkills: [],
                description: "web scripting language",
                url: "https://tc39.es/ecma262/",

            },
            {
                name: "HTML",
                proficiency: 90,
                years: 5,
                keys: [
                    "web",
                    "markup",
                    "hypertext",
                    "language",
                    "dom",
                    "document object model",
                    "w3",
                    "vue",
                    "react",
                ],
                icon: "html",
                subSkills: [],
                description: "Hypertext Markup Language",
                url: "https://www.w3.org/TR/2011/WD-html5-20110405/",
            },
            {
                name: "CSS",
                proficiency: 90,
                years: 5,
                keys: [
                    "web",
                    "style",
                    "cascading style sheets",
                    "w3",
                    "vue",
                    "react",
                ],
                icon: "css",
                subSkills: [],
                description: "Cascading Style Sheets",
                url: "https://www.w3.org/TR/css-2023/",
            },
            {
                name: "Sass/SCSS",
                proficiency: 90,
                years: 5,
                keys: [
                    "web",
                    "style",
                    "cascading style sheets",
                    "css",
                    "vue",
                    "react",
                ],
                icon: "sass",
                subSkills: [],
                description: "CSS preprocessor with enhanced usability",
                url: "https://sass-lang.com",
            },
            {
                name: "Tailwind CSS",
                proficiency: 60,
                years: 1,
                keys: [
                    "web",
                    "style",
                    "cascading style sheets",
                    "react",
                ],
                icon: "tailwindcss",
                subSkills: [],
                description: "CSS framework for in-component styling",
                url: "https://tailwindcss.com",
            },
            {
                name: "Web APIs",
                proficiency: 70,
                years: 6,
                keys: [
                    "web",
                    "api",
                    "web3",
                    "vue",
                    "react",
                ],
                subSkills: [
                    {
                        name: "Canvas",
                        years: 3,
                        proficiency: 75,
                        description: "drawing 2d graphics with JavaScript and HTML",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API",
                    },
                    {
                        name: "Clipboard",
                        years: 1,
                        proficiency: 30,
                        description: "responding to clipboard commands and interacting with the system clipboard",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API",
                    },
                    {
                        name: "Console",
                        years: 4,
                        proficiency: 80,
                        description: "printing messages to the browser console",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/Console_API",
                    },
                    {
                        name: "Cookie Store",
                        years: 1,
                        proficiency: 40,
                        description: "managing browser cookies",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/Cookie_Store_API",
                    },
                    {
                        name: "Encoding",
                        years: 2,
                        proficiency: 65,
                        description: "handling character encodings",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/Encoding_API",
                    },
                    {
                        name: "Fetch",
                        years: 3,
                        proficiency: 90,
                        description: "making HTTP requests and fetching resources across the network",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
                    },
                    {
                        name: "File",
                        years: 3,
                        proficiency: 65,
                        description: "enabling web applications to access files",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/File_API",
                    },
                    {
                        name: "File System",
                        years: 3,
                        proficiency: 70,
                        description: "accessing the device file system for reading and writing files",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/File_System_API",
                    },
                    {
                        name: "Gamepad",
                        years: 3,
                        proficiency: 90,
                        description: "responding to signals from gamepads, controllers, and alternative input devices",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API",
                    },
                    {
                        name: "HTML Drag and Drop",
                        years: 3,
                        proficiency: 70,
                        description: "enabling applications to use drag-and-drop features in browsers",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API",
                    },
                    {
                        name: "History",
                        years: 1,
                        proficiency: 50,
                        description: "enabling access to browsers' session history and manipulating it",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/History_API",
                    },
                    {
                        name: "IndexedDB",
                        years: 1,
                        proficiency: 20,
                        description: "enabling client side storage of significant amounts of data",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API",
                    },
                    {
                        name: "Keyboard",
                        years: 2,
                        proficiency: 60,
                        description: "enabling keyboard mapping and keyboard locking",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/Keyboard_API",
                    },
                    {
                        name: "Notifications",
                        years: 2,
                        proficiency: 30,
                        description: "enableing web apps to send notifications to the user",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API",
                    },
                    {
                        name: "Permissions",
                        years: 1,
                        proficiency: 60,
                        description: "querying whether permission is granted to use Web APIs that require it",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API",
                    },
                    {
                        name: "Push",
                        years: 1,
                        proficiency: 40,
                        description: "enabling web applications to receive push notifications from a server",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/Push_API",
                    },
                    {
                        name: "Service Worker",
                        years: 2,
                        proficiency: 80,
                        description: "intercepting web application requests and resand responding before the network is accessed",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API"
                    },
                    {
                        name: "UI Events",
                        years: 2,
                        proficiency: 90,
                        description: "responding to DOM events",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/UI_Events"
                    },
                    {
                        name: "URL",
                        years: 2, 
                        proficiency: 60,
                        description: "providing handles to a raw URL to facilitate its modification",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/URL_API",
                    },
                    {
                        name: "Web Crypto",
                        years: 2, 
                        proficiency: 60,
                        description: "providing cryptographic primitives for web applications",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API",
                    },
                    {
                        name: "Web Storage",
                        years: 4,
                        proficiency: 30,
                        description: "providing web apps with the ability to store k/v pairs via sessionStorage or localStorage",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API",
                    }
                ],
                description: "Functionality for browser-based applications",
                url: "https://developer.mozilla.org/en-US/docs/Web/API",
            },
            {
                name: "DOM",
                years: 5,
                proficiency: 90,
                keys: [
                    "web",
                    "document object model",
                    "vue",
                    "react",
                    "html",
                    "hypertext markup language",
                    "javascript",
                    "svg",
                    "scalable vector graphics",
                ],
                description: "enabling programmatic access to HTML, SVG, and XML nodes using JavaScript",
                url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
            },
            {
                name: "Progressive Web apps",
                years: 1,
                proficiency: 80,
                keys: [
                    "web",
                    "offline",
                    "mobile",
                    "vue",
                    "react",
                ],
                subSkills: [
                    {
                        name: "Service Worker",
                        years: 2,
                        proficiency: 80,
                        description: "intercepting web application requests and resand responding before the network is accessed",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API"
                    },
                ],
                description: "web applications which can be installed and operate offline",
                url: "https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps#core_pwa_guides",
            },
            {
                name: "SVG API",
                years: 1,
                proficiency: 75,
                keys: [
                    "web",
                    "svg",
                    "image",
                    "vue",
                    "react",
                ],
                icon: "tailwindcss",
                subSkills: [],
                description: "elements for scalable vector graphics",
                url: "https://https://developer.mozilla.org/en-US/docs/Web/API/SVG_API.com",
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
                name: "Vitest",
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
                name: "Git",
                proficiency: 80,
                years: 15,
                keys: [
                    "version control",
                ],
                icon: "git",
                subSkills: [],
                description: "version control",
                url: "https://git-scm.com",
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
            {
                name: "Git",
                proficiency: 80,
                years: 15,
                keys: [
                    "version control",
                ],
                icon: "git",
                subSkills: [],
                description: "version control",
                url: "https://git-scm.com",
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
                    "script",
                    "w3",
                    "vue",
                    "react",
                ],
                icon: "javascript",
                subSkills: [],
                description: "web scripting language",
                url: "https://tc39.es/ecma262/",

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
                    "markup",
                    "hypertext",
                    "language",
                    "dom",
                    "document object model",
                    "w3",
                    "vue",
                    "react",
                ],
                icon: "html",
                subSkills: [],
                description: "Hypertext Markup Language",
                url: "https://www.w3.org/TR/2011/WD-html5-20110405/",
            },
            {
                name: "CSS",
                proficiency: 90,
                years: 5,
                keys: [
                    "web",
                    "style",
                    "cascading style sheets",
                    "w3",
                    "vue",
                    "react",
                ],
                icon: "css",
                subSkills: [],
                description: "Cascading Style Sheets",
                url: "https://www.w3.org/TR/css-2023/",
            },
            {
                name: "Sass/SCSS",
                proficiency: 90,
                years: 5,
                keys: [
                    "web",
                    "style",
                    "cascading style sheets",
                    "css",
                    "vue",
                    "react",
                ],
                icon: "sass",
                subSkills: [],
                description: "CSS preprocessor with enhanced usability",
                url: "https://sass-lang.com",
            },
            {
                name: "Tailwind CSS",
                proficiency: 60,
                years: 1,
                keys: [
                    "web",
                    "style",
                    "cascading style sheets",
                    "react",
                ],
                icon: "tailwindcss",
                subSkills: [],
                description: "CSS framework for in-component styling",
                url: "https://tailwindcss.com",
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
                    "vue",
                    "react",
                ],
                icon: "git",
                subSkills: [],
                description: "version control",
                url: "https://git-scm.com",
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
                        description: "routing library",
                        url: "https://router.vuejs.org",
                    },
                    {
                        name: "vue-use",
                        proficiency: 70,
                        icon: "vueuse",
                        description: "vue composable library",
                        url: "https://vueuse.org",
                    },
                    {
                        name: "pinia",
                        proficiency: 80,
                        icon: "pinia",
                        description: "state management library",
                        url: "https://pinia.vuejs.org",
                    },
                    {
                        name: "vue-test-utils",
                        proficiency: 60,
                        description: "component testing utilities",
                        url: "https://github.com/vuejs/test-utils",
                    },
                    {
                        name: "Vue I18n",
                        proficiency: 50,
                        icon: "vue-i18n",
                        description: "internationalization library",
                        url: "https://vue-i18n.intlify.dev",
                    },
                ],
                description: "A frontend component framework for building Single Page Applications",
                url: "https://vuejs.org",
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
                name: "Web APIs",
                proficiency: 70,
                years: 6,
                keys: [
                    "web",
                    "api",
                    "web3",
                    "vue",
                    "react",
                ],
                subSkills: [
                    {
                        name: "Canvas",
                        years: 3,
                        proficiency: 75,
                        description: "drawing 2d graphics with JavaScript and HTML",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API",
                    },
                    {
                        name: "Clipboard",
                        years: 1,
                        proficiency: 30,
                        description: "responding to clipboard commands and interacting with the system clipboard",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API",
                    },
                    {
                        name: "Console",
                        years: 4,
                        proficiency: 80,
                        description: "printing messages to the browser console",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/Console_API",
                    },
                    {
                        name: "Cookie Store",
                        years: 1,
                        proficiency: 40,
                        description: "managing browser cookies",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/Cookie_Store_API",
                    },
                    {
                        name: "Encoding",
                        years: 2,
                        proficiency: 65,
                        description: "handling character encodings",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/Encoding_API",
                    },
                    {
                        name: "Fetch",
                        years: 3,
                        proficiency: 90,
                        description: "making HTTP requests and fetching resources across the network",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
                    },
                    {
                        name: "File",
                        years: 3,
                        proficiency: 65,
                        description: "enabling web applications to access files",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/File_API",
                    },
                    {
                        name: "File System",
                        years: 3,
                        proficiency: 70,
                        description: "accessing the device file system for reading and writing files",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/File_System_API",
                    },
                    {
                        name: "Gamepad",
                        years: 3,
                        proficiency: 90,
                        description: "responding to signals from gamepads, controllers, and alternative input devices",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API",
                    },
                    {
                        name: "HTML Drag and Drop",
                        years: 3,
                        proficiency: 70,
                        description: "enabling applications to use drag-and-drop features in browsers",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API",
                    },
                    {
                        name: "History",
                        years: 1,
                        proficiency: 50,
                        description: "enabling access to browsers' session history and manipulating it",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/History_API",
                    },
                    {
                        name: "IndexedDB",
                        years: 1,
                        proficiency: 20,
                        description: "enabling client side storage of significant amounts of data",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API",
                    },
                    {
                        name: "Keyboard",
                        years: 2,
                        proficiency: 60,
                        description: "enabling keyboard mapping and keyboard locking",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/Keyboard_API",
                    },
                    {
                        name: "Notifications",
                        years: 2,
                        proficiency: 30,
                        description: "enableing web apps to send notifications to the user",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API",
                    },
                    {
                        name: "Permissions",
                        years: 1,
                        proficiency: 60,
                        description: "querying whether permission is granted to use Web APIs that require it",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API",
                    },
                    {
                        name: "Push",
                        years: 1,
                        proficiency: 40,
                        description: "enabling web applications to receive push notifications from a server",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/Push_API",
                    },
                    {
                        name: "Service Worker",
                        years: 2,
                        proficiency: 80,
                        description: "intercepting web application requests and resand responding before the network is accessed",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API"
                    },
                    {
                        name: "UI Events",
                        years: 2,
                        proficiency: 90,
                        description: "responding to DOM events",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/UI_Events"
                    },
                    {
                        name: "URL",
                        years: 2, 
                        proficiency: 60,
                        description: "providing handles to a raw URL to facilitate its modification",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/URL_API",
                    },
                    {
                        name: "Web Crypto",
                        years: 2, 
                        proficiency: 60,
                        description: "providing cryptographic primitives for web applications",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API",
                    },
                    {
                        name: "Web Storage",
                        years: 4,
                        proficiency: 30,
                        description: "providing web apps with the ability to store k/v pairs via sessionStorage or localStorage",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API",
                    }
                ],
                description: "Functionality for browser-based applications",
                url: "https://developer.mozilla.org/en-US/docs/Web/API",
            },
            {
                name: "DOM",
                years: 5,
                proficiency: 90,
                keys: [
                    "web",
                    "document object model",
                    "vue",
                    "react",
                    "html",
                    "hypertext markup language",
                    "javascript",
                    "svg",
                    "scalable vector graphics",
                ],
                description: "enabling programmatic access to HTML, SVG, and XML nodes using JavaScript",
                url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
            },
            {
                name: "Progressive Web apps",
                years: 1,
                proficiency: 80,
                keys: [
                    "web",
                    "offline",
                    "mobile",
                    "vue",
                    "react",
                ],
                subSkills: [
                    {
                        name: "Service Worker",
                        years: 2,
                        proficiency: 80,
                        description: "intercepting web application requests and resand responding before the network is accessed",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API"
                    },
                ],
                description: "web applications which can be installed and operate offline",
                url: "https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps#core_pwa_guides",
            },
            {
                name: "SVG API",
                years: 1,
                proficiency: 75,
                keys: [
                    "web",
                    "svg",
                    "image",
                    "vue",
                    "react",
                ],
                subSkills: [],
                description: "elements for scalable vector graphics",
                url: "https://https://developer.mozilla.org/en-US/docs/Web/API/SVG_API.com",
            },
        ],
    },
}