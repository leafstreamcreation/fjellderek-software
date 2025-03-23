import { Group, Skill } from "./types";


const English: Skill = {
    name: "English",
    proficiency: 100,
    years: 20,
    keys: [
        "english",
        "language",
        "spoken",
        "written",
    ],
    subSkills: [
        {
            name: "expression",
            proficiency: 100,
            years: 20,
        },
        {
            name: "reading",
            proficiency: 100,
            years: 20,
        },
        {
            name: "writing",
            proficiency: 100,
            years: 20,
        },
        {
            name: "reception",
            proficiency: 100,
            years: 20,
        }
    ],
    description: "Fluent in English, both spoken and written.",
};

const Spanish: Skill = {
    name: "Spanish",
    proficiency: 80,
    years: 10,
    keys: [
        "spanish",
        "language",
        "spoken",
        "written",
    ],
    subSkills: [
        {
            name: "expression",
            proficiency: 100,
            years: 20,
        },
        {
            name: "reading",
            proficiency: 100,
            years: 20,
        },
        {
            name: "writing",
            proficiency: 100,
            years: 20,
        },
        {
            name: "reception",
            proficiency: 100,
            years: 20,
        }
    ],
    description: "Proficient in Spanish, both spoken and written.",
};

const PublicSpeaking: Skill = {
    name: "Public Speaking",
    proficiency: 75,
    years: 5,
    keys: [
        "public speaking",
        "presentation",
        "communication",
    ],
    description: "Experienced in public speaking and delivering presentations.",
};

const AmericanSignLanguage: Skill = {
    name: "American Sign Language (ASL)",
    proficiency: 50,
    years: 2,
    keys: [
        "american sign language",
        "asl",
        "sign language",
    ],
    subSkills: [
        {
            name: "expression",
            proficiency: 100,
            years: 20,
        },
        {
            name: "reception",
            proficiency: 100,
            years: 20,
        },
        {
            name: "finger spelling",
            proficiency: 100,
            years: 20,
        },
        {
            name: "numbers",
            proficiency: 100,
            years: 20,
        },
        {
            name: "hand shapes",
            proficiency: 100,
            years: 20,
        },
    ],
    description: "Basic proficiency in American Sign Language (ASL).",
};

const Cooking: Skill = {
    name: "Cooking",
    proficiency: 90,
    years: 15,
    keys: [
        "cooking",
        "culinary",
        "food",
    ],
    subSkills: [
        {
            name: "baking",
            proficiency: 90,
            years: 15,
        },
        {
            name: "heat sources",
            proficiency: 90,
            years: 15,
        },
        {
            name: "meal prep",
            proficiency: 90,
            years: 15,
        },
        {
            name: "culinary terminology",
            proficiency: 90,
            years: 15,
        },
        {
            name: "pickling",
            proficiency: 90,
            years: 15,
        },
        {
            name: "smoking",
            proficiency: 90,
            years: 15,
        },
        {
            name: "Puerto Rican/Dominican cuisine",
            proficiency: 90,
            years: 15,
        },
        {
            name: "Italian cuisine",
            proficiency: 90,
            years: 15,
        },
        {
            name: "Mexican cuisine",
            proficiency: 90,
            years: 15,
        },
        {
            name: "Indian cuisine",
            proficiency: 90,
            years: 15,
        },
        {
            name: "Mediterranean cuisine",
            proficiency: 90,
            years: 15,
        },
        {
            name: "Peruvian cuisine",
            proficiency: 90,
            years: 15,
        },
        {
            name: "Vietnamese cuisine",
            proficiency: 90,
            years: 15,
        },
        {
            name: "American Chinese",
            proficiency: 90,
            years: 15,
        },
        {
            name: "Pennsylvania Dutch cuisine",
            proficiency: 90,
            years: 15,
        },
        {
            name: "BBQ",
            proficiency: 90,
            years: 15,
        },
        {
            name: "Soul Food",
            proficiency: 90,
            years: 15,
        },
        {
            name: "American cuisine",
            proficiency: 90,
            years: 15,
        }
    ],
    description: "Skilled in cooking various cuisines and culinary techniques.",
};

const Music: Skill = {
    name: "Music",
    proficiency: 85,
    years: 20,
    keys: [
        "music",
        "musician",
        "piano",
        "vocals",
        "keyboard",
        "microphone",
        "recording",
        "mixing",
        "composition",
        "arrangement",
        "performance",
        "mastering",
        "music theory",
        "ear training",
        "MIDI"
    ],
    subSkills: [
        {
            name: "piano",
            proficiency: 90,
            years: 20,
        },
        {
            name: "vocals",
            proficiency: 85,
            years: 20,
        },
        {
            name: "composition",
            proficiency: 85,
            years: 20,
        },
        {
            name: "arrangement",
            proficiency: 85,
            years: 20,
        },
        {
            name: "performance",
            proficiency: 85,
            years: 20,
        },
        {
            name: "mixing",
            proficiency: 85,
            years: 20,
        },
        {
            name: "mastering",
            proficiency: 85,
            years: 20,
        },
        {
            name: "recording",
            proficiency: 85,
            years: 20,
        },
        {
            name: "music theory",
            proficiency: 85,
            years: 20,
        },
        {
            name: "ear training",
            proficiency: 85,
            years: 20,
        },
        {
            name: "MIDI",
            proficiency: 85,
            years: 20,
        },
    ],
    description: "Experienced musician with skills in piano, vocals, and music production.",
};

const VideoGaming: Skill = {
    name: "Video Gaming",
    proficiency: 95,
    years: 25,
    keys: [
        "video gaming",
        "gaming",
        "multiplayer",
        "single player",
        "strategy",
        "action",
        "adventure",
        "role-playing",
        "shooter",
        "puzzle",
        "simulation",
        "isometric",
        "open world",
        "b games",
        "indie games",
        "vr games",
        "playstation",
        "xbox",
        "nintendo",
        "pc gaming",
        "steam",
        "platformer",
        "procedural generation",
        "game design",
        "game mechanics",
        "storytelling",
        "Starcraft",
        "Warcraft",
        "Diablo",
        "Overwatch",
        "Hearthstone",
        "World of Warcraft",
        "Halo",
        "Zelda",
        "Mario",
        "Undertale",
        "Portal",
        "Left4Dead",
        "Helldivers",
        "Borderlands",
        "Skyrim",
        "Slay the Spire",
        "Super Smash Bros",
        "Transistor",
        "Hollow Knight",
        "Dark Souls",
        "Bloodborne",
        "Bioshock",
        "Brothers: A Tale of Two Sons",
        "Journey",
        "The Last of Us",
        "God of War",
        "The Walking Dead",
        "Children of Morta",
        "Crypt of the NecroDancer",
        "Broken Age",
        "Grim Fandango",
        "The Stanley Parable",
    ],
    subSkills: [
        {
            name: "strategy",
            proficiency: 95,
            years: 25,
        },
        {
            name: "action",
            proficiency: 95,
            years: 25,
        },
        {
            name: "adventure",
            proficiency: 95,
            years: 25,
        },
        {
            name: "role-playing",
            proficiency: 95,
            years: 25,
        },
        {
            name: "shooter",
            proficiency: 95,
            years: 25,
        },
        {
            name: "puzzle",
            proficiency: 95,
            years: 25,
        },
        {
            name: "simulation",
            proficiency: 95,
            years: 25,
        },
        {
            name: "isometric",
            proficiency: 95,
            years: 25,
        },
        {
            name: "open world",
            proficiency: 95,
            years: 25,
        },
        {
            name: "b games",
            proficiency: 95,
            years: 25,
        },
        {
            name: "indie games",
            proficiency: 95,
            years: 25,
        },
        {
            name: "vr games",
            proficiency: 95,
            years: 25,
        },
        {
            name: "playstation",
            proficiency: 95,
            years: 25,
        },
        {
            name: "xbox",
            proficiency: 95,
            years: 25,
        },
        {
            name: "nintendo",
            proficiency: 95,
            years: 25,
        },
        {
            name: "pc gaming",
            proficiency: 95,
            years: 25,
        },
        {
            name: "steam",
            proficiency: 95,
            years: 25,
        },
        {
            name: "platformer",
            proficiency: 95,
            years: 25,
        },
        {
            name: "procedural generation",
            proficiency: 95,
            years: 25,
        },
        {
            name: "game design",
            proficiency: 95,
            years: 25,
        },
        {
            name: "game mechanics",
            proficiency: 95,
            years: 25,
        },
        {
            name: "storytelling",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Starcraft",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Warcraft",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Diablo",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Overwatch",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Hearthstone",
            proficiency: 95,
            years: 25,
        },
        {
            name: "World of Warcraft",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Halo",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Zelda",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Mario",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Undertale",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Portal",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Left4Dead",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Helldivers",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Borderlands",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Skyrim",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Slay the Spire",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Super Smash Bros",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Transistor",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Hollow Knight",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Dark Souls",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Bloodborne",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Bioshock",
            proficiency: 95,
            years: 25,
        },
        {
          name:"Brothers:A Tale of Two Sons",
          proficiency :95 ,
          years :25 ,
        },
        {
            name: "Journey",
            proficiency: 95,
            years: 25,
        },
        {
            name: "The Last of Us",
            proficiency: 95,
            years: 25,
        },
        {
            name: "God of War",
            proficiency: 95,
            years: 25,
        },
        {
            name: "The Walking Dead",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Children of Morta",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Crypt of the NecroDancer",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Broken Age",
            proficiency: 95,
            years: 25,
        },
        {
            name: "Grim Fandango",
            proficiency: 95,
            years: 25,
        },
        {
            name: "The Stanley Parable",
            proficiency: 95,
            years: 25,
        }
    ],
    description: "Avid gamer with experience in various genres and platforms.",
};

const RolePlaying: Skill = {
    name: "Role Playing",
    proficiency: 90,
    years: 15,
    keys: [
        "role playing",
        "improvisation",
        "character development",
        "storytelling",
        "collaboration",
        "Dungeons & Dragons",
        "D&D",
        "tabletop",
        "RPG",
        "game master",
        "GM",
        "narrative",
        "world building",
        "character creation",
        "dice rolling",
        "combat",
        "encounters",
        "campaign",
        "adventure",
    ],
    subSkills: [
        {
            name: "improvisation",
            proficiency: 90,
            years: 15,
        },
        {
            name: "character development",
            proficiency: 90,
            years: 15,
        },
        {
            name: "storytelling",
            proficiency: 90,
            years: 15,
        },
        {
            name: "collaboration",
            proficiency: 90,
            years: 15,
        },
        {
            name: "Dungeons & Dragons",
            proficiency: 90,
            years: 15,
        },
    ],
    description: "Experienced in role playing games and improvisation.",
};

const Nature: Skill = {
    name: "Nature",
    proficiency: 90,
    years: 15,
    keys: [
        "nature",
        "outdoors",
        "hiking",
        "cycling",
        "skiing",
        "survival",
        "camping",
        "wildlife",
        "environment",
        "conservation",
        "sustainability",
        "flora",
        "fauna",
        "ecology",
        "botany",
        "zoology",
        "geology",
        "climate",
        "weather",
        "spirituality",
    ],
    subSkills: [
        {
            name: "hiking",
            proficiency: 90,
            years: 15,
        },
        {
            name: "cycling",
            proficiency: 90,
            years: 15,
        },
        {
            name: "skiing",
            proficiency: 90,
            years: 15,
        },
        {
            name: "survival",
            proficiency: 90,
            years: 15,
        },
        {
            name: "camping",
            proficiency: 90,
            years: 15,
        },
        {
            name: "climate awareness",
            proficiency: 90,
            years: 15,
        },
        {
            name: "wildlife observation",
            proficiency: 90,
            years: 15,
        },
        {
            name: "flora identification",
            proficiency: 90,
            years: 15,
        },
        {
            name: "fauna identification",
            proficiency: 90,
            years: 15,
        },
        {
            name: "ecology",
            proficiency: 90,
            years: 15,
        },
        {
            name: "botany",
            proficiency: 90,
            years: 15,
        },
        {
            name: "zoology",
            proficiency: 90,
            years: 15,
        },
        {
            name: "geology",
            proficiency: 90,
            years: 15,
        },
        {
            name: "climate",
            proficiency: 90,
            years: 15,
        },
        {
            name: "weather",
            proficiency: 90,
            years: 15,
        },
        {
            name: "Earth Connection",
            proficiency: 90,
            years: 15,
        },
    ],
    description: "Passionate about nature and the outdoors, with skills in hiking, camping, and wildlife observation.",
};

const Sciences: Skill = {
    name: "Sciences",
    proficiency: 85,
    years: 10,
    keys: [
        "sciences",
        "biology",
        "chemistry",
        "physics",
        "astronomy",
        "geology",
        "environmental science",
        "ecology",
        "botany",
        "zoology",
        "meteorology",
        "climatology",
        "genetics",
        "microbiology",
        "anatomy",
        "physiology",
        "biochemistry",
        "neuroscience",
        "pharmacology",
        "research",
        "data analysis",
        "laboratory techniques",
        "scientific method",
        "hypothesis testing",
        "experimental design",
        "statistical analysis",
    ],
    subSkills: [
        {
            name: "biology",
            proficiency: 85,
            years: 10,
        },
        {
            name: "chemistry",
            proficiency: 85,
            years: 10,
        },
        {
            name: "physics",
            proficiency: 85,
            years: 10,
        },
        {
            name: "astronomy",
            proficiency: 85,
            years: 10,
        },
        {
            name: "geology",
            proficiency: 85,
            years: 10,
        },
        {
            name: "environmental science",
            proficiency: 85,
            years: 10,
        },
        {
            name: "ecology",
            proficiency: 85,
            years: 10,
        },
        {
            name: "botany",
            proficiency: 85,
            years: 10,
        },
        {
            name: "zoology",
            proficiency: 85,
            years: 10,
        },
        {
            name: "meteorology",
            proficiency: 85,
            years: 10,
        },
        {
            name: "climatology",
            proficiency: 85,
            years: 10,
        },
        {
            name: "genetics",
            proficiency: 85,
            years: 10,
        },
        {
            name: "microbiology",
            proficiency: 85,
            years: 10,
        },
        {
            name: "anatomy",
            proficiency: 85,
            years: 10,
        },
        {
            name: "physiology",
            proficiency: 85,
            years: 10,
        },
        {
            name: "biochemistry",
            proficiency: 85,
            years: 10,
        },
        {
            name: "neuroscience",
            proficiency: 85,
            years: 10,
        },
        {
            name: "pharmacology",
            proficiency: 85,
            years: 10,
        },
        {
            name: "research",
            proficiency: 85,
            years: 10,
        },
        {
            name: "data analysis",
            proficiency: 85,
            years: 10,
        },
        {
            name: "laboratory techniques",
            proficiency: 85,
            years: 10,
        },
        {
            name: "scientific method",
            proficiency: 85,
            years: 10,
        },
        {
            name: "hypothesis testing",
            proficiency: 85,
            years: 10,
        },
        {
            name: "experimental design",
            proficiency: 85,
            years: 10,
        },
        {
            name: "statistical analysis",
            proficiency: 85,
            years: 10,
        },
    ],
    description: "Knowledgeable in various scientific fields, with a passion for research and data analysis.",
};

const Gardening: Skill = {
    name: "Gardening",
    proficiency: 80,
    years: 10,
    keys: [
        "gardening",
        "horticulture",
        "plant care",
        "soil management",
        "plant propagation",
        "pruning",
        "fertilization",
        "pest control",
        "irrigation",
        "composting",
        "garden design",
        "sustainable gardening",
        "hydroponics",
        "aquaponics",
        "aeroponics",
    ],
    subSkills: [
        {
            name: "plant care",
            proficiency: 80,
            years: 10,
        },
        {
            name: "soil management",
            proficiency: 80,
            years: 10,
        },
        {
            name: "plant propagation",
            proficiency: 80,
            years: 10,
        },
        {
            name: "pruning",
            proficiency: 80,
            years: 10,
        },
        {
            name: "fertilization",
            proficiency: 80,
            years: 10,
        },
        {
            name: "pest control",
            proficiency: 80,
            years: 10,
        },
        {
            name: "irrigation",
            proficiency: 80,
            years: 10,
        },
        {
            name: "composting",
            proficiency: 80,
            years: 10,
        },
        {
            name: "garden design",
            proficiency: 80,
            years: 10,
        },
        {
            name: "sustainable gardening",
            proficiency: 80,
            years: 10,
        },
        {
            name: "hydroponics",
            proficiency: 80,
            years: 10,
        },
        {
            name: "aquaponics",
            proficiency: 80,
            years: 10,
        },
        {
            name: "aeroponics",
            proficiency: 80,
            years: 10,
        },
    ],
    description: "Experienced in gardening and horticulture, with a focus on sustainable practices.",
};

const DeafCulture: Skill = {
    name: "Deaf Culture",
    proficiency: 60,
    years: 2,
    keys: [
        "deaf culture",
        "asl",
        "sign language",
        "accessibility",
        "deaf awareness",
        "deaf history",
        "audism",
    ],
    subSkills: [
        {
            name: "deaf culture",
            proficiency: 60,
            years: 2,
        },
        {
            name: "deaf history",
            proficiency: 60,
            years: 2,
        },
        {
            name: "accessibility",
            proficiency: 60,
            years: 2,
        },
        {
            name: "deaf experience",
            proficiency: 60,
            years: 2,
        },
        {
            name: "audism",
            proficiency: 60,
            years: 2,
        },
    ],
    description: "Knowledgeable about Deaf culture and community.",
};

const DisabilityJustice: Skill = { 
    name: "Disability Justice",
    proficiency: 60,
    years: 2,
    keys: [
        "disability justice",
        "accessibility",
        "inclusion",
        "disability rights",
        "ableism",
        "intersectionality",
        "social justice",
        "equity",
    ],
    subSkills: [
        {
            name: "accessibility",
            proficiency: 60,
            years: 2,
        },
        {
            name: "inclusion",
            proficiency: 60,
            years: 2,
        },
        {
            name: "disability rights",
            proficiency: 60,
            years: 2,
        },
        {
            name: "ableism",
            proficiency: 60,
            years: 2,
        },
        {
            name: "intersectionality",
            proficiency: 60,
            years: 2,
        },
        {
            name: "social justice",
            proficiency: 60,
            years: 2,
        },
        {
            name: "equity",
            proficiency: 60,
            years: 2,
        },
    ],
    description: "Knowledgeable about disability justice and advocacy.",
};

const Antiracism: Skill = {
    name: "Antiracism",
    proficiency: 60,
    years: 2,
    keys: [
        "antiracism",
        "racial justice",
        "equity",
        "inclusion",
        "diversity",
        "anti-oppression",
        "social justice",
        "intersectionality",
        "reparations",
        "harm reduction",
        "restorative justice",
        "anti-racism",
    ],
    subSkills: [
        {
            name: "restorative justice",
            proficiency: 60,
            years: 2,
        },
        {
            name: "reparations",
            proficiency: 60,
            years: 2,
        },
        {
            name: "harm reduction",
            proficiency: 60,
            years: 2,
        },
        {
            name: "intersectionality",
            proficiency: 60,
            years: 2,
        },
    ],
    description: "Knowledgeable about antiracism and advocacy for racial justice.",
};

const MentalHealth: Skill = {
    name: "Mental Health",
    proficiency: 60,
    years: 2,
    keys: [
        "mental health",
        "wellness",
        "self-care",
        "therapy",
        "mindfulness",
        "stress management",
        "emotional intelligence",
        "resilience",
        "mental illness awareness",
    ],
    subSkills: [
        {
            name: "self-care",
            proficiency: 60,
            years: 2,
        },
        {
            name: "therapy",
            proficiency: 60,
            years: 2,
        },
        {
            name: "mindfulness",
            proficiency: 60,
            years: 2,
        },
        {
            name: "stress management",
            proficiency: 60,
            years: 2,
        },
        {
            name: "emotional intelligence",
            proficiency: 60,
            years: 2,
        },
        {
            name: "resilience",
            proficiency: 60,
            years: 2,
        },
        {
            name: "mental illness awareness",
            proficiency: 60,
            years: 2,
        },
    ],
    description: "Knowledgeable about mental health and wellness practices.",
};

const Neurodiversity: Skill = {
    name: "Neurodiversity",
    proficiency: 60,
    years: 2,
    keys: [
        "neurodiversity",
        "autism",
        "ADHD",
        "dyslexia",
        "neurodivergent",
        "neurotypical",
        "inclusion",
        "diversity",
        "accessibility",
        "social justice",
        "equity",
    ],
    subSkills: [
        {
            name: "autism",
            proficiency: 60,
            years: 2,
        },
        {
            name: "ADHD",
            proficiency: 60,
            years: 2,
        },
        {
            name: "dyslexia",
            proficiency: 60,
            years: 2,
        },
    ],
    description: "Knowledgeable about neurodiversity and advocacy for neurodivergent individuals.",
};

const lgbtqia: Skill = {
    name: "LGBTQIA2S+",
    proficiency: 60,
    years: 2,
    keys: [
        "lgbtqia",
        "queer",
        "gender theory",
        "sexual orientation",
        "sex positive",
        "inclusion",
        "diversity",
        "social justice",
        "equity",
        "intersectionality",
        "ballroom",
        "drag",
        "pride",
        "queer history",
        "trans",
        "nonbinary",
    ],
    subSkills: [
        {
            name: "queer history",
            proficiency: 60,
            years: 2,
        },
    ],
    description: "Knowledgeable about LGBTQIA2S+ issues and advocacy.",
};

const AntiColonialism: Skill = {
    name: "Anti-Colonialism",
    proficiency: 60,
    years: 2,
    keys: [
        "anti-colonialism",
        "decolonization",
        "indigenous rights",
        "colonialism",
        "social justice",
        "equity",
        "intersectionality",
        "land sovereignty",
        "cultural preservation",
        "reparations",
        "anti-oppression",
    ],
    subSkills: [
        {
            name: "decolonization",
            proficiency: 60,
            years: 2,
        },
        {
            name: "indigenous rights",
            proficiency: 60,
            years: 2,
        },
        {
            name: "land sovereignty",
            proficiency: 60,
            years: 2,
        },
        {
            name: "cultural preservation",
            proficiency: 60,
            years: 2,
        },
        {
            name: "reparations",
            proficiency: 60,
            years: 2,
        },
    ],
    description: "Knowledgeable about anti-colonialism and advocacy for indigenous rights.",
};

const InterdependentRelationships: Skill = {
    name: "Interdependent Relationships",
    proficiency: 60,
    years: 2,
    keys: [
        "interdependent relationships",
        "interdependence",
        "collaboration",
        "community",
        "mutual aid",
        "solidarity",
        "collectivism",
        "social justice",
        "equity",
        "intersectionality",
        "cooperation",
        "partnership",
        "teamwork",
        "relationship building",
        "conflict resolution",
        "communication",
    ],
    subSkills: [
        {
            name: "mutual aid",
            proficiency: 60,
            years: 2,
        },
        {
            name: "collectivism",
            proficiency: 60,
            years: 2,
        },
        {
            name: "relationship building",
            proficiency: 60,
            years: 2,
        },
        {
            name: "conflict resolution",
            proficiency: 60,
            years: 2,
        },  
    ],
    description: "Knowledgeable about interdependent relationships and community building.",
};

const Philosophy: Skill = {
    name: "Philosophy",
    proficiency: 70,
    years: 5,
    keys: [
        "philosophy",
        "ethics",
        "logic",
        "metaphysics",
        "epistemology",
        "aesthetics",
        "existentialism",
        "phenomenology",
        "stoicism",
        "utilitarianism",
        "virtue ethics",
        "social and political philosophy",
        "philosophical inquiry",
        "critical thinking",
        "philosophical debate",
        "philosophical writing",
    ],
    subSkills: [
        {
            name: "ethics",
            proficiency: 70,
            years: 5,
        },
        {
            name: "logic",
            proficiency: 70,
            years: 5,
        },
        {
            name: "metaphysics",
            proficiency: 70,
            years: 5,
        },
        {
            name: "epistemology",
            proficiency: 70,
            years: 5,
        },
        {
            name: "aesthetics",
            proficiency: 70,
            years: 5,
        },
        {
            name: "existentialism",
            proficiency: 70,
            years: 5,
        },
        {
            name: "phenomenology",
            proficiency: 70,
            years: 5, 
        },    
        {
            name: "stoicism",
            proficiency: 70,
            years: 5,
        },
        {
            name: "utilitarianism",
            proficiency: 70,
            years: 5,
        },
        {
            name: "virtue ethics",
            proficiency: 70,
            years: 5,
        },
        {
            name: "social and political philosophy",
            proficiency: 70,
            years: 5,
        },
    ],
    description: "Knowledgeable in various philosophical fields and critical thinking.",
};

export const LanguagesAndMore: Group = {
    name: "languagesandmore",
    label: "Languages",
    title: "Languages and More",
    description: "My spoken languages and skills beyond the software realm which give a human touch to the work I do",
    skills: [
    ],
};