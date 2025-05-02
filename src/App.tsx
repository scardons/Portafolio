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
  <div className='bg-[#0d0d0d] min-h-screen'>
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
