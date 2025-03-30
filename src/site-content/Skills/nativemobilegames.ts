import { Group, Skill } from "./types";

const IOs: Skill = {
    name: "iOs",
    years: 3,
    proficiency: 80,
    keys: [
        "iOS", 
        "Swift", 
        "Objective-C",
        "SwiftUI",
        "UIKit",
        "Apple",
        "Cocoa Touch",
        "mobile",
        "mobile development",
    ],
    icon: "ios",
    subSkills: [
        {
            name: "Swift",
            years: 3,
            proficiency: 80,
        },
        {
            name: "Objective-C",
            years: 2,
            proficiency: 70,
        },
        {
            name: "SwiftUI",
            years: 1,
            proficiency: 60,
        },
        {
            name: "UIKit",
            years: 2,
            proficiency: 75,
        }
    ],
    description: "iOS development using Swift and Objective-C",
    url: "https://developer.apple.com/ios/",
};

const Cocoa: Skill = {
    name: "Cocoa",
    years: 2,
    proficiency: 75,
    keys: [
        "Cocoa",
        "Cocoa Touch",
        "macOS",
        "macOS development",
        "desktop",
        "desktop development",
        "appkit",
        "Objective-C",
        "Swift",
    ],
    icon: "macos",
    subSkills: [
        {
            name: "Objective-C",
            years: 2,
            proficiency: 70,
        },
        {
            name: "Swift",
            years: 1,
            proficiency: 60,
        },
        {
            name: "AppKit",
            years: 2,
            proficiency: 75,
        }
    ],
    description: "macOS development using Cocoa",
    url: "https://developer.apple.com/macos/",
};

const Android: Skill = {
    name: "Android",
    years: 2,
    proficiency: 70,
    keys: [
        "Android", 
        "Java", 
        "mobile",
        "mobile development",
    ],
    icon: "android",
    subSkills: [
        {
            name: "Java",
            years: 2,
            proficiency: 70,
        },
    ],
    description: "Android development using Java and Kotlin",
    url: "https://developer.android.com/",
};

const Unity: Skill = {
    name: "Unity",
    years: 1,
    proficiency: 65,
    keys: [
        "Unity", 
        "C#", 
        "game development",
        "mobile games",
        "game engine",
    ],
    icon: "unity",
    subSkills: [
        {
            name: "C#",
            years: 1,
            proficiency: 65,
        },
    ],
    description: "Game development using Unity and C#",
    url: "https://unity.com/",
};

const QT: Skill = {
    name: "QT",
    years: 1,
    proficiency: 60,
    keys: [
        "QT",
        "C++",
        "desktop",
        "desktop development",
        "cross-platform",
        "cross-platform development",
    ],
    icon: "qt",
    subSkills: [
        {
            name: "C++",
            years: 1,
            proficiency: 60,
        },
    ],
    description: "Cross-platform desktop development using QT and C++",
    url: "https://www.qt.io/",
};

const GoogleVR: Skill = {
    name: "GoogleVR",
    years: 1,
    proficiency: 55,
    keys: [
        "GoogleVR",
        "VR",
        "virtual reality",
        "game development",
        "game engine",
        "mobile games",
    ],
    icon: "googlevr",
    subSkills: [
    ],
    description: "Virtual reality development using GoogleVR and Unity",
    url: "https://vr.google.com/",
};


export const NativeMobileGames: Group = {
    name: "nativemobilegames",
    label: "Native/Mobile/Games",
    title: "Native Mobile & Game Development",
    description: "Skills for mobile innovation, supercharged proprietary applications, and AAA game development",
    skills: [
        IOs,
        Cocoa,
        Android,
        Unity,
        QT,
        GoogleVR,
    ],
};