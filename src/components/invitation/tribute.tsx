import { PHOTOS, TRIBUTE } from "@/lib/invitation";
import { CornerMarks } from "./ornament";
import { Reveal, SectionTitle } from "./reveal";

export function Tribute() {
  return (
    <section className="px-5 py-16 sm:py-24">
      <Reveal>
        <SectionTitle title="A Tribute of Respect & Love" />
      </Reveal>
      <div className="mx-auto grid max-w-5xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <Reveal>
          <div className="photo-frame relative mx-auto aspect-portrait max-w-sm">
            <img
              src={PHOTOS.ceremony}
              alt="Kashuu Di in ceremonial dress beneath a canopy of roses"
              className="tribute-photo size-full object-cover"
              width={508}
              height={1106}
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <article className="relative rounded-xl bg-blush/60 px-6 py-8 sm:px-8">
            <CornerMarks className="inset-2" />
            <p className="font-display text-lg leading-relaxed text-charcoal sm:text-xl">
              {TRIBUTE}
            </p>
            <p className="mt-6 font-display text-sm tracking-[0.18em] text-mauve uppercase">
              With love & dua
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
