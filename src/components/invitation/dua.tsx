import { BIRTHDAY_DUA, DUA_ARABIC, DUA_TRANSLATION } from "@/lib/invitation";
import { CornerMarks, Khatam } from "./ornament";
import { Reveal, SectionTitle } from "./reveal";

export function Dua() {
  return (
    <section className="px-5 py-16 sm:py-24">
      <Reveal>
        <SectionTitle title="Prayers & Blessings for You" />
      </Reveal>
      <Reveal delay={0.08} className="mx-auto max-w-2xl">
        <article className="ornate-frame relative rounded-xl bg-champagne/80 px-6 py-10 sm:px-12 sm:py-12">
          <CornerMarks />
          <div className="mb-6 flex justify-center">
            <Khatam />
          </div>
          <p
            className="font-arabic text-verse leading-loose text-charcoal"
            lang="ar"
            dir="rtl"
          >
            {DUA_ARABIC}
          </p>
          <p className="mt-5 font-display text-base text-mauve italic sm:text-lg">
            {DUA_TRANSLATION}
          </p>
          <p className="mt-2 font-sans text-[11px] tracking-[0.16em] text-dusty uppercase">
            Surah Al-Furqan 25:74
          </p>
        </article>
      </Reveal>
      <Reveal delay={0.16} className="mx-auto mt-8 max-w-2xl">
        <p className="px-2 text-center font-sans text-sm leading-relaxed text-charcoal/85 sm:text-base">
          {BIRTHDAY_DUA}
        </p>
      </Reveal>
    </section>
  );
}
