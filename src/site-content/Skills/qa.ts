import { Group } from './types';

export const QA: Group = {
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
};