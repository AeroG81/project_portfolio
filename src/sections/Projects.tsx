import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import RevealOnScroll from "@/components/RevealOnScroll";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  live?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "CloudSync Dashboard",
    description:
      "A real-time cloud infrastructure monitoring dashboard with live metrics, alerting, and multi-region support. Built for DevOps teams managing complex deployments.",
    tags: ["React", "TypeScript", "WebSocket", "D3.js", "Tailwind"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Neural Compose",
    description:
      "An AI-powered content generation platform that leverages LLMs for creative writing, code generation, and data analysis with a sleek editor interface.",
    tags: ["Next.js", "Python", "OpenAI", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "QuantumPay",
    description:
      "A fintech payment processing system featuring real-time fraud detection, multi-currency support, and sub-100ms transaction processing.",
    tags: ["Node.js", "Redis", "Stripe API", "Docker"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    github: "#",
  },
  {
    title: "EcoTracker",
    description:
      "An environmental monitoring IoT platform that aggregates sensor data for carbon footprint tracking and sustainability analytics with beautiful visualizations.",
    tags: ["React", "Go", "InfluxDB", "MQTT"],
    image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&q=80",
    github: "#",
    live: "#",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <RevealOnScroll delay={index * 0.15}>
      <motion.div
        whileHover={{ y: -8, scale: 1.01 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`group relative overflow-hidden border border-surface-light bg-surface transition-all duration-500 hover:border-accent/80 hover:shadow-[0_0_30px_rgba(255,69,0,0.15)] ${
          project.featured ? "md:col-span-2" : ""
        }`}
      >
        {/* Image */}
        <div className="relative overflow-hidden">
          <div
            className="h-48 md:h-56 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${project.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent" />

          {/* Overlay links */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-background/80 border border-white/10 text-white hover:border-accent/50 hover:text-accent transition-colors"
              >
                <Github size={16} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-background/80 border border-white/10 text-white hover:border-accent/50 hover:text-accent transition-colors"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>

          {project.featured && (
            <div className="absolute top-4 left-4">
              <span className="rounded-full bg-accent/20 border border-accent/40 px-3 py-1 text-xs font-medium text-accent">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <ArrowUpRight
              size={18}
              className="text-zinc-600 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
            />
          </div>
          <p className="mb-4 text-sm text-zinc-400 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-accent/5 border border-accent/10 px-3 py-1 text-xs font-mono text-accent/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </RevealOnScroll>
  );
}

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <RevealOnScroll>
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block font-mono text-xs text-accent tracking-widest uppercase">
            // Projects
          </span>
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Things I've{" "}
            <span className="text-gradient">built</span>
          </h2>
          <p className="mt-4 text-zinc-500 max-w-lg mx-auto">
            A collection of projects that showcase my skills in full-stack
            development, system design, and creative problem-solving.
          </p>
        </div>
      </RevealOnScroll>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
