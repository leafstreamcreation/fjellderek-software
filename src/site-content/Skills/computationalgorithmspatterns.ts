import { Group, Skill } from "./types";

const WebProtocols: Skill = {
    name: "Web Protocols",
    years: 5,
    proficiency: 75,
    keys: [
        "protocols",
        "HTTP",
        "HTTPS",
        "TCP/IP",
        "UDP",
        "FTP",
        "SMTP",
        "DNS",
        "SSH",
        "WebSocket",
        "programming pattern",
    ],
    subSkills: [
        {
            name: "HTTP",
            years: 5,
            proficiency: 75,
        },
        {
            name: "HTTPS",
            years: 5,
            proficiency: 75,
        },
        {
            name: "TCP/IP",
            years: 5,
            proficiency: 75,
        },
        {
            name: "UDP",
            years: 5,
            proficiency: 75,
        },
        {
            name: "FTP",
            years: 5,
            proficiency: 75,
        },
        {
            name: "SMTP",
            years: 5,
            proficiency: 75,
        },
        {
            name: "DNS",
            years: 5,
            proficiency: 75,
        },
        {
            name: "SSH",
            years: 5,
            proficiency: 75,
        },
        {
            name: "WebSocket",
            years: 5,
            proficiency: 75,
        }
    ],
};

const ProgrammingPatterns: Skill = {   
    name: "Programming Patterns",
    years: 5,
    proficiency: 75,
    keys: [
        "programming patterns",
        "design patterns",
        "creational patterns",
        "structural patterns",
        "behavioral patterns",
        "singleton",
        "factory",
        "observer",
        "iterator",
        "wrapper",
        "delegation",
        "dependency injection",
        "module",
        "mvc",
        "model view controller",
        "object oriented programming",
        "prototype",
        "lock",
        "strategy",
    ],
    subSkills: [
        {
            name: "Singleton",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Factory",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Observer",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Prototype",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Iterator",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Wrapper",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Delegation",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Dependency Injection",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Module",
            years: 5,
            proficiency: 75,
        },
        {
            name: "MVC",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Object Oriented Programming",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Lock",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Strategy",
            years: 5,
            proficiency: 75,
        }
    ], 
};

const ProgrammingLanguages: Skill = {
    name: "Programming Languages",
    years: 5,
    proficiency: 75,
    keys: [
        "programming languages",
        "Python",
        "JavaScript",
        "Java",
        "C++",
        "C#",
        "Swift",
        "TypeScript",
        "Lua",
        "PostScript",
        "C",
        "Objective-C",
        "SQL",
        "Prolog",
        "Lisp",
        "engineering",
    ],
    subSkills: [
        {
            name: "Python",
            years: 5,
            proficiency: 75,
        },
        {
            name: "JavaScript",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Java",
            years: 5,
            proficiency: 75,
        },
        {
            name: "C++",
            years: 5,
            proficiency: 75,
        },
        {
            name: "C#",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Swift",
            years: 5,
            proficiency: 75,
        },
        {
            name: "TypeScript",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Lua",
            years: 5,
            proficiency: 75,
        },
        {
            name: "PostScript",
            years: 5,
            proficiency: 75,
        },
        {
            name: "C",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Objective-C",
            years: 5,
            proficiency: 75,
        },
        {
            name: "SQL",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Prolog",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Lisp",
            years: 5,
            proficiency: 75,
        }
    ],
};

const CodeCompilation: Skill = {
    name: "Code Compilation",
    years: 5,
    proficiency: 75,
    keys: [
        "code compilation",
        "compilers",
        "intermediate representation",
        "syntax analysis",
        "semantic analysis",
        "code optimization",
        "code generation",
        "linking",
        "assembly language",
        "machine code",
        "source code",
        "compiler design",
        "interpreters",
        "engineering",
    ],
    subSkills: [
        {
            name: "Linking",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Syntax Analysis",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Semantic Analysis",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Assembly Language",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Compiler Design",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Interpreted Languages",
            years: 5,
            proficiency: 75,
        }
    ],
};

const ComputerAchitecture: Skill = {
    name: "Computer Architecture",
    years: 5,
    proficiency: 75,
    keys: [
        "computer architecture",
        "memory hierarchy",
        "cache",
        "pipelining",
        "instruction set architecture",
        "ARM",
        "x86",
        "RISC",
        "CISC",
        "hardware",
        "parallel processing",
        "multithreading",
        "input/output systems",
        "bus architecture",
        "embedded systems",
        "digital logic design",
        "engineering",
    ],
    subSkills: [
        {
            name: "ARM",
            years: 5,
            proficiency: 75,
        },
        {
            name: "x86",
            years: 5,
            proficiency: 75,
        },
        {
            name: "pipelining",
            years: 5,
            proficiency: 75,
        },
        {
            name: "cache",
            years: 5,
            proficiency: 75,
        },
        {
            name: "memory hierarchy",
            years: 5,
            proficiency: 75,
        },
        {
            name: "parallel processing",
            years: 5,
            proficiency: 75,
        },
        {
            name: "input/output systems",
            years: 5,
            proficiency: 75,
        },
        {
            name: "bus architecture",
            years: 5,
            proficiency: 75,
        },
        {
            name: "digital logic design",
            years: 5,
            proficiency: 75,
        },
        {
            name: "embedded systems",
            years: 5,
            proficiency: 75,
        },
    ],
    description: "Understanding the design and organization of computer systems, including hardware and software interactions",
    url: "https://en.wikipedia.org/wiki/Computer_architecture",
};

const AlgorithmAnalysisTechniques: Skill = {
    name: "Algorithm Analysis Techniques",
    years: 5,
    proficiency: 75,
    keys: [
        "algorithm analysis",
        "big O notation",
        "amortized analysis",
        "time complexity",
        "space complexity",
        "worst-case analysis",
        "best-case analysis",
        "average-case analysis",
        "asymptotic analysis",
        "performance analysis",
        "complexity theory",
        "algorithm efficiency",
        "algorithmic complexity",
        "computational complexity",
    ],
    subSkills: [
        {
            name: "Big O Notation",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Amortized Analysis",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Time Complexity",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Space Complexity",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Worst-Case Analysis",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Best-Case Analysis",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Average-Case Analysis",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Asymptotic Analysis",
            years: 5,
            proficiency: 75,
        },
    ],
    description: "Understanding and applying various algorithm analysis techniques to evaluate performance",
    url: "https://en.wikipedia.org/wiki/Algorithm_analysis",
};

const RandomNumberGenerationAlgorithms: Skill = {
    name: "Random Number Generation Algorithms",
    years: 5,
    proficiency: 75,
    keys: [
        "random number generation",
        "Mersenne Twister",
        "Linear Congruential Generator",
        "pseudo-random numbers",
        "true random numbers",
        "randomness tests",
        "seed generation",
        "random sampling",
    ],
    subSkills: [
        {
            name: "Mersenne Twister",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Linear Congruential Generator",
            years: 5,
            proficiency: 75,
        },
    ],
    description: "Understanding and implementing various random number generation algorithms for simulations and sampling",
    url: "https://en.wikipedia.org/wiki/Random_number_generation",
};

const ComputationalGeometryAlgorithms: Skill = {
    name: "Computational Geometry Algorithms",
    years: 5,
    proficiency: 75,
    keys: [
        "computational geometry",
        "convex hull",
        "line intersection",
        "polygon triangulation",
        "point in polygon",
        "closest pair of points",
        "convex polygon",
        "geometric algorithms",
        "geometric data structures",
        "sweep line algorithms",
        "divide and conquer",
        "geometric transformations",
        "geometric queries",
        "geometric intersections",
        "geometric proximity",
        "geometric optimization",
    ],
    subSkills: [
        {
            name: "Convex Hull",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Line Intersection",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Polygon Triangulation",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Point in Polygon",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Closest Pair of Points",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Geometric Transformations",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Geometric Intersections",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Geometric Proximity",
            years: 5,
            proficiency: 75,
        },
    ],
    description: "Understanding and implementing various computational geometry algorithms to solve geometric problems",
    url: "https://en.wikipedia.org/wiki/Computational_geometry",
};

const StringAlgorithms: Skill = {
    name: "String Algorithms",
    years: 5,
    proficiency: 75,
    keys: [
        "string algorithms",
        "pattern matching",
        "substring search",
        "string manipulation",
        "KMP algorithm",
        "Rabin-Karp algorithm",
        "Levenshtein distance",
        "Hamming distance",
        "Longest Common Subsequence (LCS)",
        "Longest Palindromic Substring",
        "Z algorithm",
        "Boyer-Moore algorithm",
    ],
    subSkills: [
        {
            name: "KMP Algorithm",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Rabin-Karp Algorithm",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Levenshtein Distance",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Hamming Distance",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Longest Common Subsequence (LCS)",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Longest Palindromic Substring",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Z Algorithm",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Boyer-Moore Algorithm",
            years: 5,
            proficiency: 75,
        },
    ],
    description: "Understanding and implementing various string algorithms for efficient string processing",
    url: "https://en.wikipedia.org/wiki/String_algorithm",
};

const CryptographyAlgorithms: Skill = {
    name: "Cryptography Algorithms",
    years: 5,
    proficiency: 75,
    keys: [
        "cryptography",
        "encryption",
        "decryption",
        "hashing",
        "symmetric encryption",
        "asymmetric encryption",
        "AES",
        "RSA",
        "SHA-256",
        "SHA-512",
        "MD5",
        "public key cryptography",
        "private key cryptography",
        "key exchange algorithms",
        "Diffie-Hellman",
        "Elliptic Curve Cryptography (ECC)",
        "nonce",
    ],
    subSkills: [
        {
            name: "Symmetric Encryption",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Asymmetric Encryption",
            years: 5,
            proficiency: 75,
        },
        {
            name: "public key cryptography",
            years: 5,
            proficiency: 75,
        },
        {
            name: "private key cryptography",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Diffie-Hellman",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Key Exchange Algorithms",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Elliptic Curve Cryptography (ECC)",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Nonce",
            years: 5,
            proficiency: 75,
        },
    ],
    description: "Understanding and implementing various cryptography algorithms to secure data",
    url: "https://en.wikipedia.org/wiki/Cryptography",
};

const OptimizationAlgorithms: Skill = {
    name: "Optimization Algorithms",
    years: 5,
    proficiency: 75,
    keys: [
        "optimization algorithms",
        "genetic algorithms",
        "simulated annealing",
        "hill climbing",
        "particle swarm optimization",
        "ant colony optimization",
        "gradient descent",
        "stochastic gradient descent",
        "dynamic programming",
        "linear programming",
    ],
    subSkills: [
        {
            name: "Genetic Algorithms",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Simulated Annealing",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Dynamic Programming",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Linear Programming",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Gradient Descent",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Stochastic Gradient Descent",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Hill Climbing",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Particle Swarm Optimization",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Ant Colony Optimization",
            years: 5,
            proficiency: 75,
        },
    ],
};

const MachineLearningAlgorithms: Skill = {
    name: "Machine Learning Algorithms",
    years: 5,
    proficiency: 75,
    keys: [
        "machine learning",
        "supervised learning",
        "unsupervised learning",
        "reinforcement learning",
        "classification",
        "regression",
        "clustering",
        "neural networks",
        "decision trees",
        "support vector machines",
        "k-means",
        "random forests",
        "gradient boosting",
        "gradient descent",
        "backpropagation",
        "deep learning",
        "natural language processing",
        "computer vision",
    ],
    subSkills: [
        {
            name: "Supervised Learning",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Unsupervised Learning",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Reinforcement Learning",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Neural Networks",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Gradient Descent",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Backpropagation",
            years: 5,
            proficiency: 75,
        },
    ],
    description: "Understanding and implementing various machine learning algorithms to solve problems",
    url: "https://en.wikipedia.org/wiki/Machine_learning",
};

const GraphAlgorithms: Skill = {
    name: "Graph Algorithms",
    years: 5,
    proficiency: 90,
    keys: [
        "graph algorithms",
        "Dijkstra's algorithm",
        "A* search",
        "breadth-first search",
        "depth-first search",
        "graph traversal",
        "shortest path",
        "minimum spanning tree",
        "prim's algorithm",
        "kruskal's algorithm",
    ],
    subSkills: [
        {
            name: "Dijkstra's Algorithm",
            years: 5,
            proficiency: 90,
        },
        {
            name: "A* Search",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Breadth-First Search",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Depth-First Search",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Minimum Spanning Tree",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Prim's Algorithm",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Kruskal's Algorithm",
            years: 5,
            proficiency: 90,
        },
    ],
    description: "Understanding and implementing various graph algorithms to solve problems related to graphs",
    url: "https://en.wikipedia.org/wiki/Graph_algorithm",
};

const Recursion: Skill = {
    name: "Recursion",
    years: 5,
    proficiency: 90,
    keys: [
        "recursion",
        "recursive algorithms",
        "base case",
        "recursive case",
        "divide and conquer",
        "backtracking",
        "tree traversal",
        "graph traversal",
        "programming pattern"
    ],
    subSkills: [
        {
            name: "Divide and Conquer",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Backtracking",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Tree Traversal",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Graph Traversal",
            years: 5,
            proficiency: 90,
        },
    ],
    description: "Understanding and implementing recursive algorithms to solve problems",
    url: "https://en.wikipedia.org/wiki/Recursion_(computer_science)",
};

const DataStructures: Skill = {
    name: "Data Structures",
    years: 5,
    proficiency: 90,
    keys: [
        "data structures",
        "arrays",
        "linked lists",
        "trees",
        "graphs",
        "hash tables",
        "stacks",
        "queues",
        "heaps",
        "binary trees",
        "binary search trees",
        "AVL trees",
        "red-black trees",
        "B-trees",
        "engineering",
        "algorithm"
    ],
    subSkills: [
        {
            name: "Arrays",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Linked Lists",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Trees",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Graphs",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Hash Tables",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Stacks",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Queues",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Heaps",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Binary Trees",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Binary Search Trees",
            years: 5,
            proficiency: 90,
        },
        {
            name: "AVL Trees",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Red-Black Trees",
            years: 5,
            proficiency: 90,
        },
        {
            name: "B-Trees",
            years: 5,
            proficiency: 90,
        },
    ],
    description: "Understanding and implementing various data structures to organize and manage data efficiently",
    url: "https://en.wikipedia.org/wiki/Data_structure",
};

const CompressionAlgorithms: Skill = {
    name: "Compression Algorithms",
    years: 5,
    proficiency: 90,
    keys: [
        "compression algorithms",
        "data compression",
        "lossless compression",
        "lossy compression",
        "Huffman coding",
        "Lempel-Ziv-Welch (LZW)",
        "Run-Length Encoding (RLE)",
        "JPEG",
        "PNG",
        "MP3",
        "AAC",
        "video compression",
        "audio compression",
    ],
    subSkills: [
        {
            name: "Huffman Coding",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Lempel-Ziv-Welch (LZW)",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Run-Length Encoding (RLE)",
            years: 5,
            proficiency: 90,
        },
        {
            name: "JPEG",
            years: 5,
            proficiency: 90,
        },
        {
            name: "PNG",
            years: 5,
            proficiency: 90,
        },
        {
            name: "MP3",
            years: 5,
            proficiency: 90,
        },
        {
            name: "AAC",
            years: 5,
            proficiency: 90,
        },
    ],
    description: "Understanding and implementing various compression algorithms to reduce data size",
    url: "https://en.wikipedia.org/wiki/Data_compression",
};

const SearchingAlgorithms: Skill = {
    name: "Searching Algorithms",
    years: 5,
    proficiency: 90,
    keys: [
        "searching algorithms",
        "linear search",
        "binary search",
        "depth-first search",
        "breadth-first search",
        "A* search",
        "Dijkstra's algorithm",
        "graph search",
        "tree search",
    ],
    subSkills: [
        {
            name: "Linear Search",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Binary Search",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Depth-First Search",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Breadth-First Search",
            years: 5,
            proficiency: 90,
        },
        {
            name: "A* Search",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Dijkstra's Algorithm",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Graph Search",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Tree Search",
            years: 5,
            proficiency: 90,
        },
    ],
    description: "Understanding and implementing various searching algorithms to find data efficiently",
    url: "https://en.wikipedia.org/wiki/Search_algorithm",
};

const HashingAlgorithms: Skill = {
    name: "Hashing Algorithms",
    years: 5,
    proficiency: 90,
    keys: [
        "hashing algorithms",
        "hash functions",
        "hash tables",
        "cryptographic hash functions",
        "MD5",
        "SHA-1",
        "SHA-256",
        "SHA-512",
        "hash collisions",
    ],
    subSkills: [
        {
            name: "MD5",
            years: 5,
            proficiency: 90,
        },
        {
            name: "SHA-1",
            years: 5,
            proficiency: 90,
        },
        {
            name: "SHA-256",
            years: 5,
            proficiency: 90,
        },
        {
            name: "SHA-512",
            years: 5,
            proficiency: 90,
        },
    ],
    description: "Understanding and implementing various hashing algorithms for data integrity and security",
    url: "https://en.wikipedia.org/wiki/Hash_function",
};

const BooleanLogic: Skill = {
    name: "Boolean Logic",
    years: 5,
    proficiency: 90,
    keys: [
        "boolean algebra",
        "logic gates",
        "truth tables",
        "logical operators",
        "conditional statements",
        "logical expressions",
        "engineering",
    ],
    subSkills: [
        {
            name: "Truth Tables",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Logic Gates",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Logical Operators",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Conditional Statements",
            years: 5,
            proficiency: 90,
        },
    ],
    description: "Understanding and applying boolean logic in programming and problem solving",
    url: "https://en.wikipedia.org/wiki/Boolean_algebra",
};

const Mathematics: Skill = {
    name: "Mathematics",
    years: 5,
    proficiency: 85,
    keys: [
        "algebra",
        "calculus",
        "statistics",
        "probability",
        "discrete mathematics",
        "linear algebra",
        "differential equations",
        "numerical methods",
        "combinatorics",
        "graph theory",
        "optimization",
        "trigonometry",
        "cryptography",
        "machine learning",
        "data analysis",
        "numerical analysis",
        "mathematical modeling",
        "mathematical logic",
        "set theory",
        "number theory",
        "vector algebra",
        "root finding",
        "numerical integration",
        "logarithms",
        "exponents",
        "factorization",
        "prime numbers",
        "complex numbers",
        "real numbers",
        "irrational numbers",
        "rational numbers",
        "integers",
        "natural numbers",
        "whole numbers",
        "absolute value",
        "modular arithmetic",
        "limits",
        "derivatives",
        "integrals",
        "series",
        "sequences",
        "permutations",
        "combinations",
        "binomial theorem",
        "Fibonacci sequence",
        "Pascal's triangle",
        "Pythagorean theorem",
        "Euclidean algorithm",
        "fundamental theorem of calculus",
        "Taylor series",
        "Fourier series",
        "Mclaurin series",
        "Laplace transforms",
        "Z-transform",
        "vector calculus",
        "imaginary numbers",
        "polar coordinates",
        "spherical coordinates",
        "transcendental numbers",
        "engineering",
    ],
    subSkills: [
        {
            name: "Algebra",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Calculus",
            years: 5,
            proficiency: 85,
        },
        {
            name: "Statistics",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Probability",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Discrete Mathematics",
            years: 5,
            proficiency: 85,
        },
        {
            name: "Linear Algebra",
            years: 5,
            proficiency: 85,
        },
        {
            name: "Differential Equations",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Numerical Methods",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Combinatorics",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Graph Theory",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Optimization",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Trigonometry",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Cryptography",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Machine Learning",
            years: 5,
            proficiency: 75,
        },
        {
            name: "Data Analysis",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Numerical Analysis",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Mathematical Modeling",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Mathematical Logic",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Set Theory",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Number Theory",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Vector Algebra",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Root Finding",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Numerical Integration",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Logarithms",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Exponents",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Factorization",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Prime Numbers",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Complex Numbers",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Real Numbers",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Irrational Numbers",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Rational Numbers",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Integers",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Natural Numbers",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Whole Numbers",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Absolute Value",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Modular Arithmetic",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Limits",
            years: 5,
            proficiency: 85,   
        },
        {
            name: "Derivatives",
            years: 5,
            proficiency: 85,
        },
        {
            name: "Integrals",
            years: 5,
            proficiency: 85,
        },
        {
            name: "Series",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Sequences",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Permutations",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Combinations",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Binomial Theorem",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Fibonacci Sequence",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Pascal's Triangle",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Pythagorean Theorem",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Euclidean Algorithm",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Fundamental Theorem of Calculus",
            years: 5,
            proficiency: 85,
        },
        {
            name: "Taylor Series",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Fourier Series",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Mclaurin Series",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Laplace Transforms",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Z-Transform",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Vector Calculus",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Imaginary Numbers",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Polar Coordinates",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Spherical Coordinates",
            years: 5,
            proficiency: 80,
        },
        {
            name: "Transcendental Numbers",
            years: 5,
            proficiency: 80,
        },
    ],
    description: "Applying mathematical concepts and techniques to solve problems and analyze data",
    url: "https://en.wikipedia.org/wiki/Mathematics",
};

const SortingAlgorithms: Skill = {
    name: "Sorting Algorithms",
    years: 5,
    proficiency: 90,
    keys: [
        "sorting algorithms",
        "bubble sort",
        "selection sort",
        "insertion sort",
        "merge sort",
        "quick sort",
        "heap sort",
        "shell sort",
        "tim sort",
    ],
    subSkills: [
        {
            name: "Bubble Sort",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Selection Sort",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Insertion Sort",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Merge Sort",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Quick Sort",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Heap Sort",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Shell Sort",
            years: 5,
            proficiency: 90,
        },
        {
            name: "Tim Sort",
            years: 5,
            proficiency: 90,
        },
    ],
    description: "Understanding and implementing various sorting algorithms to organize data efficiently",
    url: "https://en.wikipedia.org/wiki/Sorting_algorithm",
};

export const ComputationAlgorithmsPatterns: Group = {
    name: "computationalgorithmspatterns",
    label: "Computation, Algorithms & Patterns",
    title: "Computation, Algorithms & Patterns",
    description: "Driving broad-field innovation with comprehensive engineering knowledge",
    skills: [
        DataStructures,
        SortingAlgorithms,
        SearchingAlgorithms,
        HashingAlgorithms,
        BooleanLogic,
        Mathematics,
        Recursion,
        GraphAlgorithms,
        StringAlgorithms,
        CryptographyAlgorithms,
        OptimizationAlgorithms,
        MachineLearningAlgorithms,
        RandomNumberGenerationAlgorithms,
        ComputationalGeometryAlgorithms,
        CodeCompilation,
        ComputerAchitecture,
        AlgorithmAnalysisTechniques,
        ProgrammingLanguages,
        CompressionAlgorithms,
        WebProtocols,
        ProgrammingPatterns,
    ],
    featuredFilters: [
        {
            name: "algorithm",
            label: "Algorithm",
        },
        {
            name: "engineering",
            label: "Engineering",
        },
        {
            name: "programming pattern",
            label: "Programming Pattern",
        },
    ],
};