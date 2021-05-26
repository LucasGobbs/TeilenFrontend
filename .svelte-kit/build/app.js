import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\t<head>\r\n\t\t<meta charset=\"utf-8\" />\r\n\t\t<link rel=\"icon\" href=\"/favicon.ico\" />\r\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\r\n\t\t" + head + "\r\n\t</head>\r\n\t<body class=\"min-w-full\">\r\n\t\t<div id=\"svelte\">" + body + "</div>\r\n\t</body>\r\n</html>\r\n";

let options = null;

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: "/./_app/start-33dd441c.js",
			css: ["/./_app/assets/start-9aa571ba.css","/./_app/assets/vendor-981ad568.css"],
			js: ["/./_app/start-33dd441c.js","/./_app/chunks/vendor-628176ef.js","/./_app/chunks/singletons-bb9012b7.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => "/./_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: error => {
			console.error(error.stack);
			error.stack = options.get_stack(error);
		},
		hooks: get_hooks(user_hooks),
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		read: settings.read,
		root,
		router: true,
		ssr: true,
		target: "#svelte",
		template,
		trailing_slash: "never"
	};
}

const d = decodeURIComponent;
const empty = () => ({});

const manifest = {
	assets: [{"file":"favicon.ico","size":1150,"type":"image/vnd.microsoft.icon"},{"file":"images/svg/Mobile login-pana.svg","size":24330,"type":"image/svg+xml"},{"file":"images/svg/Teaching-rafiki.svg","size":36938,"type":"image/svg+xml"},{"file":"images/svg/Telecommuting-cuate.svg","size":126575,"type":"image/svg+xml"},{"file":"robots.txt","size":70,"type":"text/plain"}],
	layout: "src/routes/__layout.svelte",
	error: ".svelte-kit/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/projects\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/projects.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/pricing\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/pricing.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/editor\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/editor.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/signin\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/signin.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/login\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/login.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'endpoint',
						pattern: /^\/api\/?$/,
						params: empty,
						load: () => import("..\\..\\src\\routes\\api\\index.ts")
					},
		{
						type: 'endpoint',
						pattern: /^\/api\/signup\/?$/,
						params: empty,
						load: () => import("..\\..\\src\\routes\\api\\signup.ts")
					},
		{
						type: 'endpoint',
						pattern: /^\/api\/login\/?$/,
						params: empty,
						load: () => import("..\\..\\src\\routes\\api\\login.ts")
					},
		{
						type: 'endpoint',
						pattern: /^\/api\/users\/?$/,
						params: empty,
						load: () => import("..\\..\\src\\routes\\api\\users.ts")
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, render }) => render(request))
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("..\\..\\src\\routes\\__layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components\\error.svelte"),"src/routes/index.svelte": () => import("..\\..\\src\\routes\\index.svelte"),"src/routes/projects.svelte": () => import("..\\..\\src\\routes\\projects.svelte"),"src/routes/pricing.svelte": () => import("..\\..\\src\\routes\\pricing.svelte"),"src/routes/editor.svelte": () => import("..\\..\\src\\routes\\editor.svelte"),"src/routes/signin.svelte": () => import("..\\..\\src\\routes\\signin.svelte"),"src/routes/login.svelte": () => import("..\\..\\src\\routes\\login.svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"/./_app/pages/__layout.svelte-84f6fe61.js","css":["/./_app/assets/pages/__layout.svelte-17e66a27.css","/./_app/assets/vendor-981ad568.css"],"js":["/./_app/pages/__layout.svelte-84f6fe61.js","/./_app/chunks/vendor-628176ef.js"],"styles":null},".svelte-kit/build/components/error.svelte":{"entry":"/./_app/error.svelte-91396150.js","css":["/./_app/assets/vendor-981ad568.css"],"js":["/./_app/error.svelte-91396150.js","/./_app/chunks/vendor-628176ef.js"],"styles":null},"src/routes/index.svelte":{"entry":"/./_app/pages/index.svelte-62d66af1.js","css":["/./_app/assets/vendor-981ad568.css"],"js":["/./_app/pages/index.svelte-62d66af1.js","/./_app/chunks/vendor-628176ef.js","/./_app/chunks/singletons-bb9012b7.js"],"styles":null},"src/routes/projects.svelte":{"entry":"/./_app/pages/projects.svelte-690dd174.js","css":["/./_app/assets/vendor-981ad568.css"],"js":["/./_app/pages/projects.svelte-690dd174.js","/./_app/chunks/vendor-628176ef.js","/./_app/chunks/Explorer-2b6c9f23.js"],"styles":null},"src/routes/pricing.svelte":{"entry":"/./_app/pages/pricing.svelte-5a59e888.js","css":["/./_app/assets/vendor-981ad568.css"],"js":["/./_app/pages/pricing.svelte-5a59e888.js","/./_app/chunks/vendor-628176ef.js"],"styles":null},"src/routes/editor.svelte":{"entry":"/./_app/pages/editor.svelte-395f19db.js","css":["/./_app/assets/pages/editor.svelte-6e7c7d17.css","/./_app/assets/vendor-981ad568.css"],"js":["/./_app/pages/editor.svelte-395f19db.js","/./_app/chunks/vendor-628176ef.js","/./_app/chunks/Explorer-2b6c9f23.js"],"styles":null},"src/routes/signin.svelte":{"entry":"/./_app/pages/signin.svelte-9a88b05f.js","css":["/./_app/assets/vendor-981ad568.css"],"js":["/./_app/pages/signin.svelte-9a88b05f.js","/./_app/chunks/vendor-628176ef.js"],"styles":null},"src/routes/login.svelte":{"entry":"/./_app/pages/login.svelte-fcaa072f.js","css":["/./_app/assets/vendor-981ad568.css"],"js":["/./_app/pages/login.svelte-fcaa072f.js","/./_app/chunks/vendor-628176ef.js"],"styles":null}};

async function load_component(file) {
	return {
		module: await module_lookup[file](),
		...metadata_lookup[file]
	};
}

init({ paths: {"base":"","assets":"/."} });

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}