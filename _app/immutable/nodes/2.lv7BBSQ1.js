import{s as ee,n as Q,r as x}from"../chunks/scheduler.BvLojk_z.js";import{S as te,i as ne,s as k,e as g,b as L,m as le,g as q,h as R,c as P,d as z,n as H,f as M,o as f,j as K,k as a,p as y,q as j,r as ae,u as W,l as oe,v as $}from"../chunks/index.CG6y-W0u.js";function X(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Y(e,i,t){const o=e.slice();return o[14]=i[t],o[15]=i,o[16]=t,o}function Z(e){let i,t,o,O,_=e[3](e[14])+(e[14].remainder||0)+"",p,A,C,m,U,d,I,v,b,w="支払い方法を選択",T,r="現金",n,E="PayPay",c,S="後日",V,B;function F(){e[9].call(t,e[15],e[16])}function D(){e[10].call(m,e[15],e[16])}function h(){e[11].call(d,e[15],e[16])}return{c(){i=g("div"),t=g("input"),o=k(),O=g("p"),p=L(_),A=L("円"),C=k(),m=g("input"),U=k(),d=g("input"),I=k(),v=g("select"),b=g("option"),b.textContent=w,T=g("option"),T.textContent=r,n=g("option"),n.textContent=E,c=g("option"),c.textContent=S,this.h()},l(s){i=P(s,"DIV",{class:!0});var u=z(i);t=P(u,"INPUT",{type:!0,id:!0,class:!0}),o=R(u),O=P(u,"P",{});var l=z(O);p=M(l,_),A=M(l,"円"),l.forEach(q),C=R(u),m=P(u,"INPUT",{type:!0,placeholder:!0,class:!0}),U=R(u),d=P(u,"INPUT",{class:!0,type:!0,placeholder:!0}),I=R(u),v=P(u,"SELECT",{name:!0,id:!0});var N=z(v);b=P(N,"OPTION",{"data-svelte-h":!0}),H(b)!=="svelte-t2wctg"&&(b.textContent=w),T=P(N,"OPTION",{"data-svelte-h":!0}),H(T)!=="svelte-x87r6k"&&(T.textContent=r),n=P(N,"OPTION",{"data-svelte-h":!0}),H(n)!=="svelte-aime6m"&&(n.textContent=E),c=P(N,"OPTION",{"data-svelte-h":!0}),H(c)!=="svelte-xlrr0q"&&(c.textContent=S),N.forEach(q),u.forEach(q),this.h()},h(){f(t,"type","checkbox"),f(t,"id","is_done_"+e[16]),f(t,"class","svelte-12aiotd"),f(m,"type","text"),f(m,"placeholder","名前を入力"),f(m,"class","svelte-12aiotd"),f(d,"class","price svelte-12aiotd"),f(d,"type","number"),f(d,"placeholder","比率"),b.__value="",y(b,b.__value),T.__value="cash",y(T,T.__value),n.__value="paypay",y(n,n.__value),c.__value="後日",y(c,c.__value),f(v,"name","payment"),f(v,"id","payment"),f(i,"class","info svelte-12aiotd"),W(i,"is-paid",e[14].isPaid)},m(s,u){K(s,i,u),a(i,t),t.checked=e[14].isPaid,a(i,o),a(i,O),a(O,p),a(O,A),a(i,C),a(i,m),y(m,e[14].name),a(i,U),a(i,d),y(d,e[14].ratio),a(i,I),a(i,v),a(v,b),a(v,T),a(v,n),a(v,c),V||(B=[j(t,"change",F),j(m,"input",D),j(d,"input",h)],V=!0)},p(s,u){e=s,u&1&&(t.checked=e[14].isPaid),u&1&&_!==(_=e[3](e[14])+(e[14].remainder||0)+"")&&oe(p,_),u&1&&m.value!==e[14].name&&y(m,e[14].name),u&1&&$(d.value)!==e[14].ratio&&y(d,e[14].ratio),u&1&&W(i,"is-paid",e[14].isPaid)},d(s){s&&q(i),V=!1,x(B)}}}function se(e){let i,t,o,O="割り勘",_,p,A,C,m="メンバーを追加",U,d,I,v,b=e[6]()+"",w,T,r,n,E,c=e[7]()+"",S,V,B,F,D=X(e[0]),h=[];for(let s=0;s<D.length;s+=1)h[s]=Z(Y(e,D,s));return{c(){i=k(),t=g("main"),o=g("h1"),o.textContent=O,_=k(),p=g("input"),A=k(),C=g("button"),C.textContent=m,U=k();for(let s=0;s<h.length;s+=1)h[s].c();d=k(),I=g("p"),v=L("現在の預かり金額: "),w=L(b),T=L("円"),r=k(),n=g("p"),E=L("残りの金額: "),S=L(c),V=L("円"),this.h()},l(s){le("svelte-1koplbt",document.head).forEach(q),i=R(s),t=P(s,"MAIN",{class:!0});var l=z(t);o=P(l,"H1",{"data-svelte-h":!0}),H(o)!=="svelte-ur8qkq"&&(o.textContent=O),_=R(l),p=P(l,"INPUT",{class:!0,type:!0,placeholder:!0}),A=R(l),C=P(l,"BUTTON",{class:!0,"data-svelte-h":!0}),H(C)!=="svelte-wq89bw"&&(C.textContent=m),U=R(l);for(let J=0;J<h.length;J+=1)h[J].l(l);d=R(l),I=P(l,"P",{});var N=z(I);v=M(N,"現在の預かり金額: "),w=M(N,b),T=M(N,"円"),N.forEach(q),r=R(l),n=P(l,"P",{});var G=z(n);E=M(G,"残りの金額: "),S=M(G,c),V=M(G,"円"),G.forEach(q),l.forEach(q),this.h()},h(){document.title="割り勘",f(p,"class","totalprice svelte-12aiotd"),f(p,"type","text"),f(p,"placeholder","合計金額を入力"),f(C,"class","svelte-12aiotd"),f(t,"class","svelte-12aiotd")},m(s,u){K(s,i,u),K(s,t,u),a(t,o),a(t,_),a(t,p),y(p,e[1]),a(t,A),a(t,C),a(t,U);for(let l=0;l<h.length;l+=1)h[l]&&h[l].m(t,null);a(t,d),a(t,I),a(I,v),a(I,w),a(I,T),a(t,r),a(t,n),a(n,E),a(n,S),a(n,V),B||(F=[j(p,"input",e[8]),j(p,"input",e[5]),j(p,"change",e[4]),j(C,"click",e[2])],B=!0)},p(s,[u]){if(u&2&&p.value!==s[1]&&y(p,s[1]),u&9){D=X(s[0]);let l;for(l=0;l<D.length;l+=1){const N=Y(s,D,l);h[l]?h[l].p(N,u):(h[l]=Z(N),h[l].c(),h[l].m(t,d))}for(;l<h.length;l+=1)h[l].d(1);h.length=D.length}},i:Q,o:Q,d(s){s&&(q(i),q(t)),ae(h,s),B=!1,x(F)}}}function ie(e,i,t){let o=[];function O(){o.push({name:"",ratio:1,isPaid:!1,remainder:0}),t(0,o=[...o])}let _=0,p="";function A(){return o.reduce((r,n)=>r+n.ratio,0)}function C(r){const n=A();return Math.floor(_*(r.ratio/n))}function m(){const r=A();let n=o.reduce((c,S)=>c+Math.floor(_*(S.ratio/r)),0),E=_-n;for(let c=0;E>0;c++)c>=o.length&&(c=0),t(0,o[c].remainder=(o[c].remainder||0)+1,o),E--}function U(r){const E=r.target.value.replace(/,/g,"");_=parseInt(E,10)||0,t(1,p=_.toLocaleString())}function d(){return o.reduce((r,n)=>n.isPaid?r+C(n)+(n.remainder||0):r,0)}function I(){return _-d()}function v(){p=this.value,t(1,p)}function b(r,n){r[n].isPaid=this.checked,t(0,o)}function w(r,n){r[n].name=this.value,t(0,o)}function T(r,n){r[n].ratio=$(this.value),t(0,o)}return[o,p,O,C,m,U,d,I,v,b,w,T]}class pe extends te{constructor(i){super(),ne(this,i,ie,se,ee,{})}}export{pe as component};
