import { motion } from 'framer-motion';
import {
  Code2,
  FileCode,
  Server,
  Route,
  Database,
  Zap,
  Box,
  Radio,
  Shield,
  Layers,
} from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { skills } from '../../data/skills';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Code2,
  FileCode,
  Server,
  Route,
  Database,
  Zap,
  Box,
  Radio,
  Shield,
  Layers,
};

const categoryColors: Record<string, string> = {
  frontend: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/20',
  backend: 'from-violet-500/20 to-purple-500/20 border-violet-500/20',
  database: 'from-amber-500/20 to-orange-500/20 border-amber-500/20',
  devops: 'from-pink-500/20 to-rose-500/20 border-pink-500/20',
  architecture: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/20',
};

const categoryLabels: Record<string, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Database',
  devops: 'DevOps',
  architecture: 'Architecture',
};

const Technologies = () => (
  <section id="technologies" className="py-24 relative">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <SectionTitle
        title="Technologies"
        subtitle="Modern tools and frameworks I use to build production-grade systems."
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {skills.map((skill, i) => {
          const Icon = iconMap[skill.icon];
          const colorClass = categoryColors[skill.category];

          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className={`bg-gradient-to-br ${colorClass} border rounded-xl p-4 text-center transition-all duration-300 hover:shadow-lg`}
            >
              <div className="flex justify-center mb-3">
                {Icon && <Icon className="w-8 h-8 text-white" />}
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">
                {skill.name}
              </h3>
              <p className="text-xs text-gray-400 mb-2">{skill.description}</p>
              <span className="text-[10px] uppercase tracking-wider text-gray-500">
                {categoryLabels[skill.category]}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Technologies;
