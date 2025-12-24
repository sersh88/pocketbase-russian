import{S as be,i as _e,s as ve,W as ge,X as V,h as b,d as x,t as j,a as J,I as ce,Z as de,_ as je,C as ue,$ as Ke,D as he,l as _,n as s,m as ee,u as d,v as T,A as I,c as te,w as g,J as ke,k as E,o as $e,V as Qe,Y as Me,p as Xe,a0 as De}from"./index-BozUHKR0.js";import{F as Ze}from"./FieldsQueryParam-BRUGZH-z.js";function We(a,t,e){const l=a.slice();return l[4]=t[e],l}function Be(a,t,e){const l=a.slice();return l[4]=t[e],l}function Re(a,t){let e,l=t[4].code+"",h,i,c,n;function m(){return t[3](t[4])}return{key:a,first:null,c(){e=d("button"),h=I(l),i=T(),g(e,"class","tab-item"),E(e,"active",t[1]===t[4].code),this.first=e},m(v,C){_(v,e,C),s(e,h),s(e,i),c||(n=$e(e,"click",m),c=!0)},p(v,C){t=v,C&4&&l!==(l=t[4].code+"")&&ce(h,l),C&6&&E(e,"active",t[1]===t[4].code)},d(v){v&&b(e),c=!1,n()}}}function Fe(a,t){let e,l,h,i;return l=new ge({props:{content:t[4].body}}),{key:a,first:null,c(){e=d("div"),te(l.$$.fragment),h=T(),g(e,"class","tab-item"),E(e,"active",t[1]===t[4].code),this.first=e},m(c,n){_(c,e,n),ee(l,e,null),s(e,h),i=!0},p(c,n){t=c;const m={};n&4&&(m.content=t[4].body),l.$set(m),(!i||n&6)&&E(e,"active",t[1]===t[4].code)},i(c){i||(J(l.$$.fragment,c),i=!0)},o(c){j(l.$$.fragment,c),i=!1},d(c){c&&b(e),x(l)}}}function ze(a){let t,e,l,h,i,c,n,m=a[0].name+"",v,C,F,W,B,M,K,D,U,S,P,q,k,L,Y,A,X,N,o,$,O,z,u,p,y,w,Z,we,Te,Oe,pe,Pe,Se,le,fe,oe,me,G,ae,Q=[],ye=new Map,qe,ne,H=[],Ce=new Map,se;O=new ge({props:{content:"?expand=relField1,relField2.subRelField"}}),le=new Ze({props:{prefix:"record."}});let re=V(a[2]);const Ae=r=>r[4].code;for(let r=0;r<re.length;r+=1){let f=Be(a,re,r),R=Ae(f);ye.set(R,Q[r]=Re(R,f))}let ie=V(a[2]);const Ie=r=>r[4].code;for(let r=0;r<ie.length;r+=1){let f=We(a,ie,r),R=Ie(f);Ce.set(R,H[r]=Fe(R,f))}return{c(){t=d("div"),e=d("strong"),e.textContent="POST",l=T(),h=d("div"),i=d("p"),c=I("/api/collections/"),n=d("strong"),v=I(m),C=I("/auth-with-otp"),F=T(),W=d("div"),W.textContent="Параметры тела",B=T(),M=d("table"),M.innerHTML='<thead><tr><th>Параметр</th> <th>Тип</th> <th width="50%">Описание</th></tr></thead> <tbody><tr><td><div class="inline-flex"><span class="label label-success">Обязательно</span> <span>otpId</span></div></td> <td><span class="label">String</span></td> <td>ID OTP‑запроса.</td></tr> <tr><td><div class="inline-flex"><span class="label label-success">Обязательно</span> <span>password</span></div></td> <td><span class="label">String</span></td> <td>Одноразовый пароль.</td></tr></tbody>',K=T(),D=d("div"),D.textContent="Параметры запроса",U=T(),S=d("table"),P=d("thead"),P.innerHTML='<tr><th>Параметр</th> <th>Тип</th> <th width="60%">Описание</th></tr>',q=T(),k=d("tbody"),L=d("tr"),Y=d("td"),Y.textContent="expand",A=T(),X=d("td"),X.innerHTML='<span class="label">String</span>',N=T(),o=d("td"),$=I(`Автоматически раскрывает связи записи. Например:
                `),te(O.$$.fragment),z=I(`
                Поддерживает вложенность до 6 уровней. `),u=d("br"),p=I(`
                Раскрытые связи будут добавлены к записи в поле
                `),y=d("code"),y.textContent="expand",w=I(" property (eg. "),Z=d("code"),Z.textContent='"expand": {"relField1": {...}, ...}',we=I(`).
                `),Te=d("br"),Oe=I(`
                Будут раскрыты только те связи, на которые у пользователя запроса есть права `),pe=d("strong"),pe.textContent="view",Pe=I("."),Se=T(),te(le.$$.fragment),fe=T(),oe=d("div"),oe.textContent="Ответы",me=T(),G=d("div"),ae=d("div");for(let r=0;r<Q.length;r+=1)Q[r].c();qe=T(),ne=d("div");for(let r=0;r<H.length;r+=1)H[r].c();g(e,"class","label label-primary"),g(h,"class","content"),g(t,"class","alert alert-success"),g(W,"class","section-title"),g(M,"class","table-compact table-border m-b-base"),g(D,"class","section-title"),g(S,"class","table-compact table-border m-b-base"),g(oe,"class","section-title"),g(ae,"class","tabs-header compact combined left"),g(ne,"class","tabs-content"),g(G,"class","tabs")},m(r,f){_(r,t,f),s(t,e),s(t,l),s(t,h),s(h,i),s(i,c),s(i,n),s(n,v),s(i,C),_(r,F,f),_(r,W,f),_(r,B,f),_(r,M,f),_(r,K,f),_(r,D,f),_(r,U,f),_(r,S,f),s(S,P),s(S,q),s(S,k),s(k,L),s(L,Y),s(L,A),s(L,X),s(L,N),s(L,o),s(o,$),ee(O,o,null),s(o,z),s(o,u),s(o,p),s(o,y),s(o,w),s(o,Z),s(o,we),s(o,Te),s(o,Oe),s(o,pe),s(o,Pe),s(k,Se),ee(le,k,null),_(r,fe,f),_(r,oe,f),_(r,me,f),_(r,G,f),s(G,ae);for(let R=0;R<Q.length;R+=1)Q[R]&&Q[R].m(ae,null);s(G,qe),s(G,ne);for(let R=0;R<H.length;R+=1)H[R]&&H[R].m(ne,null);se=!0},p(r,[f]){(!se||f&1)&&m!==(m=r[0].name+"")&&ce(v,m),f&6&&(re=V(r[2]),Q=de(Q,f,Ae,1,r,re,ye,ae,je,Re,null,Be)),f&6&&(ie=V(r[2]),ue(),H=de(H,f,Ie,1,r,ie,Ce,ne,Ke,Fe,null,We),he())},i(r){if(!se){J(O.$$.fragment,r),J(le.$$.fragment,r);for(let f=0;f<ie.length;f+=1)J(H[f]);se=!0}},o(r){j(O.$$.fragment,r),j(le.$$.fragment,r);for(let f=0;f<H.length;f+=1)j(H[f]);se=!1},d(r){r&&(b(t),b(F),b(W),b(B),b(M),b(K),b(D),b(U),b(S),b(fe),b(oe),b(me),b(G)),x(O),x(le);for(let f=0;f<Q.length;f+=1)Q[f].d();for(let f=0;f<H.length;f+=1)H[f].d()}}}function Ge(a,t,e){let{collection:l}=t,h=200,i=[];const c=n=>e(1,h=n.code);return a.$$set=n=>{"collection"in n&&e(0,l=n.collection)},a.$$.update=()=>{a.$$.dirty&1&&e(2,i=[{code:200,body:JSON.stringify({token:"JWT_TOKEN",record:ke.dummyCollectionRecord(l)},null,2)},{code:400,body:`
                {
                  "status": 400,
                  "message": "Failed to authenticate.",
                  "data": {
                    "otpId": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
                }
            `}])},[l,h,i,c]}class xe extends be{constructor(t){super(),_e(this,t,Ge,ze,ve,{collection:0})}}function Ue(a,t,e){const l=a.slice();return l[4]=t[e],l}function He(a,t,e){const l=a.slice();return l[4]=t[e],l}function Le(a,t){let e,l=t[4].code+"",h,i,c,n;function m(){return t[3](t[4])}return{key:a,first:null,c(){e=d("button"),h=I(l),i=T(),g(e,"class","tab-item"),E(e,"active",t[1]===t[4].code),this.first=e},m(v,C){_(v,e,C),s(e,h),s(e,i),c||(n=$e(e,"click",m),c=!0)},p(v,C){t=v,C&4&&l!==(l=t[4].code+"")&&ce(h,l),C&6&&E(e,"active",t[1]===t[4].code)},d(v){v&&b(e),c=!1,n()}}}function Ye(a,t){let e,l,h,i;return l=new ge({props:{content:t[4].body}}),{key:a,first:null,c(){e=d("div"),te(l.$$.fragment),h=T(),g(e,"class","tab-item"),E(e,"active",t[1]===t[4].code),this.first=e},m(c,n){_(c,e,n),ee(l,e,null),s(e,h),i=!0},p(c,n){t=c;const m={};n&4&&(m.content=t[4].body),l.$set(m),(!i||n&6)&&E(e,"active",t[1]===t[4].code)},i(c){i||(J(l.$$.fragment,c),i=!0)},o(c){j(l.$$.fragment,c),i=!1},d(c){c&&b(e),x(l)}}}function et(a){let t,e,l,h,i,c,n,m=a[0].name+"",v,C,F,W,B,M,K,D,U,S,P,q=[],k=new Map,L,Y,A=[],X=new Map,N,o=V(a[2]);const $=u=>u[4].code;for(let u=0;u<o.length;u+=1){let p=He(a,o,u),y=$(p);k.set(y,q[u]=Le(y,p))}let O=V(a[2]);const z=u=>u[4].code;for(let u=0;u<O.length;u+=1){let p=Ue(a,O,u),y=z(p);X.set(y,A[u]=Ye(y,p))}return{c(){t=d("div"),e=d("strong"),e.textContent="POST",l=T(),h=d("div"),i=d("p"),c=I("/api/collections/"),n=d("strong"),v=I(m),C=I("/request-otp"),F=T(),W=d("div"),W.textContent="Параметры тела",B=T(),M=d("table"),M.innerHTML='<thead><tr><th>Параметр</th> <th>Тип</th> <th width="50%">Описание</th></tr></thead> <tbody><tr><td><div class="inline-flex"><span class="label label-success">Обязательно</span> <span>email</span></div></td> <td><span class="label">String</span></td> <td>Email auth‑записи, на который отправить OTP (если запись существует).</td></tr></tbody>',K=T(),D=d("div"),D.textContent="Ответы",U=T(),S=d("div"),P=d("div");for(let u=0;u<q.length;u+=1)q[u].c();L=T(),Y=d("div");for(let u=0;u<A.length;u+=1)A[u].c();g(e,"class","label label-primary"),g(h,"class","content"),g(t,"class","alert alert-success"),g(W,"class","section-title"),g(M,"class","table-compact table-border m-b-base"),g(D,"class","section-title"),g(P,"class","tabs-header compact combined left"),g(Y,"class","tabs-content"),g(S,"class","tabs")},m(u,p){_(u,t,p),s(t,e),s(t,l),s(t,h),s(h,i),s(i,c),s(i,n),s(n,v),s(i,C),_(u,F,p),_(u,W,p),_(u,B,p),_(u,M,p),_(u,K,p),_(u,D,p),_(u,U,p),_(u,S,p),s(S,P);for(let y=0;y<q.length;y+=1)q[y]&&q[y].m(P,null);s(S,L),s(S,Y);for(let y=0;y<A.length;y+=1)A[y]&&A[y].m(Y,null);N=!0},p(u,[p]){(!N||p&1)&&m!==(m=u[0].name+"")&&ce(v,m),p&6&&(o=V(u[2]),q=de(q,p,$,1,u,o,k,P,je,Le,null,He)),p&6&&(O=V(u[2]),ue(),A=de(A,p,z,1,u,O,X,Y,Ke,Ye,null,Ue),he())},i(u){if(!N){for(let p=0;p<O.length;p+=1)J(A[p]);N=!0}},o(u){for(let p=0;p<A.length;p+=1)j(A[p]);N=!1},d(u){u&&(b(t),b(F),b(W),b(B),b(M),b(K),b(D),b(U),b(S));for(let p=0;p<q.length;p+=1)q[p].d();for(let p=0;p<A.length;p+=1)A[p].d()}}}function tt(a,t,e){let{collection:l}=t,h=200,i=[];const c=n=>e(1,h=n.code);return a.$$set=n=>{"collection"in n&&e(0,l=n.collection)},e(2,i=[{code:200,body:JSON.stringify({otpId:ke.randomString(15)},null,2)},{code:400,body:`
                {
                  "status": 400,
                  "message": "An error occurred while validating the submitted data.",
                  "data": {
                    "email": {
                      "code": "validation_is_email",
                      "message": "Must be a valid email address."
                    }
                  }
                }
            `},{code:429,body:`
                {
                  "status": 429,
                  "message": "You've send too many OTP requests, please try again later.",
                  "data": {}
                }
            `}]),[l,h,i,c]}class lt extends be{constructor(t){super(),_e(this,t,tt,et,ve,{collection:0})}}function Ve(a,t,e){const l=a.slice();return l[5]=t[e],l[7]=e,l}function Je(a,t,e){const l=a.slice();return l[5]=t[e],l[7]=e,l}function Ee(a){let t,e,l,h,i;function c(){return a[4](a[7])}return{c(){t=d("button"),e=d("div"),e.textContent=`${a[5].title}`,l=T(),g(e,"class","txt"),g(t,"class","tab-item"),E(t,"active",a[1]==a[7])},m(n,m){_(n,t,m),s(t,e),s(t,l),h||(i=$e(t,"click",c),h=!0)},p(n,m){a=n,m&2&&E(t,"active",a[1]==a[7])},d(n){n&&b(t),h=!1,i()}}}function Ne(a){let t,e,l,h;var i=a[5].component;function c(n,m){return{props:{collection:n[0]}}}return i&&(e=De(i,c(a))),{c(){t=d("div"),e&&te(e.$$.fragment),l=T(),g(t,"class","tab-item"),E(t,"active",a[1]==a[7])},m(n,m){_(n,t,m),e&&ee(e,t,null),s(t,l),h=!0},p(n,m){if(i!==(i=n[5].component)){if(e){ue();const v=e;j(v.$$.fragment,1,0,()=>{x(v,1)}),he()}i?(e=De(i,c(n)),te(e.$$.fragment),J(e.$$.fragment,1),ee(e,t,l)):e=null}else if(i){const v={};m&1&&(v.collection=n[0]),e.$set(v)}(!h||m&2)&&E(t,"active",n[1]==n[7])},i(n){h||(e&&J(e.$$.fragment,n),h=!0)},o(n){e&&j(e.$$.fragment,n),h=!1},d(n){n&&b(t),e&&x(e)}}}function ot(a){var Y,A,X,N;let t,e,l=a[0].name+"",h,i,c,n,m,v,C,F,W,B,M,K,D,U;v=new Qe({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${a[2]}');

        ...

        // send OTP email to the provided auth record
        const req = await pb.collection('${(Y=a[0])==null?void 0:Y.name}').requestOTP('test@example.com');

        // ... show a screen/popup to enter the password from the email ...

        // authenticate with the requested OTP id and the email password
        const authData = await pb.collection('${(A=a[0])==null?void 0:A.name}').authWithOTP(
            req.otpId,
            "YOUR_OTP",
        );

        // after the above you can also access the auth data from the authStore
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${a[2]}');

        ...

        // send OTP email to the provided auth record
        final req = await pb.collection('${(X=a[0])==null?void 0:X.name}').requestOTP('test@example.com');

        // ... show a screen/popup to enter the password from the email ...

        // authenticate with the requested OTP id and the email password
        final authData = await pb.collection('${(N=a[0])==null?void 0:N.name}').authWithOTP(
            req.otpId,
            "YOUR_OTP",
        );

        // after the above you can also access the auth data from the authStore
        print(pb.authStore.isValid);
        print(pb.authStore.token);
        print(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `}});let S=V(a[3]),P=[];for(let o=0;o<S.length;o+=1)P[o]=Ee(Je(a,S,o));let q=V(a[3]),k=[];for(let o=0;o<q.length;o+=1)k[o]=Ne(Ve(a,q,o));const L=o=>j(k[o],1,1,()=>{k[o]=null});return{c(){t=d("h3"),e=I("Вход через OTP ("),h=I(l),i=I(")"),c=T(),n=d("div"),n.innerHTML=`<p>Аутентификация через одноразовый пароль (OTP).</p> <p>Учти: при запросе OTP мы возвращаем <code>otpId</code> даже если пользователя с таким email не существует
        — это базовая защита от перечисления аккаунтов.</p>`,m=T(),te(v.$$.fragment),C=T(),F=d("h6"),F.textContent="Детали API",W=T(),B=d("div"),M=d("div");for(let o=0;o<P.length;o+=1)P[o].c();K=T(),D=d("div");for(let o=0;o<k.length;o+=1)k[o].c();g(t,"class","m-b-sm"),g(n,"class","content txt-lg m-b-sm"),g(F,"class","m-b-xs"),g(M,"class","tabs-header compact"),g(D,"class","tabs-content"),g(B,"class","tabs")},m(o,$){_(o,t,$),s(t,e),s(t,h),s(t,i),_(o,c,$),_(o,n,$),_(o,m,$),ee(v,o,$),_(o,C,$),_(o,F,$),_(o,W,$),_(o,B,$),s(B,M);for(let O=0;O<P.length;O+=1)P[O]&&P[O].m(M,null);s(B,K),s(B,D);for(let O=0;O<k.length;O+=1)k[O]&&k[O].m(D,null);U=!0},p(o,[$]){var z,u,p,y;(!U||$&1)&&l!==(l=o[0].name+"")&&ce(h,l);const O={};if($&5&&(O.js=`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${o[2]}');

        ...

        // send OTP email to the provided auth record
        const req = await pb.collection('${(z=o[0])==null?void 0:z.name}').requestOTP('test@example.com');

        // ... show a screen/popup to enter the password from the email ...

        // authenticate with the requested OTP id and the email password
        const authData = await pb.collection('${(u=o[0])==null?void 0:u.name}').authWithOTP(
            req.otpId,
            "YOUR_OTP",
        );

        // after the above you can also access the auth data from the authStore
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `),$&5&&(O.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${o[2]}');

        ...

        // send OTP email to the provided auth record
        final req = await pb.collection('${(p=o[0])==null?void 0:p.name}').requestOTP('test@example.com');

        // ... show a screen/popup to enter the password from the email ...

        // authenticate with the requested OTP id and the email password
        final authData = await pb.collection('${(y=o[0])==null?void 0:y.name}').authWithOTP(
            req.otpId,
            "YOUR_OTP",
        );

        // after the above you can also access the auth data from the authStore
        print(pb.authStore.isValid);
        print(pb.authStore.token);
        print(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `),v.$set(O),$&10){S=V(o[3]);let w;for(w=0;w<S.length;w+=1){const Z=Je(o,S,w);P[w]?P[w].p(Z,$):(P[w]=Ee(Z),P[w].c(),P[w].m(M,null))}for(;w<P.length;w+=1)P[w].d(1);P.length=S.length}if($&11){q=V(o[3]);let w;for(w=0;w<q.length;w+=1){const Z=Ve(o,q,w);k[w]?(k[w].p(Z,$),J(k[w],1)):(k[w]=Ne(Z),k[w].c(),J(k[w],1),k[w].m(D,null))}for(ue(),w=q.length;w<k.length;w+=1)L(w);he()}},i(o){if(!U){J(v.$$.fragment,o);for(let $=0;$<q.length;$+=1)J(k[$]);U=!0}},o(o){j(v.$$.fragment,o),k=k.filter(Boolean);for(let $=0;$<k.length;$+=1)j(k[$]);U=!1},d(o){o&&(b(t),b(c),b(n),b(m),b(C),b(F),b(W),b(B)),x(v,o),Me(P,o),Me(k,o)}}}function at(a,t,e){let l,{collection:h}=t;const i=[{title:"Запрос OTP",component:lt},{title:"Вход по OTP",component:xe}];let c=0;const n=m=>e(1,c=m);return a.$$set=m=>{"collection"in m&&e(0,h=m.collection)},e(2,l=ke.getApiExampleUrl(Xe.baseURL)),[h,c,l,i,n]}class it extends be{constructor(t){super(),_e(this,t,at,ot,ve,{collection:0})}}export{it as default};
