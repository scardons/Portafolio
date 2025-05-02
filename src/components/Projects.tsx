// src/components/Projects.tsx
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Proyecto Gestion de envios',
    description: 'Este es un proyecto backend desarrollado en TypeScript con Express , que permite gestionar envíos, optimizar rutas y realizar seguimiento en tiempo real. Incluye autenticación con JWT, caché con Redis, pruebas unitarias/integración y arquitectura limpia.',
    link: 'https://scardons.github.io/EmpresaLogistica/', 
  },
  // {
  //   title: 'Proyecto 2',
  //   description: 'Descripción del proyecto 2.',
  //   link: '#',
  // },
  // Agrega más proyectos según sea necesario
];

const Projects = () => (
  <section id="projects" className="py-20 bg-white ">
    <div className="max-w-4xl mx-auto px-4 relative z-10"> {/*//aqui cambio la prioridad con relative z-10*/}
      <h2 className="text-3xl font-bold mb-8 text-center">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-100 p-6 rounded shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline">Ver más</a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
