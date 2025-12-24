import{S as je,i as Ie,s as Ke,V as We,W as Ue,X as K,h as d,d as W,t as z,a as E,I as de,Z as qe,_ as Qe,C as Xe,$ as Ze,D as Ge,l as u,n as o,m as Q,u as s,A as k,v as p,c as X,w as b,J as Oe,p as Ye,k as Z,o as xe}from"./index-BozUHKR0.js";import{F as et}from"./FieldsQueryParam-BRUGZH-z.js";function ze(r,l,a){const n=r.slice();return n[5]=l[a],n}function Ee(r,l,a){const n=r.slice();return n[5]=l[a],n}function Je(r,l){let a,n=l[5].code+"",m,_,i,h;function g(){return l[4](l[5])}return{key:r,first:null,c(){a=s("button"),m=k(n),_=p(),b(a,"class","tab-item"),Z(a,"active",l[1]===l[5].code),this.first=a},m(v,w){u(v,a,w),o(a,m),o(a,_),i||(h=xe(a,"click",g),i=!0)},p(v,w){l=v,w&4&&n!==(n=l[5].code+"")&&de(m,n),w&6&&Z(a,"active",l[1]===l[5].code)},d(v){v&&d(a),i=!1,h()}}}function Ne(r,l){let a,n,m,_;return n=new Ue({props:{content:l[5].body}}),{key:r,first:null,c(){a=s("div"),X(n.$$.fragment),m=p(),b(a,"class","tab-item"),Z(a,"active",l[1]===l[5].code),this.first=a},m(i,h){u(i,a,h),Q(n,a,null),o(a,m),_=!0},p(i,h){l=i;const g={};h&4&&(g.content=l[5].body),n.$set(g),(!_||h&6)&&Z(a,"active",l[1]===l[5].code)},i(i){_||(E(n.$$.fragment,i),_=!0)},o(i){z(n.$$.fragment,i),_=!1},d(i){i&&d(a),W(n)}}}function tt(r){var Fe,He;let l,a,n=r[0].name+"",m,_,i,h,g,v,w,A,G,y,J,ue,N,D,pe,Y,U=r[0].name+"",x,he,fe,j,ee,F,te,C,oe,be,H,T,le,me,ae,_e,f,ke,R,ge,ve,$e,se,Se,ne,ye,we,Ce,re,Te,Pe,B,ie,L,ce,P,V,S=[],Re=new Map,Be,q,$=[],Me=new Map,M;v=new We({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${r[3]}');

        ...

        const authData = await pb.collection('${(Fe=r[0])==null?void 0:Fe.name}').authRefresh();

        // after the above you can also access the refreshed auth data from the authStore
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.record.id);
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${r[3]}');

        ...

        final authData = await pb.collection('${(He=r[0])==null?void 0:He.name}').authRefresh();

        // after the above you can also access the refreshed auth data from the authStore
        print(pb.authStore.isValid);
        print(pb.authStore.token);
        print(pb.authStore.record.id);
    `}}),R=new Ue({props:{content:"?expand=relField1,relField2.subRelField"}}),B=new et({props:{prefix:"record."}});let I=K(r[2]);const Ae=e=>e[5].code;for(let e=0;e<I.length;e+=1){let t=Ee(r,I,e),c=Ae(t);Re.set(c,S[e]=Je(c,t))}let O=K(r[2]);const De=e=>e[5].code;for(let e=0;e<O.length;e+=1){let t=ze(r,O,e),c=De(t);Me.set(c,$[e]=Ne(c,t))}return{c(){l=s("h3"),a=k("Обновление auth ("),m=k(n),_=k(")"),i=p(),h=s("div"),h.innerHTML=`<p>Возвращает новый auth‑ответ (token и данные записи) для
        <strong>уже аутентифицированной записи</strong>.</p> <p>Обычно этот метод вызывают при перезагрузке страницы/экрана, чтобы убедиться, что ранее сохранённые
        данные в <code>pb.authStore</code> всё ещё валидны и актуальны.</p>`,g=p(),X(v.$$.fragment),w=p(),A=s("h6"),A.textContent="Детали API",G=p(),y=s("div"),J=s("strong"),J.textContent="POST",ue=p(),N=s("div"),D=s("p"),pe=k("/api/collections/"),Y=s("strong"),x=k(U),he=k("/auth-refresh"),fe=p(),j=s("p"),j.innerHTML="Нужен заголовок <code>Authorization:TOKEN</code>",ee=p(),F=s("div"),F.textContent="Параметры запроса",te=p(),C=s("table"),oe=s("thead"),oe.innerHTML='<tr><th>Параметр</th> <th>Тип</th> <th width="60%">Описание</th></tr>',be=p(),H=s("tbody"),T=s("tr"),le=s("td"),le.textContent="expand",me=p(),ae=s("td"),ae.innerHTML='<span class="label">String</span>',_e=p(),f=s("td"),ke=k(`Автоматически раскрывает связи записи. Например:
                `),X(R.$$.fragment),ge=k(`
                Поддерживает вложенность до 6 уровней. `),ve=s("br"),$e=k(`
                Раскрытые связи будут добавлены к записи в поле
                `),se=s("code"),se.textContent="expand",Se=k(" property (eg. "),ne=s("code"),ne.textContent='"expand": {"relField1": {...}, ...}',ye=k(`).
                `),we=s("br"),Ce=k(`
                Будут раскрыты только те связи, на которые у пользователя запроса есть права `),re=s("strong"),re.textContent="view",Te=k("."),Pe=p(),X(B.$$.fragment),ie=p(),L=s("div"),L.textContent="Ответы",ce=p(),P=s("div"),V=s("div");for(let e=0;e<S.length;e+=1)S[e].c();Be=p(),q=s("div");for(let e=0;e<$.length;e+=1)$[e].c();b(l,"class","m-b-sm"),b(h,"class","content txt-lg m-b-sm"),b(A,"class","m-b-xs"),b(J,"class","label label-primary"),b(N,"class","content"),b(j,"class","txt-hint txt-sm txt-right"),b(y,"class","alert alert-success"),b(F,"class","section-title"),b(C,"class","table-compact table-border m-b-base"),b(L,"class","section-title"),b(V,"class","tabs-header compact combined left"),b(q,"class","tabs-content"),b(P,"class","tabs")},m(e,t){u(e,l,t),o(l,a),o(l,m),o(l,_),u(e,i,t),u(e,h,t),u(e,g,t),Q(v,e,t),u(e,w,t),u(e,A,t),u(e,G,t),u(e,y,t),o(y,J),o(y,ue),o(y,N),o(N,D),o(D,pe),o(D,Y),o(Y,x),o(D,he),o(y,fe),o(y,j),u(e,ee,t),u(e,F,t),u(e,te,t),u(e,C,t),o(C,oe),o(C,be),o(C,H),o(H,T),o(T,le),o(T,me),o(T,ae),o(T,_e),o(T,f),o(f,ke),Q(R,f,null),o(f,ge),o(f,ve),o(f,$e),o(f,se),o(f,Se),o(f,ne),o(f,ye),o(f,we),o(f,Ce),o(f,re),o(f,Te),o(H,Pe),Q(B,H,null),u(e,ie,t),u(e,L,t),u(e,ce,t),u(e,P,t),o(P,V);for(let c=0;c<S.length;c+=1)S[c]&&S[c].m(V,null);o(P,Be),o(P,q);for(let c=0;c<$.length;c+=1)$[c]&&$[c].m(q,null);M=!0},p(e,[t]){var Le,Ve;(!M||t&1)&&n!==(n=e[0].name+"")&&de(m,n);const c={};t&9&&(c.js=`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e[3]}');

        ...

        const authData = await pb.collection('${(Le=e[0])==null?void 0:Le.name}').authRefresh();

        // after the above you can also access the refreshed auth data from the authStore
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.record.id);
    `),t&9&&(c.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e[3]}');

        ...

        final authData = await pb.collection('${(Ve=e[0])==null?void 0:Ve.name}').authRefresh();

        // after the above you can also access the refreshed auth data from the authStore
        print(pb.authStore.isValid);
        print(pb.authStore.token);
        print(pb.authStore.record.id);
    `),v.$set(c),(!M||t&1)&&U!==(U=e[0].name+"")&&de(x,U),t&6&&(I=K(e[2]),S=qe(S,t,Ae,1,e,I,Re,V,Qe,Je,null,Ee)),t&6&&(O=K(e[2]),Xe(),$=qe($,t,De,1,e,O,Me,q,Ze,Ne,null,ze),Ge())},i(e){if(!M){E(v.$$.fragment,e),E(R.$$.fragment,e),E(B.$$.fragment,e);for(let t=0;t<O.length;t+=1)E($[t]);M=!0}},o(e){z(v.$$.fragment,e),z(R.$$.fragment,e),z(B.$$.fragment,e);for(let t=0;t<$.length;t+=1)z($[t]);M=!1},d(e){e&&(d(l),d(i),d(h),d(g),d(w),d(A),d(G),d(y),d(ee),d(F),d(te),d(C),d(ie),d(L),d(ce),d(P)),W(v,e),W(R),W(B);for(let t=0;t<S.length;t+=1)S[t].d();for(let t=0;t<$.length;t+=1)$[t].d()}}}function ot(r,l,a){let n,{collection:m}=l,_=200,i=[];const h=g=>a(1,_=g.code);return r.$$set=g=>{"collection"in g&&a(0,m=g.collection)},r.$$.update=()=>{r.$$.dirty&1&&a(2,i=[{code:200,body:JSON.stringify({token:"JWT_TOKEN",record:Oe.dummyCollectionRecord(m)},null,2)},{code:401,body:`
                {
                  "status": 401,
                  "message": "The request requires valid record authorization token to be set.",
                  "data": {}
                }
            `},{code:403,body:`
                {
                  "status": 403,
                  "message": "The authorized record model is not allowed to perform this action.",
                  "data": {}
                }
            `},{code:404,body:`
                {
                  "status": 404,
                  "message": "Missing auth record context.",
                  "data": {}
                }
            `}])},a(3,n=Oe.getApiExampleUrl(Ye.baseURL)),[m,_,i,n,h]}class st extends je{constructor(l){super(),Ie(this,l,ot,tt,Ke,{collection:0})}}export{st as default};
