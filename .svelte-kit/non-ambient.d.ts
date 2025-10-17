
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/blog" | "/blog/posts" | "/blog/posts/post1" | "/blog/posts/post2" | "/blog/posts/post3" | "/blog/posts/post4" | "/blog/posts/post5" | "/blog/posts/post6" | "/blog/posts/post7" | "/privacy" | "/terms";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/blog": Record<string, never>;
			"/blog/posts": Record<string, never>;
			"/blog/posts/post1": Record<string, never>;
			"/blog/posts/post2": Record<string, never>;
			"/blog/posts/post3": Record<string, never>;
			"/blog/posts/post4": Record<string, never>;
			"/blog/posts/post5": Record<string, never>;
			"/blog/posts/post6": Record<string, never>;
			"/blog/posts/post7": Record<string, never>;
			"/privacy": Record<string, never>;
			"/terms": Record<string, never>
		};
		Pathname(): "/" | "/blog" | "/blog/" | "/blog/posts" | "/blog/posts/" | "/blog/posts/post1" | "/blog/posts/post1/" | "/blog/posts/post2" | "/blog/posts/post2/" | "/blog/posts/post3" | "/blog/posts/post3/" | "/blog/posts/post4" | "/blog/posts/post4/" | "/blog/posts/post5" | "/blog/posts/post5/" | "/blog/posts/post6" | "/blog/posts/post6/" | "/blog/posts/post7" | "/blog/posts/post7/" | "/privacy" | "/privacy/" | "/terms" | "/terms/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.nojekyll" | "/AxelLab-Logo.ico" | "/robots.txt" | "/sitemap.xml" | string & {};
	}
}