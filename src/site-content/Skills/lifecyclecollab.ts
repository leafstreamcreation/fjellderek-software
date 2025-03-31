import { Group, Skill } from "./types";

const GlobalTeamCollaboration: Skill = {
    name: "Global Team Collaboration",
    years: 4,
    proficiency: 90,
    keys: [
        "collaboration",
        "communication",
        "remote",
        "agile",
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
        "remote",
        "agile",
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
        "collaboration",
        "remote",
        "software lifecycle",
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
        "documentation",
        "collaboration",
        "remote",
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
        "collaboration",
        "remote",
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
        "documentation",
        "collaboration",
        "remote",
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
        "collaboration",
        "remote",
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
        "collaboration",
        "remote",
        "software lifecycle",
        "agile",
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
        "remote",
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
        "remote",
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
        "remote",
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
        "remote",
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
        "remote",
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
        "collaboration",
        "remote",
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
        "collaboration",
        "remote",
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
        "collaboration",
        "remote",
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
        "collaboration",
        "agile",
        "remote",
        "software lifecycle",
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
        "agile",
        "remote",
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
        "collaboration",
        "agile",
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
        "collaboration",
        "agile",
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
        "collaboration",
        "agile",
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
        "collaboration",
        "agile",
        "remote",
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
        "collaboration",
        "remote",
        "software lifecycle",
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
        "collaboration",
        "remote",
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
        "collaboration",
        "remote",
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
        "collaboration",
        "remote",
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
        "software lifecycle",
        "collaboration",
        "agile",
        "remote",
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
        "software lifecycle",
    ],
    description: "Experience in traditional Waterfall software development methodology",
    url: "https://www.tutorialspoint.com/sdlc/sdlc_waterfall_model.htm",
};

export const LifecycleCollab: Group = {
    name: "lifecyclecollab",
    label: "Collaboration",
    title: "Software Lifecycle & Collaboration",
    description: "Skills for stellar coordination and agility in local and global software teams",
    skills: [
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
    featuredFilters: [
        {
            name: "software lifecycle",
            label: "Software Lifecycle",
        },
        {
            name: "agile",
            label: "AGILE",
        },
        {
            name: "remote",
            label: "Remote",
        },
        {
            name: "collaboration",
            label: "Collaboration",
        },
    ],
};