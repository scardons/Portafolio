import { motion } from 'framer-motion';
import { ClipboardList, FileCode, TestTube, Rocket, GitPullRequest, Eye } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const steps = [
  {
    icon: ClipboardList,
    title: 'Requirements & Planning',
    description: 'Define system requirements, choose technology stack, design data models, and plan API contracts.',
  },
  {
    icon: FileCode,
    title: 'Architecture & Development',
    description: 'Implement Clean Architecture with separation of concerns. Build services, repositories, and API endpoints.',
  },
  {
    icon: TestTube,
    title: 'Testing & Validation',
    description: 'Unit tests, integration tests, and end-to-end testing. API validation and performance benchmarking.',
  },
  {
    icon: GitPullRequest,
    title: 'Code Review & CI/CD',
    description: 'Peer review process, automated CI pipelines, Docker image builds, and deployment automation.',
  },
  {
    icon: Rocket,
    title: 'Deployment & Monitoring',
    description: 'Containerized deployment, environment configuration, health checks, and performance monitoring.',
  },
  {
    icon: Eye,
    title: 'Iterate & Optimize',
    description: 'Gather feedback, monitor performance metrics, optimize bottlenecks, and ship improvements.',
  },
];

const Process = () => (
  <section id="process" className="py-24 relative">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <SectionTitle
        title="Development Process"
        subtitle="A systematic approach to building production-grade software."
      />

      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/30 via-violet-500/30 to-transparent hidden md:block" />

        <div className="space-y-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative md:pl-16"
              >
                <div className="hidden md:flex absolute left-4 top-1 w-8 h-8 rounded-full bg-dark-900 border border-cyan-500/30 items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-cyan-400" />
                </div>

                <div className="flex gap-4 items-start">
                  <div className="md:hidden w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 flex-1 hover:bg-white/[0.04] transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs text-cyan-400 font-mono">
                        Step 0{i + 1}
                      </span>
                      <h3 className="text-white font-semibold">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-400">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default Process;
