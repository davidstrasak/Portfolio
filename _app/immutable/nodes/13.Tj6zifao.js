import{s as E,n as T,r as $}from"../chunks/CT9ImElk.js";import{S as A,i as M,e as _,s as y,H as W,t as k,c as g,a as v,d as p,f as b,p as P,b as S,m as j,g as u,q as w,h as q,r as H,j as C}from"../chunks/B0g-U_40.js";import"../chunks/DmFilpuq.js";function I(o){let a,i,r,c,m,f,n,l,h,d,t;return{c(){a=_("textarea"),i=y(),r=_("p"),c=new W(!1),m=y(),f=_("hr"),n=y(),l=_("p"),h=k(o[1]),this.h()},l(e){a=g(e,"TEXTAREA",{class:!0}),v(a).forEach(p),i=b(e),r=g(e,"P",{});var s=v(r);c=P(s,!1),s.forEach(p),m=b(e),f=g(e,"HR",{}),n=b(e),l=g(e,"P",{});var x=v(l);h=S(x,o[1]),x.forEach(p),this.h()},h(){j(a,"class","w-full h-64 border rounded-md p-2"),c.a=null},m(e,s){u(e,a,s),w(a,o[0]),u(e,i,s),u(e,r,s),c.m(o[1],r),u(e,m,s),u(e,f,s),u(e,n,s),u(e,l,s),q(l,h),d||(t=[H(a,"input",o[3]),H(a,"change",o[2])],d=!0)},p(e,[s]){s&1&&w(a,e[0]),s&2&&c.p(e[1]),s&2&&C(h,e[1])},i:T,o:T,d(e){e&&(p(a),p(i),p(r),p(m),p(f),p(n),p(l)),d=!1,$(t)}}}function L(o,a,i){let r=`# Hello there
So you've stumbled on this page huh?
## This is a page where I write my blogs.
### Created mainly because I'd rather write in Markdown than HTML
\`\`\`
you can write code
\`\`\`
Or other ==important things==.
And this is the output to ==paste into the page:==`,c="";function m(){let n=[],l=r.split(`
`),h=!1;return l.forEach((t,e)=>{let s="";t.startsWith("# ")?(s='<h1 class="text-4xl text-secondary mb-6 font-bold">',t=t.replace("# ",s),t=t+"</h1>"):t.startsWith("## ")?(s='<h2 class="text-secondary text-3xl mt-4">',t=t.replace("## ",s),t=t+"</h2>"):t.startsWith("### ")?(s='<h3 class="text-secondary text-2xl mt-3">',t=t.replace("### ",s),t=t+"</h3>"):t.startsWith("```")?(h=!h,h?t='<div class="mockup-code text-info text-lg">':t="</div>"):h?(s='<pre data-prefix="$"><code>',t=s+t+"</code></pre>"):t===""?t="<br/>":t='<p class="">'+t+"</p>",e===l.length-1&&(t='<div class="mb-40">'+t+"</div>"),t=t.replace(/==(.*?)==/g,'<span class="text-secondary">$1</span>'),t=t.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>"),t=t.replace(/\*(.*?)\*/g,"<em>$1</em>"),n.push(t)}),n.join("")}function f(){r=this.value,i(0,r)}return o.$$.update=()=>{o.$$.dirty&1&&i(1,c=m())},[r,c,m,f]}class O extends A{constructor(a){super(),M(this,a,L,I,E,{})}}export{O as component};
