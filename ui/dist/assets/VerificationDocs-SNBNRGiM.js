import{S as le,i as ne,s as oe,X as F,h as b,t as j,a as U,I as Y,Z as x,_ as Ce,C as ee,$ as Te,D as te,l as h,n as u,u as m,v as y,A as N,w as v,k as K,o as ie,W as Ve,d as z,m as G,c as Q,V as Ie,Y as fe,J as Ae,p as qe,a0 as ue}from"./index-BozUHKR0.js";function de(s,t,e){const i=s.slice();return i[4]=t[e],i}function me(s,t,e){const i=s.slice();return i[4]=t[e],i}function _e(s,t){let e,i=t[4].code+"",f,c,r,a;function d(){return t[3](t[4])}return{key:s,first:null,c(){e=m("button"),f=N(i),c=y(),v(e,"class","tab-item"),K(e,"active",t[1]===t[4].code),this.first=e},m(g,T){h(g,e,T),u(e,f),u(e,c),r||(a=ie(e,"click",d),r=!0)},p(g,T){t=g,T&4&&i!==(i=t[4].code+"")&&Y(f,i),T&6&&K(e,"active",t[1]===t[4].code)},d(g){g&&b(e),r=!1,a()}}}function pe(s,t){let e,i,f,c;return i=new Ve({props:{content:t[4].body}}),{key:s,first:null,c(){e=m("div"),Q(i.$$.fragment),f=y(),v(e,"class","tab-item"),K(e,"active",t[1]===t[4].code),this.first=e},m(r,a){h(r,e,a),G(i,e,null),u(e,f),c=!0},p(r,a){t=r;const d={};a&4&&(d.content=t[4].body),i.$set(d),(!c||a&6)&&K(e,"active",t[1]===t[4].code)},i(r){c||(U(i.$$.fragment,r),c=!0)},o(r){j(i.$$.fragment,r),c=!1},d(r){r&&b(e),z(i)}}}function Ee(s){let t,e,i,f,c,r,a,d=s[0].name+"",g,T,D,E,L,O,P,B,S,V,I,$=[],J=new Map,H,q,_=[],C=new Map,A,p=F(s[2]);const X=l=>l[4].code;for(let l=0;l<p.length;l+=1){let o=me(s,p,l),n=X(o);J.set(n,$[l]=_e(n,o))}let M=F(s[2]);const W=l=>l[4].code;for(let l=0;l<M.length;l+=1){let o=de(s,M,l),n=W(o);C.set(n,_[l]=pe(n,o))}return{c(){t=m("div"),e=m("strong"),e.textContent="POST",i=y(),f=m("div"),c=m("p"),r=N("/api/collections/"),a=m("strong"),g=N(d),T=N("/confirm-verification"),D=y(),E=m("div"),E.textContent="Параметры тела",L=y(),O=m("table"),O.innerHTML='<thead><tr><th>Параметр</th> <th>Тип</th> <th width="50%">Описание</th></tr></thead> <tbody><tr><td><div class="inline-flex"><span class="label label-success">Обязательно</span> <span>token</span></div></td> <td><span class="label">String</span></td> <td>Токен из письма запроса подтверждения.</td></tr></tbody>',P=y(),B=m("div"),B.textContent="Ответы",S=y(),V=m("div"),I=m("div");for(let l=0;l<$.length;l+=1)$[l].c();H=y(),q=m("div");for(let l=0;l<_.length;l+=1)_[l].c();v(e,"class","label label-primary"),v(f,"class","content"),v(t,"class","alert alert-success"),v(E,"class","section-title"),v(O,"class","table-compact table-border m-b-base"),v(B,"class","section-title"),v(I,"class","tabs-header compact combined left"),v(q,"class","tabs-content"),v(V,"class","tabs")},m(l,o){h(l,t,o),u(t,e),u(t,i),u(t,f),u(f,c),u(c,r),u(c,a),u(a,g),u(c,T),h(l,D,o),h(l,E,o),h(l,L,o),h(l,O,o),h(l,P,o),h(l,B,o),h(l,S,o),h(l,V,o),u(V,I);for(let n=0;n<$.length;n+=1)$[n]&&$[n].m(I,null);u(V,H),u(V,q);for(let n=0;n<_.length;n+=1)_[n]&&_[n].m(q,null);A=!0},p(l,[o]){(!A||o&1)&&d!==(d=l[0].name+"")&&Y(g,d),o&6&&(p=F(l[2]),$=x($,o,X,1,l,p,J,I,Ce,_e,null,me)),o&6&&(M=F(l[2]),ee(),_=x(_,o,W,1,l,M,C,q,Te,pe,null,de),te())},i(l){if(!A){for(let o=0;o<M.length;o+=1)U(_[o]);A=!0}},o(l){for(let o=0;o<_.length;o+=1)j(_[o]);A=!1},d(l){l&&(b(t),b(D),b(E),b(L),b(O),b(P),b(B),b(S),b(V));for(let o=0;o<$.length;o+=1)$[o].d();for(let o=0;o<_.length;o+=1)_[o].d()}}}function Oe(s,t,e){let{collection:i}=t,f=204,c=[];const r=a=>e(1,f=a.code);return s.$$set=a=>{"collection"in a&&e(0,i=a.collection)},e(2,c=[{code:204,body:"null"},{code:400,body:`
                {
                  "status": 400,
                  "message": "An error occurred while validating the submitted data.",
                  "data": {
                    "token": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
                }
            `}]),[i,f,c,r]}class Pe extends le{constructor(t){super(),ne(this,t,Oe,Ee,oe,{collection:0})}}function be(s,t,e){const i=s.slice();return i[4]=t[e],i}function he(s,t,e){const i=s.slice();return i[4]=t[e],i}function ve(s,t){let e,i=t[4].code+"",f,c,r,a;function d(){return t[3](t[4])}return{key:s,first:null,c(){e=m("button"),f=N(i),c=y(),v(e,"class","tab-item"),K(e,"active",t[1]===t[4].code),this.first=e},m(g,T){h(g,e,T),u(e,f),u(e,c),r||(a=ie(e,"click",d),r=!0)},p(g,T){t=g,T&4&&i!==(i=t[4].code+"")&&Y(f,i),T&6&&K(e,"active",t[1]===t[4].code)},d(g){g&&b(e),r=!1,a()}}}function ge(s,t){let e,i,f,c;return i=new Ve({props:{content:t[4].body}}),{key:s,first:null,c(){e=m("div"),Q(i.$$.fragment),f=y(),v(e,"class","tab-item"),K(e,"active",t[1]===t[4].code),this.first=e},m(r,a){h(r,e,a),G(i,e,null),u(e,f),c=!0},p(r,a){t=r;const d={};a&4&&(d.content=t[4].body),i.$set(d),(!c||a&6)&&K(e,"active",t[1]===t[4].code)},i(r){c||(U(i.$$.fragment,r),c=!0)},o(r){j(i.$$.fragment,r),c=!1},d(r){r&&b(e),z(i)}}}function Be(s){let t,e,i,f,c,r,a,d=s[0].name+"",g,T,D,E,L,O,P,B,S,V,I,$=[],J=new Map,H,q,_=[],C=new Map,A,p=F(s[2]);const X=l=>l[4].code;for(let l=0;l<p.length;l+=1){let o=he(s,p,l),n=X(o);J.set(n,$[l]=ve(n,o))}let M=F(s[2]);const W=l=>l[4].code;for(let l=0;l<M.length;l+=1){let o=be(s,M,l),n=W(o);C.set(n,_[l]=ge(n,o))}return{c(){t=m("div"),e=m("strong"),e.textContent="POST",i=y(),f=m("div"),c=m("p"),r=N("/api/collections/"),a=m("strong"),g=N(d),T=N("/request-verification"),D=y(),E=m("div"),E.textContent="Параметры тела",L=y(),O=m("table"),O.innerHTML='<thead><tr><th>Параметр</th> <th>Тип</th> <th width="50%">Описание</th></tr></thead> <tbody><tr><td><div class="inline-flex"><span class="label label-success">Обязательно</span> <span>email</span></div></td> <td><span class="label">String</span></td> <td>Email auth‑записи, на который отправить запрос подтверждения (если запись существует).</td></tr></tbody>',P=y(),B=m("div"),B.textContent="Ответы",S=y(),V=m("div"),I=m("div");for(let l=0;l<$.length;l+=1)$[l].c();H=y(),q=m("div");for(let l=0;l<_.length;l+=1)_[l].c();v(e,"class","label label-primary"),v(f,"class","content"),v(t,"class","alert alert-success"),v(E,"class","section-title"),v(O,"class","table-compact table-border m-b-base"),v(B,"class","section-title"),v(I,"class","tabs-header compact combined left"),v(q,"class","tabs-content"),v(V,"class","tabs")},m(l,o){h(l,t,o),u(t,e),u(t,i),u(t,f),u(f,c),u(c,r),u(c,a),u(a,g),u(c,T),h(l,D,o),h(l,E,o),h(l,L,o),h(l,O,o),h(l,P,o),h(l,B,o),h(l,S,o),h(l,V,o),u(V,I);for(let n=0;n<$.length;n+=1)$[n]&&$[n].m(I,null);u(V,H),u(V,q);for(let n=0;n<_.length;n+=1)_[n]&&_[n].m(q,null);A=!0},p(l,[o]){(!A||o&1)&&d!==(d=l[0].name+"")&&Y(g,d),o&6&&(p=F(l[2]),$=x($,o,X,1,l,p,J,I,Ce,ve,null,he)),o&6&&(M=F(l[2]),ee(),_=x(_,o,W,1,l,M,C,q,Te,ge,null,be),te())},i(l){if(!A){for(let o=0;o<M.length;o+=1)U(_[o]);A=!0}},o(l){for(let o=0;o<_.length;o+=1)j(_[o]);A=!1},d(l){l&&(b(t),b(D),b(E),b(L),b(O),b(P),b(B),b(S),b(V));for(let o=0;o<$.length;o+=1)$[o].d();for(let o=0;o<_.length;o+=1)_[o].d()}}}function Me(s,t,e){let{collection:i}=t,f=204,c=[];const r=a=>e(1,f=a.code);return s.$$set=a=>{"collection"in a&&e(0,i=a.collection)},e(2,c=[{code:204,body:"null"},{code:400,body:`
                {
                  "status": 400,
                  "message": "An error occurred while validating the submitted data.",
                  "data": {
                    "email": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
                }
            `}]),[i,f,c,r]}class Ne extends le{constructor(t){super(),ne(this,t,Me,Be,oe,{collection:0})}}function ke(s,t,e){const i=s.slice();return i[5]=t[e],i[7]=e,i}function $e(s,t,e){const i=s.slice();return i[5]=t[e],i[7]=e,i}function we(s){let t,e,i,f,c;function r(){return s[4](s[7])}return{c(){t=m("button"),e=m("div"),e.textContent=`${s[5].title}`,i=y(),v(e,"class","txt"),v(t,"class","tab-item"),K(t,"active",s[1]==s[7])},m(a,d){h(a,t,d),u(t,e),u(t,i),f||(c=ie(t,"click",r),f=!0)},p(a,d){s=a,d&2&&K(t,"active",s[1]==s[7])},d(a){a&&b(t),f=!1,c()}}}function ye(s){let t,e,i,f;var c=s[5].component;function r(a,d){return{props:{collection:a[0]}}}return c&&(e=ue(c,r(s))),{c(){t=m("div"),e&&Q(e.$$.fragment),i=y(),v(t,"class","tab-item"),K(t,"active",s[1]==s[7])},m(a,d){h(a,t,d),e&&G(e,t,null),u(t,i),f=!0},p(a,d){if(c!==(c=a[5].component)){if(e){ee();const g=e;j(g.$$.fragment,1,0,()=>{z(g,1)}),te()}c?(e=ue(c,r(a)),Q(e.$$.fragment),U(e.$$.fragment,1),G(e,t,i)):e=null}else if(c){const g={};d&1&&(g.collection=a[0]),e.$set(g)}(!f||d&2)&&K(t,"active",a[1]==a[7])},i(a){f||(e&&U(e.$$.fragment,a),f=!0)},o(a){e&&j(e.$$.fragment,a),f=!1},d(a){a&&b(t),e&&z(e)}}}function Se(s){var M,W,l,o;let t,e,i=s[0].name+"",f,c,r,a,d,g,T,D=s[0].name+"",E,L,O,P,B,S,V,I,$,J,H,q;P=new Ie({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${s[2]}');

        ...

        await pb.collection('${(M=s[0])==null?void 0:M.name}').requestVerification('test@example.com');

        // ---
        // (optional) in your custom confirmation page:
        // ---

        await pb.collection('${(W=s[0])==null?void 0:W.name}').confirmVerification('VERIFICATION_TOKEN');
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${s[2]}');

        ...

        await pb.collection('${(l=s[0])==null?void 0:l.name}').requestVerification('test@example.com');

        // ---
        // (optional) in your custom confirmation page:
        // ---

        await pb.collection('${(o=s[0])==null?void 0:o.name}').confirmVerification('VERIFICATION_TOKEN');
    `}});let _=F(s[3]),C=[];for(let n=0;n<_.length;n+=1)C[n]=we($e(s,_,n));let A=F(s[3]),p=[];for(let n=0;n<A.length;n+=1)p[n]=ye(ke(s,A,n));const X=n=>j(p[n],1,1,()=>{p[n]=null});return{c(){t=m("h3"),e=N("Подтверждение аккаунта ("),f=N(i),c=N(")"),r=y(),a=m("div"),d=m("p"),g=N("Отправляет запрос на подтверждение аккаунта "),T=m("strong"),E=N(D),L=N("."),O=y(),Q(P.$$.fragment),B=y(),S=m("h6"),S.textContent="Детали API",V=y(),I=m("div"),$=m("div");for(let n=0;n<C.length;n+=1)C[n].c();J=y(),H=m("div");for(let n=0;n<p.length;n+=1)p[n].c();v(t,"class","m-b-sm"),v(a,"class","content txt-lg m-b-sm"),v(S,"class","m-b-xs"),v($,"class","tabs-header compact"),v(H,"class","tabs-content"),v(I,"class","tabs")},m(n,w){h(n,t,w),u(t,e),u(t,f),u(t,c),h(n,r,w),h(n,a,w),u(a,d),u(d,g),u(d,T),u(T,E),u(d,L),h(n,O,w),G(P,n,w),h(n,B,w),h(n,S,w),h(n,V,w),h(n,I,w),u(I,$);for(let R=0;R<C.length;R+=1)C[R]&&C[R].m($,null);u(I,J),u(I,H);for(let R=0;R<p.length;R+=1)p[R]&&p[R].m(H,null);q=!0},p(n,[w]){var se,ae,ce,re;(!q||w&1)&&i!==(i=n[0].name+"")&&Y(f,i),(!q||w&1)&&D!==(D=n[0].name+"")&&Y(E,D);const R={};if(w&5&&(R.js=`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${n[2]}');

        ...

        await pb.collection('${(se=n[0])==null?void 0:se.name}').requestVerification('test@example.com');

        // ---
        // (optional) in your custom confirmation page:
        // ---

        await pb.collection('${(ae=n[0])==null?void 0:ae.name}').confirmVerification('VERIFICATION_TOKEN');
    `),w&5&&(R.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${n[2]}');

        ...

        await pb.collection('${(ce=n[0])==null?void 0:ce.name}').requestVerification('test@example.com');

        // ---
        // (optional) in your custom confirmation page:
        // ---

        await pb.collection('${(re=n[0])==null?void 0:re.name}').confirmVerification('VERIFICATION_TOKEN');
    `),P.$set(R),w&10){_=F(n[3]);let k;for(k=0;k<_.length;k+=1){const Z=$e(n,_,k);C[k]?C[k].p(Z,w):(C[k]=we(Z),C[k].c(),C[k].m($,null))}for(;k<C.length;k+=1)C[k].d(1);C.length=_.length}if(w&11){A=F(n[3]);let k;for(k=0;k<A.length;k+=1){const Z=ke(n,A,k);p[k]?(p[k].p(Z,w),U(p[k],1)):(p[k]=ye(Z),p[k].c(),U(p[k],1),p[k].m(H,null))}for(ee(),k=A.length;k<p.length;k+=1)X(k);te()}},i(n){if(!q){U(P.$$.fragment,n);for(let w=0;w<A.length;w+=1)U(p[w]);q=!0}},o(n){j(P.$$.fragment,n),p=p.filter(Boolean);for(let w=0;w<p.length;w+=1)j(p[w]);q=!1},d(n){n&&(b(t),b(r),b(a),b(O),b(B),b(S),b(V),b(I)),z(P,n),fe(C,n),fe(p,n)}}}function Re(s,t,e){let i,{collection:f}=t;const c=[{title:"Запросить подтверждение",component:Ne},{title:"Подтвердить",component:Pe}];let r=0;const a=d=>e(1,r=d);return s.$$set=d=>{"collection"in d&&e(0,f=d.collection)},e(2,i=Ae.getApiExampleUrl(qe.baseURL)),[f,r,i,c,a]}class Fe extends le{constructor(t){super(),ne(this,t,Re,Se,oe,{collection:0})}}export{Fe as default};
