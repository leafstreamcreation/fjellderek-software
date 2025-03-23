import { Group, Skill } from "./types.ts";

import { Frontend } from "./frontend.ts";
import { Backend } from "./backend.ts";
import { LifecycleCollab } from "./lifecyclecollab.ts";
import { SoftSkills } from "./softskills.ts";
import { DevOps } from "./devops.ts";
import { QA } from "./qa.ts";
import { AccessDesign } from "./accessibilityanddesign.ts";
import { SecurityCompliance } from "./securityandcompliance.ts";
import { ComputationAlgorithmsPatterns, StructuresAlgorithmsPatterns } from "./computationalgorithmspatterns.ts";
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

const ConstructiveFeedback: Skill = {
    name: "Constructive Feedback",
    proficiency: 100,
    years: 10,
    description: "I actively seek and provide constructive feedback to foster growth and improvement.",
};

const CriticalThinking: Skill = {
    name: "Critical Thinking",
    proficiency: 100,
    years: 10,
    description: "I analyze situations and problems critically to make informed decisions.",
};

const Communication: Skill = {
    name: "Communication",
    proficiency: 100,
    years: 10,
    description: "I effectively convey ideas and information to others, both verbally and in writing.",
};

const Collaboration: Skill = {
    name: "Collaboration",
    proficiency: 100,
    years: 10,
    description: "I work well with others to achieve common goals and foster a positive team environment.",
};

const Adaptability: Skill = {
    name: "Adaptability",
    proficiency: 100,
    years: 10,
    description: "I quickly adjust to new situations and challenges, maintaining a positive attitude.",
};

const Pragmatism: Skill = {
    name: "Pragmatism",
    proficiency: 100,
    years: 10,
    description: "I focus on practical solutions and results, balancing idealism with realism.",
};

const ProblemSolving: Skill = {
    name: "Problem Solving",
    proficiency: 100,
    years: 10,
    description: "I identify and resolve issues efficiently and effectively, using a systematic approach.",
};

const TimeManagement: Skill = {
    name: "Time Management",
    proficiency: 100,
    years: 10,
    description: "I prioritize tasks and manage my time effectively to meet deadlines and achieve goals.",
};

const Creativity: Skill = {
    name: "Creativity",
    proficiency: 100,
    years: 10,
    description: "I think outside the box and bring innovative ideas to the table.",
};

const Empathy: Skill = {
    name: "Empathy",
    proficiency: 100,
    years: 10,
    description: "I understand and share the feelings of others, fostering a supportive environment.",
};

const LearningAgility: Skill = {
    name: "Learning Agility",
    proficiency: 100,
    years: 10,
    description: "I quickly learn and apply new skills and knowledge in various situations.",
};

const Resilience: Skill = {
    name: "Resilience",
    proficiency: 100,
    years: 10,
    description: "I bounce back from setbacks and maintain a positive outlook in challenging situations.",
};

const EmotionalIntelligence: Skill = {
    name: "Emotional Intelligence",
    proficiency: 100,
    years: 10,
    description: "I recognize and manage my own emotions, as well as understand and influence the emotions of others.",
};

const HarmReduction: Skill = {
    name: "Harm Reduction",
    proficiency: 100,
    years: 10,
    description: "I prioritize safety and well-being by minimizing risks and promoting healthier choices.",
};

const ConflictResolution: Skill = {
    name: "Conflict Resolution",
    proficiency: 100,
    years: 10,
    description: "I effectively manage and resolve conflicts to maintain positive relationships and a harmonious environment.",
};

const Inclusion: Skill = {
    name: "Inclusion",
    proficiency: 100,
    years: 10,
    description: "I promote diversity and ensure that everyone feels valued and included in all aspects of work and life.",
};

const Accountability: Skill = {
    name: "Accountability",
    proficiency: 100,
    years: 10,
    description: "I take responsibility for my actions and their impact on others, striving to meet commitments and learn from mistakes.",
};

const AttentionToDetail: Skill = {
    name: "Attention to Detail",
    proficiency: 100,
    years: 10,
    description: "I meticulously focus on the finer points to ensure accuracy and quality in my work.",
};

const Justice: Skill = {
    name: "Justice",
    proficiency: 100,
    years: 10,
    description: "I advocate for fairness and equality, striving to create a just environment for all.",
};

const SelfAwareness: Skill = {
    name: "Self-Awareness",
    proficiency: 100,
    years: 10,
    description: "I have a deep understanding of my own strengths, weaknesses, and emotions, allowing for personal growth and effective interactions with others.",
};

const Integrity: Skill = {
    name: "Integrity",
    proficiency: 100,
    years: 10,
    description: "I adhere to strong moral and ethical principles, ensuring honesty and transparency in all my actions.",
};

const CulturalCompetence: Skill = {
    name: "Cultural Competence",
    proficiency: 100,
    years: 10,
    description: "I understand, respect, and effectively interact with people from diverse cultural backgrounds.",
};

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

const Playwright: Skill = {
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
};

const Cypress: Skill = {
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
};

const Vitest: Skill = {
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
    description: "fast unit testing library for Vue and React",
};

const Git: Skill = {
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
};

const SVN: Skill = {
    name: "SVN",
    proficiency: 50,
    years: 5,
    keys: [
        "version control",
    ],
    icon: "svn",
    subSkills: [],
    description: "version control",
    url: "https://subversion.apache.org",
};

const UnitTest: Skill = {
    name: "Unit Testing",
    proficiency: 80,
    years: 3,
    keys: [
        "unit test",
        "vue",
        "react",
    ],
    subSkills: [],
    description: "testing individual components or functions",
    url: "https://en.wikipedia.org/wiki/Unit_testing",
};

const IntegrationTest: Skill = {
    name: "Integration Testing",
    proficiency: 70,
    years: 3,
    keys: [
        "integration test",
        "vue",
        "react",
    ],
    subSkills: [],
    description: "testing the interaction between components or systems",
    url: "https://en.wikipedia.org/wiki/Integration_testing",
};

const EndToEndTest: Skill = {
    name: "End to End Testing",
    proficiency: 70,
    years: 2,
    keys: [
        "e2e",
        "end to end",
        "vue",
        "react",
    ],
    subSkills: [],
    description: "testing the complete flow of an application from start to finish",
    url: "https://en.wikipedia.org/wiki/End-to-end_testing",
};

const Jest: Skill = {
    name: "Jest",
    proficiency: 80,
    years: 3,
    keys: [
        "unit test",
        "vue",
        "react",
    ],
    subSkills: [],
    description: "JavaScript testing framework",
    url: "https://jestjs.io",
};

const XCTest: Skill = {
    name: "XCTest",
    proficiency: 60,
    years: 2,
    keys: [
        "unit test",
        "iOS",
        "swift",
    ],
    subSkills: [],
    description: "iOS testing framework",
    url: "https://developer.apple.com/documentation/xctest",
};

const UnityTest: Skill = {
    name: "Unity Test",
    proficiency: 50,
    years: 1,
    keys: [
        "unit test",
        "unity",
        "c#",
    ],
    subSkills: [],
    description: "Unity testing framework",
    url: "https://docs.unity3d.com/Manual/testing-editortestsrunner.html",
};

const JUnit: Skill = {
    name: "JUnit",
    proficiency: 70,
    years: 3,
    keys: [
        "unit test",
        "java",
        "junit",
    ],
    subSkills: [],
    description: "Java testing framework",
    url: "https://junit.org/junit5/",
};

const TestDrivenDevelopment: Skill = {
    name: "Test Driven Development",
    proficiency: 70,
    years: 5,
    keys: [
        "tdd",
        "test driven development",
    ],
    subSkills: [],
    description: "software development process that relies on writing tests before implementation",
    url: "https://en.wikipedia.org/wiki/Test-driven_development",
};

const RiskAssessment: Skill = {
    name: "Risk Assessment",
    proficiency: 60,
    years: 4,
    keys: [
        "risk",
        "assessment",
        "risk management",
    ],
    subSkills: [],
    description: "process of identifying and analyzing potential issues that could negatively impact key business initiatives or critical projects",
    url: "https://en.wikipedia.org/wiki/Risk_assessment",
};

const Doxygen: Skill = {
    name: "Doxygen",
    proficiency: 50,
    years: 2,
    keys: [
        "documentation",
        "code documentation",
        "api documentation",
    ],
    subSkills: [],
    description: "documentation generator for C++, C, Java, Objective-C, Python, and other languages",
    url: "http://www.doxygen.nl",
};

const Storybook: Skill = {
    name: "Storybook",
    proficiency: 70,
    years: 2,
    keys: [
        "ui",
        "component",
        "storybook",
        "react",
        "vue",
        "documentation",
    ],
    subSkills: [],
    description: "a UI component workshop with generated component documentation",
    url: "https://storybook.js.org",
};

const PerformanceTesting: Skill = {
    name: "Performance Testing",
    proficiency: 60,
    years: 3,
    keys: [
        "performance",
        "load",
        "stress",
        "performance testing",
    ],
    subSkills: [],
    description: "testing to determine how a system performs in terms of responsiveness and stability under a particular workload",
    url: "https://en.wikipedia.org/wiki/Performance_testing",
};

const Debugging: Skill = {
    name: "Debugging",
    proficiency: 80,
    years: 5,
    keys: [
        "debug",
        "debugging",
    ],
    subSkills: [],
    description: "process of identifying and removing errors from computer hardware or software",
    url: "https://en.wikipedia.org/wiki/Debugging",
};

const EdgeCaseTesting: Skill = {
    name: "Edge Case Testing",
    proficiency: 70,
    years: 3,
    keys: [
        "edge case",
        "boundary testing",
        "testing",
    ],
    subSkills: [],
    description: "testing the behavior of a system at the extreme ends of input ranges or conditions",
    url: "https://en.wikipedia.org/wiki/Edge_case",
};

const Figma: Skill = {
    name: "Figma",
    years: 2,
    proficiency: 8,
    keys: [
        "ui",
        "ux"
    ],
    icon: "figma",
    description: "a vector graphics editor and prototyping tool",
    url: "https://www.figma.com",
};

const MaterialDesign: Skill = {
    name: "Material Design",
    years: 2,
    proficiency: 8,
    keys: [
        "ui",
        "ux",
    ],
    icon: "material-design",
    description: "a design system created by Google",
    url: "https://material.io/design",
};

const AppleHIG: Skill = {
    name: "Apple HIG",
    years: 2,
    proficiency: 8,
    keys: [
        "ui",
        "ux",
    ],
    icon: "apple-hig",
    description: "Apple's Human Interface Guidelines for designing user interfaces",
    url: "https://developer.apple.com/design/resources/",
};

const DarkUI: Skill = {
    name: "Dark UI",
    years: 1,
    proficiency: 9,
    keys: [
        "ui",
        "ux",
    ],
    description: "designing user interfaces with a dark color scheme",
    url: "https://www.toptal.com/designers/ui/dark-ui-design",
};

const ColorContrast: Skill = {
    name: "Color Contrast",
    years: 1,
    proficiency: 9,
    keys: [
        "ui",
        "ux",
    ],
    icon: "color-contrast",
    description: "ensuring sufficient contrast between text and background colors for accessibility",
    url: "https://www.w3.org/WAI/standards-guidelines/wcag/",
};

const ColorTheory: Skill = {
    name: "Color Theory",
    years: 1,
    proficiency: 8,
    keys: [
        "ui",
        "ux",
    ],
    description: "the study of how colors interact and how they can be combined to create visually appealing designs",
    url: "https://www.colormatters.com/color-and-design",
};

const Depth: Skill = {
    name: "Depth",
    years: 1,
    proficiency: 8,
    keys: [
        "ui",
        "ux",
    ],
    description: "creating a sense of depth in user interfaces through techniques like shadows and layering",
    url: "https://uxdesign.cc/understanding-depth-in-ui-design-7f3b2a4c5b1e",
};

const SemanticColors: Skill = {
    name: "Semantic Colors",
    years: 1,
    proficiency: 8,
    keys: [
        "ui",
        "ux",
    ],
    description: "using colors that have specific meanings or associations in user interfaces",
    url: "https://uxdesign.cc/semantic-color-in-ui-design-8f4b2a4c5b1e",
};

const PalletteApp: Skill = {
    name: "Pallette App",
    years: 1,
    proficiency: 9,
    keys: [
        "ui",
        "ux",
    ],
    description: "a tool for creating and managing color palettes for user interfaces",
    url: "https://www.bairesdev.com/tools/color-palette-app/",
};

const EvaDesign: Skill = {
    name: "Eva Design",
    years: 1,
    proficiency: 8,
    keys: [
        "ui",
        "ux",
    ],
    description: "a design system and UI kit for creating consistent and beautiful user interfaces",
    url: "https://colors.eva.design",
};

const ResponsiveDesign: Skill = {
    name: "Responsive Design",
    years: 2,
    proficiency: 9,
    keys: [
        "ui",
        "ux",
    ],
    description: "designing user interfaces that adapt to different screen sizes and devices",
    url: "https://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/",
};

const RTL: Skill = {
    name: "RTL",
    years: 1,
    proficiency: 8,
    keys: [
        "ui",
        "ux",
    ],
    description: "designing user interfaces that support right-to-left languages",
    url: "https://www.w3.org/International/questions/qa-html-rtl",
};

const ComponentFeedback: Skill = {
    name: "Component Feedback",
    years: 1,
    proficiency: 9,
    keys: [
        "ui",
        "ux",
    ],
    description: "providing feedback to users when they interact with UI components",
    url: "https://givegoodux.com/feedback-5-principles-interaction-design-supercharge-ui-5-5/",
};

const VueI18n: Skill = {
    name: "Vue I18n",
    years: 3,
    proficiency: 50,
    keys: [
        "vue",
        "i18n",
        "internationalization",
    ],
    icon: "vue-i18n",
    description: "internationalization library",
    url: "https://vue-i18n.intlify.dev",
};

const A11y: Skill = {
    name: "A11y",
    years: 5,
    proficiency: 80,
    keys: [
        "accessibility",
        "a11y",
    ],
    icon: "eye",
    description: "Ensuring web content is accessible to all users, including those with disabilities",
    url: "https://www.a11yproject.com",
};

const I18n: Skill = {
    name: "I18n",
    years: 3,
    proficiency: 50,
    keys: [
        "internationalization",
        "i18n",
    ],
    icon: "globe",
    description: "Preparing software for localization into multiple languages and regions",
    url: "https://www.w3.org/International/questions/qa-i18n",
};

const Aria: Skill = {
    name: "Aria",
    years: 4,
    proficiency: 70,
    keys: [
        "aria",
        "accessibility",
        "a11y",
    ],
    icon: "aria",
    description: "Accessible Rich Internet Applications for enhancing the accessibility of web content",
    url: "https://www.w3.org/TR/wai-aria-1.2/",
};

const AccessControl: Skill = {
    name: "Access Control",
    years: 5,
    proficiency: 70,
    keys: [
        "access",
        "control",
        "permissions",
        "role",
        "rbac",
    ],
    subSkills: [
        {
            name: "User Authentication",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Role-Based Access Control (RBAC)",
            years: 4,
            proficiency: 70,
        }
    ],
    description: "Managing user permissions and access rights",
    url: "https://www.microsoft.com/en-us/security/business/security-101/what-is-access-control#:~:text=In%20its%20simplest%20form%2C%20access,identify%20and%20authenticate%20a%20user.",
};

const GDPR: Skill = {
    name: "GDPR Compliance",
    years: 3,
    proficiency: 60,
    keys: [
        "gdpr",
        "compliance",
        "data protection",
        "privacy",
    ],
    description: "General Data Protection Regulation compliance for handling user data",
    url: "https://gdpr.eu",
};

const FDA: Skill = {
    name: "FDA Compliance",
    years: 2,
    proficiency: 50,
    keys: [
        "fda",
        "compliance",
        "food and drug administration",
        "regulation",
    ],
    description: "Compliance with FDA regulations for software in the healthcare and food industries",
    url: "https://www.fda.gov/medical-devices/digital-health-center-excellence/software-medical-device-samd",
};

const HIPAA: Skill = {
    name: "HIPAA Compliance",
    years: 3,
    proficiency: 65,
    keys: [
        "hipaa",
        "compliance",
        "health insurance portability and accountability act",
        "privacy",
    ],
    description: "Health Insurance Portability and Accountability Act compliance for handling healthcare data",
    url: "https://www.hhs.gov/hipaa/index.html",
};

const CyberSecurity: Skill = {
    name: "Cybersecurity",
    years: 4,
    proficiency: 70,
    keys: [
        "cybersecurity",
        "security",
        "information security",
        "data security",
    ],
    description: "Protecting systems, networks, and programs from digital attacks",
    url: "https://www.cisa.gov/cybersecurity",
};

const DataPrivacy: Skill = {
    name: "Data Privacy",
    years: 3,
    proficiency: 60,
    keys: [
        "data privacy",
        "privacy",
        "data protection",
        "information privacy",
    ],
    description: "Ensuring the proper handling and protection of personal data",
    url: "https://www.privacyinternational.org",
};

const Oauth: Skill = {
    name: "OAuth",
    years: 4,
    proficiency: 70,
    keys: [
        "oauth",
        "authentication",
    ],
    description: "Open standard for access delegation commonly used for token-based authentication",
    url: "https://oauth.net",
};

const VPN: Skill = {
    name: "VPN",
    years: 3,
    proficiency: 60,
    keys: [
        "vpn",
        "virtual private network",
        "network security",
    ],
    description: "Virtual Private Network for secure remote access",
    url: "https://usa.kaspersky.com/resource-center/definitions/what-is-a-vpn?srsltid=AfmBOoqNAsGUmw7zIHAYitEKAv1TodluHRtd-Nam8te0VoojcclLPHVy",
};

const Encryption: Skill = {
    name: "Encryption",
    years: 4,
    proficiency: 75,
    keys: [
        "encryption",
        "data security",
        "cryptography",
    ],
    subSkills: [
        {
            name: "Symmetric Encryption",
            years: 4,
            proficiency: 75,
        },
        {
            name: "Asymmetric Encryption",
            years: 3,
            proficiency: 70,
        },
        {
            name: "Hashing",
            years: 4,
            proficiency: 75,
        },
    ],
    description: "Securing data by converting it into a code to prevent unauthorized access",
    url: "https://www.khanacademy.org/computing/computer-science/cryptography",
};

const WebCrypto: Skill = {
    name: "Web Crypto API",
    years: 3,
    proficiency: 65,
    keys: [
        "web crypto",
        "webcrypto",
        "cryptography",
        "api",
    ],
    description: "JavaScript API for performing cryptographic operations in web applications",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API",
};

const bcrypt: Skill = {
    name: "bcrypt",
    years: 4,
    proficiency: 70,
    keys: [
        "bcrypt",
        "password hashing",
        "hashing",
    ],
    description: "Library for hashing passwords securely",
    url: "https://www.npmjs.com/package/bcrypt",
};

const AES: Skill = {
    name: "AES Encryption",
    years: 4,
    proficiency: 75,
    keys: [
        "aes",
        "aes encryption",
        "advanced encryption standard",
        "cryptography",
        "gcm",
        "aes-gcm",
        "256",
        "galois/ctr",
        "galois counter mode",
        "symmetric encryption",
        "symmetric key encryption",
    ],
    subSkills: [
        {
            name: "AES-GCM-256",
            years: 4,
            proficiency: 75,
        },
    ],
    description: "Advanced Encryption Standard for secure data encryption",
    url: "https://en.wikipedia.org/wiki/Advanced_Encryption_Standard",
};

const MongoDBCSFLE: Skill = {
    name: "MongoDB CSFLE",
    years: 3,
    proficiency: 65,
    keys: [
        "mongodb",
        "csfle",
        "client-side field level encryption",
        "encryption",
    ],
    description: "Client-Side Field Level Encryption for MongoDB to encrypt data on the client side",
    url: "https://docs.mongodb.com/manual/core/client-side-field-level-encryption/",
};

const JWT: Skill = {
    name: "JWT",
    years: 4,
    proficiency: 70,
    keys: [
        "jwt",
        "json web token",
        "authentication",
    ],
    description: "JSON Web Token for securely transmitting information between parties as a JSON object",
    url: "https://jwt.io",
};

const SSO: Skill = {
    name: "SSO",
    years: 3,
    proficiency: 65,
    keys: [
        "sso",
        "single sign-on",
        "authentication",
    ],
    description: "Single Sign-On for allowing users to authenticate once and gain access to multiple applications",
    url: "https://en.wikipedia.org/wiki/Single_sign-on",
};

const MFA: Skill = {
    name: "MFA",
    years: 3,
    proficiency: 70,
    keys: [
        "mfa",
        "multi-factor authentication",
    ],
    description: "Multi-Factor Authentication for adding an extra layer of security to the authentication process",
    url: "https://www.okta.com/identity-101/multi-factor-authentication/",
};

const OKTA: Skill = {
    name: "OKTA",
    years: 2,
    proficiency: 60,
    keys: [
        "okta",
        "identity management",
        "access management",
    ],
    description: "Identity and access management service for securing user authentication and authorization",
    url: "https://www.okta.com",
};

const CrowdStrike: Skill = {
    name: "CrowdStrike",
    years: 2,
    proficiency: 60,
    keys: [
        "crowdstrike",
        "endpoint security",
        "cybersecurity",
    ],
    description: "Endpoint security platform for detecting and responding to cyber threats",
    url: "https://www.crowdstrike.com",
};

const SSL: Skill = {
    name: "SSL/TLS",
    years: 4,
    proficiency: 75,
    keys: [
        "ssl",
        "tls",
        "secure sockets layer",
        "transport layer security",
        "encryption",
        "data security",
        "secure communication",
    ],
    description: "Secure Sockets Layer/Transport Layer Security for securing communication over a computer network",
    url: "https://en.wikipedia.org/wiki/Transport_Layer_Security",
};

const Datadog: Skill = {
    name: "Datadog",
    proficiency: 60,
    years: 2,
    keys: [
        "monitoring",
        "observability",
        "datadog",
    ],
    icon: "datadog",
    description: "monitoring and observability platform for cloud-scale applications",
    url: "https://www.datadoghq.com",
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

const CleanCode: Skill = {
    name: "Clean Coding",
    proficiency: 80,
    years: 5,
    keys: [
        "clean code",
        "code quality",
        "best practices",
    ],
    subSkills: [
        {
            name: "duplication removal",
            proficiency: 80,
            years: 5,
        },
        {
            name: "code readability",
            proficiency: 80,
            years: 5,
        },
        {
            name: "refactoring",
            proficiency: 80,
            years: 5,
        },
        {
            name: "descriptive naming",
            proficiency: 80,
            years: 5,
        },
    ],
    description: "practice of writing code that is easy to read, understand, and maintain",
    url: "https://en.wikipedia.org/wiki/Clean_code",
};

const WebProtocols: Skill = {
    name: "Web Protocols",
    years: 5,
    proficiency: 75,
    keys: [
        "protocols",
        "HTTP",
        "HTTPS",
        "TCP/IP",
        "UDP",
        "FTP",
        "SMTP",
        "DNS",
        "SSH",
        "WebSocket",
    ],
    subSkills: [
        {
            name: "HTTP",
            years: 5,
            proficiency: 75,
        },
        {
            name: "HTTPS",
            years: 5,
            proficiency: 75,
        },
        {
            name: "TCP/IP",
            years: 5,
            proficiency: 75,
        },
        {
            name: "UDP",
            years: 5,
            proficiency: 75,
        },
        {
            name: "FTP",
            years: 5,
            proficiency: 75,
        },
        {
            name: "SMTP",
            years: 5,
            proficiency: 75,
        },
        {
            name: "DNS",
            years: 5,
            proficiency: 75,
        },
        {
            name: "SSH",
            years: 5,
            proficiency: 75,
        },
        {
            name: "WebSocket",
            years: 5,
            proficiency: 75,
        }
    ],
};

const ProgrammingPatterns: Skill = {   
    name: "Programming Patterns",
    years: 5,
    proficiency: 75,
    keys: [
        "programming patterns",
        "design patterns",
        "creational patterns",
        "structural patterns",
        "behavioral patterns",
        "singleton",
        "factory",
        "observer",
        "iterator",
        "wrapper",
        "delegation",
        "dependency injection",
        "module",
        "mvc",
        "model view controller",
        "object oriented programming",
        "prototype",
        "lock",
        "strategy",
    ],
    subSkills: [
        {
            name: "Singleton",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Factory",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Observer",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Prototype",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Iterator",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Wrapper",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Delegation",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Dependency Injection",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Module",
            years: 5,
            proficiency: 75,
        },
        {
            name: "MVC",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Object Oriented Programming",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Lock",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Strategy",
            years: 5,
            proficiency: 75,
        }
    ], 
};

const ProgrammingLanguages: Skill = {
    name: "Programming Languages",
    years: 5,
    proficiency: 75,
    keys: [
        "programming languages",
        "Python",
        "JavaScript",
        "Java",
        "C++",
        "C#",
        "Swift",
        "TypeScript",
        "Lua",
        "PostScript",
        "C",
        "Objective-C",
        "SQL",
        "Prolog",
        "Lisp",
    ],
    subSkills: [
        {
            name: "Python",
            years: 5,
            proficiency: 75,
        },
        {
            name: "JavaScript",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Java",
            years: 5,
            proficiency: 75,
        },
        {
            name: "C++",
            years: 5,
            proficiency: 75,
        },
        {
            name: "C#",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Swift",
            years: 5,
            proficiency: 75,
        },
        {
            name: "TypeScript",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Lua",
            years: 5,
            proficiency: 75,
        },
        {
            name: "PostScript",
            years: 5,
            proficiency: 75,
        },
        {
            name: "C",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Objective-C",
            years: 5,
            proficiency: 75,
        },
        {
            name: "SQL",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Prolog",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Lisp",
            years: 5,
            proficiency: 75,
        }
    ],
};

const CodeCompilation: Skill = {
    name: "Code Compilation",
    years: 5,
    proficiency: 75,
    keys: [
        "code compilation",
        "compilers",
        "intermediate representation",
        "syntax analysis",
        "semantic analysis",
        "code optimization",
        "code generation",
        "linking",
        "assembly language",
        "machine code",
        "source code",
        "compiler design",
        "interpreters",
    ],
    subSkills: [
        {
            name: "Linking",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Syntax Analysis",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Semantic Analysis",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Assembly Language",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Compiler Design",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Interpreted Languages",
            years: 5,
            proficiency: 75,
        }
    ],
};

const ComputerAchitecture: Skill = {
    name: "Computer Architecture",
    years: 5,
    proficiency: 75,
    keys: [
        "computer architecture",
        "memory hierarchy",
        "cache",
        "pipelining",
        "instruction set architecture",
        "ARM",
        "x86",
        "RISC",
        "CISC",
        "hardware",
        "parallel processing",
        "multithreading",
        "input/output systems",
        "bus architecture",
        "embedded systems",
        "digital logic design",
    ],
    subSkills: [
        {
            name: "ARM",
            years: 5,
            proficiency: 75,
        },
        {
            name: "x86",
            years: 5,
            proficiency: 75,
        },
        {
            name: "pipelining",
            years: 5,
            proficiency: 75,
        },
        {
            name: "cache",
            years: 5,
            proficiency: 75,
        },
        {
            name: "memory hierarchy",
            years: 5,
            proficiency: 75,
        },
        {
            name: "parallel processing",
            years: 5,
            proficiency: 75,
        },
        {
            name: "input/output systems",
            years: 5,
            proficiency: 75,
        },
        {
            name: "bus architecture",
            years: 5,
            proficiency: 75,
        },
        {
            name: "digital logic design",
            years: 5,
            proficiency: 75,
        },
        {
            name: "embedded systems",
            years: 5,
            proficiency: 75,
        },
    ],
    description: "Understanding the design and organization of computer systems, including hardware and software interactions",
    url: "https://en.wikipedia.org/wiki/Computer_architecture",
};

const AlgorithmAnalysisTechniques: Skill = {
    name: "Algorithm Analysis Techniques",
    years: 5,
    proficiency: 75,
    keys: [
        "algorithm analysis",
        "big O notation",
        "amortized analysis",
        "time complexity",
        "space complexity",
        "worst-case analysis",
        "best-case analysis",
        "average-case analysis",
        "asymptotic analysis",
        "performance analysis",
        "complexity theory",
        "algorithm efficiency",
        "algorithmic complexity",
        "computational complexity",
    ],
    subSkills: [
        {
            name: "Big O Notation",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Amortized Analysis",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Time Complexity",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Space Complexity",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Worst-Case Analysis",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Best-Case Analysis",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Average-Case Analysis",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Asymptotic Analysis",
            years: 5,
            proficiency: 75,
        },
    ],
    description: "Understanding and applying various algorithm analysis techniques to evaluate performance",
    url: "https://en.wikipedia.org/wiki/Algorithm_analysis",
};

const RandomNumberGenerationAlgorithms: Skill = {
    name: "Random Number Generation Algorithms",
    years: 5,
    proficiency: 75,
    keys: [
        "random number generation",
        "Mersenne Twister",
        "Linear Congruential Generator",
        "pseudo-random numbers",
        "true random numbers",
        "randomness tests",
        "seed generation",
        "random sampling",
    ],
    subSkills: [
        {
            name: "Mersenne Twister",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Linear Congruential Generator",
            years: 5,
            proficiency: 75,
        },
    ],
    description: "Understanding and implementing various random number generation algorithms for simulations and sampling",
    url: "https://en.wikipedia.org/wiki/Random_number_generation",
};

const ComputationalGeometryAlgorithms: Skill = {
    name: "Computational Geometry Algorithms",
    years: 5,
    proficiency: 75,
    keys: [
        "computational geometry",
        "convex hull",
        "line intersection",
        "polygon triangulation",
        "point in polygon",
        "closest pair of points",
        "convex polygon",
        "geometric algorithms",
        "geometric data structures",
        "sweep line algorithms",
        "divide and conquer",
        "geometric transformations",
        "geometric queries",
        "geometric intersections",
        "geometric proximity",
        "geometric optimization",
    ],
    subSkills: [
        {
            name: "Convex Hull",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Line Intersection",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Polygon Triangulation",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Point in Polygon",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Closest Pair of Points",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Geometric Transformations",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Geometric Intersections",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Geometric Proximity",
            years: 5,
            proficiency: 75,
        },
    ],
    description: "Understanding and implementing various computational geometry algorithms to solve geometric problems",
    url: "https://en.wikipedia.org/wiki/Computational_geometry",
};

const StringAlgorithms: Skill = {
    name: "String Algorithms",
    years: 5,
    proficiency: 75,
    keys: [
        "string algorithms",
        "pattern matching",
        "substring search",
        "string manipulation",
        "KMP algorithm",
        "Rabin-Karp algorithm",
        "Levenshtein distance",
        "Hamming distance",
        "Longest Common Subsequence (LCS)",
        "Longest Palindromic Substring",
        "Z algorithm",
        "Boyer-Moore algorithm",
    ],
    subSkills: [
        {
            name: "KMP Algorithm",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Rabin-Karp Algorithm",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Levenshtein Distance",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Hamming Distance",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Longest Common Subsequence (LCS)",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Longest Palindromic Substring",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Z Algorithm",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Boyer-Moore Algorithm",
            years: 5,
            proficiency: 75,
        },
    ],
    description: "Understanding and implementing various string algorithms for efficient string processing",
    url: "https://en.wikipedia.org/wiki/String_algorithm",
};

const CryptographyAlgorithms: Skill = {
    name: "Cryptography Algorithms",
    years: 5,
    proficiency: 75,
    keys: [
        "cryptography",
        "encryption",
        "decryption",
        "hashing",
        "symmetric encryption",
        "asymmetric encryption",
        "AES",
        "RSA",
        "SHA-256",
        "SHA-512",
        "MD5",
        "public key cryptography",
        "private key cryptography",
        "key exchange algorithms",
        "Diffie-Hellman",
        "Elliptic Curve Cryptography (ECC)",
        "nonce",
    ],
    subSkills: [
        {
            name: "Symmetric Encryption",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Asymmetric Encryption",
            years: 5,
            proficiency: 75,
        },
        {
            name: "public key cryptography",
            years: 5,
            proficiency: 75,
        },
        {
            name: "private key cryptography",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Diffie-Hellman",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Key Exchange Algorithms",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Elliptic Curve Cryptography (ECC)",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Nonce",
            years: 5,
            proficiency: 75,
        },
    ],
    description: "Understanding and implementing various cryptography algorithms to secure data",
    url: "https://en.wikipedia.org/wiki/Cryptography",
};

const OptimizationAlgorithms: Skill = {
    name: "Optimization Algorithms",
    years: 5,
    proficiency: 75,
    keys: [
        "optimization algorithms",
        "genetic algorithms",
        "simulated annealing",
        "hill climbing",
        "particle swarm optimization",
        "ant colony optimization",
        "gradient descent",
        "stochastic gradient descent",
        "dynamic programming",
        "linear programming",
    ],
    subSkills: [
        {
            name: "Genetic Algorithms",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Simulated Annealing",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Dynamic Programming",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Linear Programming",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Gradient Descent",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Stochastic Gradient Descent",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Hill Climbing",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Particle Swarm Optimization",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Ant Colony Optimization",
            years: 5,
            proficiency: 75,
        },
    ],
};

const MachineLearningAlgorithms: Skill = {
    name: "Machine Learning Algorithms",
    years: 5,
    proficiency: 75,
    keys: [
        "machine learning",
        "supervised learning",
        "unsupervised learning",
        "reinforcement learning",
        "classification",
        "regression",
        "clustering",
        "neural networks",
        "decision trees",
        "support vector machines",
        "k-means",
        "random forests",
        "gradient boosting",
        "gradient descent",
        "backpropagation",
        "deep learning",
        "natural language processing",
        "computer vision",
    ],
    subSkills: [
        {
            name: "Supervised Learning",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Unsupervised Learning",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Reinforcement Learning",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Neural Networks",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Gradient Descent",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Backpropagation",
            years: 5,
            proficiency: 75,
        },
    ],
    description: "Understanding and implementing various machine learning algorithms to solve problems",
    url: "https://en.wikipedia.org/wiki/Machine_learning",
};

const GraphAlgorithms: Skill = {
    name: "Graph Algorithms",
    years: 5,
    proficiency: 90,
    keys: [
        "graph algorithms",
        "Dijkstra's algorithm",
        "A* search",
        "breadth-first search",
        "depth-first search",
        "graph traversal",
        "shortest path",
        "minimum spanning tree",
        "prim's algorithm",
        "kruskal's algorithm",
    ],
    subSkills: [
        {
            name: "Dijkstra's Algorithm",
            years: 5,
            proficiency: 90,
        },
        {
            name: "A* Search",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Breadth-First Search",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Depth-First Search",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Minimum Spanning Tree",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Prim's Algorithm",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Kruskal's Algorithm",
            years: 5,
            proficiency: 90,
        },
    ],
    description: "Understanding and implementing various graph algorithms to solve problems related to graphs",
    url: "https://en.wikipedia.org/wiki/Graph_algorithm",
};

const Recursion: Skill = {
    name: "Recursion",
    years: 5,
    proficiency: 90,
    keys: [
        "recursion",
        "recursive algorithms",
        "base case",
        "recursive case",
        "divide and conquer",
        "backtracking",
        "tree traversal",
        "graph traversal",
    ],
    subSkills: [
        {
            name: "Divide and Conquer",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Backtracking",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Tree Traversal",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Graph Traversal",
            years: 5,
            proficiency: 90,
        },
    ],
    description: "Understanding and implementing recursive algorithms to solve problems",
    url: "https://en.wikipedia.org/wiki/Recursion_(computer_science)",
};

const DataStructures: Skill = {
    name: "Data Structures",
    years: 5,
    proficiency: 90,
    keys: [
        "data structures",
        "arrays",
        "linked lists",
        "trees",
        "graphs",
        "hash tables",
        "stacks",
        "queues",
        "heaps",
        "binary trees",
        "binary search trees",
        "AVL trees",
        "red-black trees",
        "B-trees",
    ],
    subSkills: [
        {
            name: "Arrays",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Linked Lists",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Trees",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Graphs",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Hash Tables",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Stacks",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Queues",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Heaps",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Binary Trees",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Binary Search Trees",
            years: 5,
            proficiency: 90,
        },
        {
            name: "AVL Trees",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Red-Black Trees",
            years: 5,
            proficiency: 90,
        },
        {
            name: "B-Trees",
            years: 5,
            proficiency: 90,
        },
    ],
    description: "Understanding and implementing various data structures to organize and manage data efficiently",
    url: "https://en.wikipedia.org/wiki/Data_structure",
};

const CompressionAlgorithms: Skill = {
    name: "Compression Algorithms",
    years: 5,
    proficiency: 90,
    keys: [
        "compression algorithms",
        "data compression",
        "lossless compression",
        "lossy compression",
        "Huffman coding",
        "Lempel-Ziv-Welch (LZW)",
        "Run-Length Encoding (RLE)",
        "JPEG",
        "PNG",
        "MP3",
        "AAC",
        "video compression",
        "audio compression",
    ],
    subSkills: [
        {
            name: "Huffman Coding",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Lempel-Ziv-Welch (LZW)",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Run-Length Encoding (RLE)",
            years: 5,
            proficiency: 90,
        },
        {
            name: "JPEG",
            years: 5,
            proficiency: 90,
        },
        {
            name: "PNG",
            years: 5,
            proficiency: 90,
        },
        {
            name: "MP3",
            years: 5,
            proficiency: 90,
        },
        {
            name: "AAC",
            years: 5,
            proficiency: 90,
        },
    ],
    description: "Understanding and implementing various compression algorithms to reduce data size",
    url: "https://en.wikipedia.org/wiki/Data_compression",
};

const SearchingAlgorithms: Skill = {
    name: "Searching Algorithms",
    years: 5,
    proficiency: 90,
    keys: [
        "searching algorithms",
        "linear search",
        "binary search",
        "depth-first search",
        "breadth-first search",
        "A* search",
        "Dijkstra's algorithm",
        "graph search",
        "tree search",
    ],
    subSkills: [
        {
            name: "Linear Search",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Binary Search",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Depth-First Search",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Breadth-First Search",
            years: 5,
            proficiency: 90,
        },
        {
            name: "A* Search",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Dijkstra's Algorithm",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Graph Search",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Tree Search",
            years: 5,
            proficiency: 90,
        },
    ],
    description: "Understanding and implementing various searching algorithms to find data efficiently",
    url: "https://en.wikipedia.org/wiki/Search_algorithm",
};

const HashingAlgorithms: Skill = {
    name: "Hashing Algorithms",
    years: 5,
    proficiency: 90,
    keys: [
        "hashing algorithms",
        "hash functions",
        "hash tables",
        "cryptographic hash functions",
        "MD5",
        "SHA-1",
        "SHA-256",
        "SHA-512",
        "hash collisions",
    ],
    subSkills: [
        {
            name: "MD5",
            years: 5,
            proficiency: 90,
        },
        {
            name: "SHA-1",
            years: 5,
            proficiency: 90,
        },
        {
            name: "SHA-256",
            years: 5,
            proficiency: 90,
        },
        {
            name: "SHA-512",
            years: 5,
            proficiency: 90,
        },
    ],
    description: "Understanding and implementing various hashing algorithms for data integrity and security",
    url: "https://en.wikipedia.org/wiki/Hash_function",
};

const BooleanLogic: Skill = {
    name: "Boolean Logic",
    years: 5,
    proficiency: 90,
    keys: [
        "boolean algebra",
        "logic gates",
        "truth tables",
        "logical operators",
        "conditional statements",
        "logical expressions",
    ],
    subSkills: [
        {
            name: "Truth Tables",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Logic Gates",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Logical Operators",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Conditional Statements",
            years: 5,
            proficiency: 90,
        },
    ],
    description: "Understanding and applying boolean logic in programming and problem solving",
    url: "https://en.wikipedia.org/wiki/Boolean_algebra",
};

const Mathematics: Skill = {
    name: "Mathematics",
    years: 5,
    proficiency: 85,
    keys: [
        "algebra",
        "calculus",
        "statistics",
        "probability",
        "discrete mathematics",
        "linear algebra",
        "differential equations",
        "numerical methods",
        "combinatorics",
        "graph theory",
        "optimization",
        "trigonometry",
        "cryptography",
        "machine learning",
        "data analysis",
        "numerical analysis",
        "mathematical modeling",
        "mathematical logic",
        "set theory",
        "number theory",
        "vector algebra",
        "root finding",
        "numerical integration",
        "logarithms",
        "exponents",
        "factorization",
        "prime numbers",
        "complex numbers",
        "real numbers",
        "irrational numbers",
        "rational numbers",
        "integers",
        "natural numbers",
        "whole numbers",
        "absolute value",
        "modular arithmetic",
        "limits",
        "derivatives",
        "integrals",
        "series",
        "sequences",
        "permutations",
        "combinations",
        "binomial theorem",
        "Fibonacci sequence",
        "Pascal's triangle",
        "Pythagorean theorem",
        "Euclidean algorithm",
        "fundamental theorem of calculus",
        "Taylor series",
        "Fourier series",
        "Mclaurin series",
        "Laplace transforms",
        "Z-transform",
        "vector calculus",
        "imaginary numbers",
        "polar coordinates",
        "spherical coordinates",
        "transcendental numbers",
    ],
    subSkills: [
        {
            name: "Algebra",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Calculus",
            years: 5,
            proficiency: 85,
        },
        {
            name: "Statistics",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Probability",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Discrete Mathematics",
            years: 5,
            proficiency: 85,
        },
        {
            name: "Linear Algebra",
            years: 5,
            proficiency: 85,
        },
        {
            name: "Differential Equations",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Numerical Methods",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Combinatorics",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Graph Theory",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Optimization",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Trigonometry",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Cryptography",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Machine Learning",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Data Analysis",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Numerical Analysis",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Mathematical Modeling",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Mathematical Logic",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Set Theory",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Number Theory",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Vector Algebra",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Root Finding",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Numerical Integration",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Logarithms",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Exponents",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Factorization",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Prime Numbers",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Complex Numbers",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Real Numbers",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Irrational Numbers",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Rational Numbers",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Integers",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Natural Numbers",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Whole Numbers",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Absolute Value",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Modular Arithmetic",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Limits",
            years: 5,
            proficiency: 85,   
        },
        {
            name: "Derivatives",
            years: 5,
            proficiency: 85,
        },
        {
            name: "Integrals",
            years: 5,
            proficiency: 85,
        },
        {
            name: "Series",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Sequences",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Permutations",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Combinations",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Binomial Theorem",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Fibonacci Sequence",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Pascal's Triangle",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Pythagorean Theorem",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Euclidean Algorithm",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Fundamental Theorem of Calculus",
            years: 5,
            proficiency: 85,
        },
        {
            name: "Taylor Series",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Fourier Series",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Mclaurin Series",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Laplace Transforms",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Z-Transform",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Vector Calculus",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Imaginary Numbers",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Polar Coordinates",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Spherical Coordinates",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Transcendental Numbers",
            years: 5,
            proficiency: 80,
        },
    ],
    description: "Applying mathematical concepts and techniques to solve problems and analyze data",
    url: "https://en.wikipedia.org/wiki/Mathematics",
};

const SortingAlgorithms: Skill = {
    name: "Sorting Algorithms",
    years: 5,
    proficiency: 90,
    keys: [
        "sorting algorithms",
        "bubble sort",
        "selection sort",
        "insertion sort",
        "merge sort",
        "quick sort",
        "heap sort",
        "shell sort",
        "tim sort",
    ],
    subSkills: [
        {
            name: "Bubble Sort",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Selection Sort",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Insertion Sort",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Merge Sort",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Quick Sort",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Heap Sort",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Shell Sort",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Tim Sort",
            years: 5,
            proficiency: 90,
        },
    ],
    description: "Understanding and implementing various sorting algorithms to organize data efficiently",
    url: "https://en.wikipedia.org/wiki/Sorting_algorithm",
};



const Copilot: Skill = {
    name: "Github Copilot",
    years: 1,
    proficiency: 90,
    keys: [
        "github copilot",
        "ai coding assistant",
        "code completion",
    ],
    icon: "copilot",
    description: "Using AI to assist with coding tasks, providing suggestions and completing code snippets.",
    url: "https://github.com/features/copilot",
};

const ChatGPT: Skill = {
    name: "ChatGPT",
    years: 1,
    proficiency: 85,
    keys: [
        "chatgpt",
        "ai chatbot",
        "natural language processing",
    ],
    icon: "chatgpt",
    description: "Utilizing AI for conversational interfaces, customer support, and content generation.",
    url: "https://chatgpt.com",
};

const DeepSeek: Skill = {
    name: "DeepSeek",
    years: 0.5,
    proficiency: 75,
    keys: [
        "deepseek",
        "ai search",
        "semantic search",
    ],
    icon: "deepseek",
    description: "Employing AI for advanced search capabilities, understanding user intent and context.",
    url: "https://www.deepseek.com",
};

const Craiyon: Skill = {
    name: "Craiyon",
    years: 0.5,
    proficiency: 70,
    keys: [
        "craiyon",
        "ai image generation",
        "text to image",
    ],
    icon: "craiyon",
    description: "Using AI to generate images from text descriptions, useful for creative and design tasks.",
    url: "https://www.craiyon.com",
};

const Recraft: Skill = {
    name: "Recraft",
    years: 0.5,
    proficiency: 65,
    keys: [
        "recraft",
        "ai design",
        "design automation",
    ],
    icon: "recraft",
    description: "Leveraging AI to automate design tasks, improving efficiency and creativity in design processes.",
    url: "https://www.recraft.ai/",
};

const DermAI: Skill = {
    name: "DermAI",
    years: 0.5,
    proficiency: 55,
    keys: [
        "dermai",
        "ai dermatology",
        "skin analysis",
    ],
    icon: "proscia",
    description: "Using AI for dermatological analysis, providing insights and recommendations based on skin conditions.",
    url: "https://proscia.com/press-releases/proscia-launches-ai-powered-digital-pathology-solution-for-dermatopathology/",
};

const IbexAI: Skill = {
    name: "IbexAI",
    years: 0.5,
    proficiency: 50,
    keys: [
        "ibexai",
        "ai cancer diagnostics",
        "slide analysis",
    ],
    icon: "ibexai",
    description: "Utilizing AI for cancer diagnostics, analyzing slides to assist in accurate and efficient diagnosis.",
    url: "https://ibex-ai.com",
};

const IOs: Skill = {
    name: "iOs",
    years: 3,
    proficiency: 80,
    keys: [
        "iOS", 
        "Swift", 
        "Objective-C",
        "SwiftUI",
        "UIKit",
        "Apple",
        "Cocoa Touch",
        "mobile",
        "mobile development",
    ],
    icon: "ios",
    subSkills: [
        {
            name: "Swift",
            years: 3,
            proficiency: 80,
        },
        {
            name: "Objective-C",
            years: 2,
            proficiency: 70,
        },
        {
            name: "SwiftUI",
            years: 1,
            proficiency: 60,
        },
        {
            name: "UIKit",
            years: 2,
            proficiency: 75,
        }
    ],
    description: "iOS development using Swift and Objective-C",
    url: "https://developer.apple.com/ios/",
};

const Cocoa: Skill = {
    name: "Cocoa",
    years: 2,
    proficiency: 75,
    keys: [
        "Cocoa",
        "Cocoa Touch",
        "macOS",
        "macOS development",
        "desktop",
        "desktop development",
        "appkit",
        "Objective-C",
        "Swift",
    ],
    icon: "macos",
    subSkills: [
        {
            name: "Objective-C",
            years: 2,
            proficiency: 70,
        },
        {
            name: "Swift",
            years: 1,
            proficiency: 60,
        },
        {
            name: "AppKit",
            years: 2,
            proficiency: 75,
        }
    ],
    description: "macOS development using Cocoa",
    url: "https://developer.apple.com/macos/",
};

const Android: Skill = {
    name: "Android",
    years: 2,
    proficiency: 70,
    keys: [
        "Android", 
        "Java", 
        "mobile",
        "mobile development",
    ],
    icon: "android",
    subSkills: [
        {
            name: "Java",
            years: 2,
            proficiency: 70,
        },
    ],
    description: "Android development using Java and Kotlin",
    url: "https://developer.android.com/",
};

const Unity: Skill = {
    name: "Unity",
    years: 1,
    proficiency: 65,
    keys: [
        "Unity", 
        "C#", 
        "game development",
        "mobile games",
        "game engine",
    ],
    icon: "unity",
    subSkills: [
        {
            name: "C#",
            years: 1,
            proficiency: 65,
        },
    ],
    description: "Game development using Unity and C#",
    url: "https://unity.com/",
};

const QT: Skill = {
    name: "QT",
    years: 1,
    proficiency: 60,
    keys: [
        "QT",
        "C++",
        "desktop",
        "desktop development",
        "cross-platform",
        "cross-platform development",
    ],
    icon: "qt",
    subSkills: [
        {
            name: "C++",
            years: 1,
            proficiency: 60,
        },
    ],
    description: "Cross-platform desktop development using QT and C++",
    url: "https://www.qt.io/",
};

const GoogleVR: Skill = {
    name: "GoogleVR",
    years: 1,
    proficiency: 55,
    keys: [
        "GoogleVR",
        "VR",
        "virtual reality",
        "game development",
        "game engine",
        "mobile games",
    ],
    icon: "googlevr",
    subSkills: [
    ],
    description: "Virtual reality development using GoogleVR and Unity",
    url: "https://vr.google.com/",
};

const Vite: Skill = {
    name: "Vite",
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
};

const Webpack: Skill = {
    name: "Webpack",
    years: 6,
    proficiency: 70,
    keys: [
        "build",
        "web",
        "bundler",
    ],
    icon: "webpack",
    url: "https://webpack.js.org",
    description: "a static module bundler for modern JavaScript applications",
};

const Babel: Skill = {
    name: "Babel",
    years: 6,
    proficiency: 70,
    keys: [
        "javascript",
        "transpiler",
        "es6",
        "compiler",
    ],
    icon: "babel",
    url: "https://babeljs.io",
    description: "a JavaScript compiler",
};

const TSC: Skill = {
    name: "TypeScript Compiler",
    years: 6,
    proficiency: 80,
    keys: [
        "typescript",
        "tsc",
        "compiler",
    ],
    icon: "typescript",
    url: "https://www.typescriptlang.org",
    description: "the TypeScript compiler",
};

const ESLint: Skill = {
    name: "ESLint",
    years: 6,
    proficiency: 80,
    keys: [
        "javascript",
        "linter",
        "typescript",
        "code quality",
    ],
    icon: "eslint",
    url: "https://eslint.org",
    description: "a pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript",
};

const Prettier: Skill = {
    name: "Prettier",
    years: 6,
    proficiency: 80,
    keys: [
        "code formatter",
        "javascript",
        "typescript",
        "css",
        "html",
    ],
    icon: "prettier",
    url: "https://prettier.io",
    description: "an opinionated code formatter",
};

const XCode: Skill = {
    name: "Xcode",
    years: 10,
    proficiency: 70,
    keys: [
        "ios",
        "macos",
        "development",
        "ide",
    ],
    icon: "xcode",
    url: "https://developer.apple.com/xcode/",
    description: "an integrated development environment for macOS",
};

const AndroidStudio: Skill = {
    name: "Android Studio",
    years: 5,
    proficiency: 70, 
    keys: [
        "android",
        "development",
        "ide",
    ],
    icon: "androidstudio",
    url: "https://developer.android.com/studio",
    description: "an integrated development environment for Android",
};

const VSCode: Skill = {
    name: "Visual Studio Code",
    years: 6,
    proficiency: 90,
    keys: [
        "code editor",
        "javascript",
        "typescript",
        "development",
        "ide",
    ],
    icon: "vscode",
    url: "https://code.visualstudio.com",
    description: "a source-code editor made by Microsoft",
};

const Vim: Skill = {
    name: "Vim",
    years: 15,
    proficiency: 60,
    keys: [
        "text editor",
        "development",
        "ide",
    ],
    icon: "vim",
    url: "https://www.vim.org",
    description: "a highly configurable text editor",
};

const MacOS: Skill = {
    name: "macOS",
    years: 10,
    proficiency: 90,
    keys: [
        "operating system",
        "development",
        "ide",
    ],
    icon: "macos",
    url: "https://www.apple.com/macos",
    description: "the operating system for Apple's Mac computers",
};

const Windows: Skill = {
    name: "Windows",
    years: 10,
    proficiency: 80,
    keys: [
        "operating system",
        "development",
        "ide",
    ],
    icon: "windows",
    url: "https://www.microsoft.com/windows",
    description: "the operating system for Microsoft's Windows computers",
};

const Linux: Skill = {
    name: "Linux",
    years: 5,
    proficiency: 70,
    keys: [
        "operating system",
        "development",
        "ide",
    ],
    icon: "linux",
    subSkills: [
        {
            name: "Ubuntu",
            years: 5,
            proficiency: 70,
            icon: "ubuntu",
            url: "https://ubuntu.com",
            description: "a popular Linux distribution",
        },
    ],
    url: "https://www.linux.org",
    description: "an open-source operating system",
};

const Homebrew: Skill = {
    name: "Homebrew",
    years: 5,
    proficiency: 70,
    keys: [
        "package manager",
        "macos",
        "linux",
    ],
    icon: "homebrew",
    url: "https://brew.sh",
    description: "the missing package manager for macOS and Linux",
};

const CLIs: Skill = {
    name: "Command Line Interfaces (CLIs)",
    years: 10,
    proficiency: 80,
    keys: [
        "command line",
        "terminal",
        "development",
        "ide",
        "cli",
        "bash",
        "zsh",
    ],
    icon: "cli",
    subSkills: [
        {
            name: "Bash",
            years: 10,
            proficiency: 80,
            icon: "bash",
            url: "https://www.gnu.org/software/bash/",
            description: "a Unix shell and command language",
        },
        {
            name: "Zsh",
            years: 5,
            proficiency: 70,
            icon: "zsh",
            url: "https://www.zsh.org",
            description: "a Unix shell that is an extended version of the Bourne shell (sh)",
        },
        {
            name: "Powershell",
            years: 5,
            proficiency: 70,
            icon: "powershell",
            url: "https://docs.microsoft.com/en-us/powershell/",
            description: "a task automation and configuration management framework from Microsoft, consisting of a command-line shell and associated scripting language",
        }
    ],
    url: "https://en.wikipedia.org/wiki/Command-line_interface",
    description: "a text-based interface for interacting with the operating system",
};

const ConventionalCommits: Skill = {
    name: "Conventional Commits",
    proficiency: 70,
    years: 3,
    keys: [
        "conventional commits",
        "commit message",
        "commit",
    ],
    subSkills: [],
    description: "specification for adding human and machine readable meaning to commit messages",
    url: "https://www.conventionalcommits.org",
};

const SemanticVersioning: Skill = {
    name: "Semantic Versioning",
    proficiency: 70,
    years: 3,
    keys: [
        "semantic versioning",
        "semver",
        "versioning",
    ],
    subSkills: [],
    description: "versioning scheme for software that reflects the nature of changes in each release",
    url: "https://semver.org",
};

const English: Skill = {
    name: "English",
    proficiency: 100,
    years: 20,
    keys: [
        "english",
        "language",
        "spoken",
        "written",
    ],
    subSkills: [
        {
            name: "expression",
            proficiency: 100,
            years: 20,
        },
        {
            name: "reading",
            proficiency: 100,
            years: 20,
        },
        {
            name: "writing",
            proficiency: 100,
            years: 20,
        },
        {
            name: "reception",
            proficiency: 100,
            years: 20,
        }
    ],
    description: "Fluent in English, both spoken and written.",
};

const Spanish: Skill = {
    name: "Spanish",
    proficiency: 80,
    years: 10,
    keys: [
        "spanish",
        "language",
        "spoken",
        "written",
    ],
    subSkills: [
        {
            name: "expression",
            proficiency: 100,
            years: 20,
        },
        {
            name: "reading",
            proficiency: 100,
            years: 20,
        },
        {
            name: "writing",
            proficiency: 100,
            years: 20,
        },
        {
            name: "reception",
            proficiency: 100,
            years: 20,
        }
    ],
    description: "Proficient in Spanish, both spoken and written.",
};

const PublicSpeaking: Skill = {
    name: "Public Speaking",
    proficiency: 75,
    years: 5,
    keys: [
        "public speaking",
        "presentation",
        "communication",
    ],
    description: "Experienced in public speaking and delivering presentations.",
};

const AmericanSignLanguage: Skill = {
    name: "American Sign Language (ASL)",
    proficiency: 50,
    years: 2,
    keys: [
        "american sign language",
        "asl",
        "sign language",
    ],
    subSkills: [
        {
            name: "expression",
            proficiency: 100,
            years: 20,
        },
        {
            name: "reception",
            proficiency: 100,
            years: 20,
        },
        {
            name: "finger spelling",
            proficiency: 100,
            years: 20,
        },
        {
            name: "numbers",
            proficiency: 100,
            years: 20,
        },
        {
            name: "hand shapes",
            proficiency: 100,
            years: 20,
        },
    ],
    description: "Basic proficiency in American Sign Language (ASL).",
};

const Cooking: Skill = {
    name: "Cooking",
    proficiency: 90,
    years: 15,
    keys: [
        "cooking",
        "culinary",
        "food",
    ],
    subSkills: [
        {
            name: "baking",
            proficiency: 90,
            years: 15,
        },
        {
            name: "heat sources",
            proficiency: 90,
            years: 15,
        },
        {
            name: "meal prep",
            proficiency: 90,
            years: 15,
        },
        {
            name: "culinary terminology",
            proficiency: 90,
            years: 15,
        },
        {
            name: "pickling",
            proficiency: 90,
            years: 15,
        },
        {
            name: "smoking",
            proficiency: 90,
            years: 15,
        },
        {
            name: "Puerto Rican/Dominican cuisine",
            proficiency: 90,
            years: 15,
        },
        {
            name: "Italian cuisine",
            proficiency: 90,
            years: 15,
        },
        {
            name: "Mexican cuisine",
            proficiency: 90,
            years: 15,
        },
        {
            name: "Indian cuisine",
            proficiency: 90,
            years: 15,
        },
        {
            name: "Mediterranean cuisine",
            proficiency: 90,
            years: 15,
        },
        {
            name: "Peruvian cuisine",
            proficiency: 90,
            years: 15,
        },
        {
            name: "Vietnamese cuisine",
            proficiency: 90,
            years: 15,
        },
        {
            name: "American Chinese",
            proficiency: 90,
            years: 15,
        },
        {
            name: "Pennsylvania Dutch cuisine",
            proficiency: 90,
            years: 15,
        },
        {
            name: "BBQ",
            proficiency: 90,
            years: 15,
        },
        {
            name: "Soul Food",
            proficiency: 90,
            years: 15,
        },
        {
            name: "American cuisine",
            proficiency: 90,
            years: 15,
        }
    ],
    description: "Skilled in cooking various cuisines and culinary techniques.",
};

const Music: Skill = {
    name: "Music",
    proficiency: 85,
    years: 20,
    keys: [
        "music",
        "musician",
        "piano",
        "vocals",
        "keyboard",
        "microphone",
        "recording",
        "mixing",
        "composition",
        "arrangement",
        "performance",
        "mastering",
        "music theory",
        "ear training",
        "MIDI"
    ],
    subSkills: [
        {
            name: "piano",
            proficiency: 90,
            years: 20,
        },
        {
            name: "vocals",
            proficiency: 85,
            years: 20,
        },
        {
            name: "composition",
            proficiency: 85,
            years: 20,
        },
        {
            name: "arrangement",
            proficiency: 85,
            years: 20,
        },
        {
            name: "performance",
            proficiency: 85,
            years: 20,
        },
        {
            name: "mixing",
            proficiency: 85,
            years: 20,
        },
        {
            name: "mastering",
            proficiency: 85,
            years: 20,
        },
        {
            name: "recording",
            proficiency: 85,
            years: 20,
        },
        {
            name: "music theory",
            proficiency: 85,
            years: 20,
        },
        {
            name: "ear training",
            proficiency: 85,
            years: 20,
        },
        {
            name: "MIDI",
            proficiency: 85,
            years: 20,
        },
    ],
    description: "Experienced musician with skills in piano, vocals, and music production.",
};

const VideoGaming: Skill = {
    name: "Video Gaming",
    proficiency: 95,
    years: 25,
    keys: [
        "video gaming",
        "gaming",
        "multiplayer",
        "single player",
        "strategy",
        "action",
        "adventure",
        "role-playing",
        "shooter",
        "puzzle",
        "simulation",
        "isometric",
        "open world",
        "b games",
        "indie games",
        "vr games",
        "playstation",
        "xbox",
        "nintendo",
        "pc gaming",
        "steam",
        "platformer",
        "procedural generation",
        "game design",
        "game mechanics",
        "storytelling",
        "Starcraft",
        "Warcraft",
        "Diablo",
        "Overwatch",
        "Hearthstone",
        "World of Warcraft",
        "Halo",
        "Zelda",
        "Mario",
        "Undertale",
        "Portal",
        "Left4Dead",
        "Helldivers",
        "Borderlands",
        "Skyrim",
        "Slay the Spire",
        "Super Smash Bros",
        "Transistor",
        "Hollow Knight",
        "Dark Souls",
        "Bloodborne",
        "Bioshock",
        "Brothers: A Tale of Two Sons",
        "Journey",
        "The Last of Us",
        "God of War",
        "The Walking Dead",
        "Children of Morta",
        "Crypt of the NecroDancer",
        "Broken Age",
        "Grim Fandango",
        "The Stanley Parable",
    ],
    subSkills: [
        {
            name: "strategy",
            proficiency: 95,
            years: 25,
        },
        {
            name: "action",
            proficiency: 95,
            years: 25,
        },
        {
            name: "adventure",
            proficiency: 95,
            years: 25,
        },
        {
            name: "role-playing",
            proficiency: 95,
            years: 25,
        },
        {
            name: "shooter",
            proficiency: 95,
            years: 25,
        },
        {
            name: "puzzle",
            proficiency: 95,
            years: 25,
        },
        {
            name: "simulation",
            proficiency: 95,
            years: 25,
        },
        {
            name: "isometric",
            proficiency: 95,
            years: 25,
        },
        {
            name: "open world",
            proficiency: 95,
            years: 25,
        },
        {
            name: "b games",
            proficiency: 95,
            years: 25,
        },
        {
            name: "indie games",
            proficiency: 95,
            years: 25,
        },
        {
            name: "vr games",
            proficiency: 95,
            years: 25,
        },
        {
            name: "playstation",
            proficiency: 95,
            years: 25,
        },
        {
            name: "xbox",
            proficiency: 95,
            years: 25,
        },
        {
            name: "nintendo",
            proficiency: 95,
            years: 25,
        },
        {
            name: "pc gaming",
            proficiency: 95,
            years: 25,
        },
        {
            name: "steam",
            proficiency: 95,
            years: 25,
        },
        {
            name: "platformer",
            proficiency: 95,
            years: 25,
        },
        {
            name: "procedural generation",
            proficiency: 95,
            years: 25,
        },
        {
            name: "game design",
            proficiency: 95,
            years: 25,
        },
        {
            name: "game mechanics",
            proficiency: 95,
            years: 25,
        },
        {
            name: "storytelling",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Starcraft",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Warcraft",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Diablo",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Overwatch",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Hearthstone",
            proficiency: 95,
            years: 25,
        },
        {
            name: "World of Warcraft",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Halo",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Zelda",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Mario",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Undertale",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Portal",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Left4Dead",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Helldivers",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Borderlands",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Skyrim",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Slay the Spire",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Super Smash Bros",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Transistor",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Hollow Knight",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Dark Souls",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Bloodborne",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Bioshock",
            proficiency: 95,
            years: 25,
        },
        {
          name:"Brothers:A Tale of Two Sons",
          proficiency :95 ,
          years :25 ,
        },
        {
            name: "Journey",
            proficiency: 95,
            years: 25,
        },
        {
            name: "The Last of Us",
            proficiency: 95,
            years: 25,
        },
        {
            name: "God of War",
            proficiency: 95,
            years: 25,
        },
        {
            name: "The Walking Dead",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Children of Morta",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Crypt of the NecroDancer",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Broken Age",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Grim Fandango",
            proficiency: 95,
            years: 25,
        },
        {
            name: "The Stanley Parable",
            proficiency: 95,
            years: 25,
        }
    ],
    description: "Avid gamer with experience in various genres and platforms.",
};

const RolePlaying: Skill = {
    name: "Role Playing",
    proficiency: 90,
    years: 15,
    keys: [
        "role playing",
        "improvisation",
        "character development",
        "storytelling",
        "collaboration",
        "Dungeons & Dragons",
        "D&D",
        "tabletop",
        "RPG",
        "game master",
        "GM",
        "narrative",
        "world building",
        "character creation",
        "dice rolling",
        "combat",
        "encounters",
        "campaign",
        "adventure",
    ],
    subSkills: [
        {
            name: "improvisation",
            proficiency: 90,
            years: 15,
        },
        {
            name: "character development",
            proficiency: 90,
            years: 15,
        },
        {
            name: "storytelling",
            proficiency: 90,
            years: 15,
        },
        {
            name: "collaboration",
            proficiency: 90,
            years: 15,
        },
        {
            name: "Dungeons & Dragons",
            proficiency: 90,
            years: 15,
        },
    ],
    description: "Experienced in role playing games and improvisation.",
};

const Nature: Skill = {
    name: "Nature",
    proficiency: 90,
    years: 15,
    keys: [
        "nature",
        "outdoors",
        "hiking",
        "cycling",
        "skiing",
        "survival",
        "camping",
        "wildlife",
        "environment",
        "conservation",
        "sustainability",
        "flora",
        "fauna",
        "ecology",
        "botany",
        "zoology",
        "geology",
        "climate",
        "weather",
        "spirituality",
    ],
    subSkills: [
        {
            name: "hiking",
            proficiency: 90,
            years: 15,
        },
        {
            name: "cycling",
            proficiency: 90,
            years: 15,
        },
        {
            name: "skiing",
            proficiency: 90,
            years: 15,
        },
        {
            name: "survival",
            proficiency: 90,
            years: 15,
        },
        {
            name: "camping",
            proficiency: 90,
            years: 15,
        },
        {
            name: "climate awareness",
            proficiency: 90,
            years: 15,
        },
        {
            name: "wildlife observation",
            proficiency: 90,
            years: 15,
        },
        {
            name: "flora identification",
            proficiency: 90,
            years: 15,
        },
        {
            name: "fauna identification",
            proficiency: 90,
            years: 15,
        },
        {
            name: "ecology",
            proficiency: 90,
            years: 15,
        },
        {
            name: "botany",
            proficiency: 90,
            years: 15,
        },
        {
            name: "zoology",
            proficiency: 90,
            years: 15,
        },
        {
            name: "geology",
            proficiency: 90,
            years: 15,
        },
        {
            name: "climate",
            proficiency: 90,
            years: 15,
        },
        {
            name: "weather",
            proficiency: 90,
            years: 15,
        },
        {
            name: "Earth Connection",
            proficiency: 90,
            years: 15,
        },
    ],
    description: "Passionate about nature and the outdoors, with skills in hiking, camping, and wildlife observation.",
};

const Sciences: Skill = {
    name: "Sciences",
    proficiency: 85,
    years: 10,
    keys: [
        "sciences",
        "biology",
        "chemistry",
        "physics",
        "astronomy",
        "geology",
        "environmental science",
        "ecology",
        "botany",
        "zoology",
        "meteorology",
        "climatology",
        "genetics",
        "microbiology",
        "anatomy",
        "physiology",
        "biochemistry",
        "neuroscience",
        "pharmacology",
        "research",
        "data analysis",
        "laboratory techniques",
        "scientific method",
        "hypothesis testing",
        "experimental design",
        "statistical analysis",
    ],
    subSkills: [
        {
            name: "biology",
            proficiency: 85,
            years: 10,
        },
        {
            name: "chemistry",
            proficiency: 85,
            years: 10,
        },
        {
            name: "physics",
            proficiency: 85,
            years: 10,
        },
        {
            name: "astronomy",
            proficiency: 85,
            years: 10,
        },
        {
            name: "geology",
            proficiency: 85,
            years: 10,
        },
        {
            name: "environmental science",
            proficiency: 85,
            years: 10,
        },
        {
            name: "ecology",
            proficiency: 85,
            years: 10,
        },
        {
            name: "botany",
            proficiency: 85,
            years: 10,
        },
        {
            name: "zoology",
            proficiency: 85,
            years: 10,
        },
        {
            name: "meteorology",
            proficiency: 85,
            years: 10,
        },
        {
            name: "climatology",
            proficiency: 85,
            years: 10,
        },
        {
            name: "genetics",
            proficiency: 85,
            years: 10,
        },
        {
            name: "microbiology",
            proficiency: 85,
            years: 10,
        },
        {
            name: "anatomy",
            proficiency: 85,
            years: 10,
        },
        {
            name: "physiology",
            proficiency: 85,
            years: 10,
        },
        {
            name: "biochemistry",
            proficiency: 85,
            years: 10,
        },
        {
            name: "neuroscience",
            proficiency: 85,
            years: 10,
        },
        {
            name: "pharmacology",
            proficiency: 85,
            years: 10,
        },
        {
            name: "research",
            proficiency: 85,
            years: 10,
        },
        {
            name: "data analysis",
            proficiency: 85,
            years: 10,
        },
        {
            name: "laboratory techniques",
            proficiency: 85,
            years: 10,
        },
        {
            name: "scientific method",
            proficiency: 85,
            years: 10,
        },
        {
            name: "hypothesis testing",
            proficiency: 85,
            years: 10,
        },
        {
            name: "experimental design",
            proficiency: 85,
            years: 10,
        },
        {
            name: "statistical analysis",
            proficiency: 85,
            years: 10,
        },
    ],
    description: "Knowledgeable in various scientific fields, with a passion for research and data analysis.",
};

const Gardening: Skill = {
    name: "Gardening",
    proficiency: 80,
    years: 10,
    keys: [
        "gardening",
        "horticulture",
        "plant care",
        "soil management",
        "plant propagation",
        "pruning",
        "fertilization",
        "pest control",
        "irrigation",
        "composting",
        "garden design",
        "sustainable gardening",
        "hydroponics",
        "aquaponics",
        "aeroponics",
    ],
    subSkills: [
        {
            name: "plant care",
            proficiency: 80,
            years: 10,
        },
        {
            name: "soil management",
            proficiency: 80,
            years: 10,
        },
        {
            name: "plant propagation",
            proficiency: 80,
            years: 10,
        },
        {
            name: "pruning",
            proficiency: 80,
            years: 10,
        },
        {
            name: "fertilization",
            proficiency: 80,
            years: 10,
        },
        {
            name: "pest control",
            proficiency: 80,
            years: 10,
        },
        {
            name: "irrigation",
            proficiency: 80,
            years: 10,
        },
        {
            name: "composting",
            proficiency: 80,
            years: 10,
        },
        {
            name: "garden design",
            proficiency: 80,
            years: 10,
        },
        {
            name: "sustainable gardening",
            proficiency: 80,
            years: 10,
        },
        {
            name: "hydroponics",
            proficiency: 80,
            years: 10,
        },
        {
            name: "aquaponics",
            proficiency: 80,
            years: 10,
        },
        {
            name: "aeroponics",
            proficiency: 80,
            years: 10,
        },
    ],
    description: "Experienced in gardening and horticulture, with a focus on sustainable practices.",
};

const DeafCulture: Skill = {
    name: "Deaf Culture",
    proficiency: 60,
    years: 2,
    keys: [
        "deaf culture",
        "asl",
        "sign language",
        "accessibility",
        "deaf awareness",
        "deaf history",
        "audism",
    ],
    subSkills: [
        {
            name: "deaf culture",
            proficiency: 60,
            years: 2,
        },
        {
            name: "deaf history",
            proficiency: 60,
            years: 2,
        },
        {
            name: "accessibility",
            proficiency: 60,
            years: 2,
        },
        {
            name: "deaf experience",
            proficiency: 60,
            years: 2,
        },
        {
            name: "audism",
            proficiency: 60,
            years: 2,
        },
    ],
    description: "Knowledgeable about Deaf culture and community.",
};

const MentalHealth: Skill = {
    name: "Mental Health",
    proficiency: 60,
    years: 2,
    keys: [
        "mental health",
        "wellness",
        "self-care",
        "therapy",
        "mindfulness",
        "stress management",
        "emotional intelligence",
        "resilience",
        "mental illness awareness",
    ],
    subSkills: [
        {
            name: "self-care",
            proficiency: 60,
            years: 2,
        },
        {
            name: "therapy",
            proficiency: 60,
            years: 2,
        },
        {
            name: "mindfulness",
            proficiency: 60,
            years: 2,
        },
        {
            name: "stress management",
            proficiency: 60,
            years: 2,
        },
        {
            name: "emotional intelligence",
            proficiency: 60,
            years: 2,
        },
        {
            name: "resilience",
            proficiency: 60,
            years: 2,
        },
        {
            name: "mental illness awareness",
            proficiency: 60,
            years: 2,
        },
    ],
    description: "Knowledgeable about mental health and wellness practices.",
};

const InterdependentRelationships: Skill = {
    name: "Interdependent Relationships",
    proficiency: 60,
    years: 2,
    keys: [
        "interdependent relationships",
        "interdependence",
        "collaboration",
        "community",
        "mutual aid",
        "solidarity",
        "collectivism",
        "social justice",
        "equity",
        "intersectionality",
        "cooperation",
        "partnership",
        "teamwork",
        "relationship building",
        "conflict resolution",
        "communication",
    ],
    subSkills: [
        {
            name: "mutual aid",
            proficiency: 60,
            years: 2,
        },
        {
            name: "collectivism",
            proficiency: 60,
            years: 2,
        },
        {
            name: "relationship building",
            proficiency: 60,
            years: 2,
        },
        {
            name: "conflict resolution",
            proficiency: 60,
            years: 2,
        },  
    ],
    description: "Knowledgeable about interdependent relationships and community building.",
};

const Philosophy: Skill = {
    name: "Philosophy",
    proficiency: 70,
    years: 5,
    keys: [
        "philosophy",
        "ethics",
        "logic",
        "metaphysics",
        "epistemology",
        "aesthetics",
        "existentialism",
        "phenomenology",
        "stoicism",
        "utilitarianism",
        "virtue ethics",
        "social and political philosophy",
        "philosophical inquiry",
        "critical thinking",
        "philosophical debate",
        "philosophical writing",
    ],
    subSkills: [
        {
            name: "ethics",
            proficiency: 70,
            years: 5,
        },
        {
            name: "logic",
            proficiency: 70,
            years: 5,
        },
        {
            name: "metaphysics",
            proficiency: 70,
            years: 5,
        },
        {
            name: "epistemology",
            proficiency: 70,
            years: 5,
        },
        {
            name: "aesthetics",
            proficiency: 70,
            years: 5,
        },
        {
            name: "existentialism",
            proficiency: 70,
            years: 5,
        },
        {
            name: "phenomenology",
            proficiency: 70,
            years: 5, 
        },    
        {
            name: "stoicism",
            proficiency: 70,
            years: 5,
        },
        {
            name: "utilitarianism",
            proficiency: 70,
            years: 5,
        },
        {
            name: "virtue ethics",
            proficiency: 70,
            years: 5,
        },
        {
            name: "social and political philosophy",
            proficiency: 70,
            years: 5,
        },
    ],
    description: "Knowledgeable in various philosophical fields and critical thinking.",
};

const EthnoAnthropology: Skill = {
    name: "Ethno-Anthropology",
    proficiency: 60,
    years: 2,
    keys: [
        "ethno-anthropology",
        "ethnography",
        "cultural studies",
        "social anthropology",
        "cultural relativism",
        "cross-cultural communication",
        "cultural diversity",
        "cultural heritage",
        "cultural preservation",
        "cultural immersion",
        "cultural sensitivity",
        "cultural competence",
        "epigenetics",
    ],
    subSkills: [
        {
            name: "ethnography",
            proficiency: 60,
            years: 2,
        },
        {
            name: "epigenetics",
            proficiency: 60,
            years: 2,
        },
        {
            name: "cultural studies",
            proficiency: 60,
            years: 2,
        },
        {
            name: "social anthropology",
            proficiency: 60,
            years: 2,
        },
        {
            name: "cultural relativism",
            proficiency: 60,
            years: 2,
        },
    ],
    description: "Knowledgeable about ethno-anthropology and cultural studies.",
};

const Linguistics: Skill = {
    name: "Linguistics",
    proficiency: 70,
    years: 5,
    keys: [
        "linguistics",
        "language",
        "phonetics",
        "phonology",
        "morphology",
        "syntax",
        "semantics",
        "pragmatics",
        "sociolinguistics",
        "psycholinguistics",
        "historical linguistics",
        "comparative linguistics",
        "language acquisition",
        "language and identity",
        "language and culture",
        "language and cognition",
        "language and society",
        "language and technology",
        "language and globalization",
        "grammar",
        "abugida",
        "alphabet",
        "logogram",
        "syllabary",
        "synthetic language",
        "analytic language",
        "agglutinative language",
        "fusional language",
        "polysynthetic language",
        "isolating language",
        "creole",
        "pidgin",
        "bilingualism",
        "multilingualism",
        "code-switching",
        "language features",
        "etymology",
        "dialect",
        "accent",
        "register",
        "vernacular",
        "idiom",
    ],
    subSkills: [
        {
            name: "phonetics",
            proficiency: 70,
            years: 5,
        },
        {
            name: "phonology",
            proficiency: 70,
            years: 5,
        },
        {
            name: "morphology",
            proficiency: 70,
            years: 5,
        },
        {
            name: "syntax",
            proficiency: 70,
            years: 5,
        },
        {
            name: "semantics",
            proficiency: 70,
            years: 5,
        },
        {
            name: "language acquisition",
            proficiency: 70,
            years: 5,
        },
        {
            name: "sociolinguistics",
            proficiency: 70,
            years: 5,
        },
        {
            name: "psycholinguistics",
            proficiency: 70,
            years: 5,
        },
        {
            name: "vernaculars",
            proficiency: 70,
            years: 5,
        },
        {
            name: "etymology",
            proficiency: 70,
            years: 5,
        },
        {
            name: "accents",
            proficiency: 70,
            years: 5,
        },
        {
            name: "registers",
            proficiency: 70,
            years: 5,
        },
        {
            name: "idioms",
            proficiency: 70,
            years: 5,
        },
        {
            name: "language and cognition",
            proficiency: 70,
            years: 5,
        }
    ],
    description: "Knowledgeable in various linguistic fields and language structures.",
};

const Abolitionism: Skill = {
    name: "Abolitionism",
    proficiency: 60,
    years: 2,
    keys: [
        "abolitionism",
        "prison abolition",
        "police abolition",
        "social justice",
        "equity",
        "intersectionality",
        "anti-oppression",
        "reparations",
        "harm reduction",
        "restorative justice",
        "anti-racism",
        "anti-capitalism",
        "anti-colonialism",
        "decolonization",
        "indigenous rights",
        "colonialism",
        "land sovereignty",
        "cultural preservation",
        "lgbtqia",
        "queer",
        "gender theory",
        "sexual orientation",
        "sex positive",
        "inclusion",
        "diversity",
        "social justice",
        "ballroom",
        "drag",
        "pride",
        "queer history",
        "trans",
        "nonbinary",
        "lgbtqia2s+",
        "lesbian",
        "gay",
        "bisexual",
        "asexual",
        "pansexual",
        "intersex",
        "two spirit",
        "kink",
        "neurodiversity",
        "autism",
        "ADHD",
        "dyslexia",
        "neurodivergent",
        "neurotypical",
        "disability justice",
        "accessibility",
        "inclusion",
        "disability rights",
        "ableism",
        "fat activism",
        "body positivity",
        "intersectional feminism",
        "feminism",
        "anti-fascism",
        "liberation",
    ],
    subSkills: [
        {
            name: "prison abolition",
            proficiency: 60,
            years: 2,
        },
        {
            name: "police abolition",
            proficiency: 60,
            years: 2,
        },
        {
            name: "social justice",
            proficiency: 60,
            years: 2,
        },
        {
            name: "equity",
            proficiency: 60,
            years: 2,
        },
        {
            name: "decolonization",
            proficiency: 60,
            years: 2,
        },
        {
            name: "indigenous rights",
            proficiency: 60,
            years: 2,
        },
        {
            name: "land sovereignty",
            proficiency: 60,
            years: 2,
        },
        {
            name: "cultural preservation",
            proficiency: 60,
            years: 2,
        },
        {
            name: "reparations",
            proficiency: 60,
            years: 2,
        },
        {
            name: "ballroom culture",
            proficiency: 60,
            years: 2,
        },
        {
            name: "drag culture",
            proficiency: 60,
            years: 2,
        },
        {
            name: "gender theory",
            proficiency: 60,
            years: 2,
        },
        {
            name: "sexual orientations & kinks",
            proficiency: 60,
            years: 2,
        },
        {
            name: "autism",
            proficiency: 60,
            years: 2,
        },
        {
            name: "ADHD",
            proficiency: 60,
            years: 2,
        },
        {
            name: "dyslexia",
            proficiency: 60,
            years: 2,
        },
        {
            name: "accessibility",
            proficiency: 60,
            years: 2,
        },
        {
            name: "inclusion",
            proficiency: 60,
            years: 2,
        },
        {
            name: "disability rights",
            proficiency: 60,
            years: 2,
        },
        {
            name: "ableism",
            proficiency: 60,
            years: 2,
        },
        {
            name: "intersectionality",
            proficiency: 60,
            years: 2,
        },
        {
            name: "restorative justice",
            proficiency: 60,
            years: 2,
        },
        {
            name: "harm reduction",
            proficiency: 60,
            years: 2,
        },
        {
            name: "anti-racism",
            proficiency: 60,
            years: 2,
        },
        {
            name: "anti-capitalism",
            proficiency: 60,
            years: 2,
        },
        {
            name: "anti-colonialism",
            proficiency: 60,
            years: 2,
        },
        {
            name: "neurodiversity",
            proficiency: 60,
            years: 2,
        },
        {
            name: "disability justice",
            proficiency: 60,
            years: 2,
        },
        {
            name: "fat liberation",
            proficiency: 60,
            years: 2,
        },
        {
            name: "anti-fascism",
            proficiency: 60,
            years: 2,
        },
        {
            name: "feminism",
            proficiency: 60,
            years: 2,
        },
        {
            name: "indigenous frameworks",
            proficiency: 60,
            years: 2,
        },
        {
            name: "LGBTQIA2S+",
            proficiency: 60,
            years: 2,
        },
        {
            name: "anti-white-cis-male-hetero-ableist-capitalist-colonial-patriarchy",
            proficiency: 60,
            years: 2,
        },
    ],
    description: "Knowledgeable about abolitionism and advocacy for social justice.",
};

const Reading: Skill = {
    name: "Reading",
    proficiency: 90,
    years: 20,
    keys: [
        "reading",
        "books",
        "literature",
        "fiction",
        "non-fiction",
        "poetry",
        "novels",
        "short stories",
        "articles",
        "essays",
    ],
    subSkills: [
        {
            name: "fiction",
            proficiency: 90,
            years: 20,
        },
        {
            name: "non-fiction",
            proficiency: 90,
            years: 20,
        },
        {
            name: "poetry",
            proficiency: 90,
            years: 20,
        },
        {
            name: "novels",
            proficiency: 90,
            years: 20,
        },
        {
            name: "short stories",
            proficiency: 90,
            years: 20,
        },
        {
            name: "articles",
            proficiency: 90,
            years: 20,
        },
        {
            name: "essays",
            proficiency: 90,
            years: 20,
        },
    ],
    description: "Avid reader with a passion for various genres and forms of literature.",
};

const Shows: Skill = {
    name: "Shows",
    proficiency: 90,
    years: 20,
    keys: [
        "shows",
        "television",
        "series",
        "drama",
        "comedy",
        "documentary",
        "reality",
        "anime",
        "cartoons",
    ],
    subSkills: [
        {
            name: "drama",
            proficiency: 90,
            years: 20,
        },
        {
            name: "comedy",
            proficiency: 90,
            years: 20,
        },
        {
            name: "documentary",
            proficiency: 90,
            years: 20,
        },
        {
            name: "reality",
            proficiency: 90,
            years: 20,
        },
        {
            name: "anime",
            proficiency: 90,
            years: 20,
        },
        {
            name: "cartoons",
            proficiency: 90,
            years: 20,
        },
    ],
    description: "Avid viewer of various television shows and series.",
};

const SpiritualityAndMysticism: Skill = {
    name: "Spirituality and Mysticism",
    proficiency: 70,
    years: 5,
    keys: [
        "spirituality",
        "mysticism",
        "meditation",
        "mindfulness",
        "yoga",
        "energy work",
        "astrology",
        "intuition",
        "manifestation",
        "spiritual growth",
        "self-discovery",
        "inner peace",
        "enlightenment",
        "sufism",
        "shamanism",
        "earth-based spirituality",
        "pachamama",
        "nature spirituality",
    ],
    subSkills: [
        {
            name: "meditation",
            proficiency: 70,
            years: 5,
        },
        {
            name: "mindfulness",
            proficiency: 70,
            years: 5,
        },
        {
            name: "energy work",
            proficiency: 70,
            years: 5,
        },
        {
            name: "intuition",
            proficiency: 70,
            years: 5,
        },
        {
            name: "self-discovery",
            proficiency: 70,
            years: 5,
        },
        {
            name: "sufism",
            proficiency: 70,
            years: 5,
        },
        {
            name: "shamanism",
            proficiency: 70,
            years: 5,
        },
        {
            name: "earth-based spirituality",
            proficiency: 70,
            years: 5,
        },
        {
            name: "mysticism",
            proficiency: 70,
            years: 5,
        },
    ],
    description: "Knowledgeable in various spiritual and mystical practices.",
};

const Pip: Skill = {
    name: "Pip",
    years: 5,
    proficiency: 70,
    keys: [
        "package manager",
        "python",
    ],
    icon: "pip",
    url: "https://pip.pypa.io/en/stable/",
    description: "a package manager for Python",
};

const NPM: Skill = {
    name: "NPM",
    years: 6,
    proficiency: 80,
    keys: [
        "package manager",
        "javascript",
        "node",
    ],
    icon: "npm",
    url: "https://www.npmjs.com",
    description: "a package manager for JavaScript",
};

const yarn: Skill = {
    name: "Yarn",
    years: 5,
    proficiency: 70,
    keys: [
        "package manager",
        "javascript",
        "node",
    ],
    icon: "yarn",
    url: "https://yarnpkg.com",
    description: "a package manager for JavaScript",
};

const MobileFirst: Skill = {
    name: "Mobile First",
    years: 2,
    proficiency: 9,
    keys: [
        "ui",
    ],
    description: "designing user interfaces with a mobile-first approach, prioritizing mobile devices",
    url: "https://www.smashingmagazine.com/2018/02/mobile-first-responsive-web-design/",
};

const ServiceDogHandling: Skill = {
    name: "Service Dog Handling",
    proficiency: 80,
    years: 5,
    keys: [
        "service dog handling",
        "service dog training",
        "canine training",
        "dog obedience",
        "dog behavior",
        "animal training",
        "animal behavior",
        "pet care",
        "public access",
        "scent training",
        "deep pressure therapy",
        "light pressure therapy",
        "canine psychology",
        "canine enrichment",
        "prey model nutrition",
        "crate training",
        "leash training",
        "socialization",
        "correctionless methodology",
        "positive reinforcement",
        "service dog laws",
    ],
    subSkills: [
        {
            name: "obedience training",
            proficiency: 80,
            years: 5,
        },
        {
            name: "public access",
            proficiency: 80,
            years: 5,
        },
        {
            name: "scent training",
            proficiency: 80,
            years: 5,
        },
        {
            name: "deep/light pressure therapy",
            proficiency: 80,
            years: 5,
        },
        {
            name: "canine psychology",
            proficiency: 80,
            years: 5,
        },
        {
            name: "canine enrichment",
            proficiency: 80,
            years: 5,
        },
        {
            name: "prey model nutrition",
            proficiency: 80,
            years: 5,
        },
        {
            name: "crate training",
            proficiency: 80,
            years: 5,
        },
        {
            name: "leash training",
            proficiency: 80,
            years: 5,
        },
        {
            name: "socialization",
            proficiency: 80,
            years: 5,
        },
        {
            name: "correctionless methodology",
            proficiency: 80,
            years: 5,
        },
        {
            name: "positive reinforcement",
            proficiency: 80,
            years: 5,
        },
        {
            name: "Service Dog Laws",
            proficiency: 80,
            years: 5,
        },
    ],
};

export const groups: GroupContainer = {
    frontend: Frontend,
    backend: Backend,
    lifecyclecollab: LifecycleCollab,
    softskills: SoftSkills,
    devops: DevOps,
    qa: QA,
    accessdesign: AccessDesign,  
    securitycompliance: SecurityCompliance,
    computationalgorithmspatterns: ComputationAlgorithmsPatterns,
    ai: AI,
    nativemobilegames: NativeMobileGames,
    workspaces: Workspaces,
    languagesandmore: LanguagesAndMore,
    all: {
        name: "all",
        label: "All",
        title: "Everything Under the Sun",
        description: "Every skill I use in my growing software experience",
        skills: [
            React,
            JavaScript,
            Typescript,
            HTML,
            CSS,
            SASS,
            Tailwind,
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
            SwaggerJSDoc,
            SwaggerUiExpress,
            ExpressOpenAPIValidator,
            CORS,
            Dotenv,
            Helmet,
            Morgan,
            ExpressSession,
            ConnectMongo,
            Mongoose,
            NodeJS,
            ExpressJS,
            MongoDB,
            PostgreSQL,
            SQL,
            DatabaseMigrations,
            JSONSchema,
            OpenAPI,
            CookieParser,
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
            ConstructiveFeedback,
            CriticalThinking,
            Communication,
            Collaboration,
            Adaptability,
            Pragmatism,
            ProblemSolving,
            TimeManagement,
            Creativity,
            Empathy,
            LearningAgility,
            Resilience,
            EmotionalIntelligence,
            HarmReduction,
            ConflictResolution,
            Inclusion,
            Accountability,
            AttentionToDetail,
            Justice,
            SelfAwareness,
            Integrity,
            CulturalCompetence,
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
            Playwright,
            Cypress,
            Vitest,
            Git,
            SVN,
            UnitTest,
            IntegrationTest,
            EndToEndTest,
            Jest,
            XCTest,
            UnityTest,
            JUnit,
            TestDrivenDevelopment,
            RiskAssessment,
            Doxygen,
            Storybook,
            PerformanceTesting,
            Debugging,
            EdgeCaseTesting,
            Figma,
            MaterialDesign,
            AppleHIG,
            DarkUI,
            ColorContrast,
            ColorTheory,
            Depth,
            SemanticColors,
            PalletteApp,
            EvaDesign,
            ResponsiveDesign,
            RTL,
            ComponentFeedback,
            VueI18n,
            A11y,
            I18n,
            Aria,
            AccessControl,
            GDPR,
            FDA,
            HIPAA,
            CyberSecurity,
            DataPrivacy,
            Oauth,
            VPN,
            Encryption,
            WebCrypto,
            bcrypt,
            AES,
            MongoDBCSFLE,
            JWT,
            SSO,
            MFA,
            OKTA,
            CrowdStrike,
            SSL,
            Datadog,
            Helm,
            CleanCode,
            WebProtocols,
            ComputerAchitecture,
            AlgorithmAnalysisTechniques,
            RandomNumberGenerationAlgorithms,
            ComputationalGeometryAlgorithms,
            StringAlgorithms,
            CryptographyAlgorithms,
            OptimizationAlgorithms,
            MachineLearningAlgorithms,
            GraphAlgorithms,
            Recursion,
            DataStructures,
            CompressionAlgorithms,
            SearchingAlgorithms,
            HashingAlgorithms,
            BooleanLogic,
            Mathematics,
            SortingAlgorithms,
            ProgrammingLanguages,
            CodeCompilation,
            ProgrammingPatterns,
            Copilot,
            ChatGPT,
            DeepSeek,
            Craiyon,
            Recraft,
            DermAI,
            IbexAI,
            IOs,
            Cocoa,
            Android,
            Unity,
            QT,
            GoogleVR,
            Vite,
            Webpack,
            Babel,
            TSC,
            ESLint,
            Prettier,
            XCode,
            AndroidStudio,
            VSCode,
            Vim,
            MacOS,
            Windows,
            Linux,
            Homebrew,
            CLIs,
            ConventionalCommits,
            SemanticVersioning,
            English,
            Spanish,
            AmericanSignLanguage,
            Cooking,
            Music,
            VideoGaming,
            RolePlaying,
            Nature,
            Sciences,
            Gardening,
            DeafCulture,
            MentalHealth,
            InterdependentRelationships,
            Philosophy,
            PublicSpeaking,
            EthnoAnthropology,
            Linguistics,
            Abolitionism,
            Reading,
            Shows,
            SpiritualityAndMysticism,
            Pip,
            NPM,
            yarn,
            MobileFirst,
            ServiceDogHandling
        ],
    },
}