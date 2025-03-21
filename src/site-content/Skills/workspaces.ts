import  { Group } from './types';

export const Workspaces: Group = {
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
    };