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

export type Filter = {
    name: string;
    label: string;
    icon?: string;
};

export type Group = {
    name: string;
    label: string;
    title: string;
    description: string;
    skills: Skill[];
    featuredFilters?: Filter[];
};