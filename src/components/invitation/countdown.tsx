import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { CELEBRATION_AT } from "@/lib/invitation";
import { Reveal, SectionTitle } from "./reveal";

type Parts = { days: number; hours: number; minutes: number; seconds: number };

function split(ms: number): Parts {
  const total = Math.max(0, Math.floor(ms / 1000));
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
}

export function Countdown() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const remaining = now === null ? 0 : CELEBRATION_AT.getTime() - now;
  const arrived = now !== null && remaining <= 0;
  const parts = split(remaining);
  const ready = now !== null;

  return (
    <section className="px-5 py-16 sm:py-24">
      <Reveal>
        <SectionTitle title="This Blessed Evening" />
      </Reveal>
      <Reveal delay={0.08} className="mx-auto max-w-3xl text-center">
        {arrived ? (
          <p className="mb-8 font-display text-2xl text-charcoal italic sm:text-3xl">
            Alhamdulillah — the blessed hour is here.
          </p>
        ) : (
          <p className="mb-8 font-sans text-sm tracking-wide text-mauve">
            Until the celebration · Friday, 2 October 2026 · 7:00 PM
          </p>
        )}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          <Unit label="Days" value={parts.days} ready={ready} />
          <Unit label="Hours" value={parts.hours} ready={ready} />
          <Unit label="Minutes" value={parts.minutes} ready={ready} />
          <Unit label="Seconds" value={parts.seconds} ready={ready} />
        </div>
      </Reveal>
    </section>
  );
}

function Unit({ label, value, ready }: { label: string; value: number; ready: boolean }) {
  const display = ready ? String(value).padStart(2, "0") : "00";
  return (
    <div className="glass-panel rounded-lg px-3 py-5 sm:py-6">
      <motion.p
        key={display}
        initial={{ opacity: 0.4, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-4xl leading-none text-charcoal tabular-nums sm:text-5xl"
      >
        {display}
      </motion.p>
      <p className="mt-3 font-sans text-xs tracking-[0.22em] text-mauve uppercase">{label}</p>
    </div>
  );
}
