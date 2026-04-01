import { motion } from "framer-motion";
import { Send, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans tracking-tight">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full mb-6" />
          <p className="max-w-2xl text-muted-foreground text-lg">
            Have a question or want to work together? Leave a message below or connect with me directly on WhatsApp.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto glass-card rounded-2xl p-8 md:p-12 relative border border-white/10 shadow-2xl">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-2"
              >
                <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                <Input 
                  id="name" 
                  placeholder="John Doe" 
                  className="bg-background/50 border-white/10 focus-visible:ring-primary/50 text-foreground h-12"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-2"
              >
                <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john@example.com" 
                  className="bg-background/50 border-white/10 focus-visible:ring-primary/50 text-foreground h-12"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-2"
            >
              <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
              <Textarea 
                id="message" 
                placeholder="How can I help you?" 
                className="min-h-[150px] bg-background/50 border-white/10 focus-visible:ring-primary/50 text-foreground resize-none"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button size="lg" className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-full h-14 group">
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
              
              {/* WhatsApp Integration Button */}
              <a 
                href="https://wa.me/2349043406245" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button size="lg" variant="outline" className="w-full rounded-full h-14 glass border-[#25D366]/30 hover:bg-[#25D366]/10 text-foreground group">
                  <Phone className="mr-2 h-5 w-5 text-[#25D366] group-hover:animate-pulse" />
                  Chat on WhatsApp
                </Button>
              </a>
            </motion.div>
          </form>
        </div>
      </div>
    </section>
  );
}
