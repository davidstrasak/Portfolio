import{s as S,n as E,r as A,o as $}from"../chunks/CT9ImElk.js";import{S as C,i as M,e as _,s as w,H as R,t as L,c as x,a as v,d as i,f as b,p as W,b as q,m as k,g as f,q as H,h as D,r as T,j as I}from"../chunks/B0g-U_40.js";import"../chunks/cD03JWUm.js";function P(n){let s,d,p,u,h,g,r,a,o,l,c;return{c(){s=_("textarea"),d=w(),p=_("p"),u=new R(!1),h=w(),g=_("hr"),r=w(),a=_("p"),o=L(n[1]),this.h()},l(e){s=x(e,"TEXTAREA",{class:!0}),v(s).forEach(i),d=b(e),p=x(e,"P",{});var t=v(p);u=W(t,!1),t.forEach(i),h=b(e),g=x(e,"HR",{}),r=b(e),a=x(e,"P",{id:!0});var y=v(a);o=q(y,n[1]),y.forEach(i),this.h()},h(){k(s,"class","w-full h-64 border rounded-md p-2"),u.a=null,k(a,"id","output")},m(e,t){f(e,s,t),H(s,n[0]),f(e,d,t),f(e,p,t),u.m(n[1],p),f(e,h,t),f(e,g,t),f(e,r,t),f(e,a,t),D(a,o),l||(c=[T(s,"input",n[3]),T(s,"change",n[2])],l=!0)},p(e,[t]){t&1&&H(s,e[0]),t&2&&u.p(e[1]),t&2&&I(o,e[1])},i:E,o:E,d(e){e&&(i(s),i(d),i(p),i(h),i(g),i(r),i(a)),l=!1,A(c)}}}function j(n,s,d){$(()=>{function r(a){if(a.ctrlKey&&a.key==="f"){a.preventDefault();const o=document.getElementById("output");if(o){const l=document.createRange(),c=window.getSelection();l.selectNodeContents(o),c!==null&&(c.removeAllRanges(),c.addRange(l))}}}return window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}}),$(()=>{const r=document.querySelector("textarea");r&&r.select()});let p=`# Hello there
So you've stumbled on this page huh?
## This is a page where I write my blogs.
### Created mainly because I'd rather write in Markdown than HTML
\`\`\`
you can write code
\`\`\`
Or other ==important things==.
And this is the output to ==paste into the page:==`,u="";function h(){let r=[],a=p.split(`
`),o=!1,l=0,c=0;return a.forEach((t,y)=>{let m="";t.startsWith("# ")?(m='<h1 class="text-4xl text-primary mb-6 font-cyberpunk">',t=t.replace("# ",m),t=t+"</h1>"):t.startsWith("## ")?(c+=1,l=0,m=`<h2 class="text-primary text-3xl mt-4 font-cyberpunk"> ${c}. `,t=t.replace("## ",m),t=t+"</h2>"):t.startsWith("### ")?(l+=1,m=`<h3 class="text-primary text-2xl mt-3 font-cyberpunk"> ${c}.${l}. `,t=t.replace("### ",m),t=t+"</h3>"):t.startsWith("```")?(o=!o,o?t='<div class="mockup-code text-accent text-lg">':t="</div>"):o?(m='<pre data-prefix="$"><code>',t=m+t+"</code></pre>"):t===""?t="<br/>":t='<p class="">'+t+"</p>",y===a.length-1&&(t='<div class="mb-40">'+t+"</div>"),t=t.replace(/==(.*?)==/g,'<span class="text-secondary">$1</span>'),t=t.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>"),t=t.replace(/\*(.*?)\*/g,"<em>$1</em>"),o&&(t=t.replace(/{/g,"&#123;"),t=t.replace(/}/g,"&#125;")),!t.match(/!\[\[.*?\]\]/)&&r.push(t)}),r.join("")}function g(){p=this.value,d(0,p)}return n.$$.update=()=>{n.$$.dirty&1&&d(1,u='[script lang="ts"]import { base } from "$app/paths";[/script]'.replace(/\[/g,"<").replace(/\]/g,">")+h())},[p,u,h,g]}class X extends C{constructor(s){super(),M(this,s,j,P,S,{})}}export{X as component};
