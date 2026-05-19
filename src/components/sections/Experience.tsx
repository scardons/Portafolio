import { motion } from 'framer-motion';
import { Briefcase, ChevronRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { experiences } from '../../data/experience';

const Experience = () => (
  <section id="experience" className="py-24 relative">
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <SectionTitle
        title="Experience"
        subtitle="Professional journey building enterprise-scale applications."
      />

      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-violet-500/50 to-transparent" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative pl-14"
            >
              <div className="absolute left-4 top-1 w-4 h-4 rounded-full bg-dark-950 border-2 border-cyan-400 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>

              <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 hover:bg-white/[0.04] transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-cyan-400" />
                    <h3 className="text-lg font-semibold text-white">
                      {exp.role}
                    </h3>
                  </div>
                  <span className="text-xs text-cyan-400 font-mono sm:ml-auto">
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm text-gray-300 font-medium mb-1">
                  {exp.company}
                </p>
                <p className="text-sm text-gray-400 mb-4">{exp.description}</p>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-sm text-gray-400"
                    >
                      <ChevronRight className="w-4 h-4 text-violet-400 mt-0.5 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
