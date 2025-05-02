// src/components/Skills.tsx
import { motion } from 'framer-motion';

const skills = ['React', 'Tailwind CSS', 'Framer Motion', 'JavaScript', 'HTML', 'CSS', 'Typescript'];

const Skills = () => (
  <section id="skills" className="py-20 bg-gray-100">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Habilidades</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-4 rounded shadow text-center"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
