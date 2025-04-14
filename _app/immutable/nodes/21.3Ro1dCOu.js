import{a as q,t as O}from"../chunks/Cy94rl3v.js";import{at as R,R as V,i as Y,p as z,au as F,av as G,f as J,t as N,a as Q,s as c,a8 as $,g as p,c as l,r as m,aw as k}from"../chunks/DRdpxGBI.js";import{s as P}from"../chunks/Dxv1kZdi.js";import{h as U}from"../chunks/BaCF-LQC.js";import{a as X,r as S,b as Z,c as T}from"../chunks/Db2Wpu7f.js";import{e as tt}from"../chunks/DjrZec-h.js";import{b as et}from"../chunks/C2xV41CC.js";import{i as rt}from"../chunks/Cr191pCV.js";import"../chunks/CPVTA9en.js";import{o as A}from"../chunks/CyWDKHde.js";function at(e,s,o,n=o){e.addEventListener(s,o);const r=e.__on_r;r?e.__on_r=()=>{r(),n()}:e.__on_r=n,X()}function st(e,s,o=s){var n=R();at(e,"input",()=>{var r=C(e)?D(e.value):e.value;o(r),n&&r!==(r=s())&&(e.value=r??"")}),V(()=>{var r=s();if(Y&&e.defaultValue!==e.value){o(e.value);return}C(e)&&r===D(e.value)||e.type==="date"&&!r&&!e.value||r!==e.value&&(e.value=r??"")})}function C(e){var s=e.type;return s==="number"||s==="range"}function D(e){return e===""?null:+e}var ot=O(`<form method="post" action="?/save"><input type="hidden" name="html"> <input type="hidden" name="path"></form> <p>Currently editing: <span class="text-primary font-systemancer"> </span>, on the
	path <span class="text-primary font-systemancer"> </span></p> <textarea class="w-full h-64 border rounded-md p-2"></textarea> <p><!></p> <hr> <p id="output"> </p>`,1);function yt(e,s){z(s,!1);let o=k();A(()=>{function a(f){f.ctrlKey&&f.key==="f"&&(f.preventDefault(),p(o).submit())}return window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}});let n={title:"Less is More: How to Actually Improve at Your Hobbies",path:"less-hobbies-is-more"};A(()=>{const a=document.querySelector("textarea");a&&a.select()});let r=k(`# Hello there
So you've stumbled on this page huh?
## This is a page where I write my blogs.
### Created mainly because I'd rather write in Markdown than HTML
\`\`\`
you can write code
\`\`\`
Or other ==important things==.
And this is the output to ==paste into the page:==`),d=k("");function H(){let a=[],f=p(r).split(`
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
{/if}`),f.forEach((t,nt)=>{let i="";t.startsWith("# ")?(i='<h1 class="text-4xl text-primary mb-6 font-systemancer">',t=t.replace("# ",i),t=t+"</h1>"):t.startsWith("## ")?(w+=1,b=0,i=`<h2 class="text-primary text-3xl mt-4 font-systemancer"> ${w}. `,t=t.replace("## ",i),t=t+"</h2>"):t.startsWith("### ")?(b+=1,i=`<h3 class="text-primary text-2xl mt-3 font-systemancer"> ${w}.${b}. `,t=t.replace("### ",i),t=t+"</h3>"):t.startsWith("```")?(u=!u,u?t='<div class="mockup-code text-accent text-lg">':t="</div>"):u?(i='<pre data-prefix="$"><code>',t=i+t+"</code></pre>"):t===""?t="<br/>":t='<p class="">'+t+"</p>",t=t.replace(/==(.*?)==/g,'<span class="text-secondary">$1</span>'),t=t.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>"),t=t.replace(/\*(.*?)\*/g,"<em>$1</em>"),u&&(t=t.replace(/{/g,"&#123;"),t=t.replace(/}/g,"&#125;")),t=t.replace(/!\[\[.*?\]\]/,""),a.push(t)}),a.join("")}F(()=>p(r),()=>{p(r),$(d,`[script lang="ts"]import { base } from "$app/paths";import { page } from "$app/state";
	import BlogPost from "$lib/blog/BlogPost.svelte";
	import posts from "../../posts";

	let currentPost = posts.find(
		(post) => post.href.split("/").pop() === page.url.pathname.split("/").pop()
	);
		let title = "Systemancer - " + currentPost?.title;
[/script]`.replace(/\[/g,"<").replace(/\]/g,">")+H())}),G(),rt();var B=ot(),h=J(B);et(h,a=>$(o,a),()=>p(o));var g=l(h);S(g);var E=c(g,2);S(E),m(h);var _=c(h,2),y=c(l(_)),W=l(y);m(y);var L=c(y,2),I=l(L);m(L),m(_);var v=c(_,2);Z(v);var x=c(v,2),K=l(x);U(K,()=>p(d)),m(x);var M=c(x,4),j=l(M);m(M),N(()=>{T(g,p(d)),T(E,n.path),P(W,n.title),P(I,n.path),P(j,p(d))}),st(v,()=>p(r),a=>$(r,a)),tt("change",v,H),q(e,B),Q()}export{yt as component};
