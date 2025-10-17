import { U as attr, V as stringify } from "../../chunks/index2.js";
import { b as base } from "../../chunks/server.js";
import "@sveltejs/kit/internal/server";
import { e as escape_html } from "../../chunks/context.js";
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children } = $$props;
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    $$renderer2.push(`<div class="app-container"><header class="app-header"><div class="navbar-content"><div class="brand-container"><a${attr("href", `${stringify(base)}/`)} aria-label="Home"><img${attr("src", `${stringify(base)}/AxelLab-Logo.ico`)} alt="AxelBase Logo" class="brand-logo"/></a> <a class="brand-name"${attr("href", `${stringify(base)}/`)}>AxelBase</a> <div class="bmac-container"><button class="bmac-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.35,22.2L12,22A10,10,0,0,1,2,12V10A2,2,0,0,1,4,8H7.2A5.13,5.13,0,0,1,12,3A5.13,5.13,0,0,1,16.8,8H20A2,2,0,0,1,22,10V12A10,10,0,0,1,12.35,22.2M4,10V12A8,8,0,0,0,12,20A8,8,0,0,0,20,12V10H16.8A5.11,5.11,0,0,1,12.5,5.12A5.15,5.15,0,0,1,7.2,10H4Z"></path></svg> Buy me a coffee</button> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div> <nav><ul class="nav-links"><li><a class="nav-link"${attr("href", `${stringify(base)}/`)}>Home</a></li> <li><a class="nav-link"${attr("href", `${stringify(base)}/#about`)}>About</a></li> <li><a class="nav-link"${attr("href", `${stringify(base)}/#how-to-use`)}>How to use</a></li> <li><a class="nav-link"${attr("href", `${stringify(base)}/#faq`)}>FAQ</a></li> <li><a class="nav-link"${attr("href", `${stringify(base)}/blog`)}>Blog</a></li></ul></nav></div></header> <main class="main-content">`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></main> <footer class="app-footer"><div class="footer-content"><span>© ${escape_html(currentYear)} AxelBase Dockerfile Syntax Validator</span> <div><a${attr("href", `${stringify(base)}/privacy`)}>Privacy Policy</a> <a${attr("href", `${stringify(base)}/terms`)}>Terms &amp; Conditions</a></div></div></footer></div>`);
  });
}
export {
  _layout as default
};
