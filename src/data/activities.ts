import type { LogitActivity } from "@/types";

export const LOGIT_ACTIVITIES: LogitActivity[] = [
  {
    id: "24",
    type: "study",
    icon: "📚",
    title: 'Started Chapter 8 of "The Rust Programming Language" book',
    details: "Covered 8.1: Storing Lists of Values with Vectors",
    date: new Date(2024, 7, 17), // August 17, 2024
    tags: ["rust", "book", "learning"],
    bookProgress: {
      currentChapter: 8,
      totalChapters: 21,
      current: 8,
      total: 21,
    },
    topics: ["Vectors", "Common Collections"],
    timeSpent: 60, // Estimated time, adjust as needed
  },
  {
    id: "25",
    type: "study",
    icon: "🦀",
    title: "Studied Rust documentation on collections",
    details: "Explored HashMap, Vec, VecDeque, BinaryHeap",
    date: new Date(2024, 7, 17), // August 17, 2024
    tags: ["rust", "documentation", "learning"],
    topics: ["HashMap", "Vec", "VecDeque", "BinaryHeap"],
    timeSpent: 45, // Estimated time, adjust as needed
  },
  {
    id: "26",
    type: "math-academy",
    subtype: "progress",
    icon: "🧮",
    title: "Math Academy Progress",
    details: "Completed 8 lessons including a multistep exercise",
    date: new Date(2024, 7, 17), // August 17, 2024
    tags: ["math", "learning"],
    progress: {
      lessonsCompleted: 8,
      pointsEarned: 80,
      totalXP: 1738, // 1658 + 80
      todayXP: 80,
      dailyGoal: 64,
      currentLevel: "Gold 🏅",
    },
    topics: [
      "Limits",
      "Continuity",
      "Complex Roots",
      "Arithmetic Sequences",
      "Fibonacci Sequences",
      "Quadratic Equations",
    ],
  },
  {
    id: "23",
    type: "study",
    icon: "📚",
    title: 'Completed Chapter 7 of "The Rust Programming Language" book',
    details: "Covered 'use' keyword and separating modules into files",
    date: new Date(2024, 7, 16), // August 16, 2024
    tags: ["rust", "book", "learning"],
    bookProgress: {
      currentChapter: 7,
      totalChapters: 21,
      current: 7,
      total: 21,
    },
    topics: ["use Keyword", "Module Separation"],
    timeSpent: 60, // Estimated time, adjust as needed
  },
  {
    id: "22",
    type: "progress",
    icon: "🦀",
    title: "Completed Rustlings 10_modules exercises",
    details: "43/94 exercises (46% complete)",
    date: new Date(2024, 7, 16), // August 16, 2024
    tags: ["rust", "learning"],
    progress: {
      current: 43,
      total: 94,
    },
    topics: ["Modules", "Code Organization"],
  },
  {
    id: "21",
    type: "math-academy",
    subtype: "progress",
    icon: "🧮",
    title: "Flawless Math Academy session",
    details: "Completed 7 lessons and 1 assessment",
    date: new Date(2024, 7, 16), // August 16, 2024
    tags: ["math", "learning"],
    progress: {
      lessonsCompleted: 7,
      pointsEarned: 72,
      totalXP: 1658, // 1586 + 72
      todayXP: 72,
      dailyGoal: 57,
      currentLevel: "Gold 🏅",
    },
    topics: [
      "Arithmetic Sequences",
      "Infinite Limits",
      "Complex Plane",
      "Complex Number Operations",
      "Data Mean",
      "Recursive Sequences",
    ],
  },
  {
    id: "20",
    type: "math-academy",
    subtype: "achievement",
    icon: "🏆",
    title: "Aced Quiz 10 in Math Academy",
    details: "Scored 18/15 XP on Quiz 10",
    date: new Date(2024, 7, 16), // August 16, 2024
    tags: ["math", "achievement"],
    achievement: {
      name: "Quiz Master",
      description: "Scored above 100% on a quiz",
    },
    progress: {
      pointsEarned: 18,
      maxPoints: 15,
    },
  },
  {
    id: "19",
    type: "math-academy",
    subtype: "milestone",
    icon: "🏆",
    title: "Reached 33% of Foundations II in Math Academy",
    details: "One-third of the way through Foundations II course",
    date: new Date(2024, 7, 15), // August 15, 2024
    tags: ["math", "milestone", "achievement"],
    milestoneProgress: {
      current: 33,
      total: 100,
    },
    leagueProgress: {
      current: "Gold 🏅",
      next: "Platinum 💎",
      totalEarned: 1586,
    },
  },
  {
    id: "18",
    type: "project",
    icon: "🖊️",
    title: "Started new blog post",
    details: "First draft of 'How I use 'AI' for learning' blogpost",
    date: new Date(2024, 7, 15), // August 15, 2024
    tags: ["writing", "AI", "learning"],
    progress: {
      phase: "First Draft",
      tasksCompleted: 1,
      totalTasks: 3,
    },
    timeSpent: 60, // Estimated time, adjust as needed
  },
  {
    id: "17",
    type: "math-academy",
    subtype: "progress",
    icon: "🧮",
    title: "Math Academy Progress",
    details: "Completed 7 lessons and 1 assessment",
    date: new Date(2024, 7, 15), // August 15, 2024
    tags: ["math", "learning"],
    progress: {
      lessonsCompleted: 7,
      pointsEarned: 84,
      totalXP: 1586, // 1502 + 84
      todayXP: 84,
      dailyGoal: 70,
      currentLevel: "Gold 🏅",
    },
    topics: [
      "Exponential Decay",
      "Limits Rules",
      "Dilations",
      "Cube Root Function",
      "Sequences",
      "Function Composition",
    ],
  },
  {
    id: "15",
    type: "study",
    icon: "📚",
    title: 'Chapter 7.3 of "The Rust Programming Language" book',
    details: "Learned about relative & absolute paths, pub & crate keywords",
    date: new Date(2024, 7, 15), // August 15, 2024
    tags: ["rust", "book", "learning"],
    bookProgress: {
      currentChapter: 7,
      totalChapters: 21,
      current: 7,
      total: 21,
    },
    topics: [
      "Relative Paths",
      "Absolute Paths",
      "pub Keyword",
      "crate Keyword",
    ],
    timeSpent: 35,
  },
  {
    id: "16",
    type: "project",
    icon: "💻",
    title: "Refactored logit and added new features",
    details: "Added sticky headers and compact view of cards",
    date: new Date(2024, 7, 15), // August 15, 2024
    tags: ["project", "development", "rust"],
    timeSpent: 90, // Estimated time, adjust as needed
    progress: {
      phase: "Refactoring",
      tasksCompleted: 2,
      totalTasks: 3,
    },
  },
  {
    id: "1",
    type: "study",
    icon: "📚",
    title: 'Chapter 7 of "The Rust Programming Language" book',
    details: "Learned about packages, crates, modules, and lib/bin mode",
    date: new Date(2024, 7, 14),
    tags: ["rust", "book", "learning"],
    bookProgress: {
      currentChapter: 7,
      totalChapters: 21,
      current: 7,
      total: 21,
    },
    topics: ["Packages", "Crates", "Modules"],
    timeSpent: 30,
  },
  {
    id: "2",
    type: "project",
    icon: "💻",
    title: "Refactored logit and added new features",
    details:
      "Added view transitions for smooth navigation, standardized layout",
    date: new Date(2024, 7, 14),
    tags: ["project", "development", "rust"],
    timeSpent: 150,
  },
  {
    id: "3",
    type: "math-academy",
    subtype: "progress",
    icon: "🧮",
    title: "Math Academy Progress",
    details: "Completed 9 lessons",
    date: new Date(2024, 7, 14),
    tags: ["math", "learning"],
    progress: {
      lessonsCompleted: 9,
      pointsEarned: 81,
      totalXP: 1502,
      todayXP: 84,
      dailyGoal: 50,
      currentLevel: "Gold 🏅",
    },
    topics: [
      "Dilations",
      "Real Numbers",
      "Exponential Equations",
      "Square Root Functions",
      "Limits",
      "One-To-One Functions",
      "Logarithmic Equations",
      "Triangle Area",
    ],
  },
  {
    id: "4",
    type: "project",
    icon: "💻",
    title: "Created first draft of logit",
    details: "Spent 2h45m working on the activity log page",
    date: new Date(2024, 7, 13),
    tags: ["project", "development"],
    progress: {
      phase: "First Draft",
      tasksCompleted: 1,
      totalTasks: 1,
    },
    timeSpent: 165,
  },
  {
    id: "5",
    type: "study",
    icon: "📚",
    title: 'Completed Chapter 6 of "The Rust Programming Language" book',
    details:
      "Read sections 6.2, 6.3, and 6.4, and solved corresponding Rustlings exercises (08 enums)",
    date: new Date(2024, 7, 13),
    tags: ["rust", "book", "learning"],
    bookProgress: {
      currentChapter: 6,
      totalChapters: 21,
      current: 6,
      total: 21,
    },
    topics: ["Enums", "Pattern Matching", "Control Flow"],
    timeSpent: 120,
  },
  {
    id: "6",
    type: "math-academy",
    subtype: "progress",
    icon: "🧮",
    title: "Math Academy Progress",
    details: "Completed 7 lessons and 1 assessment",
    date: new Date(2024, 7, 13),
    tags: ["math", "learning"],
    progress: {
      lessonsCompleted: 7,
      pointsEarned: 70,
      totalXP: 1418,
      todayXP: 70,
      dailyGoal: 50,
      currentLevel: "Gold 🏅",
    },
    topics: [
      "Intersections of Lines and Quadratic Functions",
      "Average Rate of Change",
      "Domain and Range of Quadratic Functions",
      "Exponential Equations",
      "Laws of Logarithms",
      "Limits at Infinity",
    ],
  },
  {
    id: "7",
    type: "progress",
    icon: "🦀",
    title: "Completed Rustlings exercises on structs and enums",
    details: "34/94 exercises (36% complete)",
    date: new Date(2024, 7, 12),
    tags: ["rust", "learning"],
    progress: {
      current: 34,
      total: 94,
    },
    topics: ["Structs", "Enums", "Pattern Matching"],
  },
  {
    id: "8",
    type: "math-academy",
    subtype: "achievement",
    icon: "🏅",
    title: "Reached Gold League in Math Academy",
    details: "Completed 8 lessons in Foundations II",
    date: new Date(2024, 7, 12),
    tags: ["math", "achievement"],
    achievement: {
      name: "Gold League",
      description: "Reached Gold League in Math Academy",
    },
    progress: {
      lessonsCompleted: 8,
      pointsEarned: 83,
      totalXP: 1348,
      todayXP: 83,
      dailyGoal: 50,
      currentLevel: "Gold 🏅",
    },
    topics: ["Algebra", "Geometry", "Trigonometry"],
  },
  {
    id: "9",
    type: "study",
    icon: "📚",
    title: 'Continued "The Rust Programming Language" book',
    details: "Focusing on structs and enums",
    date: new Date(2024, 7, 12),
    tags: ["rust", "book"],
    bookProgress: {
      currentChapter: 5,
      totalChapters: 21,
      current: 5,
      total: 21,
    },
    timeSpent: 120,
  },
  {
    id: "10",
    type: "project",
    icon: "💻",
    title: "Started multi-client chat server project in Rust",
    details: "Planning server + client implementation with TCP and concurrency",
    date: new Date(2024, 7, 12),
    tags: ["rust", "project", "networking"],
    progress: {
      phase: "Planning",
      tasksCompleted: 2,
      totalTasks: 10,
    },
  },
  {
    id: "11",
    type: "learning",
    icon: "🧮",
    title: "Math Academy streak",
    details: "16-day streak in Math Foundations",
    date: new Date(2024, 7, 11),
    tags: ["math", "streak"],
    topicsLearned: ["Calculus", "Linear Algebra"],
    timeSpent: 320,
  },
  {
    id: "12",
    type: "planning",
    icon: "🗓️",
    title: "Planned UI-oriented language project",
    details: "Will be implemented in Rust",
    date: new Date(2024, 7, 10),
    tags: ["rust", "project", "planning"],
    planDetails: {
      goals: ["Create a UI-oriented language", "Implement in Rust"],
      nextSteps: [
        "Research existing UI languages",
        "Define core language features",
      ],
    },
  },
  {
    id: "13",
    type: "math-academy",
    subtype: "milestone",
    icon: "🏆",
    title: "Reached 25% of Foundations II in Math Academy",
    details: "Currently in Silver League 🥈",
    date: new Date(2024, 7, 9),
    tags: ["math", "milestone"],
    milestoneProgress: {
      current: 25,
      total: 100,
    },
    leagueProgress: {
      current: "Silver 🥈",
      next: "Gold 🏅",
      totalEarned: 712,
    },
  },
  {
    id: "14",
    type: "start",
    icon: "🚀",
    title: "Began low-level programming and math journey",
    details: "Inspired by @ludwigABAP, @dnbt777, and @_MathAcademy_",
    date: new Date(2024, 7, 1),
    tags: ["rust", "math", "journey"],
    goalsSet: ["Master Rust", "Improve math skills", "Build complex systems"],
  },
];
