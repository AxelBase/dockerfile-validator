import * as universal from '../entries/pages/blog/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/+page.js";
export const imports = ["_app/immutable/nodes/3.U_0NWnuP.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DclLNup3.js","_app/immutable/chunks/COTc1eVh.js","_app/immutable/chunks/CgWPZEOT.js","_app/immutable/chunks/COmin_7v.js"];
export const stylesheets = ["_app/immutable/assets/3.BQ_1CuGx.css"];
export const fonts = [];
