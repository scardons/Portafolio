// src/components/Hero.tsx
import { motion } from 'framer-motion';

const Hero = () => (
  <section 
  id="hero"
  className="h-screen flex items-center justify-center bg-gray-100 bg-gradient-to-b from-gray-300 via-gray-300 to-transparent"
  >
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center"
    >
      <h1 className="text-4xl font-bold text-black">¡Hola! Soy Santiago Cardona</h1>
      <p className="mt-4 text-lg text-black">Desarrollador Fullstack apasionado por la tecnología.</p>
    </motion.div>
  </section>
);

export default Hero;
