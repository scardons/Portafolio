import { motion } from 'framer-motion';
import { Zap, BarChart3, Database as DatabaseIcon, Cpu, Clock, TrendingUp } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const items = [
  {
    icon: Zap,
    title: 'Redis Caching',
    description: 'In-memory caching layer reducing database load and achieving sub-50ms API response times for frequently accessed data.',
  },
  {
    icon: BarChart3,
    title: 'Query Optimization',
    description: 'Indexed database queries, eager loading strategies, and N+1 query prevention for efficient data access.',
  },
  {
    icon: DatabaseIcon,
    title: 'Connection Pooling',
    description: 'Efficient database connection management with pooling, reducing connection overhead and improving throughput.',
  },
  {
    icon: Cpu,
    title: 'Code Splitting',
    description: 'Lazy loading and dynamic imports for optimal bundle sizes and faster initial page loads.',
  },
  {
    icon: Clock,
    title: 'Async Processing',
    description: 'Background job processing for heavy operations, keeping the API responsive under load.',
  },
  {
    icon: TrendingUp,
    title: 'Horizontal Scaling',
    description: 'Stateless API design enabling horizontal scaling through load balancing and container orchestration.',
  },
];

const Performance = () => (
  <section id="performance" className="py-24 relative">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <SectionTitle
        title="Performance & Scalability"
        subtitle="Strategies and patterns I use to ensure applications handle growth efficiently."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => {
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
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-amber-400" />
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

export default Performance;
