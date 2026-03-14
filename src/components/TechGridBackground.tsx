import { useEffect, useRef } from "react";

/**
 * Animated tech grid background with circuit-board style lines,
 * glowing intersections, and data-flow pulses.
 * Pure Canvas — no extra deps.
 */
export default function TechGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;

    // --- grid settings ---
    const CELL = 60; // px between grid lines
    const LINE_ALPHA = 0.04;
    const NODE_RADIUS = 1.5;
    const NODE_ALPHA = 0.25;
    const PULSE_COUNT = 18;
    const PULSE_SPEED = 0.6; // px per frame
    const PULSE_LENGTH = 90;

    // Persistent data-flow pulses
    interface Pulse {
      x: number;
      y: number;
      dx: number;
      dy: number;
      progress: number; // 0 → PULSE_LENGTH
      color: string;
    }

    const pulses: Pulse[] = [];

    const COLORS = ["#ff4500", "#ffae42", "#d9534f", "#888888"];

    function spawnPulse() {
      // start at a random grid intersection
      const col = Math.floor(Math.random() * Math.ceil(width / CELL));
      const row = Math.floor(Math.random() * Math.ceil(height / CELL));
      // pick horizontal or vertical
      const horizontal = Math.random() > 0.5;
      const dir = Math.random() > 0.5 ? 1 : -1;
      pulses.push({
        x: col * CELL,
        y: row * CELL,
        dx: horizontal ? dir : 0,
        dy: horizontal ? 0 : dir,
        progress: 0,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    }

    function resize() {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);

      // --- draw grid lines ---
      ctx!.strokeStyle = `rgba(255, 69, 0, ${LINE_ALPHA})`;
      ctx!.lineWidth = 0.5;
      ctx!.beginPath();
      for (let x = 0; x <= width; x += CELL) {
        ctx!.moveTo(x, 0);
        ctx!.lineTo(x, height);
      }
      for (let y = 0; y <= height; y += CELL) {
        ctx!.moveTo(0, y);
        ctx!.lineTo(width, y);
      }
      ctx!.stroke();

      // --- draw intersections (nodes) ---
      for (let x = 0; x <= width; x += CELL) {
        for (let y = 0; y <= height; y += CELL) {
          ctx!.beginPath();
          ctx!.arc(x, y, NODE_RADIUS, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(255, 69, 0, ${NODE_ALPHA})`;
          ctx!.fill();
        }
      }

      // --- draw data-flow pulses ---
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        const headX = p.x + p.dx * p.progress * PULSE_SPEED;
        const headY = p.y + p.dy * p.progress * PULSE_SPEED;
        const tailX = p.x + p.dx * Math.max(0, p.progress - PULSE_LENGTH) * PULSE_SPEED;
        const tailY = p.y + p.dy * Math.max(0, p.progress - PULSE_LENGTH) * PULSE_SPEED;

        const grad = ctx!.createLinearGradient(tailX, tailY, headX, headY);
        grad.addColorStop(0, `${p.color}00`);
        grad.addColorStop(0.7, `${p.color}55`);
        grad.addColorStop(1, `${p.color}cc`);

        ctx!.strokeStyle = grad;
        ctx!.lineWidth = 1.5;
        ctx!.beginPath();
        ctx!.moveTo(tailX, tailY);
        ctx!.lineTo(headX, headY);
        ctx!.stroke();

        // glow dot at the head
        ctx!.beginPath();
        ctx!.arc(headX, headY, 2.5, 0, Math.PI * 2);
        ctx!.fillStyle = `${p.color}88`;
        ctx!.fill();

        // shadow glow
        ctx!.shadowColor = p.color;
        ctx!.shadowBlur = 8;
        ctx!.beginPath();
        ctx!.arc(headX, headY, 1, 0, Math.PI * 2);
        ctx!.fillStyle = p.color;
        ctx!.fill();
        ctx!.shadowBlur = 0;

        p.progress += 1;

        // remove when fully off-screen
        if (
          headX < -100 ||
          headX > width + 100 ||
          headY < -100 ||
          headY > height + 100
        ) {
          pulses.splice(i, 1);
        }
      }

      // keep pulse count steady
      while (pulses.length < PULSE_COUNT) {
        spawnPulse();
      }

      animId = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-20"
      aria-hidden="true"
    />
  );
}
