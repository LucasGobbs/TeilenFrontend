const c = [
	() => import("..\\..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\components\\error.svelte"),
	() => import("..\\..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\projects.svelte"),
	() => import("..\\..\\..\\src\\routes\\pricing.svelte"),
	() => import("..\\..\\..\\src\\routes\\editor.svelte"),
	() => import("..\\..\\..\\src\\routes\\signin.svelte"),
	() => import("..\\..\\..\\src\\routes\\login.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/projects.svelte
	[/^\/projects\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/pricing.svelte
	[/^\/pricing\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/editor.svelte
	[/^\/editor\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/signin.svelte
	[/^\/signin\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/login.svelte
	[/^\/login\/?$/, [c[0], c[7]], [c[1]]],

	// src/routes/api/index.ts
	[/^\/api\/?$/],

	// src/routes/api/signup.ts
	[/^\/api\/signup\/?$/],

	// src/routes/api/login.ts
	[/^\/api\/login\/?$/],

	// src/routes/api/users.ts
	[/^\/api\/users\/?$/]
];

export const fallback = [c[0](), c[1]()];