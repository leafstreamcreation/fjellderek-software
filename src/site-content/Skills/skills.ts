import { Group, Skill } from "./types.ts";

import { Frontend } from "./frontend.ts";
import { Backend } from "./backend.ts";
import { LifecycleCollab } from "./lifecyclecollab.ts";
import { SoftSkills } from "./softskills.ts";
import { DevOps } from "./devops.ts";
import { QA } from "./qa.ts";
import { AccessDesign } from "./accessibilityanddesign.ts";
import { SecurityCompliance } from "./securityandcompliance.ts";
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

export const groups: GroupContainer = {
    frontend: Frontend,
    backend: Backend,
    lifecyclecollab: LifecycleCollab,
    softskills: SoftSkills,
    devops: DevOps,
    qa: QA,
    accessdesign: AccessDesign,  
    securitycompliance: SecurityCompliance,
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
        ],
    },
}