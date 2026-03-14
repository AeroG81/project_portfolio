import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Props {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

const directionMap = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
};

export default function RevealOnScroll({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: Props) {
  const { ref, isInView } = useScrollReveal();
  const offset = directionMap[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, ...offset }
      }
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1], // ease-out-quint
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
