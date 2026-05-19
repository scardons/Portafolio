import { motion } from 'framer-motion';

interface MetricCardProps {
  label: string;
  value: string;
  delay?: number;
}

const MetricCard = ({ label, value, delay = 0 }: MetricCardProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    className="text-center p-4"
  >
    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
      {value}
    </div>
    <div className="text-sm text-gray-400 mt-1">{label}</div>
  </motion.div>
);

export default MetricCard;
