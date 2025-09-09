import { Badge, Challenge, Mentor, JobOpportunity, Event, CareerSimulation, Quiz } from '../types';

export const badges: Badge[] = [
  {
    id: 'first-assessment',
    name: 'Career Explorer',
    description: 'Completed your first career assessment',
    icon: '🎯',
    rarity: 'common'
  },
  {
    id: 'skill-master',
    name: 'Skill Master',
    description: 'Reached expert level in 3 skills',
    icon: '🏆',
    rarity: 'rare'
  },
  {
    id: 'streak-warrior',
    name: 'Streak Warrior',
    description: 'Maintained a 7-day learning streak',
    icon: '🔥',
    rarity: 'epic'
  },
  {
    id: 'mentor-seeker',
    name: 'Mentor Seeker',
    description: 'Connected with your first mentor',
    icon: '🤝',
    rarity: 'common'
  },
  {
    id: 'simulation-pro',
    name: 'Simulation Pro',
    description: 'Completed 5 career simulations',
    icon: '🎮',
    rarity: 'rare'
  },
  {
    id: 'job-hunter',
    name: 'Job Hunter',
    description: 'Applied to 10 job opportunities',
    icon: '💼',
    rarity: 'epic'
  },
  {
    id: 'quiz-champion',
    name: 'Quiz Champion',
    description: 'Scored 100% on 3 career quizzes',
    icon: '🧠',
    rarity: 'legendary'
  }
];

export const challenges: Challenge[] = [
  {
    id: 'daily-skill-practice',
    title: 'Daily Skill Practice',
    description: 'Complete one skill assessment today',
    type: 'daily',
    xpReward: 50,
    requirements: ['Complete skill assessment'],
    completed: false
  },
  {
    id: 'weekly-simulation',
    title: 'Career Explorer',
    description: 'Try 2 career simulations this week',
    type: 'weekly',
    xpReward: 200,
    requirements: ['Complete 2 simulations'],
    deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    completed: false
  },
  {
    id: 'milestone-mentor',
    title: 'Find Your Guide',
    description: 'Connect with a mentor in your field',
    type: 'milestone',
    xpReward: 500,
    requirements: ['Connect with mentor'],
    completed: false
  }
];

export const mentors: Mentor[] = [
  {
    id: 'mentor-1',
    name: 'Priya Sharma',
    title: 'Senior Data Scientist',
    company: 'Google India',
    expertise: ['Machine Learning', 'Python', 'Data Analysis'],
    rating: 4.9,
    avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150',
    bio: 'Helping students transition into data science careers with 8+ years of industry experience.',
    experience: '8+ years'
  },
  {
    id: 'mentor-2',
    name: 'Rahul Gupta',
    title: 'Product Manager',
    company: 'Flipkart',
    expertise: ['Product Strategy', 'User Research', 'Analytics'],
    rating: 4.8,
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    bio: 'Passionate about building products that solve real problems. Mentoring aspiring PMs.',
    experience: '6+ years'
  },
  {
    id: 'mentor-3',
    name: 'Sneha Patel',
    title: 'UX Design Lead',
    company: 'Zomato',
    expertise: ['UI/UX Design', 'Design Thinking', 'Prototyping'],
    rating: 4.9,
    avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150',
    bio: 'Creating delightful user experiences and mentoring the next generation of designers.',
    experience: '7+ years'
  }
];

export const jobOpportunities: JobOpportunity[] = [
  {
    id: 'job-1',
    title: 'Frontend Developer Intern',
    company: 'Swiggy',
    location: 'Bangalore',
    type: 'internship',
    salary: '₹25,000/month',
    skills: ['React', 'JavaScript', 'CSS'],
    matchPercentage: 85,
    postedDate: new Date('2024-01-15'),
    description: 'Join our frontend team to build amazing user experiences for millions of users.'
  },
  {
    id: 'job-2',
    title: 'Data Analyst',
    company: 'Paytm',
    location: 'Noida',
    type: 'full-time',
    salary: '₹8-12 LPA',
    skills: ['Python', 'SQL', 'Data Analysis'],
    matchPercentage: 92,
    postedDate: new Date('2024-01-14'),
    description: 'Analyze user behavior and business metrics to drive data-driven decisions.'
  },
  {
    id: 'job-3',
    title: 'UX Design Intern',
    company: 'BYJU\'S',
    location: 'Bangalore',
    type: 'internship',
    salary: '₹20,000/month',
    skills: ['Figma', 'User Research', 'Prototyping'],
    matchPercentage: 78,
    postedDate: new Date('2024-01-13'),
    description: 'Design engaging educational experiences for students across India.'
  }
];

export const events: Event[] = [
  {
    id: 'event-1',
    title: 'AI/ML Workshop',
    type: 'workshop',
    date: new Date('2024-02-15'),
    location: 'IIT Delhi',
    description: 'Hands-on workshop on machine learning fundamentals and practical applications.',
    organizer: 'Google Developer Student Clubs',
    registrationLink: '#',
    skills: ['Machine Learning', 'Python', 'TensorFlow']
  },
  {
    id: 'event-2',
    title: 'HackBengaluru 2024',
    type: 'hackathon',
    date: new Date('2024-02-20'),
    location: 'Bangalore',
    description: '48-hour hackathon focusing on solutions for smart cities and sustainability.',
    organizer: 'Karnataka Government',
    registrationLink: '#',
    skills: ['Full Stack Development', 'IoT', 'Mobile Development']
  },
  {
    id: 'event-3',
    title: 'Career Fair 2024',
    type: 'career-fair',
    date: new Date('2024-02-25'),
    location: 'Mumbai',
    description: 'Meet recruiters from top tech companies and startups.',
    organizer: 'TechCorp Events',
    registrationLink: '#',
    skills: ['Communication', 'Resume Building', 'Interview Skills']
  }
];

export const careerSimulations: CareerSimulation[] = [
  {
    id: 'sim-1',
    title: 'Day as a Data Scientist',
    description: 'Experience analyzing customer data, building ML models, and presenting insights to stakeholders.',
    duration: '45 minutes',
    difficulty: 'intermediate',
    skills: ['Python', 'Data Analysis', 'Machine Learning'],
    thumbnail: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=300',
    rating: 4.8,
    completedBy: 1250
  },
  {
    id: 'sim-2',
    title: 'UX Designer Challenge',
    description: 'Design a mobile app interface from user research to final prototype.',
    duration: '60 minutes',
    difficulty: 'beginner',
    skills: ['UI/UX Design', 'User Research', 'Prototyping'],
    thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=300',
    rating: 4.9,
    completedBy: 980
  },
  {
    id: 'sim-3',
    title: 'Product Manager Sprint',
    description: 'Lead a product development cycle from ideation to launch strategy.',
    duration: '90 minutes',
    difficulty: 'advanced',
    skills: ['Product Strategy', 'Analytics', 'Leadership'],
    thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300',
    rating: 4.7,
    completedBy: 650
  }
];

export const quizzes: Quiz[] = [
  {
    id: 'quiz-1',
    title: 'Tech Career Personality',
    description: 'Discover your ideal tech career path based on your personality and interests.',
    careerPersona: 'Tech Explorer 🚀',
    duration: 10,
    questions: [
      {
        id: 'q1',
        question: 'What excites you most about technology?',
        options: [
          'Building user-friendly interfaces',
          'Analyzing data to find patterns',
          'Creating algorithms and systems',
          'Designing digital experiences'
        ],
        correctAnswer: 0,
        explanation: 'Your answer reveals your natural inclination towards different tech domains.'
      }
    ]
  }
];

export const learningResources = {
  'JavaScript': [
    { title: 'JavaScript Fundamentals', platform: 'Coursera', link: '#', type: 'course' },
    { title: 'JS Crash Course', platform: 'YouTube', link: '#', type: 'video' },
    { title: 'Interactive JS Tutorial', platform: 'Google Cloud Skills', link: '#', type: 'interactive' }
  ],
  'Python': [
    { title: 'Python for Beginners', platform: 'Coursera', link: '#', type: 'course' },
    { title: 'Python Programming', platform: 'YouTube', link: '#', type: 'video' },
    { title: 'Python on Google Cloud', platform: 'Google Cloud Skills', link: '#', type: 'interactive' }
  ],
  'Machine Learning': [
    { title: 'ML Specialization', platform: 'Coursera', link: '#', type: 'course' },
    { title: 'ML Explained', platform: 'YouTube', link: '#', type: 'video' },
    { title: 'Google AI Education', platform: 'Google Cloud Skills', link: '#', type: 'interactive' }
  ]
};