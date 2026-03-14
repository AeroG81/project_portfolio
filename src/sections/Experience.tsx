import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import RevealOnScroll from "@/components/RevealOnScroll";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ExperienceEntry {
  period: string;
  company: string;
  role: string;
  description: string;
  tags: string[];
}

const experiences: ExperienceEntry[] = [
  {
    period: "Jul 2024 — Present",
    company: "iFAST Global Hub AI",
    role: "Software Engineer",
    description:
      "Actively involve in the design and development of internal platforms and tools to enhance operational efficiency. Assist the migration of legacy system to modern tools, help developers with troubleshooting on daily basis. Develop solutions to optimize license distribution within developers, resulting in a 50% reduction in license costs.",
    tags: ["React", "TypeScript", "Docker", "Kubernetes", "Node.js", "Gitlab CI/CD"],
  },
  {
    period: "Nov 2022 — Feb 2023",
    company: "Experian",
    role: "Technical Analyst Intern",
    description:
      "Built and shipped high-performance trading interfaces processing real-time market data. Reduced page load times by 60% through strategic code splitting and edge caching. Owned the entire data pipeline from ingestion to visualization.",
    tags: ["Postman", "Java"],
  },
];

function TimelineNode({ isActive }: { isActive: boolean }) {
  return (
    <div className="absolute left-0 top-1.5 flex items-center justify-center">
      <div
        className={`h-3 w-3 rounded-full border-2 transition-colors duration-500 ${
          isActive
            ? "border-accent bg-accent/30"
            : "border-zinc-600 bg-background"
        }`}
      />
    </div>
  );
}

function TimelineEntry({
  entry,
  index,
}: {
  entry: ExperienceEntry;
  index: number;
}) {
  const { ref, isInView } = useScrollReveal();
  const isFirst = index === 0;

  return (
    <RevealOnScroll delay={index * 0.12}>
      <div ref={ref} className="relative pl-10 pb-12 last:pb-0">
        <TimelineNode isActive={isFirst || isInView} />

        {/* Connector line to next entry */}
        {index < experiences.length - 1 && (
          <div className="absolute left-[5px] top-5 bottom-0 w-px bg-gradient-to-b from-white/10 to-white/5" />
        )}

        {/* Period */}
        <span className="font-mono text-xs tracking-wider text-zinc-500 uppercase">
          {entry.period}
        </span>

        {/* Company & Role */}
        <h3 className="mt-2 text-xl font-semibold text-white tracking-tight">
          {entry.company}
        </h3>
        <p className="mt-1 text-sm font-medium text-accent">{entry.role}</p>

        {/* Description */}
        <p className="mt-3 text-sm leading-relaxed text-zinc-400 max-w-2xl">
          {entry.description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="border border-white/5 bg-surface px-2.5 py-0.5 font-mono text-xs text-zinc-500 hover:border-accent/20 hover:text-accent/70 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </RevealOnScroll>
  );
}

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <RevealOnScroll>
        <div className="mb-16">
          <span className="mb-3 inline-block font-pixel text-xs text-accent tracking-widest uppercase">
            // Experience
          </span>
          <h2 className="text-4xl font-bold text-white md:text-5xl tracking-tight">
            Where I've <span className="text-gradient">worked</span>
          </h2>
          <p className="mt-4 text-zinc-500 max-w-xl">
            A timeline of roles that shaped my engineering perspective — from
            first lines of production code to actively contributing to internal platforms and tools.
          </p>
        </div>
      </RevealOnScroll>

      <div className="grid gap-0 md:grid-cols-5">
        {/* Left spacer for visual balance on desktop */}
        <div className="hidden md:block md:col-span-1" />

        {/* Timeline content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative md:col-span-4"
        >
          {experiences.map((entry, i) => (
            <TimelineEntry key={entry.company} entry={entry} index={i} />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
