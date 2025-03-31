import { Group, Skill } from "./types";

const AccessControl: Skill = {
    name: "Access Control",
    years: 5,
    proficiency: 70,
    keys: [
        "access",
        "control",
        "permissions",
        "role",
        "rbac",
        "cybersecurity",
    ],
    subSkills: [
        {
            name: "User Authentication",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Role-Based Access Control (RBAC)",
            years: 4,
            proficiency: 70,
        }
    ],
    description: "Managing user permissions and access rights",
    url: "https://www.microsoft.com/en-us/security/business/security-101/what-is-access-control#:~:text=In%20its%20simplest%20form%2C%20access,identify%20and%20authenticate%20a%20user.",
};

const GDPR: Skill = {
    name: "GDPR Compliance",
    years: 3,
    proficiency: 60,
    keys: [
        "gdpr",
        "compliance",
        "data protection",
        "privacy",
    ],
    description: "General Data Protection Regulation compliance for handling user data",
    url: "https://gdpr.eu",
};

const FDA: Skill = {
    name: "FDA Compliance",
    years: 2,
    proficiency: 50,
    keys: [
        "fda",
        "compliance",
        "food and drug administration",
        "regulation",
    ],
    description: "Compliance with FDA regulations for software in the healthcare and food industries",
    url: "https://www.fda.gov/medical-devices/digital-health-center-excellence/software-medical-device-samd",
};

const HIPAA: Skill = {
    name: "HIPAA Compliance",
    years: 3,
    proficiency: 65,
    keys: [
        "hipaa",
        "compliance",
        "health insurance portability and accountability act",
        "privacy",
    ],
    description: "Health Insurance Portability and Accountability Act compliance for handling healthcare data",
    url: "https://www.hhs.gov/hipaa/index.html",
};

const CyberSecurity: Skill = {
    name: "Cybersecurity",
    years: 4,
    proficiency: 70,
    keys: [
        "cybersecurity",
        "security",
        "information security",
        "data security",
    ],
    description: "Protecting systems, networks, and programs from digital attacks",
    url: "https://www.cisa.gov/cybersecurity",
};

const DataPrivacy: Skill = {
    name: "Data Privacy",
    years: 3,
    proficiency: 60,
    keys: [
        "data privacy",
        "privacy",
        "data protection",
        "information privacy",
        "cybersecurity",
        "compliance",
    ],
    description: "Ensuring the proper handling and protection of personal data",
    url: "https://www.privacyinternational.org",
};

const Oauth: Skill = {
    name: "OAuth",
    years: 4,
    proficiency: 70,
    keys: [
        "oauth",
        "authentication",
        "cybersecurity",
    ],
    description: "Open standard for access delegation commonly used for token-based authentication",
    url: "https://oauth.net",
};

const VPN: Skill = {
    name: "VPN",
    years: 3,
    proficiency: 60,
    keys: [
        "vpn",
        "virtual private network",
        "network security",
        "cybersecurity",
    ],
    description: "Virtual Private Network for secure remote access",
    url: "https://usa.kaspersky.com/resource-center/definitions/what-is-a-vpn?srsltid=AfmBOoqNAsGUmw7zIHAYitEKAv1TodluHRtd-Nam8te0VoojcclLPHVy",
};

const Encryption: Skill = {
    name: "Encryption",
    years: 4,
    proficiency: 75,
    keys: [
        "encryption",
        "data security",
        "cryptography",
        "cybersecurity",
    ],
    subSkills: [
        {
            name: "Symmetric Encryption",
            years: 4,
            proficiency: 75,
        },
        {
            name: "Asymmetric Encryption",
            years: 3,
            proficiency: 70,
        },
        {
            name: "Hashing",
            years: 4,
            proficiency: 75,
        },
    ],
    description: "Securing data by converting it into a code to prevent unauthorized access",
    url: "https://www.khanacademy.org/computing/computer-science/cryptography",
};

const WebCrypto: Skill = {
    name: "Web Crypto API",
    years: 3,
    proficiency: 65,
    keys: [
        "web crypto",
        "webcrypto",
        "cryptography",
        "api",
        "cybersecurity",
    ],
    description: "JavaScript API for performing cryptographic operations in web applications",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API",
};

const bcrypt: Skill = {
    name: "bcrypt",
    years: 4,
    proficiency: 70,
    keys: [
        "bcrypt",
        "password hashing",
        "hashing",
        "cybersecurity",
    ],
    description: "Library for hashing passwords securely",
    url: "https://www.npmjs.com/package/bcrypt",
};

const AES: Skill = {
    name: "AES Encryption",
    years: 4,
    proficiency: 75,
    keys: [
        "aes",
        "aes encryption",
        "advanced encryption standard",
        "cryptography",
        "gcm",
        "aes-gcm",
        "256",
        "galois/ctr",
        "galois counter mode",
        "symmetric encryption",
        "symmetric key encryption",
        "cybersecurity",
    ],
    subSkills: [
        {
            name: "AES-GCM-256",
            years: 4,
            proficiency: 75,
        },
    ],
    description: "Advanced Encryption Standard for secure data encryption",
    url: "https://en.wikipedia.org/wiki/Advanced_Encryption_Standard",
};

const MongoDBCSFLE: Skill = {
    name: "MongoDB CSFLE",
    years: 3,
    proficiency: 65,
    keys: [
        "mongodb",
        "csfle",
        "client-side field level encryption",
        "encryption",
        "cybersecurity",
    ],
    description: "Client-Side Field Level Encryption for MongoDB to encrypt data on the client side",
    url: "https://docs.mongodb.com/manual/core/client-side-field-level-encryption/",
};

const JWT: Skill = {
    name: "JWT",
    years: 4,
    proficiency: 70,
    keys: [
        "jwt",
        "json web token",
        "authentication",
        "cybersecurity",
    ],
    description: "JSON Web Token for securely transmitting information between parties as a JSON object",
    url: "https://jwt.io",
};

const SSO: Skill = {
    name: "SSO",
    years: 3,
    proficiency: 65,
    keys: [
        "sso",
        "single sign-on",
        "authentication",
        "identity management",
        "access management",
        "cybersecurity",
    ],
    description: "Single Sign-On for allowing users to authenticate once and gain access to multiple applications",
    url: "https://en.wikipedia.org/wiki/Single_sign-on",
};

const MFA: Skill = {
    name: "MFA",
    years: 3,
    proficiency: 70,
    keys: [
        "mfa",
        "multi-factor authentication",
        "authentication",
        "cybersecurity",
    ],
    description: "Multi-Factor Authentication for adding an extra layer of security to the authentication process",
    url: "https://www.okta.com/identity-101/multi-factor-authentication/",
};

const OKTA: Skill = {
    name: "OKTA",
    years: 2,
    proficiency: 60,
    keys: [
        "okta",
        "identity management",
        "access management",
        "cybersecurity",
        "authentication",
    ],
    description: "Identity and access management service for securing user authentication and authorization",
    url: "https://www.okta.com",
};

const CrowdStrike: Skill = {
    name: "CrowdStrike",
    years: 2,
    proficiency: 60,
    keys: [
        "crowdstrike",
        "endpoint security",
        "cybersecurity",
    ],
    description: "Endpoint security platform for detecting and responding to cyber threats",
    url: "https://www.crowdstrike.com",
};

const SSL: Skill = {
    name: "SSL/TLS",
    years: 4,
    proficiency: 75,
    keys: [
        "ssl",
        "tls",
        "secure sockets layer",
        "transport layer security",
        "encryption",
        "data security",
        "secure communication",
        "cybersecurity",
    ],
    description: "Secure Sockets Layer/Transport Layer Security for securing communication over a computer network",
    url: "https://en.wikipedia.org/wiki/Transport_Layer_Security",
};


export const SecurityCompliance: Group = {
    name: "securitycompliance",
    label: "Cybersecurity & Compliance",
    title: "Cybersecurity & Compliance",
    description: "For secure and reliable applications maintaining the highest regulatory standards",
    skills: [
        AccessControl,
        GDPR,
        FDA,
        HIPAA,
        CyberSecurity,
        DataPrivacy,
        Oauth,
        VPN,
        Encryption,
        WebCrypto,
        bcrypt,
        AES,
        MongoDBCSFLE,
        JWT,
        SSO,
        MFA,
        OKTA,
        CrowdStrike,
        SSL,
    ],
    featuredFilters: [
        {
            name: "cybersecurity",
            label: "Cybersecurity",
        },
        {
            name: "compliance",
            label: "Compliance",
        },
    ]
};