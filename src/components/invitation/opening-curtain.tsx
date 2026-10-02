import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { PARTICLES } from "@/lib/invitation";
import { IslamicDivider } from "./ornament";

export function OpeningCurtain({
  onEnter,
}: {
  onEnter: () => void;
}) {
  const [opening, setOpening] = useState(false);
  const [gone, setGone] = useState(false);
  const reduced = useReducedMotion();

  function handleEnter() {
    if (opening) return;
    onEnter();
    if (reduced) {
      setGone(true);
      return;
    }
    setOpening(true);
  }

  return (
    <AnimatePresence>
      {!gone ? (
        <motion.div
          className="curtain-layer fixed inset-0 overflow-hidden"
          initial={false}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="silk-curtain silk-curtain-left silk-edge-left absolute inset-y-0 left-0 w-1/2"
            initial={{ x: 0 }}
            animate={opening ? { x: "-108%" } : { x: 0 }}
            transition={{ duration: 1.7, ease: [0.22, 1, 0.36, 1], delay: opening ? 0.12 : 0 }}
          />
          <motion.div
            className="silk-curtain silk-curtain-right silk-edge-right absolute inset-y-0 right-0 w-1/2"
            initial={{ x: 0 }}
            animate={opening ? { x: "108%" } : { x: 0 }}
            transition={{ duration: 1.7, ease: [0.22, 1, 0.36, 1], delay: opening ? 0.18 : 0 }}
            onAnimationComplete={() => {
              if (opening) setGone(true);
            }}
          />

          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
            animate={opening ? { opacity: 0, y: -8 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
              {PARTICLES.map((p, i) => (
                <span
                  key={i}
                  className="particle"
                  style={{
                    left: `${p.l}%`,
                    top: `${p.t}%`,
                    width: p.s,
                    height: p.s,
                    animationDelay: `${p.d}s`,
                    animationDuration: `${p.dur}s`,
                  }}
                />
              ))}
            </div>

            <p className="relative mb-5 max-w-xs font-display text-sm tracking-[0.22em] text-mauve uppercase sm:max-w-md sm:text-base">
              A Special Celebration of Grace, Wisdom & Love
            </p>
            <p
              className="relative font-arabic text-arabic text-charcoal"
              lang="ar"
              dir="rtl"
            >
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
            </p>
            <p className="relative mt-2 font-display text-sm italic text-mauve sm:text-base">
              Bismillāhir-Raḥmānir-Raḥīm
            </p>
            <IslamicDivider className="relative my-5" />
            <p className="relative mb-8 font-sans text-sm tracking-wide text-mauve">
              With the Blessings & Mercy of Allah
            </p>
            <button
              type="button"
              onClick={handleEnter}
              className="enter-btn glass-panel relative min-h-12 rounded-full px-8 py-3 font-sans text-xs font-medium tracking-[0.22em] text-charcoal uppercase transition-transform duration-150 ease-out active:scale-[0.96]"
            >
              Enter Celebration
            </button>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
