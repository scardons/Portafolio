// src/components/About.tsx
import { motion } from 'framer-motion';

const About = () => (
  <section id="about" className="py-20 bg-white">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="max-w-4xl mx-auto px-4"
    >
      <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
      <p>
      de Software con experiencia en el desarrollo de aplicaciones backend y frontend utilizando tecnologías como TypeScript, React, Tailwind CSS, Framer Motion, Node.js, JavaScript, MySQL, Docker y más. Experto en implementación de Clean Architecture, gestión de bases de datos yoptimización de procesos logísticos. Apasionado por crear soluciones escalables,seguras y eficientes .
      </p>
    </motion.div>
  </section>
);

export default About;
