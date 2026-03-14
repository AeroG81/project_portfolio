import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import RevealOnScroll from "@/components/RevealOnScroll";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: 95, color: "#00f0ff" },
      { name: "TypeScript", level: 92, color: "#00f0ff" },
      { name: "Tailwind CSS", level: 90, color: "#00f0ff" },
      { name: "Vue.js", level: 78, color: "#00f0ff" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 90, color: "#7b2dff" },
      { name: "Python", level: 85, color: "#7b2dff" },
      { name: "Go", level: 70, color: "#7b2dff" },
      { name: "REST / GraphQL", level: 88, color: "#7b2dff" },
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "Docker / K8s", level: 85, color: "#10b981" },
      { name: "AWS / GCP", level: 82, color: "#10b981" },
      { name: "CI/CD Pipelines", level: 88, color: "#10b981" },
      { name: "Terraform", level: 75, color: "#10b981" },
    ],
  },
  {
    title: "Databases & Tools",
    skills: [
      { name: "PostgreSQL", level: 88, color: "#f59e0b" },
      { name: "Redis", level: 82, color: "#f59e0b" },
      { name: "MongoDB", level: 80, color: "#f59e0b" },
      { name: "Git / GitHub", level: 95, color: "#f59e0b" },
    ],
  },
];

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  const { ref, isInView } = useScrollReveal();

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-zinc-300">{skill.name}</span>
        <span className="font-mono text-xs text-zinc-500">{skill.level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{
            duration: 1.2,
            delay: index * 0.1,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${skill.color}66, ${skill.color})`,
            boxShadow: `0 0 15px ${skill.color}44`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <RevealOnScroll>
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block font-mono text-xs text-accent tracking-widest uppercase">
            // Skills
          </span>
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            My{" "}
            <span className="text-gradient">tech stack</span>
          </h2>
          <p className="mt-4 text-zinc-500 max-w-lg mx-auto">
            Technologies and tools I use to bring ideas to life. Always
            learning, always improving.
          </p>
        </div>
      </RevealOnScroll>

      <div className="grid gap-8 md:grid-cols-2">
        {skillCategories.map((category, catIdx) => (
          <RevealOnScroll
            key={category.title}
            delay={catIdx * 0.1}
            direction={catIdx % 2 === 0 ? "left" : "right"}
          >
            <div className="rounded-2xl border border-white/5 bg-surface p-6 hover:border-white/10 transition-colors">
              <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-white">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{
                    backgroundColor: category.skills[0].color,
                    boxShadow: `0 0 10px ${category.skills[0].color}66`,
                  }}
                />
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    index={skillIdx}
                  />
                ))}
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      {/* Extra tech tags */}
      <RevealOnScroll delay={0.3}>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {[
            "Linux", "Webpack", "Vite", "gRPC", "WebSocket", "OAuth",
            "JWT", "Figma", "Storybook", "Jest", "Cypress", "Prisma",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/5 bg-surface px-4 py-1.5 font-mono text-xs text-zinc-500 hover:border-accent/20 hover:text-accent transition-all cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
