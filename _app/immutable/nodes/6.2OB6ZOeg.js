import{s as w,n as g}from"../chunks/scheduler.Cewbzyqj.js";import{S as A,i as C,e as u,s as B,c as m,m as M,f as D,a as v,d as o,n as x,g as y,h,o as S,t as T,b as k}from"../chunks/index.CzmlST-r.js";import{e as q}from"../chunks/each.D6YF6ztN.js";import{p as z}from"../chunks/posts.DJARso3d.js";function O(d,e,l){const n=d.slice();return n[0]=e[l],n}function P(d){let e,l,n=d[0].date+"",s,c,p,a,t,i=d[0].title+"",r,f;return{c(){e=u("tr"),l=u("td"),s=T(n),c=T(" ->"),p=B(),a=u("td"),t=u("a"),r=T(i),f=B(),this.h()},l(b){e=m(b,"TR",{});var _=v(e);l=m(_,"TD",{class:!0});var E=v(l);s=k(E,n),c=k(E," ->"),E.forEach(o),p=D(_),a=m(_,"TD",{});var H=v(a);t=m(H,"A",{class:!0,href:!0});var L=v(t);r=k(L,i),L.forEach(o),H.forEach(o),f=D(_),_.forEach(o),this.h()},h(){x(l,"class","w-1/4 text-center"),x(t,"class","underline"),x(t,"href",d[0].href)},m(b,_){y(b,e,_),h(e,l),h(l,s),h(l,c),h(e,p),h(e,a),h(a,t),h(t,r),h(e,f)},p:g,d(b){b&&o(e)}}}function R(d){let e,l='<p class="block text-secondary">Blog post navigation</p>',n,s,c,p=q(z),a=[];for(let t=0;t<p.length;t+=1)a[t]=P(O(d,p,t));return{c(){e=u("h1"),e.innerHTML=l,n=B(),s=u("table"),c=u("tbody");for(let t=0;t<a.length;t+=1)a[t].c();this.h()},l(t){e=m(t,"H1",{class:!0,"data-svelte-h":!0}),M(e)!=="svelte-rznah8"&&(e.innerHTML=l),n=D(t),s=m(t,"TABLE",{class:!0});var i=v(s);c=m(i,"TBODY",{});var r=v(c);for(let f=0;f<a.length;f+=1)a[f].l(r);r.forEach(o),i.forEach(o),this.h()},h(){x(e,"class","text-5xl mb-10 text-center"),x(s,"class","w-full")},m(t,i){y(t,e,i),y(t,n,i),y(t,s,i),h(s,c);for(let r=0;r<a.length;r+=1)a[r]&&a[r].m(c,null)},p:g,i:g,o:g,d(t){t&&(o(e),o(n),o(s)),S(a,t)}}}class I extends A{constructor(e){super(),C(this,e,null,R,w,{})}}export{I as component};