// src/components/Contact.tsx
import { Mail, Github, Linkedin, FileText } from 'lucide-react';

const Contact = () => (
  <section id="contact" className="py-20 bg-gray-100">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Contacto</h2>

      {/* Redes Sociales */}
      <div className="flex justify-center space-x-6 mb-8 relative z-10">
        <a
          href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
          className="flex items-center space-x-2 text-gray-700 hover:text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail className="w-5 h-5" />
          <span>Correo</span>
        </a>
        <a
          href="https://github.com/scardons"
          className="flex items-center space-x-2 text-gray-700 hover:text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-5 h-5" />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/santiago-cardona-1a27511a1/"
          className="flex items-center space-x-2 text-gray-700 hover:text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-5 h-5" />
          <span>LinkedIn</span>
        </a>
        <a
          href="file:///C:/Users/Santiago/Desktop/Desarrollador%20de%20software.pdf"
          className="flex items-center space-x-2 text-gray-700 hover:text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FileText className="w-5 h-5" />
          <span>Descargar CV</span>
        </a>
      </div>

    </div>
  </section>
);

export default Contact;
