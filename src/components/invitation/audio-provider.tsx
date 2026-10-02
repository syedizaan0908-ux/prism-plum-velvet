import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { AUDIO_SRC } from "@/lib/invitation";

type AudioApi = {
  playing: boolean;
  muted: boolean;
  togglePlay: () => void;
  toggleMute: () => void;
  startFromGesture: () => void;
};

const AudioCtx = createContext<AudioApi | null>(null);

export function useInvitationAudio() {
  const value = useContext(AudioCtx);
  if (!value) {
    throw new Error("useInvitationAudio must be used within AudioProvider");
  }
  return value;
}

function fadeTo(el: HTMLAudioElement, target: number) {
  const step = () => {
    const next = el.volume + (target > el.volume ? 0.035 : -0.05);
    if ((target > el.volume && next >= target) || (target < el.volume && next <= target)) {
      el.volume = target;
      return;
    }
    el.volume = next;
    requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

export function AudioProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  const startFromGesture = useCallback(() => {
    const el = audioRef.current;
    if (!el) return;
    el.muted = false;
    setMuted(false);
    el.volume = 0;
    const playAttempt = el.play();
    if (playAttempt) {
      void playAttempt
        .then(() => {
          setPlaying(true);
          fadeTo(el, 0.42);
        })
        .catch(() => {
          setPlaying(false);
        });
    }
  }, []);

  const togglePlay = useCallback(() => {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) {
      void el.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      el.pause();
      setPlaying(false);
    }
  }, []);

  const toggleMute = useCallback(() => {
    const el = audioRef.current;
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
  }, []);

  const api = useMemo(
    () => ({ playing, muted, togglePlay, toggleMute, startFromGesture }),
    [playing, muted, togglePlay, toggleMute, startFromGesture],
  );

  return (
    <AudioCtx.Provider value={api}>
      <audio
        ref={audioRef}
        src={AUDIO_SRC}
        loop
        preload="auto"
        playsInline
        className="sr-only"
      />
      {children}
    </AudioCtx.Provider>
  );
}
