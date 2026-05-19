import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Technologies from './components/sections/Technologies';
import Projects from './components/sections/Projects';
import Architecture from './components/sections/Architecture';
import Process from './components/sections/Process';
import Performance from './components/sections/Performance';
import Contact from './components/sections/Contact';
import { ParticlesBackground } from './components/ParticlesBackground';

const App = () => (
  <div className="bg-dark-950 min-h-screen relative">
    <ParticlesBackground />
    <Navbar />
    <main className="relative z-10">
      <Hero />
      <About />
      <Experience />
      <Technologies />
      <Projects />
      <Architecture />
      <Process />
      <Performance />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;
