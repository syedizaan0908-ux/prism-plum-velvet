import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AudioProvider, useInvitationAudio } from "@/components/invitation/audio-provider";
import { Closing } from "@/components/invitation/closing";
import { Countdown } from "@/components/invitation/countdown";
import { Dua } from "@/components/invitation/dua";
import { Gallery } from "@/components/invitation/gallery";
import { Hero } from "@/components/invitation/hero";
import { MusicWidget } from "@/components/invitation/music-widget";
import { OpeningCurtain } from "@/components/invitation/opening-curtain";
import { PatternBg } from "@/components/invitation/ornament";
import { Petals } from "@/components/invitation/petals";
import { Tribute } from "@/components/invitation/tribute";
import { Wishes } from "@/components/invitation/wishes";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <AudioProvider>
      <InvitationApp />
    </AudioProvider>
  );
}

function InvitationApp() {
  const [entered, setEntered] = useState(false);
  const { startFromGesture } = useInvitationAudio();

  useEffect(() => {
    if (!entered) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
    const timeout = window.setTimeout(() => {
      document.body.style.overflow = "";
    }, 1800);
    return () => {
      window.clearTimeout(timeout);
      document.body.style.overflow = "";
    };
  }, [entered]);

  function handleEnter() {
    startFromGesture();
    setEntered(true);
  }

  return (
    <div className="relative min-h-dvh bg-ivory text-charcoal">
      <PatternBg />
      <OpeningCurtain onEnter={handleEnter} />
      {entered ? <Petals /> : null}
      <main>
        <Hero />
        {entered ? (
          <>
            <Dua />
            <Tribute />
            <Gallery />
            <Countdown />
            <Wishes />
            <Closing />
          </>
        ) : null}
      </main>
      {entered ? <MusicWidget /> : null}
    </div>
  );
}
