import { Group, Skill } from "./types";


const React: Skill = {
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
};

const Vue: Skill = {
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
};

const Vuetify: Skill = {
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
};

const MDBootstrap: Skill = {
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
};

const Typescript: Skill = {
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
};

const JavaScript: Skill = {
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

};

const HTML: Skill = {
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
};

const CSS: Skill = {
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
};

const SASS: Skill = {
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
};

const Tailwind: Skill = {
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
};

const WebAPIs: Skill = {
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
};

const DOM: Skill = {
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
};

const PWAs: Skill = {
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
};

const SVG: Skill = {
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
};

export const Frontend: Group = {
    name: "frontend",
        label: "Frontend",
        title: "Frontend Technologies & Concepts",
        description: "What I use to create performant and pleasant user interfaces for web applications",
        skills: [
            React,
            Vue,
            Vuetify,
            MDBootstrap,
            Typescript,
            JavaScript,
            HTML,
            CSS,
            SASS,
            Tailwind,
            WebAPIs,
            DOM,
            PWAs,
            SVG,
        ],
};
