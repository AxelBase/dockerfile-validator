import { a6 as head, U as attr, V as stringify } from "../../../../../chunks/index2.js";
import { b as base } from "../../../../../chunks/server.js";
import "@sveltejs/kit/internal/server";
function _page($$renderer) {
  head($$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Exporting Results (TXT/JSON) - AxelBase Blog</title>`);
    });
    $$renderer2.push(`<meta name="robots" content="index, follow"/> <meta name="description" content="Learn how to export Dockerfile validation results with AxelBase’s TXT/JSON feature."/>`);
  });
  $$renderer.push(`<div class="container py-5 main-content"><h1 class="display-4 text-center mb-4">Exporting Results (TXT/JSON)</h1> <p class="lead text-secondary-text text-center mb-5">Maximize workflow efficiency with exportable validation reports.</p> <p>AxelBase’s export feature is a game-changer for developers, allowing the generation of TXT and JSON reports directly from validation results. After validating a Dockerfile, users can click the “Export” button to download a file named \`AxelBase-Docker-File-Validation-Report\`, with incremental suffixes like \`-1\`, \`-2\`, etc., for subsequent exports. This functionality is particularly valuable for archiving build histories, sharing with team members, or integrating into documentation processes, enhancing overall workflow efficiency.</p> <section class="mb-4"><h2 class="h4">Report Formats</h2> <p>AxelBase offers two export formats tailored to different needs:</p> <ul><li><strong>JSON</strong> — Ideal for automation, this format includes structured fields like timestamp, validation status, error/warning lists, line count, and the original Dockerfile content. It’s perfect for CI/CD pipelines or integration into developer tools.</li> <li><strong>TXT</strong> — Designed for readability, this version summarizes the validation results in plain text. It’s great for sharing with teammates or attaching to documentation.</li></ul> <p>Here’s a sample TXT report:</p> <pre><code>
AxelBase Dockerfile Validation Report
========================================
Status: VALID
Errors: 0
Warnings: 0
Lines: 5

--- ERRORS ---
None

--- WARNINGS ---
None
  </code></pre></section> <h2 class="mt-4">Practical Use Cases</h2> <ul class="list-group"><li class="list-group-item bg-dark-surface border-custom svelte-led0iy">Share reports with quality assurance teams for review.</li> <li class="list-group-item bg-dark-surface border-custom svelte-led0iy">Archive files for long-term compliance tracking.</li> <li class="list-group-item bg-dark-surface border-custom svelte-led0iy">Incorporate into CI/CD pipelines for automated validation checks.</li> <li class="list-group-item bg-dark-surface border-custom svelte-led0iy">Use as evidence during code reviews or audits.</li></ul> <h2 class="mt-4">Implementation Details</h2> <p>The export mechanism leverages browser APIs like \`Blob\` and \`URL.createObjectURL\` to generate downloadable files. When a user selects JSON or TXT, AxelBase constructs the report based on the current validation state, ensuring accuracy. The incremental naming convention prevents overwriting previous exports, a feature refined based on user feedback to maintain file integrity. This attention to detail makes the export process seamless and reliable.</p> <p>By utilizing this feature, developers can streamline collaboration and documentation, turning validation results into actionable insights. Whether you’re preparing for a team handover or ensuring regulatory compliance, AxelBase’s export capability transforms raw data into a valuable resource, solidifying its role as an essential tool in the development toolkit.</p> <p class="mt-4"><a${attr("href", `${stringify(base)}/blog`)} class="btn btn-outline-primary">Back to Blog</a></p></div>`);
}
export {
  _page as default
};
