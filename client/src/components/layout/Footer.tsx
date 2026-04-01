import { Github, Twitter, Linkedin, Heart } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 relative bg-black/20">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        
        <Link href="/">
          <span className="text-xl font-bold font-sans tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 cursor-pointer mb-8">
            DEV.PORTFOLIO
          </span>
        </Link>

        <div className="flex gap-6 mb-8">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter className="w-5 h-5" />
            <span className="sr-only">Twitter</span>
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between w-full pt-8 border-t border-white/5">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {currentYear} Alex Developer. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-destructive animate-pulse" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
