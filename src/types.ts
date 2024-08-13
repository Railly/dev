export type AnyActivity = {
  type:
    | "progress"
    | "achievement"
    | "study"
    | "project"
    | "learning"
    | "planning"
    | "milestone"
    | "start";
  icon: string;
  title: string;
  details: string;
  date: Date;
  tags: string[];
  progress?: {
    current: number;
    total: number;
    percentage: number;
  };
  leagueProgress?: {
    current: string;
    next: string;
    pointsToNext: number;
  };
  bookProgress?: {
    currentChapter: number;
    totalChapters: number;
    percentage: number;
  };
  timeSpent?: number;
  projectPhase?: string;
  tasksCompleted?: number;
  totalTasks?: number;
  streakDays?: number;
  pointsEarned?: number;
  topics?: string[];
  lessonsCompleted?: number;
  topicsStrengthened?: string[];
  topicsImproved?: string[];
  ideasGenerated?: number;
  nextSteps?: string[];
  goalsSet?: string[];
  initialResources?: string[];
};
