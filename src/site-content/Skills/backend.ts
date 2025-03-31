import { Group, Skill } from "./types";


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

const Lodash: Skill = {
    name: "Lodash",
    years: 1,
    proficiency: 70,
    keys: [
        "utility",
        "javascript",
        "library",
    ],
    subSkills: [],
    description: "a modern JavaScript utility library delivering modularity, performance & extras",
    url: "https://lodash.com",
};

const Typescript: Skill = {
    name: "Typescript",
    years: 2,
    proficiency: 70,
    keys: [
        "javascript",
        "type",
        "node",
    ],
    icon: "typescript",
    subSkills: [],
    url: "https://www.typescriptlang.org",
    description: "JavaScript with strong typing support",
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

export const Backend: Group = {
    name: "backend",
    label: "Backend",
    title: "Backend Skills",
    description: "For building robust servers, services, and data persistence in web-based applications",
    skills: [
        NodeMailer,
        NodeJS,
        ExpressJS,
        MongoDB,
        REST,
        Microservices,
        DatabaseMigrations,
        KnexJS,
        PostgreSQL,
        SQL,
        JSONSchema,
        OpenAPI,
        SwaggerJSDoc,
        SwaggerUiExpress,
        ExpressOpenAPIValidator,
        CORS,
        Dotenv,
        Helmet,
        Morgan,
        Lodash,
        Typescript,
        ExpressSession,
        CookieParser,
        ConnectMongo,
        Mongoose,
    ],
    featuredFilters: [
        {
            name: "expressjs",
            label: "ExpressJS",
            icon: "express",
        },
        {
            name: "database",
            label: "Database",
        }
    ],
};