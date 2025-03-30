import { Group, Skill } from "./types";

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

export const SoftSkills: Group = {
    name: "softskills",
    label: "Soft Skills",
    title: "Soft Skills",
    description: "Invaluable skills and innate qualities for every project and setting",
    skills: [
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
        CulturalCompetence
    ],
    featuredFilters: [
        "social",
        "intellectual",
        "self-management",
        "ethics",
    ]
};