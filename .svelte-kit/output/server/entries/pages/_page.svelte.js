import { W as sanitize_props, X as rest_props, Y as attributes, Z as clsx, _ as ensure_array_like, $ as element, a0 as slot, a1 as bind_props, a2 as spread_props, a3 as store_get, a4 as unsubscribe_stores, a5 as attr_class, V as stringify, U as attr, a6 as head } from "../../chunks/index2.js";
import { w as writable } from "../../chunks/index.js";
import parser from "docker-file-parser";
import { f as fallback } from "../../chunks/utils2.js";
import { e as escape_html } from "../../chunks/context.js";
import "clsx";
function validate(dockerfileText) {
  if (!dockerfileText.trim()) {
    return { valid: true, errors: [], warnings: [], totalLines: 0 };
  }
  try {
    const commands = parser.parse(dockerfileText, { includeComments: false });
    const errors = [];
    const warnings = [];
    commands.forEach((cmd) => {
      const { name, args, line } = cmd;
      if (name === "FROM" && (!args || args.length === 0)) {
        errors.push({ line, type: "error", message: "FROM requires image name" });
      }
      if (name === "RUN" && (!args || args.length === 0)) {
        errors.push({ line, type: "error", message: "RUN requires command" });
      }
      if (name === "COPY" && (!args || args.length < 2)) {
        errors.push({ line, type: "error", message: "COPY requires source and destination" });
      }
      if (name === "MAINTAINER") {
        warnings.push({ line, type: "warning", message: "MAINTAINER is deprecated, use LABEL" });
      }
    });
    return {
      valid: errors.length === 0,
      errors,
      warnings,
      totalLines: dockerfileText.split("\n").length
    };
  } catch (error) {
    return {
      valid: false,
      errors: [{ line: 1, type: "error", message: `Parse error: ${error.message}` }],
      warnings: []
    };
  }
}
const content = writable("");
const results = writable({
  valid: true,
  errors: [],
  warnings: [],
  totalLines: 0
});
content.subscribe((text) => {
  if (text && text.trim()) {
    const validation = validate(text);
    results.set(validation);
  } else {
    results.set({
      valid: true,
      errors: [],
      warnings: [],
      totalLines: 0
    });
  }
});
/**
 * @license lucide-svelte v0.546.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
function Icon($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode"
  ]);
  $$renderer.component(($$renderer2) => {
    let name = fallback($$props["name"], void 0);
    let color = fallback($$props["color"], "currentColor");
    let size = fallback($$props["size"], 24);
    let strokeWidth = fallback($$props["strokeWidth"], 2);
    let absoluteStrokeWidth = fallback($$props["absoluteStrokeWidth"], false);
    let iconNode = fallback($$props["iconNode"], () => [], true);
    const mergeClasses = (...classes) => classes.filter((className, index, array) => {
      return Boolean(className) && array.indexOf(className) === index;
    }).join(" ");
    $$renderer2.push(`<svg${attributes(
      {
        ...defaultAttributes,
        ...$$restProps,
        width: size,
        height: size,
        stroke: color,
        "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        class: clsx(mergeClasses("lucide-icon", "lucide", name ? `lucide-${name}` : "", $$sanitized_props.class))
      },
      void 0,
      void 0,
      void 0,
      3
    )}><!--[-->`);
    const each_array = ensure_array_like(iconNode);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let [tag, attrs] = each_array[$$index];
      element($$renderer2, tag, () => {
        $$renderer2.push(`${attributes({ ...attrs }, void 0, void 0, void 0, 3)}`);
      });
    }
    $$renderer2.push(`<!--]--><!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--></svg>`);
    bind_props($$props, {
      name,
      color,
      size,
      strokeWidth,
      absoluteStrokeWidth,
      iconNode
    });
  });
}
function Upload($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.546.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The MIT License (MIT) (for portions derived from Feather)
   *
   * Copyright (c) 2013-2023 Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */
  const iconNode = [
    ["path", { "d": "M12 3v12" }],
    ["path", { "d": "m17 8-5-5-5 5" }],
    ["path", { "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }]
  ];
  Icon($$renderer, spread_props([
    { name: "upload" },
    $$sanitized_props,
    {
      /**
       * @component @name Upload
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgM3YxMiIgLz4KICA8cGF0aCBkPSJtMTcgOC01LTUtNSA1IiAvPgogIDxwYXRoIGQ9Ik0yMSAxNXY0YTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0ydi00IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/upload
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Editor($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let textarea;
    if (typeof store_get($$store_subs ??= {}, "$content", content) === "string" && textarea) ;
    $$renderer2.push(`<div class="d-flex flex-column h-100"><div class="mb-3"><label class="btn btn-outline-primary btn-sm">`);
    Upload($$renderer2, {
      size: (
        // File upload
        // Reset input to allow re-uploading the same file
        16
      ),
      class: "me-1"
    });
    $$renderer2.push(`<!----> Upload Dockerfile <input type="file" class="d-none" accept=".dockerfile,Dockerfile"/></label></div> <div class="flex-grow-1 d-flex border border-custom rounded overflow-hidden"><div class="editor-line-numbers"><!--[-->`);
    const each_array = ensure_array_like(Array(Math.max(1, (store_get($$store_subs ??= {}, "$content", content) || "").split("\n").length)));
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      each_array[i];
      $$renderer2.push(`<div>${escape_html(i + 1)}</div>`);
    }
    $$renderer2.push(`<!--]--></div> <textarea class="form-control border-0 flex-grow-1 rounded-0 svelte-1ctqrjb" placeholder="Paste your Dockerfile here..." spellcheck="false" style="resize: none; font-family: 'Courier New', monospace; font-size: 14px; line-height: 1.5;"></textarea></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function ResultsPanel($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    function getStatusClass(valid) {
      return valid ? "alert-success" : "alert-danger";
    }
    $$renderer2.push(`<div class="h-100 d-flex flex-column"><div${attr_class(`alert ${stringify(getStatusClass(store_get($$store_subs ??= {}, "$results", results).valid))} mb-4`)}>`);
    if (store_get($$store_subs ??= {}, "$results", results).valid) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<h5 class="mb-0"><i class="bi bi-check-circle-fill me-2"></i> Valid Dockerfile</h5> <small class="text-muted">${escape_html(store_get($$store_subs ??= {}, "$results", results).totalLines)} lines • No issues found.</small>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<h5 class="mb-0"><i class="bi bi-x-circle-fill me-2"></i> Invalid Dockerfile</h5> <small class="text-muted">${escape_html(store_get($$store_subs ??= {}, "$results", results).errors.length)} error(s) • ${escape_html(store_get($$store_subs ??= {}, "$results", results).warnings.length)} warning(s)</small>`);
    }
    $$renderer2.push(`<!--]--></div> `);
    if (store_get($$store_subs ??= {}, "$results", results).errors.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<h6 class="text-danger mb-2"><i class="bi bi-shield-fill-x me-2"></i> Errors</h6> <!--[-->`);
      const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$results", results).errors);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let error = each_array[$$index];
        $$renderer2.push(`<div class="alert alert-danger d-flex justify-content-between align-items-center mb-2 p-2"><span><strong>Line ${escape_html(error.line)}:</strong> ${escape_html(error.message)}</span></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (store_get($$store_subs ??= {}, "$results", results).warnings.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<h6 class="text-warning mb-2 mt-3"><i class="bi bi-shield-fill-exclamation me-2"></i> Warnings</h6> <!--[-->`);
      const each_array_1 = ensure_array_like(store_get($$store_subs ??= {}, "$results", results).warnings);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let warning = each_array_1[$$index_1];
        $$renderer2.push(`<div class="alert alert-warning d-flex justify-content-between align-items-center mb-2 p-2"><span><strong>Line ${escape_html(warning.line)}:</strong> ${escape_html(warning.message)}</span></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (store_get($$store_subs ??= {}, "$content", content) && store_get($$store_subs ??= {}, "$results", results).valid) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="flex-grow-1 d-flex align-items-center justify-content-center text-muted mt-4"><div class="text-center"><i class="bi bi-rocket-takeoff-fill fs-1 mb-3 text-success"></i> <h5>All Systems Go!</h5> <p>Your Dockerfile looks perfect and is ready to build. 🚀</p></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Refresh_cw($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.546.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The MIT License (MIT) (for portions derived from Feather)
   *
   * Copyright (c) 2013-2023 Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */
  const iconNode = [
    [
      "path",
      { "d": "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" }
    ],
    ["path", { "d": "M21 3v5h-5" }],
    [
      "path",
      { "d": "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" }
    ],
    ["path", { "d": "M8 16H3v5" }]
  ];
  Icon($$renderer, spread_props([
    { name: "refresh-cw" },
    $$sanitized_props,
    {
      /**
       * @component @name RefreshCw
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMyAxMmE5IDkgMCAwIDEgOS05IDkuNzUgOS43NSAwIDAgMSA2Ljc0IDIuNzRMMjEgOCIgLz4KICA8cGF0aCBkPSJNMjEgM3Y1aC01IiAvPgogIDxwYXRoIGQ9Ik0yMSAxMmE5IDkgMCAwIDEtOSA5IDkuNzUgOS43NSAwIDAgMS02Ljc0LTIuNzRMMyAxNiIgLz4KICA8cGF0aCBkPSJNOCAxNkgzdjUiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/refresh-cw
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Download($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.546.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The MIT License (MIT) (for portions derived from Feather)
   *
   * Copyright (c) 2013-2023 Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */
  const iconNode = [
    ["path", { "d": "M12 15V3" }],
    ["path", { "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }],
    ["path", { "d": "m7 10 5 5 5-5" }]
  ];
  Icon($$renderer, spread_props([
    { name: "download" },
    $$sanitized_props,
    {
      /**
       * @component @name Download
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMTVWMyIgLz4KICA8cGF0aCBkPSJNMjEgMTV2NGEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMnYtNCIgLz4KICA8cGF0aCBkPSJtNyAxMCA1IDUgNS01IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/download
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Play($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.546.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The MIT License (MIT) (for portions derived from Feather)
   *
   * Copyright (c) 2013-2023 Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */
  const iconNode = [
    [
      "path",
      {
        "d": "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "play" },
    $$sanitized_props,
    {
      /**
       * @component @name Play
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNSA1YTIgMiAwIDAgMSAzLjAwOC0xLjcyOGwxMS45OTcgNi45OThhMiAyIDAgMCAxIC4wMDMgMy40NThsLTEyIDdBMiAyIDAgMCAxIDUgMTl6IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/play
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Toolbar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    $$renderer2.push(`<nav class="p-3 border-bottom border-custom"><div class="d-flex justify-content-between align-items-center"><div class="btn-group" role="group"><button class="btn btn-outline-danger btn-sm" title="Clear Editor">`);
    Refresh_cw($$renderer2, { size: 16, class: "me-1" });
    $$renderer2.push(`<!----> Clear</button> <button class="btn btn-outline-success btn-sm" title="Validate Now">`);
    Play($$renderer2, { size: 16, class: "me-1" });
    $$renderer2.push(`<!----> Validate</button></div> <div class="btn-group" role="group"><button class="btn btn-outline-secondary btn-sm dropdown-toggle" data-bs-toggle="dropdown"${attr("disabled", !store_get($$store_subs ??= {}, "$content", content) || !store_get($$store_subs ??= {}, "$content", content).trim(), true)}>`);
    Download($$renderer2, { size: 16, class: "me-1" });
    $$renderer2.push(`<!----> Export Report</button> <ul class="dropdown-menu dropdown-menu-end"><li><button class="dropdown-item">As JSON</button></li> <li><button class="dropdown-item">As TXT</button></li></ul></div></div></nav>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Circle_question_mark($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.546.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The MIT License (MIT) (for portions derived from Feather)
   *
   * Copyright (c) 2013-2023 Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["path", { "d": "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }],
    ["path", { "d": "M12 17h.01" }]
  ];
  Icon($$renderer, spread_props([
    { name: "circle-question-mark" },
    $$sanitized_props,
    {
      /**
       * @component @name CircleQuestionMark
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8cGF0aCBkPSJNOS4wOSA5YTMgMyAwIDAgMSA1LjgzIDFjMCAyLTMgMy0zIDMiIC8+CiAgPHBhdGggZD0iTTEyIDE3aC4wMSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/circle-question-mark
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function HelpModal($$renderer) {
  $$renderer.push(`<button class="btn btn-outline-info btn-sm" title="Dockerfile Reference" aria-label="Open Dockerfile Help">`);
  Circle_question_mark($$renderer, { size: 16 });
  $$renderer.push(`<!----> Help</button> `);
  {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]-->`);
}
function _page($$renderer) {
  head($$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>AxelBase - Dockerfile Syntax Validator</title>`);
    });
    $$renderer2.push(`<meta name="robots" content="index, follow"/> <meta name="description" content="AxelBase is a real-time Dockerfile syntax validator. Learn about its features, how to use it, and get answers to FAQs."/> <meta name="keywords" content="Dockerfile, syntax validator, AxelBase, real-time validation, Docker, development tools"/> <meta name="author" content="AxelBase Team"/> <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE"/>`);
  });
  $$renderer.push(`<div class="container-fluid vh-100 p-0"><div class="row h-100 g-0"><div class="col-md-6 h-100 d-flex flex-column bg-dark-surface border-end border-custom">`);
  Toolbar($$renderer);
  $$renderer.push(`<!----> <div class="flex-grow-1 p-3">`);
  Editor($$renderer);
  $$renderer.push(`<!----></div></div> <div class="col-md-6 h-100 p-3 overflow-auto">`);
  ResultsPanel($$renderer);
  $$renderer.push(`<!----> <div class="mt-3 d-flex justify-content-end">`);
  HelpModal($$renderer);
  $$renderer.push(`<!----></div></div></div></div> <div class="container py-5"><section id="about" class="py-5 text-center"><h2 class="display-5">About AxelBase</h2> <p class="lead text-secondary-text">Welcome to AxelBase, a cutting-edge tool designed to validate Dockerfile syntax with precision and ease. Our mission is to revolutionize your development workflow by delivering instant, accurate feedback on your Docker configurations, saving you time and reducing errors. Born from the need to address common pitfalls in Docker build processes, AxelBase leverages advanced client-side technology to empower developers worldwide. Whether you're a solo coder or part of a large team, our tool ensures your Dockerfiles are robust and error-free before they reach the build stage.</p> <p class="text-secondary-text">Founded with a passion for open-source development, AxelBase is built by a team of experienced developers who understand the frustrations of debugging failed builds. We prioritize privacy by performing all validation locally in your browser, using JavaScript to analyze your code without ever sending it to a server. This approach not only enhances security but also supports offline use, making it ideal for remote work environments. Our commitment to user experience is reflected in the intuitive interface and real-time feedback system, which highlights syntax errors and best practices in an accessible format.</p> <p class="text-secondary-text">AxelBase is more than just a validator; it’s a community-driven project aimed at fostering collaboration and knowledge sharing. With features like exportable validation reports in TXT and JSON formats, you can document your work and share insights with your team. As we continue to evolve, we invite feedback to shape future updates, ensuring AxelBase remains a vital tool for the Docker ecosystem. Join us in building reliable, efficient Docker images and experience the difference today.</p></section> <hr class="border-custom my-4"/> <section id="how-to-use" class="py-5 text-center"><h2 class="display-5">How to Use</h2> <p class="lead text-secondary-text">Getting started with AxelBase is straightforward, designed to integrate seamlessly into your development process. To begin, open the tool in your browser and locate the editor panel on the left side of the interface. Here, you can paste the content of your Dockerfile directly or upload a \`.dockerfile\` file using the provided toolbar options. Once your code is loaded, AxelBase’s real-time validation engine springs into action, analyzing each line for syntax errors, best practice warnings, and structural issues, with results displayed instantly in the results panel on the right.</p> <p class="text-secondary-text">The editor supports common Dockerfile commands like \`FROM\`, \`RUN\`, \`COPY\`, and \`EXPOSE\`, flagging issues such as missing base images or invalid arguments with clear, color-coded feedback—green for valid, red for errors. For a more detailed understanding, click the “Help” button to access a modal with a reference guide to Dockerfile instructions. If you encounter errors, the results panel provides specific line numbers and suggestions for fixes, such as correcting \`FROM invalid\` to \`FROM node:18\`. You can also export your validation results as TXT or JSON files via the toolbar, ideal for documentation or team reviews.</p> <p class="text-secondary-text">For optimal use, work incrementally—add a few lines, validate, and adjust as needed. This approach minimizes the risk of cascading errors in large Dockerfiles. If you’re new to Docker, start with a simple file and explore the tool’s features, like multi-line command validation or best practice alerts for inefficient \`RUN\` layers. Advanced users can leverage the export feature to integrate with CI/CD pipelines or share reports with stakeholders. Regularly saving your work and testing builds in a staging environment complements AxelBase’s capabilities, ensuring a smooth development experience.</p></section> <hr class="border-custom my-4"/> <section id="faq" class="py-5"><h2 class="display-5 text-center mb-5">Frequently Asked Questions</h2> <div class="accordion" id="faqAccordion"><div class="accordion-item svelte-1uha8ag"><h2 class="accordion-header"><button class="accordion-button collapsed svelte-1uha8ag" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">What is this tool for?</button></h2> <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#faqAccordion"><div class="accordion-body">AxelBase is a real-time syntax validator designed to check Dockerfiles for errors and best practices before you run \`docker build\`. It helps catch issues like missing images, invalid commands, or inefficient layers, saving you time and preventing build failures. Whether you’re a beginner learning Docker or an expert optimizing large files, AxelBase provides instant feedback to streamline your workflow. The tool is particularly useful for ensuring consistency across team projects and avoiding costly mistakes in production environments.</div></div></div> <div class="accordion-item svelte-1uha8ag"><h2 class="accordion-header"><button class="accordion-button collapsed svelte-1uha8ag" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">Is my data saved on your servers?</button></h2> <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#faqAccordion"><div class="accordion-body">No, your data is not saved on our servers. AxelBase performs all validation client-side within your browser using JavaScript, meaning your Dockerfile content never leaves your device. This privacy-first design ensures your code remains secure, even on public networks. The tool uses local storage only for temporary session data, which is cleared when you close the browser unless you explicitly save exports. This approach supports offline use and aligns with our commitment to user trust and data sovereignty.</div></div></div> <div class="accordion-item svelte-1uha8ag"><h2 class="accordion-header"><button class="accordion-button collapsed svelte-1uha8ag" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">Can I use AxelBase offline?</button></h2> <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#faqAccordion"><div class="accordion-body">Yes, AxelBase is fully functional offline. Since all validation occurs client-side, you can use it without an internet connection, making it perfect for remote work or areas with unreliable networks. Simply load the tool in your browser, and it will work as expected. However, note that initial access to the web app requires an online connection to load the interface. Once loaded, you can continue using it offline, with all features like real-time validation and exports available, enhancing flexibility for developers on the go.</div></div></div></div></section></div>`);
}
export {
  _page as default
};
