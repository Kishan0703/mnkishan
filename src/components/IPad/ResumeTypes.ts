export interface ResumeData {
  personal: {
    name: string;
    role: string;
    summary: string;
    phone?: string;
    email: string;
    github: string;
    linkedin: string;
  };

  education: Education[];

  projects: Project[];

  openSource: OpenSource[];

  skills: SkillGroup[];
}

export interface Education {
  degree: string;
  university: string;
  location?: string;
  duration: string;
  cgpa?: string;
}

export interface Project {
  name: string;
  stack: string[];
  type?: string;
  points: string[];
}

export interface OpenSource {
  name: string;
  focus: string;
  github: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}
