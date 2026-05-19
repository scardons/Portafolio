export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  features: string[];
  architecture: string[];
  metrics?: { label: string; value: string }[];
  links: { github?: string; live?: string };
}

export interface Skill {
  name: string;
  icon: string;
  description: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'architecture';
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}
