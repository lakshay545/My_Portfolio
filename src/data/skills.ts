export interface SkillItem {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: SkillItem[];
}

export const skillsData: SkillCategory[] = [
  {
    id: 'languages',
    title: 'PROGRAMMING LANGUAGES',
    icon: '</>',
    skills: [
      { name: 'Python', icon: '🐍' },
      { name: 'Java', icon: '☕' },
      { name: 'C', icon: '⚙️' },
      { name: 'C++', icon: '⚙️' },
      { name: 'MATLAB', icon: '📊' },
    ],
  },
  {
    id: 'frontend',
    title: 'FRONTEND DEVELOPMENT',
    icon: '{ }',
    skills: [
      { name: 'React', icon: '⚛️' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'JavaScript', icon: '📜' },
      { name: 'HTML', icon: '🌐' },
      { name: 'CSS', icon: '🎨' },
      { name: 'Framer Motion', icon: '✨' },
      { name: 'Tailwind CSS', icon: '💨' },
    ],
  },
  {
    id: 'datascience',
    title: 'DATA SCIENCE AND ML',
    icon: '📊',
    skills: [
      { name: 'Pandas', icon: '🐼' },
      { name: 'NumPy', icon: '🔢' },
      { name: 'NLP', icon: '💬' },
    ],
  },
  {
    id: 'databases',
    title: 'DATABASES & DEPLOYMENT',
    icon: '🗄️',
    skills: [
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MySQL', icon: '🐬' },
      { name: 'Redis', icon: '🔴' },
      { name: 'Railway', icon: '🚂' },
      { name: 'Vercel', icon: '▲' },
      { name: 'Netlify', icon: '🌐' },
    ],
  },
  {
    id: 'backend',
    title: 'BACKEND DEVELOPMENT',
    icon: '⚙️',
    skills: [
      { name: 'Flask', icon: '🌶️' },
      { name: 'FastAPI', icon: '⚡' },
      { name: 'Node.js', icon: '🟩' },
    ],
  },
  {
    id: 'tools',
    title: 'DEVELOPER TOOLS',
    icon: '🛠️',
    skills: [
      { name: 'Git', icon: '🌿' },
      { name: 'Vite', icon: '⚡' },
      { name: 'Research', icon: '🔍' },
    ],
  },
];
