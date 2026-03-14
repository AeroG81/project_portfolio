import RevealOnScroll from "@/components/RevealOnScroll";
import SectionWrapper from "@/components/SectionWrapper";
import { socials } from "@/utils/constant";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <RevealOnScroll>
        <div className="mb-16">
          <span className="mb-3 inline-block font-pixel text-xs text-accent tracking-widest uppercase">
            // Contact
          </span>
          <h2 className="text-4xl font-bold text-white md:text-5xl tracking-tight">
            Let's <span className="text-gradient">connect</span>
          </h2>
          <p className="mt-4 text-zinc-500 max-w-xl">
            Want to chat? I am always open to discussing new opportunities.
          </p>
        </div>
      </RevealOnScroll>

      <div className="grid gap-12 md:grid-cols-5">
        {/* Left side: Info */}
        <RevealOnScroll direction="left" className="md:col-span-2">
          <div className="space-y-8">
            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/5 bg-surface text-accent">
                <MapPin size={18} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Location</h3>
                <p className="text-sm text-zinc-500 mt-0.5">
                  Available worldwide — Remote
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/5 bg-surface text-accent">
                <Mail size={18} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Email</h3>
                <a
                  href="mailto:wpan.work0017@gmail.com"
                  className="text-sm text-zinc-500 hover:text-accent transition-colors mt-0.5 inline-block"
                >
                  wpan.work0017@gmail.com
                </a>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-white">
                Find me on
              </h3>
              <div className="flex gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-10 w-10 items-center justify-center border border-white/5 bg-surface text-zinc-500 hover:border-accent/30 hover:text-accent transition-all"
                    title={s.label}
                  >
                    <s.icon size={16} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Right side: Form */}
        <RevealOnScroll direction="right" className="md:col-span-3">
          {/* Terminal decoration */}
          <div className="border border-white/5 bg-surface p-5 font-mono text-xs">
            <div className="flex items-center gap-1.5 mb-3">
              <div className="h-2.5 w-2.5 rounded-full bg-green-700" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-700" />
              <div className="h-2.5 w-2.5 rounded-full bg-red-700" />
            </div>
            <p className="text-zinc-500">
              <span className="text-accent">$</span> history
            </p>
            <p className="text-emerald-400 mt-1">
              001 google "How to create a portfolio website?"
              <br />
              <p className="text-zinc-500">...220 more lines</p>
              221 curl -fsSL https://claude.ai/install.sh | bash
              <br />
              222 /skills "Create a portfolio website for me"
              <br />
            </p>
            <p className="text-zinc-500 mt-1">
              <span className="text-accent">$</span> echo "Never Stop
              Exploring!"
            </p>
            <p className="text-emerald-400 mt-1">Never Stop Exploring!</p>
            <p className="group text-zinc-600 mt-1">
              <span className="text-accent">$</span>{" "}
              <span className="animate-pulse">rm -rf /▌</span>
              <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-zinc-500 italic">
                (just kidding, I will never do that in production)
              </span>
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </SectionWrapper>
  );
}
