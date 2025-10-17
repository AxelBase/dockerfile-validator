import * as universal from '../entries/pages/terms/_page.js';

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/terms/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/terms/+page.js";
export const imports = ["_app/immutable/nodes/12.DV28wxTV.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DclLNup3.js","_app/immutable/chunks/COTc1eVh.js","_app/immutable/chunks/CgWPZEOT.js","_app/immutable/chunks/Dd4C0OoY.js"];
export const stylesheets = [];
export const fonts = [];
