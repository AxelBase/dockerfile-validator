export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "dockerfile-validator/_app",
	assets: new Set([".nojekyll","AxelLab-Logo.ico","robots.txt","sitemap.xml"]),
	mimeTypes: {".txt":"text/plain",".xml":"text/xml"},
	_: {
		client: {start:"_app/immutable/entry/start.By4aftQ3.js",app:"_app/immutable/entry/app.wvYwJYw7.js",imports:["_app/immutable/entry/start.By4aftQ3.js","_app/immutable/chunks/dmZfI2NX.js","_app/immutable/chunks/JSsAqExA.js","_app/immutable/chunks/COTc1eVh.js","_app/immutable/chunks/DGd0bTLZ.js","_app/immutable/chunks/COmin_7v.js","_app/immutable/entry/app.wvYwJYw7.js","_app/immutable/chunks/COTc1eVh.js","_app/immutable/chunks/DGd0bTLZ.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/JSsAqExA.js","_app/immutable/chunks/dbL-Cg0J.js","_app/immutable/chunks/BNJALzHz.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/blog/posts/post1",
				pattern: /^\/blog\/posts\/post1\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/blog/posts/post2",
				pattern: /^\/blog\/posts\/post2\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/blog/posts/post3",
				pattern: /^\/blog\/posts\/post3\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/blog/posts/post4",
				pattern: /^\/blog\/posts\/post4\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/blog/posts/post5",
				pattern: /^\/blog\/posts\/post5\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/blog/posts/post6",
				pattern: /^\/blog\/posts\/post6\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/blog/posts/post7",
				pattern: /^\/blog\/posts\/post7\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/privacy",
				pattern: /^\/privacy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/terms",
				pattern: /^\/terms\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
