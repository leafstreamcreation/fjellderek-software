import { Group, Skill } from "./types";

const Storybook: Skill = {
    name: "Storybook",
    years: 1,
    proficiency: 10,
    keys: [
        "component",
        "documentation",
        "ui",
        "ux",
        "vue",
        "react",
    ],
    icon: "storybook",
    description: "a UI component workshop with generated component documentation",
    url: "https://storybook.js.org",
};

const Figma: Skill = {
    name: "Figma",
    years: 2,
    proficiency: 8,
    keys: [
        "ui",
        "ux"
    ],
    icon: "figma",
    description: "a vector graphics editor and prototyping tool",
    url: "https://www.figma.com",
};

const MaterialDesign: Skill = {
    name: "Material Design",
    years: 2,
    proficiency: 8,
    keys: [
        "ui",
        "ux",
    ],
    icon: "material-design",
    description: "a design system created by Google",
    url: "https://material.io/design",
};

const AppleHIG: Skill = {
    name: "Apple HIG",
    years: 2,
    proficiency: 8,
    keys: [
        "ui",
        "ux",
    ],
    icon: "apple-hig",
    description: "Apple's Human Interface Guidelines for designing user interfaces",
    url: "https://developer.apple.com/design/resources/",
};

const DarkUI: Skill = {
    name: "Dark UI",
    years: 1,
    proficiency: 9,
    keys: [
        "ui",
        "ux",
    ],
    description: "designing user interfaces with a dark color scheme",
    url: "https://www.toptal.com/designers/ui/dark-ui-design",
};

const ColorContrast: Skill = {
    name: "Color Contrast",
    years: 1,
    proficiency: 9,
    keys: [
        "ui",
        "ux",
    ],
    icon: "color-contrast",
    description: "ensuring sufficient contrast between text and background colors for accessibility",
    url: "https://www.w3.org/WAI/standards-guidelines/wcag/",
};

const ColorTheory: Skill = {
    name: "Color Theory",
    years: 1,
    proficiency: 8,
    keys: [
        "ui",
        "ux",
    ],
    description: "the study of how colors interact and how they can be combined to create visually appealing designs",
    url: "https://www.colormatters.com/color-and-design",
};

const Depth: Skill = {
    name: "Depth",
    years: 1,
    proficiency: 8,
    keys: [
        "ui",
        "ux",
    ],
    description: "creating a sense of depth in user interfaces through techniques like shadows and layering",
    url: "https://uxdesign.cc/understanding-depth-in-ui-design-7f3b2a4c5b1e",
};

const SemanticColors: Skill = {
    name: "Semantic Colors",
    years: 1,
    proficiency: 8,
    keys: [
        "ui",
        "ux",
    ],
    description: "using colors that have specific meanings or associations in user interfaces",
    url: "https://uxdesign.cc/semantic-color-in-ui-design-8f4b2a4c5b1e",
};

const PalletteApp: Skill = {
    name: "Pallette App",
    years: 1,
    proficiency: 9,
    keys: [
        "ui",
        "ux",
    ],
    description: "a tool for creating and managing color palettes for user interfaces",
    url: "https://www.bairesdev.com/tools/color-palette-app/",
};

const EvaDesign: Skill = {
    name: "Eva Design",
    years: 1,
    proficiency: 8,
    keys: [
        "ui",
        "ux",
    ],
    description: "a design system and UI kit for creating consistent and beautiful user interfaces",
    url: "https://colors.eva.design",
};

const ResponsiveDesign: Skill = {
    name: "Responsive Design",
    years: 2,
    proficiency: 9,
    keys: [
        "ui",
        "ux",
    ],
    description: "designing user interfaces that adapt to different screen sizes and devices",
    url: "https://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/",
};

const RTL: Skill = {
    name: "RTL",
    years: 1,
    proficiency: 8,
    keys: [
        "ui",
        "ux",
    ],
    description: "designing user interfaces that support right-to-left languages",
    url: "https://www.w3.org/International/questions/qa-html-rtl",
};

const ComponentFeedback: Skill = {
    name: "Component Feedback",
    years: 1,
    proficiency: 9,
    keys: [
        "ui",
        "ux",
    ],
    description: "providing feedback to users when they interact with UI components",
    url: "https://givegoodux.com/feedback-5-principles-interaction-design-supercharge-ui-5-5/",
};

const VueI18n: Skill = {
    name: "Vue I18n",
    years: 3,
    proficiency: 50,
    keys: [
        "vue",
        "i18n",
        "internationalization",
    ],
    icon: "vue-i18n",
    description: "internationalization library",
    url: "https://vue-i18n.intlify.dev",
};

const A11y: Skill = {
    name: "A11y",
    years: 5,
    proficiency: 80,
    keys: [
        "accessibility",
        "a11y",
    ],
    icon: "eye",
    description: "Ensuring web content is accessible to all users, including those with disabilities",
    url: "https://www.a11yproject.com",
};

const I18n: Skill = {
    name: "I18n",
    years: 3,
    proficiency: 50,
    keys: [
        "internationalization",
        "i18n",
    ],
    icon: "globe",
    description: "Preparing software for localization into multiple languages and regions",
    url: "https://www.w3.org/International/questions/qa-i18n",
};

const Aria: Skill = {
    name: "Aria",
    years: 4,
    proficiency: 70,
    keys: [
        "aria",
        "accessibility",
        "a11y",
    ],
    icon: "aria",
    description: "Accessible Rich Internet Applications for enhancing the accessibility of web content",
    url: "https://www.w3.org/TR/wai-aria-1.2/",
};

const MobileFirst: Skill = {
    name: "Mobile First",
    years: 2,
    proficiency: 9,
    keys: [
        "ui",
    ],
    description: "designing user interfaces with a mobile-first approach, prioritizing mobile devices",
    url: "https://www.smashingmagazine.com/2018/02/mobile-first-responsive-web-design/",
};

export const AccessDesign: Group = {
    name: "accessdesign",
    label: "Accessibility & UX",
    title: "Accessibility & UX",
    description: "Crafting intuitive, beautiful, and responsive user interfaces for every human",
    skills: [
        Storybook,
        Figma,
        MaterialDesign,
        AppleHIG,
        DarkUI,
        ColorContrast,
        ColorTheory,
        Depth,
        SemanticColors,
        PalletteApp,
        EvaDesign,
        ResponsiveDesign,
        RTL,
        ComponentFeedback,
        VueI18n,
        A11y,
        I18n,
        Aria,
        MobileFirst,
    ],
    featuredFilters: [
        {
            name: "accessibility",
            label: "Accessibility",
        },
        {
            name: "i18n",
            label: "I18n",
        },
        {
            name: "ux",
            label: "UX",
        },
        {
            name: "vue",
            label: "Vue.js",
            icon: "vue",
        },
        {
            name: "react",
            label: "React.js",
            icon: "react",
        },
    ],
};