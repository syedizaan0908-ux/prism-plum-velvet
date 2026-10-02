import { Music2, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useInvitationAudio } from "./audio-provider";
import { cn } from "@/lib/cn";

export function MusicWidget() {
  const { playing, muted, togglePlay, toggleMute } = useInvitationAudio();

  return (
    <div className="music-dock pointer-events-none fixed right-4 bottom-24 sm:bottom-8">
      <div
        className="glass-panel pointer-events-auto flex items-center gap-2 rounded-full py-2 pr-3 pl-3 shadow-lg"
        role="region"
        aria-label="Background music"
      >
        <span
          className={cn("eq flex h-4 items-end gap-0.5", playing && !muted ? "eq-on" : "")}
          aria-hidden="true"
        >
          <i className="eq-bar h-2" />
          <i className="eq-bar h-3.5" />
          <i className="eq-bar h-2.5" />
          <i className="eq-bar h-3" />
        </span>
        <Music2 className="size-3.5 text-mauve" aria-hidden="true" />
        <span className="hidden max-w-36 truncate font-sans text-[11px] tracking-wide text-mauve sm:inline">
          Soft Instrumentals & Duas
        </span>
        <button
          type="button"
          onClick={togglePlay}
          className="flex size-10 items-center justify-center rounded-full text-charcoal transition-transform duration-150 ease-out active:scale-[0.96]"
          aria-label={playing ? "Pause music" : "Play music"}
        >
          {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
        </button>
        <button
          type="button"
          onClick={toggleMute}
          className="flex size-10 items-center justify-center rounded-full text-charcoal transition-transform duration-150 ease-out active:scale-[0.96]"
          aria-label={muted ? "Unmute music" : "Mute music"}
        >
          {muted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
        </button>
      </div>
    </div>
  );
}
