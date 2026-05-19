import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const GlassCard = ({ children, className = '', delay = 0 }: GlassCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -4 }}
    className={`bg-white/[0.03] border border-white/[0.06] backdrop-blur-xl rounded-2xl p-6 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.05] ${className}`}
  >
    {children}
  </motion.div>
);

export default GlassCard;
