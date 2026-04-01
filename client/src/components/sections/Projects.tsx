import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";

const projects = [
  {
    title: "Counting Application | JS",
    description: "This Counting app is useful when it comes to counting, whenever you refreshes your browser, your count still shows up.",
    image: "https://abdulkafiy.netlify.app/assets/images/counter-app.JPG",
    tags: ["JavaScript", "HTML", "CSS"],
    liveUrl: "https://abdulkafiy.netlify.app/#",
    githubUrl: "https://abdulkafiy.netlify.app/#"
  },
  {
    title: "Start Bootstrap UI Kit Clone",
    description: "This project is a responsive SB-UI clone built with modern web technologies, featuring a visually appealing, user-friendly landing page.",
    image: "https://abdulkafiy.netlify.app/assets/images/sb-ui.jpeg",
    tags: ["HTML", "CSS", "Bootstrap"],
    liveUrl: "https://abdulkafiy.netlify.app/#",
    githubUrl: "https://github.com/abdulkafiy-dev/responsive-landing-page"
  },
  {
    title: "Cover Landing Page",
    description: "The landing page is carefully crafted to deliver a visually appealing design, ensure a seamless user experience, and optimize conversions.",
    image: "https://abdulkafiy.netlify.app/assets/images/cover.jpeg",
    tags: ["HTML", "CSS", "Responsive Design"],
    liveUrl: "https://abdulkafiy.netlify.app/#",
    githubUrl: "https://github.com/abdulkafiy-dev/cover-template-landing-page"
  },
  {
    title: "Tribute Website",
    description: "A beautiful, responsive tribute page built with pure HTML and CSS. This project is simple, lightweight, and easy to customize.",
    image: "https://abdulkafiy.netlify.app/assets/images/tribute.jpeg",
    tags: ["HTML", "CSS"],
    liveUrl: "https://abdulkafiy.netlify.app/#",
    githubUrl: "https://github.com/abdulkafiy-dev/tribute-page"
  },
  {
    title: "Gymnasium Website",
    description: "The Gymnasium Website is a modern, responsive web platform designed to promote fitness centers and help users connect with gym services.",
    image: "https://abdulkafiy.netlify.app/assets/images/gym_screenshot.png",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://abdulkafiy.netlify.app/#",
    githubUrl: "https://github.com/abdulkafiy-dev/gym-website"
  },
  {
    title: "Bootstrap Login Clone",
    description: "This project is a clone of a Bootstrap login design implemented using HTML, CSS, and JavaScript. It provides a responsive and user-friendly interface.",
    image: "https://abdulkafiy.netlify.app/assets/images/bootstrap_clone.png",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    liveUrl: "https://abdulkafiy.netlify.app/#",
    githubUrl: "https://github.com/abdulkafiy-dev/bootstrap-login-clone"
  },
  {
    title: "Css Animated Menu Icon",
    description: "Demonstrates the use of pure CSS and minimal JavaScript to create an interactive hamburger menu button for modern web interfaces.",
    image: "https://abdulkafiy.netlify.app/assets/images/combined.jpg",
    tags: ["CSS", "JavaScript", "Animations"],
    liveUrl: "https://abdulkafiy.netlify.app/#",
    githubUrl: "https://github.com/abdulkafiy-dev/css-animated-menu-icon"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-black/5 dark:bg-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans tracking-tight">
            Projects <span className="text-primary">so far...</span>
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden glass-card hover:-translate-y-2 transition-transform duration-300 group border-white/10 relative">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-top"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-bold font-sans line-clamp-1">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-muted-foreground mb-4 text-sm line-clamp-3">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded-md border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4 pt-4 border-t border-white/5 mt-auto">
                  <a 
                    href={project.liveUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" /> Source
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
