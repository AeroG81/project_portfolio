import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-start gap-8">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: easeOutExpo }}
          className="inline-flex items-center gap-3 border border-white/10 bg-surface/60 px-4 py-2 font-mono text-xs uppercase tracking-widest text-zinc-400"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping bg-accent opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 bg-accent" />
          </span>
          Available for work
        </motion.div>

        {/* Heading */}
        <motion.div className="relative">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[480px] h-[480px] bg-accent/10 blur-[180px] pointer-events-none -z-10 opacity-40 rounded-full" />
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: easeOutExpo }}
            className="text-[clamp(3.5rem,10vw,8rem)] font-black font-pixel leading-[0.9] tracking-tighter"
          >
            <span className="text-white">ENGINEER.</span>
            <br />
            <span className="text-zinc-500">DESIGNER.</span>
            <br />
            <span className="text-accent glow-text">ARCHITECT.</span>
          </motion.h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: easeOutExpo }}
          className="max-w-xl text-lg text-zinc-400 font-light leading-relaxed"
        >
          Building high-performance systems and interfaces with precision
          engineering. From concept to production.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: easeOutExpo }}
          className="flex flex-wrap items-center gap-4 mt-4"
        >
          {/* <motion.a
            href="#projects"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-wider text-background transition-colors hover:bg-white"
          >
            View Work
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </motion.a> */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-wider text-background transition-colors hover:bg-white"
          >
            Get in touch
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </motion.a>

          {/* <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 border border-white/10 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </motion.a> */}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1, ease: easeOutExpo }}
        className="absolute bottom-12 left-6 md:left-12"
      >
        <motion.a
          href="#about"
          whileHover={{ y: 5 }}
          className="flex flex-col items-center gap-3 text-zinc-500 hover:text-accent transition-colors"
        >
          <ChevronDown size={24} className="animate-pulse" />
        </motion.a>
      </motion.div>
    </section>
  );
}
