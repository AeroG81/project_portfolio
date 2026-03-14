import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12 px-6">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-zinc-500 text-sm">
          <span>Built with</span>
          <Heart size={14} className="text-accent fill-accent" />
          <span>by AeroG</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-accent transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-accent transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:hello@aerog.dev"
            className="text-zinc-500 hover:text-accent transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="text-zinc-600 text-xs">
          &copy; {new Date().getFullYear()} AeroG. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
