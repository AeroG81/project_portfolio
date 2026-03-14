import { motion } from "framer-motion";

/**
 * Softly animated radial gradient orbs that drift around behind
 * content, giving a deep-space / holographic ambiance.
 */
const orbs = [
  {
    color: "bg-accent/[0.07]",
    size: "h-[500px] w-[500px]",
    position: "top-[10%] left-[5%]",
    blur: "blur-[140px]",
    duration: 25,
    delay: 0,
  },
  {
    color: "bg-secondary/[0.08]",
    size: "h-[400px] w-[400px]",
    position: "top-[30%] right-[10%]",
    blur: "blur-[120px]",
    duration: 30,
    delay: 5,
  },
  {
    color: "bg-emerald-500/[0.05]",
    size: "h-[350px] w-[350px]",
    position: "bottom-[15%] left-[20%]",
    blur: "blur-[130px]",
    duration: 28,
    delay: 10,
  },
  {
    color: "bg-accent/[0.04]",
    size: "h-[300px] w-[300px]",
    position: "bottom-[5%] right-[5%]",
    blur: "blur-[110px]",
    duration: 22,
    delay: 3,
  },
];

export default function GlowOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${orb.color} ${orb.size} ${orb.position} ${orb.blur}`}
          animate={{
            x: [0, 40, -30, 20, 0],
            y: [0, -30, 20, -40, 0],
            scale: [1, 1.15, 0.9, 1.1, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
