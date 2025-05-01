// src/App.tsx
import './styles/index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { ParticlesBackground } from './components/ParticlesBackground';


const App = () => (
  <div>
    {/* Este es el div de prueba para ver si Tailwind funciona */}
    <div className="bg-purple-500 text-white p-4">
      Esto debería tener fondo rojo si Tailwind funciona.
    </div>
    <ParticlesBackground />
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </div>
);

export default App;
