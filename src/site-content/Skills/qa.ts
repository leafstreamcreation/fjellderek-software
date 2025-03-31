import { Group, Skill } from './types';

const Playwright: Skill = {
    name: "Playwright",
    years: 1,
    proficiency: 10,
    keys: [
        "e2e",
        "end to end",
        "vue",
        "component",
        "testing",
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
        "component",
        "testing",
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
        "testing",
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
        "testing",
        "best practices",
        "test driven development",
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
        "testing",
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
        "testing",
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
        "testing",
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
        "testing",
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
        "testing",
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
        "testing",
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
        "testing",
        "best practices",
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
        "best practices",
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

const OpenAPI: Skill = {
    name: "OpenAPI",
    proficiency: 60,
    years: 3,
    keys: [
        "api",
        "documentation",
        "openapi",
        "swagger",
        "best practices",
    ],
    subSkills: [],
    description: "specification for building APIs",
    url: "https://swagger.io/specification/",
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
    description: "tool for developing UI components in isolation for React, Vue, and Angular",
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
        "testing",
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

const Datadog: Skill = {
    name: "Datadog",
    proficiency: 60,
    years: 2,
    keys: [
        "monitoring",
        "observability",
        "datadog",
        "testing",
    ],
    icon: "datadog",
    description: "monitoring and observability platform for cloud-scale applications",
    url: "https://www.datadoghq.com",
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

const ConventionalCommits: Skill = {
    name: "Conventional Commits",
    proficiency: 70,
    years: 3,
    keys: [
        "conventional commits",
        "commit message",
        "commit",
        "best practices",
        "version control",
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
        "best practices",
        "version control",
    ],
    subSkills: [],
    description: "versioning scheme for software that reflects the nature of changes in each release",
    url: "https://semver.org",
};

export const QA: Group = {
    name: "qa",
    label: "QA",
    title: "Quality Assurance",
    description: "Skills to debug and produce fast and flawless applications",
    skills: [
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
        OpenAPI,
        Storybook,
        PerformanceTesting,
        Debugging,
        EdgeCaseTesting,
        Datadog,
        CleanCode,
        ConventionalCommits,
        SemanticVersioning,
    ],
    featuredFilters: [
        {
            name: "testing",
            label: "Testing",
        },
        {
            name: "documentation",
            label: "Documentation",
        },
        {
            name: "version control",
            label: "Version Control",
        },
        {
            name: "best practices",
            label: "Best Practices",
        },
    ],
};