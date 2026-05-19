import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="text-center mb-16"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
      {title}
    </h2>
    <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full" />
    {subtitle && (
      <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionTitle;
