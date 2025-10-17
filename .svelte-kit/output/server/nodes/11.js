import * as universal from '../entries/pages/privacy/_page.js';

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/privacy/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/privacy/+page.js";
export const imports = ["_app/immutable/nodes/11.Cqx7Fe1f.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DclLNup3.js","_app/immutable/chunks/COTc1eVh.js","_app/immutable/chunks/CgWPZEOT.js","_app/immutable/chunks/COmin_7v.js"];
export const stylesheets = [];
export const fonts = [];
