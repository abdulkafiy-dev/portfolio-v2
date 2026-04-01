import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Youtube } from "lucide-react";
import heroBg from "../../assets/hero-bg.png";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Abstract Background"
          className="w-full h-full object-cover opacity-30 dark:opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/50 to-background" />
      </div>

      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Available for new opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6"
        >
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 text-glow">
            Abdulkafiy
          </span>
          <br />
          Frontend Developer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-3xl text-lg md:text-xl text-muted-foreground mb-10"
        >
          I build high-performance web interfaces that turn complex problems into simple, responsive experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <a href="#projects">
            <Button size="lg" className="w-full sm:w-auto rounded-full px-8 bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(139,92,246,0.5)]">
              View Projects
            </Button>
          </a>
          <a href="https://abdulkafiy.netlify.app/assets/cv/Abdulkafiy_Abdulkabir_Resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 glass border-primary/20 hover:bg-primary/10">
              Download CV
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex gap-6 mb-12"
        >
          <a href="https://github.com/abdulkafiy-dev" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-card hover:text-primary transition-all hover:scale-110">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://ng.linkedin.com/in/abdulkafiy-abdulkabir-5b64541b4" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-card hover:text-primary transition-all hover:scale-110">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:isholaabdulkafiy@gmail.com" className="p-3 rounded-full glass-card hover:text-primary transition-all hover:scale-110">
            <Mail className="w-5 h-5" />
          </a>
          <a href="https://www.youtube.com/@abdulkafiy" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-card hover:text-primary transition-all hover:scale-110">
            <Youtube className="w-5 h-5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
