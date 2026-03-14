import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {
  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setEngineReady(true));
  }, []);

  if (!engineReady) return null;

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 -z-10"
      options={{
        fullScreen: false,
        background: {
          color: { value: "transparent" },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: ["grab", "bubble"],
            },
            // onClick: {
            //   enable: true,
            //   mode: "push",
            // },
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.5,
                color: "#ff4500",
              },
            },
            bubble: {
              distance: 200,
              size: 4,
              duration: 2,
              opacity: 0.8,
            },
            push: {
              quantity: 3,
            },
          },
        },
        particles: {
          color: {
            value: ["#ff4500", "#ff7b00", "#e2e8f0", "#3a3a3a"], // Cyber-amber/slate colors
          },
          links: {
            color: "#ff4500",
            distance: 150,
            enable: true,
            opacity: 0.15,
            width: 1,
            triangles: {
              enable: true,
              opacity: 0.03
            }
          },
          move: {
            enable: true,
            speed: { min: 0.2, max: 0.8 },
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "bounce",
            },
          },
          number: {
            density: {
              enable: true,
              width: 1920,
              height: 1080,
            },
            value: 80,
          },
          opacity: {
            value: { min: 0.1, max: 0.5 },
            animation: {
              enable: true,
              speed: 0.3,
              sync: false,
            },
          },
          shape: {
            type: ["triangle", "circle"],
          },
          size: {
            value: { min: 1, max: 2.5 },
            animation: {
              enable: true,
              speed: 0.3,
              sync: false,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
