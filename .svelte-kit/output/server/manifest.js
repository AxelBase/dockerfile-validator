export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "dockerfile-validator/_app",
	assets: new Set([".nojekyll","AxelLab-Logo.ico","google618c5ad541d5ebb5.html","robots.txt","sitemap.xml"]),
	mimeTypes: {".html":"text/html",".txt":"text/plain",".xml":"text/xml"},
	_: {
		client: {start:"_app/immutable/entry/start.KouKybMd.js",app:"_app/immutable/entry/app.CDnEqzMV.js",imports:["_app/immutable/entry/start.KouKybMd.js","_app/immutable/chunks/urjygYZg.js","_app/immutable/chunks/JSsAqExA.js","_app/immutable/chunks/COTc1eVh.js","_app/immutable/chunks/DGd0bTLZ.js","_app/immutable/chunks/Dd4C0OoY.js","_app/immutable/entry/app.CDnEqzMV.js","_app/immutable/chunks/COTc1eVh.js","_app/immutable/chunks/DGd0bTLZ.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/JSsAqExA.js","_app/immutable/chunks/dbL-Cg0J.js","_app/immutable/chunks/BNJALzHz.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
