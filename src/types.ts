export type LogitActivity =
  | StudyActivity
  | ProjectActivity
  | MathAcademyActivity
  | ProgressActivity
  | AchievementActivity
  | LearningActivity
  | PlanningActivity
  | MilestoneActivity
  | StartActivity
  | ProjectAnnouncementActivity;

export interface BaseActivity {
  id: string;
  type: string;
  icon: string;
  title: string;
  details: string;
  date: Date;
  tags: string[];
}

export interface ProgressData {
  current: number;
  total: number;
}

export interface BookProgressData extends ProgressData {
  currentChapter: number;
  totalChapters: number;
}

export interface ProjectProgressData {
  phase: string;
  tasksCompleted: number;
  totalTasks: number;
}

export interface AchievementActivity extends BaseActivity {
  type: "achievement";
  achievement: {
    name: string;
    description: string;
  };
}

export interface LearningActivity extends BaseActivity {
  type: "learning";
  topicsLearned: string[];
  timeSpent?: number;
}

export interface MathAcademyProgress {
  lessonsCompleted?: number;
  pointsEarned?: number;
  totalXP: number;
  todayXP?: number;
  dailyGoal?: number;
  currentLevel: string;
}

export interface MathAcademyActivity extends BaseActivity {
  type: "math-academy";
  subtype: "progress" | "achievement" | "milestone" | "streak";
  progress?: MathAcademyProgress;
  topics?: string[];
  achievement?: {
    name: string;
    description: string;
  };
  milestoneProgress?: {
    current: number;
    total: number;
  };
  leagueProgress?: {
    current: string;
    next: string;
    totalEarned: number;
  };
}

export interface MilestoneActivity extends BaseActivity {
  type: "milestone";
  milestoneProgress: ProgressData;
}

export interface PlanningActivity extends BaseActivity {
  type: "planning";
  planDetails: {
    goals: string[];
    nextSteps: string[];
  };
}

export interface ProgressActivity extends BaseActivity {
  type: "progress";
  progress: ProgressData;
  topics?: string[];
}

export interface ProjectActivity extends BaseActivity {
  type: "project";
  progress?: ProjectProgressData;
  timeSpent?: number;
}

export interface StartActivity extends BaseActivity {
  type: "start";
  goalsSet: string[];
}

export interface StudyActivity extends BaseActivity {
  type: "study";
  bookProgress?: BookProgressData;
  topics?: string[];
  timeSpent?: number;
}

export interface ProjectAnnouncementActivity extends BaseActivity {
  type: "project";
  subtype: "announcement";
  socialMedia: {
    platform: string;
    username: string;
    link: string;
  };
  projectFeatures: string[];
  callToAction: {
    text: string;
    link: string;
  };
}
