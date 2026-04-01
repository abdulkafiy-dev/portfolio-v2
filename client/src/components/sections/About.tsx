import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import avatarImg from "../../assets/avatar.png";

const skills = [
  "React", "TypeScript", "Node.js", "Next.js", 
  "Tailwind CSS", "Framer Motion", "GraphQL", 
  "PostgreSQL", "MongoDB", "Docker", "AWS"
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
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 glass-card shadow-2xl shadow-primary/20">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-500 rounded-full animate-spin-slow opacity-20 blur-xl" />
              <img
                src={avatarImg}
                alt="Profile"
                className="w-full h-full object-cover rounded-full border-4 border-background relative z-10"
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
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Hello! My name is Alex, and I enjoy creating things that live on the internet. My interest in web development started back in 2015 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS taught me a lot about HTML & CSS!
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
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
