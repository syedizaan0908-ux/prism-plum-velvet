import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Play, c as ChevronRight, l as ChevronLeft, n as VolumeX, o as Pause, r as Volume2, s as Music2, t as X } from "../_libs/lucide-react.mjs";
import { a as DUA_ARABIC, c as PARTICLES, d as TRIBUTE, f as WISHES, i as CELEBRATION_AT, l as PETALS, n as AUDIO_SRC, o as DUA_TRANSLATION, r as BIRTHDAY_DUA, s as GALLERY, u as PHOTOS } from "./router-_oNT86aJ.mjs";
import { r as AnimatePresence, t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BRBShHo8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var AudioCtx = (0, import_react.createContext)(null);
function useInvitationAudio() {
	const value = (0, import_react.useContext)(AudioCtx);
	if (!value) throw new Error("useInvitationAudio must be used within AudioProvider");
	return value;
}
function fadeTo(el, target) {
	const step = () => {
		const next = el.volume + (target > el.volume ? .035 : -.05);
		if (target > el.volume && next >= target || target < el.volume && next <= target) {
			el.volume = target;
			return;
		}
		el.volume = next;
		requestAnimationFrame(step);
	};
	requestAnimationFrame(step);
}
function AudioProvider({ children }) {
	const audioRef = (0, import_react.useRef)(null);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const [muted, setMuted] = (0, import_react.useState)(false);
	const startFromGesture = (0, import_react.useCallback)(() => {
		const el = audioRef.current;
		if (!el) return;
		el.muted = false;
		setMuted(false);
		el.volume = 0;
		const playAttempt = el.play();
		if (playAttempt) playAttempt.then(() => {
			setPlaying(true);
			fadeTo(el, .42);
		}).catch(() => {
			setPlaying(false);
		});
	}, []);
	const togglePlay = (0, import_react.useCallback)(() => {
		const el = audioRef.current;
		if (!el) return;
		if (el.paused) el.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
		else {
			el.pause();
			setPlaying(false);
		}
	}, []);
	const toggleMute = (0, import_react.useCallback)(() => {
		const el = audioRef.current;
		if (!el) return;
		el.muted = !el.muted;
		setMuted(el.muted);
	}, []);
	const api = (0, import_react.useMemo)(() => ({
		playing,
		muted,
		togglePlay,
		toggleMute,
		startFromGesture
	}), [
		playing,
		muted,
		togglePlay,
		toggleMute,
		startFromGesture
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AudioCtx.Provider, {
		value: api,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
			ref: audioRef,
			src: AUDIO_SRC,
			loop: true,
			preload: "auto",
			playsInline: true,
			className: "sr-only"
		}), children]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function IslamicDivider({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 280 32",
		className: cn("h-7 w-56 text-gold sm:w-64", className),
		fill: "none",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M8 16 H108",
				stroke: "currentColor",
				strokeWidth: "0.7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M172 16 H272",
				stroke: "currentColor",
				strokeWidth: "0.7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M118 16 H128",
				stroke: "currentColor",
				strokeWidth: "0.7",
				strokeDasharray: "2 3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M152 16 H162",
				stroke: "currentColor",
				strokeWidth: "0.7",
				strokeDasharray: "2 3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "128",
				y: "4",
				width: "24",
				height: "24",
				transform: "rotate(45 140 16)",
				stroke: "currentColor",
				strokeWidth: "0.8",
				fill: "color-mix(in oklab, currentColor 12%, transparent)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "134",
				y: "10",
				width: "12",
				height: "12",
				transform: "rotate(45 140 16)",
				stroke: "currentColor",
				strokeWidth: "0.7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "140",
				cy: "16",
				r: "1.6",
				fill: "currentColor"
			})
		]
	});
}
function Khatam({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 48 48",
		className: cn("size-8 text-gold", className),
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			fill: "color-mix(in oklab, currentColor 16%, transparent)",
			stroke: "currentColor",
			strokeWidth: "1.1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "12",
				y: "12",
				width: "24",
				height: "24"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "12",
				y: "12",
				width: "24",
				height: "24",
				transform: "rotate(45 24 24)"
			})]
		})
	});
}
function PatternBg() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className: "pointer-events-none fixed inset-0 -z-10 h-full w-full text-dusty opacity-[0.16]",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pattern", {
			id: "khatam-tile",
			width: "72",
			height: "72",
			patternUnits: "userSpaceOnUse",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "0.55",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "24",
					y: "24",
					width: "24",
					height: "24"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "24",
					y: "24",
					width: "24",
					height: "24",
					transform: "rotate(45 36 36)"
				})]
			})
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "100%",
			height: "100%",
			fill: "url(#khatam-tile)"
		})]
	});
}
function CornerMarks({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("pointer-events-none absolute inset-3", className),
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-0 left-0 size-4 border-t border-l border-gold/70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-0 right-0 size-4 border-t border-r border-gold/70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute bottom-0 left-0 size-4 border-b border-l border-gold/70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute bottom-0 right-0 size-4 border-b border-r border-gold/70" })
		]
	});
}
function Closing() {
	const reduced = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative min-h-dvh overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "silk-curtain silk-curtain-left silk-edge-left absolute inset-y-0 left-0 w-[22%] min-w-16 sm:w-[28%]",
				initial: reduced ? false : { x: "-100%" },
				whileInView: { x: "0%" },
				viewport: {
					once: true,
					amount: .35
				},
				transition: {
					duration: 1.4,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "silk-curtain silk-curtain-right silk-edge-right absolute inset-y-0 right-0 w-[22%] min-w-16 sm:w-[28%]",
				initial: reduced ? false : { x: "100%" },
				whileInView: { x: "0%" },
				viewport: {
					once: true,
					amount: .35
				},
				transition: {
					duration: 1.4,
					ease: [
						.22,
						1,
						.36,
						1
					],
					delay: .08
				},
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex min-h-dvh flex-col items-center justify-center px-8 py-20 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-base text-mauve italic sm:text-lg",
						children: "May Allah's blessings remain with you always."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IslamicDivider, { className: "my-6" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "gold-shimmer font-display text-3xl leading-tight font-semibold tracking-wide sm:text-5xl",
						children: "Happy Birthday"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "gold-shimmer mt-2 font-display text-4xl font-semibold tracking-[0.12em] sm:text-6xl",
						children: "KASHUU DI"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 font-sans text-xs tracking-[0.24em] text-mauve uppercase",
						children: "Forever Loved & Respected"
					})
				]
			})
		]
	});
}
function Reveal({ children, className, delay = 0 }) {
	const reduced = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: reduced ? false : {
			opacity: 0,
			y: 18
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			amount: .22
		},
		transition: {
			duration: .7,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children
	});
}
function SectionTitle({ title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mx-auto mb-8 max-w-xl px-5 text-center sm:mb-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-section font-medium tracking-wide text-charcoal",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 flex justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block h-px w-16 bg-gold/70" })
		})]
	});
}
function split(ms) {
	const total = Math.max(0, Math.floor(ms / 1e3));
	return {
		days: Math.floor(total / 86400),
		hours: Math.floor(total % 86400 / 3600),
		minutes: Math.floor(total % 3600 / 60),
		seconds: total % 60
	};
}
function Countdown() {
	const [now, setNow] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setNow(Date.now());
		const id = window.setInterval(() => setNow(Date.now()), 1e3);
		return () => window.clearInterval(id);
	}, []);
	const remaining = now === null ? 0 : CELEBRATION_AT.getTime() - now;
	const arrived = now !== null && remaining <= 0;
	const parts = split(remaining);
	const ready = now !== null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "px-5 py-16 sm:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: "This Blessed Evening" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			delay: .08,
			className: "mx-auto max-w-3xl text-center",
			children: [arrived ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-8 font-display text-2xl text-charcoal italic sm:text-3xl",
				children: "Alhamdulillah — the blessed hour is here."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-8 font-sans text-sm tracking-wide text-mauve",
				children: "Until the celebration · Friday, 2 October 2026 · 7:00 PM"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Unit, {
						label: "Days",
						value: parts.days,
						ready
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Unit, {
						label: "Hours",
						value: parts.hours,
						ready
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Unit, {
						label: "Minutes",
						value: parts.minutes,
						ready
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Unit, {
						label: "Seconds",
						value: parts.seconds,
						ready
					})
				]
			})]
		})]
	});
}
function Unit({ label, value, ready }) {
	const display = ready ? String(value).padStart(2, "0") : "00";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass-panel rounded-lg px-3 py-5 sm:py-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
			initial: {
				opacity: .4,
				y: 6
			},
			animate: {
				opacity: 1,
				y: 0
			},
			transition: {
				duration: .25,
				ease: [
					.22,
					1,
					.36,
					1
				]
			},
			className: "font-display text-4xl leading-none text-charcoal tabular-nums sm:text-5xl",
			children: display
		}, display), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 font-sans text-xs tracking-[0.22em] text-mauve uppercase",
			children: label
		})]
	});
}
function Dua() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "px-5 py-16 sm:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: "Prayers & Blessings for You" }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .08,
				className: "mx-auto max-w-2xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "ornate-frame relative rounded-xl bg-champagne/80 px-6 py-10 sm:px-12 sm:py-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CornerMarks, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-6 flex justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Khatam, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-arabic text-verse leading-loose text-charcoal",
							lang: "ar",
							dir: "rtl",
							children: DUA_ARABIC
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 font-display text-base text-mauve italic sm:text-lg",
							children: DUA_TRANSLATION
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-sans text-[11px] tracking-[0.16em] text-dusty uppercase",
							children: "Surah Al-Furqan 25:74"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .16,
				className: "mx-auto mt-8 max-w-2xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-2 text-center font-sans text-sm leading-relaxed text-charcoal/85 sm:text-base",
					children: BIRTHDAY_DUA
				})
			})
		]
	});
}
function Gallery() {
	const [active, setActive] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (active === null) return;
		function onKey(event) {
			if (event.key === "Escape") setActive(null);
			if (event.key === "ArrowRight") setActive((current) => current === null ? current : (current + 1) % GALLERY.length);
			if (event.key === "ArrowLeft") setActive((current) => current === null ? current : (current - 1 + GALLERY.length) % GALLERY.length);
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "px-5 py-16 sm:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: "Memories & Moments" }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5",
				children: GALLERY.map((photo, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: index * .05,
					className: photo.wide ? "sm:col-span-2" : "",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryCard, {
						photo,
						onOpen: () => setActive(index)
					})
				}, photo.id))
			}),
			item && active !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbox, {
				item,
				onClose: () => setActive(null),
				onPrev: () => setActive((active - 1 + GALLERY.length) % GALLERY.length),
				onNext: () => setActive((active + 1) % GALLERY.length)
			}) : null
		]
	});
}
function GalleryCard({ photo, onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onOpen,
		className: cn("gallery-card photo-frame group relative w-full text-left", photo.aspect),
		"aria-label": `View ${photo.caption}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: photo.src,
			alt: photo.alt,
			className: cn("size-full object-cover", photo.pos),
			loading: "lazy"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute inset-x-0 bottom-0 bg-linear-to-t from-charcoal/80 to-transparent px-4 pt-12 pb-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-lg text-ivory",
				children: photo.caption
			})
		})]
	});
}
function Lightbox({ item, onClose, onPrev, onNext }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "lightbox-layer fixed inset-0 flex items-center justify-center bg-charcoal/80 p-4",
		role: "dialog",
		"aria-modal": "true",
		"aria-label": item.caption,
		onClick: onClose,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onClose,
				className: "absolute top-4 right-4 flex size-11 items-center justify-center rounded-full bg-ivory/15 text-ivory",
				"aria-label": "Close photo",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: (event) => {
					event.stopPropagation();
					onPrev();
				},
				className: "absolute top-1/2 left-3 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/15 text-ivory",
				"aria-label": "Previous photo",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "relative max-h-[88dvh] max-w-4xl",
				onClick: (event) => event.stopPropagation(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: item.src,
					alt: item.alt,
					className: "max-h-[80dvh] w-full rounded-md object-contain"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "mt-3 text-center font-display text-lg text-ivory",
					children: item.caption
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: (event) => {
					event.stopPropagation();
					onNext();
				},
				className: "absolute top-1/2 right-3 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/15 text-ivory",
				"aria-label": "Next photo",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
			})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative flex min-h-dvh flex-col items-center justify-center px-5 py-20 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-arabic text-lg text-mauve sm:text-xl",
				lang: "ar",
				dir: "rtl",
				children: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 font-display text-sm tracking-[0.22em] text-mauve uppercase",
				children: "Honoring a Truly Special Soul"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IslamicDivider, { className: "my-5" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "gold-shimmer font-display text-display leading-none font-semibold tracking-wide",
				children: "Happy Birthday"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "gold-shimmer mt-2 font-display text-name leading-none font-semibold tracking-[0.12em]",
				children: "KASHUU DI"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-md font-display text-base text-mauve italic sm:text-lg",
				children: "Teacher, Mentor & Sister — A Gift of Light & Grace"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 size-36 overflow-hidden rounded-full ring-1 ring-gold/70 ring-offset-4 ring-offset-ivory sm:size-44",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: PHOTOS.portrait,
					alt: "Kashuu Di, smiling in a patterned hijab",
					className: "hero-portrait size-full object-cover",
					width: 720,
					height: 687
				})
			})
		]
	});
}
function MusicWidget() {
	const { playing, muted, togglePlay, toggleMute } = useInvitationAudio();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "music-dock pointer-events-none fixed right-4 bottom-24 sm:bottom-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass-panel pointer-events-auto flex items-center gap-2 rounded-full py-2 pr-3 pl-3 shadow-lg",
			role: "region",
			"aria-label": "Background music",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: cn("eq flex h-4 items-end gap-0.5", playing && !muted ? "eq-on" : ""),
					"aria-hidden": "true",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "eq-bar h-2" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "eq-bar h-3.5" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "eq-bar h-2.5" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "eq-bar h-3" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music2, {
					className: "size-3.5 text-mauve",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden max-w-36 truncate font-sans text-[11px] tracking-wide text-mauve sm:inline",
					children: "Soft Instrumentals & Duas"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: togglePlay,
					className: "flex size-10 items-center justify-center rounded-full text-charcoal transition-transform duration-150 ease-out active:scale-[0.96]",
					"aria-label": playing ? "Pause music" : "Play music",
					children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: toggleMute,
					className: "flex size-10 items-center justify-center rounded-full text-charcoal transition-transform duration-150 ease-out active:scale-[0.96]",
					"aria-label": muted ? "Unmute music" : "Mute music",
					children: muted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4" })
				})
			]
		})
	});
}
function OpeningCurtain({ onEnter }) {
	const [opening, setOpening] = (0, import_react.useState)(false);
	const [gone, setGone] = (0, import_react.useState)(false);
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: !gone ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		className: "curtain-layer fixed inset-0 overflow-hidden",
		initial: false,
		exit: { opacity: 0 },
		transition: { duration: .4 },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "silk-curtain silk-curtain-left silk-edge-left absolute inset-y-0 left-0 w-1/2",
				initial: { x: 0 },
				animate: opening ? { x: "-108%" } : { x: 0 },
				transition: {
					duration: 1.7,
					ease: [
						.22,
						1,
						.36,
						1
					],
					delay: opening ? .12 : 0
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "silk-curtain silk-curtain-right silk-edge-right absolute inset-y-0 right-0 w-1/2",
				initial: { x: 0 },
				animate: opening ? { x: "108%" } : { x: 0 },
				transition: {
					duration: 1.7,
					ease: [
						.22,
						1,
						.36,
						1
					],
					delay: opening ? .18 : 0
				},
				onAnimationComplete: () => {
					if (opening) setGone(true);
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				className: "absolute inset-0 flex flex-col items-center justify-center px-6 text-center",
				animate: opening ? {
					opacity: 0,
					y: -8
				} : {
					opacity: 1,
					y: 0
				},
				transition: {
					duration: .45,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute inset-0 overflow-hidden",
						"aria-hidden": "true",
						children: PARTICLES.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "particle",
							style: {
								left: `${p.l}%`,
								top: `${p.t}%`,
								width: p.s,
								height: p.s,
								animationDelay: `${p.d}s`,
								animationDuration: `${p.dur}s`
							}
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "relative mb-5 max-w-xs font-display text-sm tracking-[0.22em] text-mauve uppercase sm:max-w-md sm:text-base",
						children: "A Special Celebration of Grace, Wisdom & Love"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "relative font-arabic text-arabic text-charcoal",
						lang: "ar",
						dir: "rtl",
						children: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "relative mt-2 font-display text-sm italic text-mauve sm:text-base",
						children: "Bismillāhir-Raḥmānir-Raḥīm"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IslamicDivider, { className: "relative my-5" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "relative mb-8 font-sans text-sm tracking-wide text-mauve",
						children: "With the Blessings & Mercy of Allah"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: handleEnter,
						className: "enter-btn glass-panel relative min-h-12 rounded-full px-8 py-3 font-sans text-xs font-medium tracking-[0.22em] text-charcoal uppercase transition-transform duration-150 ease-out active:scale-[0.96]",
						children: "Enter Celebration"
					})
				]
			})
		]
	}) : null });
}
function Petals() {
	if (useReducedMotion()) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed inset-0 overflow-hidden",
		"aria-hidden": "true",
		children: PETALS.map((petal, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `petal petal-tint-${petal.tint}`,
			style: {
				left: `${petal.left}%`,
				width: petal.size,
				height: petal.size + 4,
				animationDuration: `${petal.duration}s`,
				animationDelay: `${petal.delay}s`,
				["--sway"]: `${petal.sway}px`
			}
		}, index))
	});
}
function Tribute() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "px-5 py-16 sm:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: "A Tribute of Respect & Love" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-5xl items-center gap-8 lg:grid-cols-2 lg:gap-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "photo-frame relative mx-auto aspect-portrait max-w-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: PHOTOS.ceremony,
					alt: "Kashuu Di in ceremonial dress beneath a canopy of roses",
					className: "tribute-photo size-full object-cover",
					width: 508,
					height: 1106
				})
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "relative rounded-xl bg-blush/60 px-6 py-8 sm:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CornerMarks, { className: "inset-2" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg leading-relaxed text-charcoal sm:text-xl",
							children: TRIBUTE
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 font-display text-sm tracking-[0.18em] text-mauve uppercase",
							children: "With love & dua"
						})
					]
				})
			})]
		})]
	});
}
function Wishes() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "px-5 py-16 sm:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: "Warm Wishes & Duas" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-5xl gap-4 sm:grid-cols-3 sm:gap-5",
			children: WISHES.map((wish, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: index * .08,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "wish-card glass-panel relative h-full rounded-xl px-5 py-7 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-4 flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Khatam, { className: "size-7" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg leading-relaxed text-charcoal",
						children: wish
					})]
				})
			}, wish))
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AudioProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InvitationApp, {}) });
}
function InvitationApp() {
	const [entered, setEntered] = (0, import_react.useState)(false);
	const { startFromGesture } = useInvitationAudio();
	(0, import_react.useEffect)(() => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-dvh bg-ivory text-charcoal",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatternBg, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OpeningCurtain, { onEnter: handleEnter }),
			entered ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Petals, {}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}), entered ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dua, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tribute, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Countdown, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wishes, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Closing, {})
			] }) : null] }),
			entered ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MusicWidget, {}) : null
		]
	});
}
//#endregion
export { Home as component };
