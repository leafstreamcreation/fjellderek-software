export type Skill = {
    name: string;
    proficiency: number;
    years?: number;
    keys?: string[];
    icon?: string;
    subSkills?: Skill[];
    description?: string;
    url?: string;
};

export type Group = {
    name: string;
    label: string;
    title: string;
    description: string;
    skills: Skill[];
    featuredFilters?: string[];
};