// src/components/Contact.tsx
import { motion } from 'framer-motion';

const Contact = () => (
  <section id="contact" className="py-20 bg-gray-100">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Contacto</h2>
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col space-y-4"
      >
        <input type="text" placeholder="Nombre" className="p-2 border border-gray-300 rounded" />
        <input type="email" placeholder="Correo electrónico" className="p-2 border border-gray-300 rounded" />
        <textarea placeholder="Mensaje" className="p-2 border border-gray-300 rounded h-32"></textarea>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Enviar
        </button>
      </motion.form>
    </div>
  </section>
);

export default Contact;
