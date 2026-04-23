/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const PERSONAL_INFO = {
  name: "Yoon Park",
  koreanName: "박윤아",
  role: "Service Planner",
  location: "Seoul, Korea",
  email: "pya6667@gmail.com",
  phone: "+82) 010-3179-8185",
  slogan: "문제를 구조화해 실현 가능한 기획을 만드는 서비스 기획자",
  intro: "I specialize in structuring complex problems and transforming them into feasible, high-impact service plans. With a background in mobile system engineering and experience in AI-driven solutions, I blend technical understanding with user-centric design.",
  socials: {
    github: "https://github.com", // Placeholder
    linkedin: "https://linkedin.com", // Placeholder
    instagram: "https://instagram.com", // Placeholder
  }
};

export const STATS = [
  { label: "years of experience", value: "3+" },
  { label: "client retention rate", value: "95%" },
  { label: "satisfied clients", value: "18+" },
  { label: "projects finished", value: "14+" },
];

export const PROJECTS = [
  {
    id: "jobpang",
    title: "Jobpang (취팡)",
    category: "Career Management Platform",
    date: "2025.02 - 03",
    description: "AI-customized career management service that integrates scattered job search data and provides roadmap for success.",
    contribution: [
      "Designed AI solution for customized roadmaps based on pass datasets.",
      "Conducted A/B testing with Figma prototypes for modular UX efficiency.",
    ],
    image: "https://images.unsplash.com/photo-1454165833767-027ee3d61dfd?q=80&w=1000&auto=format&fit=crop",
    tags: ["Service Planning", "AI Roadmap", "UX/UI"],
  },
  {
    id: "purple",
    title: "Purple",
    category: "AI Perfume Recommendation",
    date: "2023.10 - 12",
    description: "AI service recommending perfumes based on user's image and atmosphere.",
    contribution: [
      "Mapped 68 brands and 70 notes for AI recommendation logic.",
      "Reduced perfume selection time by 95% (3 hours to 6 minutes).",
      "Achieved 83% satisfaction rate from 50 survey participants.",
    ],
    image: "https://images.unsplash.com/photo-1541643600914-722180c9704a?q=80&w=1000&auto=format&fit=crop",
    tags: ["PM", "Backend", "AI Recommendation"],
  },
  {
    id: "reader",
    title: "Reader",
    category: "AI Document Digitization",
    date: "2023.10 - 12",
    description: "AI-based service for digitizing document images and providing chatbot analysis.",
    contribution: [
      "Planned user-defined field extraction model.",
      "Automated workflow reducing document analysis time by 80%.",
      "Implemented JWT auth and Docker-based server management.",
    ],
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1000&auto=format&fit=crop",
    tags: ["Backend", "Workflow Automation", "AI"],
  },
  {
    id: "greenmamma",
    title: "Green Mamma (그린맘마)",
    category: "Plant Managing Service",
    date: "2023.03 - 06",
    description: "IoT kit and app-based plant management service.",
    contribution: [
      "Designed service flow and prototype.",
      "Implemented real-time moisture monitoring with Firebase push notifications.",
      "Enhanced UX with plant growth diary features.",
    ],
    image: "https://images.unsplash.com/photo-1485848395967-65dff62dc35b?q=80&w=1000&auto=format&fit=crop",
    tags: ["Frontend", "Arduino", "IoT"],
  },
];

export const WORK_EXPERIENCE = [
  {
    company: "Hotwide",
    role: "Dev Intern",
    period: "2025.06 - 12",
    task: "Trademark investigation process & internal system planning",
    details: [
      "Reduced investigation time by 50% using Python automation.",
      "Improved data extraction speed by 90% via DB-based web service.",
    ]
  },
  {
    company: "Alchera",
    role: "Business Development Assistant",
    period: "2024.09 - 11",
    task: "'Workple' user recruitment & AI market research",
    details: [
      "Assisted in recruiting 25 initial business sites.",
      "Monitored IT/AI news and competitor trends 14 times.",
    ]
  },
  {
    company: "Day1 Company",
    role: "Planning & Operations Intern",
    period: "2024.07",
    task: "Junior dev career seminar & PM interview content",
    details: [
      "Led seminar for 60+ participants with 80% satisfaction.",
      "Created PM interview content for recruitment marketing.",
    ]
  }
];

export const SKILLS = [
  { category: "Service Planning", skills: ["Desk Research", "Data Analysis", "IA Planning"], level: 90 },
  { category: "Tools", skills: ["Excel", "PowerPoint", "Figma"], level: 95 },
  { category: "Data Analysis", skills: ["SQL", "Python", "Spreadsheets"], level: 85 },
  { category: "Collaboration", skills: ["Notion", "Slack", "Swit"], level: 90 },
];

export const PROCESS = [
  {
    step: "01",
    title: "Discovery",
    description: "Deep dive into goals and long-term vision. Research competitors and market trends.",
  },
  {
    step: "02",
    title: "Design",
    description: "Create mockups that bring your brand to life. Wireframe and map out the site structure.",
  },
  {
    step: "03",
    title: "Build",
    description: "Construct the service using the best-fit technology stack. Ensure high performance.",
  },
  {
    step: "04",
    title: "Launch",
    description: "Go live, monitor performance, and iterate based on real feedback.",
  },
];
