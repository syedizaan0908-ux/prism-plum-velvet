import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, _ as createFileRoute, b as require_jsx_runtime, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, v as createRootRoute, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-_oNT86aJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var APP_NAME = "Kashuu Di — Birthday Celebration";
var CELEBRATION_AT = /* @__PURE__ */ new Date("2026-10-02T19:00:00+05:30");
var PHOTOS = {
	portrait: "/photos/portrait.jpg",
	ceremony: "/photos/ceremony.jpg",
	together: "/photos/together.jpg"
};
var AUDIO_SRC = "/audio/birthday-song.mp3";
var DUA_ARABIC = "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا";
var DUA_TRANSLATION = "Our Lord, grant us comfort to our eyes and make us a leader for the righteous.";
var BIRTHDAY_DUA = "May Allah (SWT) bless your age with Barakah, your heart with peace, your mind with wisdom, and grant you health, prosperity, and endless happiness in this world and the Next. Ameen.";
var TRIBUTE = "To a mentor who guides with patience, a sister who inspires with wisdom, and a soul that spreads light wherever she goes. Kashuu Di, your presence is a blessing in all our lives. May every step of your journey be guided by Allah's infinite Mercy, and may your days be filled with endless contentment, success, and divine favor.";
var WISHES = [
	"May Allah grant you a life full of Iman, health, happiness, and peace. Happy Birthday!",
	"May every year bring you closer to your dreams and elevate your status in both worlds.",
	"May your home always remain filled with Sukoon, love, and divine Barakah. Ameen!"
];
var GALLERY = [
	{
		id: "light",
		src: PHOTOS.portrait,
		caption: "A Guiding Light",
		pos: "pos-portrait-her",
		aspect: "aspect-portrait",
		alt: "Kashuu Di smiling in a patterned hijab"
	},
	{
		id: "joy",
		src: PHOTOS.together,
		caption: "Moments of Joy",
		pos: "pos-together-both",
		aspect: "aspect-wide",
		wide: true,
		alt: "Kashuu Di and family sharing a joyful peace-sign moment"
	},
	{
		id: "grace",
		src: PHOTOS.ceremony,
		caption: "Grace & Elegance",
		pos: "pos-ceremony-her",
		aspect: "aspect-tall",
		alt: "Kashuu Di in ceremonial dress, a portrait of grace"
	},
	{
		id: "journey",
		src: PHOTOS.ceremony,
		caption: "Blessed Journey",
		pos: "pos-ceremony-both",
		aspect: "aspect-portrait",
		alt: "Kashuu Di beneath a canopy of roses on a blessed occasion"
	},
	{
		id: "warmth",
		src: PHOTOS.portrait,
		caption: "Wisdom & Warmth",
		pos: "pos-portrait-pair",
		aspect: "aspect-square",
		alt: "Kashuu Di with family in a warm, smiling portrait"
	},
	{
		id: "cherished",
		src: PHOTOS.together,
		caption: "Always Cherished",
		pos: "pos-together-her",
		aspect: "aspect-portrait",
		alt: "Kashuu Di in a black hijab, smiling with a peace sign"
	}
];
var PETALS = [
	{
		left: 4,
		duration: 16,
		delay: 0,
		size: 12,
		sway: 28,
		tint: 0
	},
	{
		left: 12,
		duration: 18,
		delay: 2.1,
		size: 9,
		sway: 36,
		tint: 1
	},
	{
		left: 19,
		duration: 14,
		delay: 4.4,
		size: 14,
		sway: 22,
		tint: 0
	},
	{
		left: 27,
		duration: 20,
		delay: 1.2,
		size: 11,
		sway: 40,
		tint: 2
	},
	{
		left: 34,
		duration: 15,
		delay: 5.6,
		size: 8,
		sway: 18,
		tint: 1
	},
	{
		left: 41,
		duration: 19,
		delay: .8,
		size: 13,
		sway: 32,
		tint: 0
	},
	{
		left: 48,
		duration: 17,
		delay: 3.3,
		size: 10,
		sway: 26,
		tint: 2
	},
	{
		left: 55,
		duration: 21,
		delay: 6.1,
		size: 12,
		sway: 34,
		tint: 1
	},
	{
		left: 62,
		duration: 14.5,
		delay: 2.7,
		size: 9,
		sway: 20,
		tint: 0
	},
	{
		left: 69,
		duration: 18.5,
		delay: 4.9,
		size: 15,
		sway: 38,
		tint: 2
	},
	{
		left: 76,
		duration: 16.5,
		delay: 1.6,
		size: 11,
		sway: 24,
		tint: 1
	},
	{
		left: 83,
		duration: 19.5,
		delay: 5.2,
		size: 8,
		sway: 30,
		tint: 0
	},
	{
		left: 90,
		duration: 15.5,
		delay: .4,
		size: 13,
		sway: 21,
		tint: 2
	},
	{
		left: 8,
		duration: 22,
		delay: 7.4,
		size: 10,
		sway: 42,
		tint: 1
	},
	{
		left: 51,
		duration: 13.5,
		delay: 8.1,
		size: 7,
		sway: 16,
		tint: 0
	},
	{
		left: 95,
		duration: 17.8,
		delay: 3.8,
		size: 12,
		sway: 27,
		tint: 2
	}
];
var PARTICLES = [
	{
		l: 8,
		t: 18,
		d: 0,
		dur: 9,
		s: 3
	},
	{
		l: 22,
		t: 42,
		d: 1.4,
		dur: 11,
		s: 2
	},
	{
		l: 37,
		t: 12,
		d: 2.2,
		dur: 8,
		s: 4
	},
	{
		l: 51,
		t: 68,
		d: .6,
		dur: 12,
		s: 2
	},
	{
		l: 64,
		t: 28,
		d: 3.1,
		dur: 10,
		s: 3
	},
	{
		l: 78,
		t: 54,
		d: 1.8,
		dur: 9,
		s: 2
	},
	{
		l: 91,
		t: 16,
		d: 2.7,
		dur: 13,
		s: 3
	},
	{
		l: 14,
		t: 76,
		d: 4.2,
		dur: 8,
		s: 2
	},
	{
		l: 44,
		t: 36,
		d: .9,
		dur: 11,
		s: 4
	},
	{
		l: 72,
		t: 82,
		d: 3.6,
		dur: 10,
		s: 2
	},
	{
		l: 58,
		t: 8,
		d: 5.1,
		dur: 9,
		s: 3
	},
	{
		l: 31,
		t: 58,
		d: 2.4,
		dur: 12,
		s: 2
	}
];
var styles_default = "/assets/styles-DXUmiD3b.css";
var FONT_HREF = "https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap";
var Route$1 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "A luxurious Islamic birthday invitation and tribute for Kashuu Di — teacher, mentor, and sister."
			},
			{
				name: "theme-color",
				content: "#F7E8E5"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com"
			},
			{
				rel: "stylesheet",
				href: FONT_HREF
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		className: "antialiased",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter = () => import("./routes-BRBShHo8.mjs");
var rootRouteChildren = { IndexRoute: createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") }).update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { DUA_ARABIC as a, PARTICLES as c, TRIBUTE as d, WISHES as f, CELEBRATION_AT as i, PETALS as l, AUDIO_SRC as n, DUA_TRANSLATION as o, BIRTHDAY_DUA as r, GALLERY as s, router_exports as t, PHOTOS as u };
