import type { Skill } from '../types';

export const skills: Skill[] = [
  { name: 'React', icon: 'Code2', description: 'UI Development', category: 'frontend' },
  { name: 'TypeScript', icon: 'FileCode', description: 'Type Safety', category: 'frontend' },
  { name: 'Node.js', icon: 'Server', description: 'Runtime Environment', category: 'backend' },
  { name: 'Express', icon: 'Route', description: 'API Framework', category: 'backend' },
  { name: 'MySQL', icon: 'Database', description: 'Relational Database', category: 'database' },
  { name: 'Redis', icon: 'Zap', description: 'In-Memory Cache', category: 'database' },
  { name: 'Docker', icon: 'Box', description: 'Containerization', category: 'devops' },
  { name: 'WebSockets', icon: 'Radio', description: 'Real-Time Comm.', category: 'backend' },
  { name: 'JWT', icon: 'Shield', description: 'Authentication', category: 'backend' },
  { name: 'Clean Architecture', icon: 'Layers', description: 'Domain-Driven Design', category: 'architecture' },
];
