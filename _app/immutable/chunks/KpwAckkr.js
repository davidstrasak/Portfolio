import{V as x,a5 as M,a6 as Y,G as b,a7 as j,a8 as c,U as d,a9 as T,q as g,z as L,aa as z,ab as G,w as K,ac as V,ad as Z,ae as $,af as H,ag as k,ah as J,ai as B,aj as Q,ak as W,al as X,T as p,a0 as F,am as ee,an as re,ao as ae,ap as te,F as ne}from"./B0M5b3Gb.js";function O(i,l=null,y){if(typeof i!="object"||i===null||x in i)return i;const o=G(i);if(o!==M&&o!==Y)return i;var f=new Map,_=K(i),S=b(0);_&&f.set("length",b(i.length));var P;return new Proxy(i,{defineProperty(n,e,r){(!("value"in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&j();var a=f.get(e);return a===void 0?(a=b(r.value),f.set(e,a)):c(a,O(r.value,P)),!0},deleteProperty(n,e){var r=f.get(e);if(r===void 0)e in n&&f.set(e,b(d));else{if(_&&typeof e=="string"){var a=f.get("length"),t=Number(e);Number.isInteger(t)&&t<a.v&&c(a,t)}c(r,d),U(S)}return!0},get(n,e,r){var v;if(e===x)return i;var a=f.get(e),t=e in n;if(a===void 0&&(!t||(v=T(n,e))!=null&&v.writable)&&(a=b(O(t?n[e]:d,P)),f.set(e,a)),a!==void 0){var u=g(a);return u===d?void 0:u}return Reflect.get(n,e,r)},getOwnPropertyDescriptor(n,e){var r=Reflect.getOwnPropertyDescriptor(n,e);if(r&&"value"in r){var a=f.get(e);a&&(r.value=g(a))}else if(r===void 0){var t=f.get(e),u=t==null?void 0:t.v;if(t!==void 0&&u!==d)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return r},has(n,e){var u;if(e===x)return!0;var r=f.get(e),a=r!==void 0&&r.v!==d||Reflect.has(n,e);if(r!==void 0||L!==null&&(!a||(u=T(n,e))!=null&&u.writable)){r===void 0&&(r=b(a?O(n[e],P):d),f.set(e,r));var t=g(r);if(t===d)return!1}return a},set(n,e,r,a){var R;var t=f.get(e),u=e in n;if(_&&e==="length")for(var v=r;v<t.v;v+=1){var w=f.get(v+"");w!==void 0?c(w,d):v in n&&(w=b(d),f.set(v+"",w))}t===void 0?(!u||(R=T(n,e))!=null&&R.writable)&&(t=b(void 0),c(t,O(r,P)),f.set(e,t)):(u=t.v!==d,c(t,O(r,P)));var I=Reflect.getOwnPropertyDescriptor(n,e);if(I!=null&&I.set&&I.set.call(a,r),!u){if(_&&typeof e=="string"){var h=f.get("length"),m=Number(e);Number.isInteger(m)&&m>=h.v&&c(h,m+1)}U(S)}return!0},ownKeys(n){g(S);var e=Reflect.ownKeys(n).filter(t=>{var u=f.get(t);return u===void 0||u.v!==d});for(var[r,a]of f)a.v!==d&&!(r in n)&&e.push(r);return e},setPrototypeOf(){z()}})}function U(i,l=1){c(i,i.v+l)}function C(i){for(var l=L,y=L;l!==null&&!(l.f&(k|J));)l=l.parent;try{return B(l),i()}finally{B(y)}}function ie(i,l,y,o){var q;var f=(y&Q)!==0,_=(y&W)!==0,S=(y&X)!==0,P=(y&te)!==0,n=i[l],e=(q=T(i,l))==null?void 0:q.set,r=o,a=!0,t=!1,u=()=>(t=!0,a&&(a=!1,P?r=p(o):r=o),r);n===void 0&&o!==void 0&&(e&&_&&V(),n=u(),e&&e(n));var v;if(_)v=()=>{var s=i[l];return s===void 0?u():(a=!0,t=!1,s)};else{var w=C(()=>(f?F:ee)(()=>i[l]));w.f|=Z,v=()=>{var s=g(w);return s!==void 0&&(r=void 0),s===void 0?r:s}}if(!(y&$))return v;if(e){var I=i.$$legacy;return function(s,E){return arguments.length>0?((!_||!E||I)&&e(E?v():s),s):v()}}var h=!1,m=!1,R=ne(n),D=C(()=>F(()=>{var s=v(),E=g(R),N=re;return h||s===void 0&&N.f&ae?(h=!1,m=!0,E):(m=!1,R.v=s)}));return f||(D.equals=H),function(s,E){var N=g(D);if(arguments.length>0){const A=E?g(D):_&&S?O(s):s;return D.equals(A)||(h=!0,c(R,A),t&&r!==void 0&&(r=A),g(D)),s}return N}}export{O as a,ie as p};
