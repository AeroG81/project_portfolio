import { Code2, Cpu, Rocket, Zap } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import RevealOnScroll from "@/components/RevealOnScroll";

const highlights = [
  {
    icon: Code2,
    label: "Clean Code",
    desc: "Maintainable, scalable systems",
  },
  {
    icon: Cpu,
    label: "Full Stack",
    desc: "Frontend to infrastructure",
  },
  {
    icon: Rocket,
    label: "Performance",
    desc: "Speed & user experience first",
  },
  {
    icon: Zap,
    label: "Innovation",
    desc: "Modern tech & best practices",
  },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <RevealOnScroll>
        <div className="mb-16">
          <span className="mb-3 inline-block font-pixel text-xs text-accent tracking-widest uppercase">
            // About
          </span>
          <h2 className="text-4xl font-bold text-white md:text-5xl tracking-tight">
            Crafting <span className="text-gradient tracking-tighter">digital systems</span>
          </h2>
        </div>
      </RevealOnScroll>

      <div className="grid gap-16 md:grid-cols-5 items-start">
        {/* Left: prose — wider column */}
        <RevealOnScroll direction="left" className="md:col-span-3">
          <div className="space-y-5">
            <p className="text-zinc-400 leading-relaxed text-lg">
              I'm a Software Engineer graduated from Monash University with a passion for creating elegant solutions
              to complex problems. From pixel-perfect frontends to robust
              backend systems, I thrive on turning ideas into reality.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              My journey started with curiosity about how things work under the
              hood. Today, I build full-stack applications, design system
              architectures, and constantly explore new technologies / tools to stay
              ahead of the curve.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              When I'm not coding, you'll find me exploring open source
              projects, playing with 3D modelling, or experimenting with emerging
              technologies / tools.
            </p>
          </div>
        </RevealOnScroll>

        {/* Right: terminal code block */}
        <RevealOnScroll direction="right" className="md:col-span-2">
          <div className="rounded-lg bg-surface border border-white/5 p-5 font-mono text-sm">
            <div className="flex items-center gap-1.5 mb-4">
              <div className="h-2.5 w-2.5 rounded-full bg-green-700" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-700" />
              <div className="h-2.5 w-2.5 rounded-full bg-red-700" />
              <span className="ml-2 text-xs text-zinc-600">about.ts</span>
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
              loves: <span className="text-emerald-400">["clean code", "system design"]</span>,
            </p>
            <p className="text-zinc-500">{"}"}</p>
          </div>
        </RevealOnScroll>
      </div>

      {/* Highlights — horizontal strip */}
      <div className="mt-20 grid grid-cols-2 gap-px md:grid-cols-4 border border-white/5 overflow-hidden">
        {highlights.map((item, i) => (
          <RevealOnScroll key={item.label} delay={i * 0.08}>
            <div className="group flex items-start gap-4 p-6 bg-surface hover:bg-surface-light transition-colors">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center text-accent">
                <item.icon size={18} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">{item.label}</h3>
                <p className="text-xs text-zinc-500 mt-1">{item.desc}</p>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>

    </SectionWrapper>
  );
}
