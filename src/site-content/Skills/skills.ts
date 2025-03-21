import { Group, Skill } from "./types.ts";

import { Frontend } from "./frontend.ts";
import { Backend } from "./backend.ts";
import { LifecycleCollab } from "./lifecyclecollab.ts";
import { SoftSkills } from "./softskills.ts";
import { DevOps } from "./devops.ts";
import { QA } from "./qa.ts";
import { Design } from "./design.ts";
import { AccessSecurity } from "./accesssecurity.ts";
import { Knowledge } from "./knowledge.ts";
import { AI } from "./artificialintelligence.ts";
import { NativeMobileGames } from "./nativemobilegames.ts";
import { Workspaces } from "./workspaces.ts";
import { LanguagesAndMore } from "./languagesandmore.ts";

export * from "./types.ts";

export interface GroupContainer {
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

const JQuery: Skill = {
    name: "jQuery",
    years: 1,
    proficiency: 60,
    keys: [
        "web",
        "javascript",
        "dom",
    ],
    icon: "jquery",
    subSkills: [],
    description: "JavaScript library for DOM manipulation and event handling",
    url: "https://jquery.com",
};

const AJAX: Skill = {
    name: "AJAX",
    years: 5,
    proficiency: 95,
    keys: [
        "web",
        "javascript",
        "api",
        "fetch",
        "react",
        "vue",
    ],
    icon: "ajax",
    subSkills: [],
    description: "Asynchronous JavaScript and XML for fetching data without refreshing the page",
    url: "https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX",
};

const Handlebars: Skill = {
    name: "Handlebars",
    years: 1,
    proficiency: 60,
    keys: [
        "template",
        "javascript",
    ],
    icon: "handlebars",
    subSkills: [],
    description: "JavaScript templating engine for building semantic templates",
    url: "https://handlebarsjs.com",
};

const OpenSeaDragon: Skill = {
    name: "OpenSeaDragon",
    years: 1,
    proficiency: 70,
    keys: [
        "image",
        "viewer",
        "zoomable",
        "pan",
        "dzi",
        "canvas",
        "deep zoom",
        "vue",
        "package",
    ],
    icon: "openseadragon",
    subSkills: [],
    description: "JavaScript library for displaying high-resolution deep-zooming images with zoom and pan capabilities",
    url: "https://openseadragon.github.io/",
};

const SpaceMouse: Skill = {
    name: "3DConnexion SpaceMouse",
    years: 3,
    proficiency: 90,
    keys: [
        "3d",
        "input device",
        "mouse",
        "vue",
    ],
    icon: "3dconnexion",
    subSkills: [],
    description: "3D mouse for navigating deep zoom images and 3D environments in web and native applications",
    url: "https://3dconnexion.com/us/spacemouse/",
};

const Axios: Skill = {
    name: "Axios",
    years: 4,
    proficiency: 80,
    keys: [
        "api",
        "http",
        "fetch",
        "promise",
        "vue",
        "react",
        "package",
    ],
    icon: "axios",
    subSkills: [],
    description: "Promise-based HTTP client for making requests to APIs",
    url: "https://axios-http.com",
};

const BcryptJS: Skill = {
    name: "BcryptJS",
    years: 1,
    proficiency: 70,
    keys: [
        "hash",
        "password",
        "vue",
        "package",
    ],
    icon: "bcryptjs",
    subSkills: [],
    description: "JavaScript library for hashing passwords",
    url: "https://www.npmjs.com/package/bcrypt",
};

const LocalForage: Skill = {
    name: "LocalForage",
    years: 1,
    proficiency: 70,
    keys: [
        "storage",
        "offline",
        "vue",
        "package",
    ],
    icon: "localforage",
    subSkills: [],
    description: "JavaScript library for offline storage, using IndexedDB, WebSQL, or localStorage",
    url: "https://localforage.github.io/localForage/",
};

const Lodash: Skill = {
    name: "Lodash",
    years: 3,
    proficiency: 80,
    keys: [
        "utility",
        "javascript",
        "vue",
        "react",
        "package",
    ],
    icon: "lodash",
    subSkills: [],
    description: "JavaScript utility library for common programming tasks",
    url: "https://lodash.com",
};

const PopperJS: Skill = {
    name: "PopperJS",
    years: 1,
    proficiency: 70,
    keys: [
        "tooltip",
        "popover",
        "vue",
        "react",
        "package",
    ],
    icon: "popperjs",
    subSkills: [],
    description: "JavaScript library for managing poppers (tooltips, dropdowns) in web applications",
    url: "https://popper.js.org",
};

const NodeMailer: Skill = {
    name: "NodeMailer",
    years: 1,
    proficiency: 70,
    keys: [
        "email",
        "smtp",
        "package",
    ],
    icon: "nodemailer",
    subSkills: [],
    description: "module for Node.js applications to allow easy email sending",
    url: "https://nodemailer.com",
};

const NodeJS: Skill = {
    name: "NodeJS",
    years: 5,
    proficiency: 95,
    keys: [
        "javascript",
        "server",
    ],
    icon: "nodejs",
    subSkills: [],
    description: "JavaScript runtime",
    url: "https://nodejs.org",
};

const ExpressJS: Skill = {
    name: "ExpressJS",
    years: 5,
    proficiency: 90,
    keys: [
        "javascript",
        "server",
        "framework",
    ],
    icon: "express",
    subSkills: [],
    description: "web application framework for Node.js",
    url: "https://expressjs.com",
};

const MongoDB: Skill = {
    name: "MongoDB",
    years: 1,
    proficiency: 70,
    keys: [
        "database",
        "nosql",
    ],
    icon: "mongodb",
    subSkills: [],
    description: "NoSQL database",
    url: "https://www.mongodb.com",
};

const REST: Skill = {
    name: "REST",
    years: 5,
    proficiency: 90,
    keys: [
        "api",
        "architecture",
        "design",
    ],
    subSkills: [],
    description: "Representational State Transfer architecture for networked applications",
    url: "https://www.redhat.com/en/topics/api/what-is-a-rest-api",
};

const Microservices: Skill = {
    name: "Microservices",
    years: 3,
    proficiency: 80,
    keys: [
        "architecture",
        "design",
        "distributed",
    ],
    subSkills: [],
    description: "architectural style that structures an application as a collection of loosely coupled services",
    url: "https://microservices.io",
};

const KnexJS: Skill = {
    name: "KnexJS",
    years: 1,
    proficiency: 70,
    keys: [
        "database",
        "sql",
    ],
    icon: "knex",
    subSkills: [],
    description: "SQL query builder for Node.js",
    url: "http://knexjs.org",
};

const PostgreSQL: Skill = {
    name: "PostgreSQL",
    years: 1,
    proficiency: 70,
    keys: [
        "database",
        "sql",
    ],
    icon: "postgresql",
    subSkills: [],
    description: "open-source relational database",
    url: "https://www.postgresql.org",
};

const SQL: Skill = {
    name: "SQL",
    years: 1,
    proficiency: 70,
    keys: [
        "database",
        "query",
    ],
    icon: "sql",
    subSkills: [],
    description: "Structured Query Language for managing relational databases",
    url: "https://www.w3schools.com/sql/",
};

const DatabaseMigrations: Skill = {
    name: "Database Migrations",
    years: 1,
    proficiency: 70,
    keys: [
        "database",
        "schema",
        "versioning",
    ],
    subSkills: [],
    description: "managing changes to the database schema over time",
    url: "https://en.wikipedia.org/wiki/Database_migration",
};

const JSONSchema: Skill = {
    name: "JSON Schema",
    years: 1,
    proficiency: 70,
    keys: [
        "validation",
        "json",
        "schema",
    ],
    subSkills: [],
    description: "a vocabulary that allows you to annotate and validate JSON documents",
    url: "https://json-schema.org",
};

const OpenAPI: Skill = {
    name: "OpenAPI",
    years: 1,
    proficiency: 70,
    keys: [
        "api",
        "specification",
        "documentation",
    ],
    subSkills: [],
    description: "a specification for building APIs",
    url: "https://swagger.io/specification/",
};

const SwaggerJSDoc: Skill = {
    name: "SwaggerJSDoc",
    years: 1,
    proficiency: 70,
    keys: [
        "api",
        "documentation",
        "jsdoc",
    ],
    subSkills: [],
    description: "Generates OpenAPI documentation from JSDoc comments in your code",
    url: "https://www.npmjs.com/package/swagger-jsdoc",
};

const SwaggerUiExpress: Skill = {
    name: "swaggerUiExpress",
    years: 1,
    proficiency: 70,
    keys: [
        "api",
        "documentation",
        "express",
    ],
    subSkills: [],
    description: "Swagger UI for Express.js to serve OpenAPI documentation",
    url: "https://www.npmjs.com/package/swagger-ui-express",
};

const ExpressOpenAPIValidator: Skill = {
    name: "express-openapi-validator",
    years: 1,
    proficiency: 70,
    keys: [
        "api",
        "validation",
        "express",
    ],
    subSkills: [],
    description: "Middleware for validating OpenAPI requests and responses in Express.js",
    url: "https://www.npmjs.com/package/express-openapi-validator",
};

const CORS: Skill = {
    name: "CORS",
    years: 1,
    proficiency: 70,
    keys: [
        "security",
        "http",
        "cross-origin",
    ],
    subSkills: [],
    description: "Cross-Origin Resource Sharing, a security feature for web applications",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",
};

const Dotenv: Skill = {
    name: "dotenv",
    years: 1,
    proficiency: 70,
    keys: [
        "environment",
        "configuration",
        "variables",
    ],
    subSkills: [],
    description: "zero-dependency module that loads environment variables from a .env file into process.env",
    url: "https://www.npmjs.com/package/dotenv",
};

const Helmet: Skill = {
    name: "Helmet",
    years: 1,
    proficiency: 70,
    keys: [
        "security",
        "http",
        "headers",
    ],
    subSkills: [],
    description: "helps you secure your Express apps by setting various HTTP headers",
    url: "https://helmetjs.github.io",
};

const Morgan: Skill = {
    name: "Morgan",
    years: 1,
    proficiency: 70,
    keys: [
        "logging",
        "http",
        "middleware",
    ],
    subSkills: [],
    description: "HTTP request logger middleware for Node.js",
    url: "https://www.npmjs.com/package/morgan",
};

const ExpressSession: Skill = {
    name: "express-session",
    years: 1,
    proficiency: 70,
    keys: [
        "session",
        "middleware",
        "express",
    ],
    subSkills: [],
    description: "middleware for managing sessions in Express.js",
    url: "https://www.npmjs.com/package/express-session",
};

const CookieParser: Skill = {
    name: "cookie-parser",
    years: 1,
    proficiency: 70,
    keys: [
        "cookies",
        "middleware",
        "express",
    ],
    subSkills: [],
    description: "middleware for parsing cookies in Express.js",
    url: "https://www.npmjs.com/package/cookie-parser",
};

const ConnectMongo: Skill = {
    name: "connect-mongo",
    years: 1,
    proficiency: 70,
    keys: [
        "session",
        "mongodb",
        "express",
    ],
    subSkills: [],
    description: "MongoDB session store for Express.js",
    url: "https://www.npmjs.com/package/connect-mongo",
};

const Mongoose: Skill = {
    name: "Mongoose",
    years: 1,
    proficiency: 70,
    keys: [
        "mongodb",
        "object modeling",
        "schema",
    ],
    subSkills: [],
    description: "MongoDB object modeling tool designed to work in an asynchronous environment",
    url: "https://mongoosejs.com",
};

const GlobalTeamCollaboration: Skill = {
    name: "Global Team Collaboration",
    years: 4,
    proficiency: 90,
    keys: [
        "collaboration",
        "communication",
        "remote",
    ],
    subSkills: [
        {
            name: "Language Difference Competency",
            proficiency: 85,
            description: "Awareness of language differences and use of tools and methods to bridge communication gaps",
        },
        {
            name: "Time Zone Management",
            proficiency: 90,
            description: "Skilled in managing time zone differences for effective team collaboration",
        },
        {
            name: "Cultural Sensitivity",
            proficiency: 90,
            description: "Adept at understanding and respecting cultural differences in a global team",
        },
    ],
    description: "Experience working with global teams using various collaboration tools and methodologies",
};

const RemoteTeamCollaboration: Skill = {
    name: "Remote Collaboration",
    years: 4,
    proficiency: 90,
    keys: [
        "remote",
        "collaboration",
        "communication",
    ],
    subSkills: [
        {
            name: "Asynchronous Communication",
            proficiency: 90,
            description: "Skilled in using asynchronous communication tools and methods for effective collaboration",
        },
        {
            name: "Remote Communication Tools",
            proficiency: 90,
            description: "Proficient in using various tools for effective remote communication",
        },
    ],
    description: "Experience working with remote teams using various collaboration tools and methodologies",
};

const AGILE: Skill = {
    name: "AGILE",
    years: 4,
    proficiency: 90,
    keys: [
        "agile",
        "scrum",
        "kanban",
    ],
    description: "Experience working in AGILE environments using Scrum and Kanban methodologies",
    url: "https://www.agilealliance.org/agile101/",
};

const Requirements: Skill = {
    name: "Requirements Gathering",
    years: 4,
    proficiency: 90,
    keys: [
        "requirements",
        "gathering",
        "analysis",
    ],
    description: "Experience in gathering and analyzing requirements for software projects",
};

const SoftwareSpecs: Skill = {
    name: "Software Specifications",
    years: 4,
    proficiency: 90,
    keys: [
        "software",
        "specifications",
        "documentation",
    ],
    description: "Experience in creating and maintaining software specifications for projects",
};

const MatrixRequirements: Skill = {
    name: "Matrix Requirements",
    years: 4,
    proficiency: 90,
    keys: [
        "matrix",
        "requirements",
        "analysis",
    ],
    icon: "matrixreq",
    description: "Requirements documentation application for medical device software",
    url: "https://www.matrixreq.com",
};

const Documentation: Skill = {
    name: "Documentation",
    years: 4,
    proficiency: 90,
    keys: [
        "documentation",
        "writing",
        "technical writing",
    ],
    description: "Experience in creating and maintaining documentation for software projects",
};

const Confluence: Skill = {
    name: "Confluence",
    years: 4,
    proficiency: 90,
    keys: [
        "confluence",
        "documentation",
        "wiki",
    ],
    description: "Experience using Confluence for documentation and collaboration",
    url: "https://www.atlassian.com/software/confluence",
};

const GoogleDocs: Skill = {
    name: "Google Docs",
    years: 4,
    proficiency: 90,
    keys: [
        "google docs",
        "documentation",
        "collaboration",
    ],
    description: "Experience using Google Docs for documentation and collaboration",
    url: "https://docs.google.com",
};

const Monday: Skill = {
    name: "Monday",
    years: 4,
    proficiency: 90,
    keys: [
        "monday.com",
        "project management",
        "collaboration",
    ],
    description: "Experience using Monday.com for project management and collaboration",
    url: "https://monday.com",
};

const Trello: Skill = {
    name: "Trello",
    years: 4,
    proficiency: 90,
    keys: [
        "trello",
        "project management",
        "collaboration",
    ],
    description: "Experience using Trello for project management and collaboration",
    url: "https://trello.com",
};

const Slack: Skill = {
    name: "Slack",
    years: 4,
    proficiency: 90,
    keys: [
        "slack",
        "communication",
        "collaboration",
    ],
    description: "Experience using Slack for communication and collaboration",
    url: "https://slack.com",
};

const Whatsapp: Skill = {
    name: "Whatsapp",
    years: 4,
    proficiency: 90,
    keys: [
        "whatsapp",
        "communication",
        "collaboration",
    ],
    description: "Experience using Whatsapp for communication and collaboration",
    url: "https://www.whatsapp.com",
};

const Zoom: Skill = {
    name: "Zoom",
    years: 4,
    proficiency: 90,
    keys: [
        "zoom",
        "video conferencing",
        "communication",
    ],
    description: "Experience using Zoom for video conferencing and communication",
    url: "https://zoom.us",
};

const Teams: Skill = {
    name: "Microsoft Teams",
    years: 4,
    proficiency: 90,
    keys: [
        "microsoft teams",
        "video conferencing",
        "communication",
    ],
    description: "Experience using Microsoft Teams for video conferencing and communication",
    url: "https://www.microsoft.com/en/microsoft-teams/group-chat-software",
};

const GoogleMeet: Skill = {
    name: "Google Meet",
    years: 4,
    proficiency: 90,
    keys: [
        "google meet",
        "video conferencing",
        "communication",
    ],
    description: "Experience using Google Meet for video conferencing and communication",
    url: "https://meet.google.com",
};

const Jira: Skill = {
    name: "Jira",
    years: 4,
    proficiency: 90,
    keys: [
        "jira",
        "project management",
        "issue tracking",
    ],
    description: "Experience using Jira for project management and issue tracking",
    url: "https://www.atlassian.com/software/jira",
};

const PairProgramming: Skill = {
    name: "Pair Programming",
    years: 4,
    proficiency: 90,
    keys: [
        "pair programming",
        "collaboration",
        "coding",
    ],
    description: "Experience in pair programming for collaborative coding",
};

const CodeReviews: Skill = {
    name: "Code Reviews",
    years: 4,
    proficiency: 90,
    keys: [
        "code reviews",
        "collaboration",
        "quality assurance",
    ],
    description: "Experience in conducting code reviews for quality assurance and collaboration",
};

const Retrospectives: Skill = {
    name: "Retrospectives",
    years: 4,
    proficiency: 90,
    keys: [
        "retrospectives",
        "agile",
        "continuous improvement",
    ],
    description: "Experience in conducting retrospectives for continuous improvement in AGILE teams",
};

const SprintPlanning: Skill = {
    name: "Sprint Planning",
    years: 4,
    proficiency: 90,
    keys: [
        "sprint planning",
        "agile",
        "project management",
    ],
    description: "Experience in sprint planning for AGILE project management",
};

const WorkloadPrioritization: Skill = {
    name: "Workload Prioritization",
    years: 4,
    proficiency: 90,
    keys: [
        "workload prioritization",
        "time management",
        "productivity",
    ],
    description: "Skilled in prioritizing workload for effective time management and productivity",
};

const VersionControl: Skill = {
    name: "Version Control",
    years: 4,
    proficiency: 90,
    keys: [
        "version control",
        "git",
        "github",
    ],
    description: "Experienced in using version control systems for collaborative development",
};

const GitHub: Skill = {
    name: "GitHub",
    years: 4,
    proficiency: 90,
    keys: [
        "github",
        "version control",
        "git",
    ],
    description: "Experienced in using GitHub for version control and collaboration",
    url: "https://github.com",
};

const PowerPoint: Skill = {
    name: "PowerPoint",
    years: 4,
    proficiency: 90,
    keys: [
        "powerpoint",
        "presentation",
        "communication",
    ],
    description: "Experienced in using PowerPoint for creating presentations and communication",
    url: "https://www.microsoft.com/en/microsoft-365/powerpoint",
};

const Slides: Skill = {
    name: "Google Slides",
    years: 4,
    proficiency: 90,
    keys: [
        "google slides",
        "presentation",
        "communication",
    ],
    description: "Experienced in using Google Slides for creating presentations and communication",
    url: "https://www.google.com/slides/about/",
};

const QuarterlyReviews: Skill = {
    name: "Quarterly Reviews",
    years: 4,
    proficiency: 90,
    keys: [
        "quarterly reviews",
        "performance reviews",
        "feedback",
    ],
    description: "Experience in conducting quarterly reviews for performance evaluation and feedback",
};

const Waterfall: Skill = {
    name: "Waterfall Development",
    years: 4,
    proficiency: 70,
    keys: [
        "waterfall",
        "software development",
        "traditional",
    ],
    description: "Experience in traditional Waterfall software development methodology",
    url: "https://www.tutorialspoint.com/sdlc/sdlc_waterfall_model.htm",
};

export const groups: GroupContainer = {
    frontend: Frontend,
    backend: Backend,
    lifecyclecollab: LifecycleCollab,
    softskills: SoftSkills,
    devops: DevOps,
    qa: QA,
    design: Design,  
    accesssecurity: AccessSecurity,
    knowledge: Knowledge,
    ai: AI,
    nativemobilegames: NativeMobileGames,
    workspaces: Workspaces,
    languagesandmore: LanguagesAndMore,
    all: {
        name: "all",
        label: "All",
        title: "Everything Under the Sun",
        description: "Every skill I use in my expansive software experience",
        skills: [
            React,
            JavaScript,
            Typescript,
            HTML,
            CSS,
            SASS,
            Tailwind,
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
            Vue,
            Vuetify,
            MDBootstrap,
            WebAPIs,
            DOM,
            PWAs,
            SVG,
            JQuery,
            AJAX,
            Lodash,
            Axios,
            NodeMailer,
            BcryptJS,
            LocalForage,
            PopperJS,
            OpenSeaDragon,
            SpaceMouse,
            Handlebars,
            KnexJS,
            REST,
            Microservices,
            SQL,
            DatabaseMigrations,
            JSONSchema,
            OpenAPI,
            SwaggerJSDoc,
            SwaggerUiExpress,
            ExpressOpenAPIValidator,
            CORS,
            Dotenv,
            Helmet,
            Morgan,
            ExpressSession,
            CookieParser,
            ConnectMongo,
            Mongoose,
            Typescript,
            NodeJS,
            ExpressJS,
            MongoDB,
            PostgreSQL,
            SQL,
            DatabaseMigrations,
            JSONSchema,
            OpenAPI,
            SwaggerJSDoc,
            SwaggerUiExpress,
            ExpressOpenAPIValidator,
            CORS,
            Dotenv,
            Helmet,
            Morgan,
            ExpressSession,
            CookieParser,
            ConnectMongo,
            Mongoose,
            GlobalTeamCollaboration,
            RemoteTeamCollaboration,
            AGILE,
            Requirements,
            SoftwareSpecs,
            MatrixRequirements,
            Documentation,
            Confluence,
            GoogleDocs,
            Monday,
            Trello,
            Slack,
            Whatsapp,
            Zoom,
            Teams,
            GoogleMeet,
            Jira,
            PairProgramming,
            CodeReviews,
            Retrospectives,
            SprintPlanning,
            WorkloadPrioritization,
            VersionControl,
            GitHub,
            PowerPoint,
            Slides,
            QuarterlyReviews,
            Waterfall,
        ],
    },
}