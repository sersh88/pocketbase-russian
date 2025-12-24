import{S as Re,i as Ee,s as Pe,V as Be,X as j,h as f,d as Ce,t as te,a as le,I as ee,Z as ke,_ as Ie,C as Oe,$ as Te,D as Ae,l as p,n as i,m as we,u as c,A as $,v as h,c as De,w as m,J as Me,p as Le,k as z,o as Se,W as qe}from"./index-BozUHKR0.js";function he(a,l,s){const n=a.slice();return n[6]=l[s],n}function ge(a,l,s){const n=a.slice();return n[6]=l[s],n}function ve(a){let l;return{c(){l=c("p"),l.innerHTML="Нужен заголовок суперпользователя <code>Authorization:TOKEN</code>",m(l,"class","txt-hint txt-sm txt-right")},m(s,n){p(s,l,n)},d(s){s&&f(l)}}}function $e(a,l){let s,n,k;function d(){return l[5](l[6])}return{key:a,first:null,c(){s=c("button"),s.textContent=`${l[6].code} `,m(s,"class","tab-item"),z(s,"active",l[2]===l[6].code),this.first=s},m(o,r){p(o,s,r),n||(k=Se(s,"click",d),n=!0)},p(o,r){l=o,r&20&&z(s,"active",l[2]===l[6].code)},d(o){o&&f(s),n=!1,k()}}}function ye(a,l){let s,n,k,d;return n=new qe({props:{content:l[6].body}}),{key:a,first:null,c(){s=c("div"),De(n.$$.fragment),k=h(),m(s,"class","tab-item"),z(s,"active",l[2]===l[6].code),this.first=s},m(o,r){p(o,s,r),we(n,s,null),i(s,k),d=!0},p(o,r){l=o,(!d||r&20)&&z(s,"active",l[2]===l[6].code)},i(o){d||(le(n.$$.fragment,o),d=!0)},o(o){te(n.$$.fragment,o),d=!1},d(o){o&&f(s),Ce(n)}}}function He(a){var pe,me;let l,s,n=a[0].name+"",k,d,o,r,y,C,F,L=a[0].name+"",J,se,K,w,N,P,V,g,S,ae,q,E,ne,W,H=a[0].name+"",X,oe,Z,ie,G,B,Q,I,Y,O,x,D,T,v=[],ce=new Map,de,A,b=[],re=new Map,R;w=new Be({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${a[3]}');

        ...

        await pb.collection('${(pe=a[0])==null?void 0:pe.name}').delete('RECORD_ID');
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${a[3]}');

        ...

        await pb.collection('${(me=a[0])==null?void 0:me.name}').delete('RECORD_ID');
    `}});let _=a[1]&&ve(),U=j(a[4]);const ue=e=>e[6].code;for(let e=0;e<U.length;e+=1){let t=ge(a,U,e),u=ue(t);ce.set(u,v[e]=$e(u,t))}let M=j(a[4]);const fe=e=>e[6].code;for(let e=0;e<M.length;e+=1){let t=he(a,M,e),u=fe(t);re.set(u,b[e]=ye(u,t))}return{c(){l=c("h3"),s=$("Удаление ("),k=$(n),d=$(")"),o=h(),r=c("div"),y=c("p"),C=$("Удалить одну запись "),F=c("strong"),J=$(L),se=$("."),K=h(),De(w.$$.fragment),N=h(),P=c("h6"),P.textContent="Детали API",V=h(),g=c("div"),S=c("strong"),S.textContent="DELETE",ae=h(),q=c("div"),E=c("p"),ne=$("/api/collections/"),W=c("strong"),X=$(H),oe=$("/records/"),Z=c("strong"),Z.textContent=":id",ie=h(),_&&_.c(),G=h(),B=c("div"),B.textContent="Path‑параметры",Q=h(),I=c("table"),I.innerHTML='<thead><tr><th>Параметр</th> <th>Тип</th> <th width="60%">Описание</th></tr></thead> <tbody><tr><td>id</td> <td><span class="label">String</span></td> <td>ID записи, которую надо удалить.</td></tr></tbody>',Y=h(),O=c("div"),O.textContent="Ответы",x=h(),D=c("div"),T=c("div");for(let e=0;e<v.length;e+=1)v[e].c();de=h(),A=c("div");for(let e=0;e<b.length;e+=1)b[e].c();m(l,"class","m-b-sm"),m(r,"class","content txt-lg m-b-sm"),m(P,"class","m-b-xs"),m(S,"class","label label-primary"),m(q,"class","content"),m(g,"class","alert alert-danger"),m(B,"class","section-title"),m(I,"class","table-compact table-border m-b-base"),m(O,"class","section-title"),m(T,"class","tabs-header compact combined left"),m(A,"class","tabs-content"),m(D,"class","tabs")},m(e,t){p(e,l,t),i(l,s),i(l,k),i(l,d),p(e,o,t),p(e,r,t),i(r,y),i(y,C),i(y,F),i(F,J),i(y,se),p(e,K,t),we(w,e,t),p(e,N,t),p(e,P,t),p(e,V,t),p(e,g,t),i(g,S),i(g,ae),i(g,q),i(q,E),i(E,ne),i(E,W),i(W,X),i(E,oe),i(E,Z),i(g,ie),_&&_.m(g,null),p(e,G,t),p(e,B,t),p(e,Q,t),p(e,I,t),p(e,Y,t),p(e,O,t),p(e,x,t),p(e,D,t),i(D,T);for(let u=0;u<v.length;u+=1)v[u]&&v[u].m(T,null);i(D,de),i(D,A);for(let u=0;u<b.length;u+=1)b[u]&&b[u].m(A,null);R=!0},p(e,[t]){var be,_e;(!R||t&1)&&n!==(n=e[0].name+"")&&ee(k,n),(!R||t&1)&&L!==(L=e[0].name+"")&&ee(J,L);const u={};t&9&&(u.js=`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e[3]}');

        ...

        await pb.collection('${(be=e[0])==null?void 0:be.name}').delete('RECORD_ID');
    `),t&9&&(u.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e[3]}');

        ...

        await pb.collection('${(_e=e[0])==null?void 0:_e.name}').delete('RECORD_ID');
    `),w.$set(u),(!R||t&1)&&H!==(H=e[0].name+"")&&ee(X,H),e[1]?_||(_=ve(),_.c(),_.m(g,null)):_&&(_.d(1),_=null),t&20&&(U=j(e[4]),v=ke(v,t,ue,1,e,U,ce,T,Ie,$e,null,ge)),t&20&&(M=j(e[4]),Oe(),b=ke(b,t,fe,1,e,M,re,A,Te,ye,null,he),Ae())},i(e){if(!R){le(w.$$.fragment,e);for(let t=0;t<M.length;t+=1)le(b[t]);R=!0}},o(e){te(w.$$.fragment,e);for(let t=0;t<b.length;t+=1)te(b[t]);R=!1},d(e){e&&(f(l),f(o),f(r),f(K),f(N),f(P),f(V),f(g),f(G),f(B),f(Q),f(I),f(Y),f(O),f(x),f(D)),Ce(w,e),_&&_.d();for(let t=0;t<v.length;t+=1)v[t].d();for(let t=0;t<b.length;t+=1)b[t].d()}}}function Ue(a,l,s){let n,k,{collection:d}=l,o=204,r=[];const y=C=>s(2,o=C.code);return a.$$set=C=>{"collection"in C&&s(0,d=C.collection)},a.$$.update=()=>{a.$$.dirty&1&&s(1,n=(d==null?void 0:d.deleteRule)===null),a.$$.dirty&3&&d!=null&&d.id&&(r.push({code:204,body:`
                null
            `}),r.push({code:400,body:`
                {
                  "status": 400,
                  "message": "Failed to delete record. Make sure that the record is not part of a required relation reference.",
                  "data": {}
                }
            `}),n&&r.push({code:403,body:`
                    {
                      "status": 403,
                      "message": "Only superusers can access this action.",
                      "data": {}
                    }
                `}),r.push({code:404,body:`
                {
                  "status": 404,
                  "message": "The requested resource wasn't found.",
                  "data": {}
                }
            `}))},s(3,k=Me.getApiExampleUrl(Le.baseURL)),[d,n,o,k,r,y]}class ze extends Re{constructor(l){super(),Ee(this,l,Ue,He,Pe,{collection:0})}}export{ze as default};
