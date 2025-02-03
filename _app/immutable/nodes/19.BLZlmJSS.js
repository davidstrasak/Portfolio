import{a as q,t as O}from"../chunks/Cy94rl3v.js";import{at as R,R as V,i as z,p as F,au as G,av as J,f as N,t as Q,a as U,s as i,a8 as P,g as p,c as l,r as m,aw as $}from"../chunks/DRdpxGBI.js";import{s as k}from"../chunks/Dxv1kZdi.js";import{h as X}from"../chunks/BaCF-LQC.js";import{a as Y,r as C,b as Z,c as L}from"../chunks/Db2Wpu7f.js";import{e as tt}from"../chunks/DjrZec-h.js";import{b as et}from"../chunks/C2xV41CC.js";import{i as rt}from"../chunks/Cr191pCV.js";import"../chunks/BkSqY2uz.js";import{o as M}from"../chunks/CyWDKHde.js";function at(e,s,o,n=o){e.addEventListener(s,o);const r=e.__on_r;r?e.__on_r=()=>{r(),n()}:e.__on_r=n,Y()}function st(e,s,o=s){var n=R();at(e,"input",()=>{var r=D(e)?W(e.value):e.value;o(r),n&&r!==(r=s())&&(e.value=r??"")}),V(()=>{var r=s();if(z&&e.defaultValue!==e.value){o(e.value);return}D(e)&&r===W(e.value)||e.type==="date"&&!r&&!e.value||r!==e.value&&(e.value=r??"")})}function D(e){var s=e.type;return s==="number"||s==="range"}function W(e){return e===""?null:+e}var ot=O(`<form method="post" action="?/save"><input type="hidden" name="html"> <input type="hidden" name="path"></form> <p>Currently editing: <span class="text-primary font-systemancer"> </span>, on the
	path <span class="text-primary font-systemancer"> </span></p> <textarea class="w-full h-64 border rounded-md p-2"></textarea> <p><!></p> <hr> <p id="output"> </p>`,1);function yt(e,s){F(s,!1);let o=$();M(()=>{function a(f){f.ctrlKey&&f.key==="f"&&(f.preventDefault(),p(o).submit())}return window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}});let n={title:"How can I launch any program on my PC in seconds",path:"launch-any-program-in-seconds"};M(()=>{const a=document.querySelector("textarea");a&&a.select()});let r=$(`# Hello there
So you've stumbled on this page huh?
## This is a page where I write my blogs.
### Created mainly because I'd rather write in Markdown than HTML
\`\`\`
you can write code
\`\`\`
Or other ==important things==.
And this is the output to ==paste into the page:==`),d=$("");function B(){let a=[],f=p(r).split(`
`),u=!1,b=0,w=0;return a.push(`<svelte:head>
	<meta property="og:title" content={title} />
	<meta name="description" property="og:description" content={currentPost?.cleanDescription} />
	<meta
		name="keywords"
		property="og:keywords"
		content="Systemancer, Blog, Articles, Systems Engineering, Engineering"
	/>
	<meta property="og:url" content={page.url.href} />
</svelte:head>
		{#if currentPost}
	<BlogPost post={currentPost} insidePost={true} />
{/if}`),f.forEach((t,nt)=>{let c="";t.startsWith("# ")?(c='<h1 class="text-4xl text-primary mb-6 font-systemancer">',t=t.replace("# ",c),t=t+"</h1>"):t.startsWith("## ")?(w+=1,b=0,c=`<h2 class="text-primary text-3xl mt-4 font-systemancer"> ${w}. `,t=t.replace("## ",c),t=t+"</h2>"):t.startsWith("### ")?(b+=1,c=`<h3 class="text-primary text-2xl mt-3 font-systemancer"> ${w}.${b}. `,t=t.replace("### ",c),t=t+"</h3>"):t.startsWith("```")?(u=!u,u?t='<div class="mockup-code text-accent text-lg">':t="</div>"):u?(c='<pre data-prefix="$"><code>',t=c+t+"</code></pre>"):t===""?t="<br/>":t='<p class="">'+t+"</p>",t=t.replace(/==(.*?)==/g,'<span class="text-secondary">$1</span>'),t=t.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>"),t=t.replace(/\*(.*?)\*/g,"<em>$1</em>"),u&&(t=t.replace(/{/g,"&#123;"),t=t.replace(/}/g,"&#125;")),t=t.replace(/!\[\[.*?\]\]/,""),a.push(t)}),a.join("")}G(()=>p(r),()=>{p(r),P(d,`[script lang="ts"]import { base } from "$app/paths";import { page } from "$app/state";
	import BlogPost from "$lib/blog/BlogPost.svelte";
	import posts from "../../posts";

	let currentPost = posts.find(
		(post) => post.href.split("/").pop() === page.url.pathname.split("/").pop()
	);
		let title = "Systemancer - " + currentPost?.title;
[/script]`.replace(/\[/g,"<").replace(/\]/g,">")+B())}),J(),rt();var E=ot(),h=N(E);et(h,a=>P(o,a),()=>p(o));var g=l(h);C(g);var H=i(g,2);C(H),m(h);var _=i(h,2),y=i(l(_)),A=l(y);m(y);var S=i(y,2),I=l(S);m(S),m(_);var v=i(_,2);Z(v);var x=i(v,2),K=l(x);X(K,()=>p(d)),m(x);var T=i(x,4),j=l(T);m(T),Q(()=>{L(g,p(d)),L(H,n.path),k(A,n.title),k(I,n.path),k(j,p(d))}),st(v,()=>p(r),a=>P(r,a)),tt("change",v,B),q(e,E),U()}export{yt as component};
