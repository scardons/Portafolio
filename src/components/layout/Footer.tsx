import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => (
  <footer className="border-t border-white/[0.06] bg-dark-900">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <span className="text-lg font-bold text-white">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              SC
            </span>
            <span className="text-gray-400">.dev</span>
          </span>
          <p className="text-sm text-gray-500 mt-1">
            Full-Stack Engineer. Building scalable systems.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/scardons"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/santiago-cardona-1a27511a1/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:santiago.cardona@email.com"
            className="p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8 pt-8 border-t border-white/[0.06]">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Santiago Cardona. All rights reserved.
        </p>

        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white cursor-pointer transition-colors"
        >
          Back to top
          <ArrowUp className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
