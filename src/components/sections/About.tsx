import { motion } from 'framer-motion';
import { Code2, Server, Database, Shield } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const stats = [
  { label: 'Technologies', value: '15+' },
  { label: 'Projects Built', value: '10+' },
  { label: 'Years Experience', value: '3+' },
  { label: 'Test Coverage', value: '85%' },
];

const highlights = [
  {
    icon: Code2,
    title: 'Clean Architecture',
    description:
      'Domain-driven design with clear separation of concerns, ensuring maintainable and testable codebases.',
  },
  {
    icon: Server,
    title: 'Scalable APIs',
    description:
      'RESTful and WebSocket APIs designed for high throughput, with Redis caching and optimized queries.',
  },
  {
    icon: Database,
    title: 'Data Optimization',
    description:
      'Database design and query optimization for sub-100ms response times at scale.',
  },
  {
    icon: Shield,
    title: 'Security First',
    description:
      'JWT authentication, role-based access control, and secure API practices across all projects.',
  },
];

const About = () => (
  <section id="about" className="py-24 relative">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <SectionTitle
        title="About Me"
        subtitle="Full-Stack Engineer focused on building scalable, production-ready systems with clean architecture."
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center p-6 bg-white/[0.02] border border-white/[0.06] rounded-xl"
          >
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {highlights.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex gap-4 p-6 bg-white/[0.02] border border-white/[0.06] rounded-xl hover:bg-white/[0.04] transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default About;
