import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.CGLXW2a_.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DclLNup3.js","_app/immutable/chunks/COTc1eVh.js","_app/immutable/chunks/JSsAqExA.js","_app/immutable/chunks/DGd0bTLZ.js","_app/immutable/chunks/B9hXjthg.js","_app/immutable/chunks/BNJALzHz.js","_app/immutable/chunks/Q9ANxuGD.js","_app/immutable/chunks/CgWPZEOT.js","_app/immutable/chunks/dbL-Cg0J.js"];
export const stylesheets = ["_app/immutable/assets/2.D8hGAmVa.css"];
export const fonts = [];
