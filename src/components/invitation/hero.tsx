import { PHOTOS } from "@/lib/invitation";
import { IslamicDivider } from "./ornament";

export function Hero() {
  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-center px-5 py-20 text-center">
      <p className="font-arabic text-lg text-mauve sm:text-xl" lang="ar" dir="rtl">
        بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
      </p>
      <p className="mt-4 font-display text-sm tracking-[0.22em] text-mauve uppercase">
        Honoring a Truly Special Soul
      </p>
      <IslamicDivider className="my-5" />
      <h1 className="gold-shimmer font-display text-display leading-none font-semibold tracking-wide">
        Happy Birthday
      </h1>
      <p className="gold-shimmer mt-2 font-display text-name leading-none font-semibold tracking-[0.12em]">
        KASHUU DI
      </p>
      <p className="mt-5 max-w-md font-display text-base text-mauve italic sm:text-lg">
        Teacher, Mentor & Sister — A Gift of Light & Grace
      </p>
      <div className="mt-10 size-36 overflow-hidden rounded-full ring-1 ring-gold/70 ring-offset-4 ring-offset-ivory sm:size-44">
        <img
          src={PHOTOS.portrait}
          alt="Kashuu Di, smiling in a patterned hijab"
          className="hero-portrait size-full object-cover"
          width={720}
          height={687}
        />
      </div>
    </section>
  );
}
