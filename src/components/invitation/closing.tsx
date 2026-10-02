import { motion, useReducedMotion } from "motion/react";
import { IslamicDivider } from "./ornament";

export function Closing() {
  const reduced = useReducedMotion();

  return (
    <section className="relative min-h-dvh overflow-hidden">
      <motion.div
        className="silk-curtain silk-curtain-left silk-edge-left absolute inset-y-0 left-0 w-[22%] min-w-16 sm:w-[28%]"
        initial={reduced ? false : { x: "-100%" }}
        whileInView={{ x: "0%" }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden="true"
      />
      <motion.div
        className="silk-curtain silk-curtain-right silk-edge-right absolute inset-y-0 right-0 w-[22%] min-w-16 sm:w-[28%]"
        initial={reduced ? false : { x: "100%" }}
        whileInView={{ x: "0%" }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
        aria-hidden="true"
      />
      <div className="relative z-10 flex min-h-dvh flex-col items-center justify-center px-8 py-20 text-center">
        <p className="font-display text-base text-mauve italic sm:text-lg">
          May Allah's blessings remain with you always.
        </p>
        <IslamicDivider className="my-6" />
        <p className="gold-shimmer font-display text-3xl leading-tight font-semibold tracking-wide sm:text-5xl">
          Happy Birthday
        </p>
        <p className="gold-shimmer mt-2 font-display text-4xl font-semibold tracking-[0.12em] sm:text-6xl">
          KASHUU DI
        </p>
        <p className="mt-6 font-sans text-xs tracking-[0.24em] text-mauve uppercase">
          Forever Loved & Respected
        </p>
      </div>
    </section>
  );
}
