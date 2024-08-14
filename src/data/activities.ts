import type { LogitActivity } from "@/types";

export const LOGIT_ACTIVITIES: LogitActivity[] = [
  {
    type: "project",
    icon: "💻",
    title: "Created first draft of logit",
    details: "Spent 2h45m working on the activity log page",
    date: new Date(2024, 7, 13), // August 13, 2024
    tags: ["project", "development"],
    projectPhase: "First Draft",
    timeSpent: 165, // minutes
    tasksCompleted: 1,
    totalTasks: 1,
  },
  {
    type: "study",
    icon: "📚",
    title: 'Completed Chapter 6 of "The Rust Programming Language" book',
    details:
      "Read sections 6.2, 6.3, and 6.4, and solved corresponding Rustlings exercises (08 enums)",
    date: new Date(2024, 7, 13), // August 13, 2024
    tags: ["rust", "book", "learning"],
    bookProgress: {
      currentChapter: 6,
      totalChapters: 21,
      percentage: 29,
    },
    topics: ["Enums", "Pattern Matching", "Control Flow"],
    timeSpent: 120, // estimated time, adjust as needed
  },
  {
    type: "learning",
    icon: "🧮",
    title: "Math Academy Progress",
    details: "Completed 7 lessons and 1 assessment",
    date: new Date(2024, 7, 13), // August 13, 2024
    tags: ["math", "learning"],
    lessonsCompleted: 7,
    topicsImproved: [
      "Intersections of Lines and Quadratic Functions",
      "Average Rate of Change",
      "Domain and Range of Quadratic Functions",
      "Exponential Equations",
      "Laws of Logarithms",
      "Limits at Infinity",
    ],
    pointsEarned: 70,
  },
  {
    type: "progress",
    icon: "🦀",
    title: "Completed Rustlings exercises on structs and enums",
    details: "34/94 exercises (36% complete)",
    date: new Date(2024, 7, 12), // August 12, 2024
    tags: ["rust", "learning"],
    progress: {
      current: 34,
      total: 94,
      percentage: 36,
    },
    topics: ["Structs", "Enums", "Pattern Matching"],
  },
  {
    type: "progress",
    icon: "🦀",
    title: "Completed Rustlings exercises on structs and enums",
    details: "34/94 exercises (36% complete)",
    date: new Date(2024, 7, 12), // August 12, 2024
    tags: ["rust", "learning"],
    progress: {
      current: 34,
      total: 94,
      percentage: 36,
    },
    topics: ["Structs", "Enums", "Pattern Matching"],
  },
  {
    type: "achievement",
    icon: "🏅",
    title: "Reached Gold League in Math Academy",
    details: "Completed 8 lessons in Foundations II",
    date: new Date(2024, 7, 12), // August 12, 2024
    tags: ["math", "achievement"],
    leagueProgress: {
      current: "Gold",
      next: "Platinum",
      totalEarned: 1265,
    },
    lessonsCompleted: 8,
    topicsStrengthened: ["Algebra", "Geometry", "Trigonometry"],
  },
  {
    type: "study",
    icon: "📚",
    title: 'Continued "The Rust Programming Language" book',
    details: "Focusing on structs and enums",
    date: new Date(2024, 7, 12), // August 12, 2024
    tags: ["rust", "book"],
    bookProgress: {
      currentChapter: 5,
      totalChapters: 21,
      percentage: 24,
    },
    timeSpent: 120, // minutes
  },
  {
    type: "project",
    icon: "💻",
    title: "Started multi-client chat server project in Rust",
    details: "Planning server + client implementation with TCP and concurrency",
    date: new Date(2024, 7, 12), // August 12, 2024
    tags: ["rust", "project", "networking"],
    projectPhase: "Planning",
    tasksCompleted: 2,
    totalTasks: 10,
  },
  {
    type: "learning",
    icon: "🧮",
    title: "Math Academy streak",
    details: "16-day streak in Math Foundations",
    date: new Date(2024, 7, 11), // August 11, 2024
    tags: ["math", "streak"],
    streakDays: 16,
    pointsEarned: 320,
    topicsImproved: ["Calculus", "Linear Algebra"],
  },
  {
    type: "planning",
    icon: "🗓️",
    title: "Planned UI-oriented language project",
    details: "Will be implemented in Rust",
    date: new Date(2024, 7, 10), // August 10, 2024
    tags: ["rust", "project", "planning"],
    projectPhase: "Conceptualization",
    ideasGenerated: 5,
    nextSteps: [
      "Research existing UI languages",
      "Define core language features",
    ],
  },
  {
    type: "milestone",
    icon: "🏆",
    title: "Reached 25% of Foundations II in Math Academy",
    details: "Currently in Silver League 🥈",
    date: new Date(2024, 7, 9), // August 9, 2024
    tags: ["math", "milestone"],
    progress: {
      current: 25,
      total: 100,
      percentage: 25,
    },
    leagueProgress: {
      current: "Silver",
      next: "Gold",
      totalEarned: 712,
    },
  },
  {
    type: "start",
    icon: "🚀",
    title: "Began low-level programming and math journey",
    details: "Inspired by @ludwigABAP, @dnbt777, and @_MathAcademy_",
    date: new Date(2024, 7, 1), // August 1, 2024
    tags: ["rust", "math", "journey"],
    goalsSet: ["Master Rust", "Improve math skills", "Build complex systems"],
  },
];
