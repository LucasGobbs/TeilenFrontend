import{S as e,i as t,s as n,e as r,t as s,k as l,c as a,a as o,g as c,d as i,n as f,b as d,f as h,F as u,h as m,G as $,N as g,l as p,v,B as b,r as x,u as w,O as E,P as I,Q as V,J as D,j as y,m as k,o as S,H as j,w as N,R as F,U as A,V as L,W as M,X as T,Y as W,Z as B,_ as R,$ as _,a0 as q,a1 as C,a2 as H,a3 as P,a4 as U,a5 as z,a6 as G,z as O,a7 as J,a8 as Q,a9 as X,aa as Y,ab as Z,ac as K,I as ee,T as te}from"../chunks/vendor-628176ef.js";import{R as ne,d as re,I as se}from"../chunks/Explorer-2b6c9f23.js";function le(e){let t,n,g,p,v,b,x;return{c(){t=r("div"),n=r("div"),g=r("span"),p=s(e[1]),b=l(),x=r("span"),this.h()},l(r){t=a(r,"DIV",{class:!0});var s=o(t);n=a(s,"DIV",{class:!0});var l=o(n);g=a(l,"SPAN",{class:!0});var d=o(g);p=c(d,e[1]),d.forEach(i),l.forEach(i),b=f(s),x=a(s,"SPAN",{class:!0}),o(x).forEach(i),s.forEach(i),this.h()},h(){d(g,"class","table-cell text-black font-bold align-middle"),d(n,"class",v=e[0]+" w-full h-full rounded-full overflow-hidden shadow-inner text-center table cursor-pointer transform hover:scale-125"),d(x,"class","absolute bottom-0 right-0 inline-block w-3 h-3 bg-green-600 border-2 border-white rounded-full"),d(t,"class","w-10 h-10 relative mb-4 flex-shrink-0")},m(e,r){h(e,t,r),u(t,n),u(n,g),u(g,p),u(t,b),u(t,x)},p(e,[t]){2&t&&m(p,e[1]),1&t&&v!==(v=e[0]+" w-full h-full rounded-full overflow-hidden shadow-inner text-center table cursor-pointer transform hover:scale-125")&&d(n,"class",v)},i:$,o:$,d(e){e&&i(t)}}}function ae(e,t,n){let{color:r}=t,{name:s}=t;return e.$$set=e=>{"color"in e&&n(0,r=e.color),"name"in e&&n(1,s=e.name)},[r,s]}class oe extends e{constructor(e){super(),t(this,e,ae,le,n,{color:0,name:1})}}function ce(e,t,n){const r=e.slice();return r[9]=t[n],r[10]=t,r[11]=n,r}function ie(e){let t,n;return t=new L({}),{c(){y(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){S(t,e,r),n=!0},i(e){n||(v(t.$$.fragment,e),n=!0)},o(e){x(t.$$.fragment,e),n=!1},d(e){N(t,e)}}}function fe(e){let t,n,s;return n=new L({}),{c(){t=r("div"),y(n.$$.fragment),this.h()},l(e){t=a(e,"DIV",{class:!0});var r=o(t);k(n.$$.fragment,r),r.forEach(i),this.h()},h(){d(t,"class","transform rotate-90")},m(e,r){h(e,t,r),S(n,t,null),s=!0},i(e){s||(v(n.$$.fragment,e),s=!0)},o(e){x(n.$$.fragment,e),s=!1},d(e){e&&i(t),N(n)}}}function de(e){let t,n,r=e[0].children,s=[];for(let a=0;a<r.length;a+=1)s[a]=Ee(ce(e,r,a));const l=e=>x(s[e],1,1,(()=>{s[e]=null}));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=p()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=p()},m(e,r){for(let t=0;t<s.length;t+=1)s[t].m(e,r);h(e,t,r),n=!0},p(e,n){if(5&n){let a;for(r=e[0].children,a=0;a<r.length;a+=1){const l=ce(e,r,a);s[a]?(s[a].p(l,n),v(s[a],1)):(s[a]=Ee(l),s[a].c(),v(s[a],1),s[a].m(t.parentNode,t))}for(b(),a=r.length;a<s.length;a+=1)l(a);w()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)v(s[e]);n=!0}},o(e){s=s.filter(Boolean);for(let t=0;t<s.length;t+=1)x(s[t]);n=!1},d(e){D(s,e),e&&i(t)}}}function he(e){let t,n,s,c,m,$,g,p,E,I,V,D,y;const k=[be,ve,pe,ge,$e,me],S=[];function N(e,t){return 1&t&&(s=!!e[9].name.endsWith("js")),s?0:(1&t&&(c=!!e[9].name.endsWith("java")),c?1:(1&t&&(m=!!e[9].name.endsWith("css")),m?2:(1&t&&($=!!e[9].name.endsWith("py")),$?3:(1&t&&(g=!!e[9].name.endsWith("go")),g?4:5))))}function F(e,t){return e[9].expanded?we:xe}p=N(e,-1),E=S[p]=k[p](e);let A=F(e),L=A(e);function M(){return e[5](e[9])}return{c(){t=r("div"),n=r("div"),E.c(),I=l(),L.c(),this.h()},l(e){t=a(e,"DIV",{class:!0});var r=o(t);n=a(r,"DIV",{class:!0});var s=o(n);E.l(s),s.forEach(i),I=f(r),L.l(r),r.forEach(i),this.h()},h(){d(n,"class","w-6 h-6 text-indigo-500 mr-1"),d(t,"class","flex items-center cursor-pointer hover:bg-purple-300")},m(e,r){h(e,t,r),u(t,n),S[p].m(n,null),u(t,I),L.m(t,null),V=!0,D||(y=j(t,"click",M),D=!0)},p(r,s){let l=p;p=N(e=r,s),p!==l&&(b(),x(S[l],1,1,(()=>{S[l]=null})),w(),E=S[p],E||(E=S[p]=k[p](e),E.c()),v(E,1),E.m(n,null)),A===(A=F(e))&&L?L.p(e,s):(L.d(1),L=A(e),L&&(L.c(),L.m(t,null)))},i(e){V||(v(E),V=!0)},o(e){x(E),V=!1},d(e){e&&i(t),S[p].d(),L.d(),D=!1,y()}}}function ue(e){let t,n,r;function s(t){e[3](t,e[9],e[10],e[11])}let l={};return void 0!==e[9]&&(l.folder=e[9]),t=new De({props:l}),M.push((()=>T(t,"folder",s))),t.$on("SelectFile",e[4]),{c(){y(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,n){S(t,e,n),r=!0},p(r,s){e=r;const l={};!n&&1&s&&(n=!0,l.folder=e[9],W((()=>n=!1))),t.$set(l)},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){x(t.$$.fragment,e),r=!1},d(e){N(t,e)}}}function me(e){let t,n;return t=new B({}),{c(){y(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){S(t,e,r),n=!0},i(e){n||(v(t.$$.fragment,e),n=!0)},o(e){x(t.$$.fragment,e),n=!1},d(e){N(t,e)}}}function $e(e){let t,n;return t=new R({}),{c(){y(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){S(t,e,r),n=!0},i(e){n||(v(t.$$.fragment,e),n=!0)},o(e){x(t.$$.fragment,e),n=!1},d(e){N(t,e)}}}function ge(e){let t,n;return t=new _({}),{c(){y(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){S(t,e,r),n=!0},i(e){n||(v(t.$$.fragment,e),n=!0)},o(e){x(t.$$.fragment,e),n=!1},d(e){N(t,e)}}}function pe(e){let t,n;return t=new q({}),{c(){y(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){S(t,e,r),n=!0},i(e){n||(v(t.$$.fragment,e),n=!0)},o(e){x(t.$$.fragment,e),n=!1},d(e){N(t,e)}}}function ve(e){let t,n;return t=new C({}),{c(){y(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){S(t,e,r),n=!0},i(e){n||(v(t.$$.fragment,e),n=!0)},o(e){x(t.$$.fragment,e),n=!1},d(e){N(t,e)}}}function be(e){let t,n;return t=new H({}),{c(){y(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){S(t,e,r),n=!0},i(e){n||(v(t.$$.fragment,e),n=!0)},o(e){x(t.$$.fragment,e),n=!1},d(e){N(t,e)}}}function xe(e){let t,n,l=e[9].name+"";return{c(){t=r("div"),n=s(l)},l(e){t=a(e,"DIV",{});var r=o(t);n=c(r,l),r.forEach(i)},m(e,r){h(e,t,r),u(t,n)},p(e,t){1&t&&l!==(l=e[9].name+"")&&m(n,l)},d(e){e&&i(t)}}}function we(e){let t,n,l=e[9].name+"";return{c(){t=r("div"),n=s(l),this.h()},l(e){t=a(e,"DIV",{class:!0});var r=o(t);n=c(r,l),r.forEach(i),this.h()},h(){d(t,"class","font-bold text-indigo-500")},m(e,r){h(e,t,r),u(t,n)},p(e,t){1&t&&l!==(l=e[9].name+"")&&m(n,l)},d(e){e&&i(t)}}}function Ee(e){let t,n,s,c,m,$,g;const p=[ue,he],D=[];function y(e,t){return 1&t&&(n=!!e[9].isFolder()),n?0:1}return s=y(e,-1),c=D[s]=p[s](e),{c(){t=r("div"),c.c(),m=l(),this.h()},l(e){t=a(e,"DIV",{class:!0});var n=o(t);c.l(n),m=f(n),n.forEach(i),this.h()},h(){d(t,"class","pl-2 border-l border-black border-opacity-25")},m(e,n){h(e,t,n),D[s].m(t,null),u(t,m),g=!0},p(e,n){let r=s;s=y(e,n),s===r?D[s].p(e,n):(b(),x(D[r],1,1,(()=>{D[r]=null})),w(),c=D[s],c?c.p(e,n):(c=D[s]=p[s](e),c.c()),v(c,1),c.m(t,m))},i(e){g||(v(c),E((()=>{$||($=I(t,V,{},!0)),$.run(1)})),g=!0)},o(e){x(c),$||($=I(t,V,{},!1)),$.run(0),g=!1},d(e){e&&i(t),D[s].d(),e&&$&&$.end()}}}function Ie(e){let t,n,$,E,I,V,D,F,A,L,M,T,W,B,R,_=e[0].name+"";const q=[fe,ie],C=[];function H(e,t){return e[0].expanded?0:1}E=H(e),I=C[E]=q[E](e),L=new g({});let P=e[0].expanded&&de(e);return{c(){t=r("div"),n=r("div"),$=r("div"),I.c(),V=l(),D=s(_),F=l(),A=r("div"),y(L.$$.fragment),M=l(),P&&P.c(),T=p(),this.h()},l(e){t=a(e,"DIV",{class:!0});var r=o(t);n=a(r,"DIV",{class:!0});var s=o(n);$=a(s,"DIV",{class:!0});var l=o($);I.l(l),l.forEach(i),V=f(s),D=c(s,_),s.forEach(i),F=f(r),A=a(r,"DIV",{class:!0});var d=o(A);k(L.$$.fragment,d),d.forEach(i),r.forEach(i),M=f(e),P&&P.l(e),T=p(),this.h()},h(){d($,"class","w-6 h-6 mr-1 transform -translate-x-1"),d(n,"class","flex"),d(A,"class","w-6 h-6 opacity-0 group-hover:opacity-40 hover:opacity-100"),d(t,"class","group flex items-center cursor-pointer pb-1 hover:bg-indigo-300 rounded font-semibold justify-between")},m(r,s){h(r,t,s),u(t,n),u(n,$),C[E].m($,null),u(n,V),u(n,D),u(t,F),u(t,A),S(L,A,null),h(r,M,s),P&&P.m(r,s),h(r,T,s),W=!0,B||(R=j(t,"click",e[1]),B=!0)},p(e,[t]){let n=E;E=H(e),E!==n&&(b(),x(C[n],1,1,(()=>{C[n]=null})),w(),I=C[E],I||(I=C[E]=q[E](e),I.c()),v(I,1),I.m($,null)),(!W||1&t)&&_!==(_=e[0].name+"")&&m(D,_),e[0].expanded?P?(P.p(e,t),1&t&&v(P,1)):(P=de(e),P.c(),v(P,1),P.m(T.parentNode,T)):P&&(b(),x(P,1,1,(()=>{P=null})),w())},i(e){W||(v(I),v(L.$$.fragment,e),v(P),W=!0)},o(e){x(I),x(L.$$.fragment,e),x(P),W=!1},d(e){e&&i(t),C[E].d(),N(L),e&&i(M),P&&P.d(e),e&&i(T),B=!1,R()}}}function Ve(e,t,n){F();const r=A();let{folder:s}=t;const l=e=>{r("SelectFile",{selected:e})};return e.$$set=e=>{"folder"in e&&n(0,s=e.folder)},[s,()=>{n(0,s.expanded=!s.expanded,s)},l,function(e,t,r,l){r[l]=e,n(0,s)},e=>{l(e.detail.selected)},e=>{l(e)}]}class De extends e{constructor(e){super(),t(this,e,Ve,Ie,n,{folder:0})}}function ye(e){let t,n,s,l;function c(t){e[2](t)}let f={};return void 0!==e[0].folders&&(f.folder=e[0].folders),n=new De({props:f}),M.push((()=>T(n,"folder",c))),n.$on("SelectFile",e[1]),{c(){t=r("ul"),y(n.$$.fragment)},l(e){t=a(e,"UL",{});var r=o(t);k(n.$$.fragment,r),r.forEach(i)},m(e,r){h(e,t,r),S(n,t,null),l=!0},p(e,[t]){const r={};!s&&1&t&&(s=!0,r.folder=e[0].folders,W((()=>s=!1))),n.$set(r)},i(e){l||(v(n.$$.fragment,e),l=!0)},o(e){x(n.$$.fragment,e),l=!1},d(e){e&&i(t),N(n)}}}function ke(e,t,n){const r=A();let{root:s=new ne(re)}=t;return e.$$set=e=>{"root"in e&&n(0,s=e.root)},[s,e=>{n(0,s=s.selectFile(e.detail.selected)),r("SelectFile",{selected:e.detail.selected})},function(t){e.$$.not_equal(s.folders,t)&&(s.folders=t,n(0,s))}]}class Se extends e{constructor(e){super(),t(this,e,ke,ye,n,{root:0})}}function je(e){let t,n;return{c(){t=r("div"),this.h()},l(e){t=a(e,"DIV",{class:!0}),o(t).forEach(i),this.h()},h(){d(t,"class",n=P(e[0])+" svelte-44wbrv")},m(n,r){h(n,t,r),e[5](t)},p(e,[r]){1&r&&n!==(n=P(e[0])+" svelte-44wbrv")&&d(t,"class",n)},i:$,o:$,d(n){n&&i(t),e[5](null)}}}function Ne(e,t,n){A();let{pos:r=1}=t;function s(e,t,n){return e.selection.ranges.filter((e=>e.empty)).map((s=>{let l=e.doc.lineAt(s.head);return l.number,s.head,l.from,{pos:r,above:n,strictSide:!0,class:"cm-cursor-tooltip",create:()=>{let e=document.createElement("div");return e.textContent=t,{dom:e}}}}))}const l=U.baseTheme({".cm-tooltip.cm-cursor-tooltip":{backgroundColor:"#66b",color:"white",transform:"translate(-50%, -7px)",border:"none",padding:"2px 7px",borderRadius:"10px","&:before":{position:"absolute",content:'""',left:"50%",marginLeft:"-5px",bottom:"-5px",borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderTop:"5px solid #66b"}}});let a,o,{class:c=""}=t,{editor:i=null}=t,{options:f={}}=t,d=(h="Lucas",u=!0,z.define({create:s,update:(e,t)=>t.docChanged||t.selection?s(t.state,h,u):e,provide:e=>G.computeN([e],(t=>t.field(e)))}));var h,u;console.log(d),O((()=>{$()}));const m=U.theme({$:{fontSize:"25pt"}});function $(e){i&&n(1,o.innerHTML="",o),a=J.create({doc:"",extensions:[Q,X(),Y,l,m]}),n(2,i=new U({state:a,parent:o,dispatch:e=>{i.update([e])}}))}return e.$$set=e=>{"pos"in e&&n(3,r=e.pos),"class"in e&&n(0,c=e.class),"editor"in e&&n(2,i=e.editor),"options"in e&&n(4,f=e.options)},e.$$.update=()=>{18&e.$$.dirty&&o&&$()},[c,o,i,r,f,function(e){M[e?"unshift":"push"]((()=>{o=e,n(1,o)}))}]}class Fe extends e{constructor(e){super(),t(this,e,Ne,je,n,{pos:3,class:0,editor:2,options:4})}}function Ae(e,t,n){const r=e.slice();return r[7]=t[n],r[9]=n,r}function Le(e){let t,n,$,g,p,b,w,E,I,V,D,F=e[7].name+"";function A(){return e[4](e[9])}function L(...t){return e[5](e[9],...t)}return w=new Z({}),{c(){t=r("li"),n=r("div"),$=r("a"),g=s(F),p=l(),b=r("div"),y(w.$$.fragment),E=l(),this.h()},l(e){t=a(e,"LI",{class:!0});var r=o(t);n=a(r,"DIV",{class:!0});var s=o(n);$=a(s,"A",{id:!0,href:!0,class:!0});var l=o($);g=c(l,F),l.forEach(i),p=f(s),b=a(s,"DIV",{class:!0});var d=o(b);k(w.$$.fragment,d),d.forEach(i),s.forEach(i),E=f(r),r.forEach(i),this.h()},h(){d($,"id","default-tab"),d($,"href","#first"),d($,"class","text-center"),d(b,"class","w-4 h-4 hover:text-red-600 transform hover:scale-125"),d(n,"class","flex justify-between items-center p-1"),d(t,"class","w-20 h-full mr-1 pl-1 font-semibold text-gray-800 rounded-t bg-white hover:opacity-70 opacity-50")},m(e,r){h(e,t,r),u(t,n),u(n,$),u($,g),u(n,p),u(n,b),S(w,b,null),u(t,E),I=!0,V||(D=[j(b,"click",K(A)),j(t,"click",L)],V=!0)},p(t,n){e=t,(!I||1&n)&&F!==(F=e[7].name+"")&&m(g,F)},i(e){I||(v(w.$$.fragment,e),I=!0)},o(e){x(w.$$.fragment,e),I=!1},d(e){e&&i(t),N(w),V=!1,ee(D)}}}function Me(e){let t,n,$,g,p,b,w,E,I,V,D,F=e[7].name+"";function A(){return e[3](e[9])}return w=new Z({}),{c(){t=r("li"),n=r("div"),$=r("a"),g=s(F),p=l(),b=r("div"),y(w.$$.fragment),E=l(),this.h()},l(e){t=a(e,"LI",{class:!0});var r=o(t);n=a(r,"DIV",{class:!0});var s=o(n);$=a(s,"A",{id:!0,href:!0,class:!0});var l=o($);g=c(l,F),l.forEach(i),p=f(s),b=a(s,"DIV",{class:!0});var d=o(b);k(w.$$.fragment,d),d.forEach(i),s.forEach(i),E=f(r),r.forEach(i),this.h()},h(){d($,"id","default-tab"),d($,"href","#first"),d($,"class","text-center"),d(b,"class","w-4 h-4 hover:text-red-600 transform hover:scale-125"),d(n,"class","flex justify-between items-center p-1"),d(t,"class","w-20 mr-1 h-full pl-1 pb-1 -mb-px font-semibold text-gray-800 bg-white border-b-2 rounded-t ")},m(e,r){h(e,t,r),u(t,n),u(n,$),u($,g),u(n,p),u(n,b),S(w,b,null),u(t,E),I=!0,V||(D=j(b,"click",A),V=!0)},p(t,n){e=t,(!I||1&n)&&F!==(F=e[7].name+"")&&m(g,F)},i(e){I||(v(w.$$.fragment,e),I=!0)},o(e){x(w.$$.fragment,e),I=!1},d(e){e&&i(t),N(w),V=!1,D()}}}function Te(e){let t,n,r,s;const l=[Me,Le],a=[];function o(e,t){return e[9]==e[0].selected?0:1}return t=o(e),n=a[t]=l[t](e),{c(){n.c(),r=p()},l(e){n.l(e),r=p()},m(e,n){a[t].m(e,n),h(e,r,n),s=!0},p(e,s){let c=t;t=o(e),t===c?a[t].p(e,s):(b(),x(a[c],1,1,(()=>{a[c]=null})),w(),n=a[t],n?n.p(e,s):(n=a[t]=l[t](e),n.c()),v(n,1),n.m(r.parentNode,r))},i(e){s||(v(n),s=!0)},o(e){x(n),s=!1},d(e){a[t].d(e),e&&i(r)}}}function We(e){let t,n,s,l=e[0].items,c=[];for(let r=0;r<l.length;r+=1)c[r]=Te(Ae(e,l,r));const f=e=>x(c[e],1,1,(()=>{c[e]=null}));return{c(){t=r("div"),n=r("ul");for(let e=0;e<c.length;e+=1)c[e].c();this.h()},l(e){t=a(e,"DIV",{class:!0});var r=o(t);n=a(r,"UL",{id:!0,class:!0});var s=o(n);for(let t=0;t<c.length;t+=1)c[t].l(s);s.forEach(i),r.forEach(i),this.h()},h(){d(n,"id","tabs"),d(n,"class","inline-flex w-full px-1 h-full items-center  "),d(t,"class","bg-indigo-300 h-8 ")},m(e,r){h(e,t,r),u(t,n);for(let t=0;t<c.length;t+=1)c[t].m(n,null);s=!0},p(e,[t]){if(7&t){let r;for(l=e[0].items,r=0;r<l.length;r+=1){const s=Ae(e,l,r);c[r]?(c[r].p(s,t),v(c[r],1)):(c[r]=Te(s),c[r].c(),v(c[r],1),c[r].m(n,null))}for(b(),r=l.length;r<c.length;r+=1)f(r);w()}},i(e){if(!s){for(let e=0;e<l.length;e+=1)v(c[e]);s=!0}},o(e){c=c.filter(Boolean);for(let t=0;t<c.length;t+=1)x(c[t]);s=!1},d(e){e&&i(t),D(c,e)}}}function Be(e,t,n){let{tabs:r}=t;const s=A(),l=e=>{n(0,r.selected=e,r),s("TabSelected",{tab:r.getSelected()})},a=e=>{n(0,r=r.remove(e)),s("TabSelected",{tab:r.getSelected()})};return e.$$set=e=>{"tabs"in e&&n(0,r=e.tabs)},[r,l,a,e=>{a(e)},e=>{a(e)},(e,t)=>{l(e)}]}class Re extends e{constructor(e){super(),t(this,e,Be,We,n,{tabs:0})}}class _e{constructor(e,t){this.name=e,this.content=t}static fromItem(e){return new _e(e.name,e.content)}equal(e){return this.name==e.name&&this.content==e.content}}class qe{constructor(e,t=0){this.items=e,this.selected=t}getSelected(){return this.items[this.selected]}alreadyOpen(e){return this.items.filter((t=>e.equal(t))).length>0}getIndex(e){let t=0;for(let n of this.items){if(e.equal(n))return t;t++}return-1}add(e){return this.items.push(e),this.selected=this.items.length-1,this}remove(e){return 0!=e&&e==this.selected?(console.log("entrou"),e==this.items.length-1?this.selected=e-1:this.selected=e):this.selected==this.items.length-1&&(this.selected=this.selected-1),this.items.splice(e,1),this}select(e){return this.selected=e,this}}function Ce(e,t,n){const r=e.slice();return r[16]=t[n],r}function He(e){let t,n;return t=new oe({props:{name:e[16].name,color:e[16].color}}),{c(){y(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){S(t,e,r),n=!0},p:$,i(e){n||(v(t.$$.fragment,e),n=!0)},o(e){x(t.$$.fragment,e),n=!1},d(e){N(t,e)}}}function Pe(e){let t,n,m,$,g,p,F,A,L,B,R,_,q,C,H,P,U,z,G,O,J,Q,X,Y,Z;B=new te({});let K=function(e){let t,n,m,$,g,p,b,w;function E(t){e[10](t)}let I={};return void 0!==e[1]&&(I.root=e[1]),p=new Se({props:I}),M.push((()=>T(p,"root",E))),p.$on("SelectFile",e[6]),{c(){t=r("nav"),n=r("div"),m=r("h1"),$=s("Explorer"),g=l(),y(p.$$.fragment),this.h()},l(e){t=a(e,"NAV",{class:!0});var r=o(t);n=a(r,"DIV",{class:!0});var s=o(n);m=a(s,"H1",{class:!0});var l=o(m);$=c(l,"Explorer"),l.forEach(i),g=f(s),k(p.$$.fragment,s),s.forEach(i),r.forEach(i),this.h()},h(){d(m,"class","title-font font-medium text-black-500 tracking-widest text-2xl mb-3 pt-8 "),d(n,"class","ml-4"),d(t,"class","bg-gray-200 w-60 h-full divide-y divide-green-500 flex flex-col items-left absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out")},m(e,r){h(e,t,r),u(t,n),u(n,m),u(m,$),u(n,g),S(p,n,null),w=!0},p(e,t){const n={};!b&&2&t&&(b=!0,n.root=e[1],W((()=>b=!1))),p.$set(n)},i(e){w||(v(p.$$.fragment,e),w=!0)},o(e){x(p.$$.fragment,e),w=!1},d(e){e&&i(t),N(p)}}}(e);function ne(t){e[11](t)}let re={};function se(t){e[12](t)}void 0!==e[2]&&(re.tabs=e[2]),U=new Re({props:re}),M.push((()=>T(U,"tabs",ne))),U.$on("TabSelected",e[7]);let le={options:e[3]};void 0!==e[0]&&(le.editor=e[0]),O=new Fe({props:le}),M.push((()=>T(O,"editor",se)));let ae=function(e){let t,n,s,l=e[4],c=[];for(let r=0;r<l.length;r+=1)c[r]=He(Ce(e,l,r));const f=e=>x(c[e],1,1,(()=>{c[e]=null}));return{c(){t=r("div");for(let e=0;e<c.length;e+=1)c[e].c();this.h()},l(e){t=a(e,"DIV",{class:!0});var n=o(t);for(let t=0;t<c.length;t+=1)c[t].l(n);n.forEach(i),this.h()},h(){d(t,"class","flex flex-col bg-indigo-300 pt-1 p-2 pt-2 overflow-scroll")},m(e,n){h(e,t,n);for(let r=0;r<c.length;r+=1)c[r].m(t,null);s=!0},p(e,n){if(16&n){let r;for(l=e[4],r=0;r<l.length;r+=1){const s=Ce(e,l,r);c[r]?(c[r].p(s,n),v(c[r],1)):(c[r]=He(s),c[r].c(),v(c[r],1),c[r].m(t,null))}for(b(),r=l.length;r<c.length;r+=1)f(r);w()}},i(e){if(!s){for(let e=0;e<l.length;e+=1)v(c[e]);e&&E((()=>{n||(n=I(t,V,{},!0)),n.run(1)})),s=!0}},o(e){c=c.filter(Boolean);for(let t=0;t<c.length;t+=1)x(c[t]);e&&(n||(n=I(t,V,{},!1)),n.run(0)),s=!1},d(e){e&&i(t),D(c,e),e&&n&&n.end()}}}(e);return{c(){t=r("div"),n=r("div"),m=r("div"),$=r("nav"),g=r("a"),p=r("img"),A=l(),L=r("div"),y(B.$$.fragment),R=l(),K&&K.c(),_=l(),q=r("div"),C=r("div"),H=s("a sdasdasdasd asdasdasd"),P=l(),y(U.$$.fragment),G=l(),y(O.$$.fragment),Q=l(),ae&&ae.c(),this.h()},l(e){t=a(e,"DIV",{class:!0});var r=o(t);n=a(r,"DIV",{class:!0});var s=o(n);m=a(s,"DIV",{class:!0});var l=o(m);$=a(l,"NAV",{class:!0});var d=o($);g=a(d,"A",{href:!0,class:!0});var h=o(g);p=a(h,"IMG",{src:!0,class:!0}),h.forEach(i),A=f(d),L=a(d,"DIV",{class:!0});var u=o(L);k(B.$$.fragment,u),u.forEach(i),d.forEach(i),R=f(l),K&&K.l(l),_=f(l),q=a(l,"DIV",{class:!0});var v=o(q);C=a(v,"DIV",{class:!0});var b=o(C);H=c(b,"a sdasdasdasd asdasdasd"),b.forEach(i),P=f(v),k(U.$$.fragment,v),G=f(v),k(O.$$.fragment,v),v.forEach(i),Q=f(l),ae&&ae.l(l),l.forEach(i),s.forEach(i),r.forEach(i),this.h()},h(){p.src!==(F="https://randomuser.me/api/portraits/women/76.jpg")&&d(p,"src","https://randomuser.me/api/portraits/women/76.jpg"),d(p,"class","rounded-full w-10 h-10 mb-3 mx-auto"),d(g,"href","#"),d(g,"class","mt-8"),d(L,"class","w-8  text-white"),d($,"class","bg-indigo-300 w-20 h-full flex flex-col items-center z-1"),d(C,"class"," bg-indigo-300"),d(q,"class","flex-col flex-grow"),d(m,"class","flex flex-row flex-grow h-full "),d(n,"class","h-screen "),d(t,"class","mx-auto h-screen overflow-hidden ")},m(r,s){h(r,t,s),u(t,n),u(n,m),u(m,$),u($,g),u(g,p),u($,A),u($,L),S(B,L,null),u(m,R),K&&K.m(m,null),u(m,_),u(m,q),u(q,C),u(C,H),u(q,P),S(U,q,null),u(q,G),S(O,q,null),u(m,Q),ae&&ae.m(m,null),X=!0,Y||(Z=[j(p,"click",e[8]),j(L,"click",e[9])],Y=!0)},p(e,[t]){K.p(e,t);const n={};!z&&4&t&&(z=!0,n.tabs=e[2],W((()=>z=!1))),U.$set(n);const r={};!J&&1&t&&(J=!0,r.editor=e[0],W((()=>J=!1))),O.$set(r),ae.p(e,t)},i(e){X||(v(B.$$.fragment,e),v(K),v(U.$$.fragment,e),v(O.$$.fragment,e),v(ae),X=!0)},o(e){x(B.$$.fragment,e),x(K),x(U.$$.fragment,e),x(O.$$.fragment,e),x(ae),X=!1},d(e){e&&i(t),N(B),K&&K.d(),N(U),N(O),ae&&ae.d(),Y=!1,ee(Z)}}}function Ue(e,t,n){let r;const s=()=>{const e=["bg-red-500","bg-green-500","bg-yellow-500","bg-purple-500"],t="ABCDEFGHIJKLMNPQRSTUXYZ";return{color:e[Math.floor(Math.random()*e.length)],name:`${t[Math.floor(Math.random()*t.length)]}${t[Math.floor(Math.random()*t.length)]}`}};let l=[];for(let d=0;d<25;d++)l.push(s());let a=new ne(re),o="none",c=!1,i=e=>{if("none"==o)switch(o=e,o){case"file_explorer":c=!0}else o="none",c=!1;console.log(c)},f=new qe([]);return[r,a,f,{mode:"javascript",lineNumbers:!0,theme:"dracula",value:"let a = export bababau"},l,i,e=>{const t=_e.fromItem(e.detail.selected);if(f.alreadyOpen(t)){const e=f.getIndex(t);if(-1==e)return;n(2,f=f.select(e))}else n(2,f=f.add(t));console.log(r),console.log(r.state.doc),r.dispatch({changes:{from:0,to:r.state.doc.length,insert:e.detail.selected.content}}),n(0,r)},e=>{n(1,a=a.selectFile(se.fromTab(e.detail.tab))),r.dispatch({changes:{from:0,to:r.state.doc.length,insert:e.detail.tab.content}}),n(0,r)},()=>{i("file_explorer")},()=>{i("file_explorer")},function(e){a=e,n(1,a)},function(e){f=e,n(2,f)},function(e){r=e,n(0,r)}]}class ze extends e{constructor(e){super(),t(this,e,Ue,Pe,n,{})}}function Ge(e){let t,n,s;return n=new ze({}),{c(){t=r("div"),y(n.$$.fragment)},l(e){t=a(e,"DIV",{});var r=o(t);k(n.$$.fragment,r),r.forEach(i)},m(e,r){h(e,t,r),S(n,t,null),s=!0},p:$,i(e){s||(v(n.$$.fragment,e),s=!0)},o(e){x(n.$$.fragment,e),s=!1},d(e){e&&i(t),N(n)}}}export default class extends e{constructor(e){super(),t(this,e,null,Ge,n,{})}}