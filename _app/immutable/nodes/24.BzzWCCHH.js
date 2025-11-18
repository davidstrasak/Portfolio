import{a as O,t as R}from"../chunks/Cy94rl3v.js";import{at as V,R as z,i as F,p as G,au as J,av as N,f as Q,t as U,a as X,s as c,a8 as k,g as n,c as l,r as m,aw as P}from"../chunks/DRdpxGBI.js";import{s as B}from"../chunks/Dxv1kZdi.js";import{h as Y}from"../chunks/BaCF-LQC.js";import{a as Z,r as L,b as tt,c as M,s as et}from"../chunks/Db2Wpu7f.js";import{e as rt}from"../chunks/DjrZec-h.js";import{b as at}from"../chunks/C2xV41CC.js";import{i as st}from"../chunks/Cr191pCV.js";import{b as ot}from"../chunks/DhXiErae.js";import{o as A}from"../chunks/CyWDKHde.js";function pt(e,s,o,p=o){e.addEventListener(s,o);const r=e.__on_r;r?e.__on_r=()=>{r(),p()}:e.__on_r=p,Z()}function nt(e,s,o=s){var p=V();pt(e,"input",()=>{var r=C(e)?D(e.value):e.value;o(r),p&&r!==(r=s())&&(e.value=r??"")}),z(()=>{var r=s();if(F&&e.defaultValue!==e.value){o(e.value);return}C(e)&&r===D(e.value)||e.type==="date"&&!r&&!e.value||r!==e.value&&(e.value=r??"")})}function C(e){var s=e.type;return s==="number"||s==="range"}function D(e){return e===""?null:+e}var it=R(`<form method="post" action="?/save"><input type="hidden" name="html"> <input type="hidden" name="path"></form> <p>Currently editing: <span class="text-primary font-systemancer"> </span>, on the
	path <span class="text-primary font-systemancer"> </span> - <a class="text-accent underline">Here</a></p> <textarea class="w-full h-64 border rounded-md p-2"></textarea> <p><!></p> <hr> <p id="output"> </p>`,1);function wt(e,s){G(s,!1);let o=P();A(()=>{function a(f){f.ctrlKey&&f.key==="f"&&(f.preventDefault(),n(o).submit())}return window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}});let p={title:"AI made me appreciate using my brain",path:"not-using-ai"};A(()=>{const a=document.querySelector("textarea");a&&a.select()});let r=P(`# Hello there
So you've stumbled on this page huh?
## This is a page where I write my blogs.
### Created mainly because I'd rather write in Markdown than HTML
\`\`\`
you can write code
\`\`\`
Or other ==important things==.
And this is the output to ==paste into the page:==`),d=P("");function E(){let a=[],f=n(r).split(`
`),u=!1,w=0,$=0;return a.push(`<svelte:head>
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
{/if}`),f.forEach((t,lt)=>{let i="";t.startsWith("# ")?(i='<h1 class="text-4xl text-primary mb-6 font-systemancer">',t=t.replace("# ",i),t=t+"</h1>"):t.startsWith("## ")?($+=1,w=0,i=`<h2 class="text-primary text-3xl mt-4 font-systemancer"> ${$}. `,t=t.replace("## ",i),t=t+"</h2>"):t.startsWith("### ")?(w+=1,i=`<h3 class="text-primary text-2xl mt-3 font-systemancer"> ${$}.${w}. `,t=t.replace("### ",i),t=t+"</h3>"):t.startsWith("```")?(u=!u,u?t='<div class="mockup-code text-accent text-lg">':t="</div>"):u?(i='<pre data-prefix="$"><code>',t=i+t+"</code></pre>"):t===""?t="<br/>":t='<p class="">'+t+"</p>",t=t.replace(/==(.*?)==/g,'<span class="text-secondary">$1</span>'),t=t.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>"),t=t.replace(/\*(.*?)\*/g,"<em>$1</em>"),u&&(t=t.replace(/{/g,"&#123;"),t=t.replace(/}/g,"&#125;")),t=t.replace(/!\[\[.*?\]\]/,""),a.push(t)}),a.join("")}J(()=>n(r),()=>{n(r),k(d,`[script lang="ts"]import { base } from "$app/paths";import { page } from "$app/state";
	import BlogPost from "$lib/blog/BlogPost.svelte";
	import posts from "../../posts";

	let currentPost = posts.find(
		(post) => post.href.split("/").pop() === page.url.pathname.split("/").pop()
	);
		let title = "Systemancer - " + currentPost?.title;
[/script]`.replace(/\[/g,"<").replace(/\]/g,">")+E())}),N(),st();var H=it(),h=Q(H);at(h,a=>k(o,a),()=>n(o));var g=l(h);L(g);var S=c(g,2);L(S),m(h);var _=c(h,2),y=c(l(_)),W=l(y);m(y);var x=c(y,2),I=l(x);m(x);var K=c(x,2);m(_);var v=c(_,2);tt(v);var b=c(v,2),j=l(b);Y(j,()=>n(d)),m(b);var T=c(b,4),q=l(T);m(T),U(()=>{M(g,n(d)),M(S,p.path),B(W,p.title),B(I,p.path),et(K,"href",`${ot??""}/blog/${p.path}`),B(q,n(d))}),nt(v,()=>n(r),a=>k(r,a)),rt("change",v,E),O(e,H),X()}export{wt as component};
