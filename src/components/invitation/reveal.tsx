import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({ title }: { title: string }) {
  return (
    <header className="mx-auto mb-8 max-w-xl px-5 text-center sm:mb-10">
      <h2 className="font-display text-section font-medium tracking-wide text-charcoal">
        {title}
      </h2>
      <div className="mt-4 flex justify-center">
        <span className="block h-px w-16 bg-gold/70" />
      </div>
    </header>
  );
}
