import  { Group, Skill } from './types';

const Vite: Skill = {
    name: "Vite",
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
};

const Webpack: Skill = {
    name: "Webpack",
    years: 6,
    proficiency: 70,
    keys: [
        "build",
        "web",
        "bundler",
    ],
    icon: "webpack",
    url: "https://webpack.js.org",
    description: "a static module bundler for modern JavaScript applications",
};

const Babel: Skill = {
    name: "Babel",
    years: 6,
    proficiency: 70,
    keys: [
        "javascript",
        "transpiler",
        "es6",
        "compiler",
    ],
    icon: "babel",
    url: "https://babeljs.io",
    description: "a JavaScript compiler",
};

const TSC: Skill = {
    name: "TypeScript Compiler",
    years: 6,
    proficiency: 80,
    keys: [
        "typescript",
        "tsc",
        "compiler",
    ],
    icon: "typescript",
    url: "https://www.typescriptlang.org",
    description: "the TypeScript compiler",
};

const ESLint: Skill = {
    name: "ESLint",
    years: 6,
    proficiency: 80,
    keys: [
        "javascript",
        "linter",
        "typescript",
        "code quality",
    ],
    icon: "eslint",
    url: "https://eslint.org",
    description: "a pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript",
};

const Prettier: Skill = {
    name: "Prettier",
    years: 6,
    proficiency: 80,
    keys: [
        "code formatter",
        "javascript",
        "typescript",
        "css",
        "html",
    ],
    icon: "prettier",
    url: "https://prettier.io",
    description: "an opinionated code formatter",
};

const XCode: Skill = {
    name: "Xcode",
    years: 10,
    proficiency: 70,
    keys: [
        "ios",
        "macos",
        "development",
        "ide",
    ],
    icon: "xcode",
    url: "https://developer.apple.com/xcode/",
    description: "an integrated development environment for macOS",
};

const AndroidStudio: Skill = {
    name: "Android Studio",
    years: 5,
    proficiency: 70, 
    keys: [
        "android",
        "development",
        "ide",
    ],
    icon: "androidstudio",
    url: "https://developer.android.com/studio",
    description: "an integrated development environment for Android",
};

const VSCode: Skill = {
    name: "Visual Studio Code",
    years: 6,
    proficiency: 90,
    keys: [
        "code editor",
        "javascript",
        "typescript",
        "development",
        "ide",
    ],
    icon: "vscode",
    url: "https://code.visualstudio.com",
    description: "a source-code editor made by Microsoft",
};

const Vim: Skill = {
    name: "Vim",
    years: 15,
    proficiency: 60,
    keys: [
        "text editor",
        "development",
        "ide",
    ],
    icon: "vim",
    url: "https://www.vim.org",
    description: "a highly configurable text editor",
};

const MacOS: Skill = {
    name: "macOS",
    years: 10,
    proficiency: 90,
    keys: [
        "operating system",
        "development",
        "ide",
    ],
    icon: "macos",
    url: "https://www.apple.com/macos",
    description: "the operating system for Apple's Mac computers",
};

const Windows: Skill = {
    name: "Windows",
    years: 10,
    proficiency: 80,
    keys: [
        "operating system",
        "development",
        "ide",
    ],
    icon: "windows",
    url: "https://www.microsoft.com/windows",
    description: "the operating system for Microsoft's Windows computers",
};

const Linux: Skill = {
    name: "Linux",
    years: 5,
    proficiency: 70,
    keys: [
        "operating system",
        "development",
        "ide",
    ],
    icon: "linux",
    subSkills: [
        {
            name: "Ubuntu",
            years: 5,
            proficiency: 70,
            icon: "ubuntu",
            url: "https://ubuntu.com",
            description: "a popular Linux distribution",
        },
    ],
    url: "https://www.linux.org",
    description: "an open-source operating system",
};

const Homebrew: Skill = {
    name: "Homebrew",
    years: 5,
    proficiency: 70,
    keys: [
        "package manager",
        "macos",
        "linux",
    ],
    icon: "homebrew",
    url: "https://brew.sh",
    description: "the missing package manager for macOS and Linux",
};

const CLIs: Skill = {
    name: "Command Line Interfaces (CLIs)",
    years: 10,
    proficiency: 80,
    keys: [
        "command line",
        "terminal",
        "development",
        "ide",
        "cli",
        "bash",
        "zsh",
    ],
    icon: "cli",
    subSkills: [
        {
            name: "Bash",
            years: 10,
            proficiency: 80,
            icon: "bash",
            url: "https://www.gnu.org/software/bash/",
            description: "a Unix shell and command language",
        },
        {
            name: "Zsh",
            years: 5,
            proficiency: 70,
            icon: "zsh",
            url: "https://www.zsh.org",
            description: "a Unix shell that is an extended version of the Bourne shell (sh)",
        },
        {
            name: "Powershell",
            years: 5,
            proficiency: 70,
            icon: "powershell",
            url: "https://docs.microsoft.com/en-us/powershell/",
            description: "a task automation and configuration management framework from Microsoft, consisting of a command-line shell and associated scripting language",
        }
    ],
    url: "https://en.wikipedia.org/wiki/Command-line_interface",
    description: "a text-based interface for interacting with the operating system",
};

const Pip: Skill = {
    name: "Pip",
    years: 5,
    proficiency: 70,
    keys: [
        "package manager",
        "python",
    ],
    icon: "pip",
    url: "https://pip.pypa.io/en/stable/",
    description: "a package manager for Python",
};

const NPM: Skill = {
    name: "NPM",
    years: 6,
    proficiency: 80,
    keys: [
        "package manager",
        "javascript",
        "node",
    ],
    icon: "npm",
    url: "https://www.npmjs.com",
    description: "a package manager for JavaScript",
};

const yarn: Skill = {
    name: "Yarn",
    years: 5,
    proficiency: 70,
    keys: [
        "package manager",
        "javascript",
        "node",
    ],
    icon: "yarn",
    url: "https://yarnpkg.com",
    description: "a package manager for JavaScript",
};

const Browsers: Skill = {
    name: "Browsers",
    years: 10,
    proficiency: 90,
    keys: [
        "web development",
        "javascript",
        "testing",
    ],
    subSkills: [
        {
            name: "Chrome",
            years: 10,
            proficiency: 90,
            icon: "chrome",
            url: "https://www.google.com/chrome/",
            description: "a web browser developed by Google",
        },
        {
            name: "Firefox",
            years: 5,
            proficiency: 70,
            icon: "firefox",
            url: "https://www.mozilla.org/en-US/firefox/new/",
            description: "a free and open-source web browser developed by Mozilla Foundation",
        },
        {
            name: "Safari",
            years: 5,
            proficiency: 70,
            icon: "safari",
            url: "https://www.apple.com/safari/",
            description: "a web browser developed by Apple Inc.",
        },
        {
            name: "Edge",
            years: 3,
            proficiency: 60,
            icon: "edge",
            url: "https://www.microsoft.com/edge",
            description: "a web browser developed by Microsoft, built on the Chromium engine",
        },
    ],
    description: "software applications used to access information on the World Wide Web",
};



export const Workspaces: Group = {
        name: "workspaces",
        label: "Workspaces",
        title: "Development Workspaces",
        description: "Platforms, IDEs, and development tools I use to work in a broad range of environments",
        skills: [
            Vite,
            Webpack,
            Babel,
            TSC,
            ESLint,
            Prettier,
            XCode,
            AndroidStudio,
            VSCode,
            Vim,
            MacOS,
            Windows,
            Linux,
            Homebrew,
            CLIs,
            Pip,
            NPM,
            yarn,
            Browsers,
        ],
        featuredFilters: [
            "frontend",
            "IDE",
            "OS",
            "package manager",
        ],
    };