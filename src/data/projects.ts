export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  category: 'Frontend' | 'Utility' | 'Fullstack';
  github?: string;
  liveDemo?: string;
}

export const projectCategories = ['All', 'Frontend', 'Utility', 'Fullstack'] as const;

export const projectsData: Project[] = [
  {
    id: 'towntask',
    title: 'TOWNTASK — AI-POWERED FREELANCER PLATFORM',
    description:
      'A full-stack freelancer marketplace with AI-based job recommendation system. Clients post tasks and freelancers apply for jobs with intelligent matching using skill-based analysis.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Python'],
    category: 'Fullstack',
    github: 'https://github.com/lakshay545/Towntask_project',
    liveDemo: 'https://towntask-project.onrender.com/',
  },
  {
    id: 'travel-guide',
    title: 'TRAVEL GUIDE WEB APP',
    description:
      'A responsive multi-page travel website with destination cards, image galleries, search and filtering functionality, smooth UI animations, and mobile-friendly experience.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
    category: 'Fullstack',
    github: 'https://github.com/lakshay545/travel-guide',
  },
  {
    id: 'weather-buddy',
    title: 'WEATHER BUDDY',
    description:
      'A weather application that provides real-time weather information and forecasts. Simple and user-friendly interface for checking weather conditions.',
    stack: ['Python', 'API Integration', 'Speech Recognition', 'Flask'],
    category: 'Frontend',
    github: 'https://github.com/lakshay545/weather-buddy',
    liveDemo: 'https://weather-buddy.onrender.com/',
  },
  {
    id: 'scientific-calculator',
    title: 'SCIENTIFIC CALCULATOR',
    description:
      'A comprehensive scientific calculator application with advanced mathematical functions, intuitive user interface, and precise calculation capabilities.',
    stack: ['Python', 'Tkinter', 'Math Library'],
    category: 'Utility',
    github: 'https://github.com/lakshay545/scientific-calculator',
  },
];
