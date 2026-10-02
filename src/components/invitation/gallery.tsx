import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { GALLERY, type GalleryItem } from "@/lib/invitation";
import { cn } from "@/lib/cn";
import { Reveal, SectionTitle } from "./reveal";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") {
        setActive((current) => (current === null ? current : (current + 1) % GALLERY.length));
      }
      if (event.key === "ArrowLeft") {
        setActive((current) =>
          current === null ? current : (current - 1 + GALLERY.length) % GALLERY.length,
        );
      }
    }
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [active]);

  const item = active === null ? null : GALLERY[active];

  return (
    <section className="px-5 py-16 sm:py-24">
      <Reveal>
        <SectionTitle title="Memories & Moments" />
      </Reveal>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
        {GALLERY.map((photo, index) => (
          <Reveal key={photo.id} delay={index * 0.05} className={photo.wide ? "sm:col-span-2" : ""}>
            <GalleryCard photo={photo} onOpen={() => setActive(index)} />
          </Reveal>
        ))}
      </div>
      {item && active !== null ? (
        <Lightbox
          item={item}
          onClose={() => setActive(null)}
          onPrev={() => setActive((active - 1 + GALLERY.length) % GALLERY.length)}
          onNext={() => setActive((active + 1) % GALLERY.length)}
        />
      ) : null}
    </section>
  );
}

function GalleryCard({ photo, onOpen }: { photo: GalleryItem; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={cn("gallery-card photo-frame group relative w-full text-left", photo.aspect)}
      aria-label={`View ${photo.caption}`}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        className={cn("size-full object-cover", photo.pos)}
        loading="lazy"
      />
      <span className="absolute inset-x-0 bottom-0 bg-linear-to-t from-charcoal/80 to-transparent px-4 pt-12 pb-3">
        <span className="font-display text-lg text-ivory">{photo.caption}</span>
      </span>
    </button>
  );
}

function Lightbox({
  item,
  onClose,
  onPrev,
  onNext,
}: {
  item: GalleryItem;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div
      className="lightbox-layer fixed inset-0 flex items-center justify-center bg-charcoal/80 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={item.caption}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 flex size-11 items-center justify-center rounded-full bg-ivory/15 text-ivory"
        aria-label="Close photo"
      >
        <X className="size-5" />
      </button>
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onPrev();
        }}
        className="absolute top-1/2 left-3 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/15 text-ivory"
        aria-label="Previous photo"
      >
        <ChevronLeft className="size-5" />
      </button>
      <figure
        className="relative max-h-[88dvh] max-w-4xl"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={item.src}
          alt={item.alt}
          className="max-h-[80dvh] w-full rounded-md object-contain"
        />
        <figcaption className="mt-3 text-center font-display text-lg text-ivory">
          {item.caption}
        </figcaption>
      </figure>
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
        className="absolute top-1/2 right-3 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/15 text-ivory"
        aria-label="Next photo"
      >
        <ChevronRight className="size-5" />
      </button>
    </div>
  );
}
