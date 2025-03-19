export type Skill = {
    name: string;
    proficiency: number;
    years?: number | null;
    keys?: string[] | null;
    icon?: string | null;
    subSkills?: Skill[] | null;
    description?: string | null;
    url?: string | null;
};

export type Group = {
    name: string;
    label: string;
    title: string;
    description: string;
    skills: Skill[];
};