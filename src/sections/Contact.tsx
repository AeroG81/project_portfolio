import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Github, Linkedin, Twitter } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import RevealOnScroll from "@/components/RevealOnScroll";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com", color: "#fff" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com",
    color: "#0077b5",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com",
    color: "#1da1f2",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:hello@aerog.dev",
    color: "#00f0ff",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
    console.log("Form submitted:", formData);
  };

  return (
    <SectionWrapper id="contact">
      <RevealOnScroll>
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block font-mono text-xs text-accent tracking-widest uppercase">
            // Contact
          </span>
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Let's{" "}
            <span className="text-gradient">connect</span>
          </h2>
          <p className="mt-4 text-zinc-500 max-w-lg mx-auto">
            Have a project in mind or just want to chat? I'm always open to
            discussing new opportunities and ideas.
          </p>
        </div>
      </RevealOnScroll>

      <div className="grid gap-12 md:grid-cols-5">
        {/* Left side: Info */}
        <RevealOnScroll direction="left" className="md:col-span-2">
          <div className="space-y-8">
            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-white">Location</h3>
                <p className="text-sm text-zinc-400">
                  Available worldwide — Remote
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-white">Email</h3>
                <a
                  href="mailto:hello@aerog.dev"
                  className="text-sm text-zinc-400 hover:text-accent transition-colors"
                >
                  hello@aerog.dev
                </a>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h3 className="mb-4 font-semibold text-white">Find me on</h3>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/5 bg-surface text-zinc-500 hover:border-accent/30 hover:text-accent transition-all"
                    title={s.label}
                  >
                    <s.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Terminal decoration */}
            <div className="rounded-lg border border-white/5 bg-surface p-4 font-mono text-xs">
              <div className="flex items-center gap-2 mb-2 text-zinc-600">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
              </div>
              <p className="text-zinc-500">
                <span className="text-accent">$</span> echo "Let's build
                something amazing together!"
              </p>
              <p className="text-emerald-400 mt-1">
                Let's build something amazing together!
              </p>
              <p className="text-zinc-600 mt-1">
                <span className="text-accent">$</span>{" "}
                <span className="animate-pulse">▌</span>
              </p>
            </div>
          </div>
        </RevealOnScroll>

        {/* Right side: Form */}
        <RevealOnScroll direction="right" className="md:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-white/5 bg-surface p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-white/5 bg-background px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/20"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-white/5 bg-background px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/20"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-zinc-300"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl border border-white/5 bg-background px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/20"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-background transition-all hover:shadow-lg hover:shadow-accent/20"
            >
              Send Message
              <Send
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </motion.button>
          </form>
        </RevealOnScroll>
      </div>
    </SectionWrapper>
  );
}
