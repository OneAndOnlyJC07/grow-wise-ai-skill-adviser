import { CareerPath, Skill } from '../types';

export const skills: Skill[] = [
  // Technical Skills
  { id: 'javascript', name: 'JavaScript', category: 'Programming', level: 0, inDemand: true },
  { id: 'python', name: 'Python', category: 'Programming', level: 0, inDemand: true },
  { id: 'react', name: 'React.js', category: 'Frontend', level: 0, inDemand: true },
  { id: 'nodejs', name: 'Node.js', category: 'Backend', level: 0, inDemand: true },
  { id: 'ai-ml', name: 'AI/Machine Learning', category: 'Emerging Tech', level: 0, inDemand: true },
  { id: 'data-analysis', name: 'Data Analysis', category: 'Analytics', level: 0, inDemand: true },
  { id: 'cloud-computing', name: 'Cloud Computing', category: 'Infrastructure', level: 0, inDemand: true },
  { id: 'cybersecurity', name: 'Cybersecurity', category: 'Security', level: 0, inDemand: true },
  
  // Business Skills
  { id: 'project-management', name: 'Project Management', category: 'Management', level: 0, inDemand: true },
  { id: 'digital-marketing', name: 'Digital Marketing', category: 'Marketing', level: 0, inDemand: true },
  { id: 'financial-analysis', name: 'Financial Analysis', category: 'Finance', level: 0, inDemand: false },
  { id: 'business-strategy', name: 'Business Strategy', category: 'Strategy', level: 0, inDemand: false },
  
  // Creative Skills
  { id: 'ui-ux-design', name: 'UI/UX Design', category: 'Design', level: 0, inDemand: true },
  { id: 'content-creation', name: 'Content Creation', category: 'Creative', level: 0, inDemand: true },
  { id: 'video-editing', name: 'Video Editing', category: 'Media', level: 0, inDemand: false },
  
  // Soft Skills
  { id: 'communication', name: 'Communication', category: 'Soft Skills', level: 0, inDemand: true },
  { id: 'leadership', name: 'Leadership', category: 'Soft Skills', level: 0, inDemand: false },
  { id: 'problem-solving', name: 'Problem Solving', category: 'Soft Skills', level: 0, inDemand: true },
];

export const careerPaths: CareerPath[] = [
  {
    id: 'full-stack-developer',
    title: 'Full Stack Developer',
    description: 'Build complete web applications from frontend to backend',
    averageSalary: '₹8-25 LPA',
    growthRate: '22%',
    requiredSkills: ['JavaScript', 'React.js', 'Node.js', 'Python'],
    emergingRole: false,
    industries: ['Technology', 'Startups', 'E-commerce'],
    locations: ['Bangalore', 'Hyderabad', 'Mumbai', 'Pune']
  },
  {
    id: 'ai-engineer',
    title: 'AI/ML Engineer',
    description: 'Develop and deploy artificial intelligence solutions',
    averageSalary: '₹12-40 LPA',
    growthRate: '35%',
    requiredSkills: ['Python', 'AI/Machine Learning', 'Data Analysis'],
    emergingRole: true,
    industries: ['Technology', 'Healthcare', 'Finance', 'Automotive'],
    locations: ['Bangalore', 'Hyderabad', 'Delhi NCR']
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    description: 'Define and drive product strategy and development',
    averageSalary: '₹15-50 LPA',
    growthRate: '18%',
    requiredSkills: ['Business Strategy', 'Data Analysis', 'Communication', 'Project Management'],
    emergingRole: false,
    industries: ['Technology', 'Startups', 'E-commerce', 'Finance'],
    locations: ['Bangalore', 'Mumbai', 'Delhi NCR']
  },
  {
    id: 'ux-designer',
    title: 'UX Designer',
    description: 'Create intuitive and engaging user experiences',
    averageSalary: '₹6-20 LPA',
    growthRate: '28%',
    requiredSkills: ['UI/UX Design', 'Problem Solving', 'Communication'],
    emergingRole: false,
    industries: ['Technology', 'Design Agencies', 'E-commerce'],
    locations: ['Bangalore', 'Mumbai', 'Pune', 'Chennai']
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    description: 'Extract insights from data to drive business decisions',
    averageSalary: '₹10-30 LPA',
    growthRate: '31%',
    requiredSkills: ['Python', 'Data Analysis', 'AI/Machine Learning'],
    emergingRole: false,
    industries: ['Technology', 'Finance', 'Healthcare', 'Retail'],
    locations: ['Bangalore', 'Hyderabad', 'Mumbai', 'Chennai']
  },
  {
    id: 'digital-marketing-manager',
    title: 'Digital Marketing Manager',
    description: 'Drive online marketing campaigns and brand growth',
    averageSalary: '₹5-18 LPA',
    growthRate: '25%',
    requiredSkills: ['Digital Marketing', 'Data Analysis', 'Content Creation', 'Communication'],
    emergingRole: false,
    industries: ['Marketing Agencies', 'E-commerce', 'Startups'],
    locations: ['Mumbai', 'Delhi NCR', 'Bangalore', 'Pune']
  },
  {
    id: 'cloud-architect',
    title: 'Cloud Solutions Architect',
    description: 'Design and implement scalable cloud infrastructure',
    averageSalary: '₹18-45 LPA',
    growthRate: '40%',
    requiredSkills: ['Cloud Computing', 'Cybersecurity', 'Project Management'],
    emergingRole: true,
    industries: ['Technology', 'Consulting', 'Enterprise'],
    locations: ['Bangalore', 'Hyderabad', 'Chennai', 'Mumbai']
  }
];

export const interests = [
  'Technology & Programming',
  'Data & Analytics',
  'Creative Arts & Design',
  'Business & Strategy',
  'Marketing & Communication',
  'Healthcare & Life Sciences',
  'Finance & Investment',
  'Education & Training',
  'Social Impact & NGOs',
  'Entertainment & Media'
];

export const workStyles = [
  'Individual Contributor',
  'Team Collaborator', 
  'Team Leader',
  'Strategic Thinker'
];

export const careerStages = [
  'Student (0-1 years)',
  'Entry Level (1-3 years)', 
  'Mid Level (3-7 years)',
  'Senior Level (7+ years)'
];

export const indianCities = [
  'Bangalore',
  'Mumbai', 
  'Delhi NCR',
  'Hyderabad',
  'Pune',
  'Chennai',
  'Kolkata',
  'Ahmedabad',
  'Jaipur',
  'Kochi'
];