import{a as q,t as z}from"../chunks/DJ3QXRNf.js";import{ax as O,S as V,h as F,p as G,ay as J,az as N,f as Q,t as R,a as U,s as m,a8 as $,k as p,c as i,r as l,aA as k}from"../chunks/I70lqDi9.js";import{s as P}from"../chunks/DVVjI0lT.js";import{h as X}from"../chunks/DCH3hhuq.js";import{a as Y,r as L,b as Z,c as E}from"../chunks/-r09BiCL.js";import{e as tt}from"../chunks/DCIqmAAE.js";import{b as et}from"../chunks/5ovFERa4.js";import{i as at}from"../chunks/Ds1X5ZzX.js";import"../chunks/B1agalQA.js";import{o as S}from"../chunks/CUXzo_Sr.js";function rt(e,s,o,n=o){e.addEventListener(s,o);const a=e.__on_r;a?e.__on_r=()=>{a(),n()}:e.__on_r=n,Y()}function st(e,s,o=s){var n=O();rt(e,"input",()=>{var a=W(e)?A(e.value):e.value;o(a),n&&a!==(a=s())&&(e.value=a??"")}),V(()=>{var a=s();if(F&&e.defaultValue!==e.value){o(e.value);return}W(e)&&a===A(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function W(e){var s=e.type;return s==="number"||s==="range"}function A(e){return e===""?null:+e}var ot=z(`<form method="post" action="?/save"><input type="hidden" name="html"> <input type="hidden" name="path"></form> <p>Currently editing: <span class="text-primary font-systemancer"> </span>, on the
	path <span class="text-primary font-systemancer"> </span></p> <textarea class="w-full h-64 border rounded-md p-2"></textarea> <p><!></p> <hr> <p id="output"> </p>`,1);function yt(e,s){G(s,!1);let o=k();S(()=>{function r(f){f.ctrlKey&&f.key==="f"&&(f.preventDefault(),p(o).submit())}return window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}});let n={title:"How can I launch any program on my PC in seconds",path:"launch-any-program-in-seconds"};S(()=>{const r=document.querySelector("textarea");r&&r.select()});let a=k(`# Hello there
So you've stumbled on this page huh?
## This is a page where I write my blogs.
### Created mainly because I'd rather write in Markdown than HTML
\`\`\`
you can write code
\`\`\`
Or other ==important things==.
And this is the output to ==paste into the page:==`),d=k("");function M(){let r=[],f=p(a).split(`
`),u=!1,b=0,w=0;return r.push(`{#if currentPost}
	<BlogPost post={currentPost} insidePost={true} />
{/if}`),f.forEach((t,nt)=>{let c="";t.startsWith("# ")?(c='<h1 class="text-4xl text-primary mb-6 font-systemancer">',t=t.replace("# ",c),t=t+"</h1>"):t.startsWith("## ")?(w+=1,b=0,c=`<h2 class="text-primary text-3xl mt-4 font-systemancer"> ${w}. `,t=t.replace("## ",c),t=t+"</h2>"):t.startsWith("### ")?(b+=1,c=`<h3 class="text-primary text-2xl mt-3 font-systemancer"> ${w}.${b}. `,t=t.replace("### ",c),t=t+"</h3>"):t.startsWith("```")?(u=!u,u?t='<div class="mockup-code text-accent text-lg">':t="</div>"):u?(c='<pre data-prefix="$"><code>',t=c+t+"</code></pre>"):t===""?t="<br/>":t='<p class="">'+t+"</p>",t=t.replace(/==(.*?)==/g,'<span class="text-secondary">$1</span>'),t=t.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>"),t=t.replace(/\*(.*?)\*/g,"<em>$1</em>"),u&&(t=t.replace(/{/g,"&#123;"),t=t.replace(/}/g,"&#125;")),t=t.replace(/!\[\[.*?\]\]/,""),r.push(t)}),r.join("")}J(()=>p(a),()=>{p(a),$(d,`[script lang="ts"]import { base } from "$app/paths";import { page } from "$app/state";
	import BlogPost from "$lib/blog/BlogPost.svelte";
	import posts from "../../posts";
	import { onMount } from "svelte";

	onMount(() => {
		console.log(page.params.page);
	});

	let currentPost = posts.find(
		(post) => post.href.split("/").pop() === page.url.pathname.split("/").pop()
	);[/script]`.replace(/\[/g,"<").replace(/\]/g,">")+M())}),N(),at();var H=ot(),h=Q(H);et(h,r=>$(o,r),()=>p(o));var _=i(h);L(_);var T=m(_,2);L(T),l(h);var g=m(h,2),y=m(i(g)),D=i(y);l(y);var B=m(y,2),I=i(B);l(B),l(g);var v=m(g,2);Z(v);var x=m(v,2),K=i(x);X(K,()=>p(d)),l(x);var C=m(x,4),j=i(C);l(C),R(()=>{E(_,p(d)),E(T,n.path),P(D,n.title),P(I,n.path),P(j,p(d))}),st(v,()=>p(a),r=>$(a,r)),tt("change",v,M),q(e,H),U()}export{yt as component};
