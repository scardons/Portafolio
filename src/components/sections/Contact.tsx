import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, FileText, Send, ArrowRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const Contact = () => (
  <section id="contact" className="py-24 relative">
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <SectionTitle
        title="Get In Touch"
        subtitle="Let's discuss how I can help build your next project."
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-cyan-500/5 via-violet-500/5 to-transparent border border-white/[0.08] rounded-2xl p-8 md:p-12 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center mx-auto mb-6">
          <Send className="w-8 h-8 text-cyan-400" />
        </div>

        <h3 className="text-2xl font-bold text-white mb-4">
          Let's Work Together
        </h3>
        <p className="text-gray-400 max-w-lg mx-auto mb-8">
          I'm currently available for freelance work and full-time opportunities.
          If you have a project that needs scalable architecture, reach out.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="mailto:santiago.cardona@email.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-medium rounded-xl hover:opacity-90 transition-opacity"
          >
            <Mail className="w-4 h-4" />
            Say Hello
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/scardons/EmpresaLogistica/raw/main/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/[0.12] text-gray-300 font-medium rounded-xl hover:bg-white/[0.06] transition-colors"
          >
            <FileText className="w-4 h-4" />
            Download CV
          </a>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/scardons"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/santiago-cardona-1a27511a1/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Contact;
