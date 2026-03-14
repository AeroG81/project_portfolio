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
      { name: "TypeScript", level: 85, color: "#e8590c" },
      { name: "React / Material UI", level: 80, color: "#e8590c" },
      { name: "Vue.js", level: 60, color: "#e8590c" },
      { name: "WordPress", level: 40, color: "#e8590c" },
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "Docker / K8s", level: 70, color: "#059669" },
      // { name: "AWS / GCP", level: 82, color: "#059669" },
      { name: "CI/CD Pipelines", level: 88, color: "#059669" },
      // { name: "Terraform", level: 75, color: "#059669" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 90, color: "#ca8a04" },
      { name: "Python", level: 85, color: "#ca8a04" },
      { name: "Go", level: 60, color: "#ca8a04" },
      { name: "Java", level: 50, color: "#ca8a04" },
      { name: "REST / GraphQL", level: 75, color: "#ca8a04" },
    ],
  },
  {
    title: "Databases & Tools",
    skills: [
      { name: "PostgreSQL", level: 80, color: "#9a8c98" },
      { name: "Redis", level: 75, color: "#9a8c98" },
      { name: "MongoDB", level: 65, color: "#9a8c98" },
      { name: "Git / GitHub", level: 80, color: "#9a8c98" },
      { name: "Figma", level: 70, color: "#9a8c98" },
    ],
  },
];

const extraTechTags = [
  "Linux",
  "Vite",
  "OAuth",
  "JWT",
  "Figma",
  "Storybook",
  "Prisma",
  "Angular",
  "Blender",
  "Firebase"
];

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  const { ref, isInView } = useScrollReveal();

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-zinc-300">{skill.name}</span>
        <span className="font-mono text-xs text-zinc-500">{skill.level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{
            duration: 1.2,
            delay: index * 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="h-full"
          style={{
            background: `linear-gradient(90deg, ${skill.color}44, ${skill.color})`,
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
        <div className="mb-16">
          <span className="mb-3 inline-block font-pixel text-xs text-accent tracking-widest uppercase">
            // Skills
          </span>
          <h2 className="text-4xl font-bold text-white md:text-5xl tracking-tight">
            My <span className="text-gradient">tech stack</span>
          </h2>
          <p className="mt-4 text-zinc-500 max-w-xl">
            Technologies and tools I use to bring ideas to life.
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
            <div className="border border-white/5 bg-surface p-6 hover:border-white/10 transition-colors">
              <h3 className="mb-6 flex items-center gap-3 text-sm font-semibold text-white uppercase tracking-wider">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: category.skills[0].color }}
                />
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <SkillBar key={skill.name} skill={skill} index={skillIdx} />
                ))}
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      {/* Extra tech tags */}
      <RevealOnScroll delay={0.3}>
        <div className="mt-16 flex flex-wrap gap-2">
          {extraTechTags.map((tech) => (
            <span
              key={tech}
              className="border border-white/5 bg-surface px-3 py-1.5 font-mono text-xs text-zinc-500 hover:border-accent/20 hover:text-accent/70 transition-all cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
