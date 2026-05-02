export interface TerminalCommand {
  command: string;
  aliases: string[];
  description: string;
  response: string;
}

export const terminalCommands: TerminalCommand[] = [
  {
    command: 'whoami',
    aliases: ['about', 'who', 'bio', 'me', 'about me', 'introduce', 'introduction', 'tell me about', 'profile'],
    description: 'about me',
    response: `Hi! I'm Lakshay Sharma 👋
━━━━━━━━━━━━━━━━━━━━━━
→ AI-Focused Developer
→ B.Tech CSE @ KR Mangalam University
→ CGPA: 8.8/10 (Dean's Honour List)
→ Passionate about building intelligent systems
→ 3+ Projects Built | 10+ Hackathons
→ 250+ DSA Problems Solved

Currently building AI-powered solutions and full-stack web applications.`,
  },
  {
    command: 'skills',
    aliases: ['tech', 'stack', 'technologies', 'tech stack', 'languages', 'tools', 'what skills'],
    description: 'tech stack',
    response: `Tech Stack 🛠️
━━━━━━━━━━━━━━━━━━━━━━
Languages    → Python, Java, C, C++, JavaScript, TypeScript
Frontend     → React, HTML, CSS, Tailwind CSS, Framer Motion
Backend      → Flask, FastAPI, Node.js, Express.js
Databases    → PostgreSQL, MySQL, Redis, MongoDB
AI/ML        → Pandas, NumPy, NLP, Scikit-learn
Deployment   → Vercel, Railway, Netlify, Render
Tools        → Git, Vite, VS Code, Postman`,
  },
  {
    command: 'projects',
    aliases: ['work', 'portfolio', 'built', 'applications', 'apps', 'what projects', 'show projects'],
    description: "what I've built",
    response: `Featured Projects 📦
━━━━━━━━━━━━━━━━━━━━━━
1. TownTask       → AI Freelancer Platform
2. Travel Guide   → Full-Stack Travel Website
3. Weather Buddy  → Real-time Weather App
4. Scientific Cal → Scientific Calculator

Visit the Projects page for details, code, and live demos.`,
  },
  {
    command: 'status',
    aliases: ['hire', 'available', 'hiring', 'opportunity', 'opportunities', 'job', 'internship', 'open to work'],
    description: 'hire availability',
    response: `Availability Status ✅
━━━━━━━━━━━━━━━━━━━━━━
Status: OPEN TO WORK
Looking for: Internships & Full-Time roles

Interested in:
→ Full-Stack Development
→ AI/ML Engineering
→ Software Development
→ Collaborative team environments

Reach out at lakshaysh1@gmail.com`,
  },
  {
    command: 'contact',
    aliases: ['email', 'phone', 'reach', 'connect', 'message', 'how to contact', 'get in touch'],
    description: 'how to reach me',
    response: `Contact Information 📬
━━━━━━━━━━━━━━━━━━━━━━
Email    → lakshaysh1@gmail.com
Phone    → +91 9896009903
Location → Gurugram, India

Socials:
GitHub   → github.com/lakshay545
LinkedIn → linkedin.com/in/lakshay-sharma-784bb6348
LeetCode → leetcode.com/lakshay_Sharma11

Or use the Contact page to send a direct message!`,
  },
  {
    command: 'education',
    aliases: ['college', 'university', 'degree', 'study', 'academic', 'school', 'background', 'qualification'],
    description: 'academic background',
    response: `Education 🎓
━━━━━━━━━━━━━━━━━━━━━━
B.Tech — Computer Science Engineering
KR Mangalam University, Gurugram
Duration: 2024 – 2028
CGPA: 8.8/10 (Dean's Honour List)

Achievements:
→ JEE Main 2024 — 83rd percentile
→ 250+ DSA problems solved
→ 10+ hackathons (including latest victory)
→ Wadhwani Entrepreneurship Certificate`,
  },
  {
    command: 'resume',
    aliases: ['cv', 'download resume', 'show resume', 'get resume'],
    description: 'download resume',
    response: `Resume 📄
━━━━━━━━━━━━━━━━━━━━━━
You can download my resume from the About page.
Click the "Download Resume" button or visit:
→ /Lakshay_Resume.pdf`,
  },
  {
    command: 'certifications',
    aliases: ['certificates', 'certs', 'certified', 'courses'],
    description: 'certificates & courses',
    response: `Certifications 🏅
━━━━━━━━━━━━━━━━━━━━━━
01. Wadhwani           → Entrepreneurship Certificate
02. Data Analysis      → Certification
03. Hackathon Victory  → Latest Win

Visit the Skills page to view and download certificates.`,
  },
  {
    command: 'github',
    aliases: ['git', 'repos', 'repositories', 'code', 'open source'],
    description: 'GitHub profile',
    response: `GitHub Profile 🐙
━━━━━━━━━━━━━━━━━━━━━━
Username: lakshay545
Profile:  github.com/lakshay545
205+ contributions in the last year

Check out my repositories for project source code!`,
  },
  {
    command: 'linkedin',
    aliases: ['professional', 'network'],
    description: 'LinkedIn profile',
    response: `LinkedIn 💼
━━━━━━━━━━━━━━━━━━━━━━
Profile: linkedin.com/in/lakshay-sharma-784bb6348
Connect with me for professional updates and opportunities!`,
  },
  {
    command: 'experience',
    aliases: ['hackathon', 'hackathons', 'work experience', 'intern'],
    description: 'work & hackathon experience',
    response: `Experience 💼
━━━━━━━━━━━━━━━━━━━━━━
Hackathon Participant (2024 – Present)
→ 10+ university & online hackathons
→ Delivered working prototypes in 24–48 hrs
→ Collaborated in teams of 3–4 using Git
→ Built full-stack apps with Python, JS, MongoDB

Currently focused on:
→ AI-powered application development
→ Full-stack web development
→ Freelancer platforms and smart solutions`,
  },
];

export const helpText = `Available commands (type the command name):
━━━━━━━━━━━━━━━━━━━━━━
  whoami         → about me
  skills         → tech stack
  projects       → what I've built
  status         → hire availability
  contact        → how to reach me
  education      → academic background
  resume         → download resume
  certifications → certificates & courses
  github         → GitHub profile
  linkedin       → LinkedIn profile
  experience     → work & hackathon experience
  clear          → clear terminal`;

export const notFoundResponse =
  "I can help with portfolio-related questions like projects, resume, skills, etc.\nType 'help' to see available commands.";
