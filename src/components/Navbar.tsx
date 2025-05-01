// src/components/Navbar.tsx
import { Link } from 'react-scroll';

const Navbar = () => (
  <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-md shadow-md z-50">
    <div className="max-w-6xl mx-auto px-4">
      <ul className="flex justify-center md:justify-end items-center space-x-6 py-4 text-gray-800 font-semibold text-sm md:text-base">
        <li>
          <Link to="hero" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600 transition">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600 transition">
            Sobre mí
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600 transition">
            Habilidades
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600 transition">
            Proyectos
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600 transition">
            Contacto
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
