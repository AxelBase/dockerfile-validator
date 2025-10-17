import"../chunks/DsnmJJEf.js";import"../chunks/DclLNup3.js";import{h as U,a as pe,j as ue,bp as Re,b as Ae,M as De,l as Ce,bq as Se,b0 as Te,br as Me,g as Ie,c as Le,i as be,s as ye,L as Pe,y as Be,x as ze,B as Ue,a4 as ie,bs as Fe,_ as R,a6 as le,Q as ge,T as Q,a2 as o,a1 as w,a3 as n,b4 as K,a5 as z,d as S,b5 as je,bt as Ve,bu as We,bv as qe,X as L,bc as B,bw as Ye,t as $e,bx as ve,ad as G,Z as q,a0 as Y,Y as He,$ as Je}from"../chunks/COTc1eVh.js";import{w as Ee,o as Ge,g as Z}from"../chunks/JSsAqExA.js";import{e as te,i as ae}from"../chunks/B9hXjthg.js";import{l as H,p as J,s as re,b as Ke,a as he,c as oe}from"../chunks/BNJALzHz.js";import{i as ce}from"../chunks/Q9ANxuGD.js";import{d as _e,s as F}from"../chunks/DGd0bTLZ.js";import{a as xe,b as Xe}from"../chunks/CgWPZEOT.js";import{i as ee}from"../chunks/dbL-Cg0J.js";function X(r,t,a,m,f){U&&pe();var i=t.$$slots?.[a],s=!1;i===!0&&(i=t.children,s=!0),i===void 0||i(r,s?()=>m:m)}function Qe(r,t,a,m,f,i){let s=U;U&&pe();var c,_,p=null;U&&ue.nodeType===Re&&(p=ue,pe());var O=U?ue:r,k;Ae(()=>{const g=t()||null;var A=Se;g!==c&&(k&&(g===null?Be(k,()=>{k=null,_=null}):g===_?ze(k):(Ue(k),_e(!1))),g&&g!==_&&(k=Ce(()=>{if(p=U?p:document.createElementNS(A,g),Te(p,p),m){U&&Me(g)&&p.append(document.createComment(""));var $=U?Ie(p):p.appendChild(Le());U&&($===null?be(!1):ye($)),m(p,$)}Pe.nodes_end=p,O.before(p)})),c=g,c&&(_=c),_e(!0))},De),s&&(be(!0),ye(O))}const Ze=!0,Vt=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ze},Symbol.toStringTag,{value:"Module"}));function et(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var fe,we;function tt(){if(we)return fe;we=1;var r=RegExp(/[\t\v\f\r ]+/),t=RegExp(/\\[ \t]*$/),a=RegExp(/^\s*#.*$/),m=RegExp(/^#[ \t]*escape[ \t]*=[ \t]*(.).*$/);function f(e){return e.match(/^\s$/)}function i(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}function s(e){var d=x(e.rest,e.lineno);return d.command?(e.args=d.command,!0):(e.error="Unhandled onbuild command: "+e.rest,!1)}function c(e){var d=1,u=2,v=3,b=[],y=d,N="",j="",P=!1,C,T;for(T=0;T<=e.length;T++){if(T!=e.length&&(C=e[T]),y==d){if(T==e.length)break;if(f(C))continue;y=u}if((y==u||y==v)&&T==e.length){(P||N.length>0)&&b.push(N);break}if(y==u){if(f(C)){y=d,(P||N.length>0)&&b.push(N),N="",P=!1;continue}if((C=="'"||C=='"')&&(j=C,P=!0,y=v),C=="\\"){if(T+1==e.length)continue;N+=C,T++,C=e[T]}N+=C;continue}if(y==v){if(C==j&&(y=u),C=="\\"&&j!="'"){if(T+1==e.length){y=u;continue}N+=C,T++,C=e[T]}N+=C}}return b}function _(e){var d,u=c(e.rest);if(e.args={},u.length===0)return e.error="No KEY name value, or KEY name=value arguments found",!1;if(u[0].indexOf("=")==-1){var v=e.rest.split(r);if(v.length<2)return e.error=e.name+" must have two arguments, got "+e.rest,!1;e.args[v[0]]=v.slice(1).join(" ")}else{var b;for(b=0;b<u.length;b++){if(d=u[b],d.indexOf("=")==-1)return e.error="Syntax error - can't find = in "+d+". Must be of the form: name=value",!1;var y=d.split("=");e.args[y[0]]=y.slice(1).join("=")}}return!0}function p(e){return _(e)}function O(e){return _(e)}function k(e){return e.args=c(e.rest),!0}function g(e){return e.args=e.rest.split(r),!0}function A(e){return e.args=e.rest,!0}function $(e){try{var d=JSON.parse(e.rest)}catch{return!1}return!Array.isArray(d)||!d.every(function(u){return typeof u=="string"})?!1:(e.args=d,!0)}function E(e){return $(e)?!0:A(e)}function M(e){return $(e)?!0:g(e)}var D={ADD:M,ARG:k,CMD:E,COPY:M,ENTRYPOINT:E,ENV:p,EXPOSE:g,FROM:A,LABEL:O,MAINTAINER:A,ONBUILD:s,RUN:E,STOPSIGNAL:A,USER:A,VOLUME:M,WORKDIR:A};function l(e){return e.match(a)}function h(e){var d=e.match(r);if(!d)return{name:e.toUpperCase(),rest:""};var u=e.substr(0,d.index).toUpperCase(),v=e.substr(d.index+d[0].length);return{name:u,rest:v}}function x(e,d,u){var v=null,b=u&&u.lineContinuationRegex||t;if(e=e.trim(),!e)return{command:null,remainder:""};if(l(e))return v={name:"COMMENT",args:e,lineno:d},{command:v,remainder:""};if(e.match(b)){var y=e.replace(b,"","g");return{command:null,remainder:y}}v=h(e),v.lineno=d;var N=D[v.name];return N||(N=A),N(v)&&(v.raw=e,delete v.rest),{command:v,remainder:""}}function I(e,d){var u=[],v,b,y,N=e.split(/\r?\n/),j=!0,P={},C,T,ne="",Oe=d&&d.includeComments;for(v=0;v<N.length;v++){y=v+1;var de=N[v];if(b&&b.match(t)&&l(de)?b=ne+"\\":ne?b=ne+de:b=de,j&&(T=b.match(m),T)){if(T[1]!="`"&&T[1]!="\\")throw new Error('invalid ESCAPE "'+T[1]+'". Must be ` or \\');if(P.lineContinuationRegex)throw new Error("only one escape parser directive can be used");P.lineContinuationRegex=RegExp(i(T[1])+"[ 	]*$");continue}j=!1,C=x(b,y,P),C.command&&(C.command.name!=="COMMENT"||Oe)&&u.push(C.command),ne=C.remainder}return u}return fe={parse:I},fe}var me,ke;function at(){if(ke)return me;ke=1;var r=tt();return me={parse:r.parse},me}var rt=at();const st=et(rt);function Ne(r){if(!r.trim())return{valid:!0,errors:[],warnings:[],totalLines:0};try{const t=st.parse(r,{includeComments:!1}),a=[],m=[];return t.forEach(f=>{const{name:i,args:s,line:c}=f;i==="FROM"&&(!s||s.length===0)&&a.push({line:c,type:"error",message:"FROM requires image name"}),i==="RUN"&&(!s||s.length===0)&&a.push({line:c,type:"error",message:"RUN requires command"}),i==="COPY"&&(!s||s.length<2)&&a.push({line:c,type:"error",message:"COPY requires source and destination"}),i==="MAINTAINER"&&m.push({line:c,type:"warning",message:"MAINTAINER is deprecated, use LABEL"})}),{valid:a.length===0,errors:a,warnings:m,totalLines:r.split(`
`).length}}catch(t){return{valid:!1,errors:[{line:1,type:"error",message:`Parse error: ${t.message}`}],warnings:[]}}}const W=Ee(""),V=Ee({valid:!0,errors:[],warnings:[],totalLines:0});W.subscribe(r=>{if(r&&r.trim()){const t=Ne(r);V.set(t)}else V.set({valid:!0,errors:[],warnings:[],totalLines:0})});function nt(){const r=$content;r.trim()&&V.set(Ne(r))}/**
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
 */const ot={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var it=Fe("<svg><!><!></svg>");function se(r,t){const a=H(t,["children","$$slots","$$events","$$legacy"]),m=H(a,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);ie(t,!1);let f=J(t,"name",8,void 0),i=J(t,"color",8,"currentColor"),s=J(t,"size",8,24),c=J(t,"strokeWidth",8,2),_=J(t,"absoluteStrokeWidth",8,!1),p=J(t,"iconNode",24,()=>[]);const O=(...$)=>$.filter((E,M,D)=>!!E&&D.indexOf(E)===M).join(" ");ce();var k=it();xe(k,($,E)=>({...ot,...m,width:s(),height:s(),stroke:i(),"stroke-width":$,class:E}),[()=>(Q(_()),Q(c()),Q(s()),ge(()=>_()?Number(c())*24/Number(s()):c())),()=>(Q(f()),Q(a),ge(()=>O("lucide-icon","lucide",f()?`lucide-${f()}`:"",a.class)))]);var g=o(k);te(g,1,p,ae,($,E)=>{var M=je(()=>Ve(S(E),2));let D=()=>S(M)[0],l=()=>S(M)[1];var h=K(),x=z(h);Qe(x,D,!0,(I,e)=>{xe(I,()=>({...l()}))}),R($,h)});var A=w(g);X(A,t,"default",{}),n(k),R(r,k),le()}function lt(r,t){const a=H(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const m=[["path",{d:"M12 3v12"}],["path",{d:"m17 8-5-5-5 5"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}]];se(r,re({name:"upload"},()=>a,{get iconNode(){return m},children:(f,i)=>{var s=K(),c=z(s);X(c,t,"default",{}),R(f,s)},$$slots:{default:!0}}))}var ct=L("<div></div>"),dt=L(`<div class="d-flex flex-column h-100"><div class="mb-3"><label class="btn btn-outline-primary btn-sm"><!> Upload Dockerfile <input type="file" class="d-none" accept=".dockerfile,Dockerfile"/></label></div> <div class="flex-grow-1 d-flex border border-custom rounded overflow-hidden"><div class="editor-line-numbers"></div> <textarea class="form-control border-0 flex-grow-1 rounded-0 svelte-1ctqrjb" placeholder="Paste your Dockerfile here..." spellcheck="false" style="resize: none; font-family: 'Courier New', monospace; font-size: 14px; line-height: 1.5;"></textarea></div></div>`);function ut(r,t){ie(t,!1);const a=()=>oe(W,"$content",m),[m,f]=he();let i=$e();function s(){S(i)&&(ve(i,S(i).style.height="auto"),ve(i,S(i).style.height=S(i).scrollHeight+"px"))}function c(D){W.set(D.target.value)}function _(D){const l=D.target.files[0];if(l){const h=new FileReader;h.onload=x=>{W.set(x.target.result)},h.readAsText(l),D.target.value=""}}Ge(()=>{S(i)&&s()}),We(()=>(a(),S(i)),()=>{typeof a()=="string"&&S(i)&&S(i).value!==a()&&(ve(i,S(i).value=a()),s())}),qe(),ce();var p=dt();B("resize",Ye,s);var O=o(p),k=o(O),g=o(k);lt(g,{size:16,class:"me-1"});var A=w(g,2);n(k),n(O);var $=w(O,2),E=o($);te(E,5,()=>(a(),ge(()=>Array(Math.max(1,(a()||"").split(`
`).length)))),ae,(D,l,h)=>{var x=ct();x.textContent=h+1,R(D,x)}),n(E);var M=w(E,2);Ke(M,D=>G(i,D),()=>S(i)),n($),n(p),B("change",A,_),B("input",M,c),R(r,p),le(),f()}var vt=L('<h5 class="mb-0"><i class="bi bi-check-circle-fill me-2"></i> Valid Dockerfile</h5> <small class="text-muted"> </small>',1),ft=L('<h5 class="mb-0"><i class="bi bi-x-circle-fill me-2"></i> Invalid Dockerfile</h5> <small class="text-muted"> </small>',1),mt=L('<div class="alert alert-danger d-flex justify-content-between align-items-center mb-2 p-2"><span><strong> </strong> </span></div>'),pt=L('<h6 class="text-danger mb-2"><i class="bi bi-shield-fill-x me-2"></i> Errors</h6> <!>',1),gt=L('<div class="alert alert-warning d-flex justify-content-between align-items-center mb-2 p-2"><span><strong> </strong> </span></div>'),ht=L('<h6 class="text-warning mb-2 mt-3"><i class="bi bi-shield-fill-exclamation me-2"></i> Warnings</h6> <!>',1),bt=L('<div class="flex-grow-1 d-flex align-items-center justify-content-center text-muted mt-4"><div class="text-center"><i class="bi bi-rocket-takeoff-fill fs-1 mb-3 text-success"></i> <h5>All Systems Go!</h5> <p>Your Dockerfile looks perfect and is ready to build. 🚀</p></div></div>'),yt=L('<div class="h-100 d-flex flex-column"><div><!></div> <!> <!> <!></div>');function _t(r,t){ie(t,!1);const a=()=>oe(V,"$results",f),m=()=>oe(W,"$content",f),[f,i]=he();function s(l){return l?"alert-success":"alert-danger"}ce();var c=yt(),_=o(c),p=o(_);{var O=l=>{var h=vt(),x=w(z(h),2),I=o(x);n(x),q(()=>F(I,`${a().totalLines??""} lines • No issues found.`)),R(l,h)},k=l=>{var h=ft(),x=w(z(h),2),I=o(x);n(x),q(()=>F(I,`${a().errors.length??""} error(s) • ${a().warnings.length??""} warning(s)`)),R(l,h)};ee(p,l=>{a().valid?l(O):l(k,!1)})}n(_);var g=w(_,2);{var A=l=>{var h=pt(),x=w(z(h),2);te(x,1,()=>a().errors,ae,(I,e)=>{var d=mt(),u=o(d),v=o(u),b=o(v);n(v);var y=w(v);n(u),n(d),q(()=>{F(b,`Line ${S(e).line??""}:`),F(y,` ${S(e).message??""}`)}),R(I,d)}),R(l,h)};ee(g,l=>{a().errors.length>0&&l(A)})}var $=w(g,2);{var E=l=>{var h=ht(),x=w(z(h),2);te(x,1,()=>a().warnings,ae,(I,e)=>{var d=gt(),u=o(d),v=o(u),b=o(v);n(v);var y=w(v);n(u),n(d),q(()=>{F(b,`Line ${S(e).line??""}:`),F(y,` ${S(e).message??""}`)}),R(I,d)}),R(l,h)};ee($,l=>{a().warnings.length>0&&l(E)})}var M=w($,2);{var D=l=>{var h=bt();R(l,h)};ee(M,l=>{m()&&a().valid&&l(D)})}n(c),q(l=>Xe(_,1,`alert ${l??""} mb-4`),[()=>s(a().valid)]),R(r,c),le(),i()}function xt(r,t){const a=H(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const m=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];se(r,re({name:"refresh-cw"},()=>a,{get iconNode(){return m},children:(f,i)=>{var s=K(),c=z(s);X(c,t,"default",{}),R(f,s)},$$slots:{default:!0}}))}function wt(r,t){const a=H(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const m=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];se(r,re({name:"download"},()=>a,{get iconNode(){return m},children:(f,i)=>{var s=K(),c=z(s);X(c,t,"default",{}),R(f,s)},$$slots:{default:!0}}))}function kt(r,t){const a=H(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const m=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"}]];se(r,re({name:"play"},()=>a,{get iconNode(){return m},children:(f,i)=>{var s=K(),c=z(s);X(c,t,"default",{}),R(f,s)},$$slots:{default:!0}}))}var $t=L('<nav class="p-3 border-bottom border-custom"><div class="d-flex justify-content-between align-items-center"><div class="btn-group" role="group"><button class="btn btn-outline-danger btn-sm" title="Clear Editor"><!> Clear</button> <button class="btn btn-outline-success btn-sm" title="Validate Now"><!> Validate</button></div> <div class="btn-group" role="group"><button class="btn btn-outline-secondary btn-sm dropdown-toggle" data-bs-toggle="dropdown"><!> Export Report</button> <ul class="dropdown-menu dropdown-menu-end"><li><button class="dropdown-item">As JSON</button></li> <li><button class="dropdown-item">As TXT</button></li></ul></div></div></nav>');function Et(r,t){ie(t,!1);const a=()=>oe(W,"$content",m),[m,f]=he();function i(){W.set("")}function s(e){const d=Z(W);if(!d||!d.trim())return;const u={timestamp:new Date().toISOString(),valid:Z(V).valid,errors:Z(V).errors,warnings:Z(V).warnings,totalLines:Z(V).totalLines,dockerfile:d};let v,b=`AxelBase-Report.${e}`;if(e==="json")v=new Blob([JSON.stringify(u,null,2)],{type:"application/json"});else if(e==="txt"){const j=`AxelBase Dockerfile Validation Report
==================================================
Status: ${u.valid?"VALID":"INVALID"}
Errors: ${u.errors.length}
Warnings: ${u.warnings.length}
Lines: ${u.totalLines}

--- ERRORS ---
${u.errors.map(P=>`Line ${P.line}: ${P.message}`).join(`
`)||"None"}

--- WARNINGS ---
${u.warnings.map(P=>`Line ${P.line}: ${P.message}`).join(`
`)||"None"}
`;v=new Blob([j],{type:"text/plain"})}const y=URL.createObjectURL(v),N=document.createElement("a");N.href=y,N.download=b,document.body.appendChild(N),N.click(),document.body.removeChild(N),URL.revokeObjectURL(y)}ce();var c=$t(),_=o(c),p=o(_),O=o(p),k=o(O);xt(k,{size:16,class:"me-1"}),Y(),n(O);var g=w(O,2),A=o(g);kt(A,{size:16,class:"me-1"}),Y(),n(g),n(p);var $=w(p,2),E=o($),M=o(E);wt(M,{size:16,class:"me-1"}),Y(),n(E);var D=w(E,2),l=o(D),h=o(l);n(l);var x=w(l,2),I=o(x);n(x),n(D),n($),n(_),n(c),q(e=>E.disabled=e,[()=>!a()||!a().trim()]),B("click",O,i),B("click",g,function(...e){nt?.apply(this,e)}),B("click",h,()=>s("json")),B("click",I,()=>s("txt")),R(r,c),le(),f()}function Nt(r,t){const a=H(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const m=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];se(r,re({name:"circle-question-mark"},()=>a,{get iconNode(){return m},children:(f,i)=>{var s=K(),c=z(s);X(c,t,"default",{}),R(f,s)},$$slots:{default:!0}}))}var Ot=L("<tr><td><code> </code></td><td> </td><td><code> </code></td></tr>"),Rt=L('<dialog class="modal fade show d-block" style="background: rgba(0,0,0,0.7); border: none;" open><div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">Dockerfile Instructions Reference</h5> <button type="button" class="btn-close" aria-label="Close"></button></div> <div class="modal-body"><div class="table-responsive"><table class="table table-striped table-hover"><thead><tr><th>Instruction</th><th>Description</th><th>Example</th></tr></thead><tbody></tbody></table></div></div> <div class="modal-footer"><small class="text-muted">Source: <a href="https://docs.docker.com/reference/dockerfile/" target="_blank">Official Docker Docs</a></small></div></div></div></dialog>'),At=L('<button class="btn btn-outline-info btn-sm" title="Dockerfile Reference" aria-label="Open Dockerfile Help"><!> Help</button> <!>',1);function Dt(r){let t=$e(!1);const a=[{name:"FROM",desc:"Set base image",example:"FROM node:18"},{name:"RUN",desc:"Execute command",example:"RUN npm install"},{name:"COPY",desc:"Copy files",example:"COPY . /app"},{name:"WORKDIR",desc:"Set working directory",example:"WORKDIR /app"},{name:"EXPOSE",desc:"Expose port",example:"EXPOSE 3000"},{name:"CMD",desc:"Default command",example:'CMD ["npm", "start"]'},{name:"LABEL",desc:"Metadata",example:'LABEL version="1.0"'},{name:"ENV",desc:"Environment variables",example:"ENV NODE_ENV=production"},{name:"ADD",desc:"Copy + extract",example:"ADD archive.tar.gz /app"},{name:"ENTRYPOINT",desc:"Default executable",example:'ENTRYPOINT ["node"]'},{name:"VOLUME",desc:"Create volume",example:"VOLUME /data"},{name:"USER",desc:"Set user",example:"USER node"},{name:"ARG",desc:"Build argument",example:"ARG VERSION=1.0"}];var m=At(),f=z(m),i=o(f);Nt(i,{size:16}),Y(),n(f);var s=w(f,2);{var c=_=>{var p=Rt(),O=o(p),k=o(O),g=o(k),A=w(o(g),2);n(g);var $=w(g,2),E=o($),M=o(E),D=w(o(M));te(D,5,()=>a,ae,(l,h)=>{var x=Ot(),I=o(x),e=o(I),d=o(e,!0);n(e),n(I);var u=w(I),v=o(u,!0);n(u);var b=w(u),y=o(b),N=o(y,!0);n(y),n(b),n(x),q(()=>{F(d,S(h).name),F(v,S(h).desc),F(N,S(h).example)}),R(l,x)}),n(D),n(M),n(E),n($),Y(2),n(k),n(O),n(p),B("click",A,()=>G(t,!1)),B("keydown",A,l=>{(l.key==="Enter"||l.key===" ")&&G(t,!1)}),B("close",p,()=>G(t,!1)),B("keydown",p,l=>{l.key==="Escape"&&G(t,!1)}),R(_,p)};ee(s,_=>{S(t)&&_(c)})}B("click",f,()=>G(t,!0)),R(r,m)}var Ct=L('<meta name="robots" content="index, follow"/> <meta name="description" content="AxelBase is a real-time Dockerfile syntax validator. Learn about its features, how to use it, and get answers to FAQs."/> <meta name="keywords" content="Dockerfile, syntax validator, AxelBase, real-time validation, Docker, development tools"/> <meta name="author" content="AxelBase Team"/> <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE"/>',1),St=L('<div class="container-fluid vh-100 p-0"><div class="row h-100 g-0"><div class="col-md-6 h-100 d-flex flex-column bg-dark-surface border-end border-custom"><!> <div class="flex-grow-1 p-3"><!></div></div> <div class="col-md-6 h-100 p-3 overflow-auto"><!> <div class="mt-3 d-flex justify-content-end"><!></div></div></div></div> <div class="container py-5"><section id="about" class="py-5 text-center"><h2 class="display-5">About AxelBase</h2> <p class="lead text-secondary-text">Welcome to AxelBase, a cutting-edge tool designed to validate Dockerfile syntax with precision and ease. Our mission is to revolutionize your development workflow by delivering instant, accurate feedback on your Docker configurations, saving you time and reducing errors. Born from the need to address common pitfalls in Docker build processes, AxelBase leverages advanced client-side technology to empower developers worldwide. Whether you\'re a solo coder or part of a large team, our tool ensures your Dockerfiles are robust and error-free before they reach the build stage.</p> <p class="text-secondary-text">Founded with a passion for open-source development, AxelBase is built by a team of experienced developers who understand the frustrations of debugging failed builds. We prioritize privacy by performing all validation locally in your browser, using JavaScript to analyze your code without ever sending it to a server. This approach not only enhances security but also supports offline use, making it ideal for remote work environments. Our commitment to user experience is reflected in the intuitive interface and real-time feedback system, which highlights syntax errors and best practices in an accessible format.</p> <p class="text-secondary-text">AxelBase is more than just a validator; it’s a community-driven project aimed at fostering collaboration and knowledge sharing. With features like exportable validation reports in TXT and JSON formats, you can document your work and share insights with your team. As we continue to evolve, we invite feedback to shape future updates, ensuring AxelBase remains a vital tool for the Docker ecosystem. Join us in building reliable, efficient Docker images and experience the difference today.</p></section> <hr class="border-custom my-4"/> <section id="how-to-use" class="py-5 text-center"><h2 class="display-5">How to Use</h2> <p class="lead text-secondary-text">Getting started with AxelBase is straightforward, designed to integrate seamlessly into your development process. To begin, open the tool in your browser and locate the editor panel on the left side of the interface. Here, you can paste the content of your Dockerfile directly or upload a `.dockerfile` file using the provided toolbar options. Once your code is loaded, AxelBase’s real-time validation engine springs into action, analyzing each line for syntax errors, best practice warnings, and structural issues, with results displayed instantly in the results panel on the right.</p> <p class="text-secondary-text">The editor supports common Dockerfile commands like `FROM`, `RUN`, `COPY`, and `EXPOSE`, flagging issues such as missing base images or invalid arguments with clear, color-coded feedback—green for valid, red for errors. For a more detailed understanding, click the “Help” button to access a modal with a reference guide to Dockerfile instructions. If you encounter errors, the results panel provides specific line numbers and suggestions for fixes, such as correcting `FROM invalid` to `FROM node:18`. You can also export your validation results as TXT or JSON files via the toolbar, ideal for documentation or team reviews.</p> <p class="text-secondary-text">For optimal use, work incrementally—add a few lines, validate, and adjust as needed. This approach minimizes the risk of cascading errors in large Dockerfiles. If you’re new to Docker, start with a simple file and explore the tool’s features, like multi-line command validation or best practice alerts for inefficient `RUN` layers. Advanced users can leverage the export feature to integrate with CI/CD pipelines or share reports with stakeholders. Regularly saving your work and testing builds in a staging environment complements AxelBase’s capabilities, ensuring a smooth development experience.</p></section> <hr class="border-custom my-4"/> <section id="faq" class="py-5"><h2 class="display-5 text-center mb-5">Frequently Asked Questions</h2> <div class="accordion" id="faqAccordion"><div class="accordion-item svelte-1uha8ag"><h2 class="accordion-header"><button class="accordion-button collapsed svelte-1uha8ag" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">What is this tool for?</button></h2> <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#faqAccordion"><div class="accordion-body">AxelBase is a real-time syntax validator designed to check Dockerfiles for errors and best practices before you run `docker build`. It helps catch issues like missing images, invalid commands, or inefficient layers, saving you time and preventing build failures. Whether you’re a beginner learning Docker or an expert optimizing large files, AxelBase provides instant feedback to streamline your workflow. The tool is particularly useful for ensuring consistency across team projects and avoiding costly mistakes in production environments.</div></div></div> <div class="accordion-item svelte-1uha8ag"><h2 class="accordion-header"><button class="accordion-button collapsed svelte-1uha8ag" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">Is my data saved on your servers?</button></h2> <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#faqAccordion"><div class="accordion-body">No, your data is not saved on our servers. AxelBase performs all validation client-side within your browser using JavaScript, meaning your Dockerfile content never leaves your device. This privacy-first design ensures your code remains secure, even on public networks. The tool uses local storage only for temporary session data, which is cleared when you close the browser unless you explicitly save exports. This approach supports offline use and aligns with our commitment to user trust and data sovereignty.</div></div></div> <div class="accordion-item svelte-1uha8ag"><h2 class="accordion-header"><button class="accordion-button collapsed svelte-1uha8ag" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">Can I use AxelBase offline?</button></h2> <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#faqAccordion"><div class="accordion-body">Yes, AxelBase is fully functional offline. Since all validation occurs client-side, you can use it without an internet connection, making it perfect for remote work or areas with unreliable networks. Simply load the tool in your browser, and it will work as expected. However, note that initial access to the web app requires an online connection to load the interface. Once loaded, you can continue using it offline, with all features like real-time validation and exports available, enhancing flexibility for developers on the go.</div></div></div></div></section></div>',1);function Wt(r){var t=St();He(g=>{var A=Ct();Je.title="AxelBase - Dockerfile Syntax Validator",Y(8),R(g,A)});var a=z(t),m=o(a),f=o(m),i=o(f);Et(i,{});var s=w(i,2),c=o(s);ut(c,{}),n(s),n(f);var _=w(f,2),p=o(_);_t(p,{});var O=w(p,2),k=o(O);Dt(k),n(O),n(_),n(m),n(a),Y(2),R(r,t)}export{Wt as component,Vt as universal};
