import { WISHES } from "@/lib/invitation";
import { Khatam } from "./ornament";
import { Reveal, SectionTitle } from "./reveal";

export function Wishes() {
  return (
    <section className="px-5 py-16 sm:py-24">
      <Reveal>
        <SectionTitle title="Warm Wishes & Duas" />
      </Reveal>
      <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-3 sm:gap-5">
        {WISHES.map((wish, index) => (
          <Reveal key={wish} delay={index * 0.08}>
            <article className="wish-card glass-panel relative h-full rounded-xl px-5 py-7 text-center">
              <div className="mb-4 flex justify-center">
                <Khatam className="size-7" />
              </div>
              <p className="font-display text-lg leading-relaxed text-charcoal">{wish}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
