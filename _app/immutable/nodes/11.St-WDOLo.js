import{s as Tt,n as ve}from"../chunks/BEOoAFrd.js";import{S as Mt,i as _t,e as n,c as a,n as r,a as Lt,d as t,m as o,g as l}from"../chunks/DihKSVfM.js";import{b as me}from"../chunks/DbQOVyAj.js";function Pt(Ht){let i,we="How I launch any program on my PC in seconds",p,Ce="Ever since about 6 months ago I was able to run almost any program on my PC by using a keyboard shortcut. That was the most efficient PC setup I've ever had and today I will share it with you.",c,be="The programming is as easy as it can be and it can be set up in less than 15 minutes, but it can make your usage of the PC more effective and easier! :D",he,u,ke="1. How to set this up:",d,He='If you want a custom set up like what I did, <span class="text-secondary"><strong>Autohotkey</strong></span> <strong>will</strong> answer all your thoughts and prayers. This smaller programming language is actually really easy to use, if you know how! ',h,Te="1.1. Here are the steps:",x,Me='- <span class="text-secondary"><a href="https://www.autohotkey.com/" class="underline text-accent">Download autohotkey v2 here</a></span>',y,_e="- Create a new file called <em>script.ahk</em> and open it up with notepad or any text editor.",f,Le="- Here is a sample script that runs excel when you press Win + E:",v,Pe='<pre data-prefix="$"><code>#Requires AutoHotkey v2.0</code></pre><pre data-prefix="$"><code></code></pre><pre data-prefix="$"><code>#e::</code></pre><pre data-prefix="$"><code>{</code></pre><pre data-prefix="$"><code>	Run &quot;excel&quot;</code></pre><pre data-prefix="$"><code>}</code></pre>',m,ge="1.2. What does it do?",w,$e="- This script should start up excel when you press the windows key and E simultaneously.",C,qe='- Double click the script to run it and test it by pressing <span class="text-secondary">Win + E</span>!',b,Ie='- If it works, <span class="text-secondary">you can copy the code from #e to the end bracket </span>(Do not copy the #requires line. That needs to be there just once). Change the E key to any other key and change the excel to any other program.',k,We="- You can now modify the script however you want!",H,De='- <span class="text-secondary">Now, save this script into the folder that runs it on startup:</span>',T,Se='1. Press Win+R (Or type "run" into the windows search)',M,Re='2. Type "shell:startup"',_,Ve="3. Save the script here.",L,ze=`<img src="${me}/images/blog/shell_startup.png" alt="the shell:startup command in windows run utility"/>`,de,P,Ae='- <span class="text-secondary">This will ensure you always have these new shortcuts available</span>, because the script will start with your PC from now on.',g,Ee='You can now use this basic script to define custom keyboard shortcuts to open any app you want. But <span class="text-secondary">if you want to learn more about this system, the read on, because there is more coming!</span>',xe,$,je="2. How to run truly any app",q,Be='Running an app like excel is good, <span class="text-secondary">but not good enough</span>. It requires the app you want to bind to some key combination to be an <strong>explicit statement</strong> you could write into the Windows Run Utility (the one where we wrote shell:startup earlier). ',I,Oe='-&gt; For example, my notetaking app is called obsidian, but <span class="text-secondary">if you try to write &quot;obsidian&quot;, it will be unable to launch</span>, since not all apps have this possibility.',W,Fe="2.1. How to bind any app you have installed:",D,Ue="1. Press the windows key and search for the app you want to bind",S,Ye=`2. Right click it and press &quot;<strong>Open file location</strong>&quot; <img src="${me}/images/blog/windows_file_location.png" alt="describes where you can see the open file location button"/> `,R,Ne="3. Find the icon in the folder and right click it again - press &quot;<strong>Copy as path</strong>&quot;",V,Je='4. You now have <span class="text-secondary">the exact path you can use to run the app from AutoHotkey</span>!',z,Xe="5. Write this path into your AutoHotkey script:",A,Ge='<pre data-prefix="$"><code>#o::</code></pre><pre data-prefix="$"><code>{</code></pre><pre data-prefix="$"><code>	Run &quot;C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\Obsidian.lnk&quot;</code></pre><pre data-prefix="$"><code>}</code></pre>',E,Ke="This is, for example, how I run the Obsidian app.",ye,j,Qe="3. How to use keys other than the windows key",B,Ze="Short AutoHotkey lesson incoming! ",O,et='If you wanted to create a script that runs when you press o, without any windows keys, <span class="text-secondary">you would define it like so</span>:',F,tt='<pre data-prefix="$"><code>o::</code></pre><pre data-prefix="$"><code>{</code></pre><pre data-prefix="$"><code>	Run &quot;C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\Obsidian.lnk&quot;</code></pre><pre data-prefix="$"><code>}</code></pre>',U,st='But that would make it impossible for you to type anything on the keyboard - which is why I used the # symbol which is a symbol for the windows key (Symbols like the windows key, Ctrl, Shift, etc. are also called <strong>modifier keys</strong>). <span class="text-secondary">There are other symbols that you can use for other modifier keys</span> that need to be pressed with your letter on the keyboard.',Y,nt="3.1. What are the modifier keys?",N,at='<pre data-prefix="$"><code>^o:: ; Runs the app when you press Ctrl + o</code></pre><pre data-prefix="$"><code>!o:: ; Alt + o</code></pre><pre data-prefix="$"><code>+o:: ; Shift + o</code></pre><pre data-prefix="$"><code>#o:: ; Win + o</code></pre>',J,lt='That&#39;s not all the variations though, because you <span class="text-secondary">can also combine these modifier keys to be pressed together</span> - watch out though, because <strong>the order of the key presses matter</strong>!',X,ot='<pre data-prefix="$"><code>!^o:: ; Alt + Ctrl + o</code></pre><pre data-prefix="$"><code>^!o:: ; Ctrl + Alt + o</code></pre>',G,rt='So all in all you can use these keys, or you can <span class="text-secondary">re-bind any special keys you do not use on your PC</span>:',K,it="3.2. What are some other special keys?",Q,pt='<pre data-prefix="$"><code>F1:: ; F1 key - you can use any of the numbered F keys</code></pre><pre data-prefix="$"><code>PrtScn:: ; Print Screen</code></pre><pre data-prefix="$"><code>Home:: ; Home key</code></pre><pre data-prefix="$"><code>End:: ; End key</code></pre><pre data-prefix="$"><code>PgUp:: ; Page Up key</code></pre><pre data-prefix="$"><code>PgDn:: ; Page Down key</code></pre><pre data-prefix="$"><code>Up::::</code></pre><pre data-prefix="$"><code>Down::</code></pre><pre data-prefix="$"><code>Left::</code></pre><pre data-prefix="$"><code>Right:: ; Those are the arrow keys</code></pre>',Z,ct="These are only some of the more useful keys you can bind scripts to. But hey - if you do not use the Esc key (for some reason), you can rebind it as well. ",ee,ut='My favorite of these special keys are <span class="text-secondary">the F1 keys</span>. One use for them could be writing special characters - but I will explain writing characters in an another blog post :D.',fe,te,dt="4. How to redefine windows keyboard shortcuts",se,ht='This last little tutorial is how to <span class="text-secondary">redefine certain existing windows keyboard shortcuts</span>. It is a niche thing, but it&#39;s actually pretty useful, since windows has some Win+something key functionalities that you might want to keep. ',ne,xt="4.1. Some of the useful windows shortcuts",ae,yt=`- Windows has a Win+V shortcut which shows you the clipboard history <img src="${me}/images/blog/windows_clipboard_utility.png" alt="showcases the windows clipboard history utility"/>`,le,ft="- Or you can use Win+X and then press I or A to start a powershell terminal",oe,vt='These shortcuts are handy and you may not want to get rid of them entirely, but it could happen that you <span class="text-secondary">would want to use them for something else</span> and rebind the windows shortcuts to different keys.',re,mt="4.2. Example: Rebinding the clipboard history to Win+C",ie,wt="This example is showing you how you would go about re-binding the clipboard history (which is located at Win+V) to Win+C. I was specifically doing this so I could use Win+V to launch VS Code (the programming environment).",pe,Ct='<pre data-prefix="$"><code>#c::</code></pre><pre data-prefix="$"><code>{</code></pre><pre data-prefix="$"><code>	Send &quot;#v&quot;</code></pre><pre data-prefix="$"><code>}</code></pre><pre data-prefix="$"><code></code></pre><pre data-prefix="$"><code>#v::</code></pre><pre data-prefix="$"><code>{</code></pre><pre data-prefix="$"><code>	Run &quot;C:\\Users\\David\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Visual Studio Code\\Visual Studio Code.lnk&quot;</code></pre><pre data-prefix="$"><code>}</code></pre>',ce,bt='So as you can see, it is <span class="text-secondary">pretty simple and just a touch of black magic is needed</span>. Just rebind the original windows shortcut to the new shortcut. Now you can use the original clipboard shortcut for some different key bind and it will work as intended.',ue,kt='<p class="">This works, because if you bind a shortcut to run inside autohotkey, <span class="text-secondary">the original windows shortcut will always take preference</span>, before running your other custom defined Win+some key shortcuts.</p>';return{c(){i=n("h1"),i.textContent=we,p=n("p"),p.textContent=Ce,c=n("p"),c.textContent=be,he=n("br"),u=n("h2"),u.textContent=ke,d=n("p"),d.innerHTML=He,h=n("h3"),h.textContent=Te,x=n("p"),x.innerHTML=Me,y=n("p"),y.innerHTML=_e,f=n("p"),f.textContent=Le,v=n("div"),v.innerHTML=Pe,m=n("h3"),m.textContent=ge,w=n("p"),w.textContent=$e,C=n("p"),C.innerHTML=qe,b=n("p"),b.innerHTML=Ie,k=n("p"),k.textContent=We,H=n("p"),H.innerHTML=De,T=n("p"),T.textContent=Se,M=n("p"),M.textContent=Re,_=n("p"),_.textContent=Ve,L=n("p"),L.innerHTML=ze,de=n("p"),P=n("p"),P.innerHTML=Ae,g=n("p"),g.innerHTML=Ee,xe=n("br"),$=n("h2"),$.textContent=je,q=n("p"),q.innerHTML=Be,I=n("p"),I.innerHTML=Oe,W=n("h3"),W.textContent=Fe,D=n("p"),D.textContent=Ue,S=n("p"),S.innerHTML=Ye,R=n("p"),R.innerHTML=Ne,V=n("p"),V.innerHTML=Je,z=n("p"),z.textContent=Xe,A=n("div"),A.innerHTML=Ge,E=n("p"),E.textContent=Ke,ye=n("br"),j=n("h2"),j.textContent=Qe,B=n("p"),B.textContent=Ze,O=n("p"),O.innerHTML=et,F=n("div"),F.innerHTML=tt,U=n("p"),U.innerHTML=st,Y=n("h3"),Y.textContent=nt,N=n("div"),N.innerHTML=at,J=n("p"),J.innerHTML=lt,X=n("div"),X.innerHTML=ot,G=n("p"),G.innerHTML=rt,K=n("h3"),K.textContent=it,Q=n("div"),Q.innerHTML=pt,Z=n("p"),Z.textContent=ct,ee=n("p"),ee.innerHTML=ut,fe=n("br"),te=n("h2"),te.textContent=dt,se=n("p"),se.innerHTML=ht,ne=n("h3"),ne.textContent=xt,ae=n("p"),ae.innerHTML=yt,le=n("p"),le.textContent=ft,oe=n("p"),oe.innerHTML=vt,re=n("h3"),re.textContent=mt,ie=n("p"),ie.textContent=wt,pe=n("div"),pe.innerHTML=Ct,ce=n("p"),ce.innerHTML=bt,ue=n("div"),ue.innerHTML=kt,this.h()},l(e){i=a(e,"H1",{class:!0,"data-svelte-h":!0}),r(i)!=="svelte-1vucqm6"&&(i.textContent=we),p=a(e,"P",{class:!0,"data-svelte-h":!0}),r(p)!=="svelte-1okfzbi"&&(p.textContent=Ce),c=a(e,"P",{class:!0,"data-svelte-h":!0}),r(c)!=="svelte-fg5xij"&&(c.textContent=be),he=a(e,"BR",{}),u=a(e,"H2",{class:!0,"data-svelte-h":!0}),r(u)!=="svelte-hu8uam"&&(u.textContent=ke),d=a(e,"P",{class:!0,"data-svelte-h":!0}),r(d)!=="svelte-jq4cb2"&&(d.innerHTML=He),h=a(e,"H3",{class:!0,"data-svelte-h":!0}),r(h)!=="svelte-l40df9"&&(h.textContent=Te),x=a(e,"P",{class:!0,"data-svelte-h":!0}),r(x)!=="svelte-17p7gvw"&&(x.innerHTML=Me),y=a(e,"P",{class:!0,"data-svelte-h":!0}),r(y)!=="svelte-9ibw11"&&(y.innerHTML=_e),f=a(e,"P",{class:!0,"data-svelte-h":!0}),r(f)!=="svelte-p9ci74"&&(f.textContent=Le),v=a(e,"DIV",{class:!0,"data-svelte-h":!0}),r(v)!=="svelte-80d176"&&(v.innerHTML=Pe),m=a(e,"H3",{class:!0,"data-svelte-h":!0}),r(m)!=="svelte-3hla7u"&&(m.textContent=ge),w=a(e,"P",{class:!0,"data-svelte-h":!0}),r(w)!=="svelte-l8pbq3"&&(w.textContent=$e),C=a(e,"P",{class:!0,"data-svelte-h":!0}),r(C)!=="svelte-1k5crcz"&&(C.innerHTML=qe),b=a(e,"P",{class:!0,"data-svelte-h":!0}),r(b)!=="svelte-1v6urnd"&&(b.innerHTML=Ie),k=a(e,"P",{class:!0,"data-svelte-h":!0}),r(k)!=="svelte-i6n1jv"&&(k.textContent=We),H=a(e,"P",{class:!0,"data-svelte-h":!0}),r(H)!=="svelte-1ygiext"&&(H.innerHTML=De),T=a(e,"P",{class:!0,"data-svelte-h":!0}),r(T)!=="svelte-gf23q0"&&(T.textContent=Se),M=a(e,"P",{class:!0,"data-svelte-h":!0}),r(M)!=="svelte-u9m4z3"&&(M.textContent=Re),_=a(e,"P",{class:!0,"data-svelte-h":!0}),r(_)!=="svelte-1r7mq04"&&(_.textContent=Ve),L=a(e,"P",{class:!0,"data-svelte-h":!0}),r(L)!=="svelte-45lw4d"&&(L.innerHTML=ze),de=a(e,"P",{class:!0}),Lt(de).forEach(t),P=a(e,"P",{class:!0,"data-svelte-h":!0}),r(P)!=="svelte-1qj8de"&&(P.innerHTML=Ae),g=a(e,"P",{class:!0,"data-svelte-h":!0}),r(g)!=="svelte-132rzak"&&(g.innerHTML=Ee),xe=a(e,"BR",{}),$=a(e,"H2",{class:!0,"data-svelte-h":!0}),r($)!=="svelte-1ikagrm"&&($.textContent=je),q=a(e,"P",{class:!0,"data-svelte-h":!0}),r(q)!=="svelte-1wtp5vx"&&(q.innerHTML=Be),I=a(e,"P",{class:!0,"data-svelte-h":!0}),r(I)!=="svelte-bw6h7b"&&(I.innerHTML=Oe),W=a(e,"H3",{class:!0,"data-svelte-h":!0}),r(W)!=="svelte-1xzmv48"&&(W.textContent=Fe),D=a(e,"P",{class:!0,"data-svelte-h":!0}),r(D)!=="svelte-wj6p73"&&(D.textContent=Ue),S=a(e,"P",{class:!0,"data-svelte-h":!0}),r(S)!=="svelte-u2x6lh"&&(S.innerHTML=Ye),R=a(e,"P",{class:!0,"data-svelte-h":!0}),r(R)!=="svelte-ucah4m"&&(R.innerHTML=Ne),V=a(e,"P",{class:!0,"data-svelte-h":!0}),r(V)!=="svelte-x1ppx"&&(V.innerHTML=Je),z=a(e,"P",{class:!0,"data-svelte-h":!0}),r(z)!=="svelte-1tk881d"&&(z.textContent=Xe),A=a(e,"DIV",{class:!0,"data-svelte-h":!0}),r(A)!=="svelte-8uf4ut"&&(A.innerHTML=Ge),E=a(e,"P",{class:!0,"data-svelte-h":!0}),r(E)!=="svelte-1he2g3l"&&(E.textContent=Ke),ye=a(e,"BR",{}),j=a(e,"H2",{class:!0,"data-svelte-h":!0}),r(j)!=="svelte-az56uw"&&(j.textContent=Qe),B=a(e,"P",{class:!0,"data-svelte-h":!0}),r(B)!=="svelte-v2mzt7"&&(B.textContent=Ze),O=a(e,"P",{class:!0,"data-svelte-h":!0}),r(O)!=="svelte-19rqn3t"&&(O.innerHTML=et),F=a(e,"DIV",{class:!0,"data-svelte-h":!0}),r(F)!=="svelte-c1widi"&&(F.innerHTML=tt),U=a(e,"P",{class:!0,"data-svelte-h":!0}),r(U)!=="svelte-o45ndy"&&(U.innerHTML=st),Y=a(e,"H3",{class:!0,"data-svelte-h":!0}),r(Y)!=="svelte-1navmqm"&&(Y.textContent=nt),N=a(e,"DIV",{class:!0,"data-svelte-h":!0}),r(N)!=="svelte-1i0wgos"&&(N.innerHTML=at),J=a(e,"P",{class:!0,"data-svelte-h":!0}),r(J)!=="svelte-1me3dl2"&&(J.innerHTML=lt),X=a(e,"DIV",{class:!0,"data-svelte-h":!0}),r(X)!=="svelte-fngh9b"&&(X.innerHTML=ot),G=a(e,"P",{class:!0,"data-svelte-h":!0}),r(G)!=="svelte-1ci9gk4"&&(G.innerHTML=rt),K=a(e,"H3",{class:!0,"data-svelte-h":!0}),r(K)!=="svelte-lyhs9o"&&(K.textContent=it),Q=a(e,"DIV",{class:!0,"data-svelte-h":!0}),r(Q)!=="svelte-vezoio"&&(Q.innerHTML=pt),Z=a(e,"P",{class:!0,"data-svelte-h":!0}),r(Z)!=="svelte-1wms5d4"&&(Z.textContent=ct),ee=a(e,"P",{class:!0,"data-svelte-h":!0}),r(ee)!=="svelte-1hkaljk"&&(ee.innerHTML=ut),fe=a(e,"BR",{}),te=a(e,"H2",{class:!0,"data-svelte-h":!0}),r(te)!=="svelte-1tslydl"&&(te.textContent=dt),se=a(e,"P",{class:!0,"data-svelte-h":!0}),r(se)!=="svelte-1fq8add"&&(se.innerHTML=ht),ne=a(e,"H3",{class:!0,"data-svelte-h":!0}),r(ne)!=="svelte-1vid6aw"&&(ne.textContent=xt),ae=a(e,"P",{class:!0,"data-svelte-h":!0}),r(ae)!=="svelte-lg1v2z"&&(ae.innerHTML=yt),le=a(e,"P",{class:!0,"data-svelte-h":!0}),r(le)!=="svelte-x31d43"&&(le.textContent=ft),oe=a(e,"P",{class:!0,"data-svelte-h":!0}),r(oe)!=="svelte-190l0rm"&&(oe.innerHTML=vt),re=a(e,"H3",{class:!0,"data-svelte-h":!0}),r(re)!=="svelte-zj93oh"&&(re.textContent=mt),ie=a(e,"P",{class:!0,"data-svelte-h":!0}),r(ie)!=="svelte-14l9w3g"&&(ie.textContent=wt),pe=a(e,"DIV",{class:!0,"data-svelte-h":!0}),r(pe)!=="svelte-1q1fi5x"&&(pe.innerHTML=Ct),ce=a(e,"P",{class:!0,"data-svelte-h":!0}),r(ce)!=="svelte-m0lswk"&&(ce.innerHTML=bt),ue=a(e,"DIV",{class:!0,"data-svelte-h":!0}),r(ue)!=="svelte-vlsbp8"&&(ue.innerHTML=kt),this.h()},h(){o(i,"class","text-4xl text-primary mb-6 font-cyberpunk"),o(p,"class",""),o(c,"class",""),o(u,"class","text-primary text-3xl mt-4 font-cyberpunk"),o(d,"class",""),o(h,"class","text-primary text-2xl mt-3 font-cyberpunk"),o(x,"class",""),o(y,"class",""),o(f,"class",""),o(v,"class","mockup-code text-accent text-lg"),o(m,"class","text-primary text-2xl mt-3 font-cyberpunk"),o(w,"class",""),o(C,"class",""),o(b,"class",""),o(k,"class",""),o(H,"class",""),o(T,"class",""),o(M,"class",""),o(_,"class",""),o(L,"class",""),o(de,"class",""),o(P,"class",""),o(g,"class",""),o($,"class","text-primary text-3xl mt-4 font-cyberpunk"),o(q,"class",""),o(I,"class",""),o(W,"class","text-primary text-2xl mt-3 font-cyberpunk"),o(D,"class",""),o(S,"class",""),o(R,"class",""),o(V,"class",""),o(z,"class",""),o(A,"class","mockup-code text-accent text-lg"),o(E,"class",""),o(j,"class","text-primary text-3xl mt-4 font-cyberpunk"),o(B,"class",""),o(O,"class",""),o(F,"class","mockup-code text-accent text-lg"),o(U,"class",""),o(Y,"class","text-primary text-2xl mt-3 font-cyberpunk"),o(N,"class","mockup-code text-accent text-lg"),o(J,"class",""),o(X,"class","mockup-code text-accent text-lg"),o(G,"class",""),o(K,"class","text-primary text-2xl mt-3 font-cyberpunk"),o(Q,"class","mockup-code text-accent text-lg"),o(Z,"class",""),o(ee,"class",""),o(te,"class","text-primary text-3xl mt-4 font-cyberpunk"),o(se,"class",""),o(ne,"class","text-primary text-2xl mt-3 font-cyberpunk"),o(ae,"class",""),o(le,"class",""),o(oe,"class",""),o(re,"class","text-primary text-2xl mt-3 font-cyberpunk"),o(ie,"class",""),o(pe,"class","mockup-code text-accent text-lg"),o(ce,"class",""),o(ue,"class","mb-40")},m(e,s){l(e,i,s),l(e,p,s),l(e,c,s),l(e,he,s),l(e,u,s),l(e,d,s),l(e,h,s),l(e,x,s),l(e,y,s),l(e,f,s),l(e,v,s),l(e,m,s),l(e,w,s),l(e,C,s),l(e,b,s),l(e,k,s),l(e,H,s),l(e,T,s),l(e,M,s),l(e,_,s),l(e,L,s),l(e,de,s),l(e,P,s),l(e,g,s),l(e,xe,s),l(e,$,s),l(e,q,s),l(e,I,s),l(e,W,s),l(e,D,s),l(e,S,s),l(e,R,s),l(e,V,s),l(e,z,s),l(e,A,s),l(e,E,s),l(e,ye,s),l(e,j,s),l(e,B,s),l(e,O,s),l(e,F,s),l(e,U,s),l(e,Y,s),l(e,N,s),l(e,J,s),l(e,X,s),l(e,G,s),l(e,K,s),l(e,Q,s),l(e,Z,s),l(e,ee,s),l(e,fe,s),l(e,te,s),l(e,se,s),l(e,ne,s),l(e,ae,s),l(e,le,s),l(e,oe,s),l(e,re,s),l(e,ie,s),l(e,pe,s),l(e,ce,s),l(e,ue,s)},p:ve,i:ve,o:ve,d(e){e&&(t(i),t(p),t(c),t(he),t(u),t(d),t(h),t(x),t(y),t(f),t(v),t(m),t(w),t(C),t(b),t(k),t(H),t(T),t(M),t(_),t(L),t(de),t(P),t(g),t(xe),t($),t(q),t(I),t(W),t(D),t(S),t(R),t(V),t(z),t(A),t(E),t(ye),t(j),t(B),t(O),t(F),t(U),t(Y),t(N),t(J),t(X),t(G),t(K),t(Q),t(Z),t(ee),t(fe),t(te),t(se),t(ne),t(ae),t(le),t(oe),t(re),t(ie),t(pe),t(ce),t(ue))}}}class It extends Mt{constructor(i){super(),_t(this,i,null,Pt,Tt,{})}}export{It as component};
