import { useReducedMotion } from "motion/react";
import { PETALS } from "@/lib/invitation";

export function Petals() {
  const reduced = useReducedMotion();
  if (reduced) return null;

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      {PETALS.map((petal, index) => (
        <span
          key={index}
          className={`petal petal-tint-${petal.tint}`}
          style={{
            left: `${petal.left}%`,
            width: petal.size,
            height: petal.size + 4,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
            ["--sway" as string]: `${petal.sway}px`,
          }}
        />
      ))}
    </div>
  );
}
