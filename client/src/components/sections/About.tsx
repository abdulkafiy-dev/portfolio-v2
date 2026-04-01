import { motion } from "framer-motion";
import { Badge } from "../ui/badge";

const skills = [
  "HTML", "CSS", "JavaScript", "React", 
  "Tailwind CSS", "Bootstrap", "Git", "GitHub", 
  "Responsive Design", "Web Accessibility", "Performance Optimization"
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans tracking-tight">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl p-2 glass-card shadow-2xl shadow-primary/20 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-500 rounded-2xl animate-spin-slow opacity-20 blur-xl" />
              <img
                src="https://abdulkafiy.netlify.app/assets/images/abdulkafiy.png"
                alt="Abdulkafiy Abdulkabir"
                className="w-full h-full object-cover rounded-xl border-2 border-white/10 relative z-10 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              I code things that live on the internet.
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              I'm Abdulkafiy, a designer-developer who specializes in crafting reliable web experiences at the intersection of design and logic. I prioritize web fundamentals and clean coding practices over rapid, first-draft builds.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm eager to bring my eye for detail to a collaborative team where I can contribute meaningfully and grow professionally. When I'm not coding, I enjoy refining UX details, exploring new technologies, and collaborating with multidisciplinary teams to solve real problems. If you're looking for someone who values thoughtful craft and steady growth, let's chat.
            </p>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Badge variant="secondary" className="px-3 py-1 bg-secondary hover:bg-primary/20 hover:text-primary transition-colors cursor-default border border-white/5">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
