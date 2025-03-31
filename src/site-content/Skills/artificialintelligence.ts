import { Group, Skill } from "./types";

const Copilot: Skill = {
    name: "Github Copilot",
    years: 1,
    proficiency: 90,
    keys: [
        "github copilot",
        "ai coding assistant",
        "code completion",
        "tool",
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
        "search",
        "tool",
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
        "tool",
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
        "design",
        "tool",
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
        "tool",
    ],
    description: "Leveraging AI to automate design tasks, improving efficiency and creativity in design processes.",
    url: "",
};

const EvaDesign: Skill = {
    name: "Eva Design",
    years: 0.5,
    proficiency: 60,
    keys: [
        "eva design",
        "ai design",
        "design automation",
        "tool",
    ],
    description: "Utilizing AI to enhance design processes, providing intelligent suggestions and automating repetitive tasks.",
    url: "",
};

const DermAI: Skill = {
    name: "DermAI",
    years: 0.5,
    proficiency: 55,
    keys: [
        "dermai",
        "ai dermatology",
        "skin analysis",
        "pathology",
        "tool",
    ],
    description: "Using AI for dermatological analysis, providing insights and recommendations based on skin conditions.",
    url: "",
};

const IbexAI: Skill = {
    name: "IbexAI",
    years: 0.5,
    proficiency: 50,
    keys: [
        "ibexai",
        "ai cancer diagnostics",
        "slide analysis",
        "pathology",
        "tool",
    ],
    icon: "ibexai",
    description: "Utilizing AI for cancer diagnostics, analyzing slides to assist in accurate and efficient diagnosis.",
    url: "https://ibex-ai.com",
};

export const AI: Group = {
    name: "ai",
    label: "AI",
    title: "Artificial Intelligence",
    description: "Skills using AI models and tools for next-generation application development",
    skills: [
        Copilot,
        ChatGPT,
        DeepSeek,
        Craiyon,
        Recraft,
        EvaDesign,
        DermAI,
        IbexAI,
    ],
    featuredFilters: [
        {
            name: "tool",
            label: "Tool",
        },
        {
            name: "pathology",
            label: "Pathology",
        },
        {
            name: "design",
            label: "Design",
        },
        {
            name: "search",
            label: "Search",
        },
    ],
};