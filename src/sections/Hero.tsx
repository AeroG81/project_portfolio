import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      <div className="relative z-10 text-left w-full max-w-5xl flex flex-col items-start gap-8">
        
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.8, ease: easeOutExpo }}
          className="inline-flex items-center gap-3 border border-surface-light bg-surface px-4 py-2 font-mono text-sm uppercase tracking-wider text-secondary-dim shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping bg-accent opacity-50"></span>
            <span className="relative inline-flex h-2 w-2 bg-accent"></span>
          </span>
          System Online
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: easeOutExpo }}
          className="text-6xl font-black leading-[1.1] tracking-tighter text-white md:text-8xl lg:text-[7rem]"
        >
          ENGINEER.
          <br />
          <span className="text-secondary opacity-90 block">DESIGNER.</span>
          <span className="text-accent block glow-text">ARCHITECT.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: easeOutExpo }}
          className="text-lg text-zinc-400 md:text-xl max-w-2xl font-light"
        >
          Building high-performance interfaces and industrial-grade software.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: easeOutExpo }}
          className="flex flex-wrap items-center gap-6 mt-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3 bg-accent px-8 py-4 text-sm font-bold uppercase tracking-wider text-background transition-colors hover:bg-white"
          >
            <span>Deploy</span>
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </motion.a>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 border border-surface-light bg-surface px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:border-accent"
          >
            Acknowledge
          </motion.a>
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
