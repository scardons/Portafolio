import { motion } from 'framer-motion';
import { ExternalLink, Github, CheckCircle, ChevronRight } from 'lucide-react';
import TechBadge from './TechBadge';
import MetricCard from './MetricCard';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const isReversed = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-24 last:mb-0"
    >
      <div
        className={`flex flex-col lg:flex-row gap-8 lg:gap-12 ${isReversed ? 'lg:flex-row-reverse' : ''}`}
      >
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
            </div>
            <span className="text-sm text-cyan-400 font-mono font-medium">
              0{index + 1}
            </span>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-3">
              {project.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-3">
              Key Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.slice(0, 4).map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-2 text-sm text-gray-400"
                >
                  <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 5).map((tag) => (
              <TechBadge key={tag} name={tag} />
            ))}
            {project.tags.length > 5 && (
              <span className="px-3 py-1 text-xs font-medium text-gray-500">
                +{project.tags.length - 5}
              </span>
            )}
          </div>

          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.06] hover:bg-white/[0.1] text-white rounded-lg transition-colors text-sm"
            >
              <Github className="w-4 h-4" />
              View Source
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>

        <div className="flex-1 space-y-6">
          {project.metrics && (
            <div className="grid grid-cols-3 gap-4 bg-white/[0.02] border border-white/[0.06] rounded-xl p-4">
              {project.metrics.map((metric) => (
                <MetricCard key={metric.label} {...metric} />
              ))}
            </div>
          )}

          <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6">
            <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Architecture Highlights
            </h4>
            <ul className="space-y-3">
              {project.architecture.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-gray-400"
                >
                  <ChevronRight className="w-4 h-4 text-violet-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
