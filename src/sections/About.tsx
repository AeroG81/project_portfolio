import { Code2, Cpu, Rocket, Zap } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import RevealOnScroll from "@/components/RevealOnScroll";

const highlights = [
  {
    icon: Code2,
    label: "Clean Code",
    desc: "Writing maintainable, scalable systems",
  },
  {
    icon: Cpu,
    label: "Full Stack",
    desc: "Frontend to backend to infrastructure",
  },
  {
    icon: Rocket,
    label: "Performance",
    desc: "Optimized for speed & user experience",
  },
  {
    icon: Zap,
    label: "Innovation",
    desc: "Embracing modern tech & best practices",
  },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      {/* Section header */}
      <RevealOnScroll>
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block font-mono text-xs text-accent tracking-widest uppercase">
            // About Me
          </span>
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Passionate about{" "}
            <span className="text-gradient">building things</span>
          </h2>
        </div>
      </RevealOnScroll>

      <div className="grid gap-12 md:grid-cols-2 items-center">
        {/* Left: Text */}
        <RevealOnScroll direction="left">
          <div className="space-y-6">
            <p className="text-zinc-400 leading-relaxed text-lg">
              I'm a Software Engineer with a love for creating elegant solutions
              to complex problems. From pixel-perfect frontends to robust
              backend systems, I thrive on turning ideas into reality.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              My journey started with curiosity about how things work under the
              hood. Today, I build full-stack applications, design system
              architectures, and constantly explore new technologies to stay
              ahead of the curve.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              When I'm not coding, you'll find me exploring open source
              projects, writing about tech, or experimenting with emerging
              technologies.
            </p>

            {/* Terminal-style element */}
            <div className="rounded-lg bg-surface border border-white/5 p-4 font-mono text-sm">
              <div className="flex items-center gap-2 mb-3 text-zinc-600">
                <div className="h-3 w-3 rounded-full bg-red-500/60" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                <div className="h-3 w-3 rounded-full bg-green-500/60" />
                <span className="ml-2 text-xs">about.ts</span>
              </div>
              <p className="text-zinc-500">
                <span className="text-accent">const</span>{" "}
                <span className="text-secondary">developer</span> = {"{"}
              </p>
              <p className="ml-4 text-zinc-500">
                name: <span className="text-emerald-400">"AeroG"</span>,
              </p>
              <p className="ml-4 text-zinc-500">
                role: <span className="text-emerald-400">"Software Engineer"</span>,
              </p>
              <p className="ml-4 text-zinc-500">
                loves: <span className="text-emerald-400">["clean code", "open source", "coffee"]</span>,
              </p>
              <p className="text-zinc-500">{"}"}</p>
            </div>
          </div>
        </RevealOnScroll>

        {/* Right: Highlight cards */}
        <div className="grid grid-cols-2 gap-4">
          {highlights.map((item, i) => (
            <RevealOnScroll key={item.label} delay={i * 0.15} direction="right">
              <div className="group rounded-xl border border-white/5 bg-surface p-6 hover:border-accent/30 hover:bg-surface-light transition-all duration-300">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                  <item.icon size={22} />
                </div>
                <h3 className="mb-1 text-sm font-semibold text-white">
                  {item.label}
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
