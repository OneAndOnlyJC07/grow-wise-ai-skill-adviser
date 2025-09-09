export interface Skill {
  id: string;
  name: string;
  category: string;
  level: number;
  inDemand: boolean;
}

export interface CareerPath {
  id: string;
  title: string;
  description: string;
  averageSalary: string;
  growthRate: string;
  requiredSkills: string[];
  emergingRole: boolean;
  industries: string[];
  locations: string[];
}

export interface Assessment {
  skills: { [key: string]: number };
  interests: string[];
  workStyle: string;
  careerStage: string;
  location: string;
}

export interface SkillGap {
  skill: string;
  currentLevel: number;
  requiredLevel: number;
  priority: 'high' | 'medium' | 'low';
  learningPath: string[];
}

export interface UserProgress {
  level: number;
  xp: number;
  streak: number;
  badges: Badge[];
  completedChallenges: string[];
  skillsLearned: string[];
  careerReadinessScore: number;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  unlockedAt?: Date;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  type: 'daily' | 'weekly' | 'milestone';
  xpReward: number;
  requirements: string[];
  deadline?: Date;
  completed: boolean;
}

export interface Mentor {
  id: string;
  name: string;
  title: string;
  company: string;
  expertise: string[];
  rating: number;
  avatar: string;
  bio: string;
  experience: string;
}

export interface JobOpportunity {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'internship' | 'full-time' | 'part-time';
  salary: string;
  skills: string[];
  matchPercentage: number;
  postedDate: Date;
  description: string;
}

export interface Event {
  id: string;
  title: string;
  type: 'workshop' | 'hackathon' | 'webinar' | 'career-fair';
  date: Date;
  location: string;
  description: string;
  organizer: string;
  registrationLink: string;
  skills: string[];
}

export interface CareerSimulation {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  skills: string[];
  thumbnail: string;
  rating: number;
  completedBy: number;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
  careerPersona: string;
  duration: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}