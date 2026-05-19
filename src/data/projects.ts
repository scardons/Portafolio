import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'tms-logistics',
    title: 'TMS Logistics Platform',
    description: 'Enterprise shipment tracking and route optimization system with real-time updates.',
    longDescription:
      'A comprehensive transportation management system built with Clean Architecture principles. The platform handles shipment tracking, route optimization, and real-time logistics coordination across distributed microservices.',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'WebSockets', 'Redis', 'JWT', 'Docker', 'MySQL', 'Clean Architecture'],
    features: [
      'Real-time shipment tracking with WebSocket updates',
      'Route optimization using advanced algorithms',
      'Redis caching layer for sub-50ms response times',
      'JWT-based authentication with role-based access',
      'Dockerized microservices architecture',
      'Comprehensive unit and integration tests',
    ],
    architecture: [
      'Clean Architecture with domain-driven design',
      'Repository pattern for data access abstraction',
      'Service layer for business logic encapsulation',
      'Event-driven architecture for real-time updates',
      'CQRS pattern for read/write separation',
    ],
    metrics: [
      { label: 'Response Time', value: '<50ms' },
      { label: 'Test Coverage', value: '85%' },
      { label: 'API Endpoints', value: '45+' },
    ],
    links: {
      github: 'https://github.com/scardons/EmpresaLogistica',
    },
  },
  {
    id: 'attendance-management',
    title: 'Attendance Management Platform',
    description: 'Enterprise employee attendance tracking with analytics dashboards.',
    longDescription:
      'A robust attendance management system featuring employee time tracking, schedule management, and comprehensive reporting. Built with role-based access for multi-tenant enterprise use.',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'JWT', 'Docker'],
    features: [
      'Employee check-in/check-out with validation',
      'Schedule management and shift planning',
      'Analytics dashboard with real-time metrics',
      'Role-based access control (Admin, Manager, Employee)',
      'Automated reporting with multiple export formats',
      'Audit logging for compliance tracking',
    ],
    architecture: [
      'Layered architecture with clear separation of concerns',
      'Middleware-based authentication and authorization',
      'Observer pattern for real-time dashboard updates',
      'Strategy pattern for multiple report formats',
    ],
    metrics: [
      { label: 'Users Supported', value: '1000+' },
      { label: 'Report Types', value: '12+' },
      { label: 'Uptime', value: '99.9%' },
    ],
    links: {},
  },
  {
    id: 'inventory-management',
    title: 'Inventory Management Platform',
    description: 'Real-time inventory control system with stock alerts and scalable APIs.',
    longDescription:
      'A scalable inventory management platform designed for multi-warehouse operations. Features real-time stock synchronization, automated reorder alerts, and comprehensive reporting dashboards.',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Redis', 'WebSockets', 'Docker'],
    features: [
      'Real-time stock level synchronization across warehouses',
      'Automated low-stock alerts and reorder suggestions',
      'Multi-warehouse inventory tracking with transfer support',
      'Batch and expiry date management',
      'RESTful API with comprehensive documentation',
      'CSV/Excel import and export capabilities',
    ],
    architecture: [
      'RESTful API design with versioning strategy',
      'Redis caching for product catalog queries',
      'WebSocket-based real-time inventory updates',
      'Optimistic concurrency control for stock operations',
    ],
    metrics: [
      { label: 'Items Tracked', value: '10K+' },
      { label: 'API Latency', value: '<100ms' },
      { label: 'Warehouses', value: 'Multi' },
    ],
    links: {},
  },
];
