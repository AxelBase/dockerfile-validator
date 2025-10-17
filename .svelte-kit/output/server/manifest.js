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
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/dockerfile-validator/","/dockerfile-validator/blog","/dockerfile-validator/blog/posts/post1","/dockerfile-validator/blog/posts/post2","/dockerfile-validator/blog/posts/post3","/dockerfile-validator/blog/posts/post4","/dockerfile-validator/blog/posts/post5","/dockerfile-validator/blog/posts/post6","/dockerfile-validator/blog/posts/post7","/dockerfile-validator/privacy","/dockerfile-validator/terms"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
