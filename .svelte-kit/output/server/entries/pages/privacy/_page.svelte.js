import { a6 as head, U as attr, V as stringify } from "../../../chunks/index2.js";
import { b as base } from "../../../chunks/server.js";
import "@sveltejs/kit/internal/server";
function _page($$renderer) {
  head($$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Privacy Policy — AxelBase Dockerfile Syntax Validator</title>`);
    });
    $$renderer2.push(`<meta name="robots" content="index, follow"/> <meta name="description" content="Learn about AxelBase's privacy policy and how we protect your data."/>`);
  });
  $$renderer.push(`<main class="container py-5 main-content" aria-labelledby="privacy-heading"><header class="text-center mb-5"><h1 id="privacy-heading" class="display-4 mb-2">Privacy Policy</h1> <p class="lead text-muted mb-0">Discover how we protect your data at AxelBase</p></header> <section class="mb-4"><p>At <strong>AxelBase</strong>, we prioritise your privacy with a <strong>client-side validation model</strong> that keeps your code on your device. As of <time datetime="2025-10-17T23:51:00+02:00">11:51 PM SAST on October 17, 2025</time>,
      all Dockerfile validation runs entirely in the browser using JavaScript, so your code <strong>never leaves your device</strong>.
      This eliminates server-side processing and reduces the risk of data exposure.</p></section> <section class="mb-4"><p>We do not collect, store, or transmit your Dockerfile content to any servers. The tool may use <strong>local storage</strong> for temporary session data such as recent validations or export preferences. Local storage is cleared when you close your browser
      unless you explicitly save exported files. Exports (for example TXT or JSON) are generated locally using browser APIs like <code>Blob</code> and remain under your control. Our <strong>no-data-retention policy</strong> means we do not log validation metadata.</p></section> <section class="mb-4"><h2 class="h4">Data Usage and Cookies</h2> <p>AxelBase does not use cookies or tracking technologies for analytics or advertising. Any local storage is optional and limited to
      improving your session experience, for example preserving editor state. We <strong>do not share</strong> your data with third parties.</p></section> <p class="mt-4 text-center"><a${attr("href", `${stringify(base)}/`)} class="btn btn-outline-primary" aria-label="Back to Home">Back to Home</a></p></main>`);
}
export {
  _page as default
};
