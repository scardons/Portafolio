import { motion } from 'framer-motion';
import { Layers, GitBranch, Workflow, Box, Shield, RefreshCw } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const principles = [
  {
    icon: Layers,
    title: 'Clean Architecture',
    description: 'Domain-driven design with strict separation of concerns across presentation, application, domain, and infrastructure layers.',
  },
  {
    icon: GitBranch,
    title: 'Repository Pattern',
    description: 'Abstracted data access layer enabling seamless switching between data sources and simplified unit testing.',
  },
  {
    icon: Workflow,
    title: 'Event-Driven Architecture',
    description: 'Decoupled services communicating through events for real-time updates and scalable asynchronous processing.',
  },
  {
    icon: Box,
    title: 'Microservices Ready',
    description: 'Dockerized services with independent scalability, deployment pipelines, and isolated failure domains.',
  },
  {
    icon: Shield,
    title: 'Security Layers',
    description: 'JWT authentication, role-based access control, input validation, and middleware-based authorization.',
  },
  {
    icon: RefreshCw,
    title: 'CQRS Pattern',
    description: 'Command Query Responsibility Segregation for optimized read/write operations and scalable data access.',
  },
];

const Architecture = () => (
  <section id="architecture" className="py-24 relative">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <SectionTitle
        title="Architecture & System Design"
        subtitle="How I structure enterprise applications for scalability, maintainability, and performance."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {principles.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 hover:bg-white/[0.04] transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Architecture;
