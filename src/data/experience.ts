import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    role: 'Full-Stack Developer',
    company: 'Logistics & Supply Chain',
    period: '2024 - Present',
    description: 'Building scalable logistics platforms with real-time tracking and route optimization for enterprise clients.',
    highlights: [
      'Architected and built a TMS platform serving logistics operations',
      'Implemented WebSocket-based real-time shipment tracking',
      'Designed Redis caching layer improving response times by 60%',
      'Established CI/CD pipelines with Docker containerization',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Enterprise SaaS Solutions',
    period: '2023 - 2024',
    description: 'Developed enterprise-grade attendance and inventory management systems for multi-tenant use.',
    highlights: [
      'Built attendance management platform with role-based access control',
      'Developed inventory control system with real-time synchronization',
      'Implemented comprehensive reporting and analytics dashboards',
      'Designed scalable RESTful APIs serving multiple enterprise clients',
    ],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Technology & Innovation',
    period: '2022 - 2023',
    description: 'Built full-stack applications using modern technologies and clean architecture principles.',
    highlights: [
      'Developed web applications using React, TypeScript, and Node.js',
      'Implemented Clean Architecture and domain-driven design patterns',
      'Integrated third-party APIs and payment processing gateways',
      'Optimized database queries and improved application performance',
    ],
  },
];
