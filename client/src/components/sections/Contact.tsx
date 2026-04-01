import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the mailto link
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    
    window.location.href = `mailto:isholaabdulkafiy@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Construct the whatsapp link with optional message
    let url = "https://wa.me/2349043406245";
    
    if (formData.message) {
      const text = encodeURIComponent(`Hello, I'm ${formData.name ? formData.name : 'contacting you from your portfolio'}.\n\n${formData.message}`);
      url += `?text=${text}`;
    }
    
    window.open(url, '_blank', 'noopener,noreferrer');
  };

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
            Have a question or want to work together? Fill out the form below to send an email, or chat with me directly on WhatsApp.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto glass-card rounded-2xl p-8 md:p-12 relative border border-white/10 shadow-2xl">
          <form className="space-y-6" onSubmit={handleEmailSubmit}>
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
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe" 
                  required
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
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com" 
                  required
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
                value={formData.message}
                onChange={handleInputChange}
                placeholder="How can I help you?" 
                required
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
              <Button type="submit" size="lg" className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-full h-14 group">
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Send Email
              </Button>
              
              {/* WhatsApp Integration Button */}
              <Button 
                type="button"
                onClick={handleWhatsAppClick}
                size="lg" 
                variant="outline" 
                className="flex-1 rounded-full h-14 glass border-[#25D366]/30 hover:bg-[#25D366]/10 text-foreground group"
              >
                <Phone className="mr-2 h-5 w-5 text-[#25D366] group-hover:animate-pulse" />
                Chat on WhatsApp
              </Button>
            </motion.div>
          </form>
        </div>
      </div>
    </section>
  );
}
