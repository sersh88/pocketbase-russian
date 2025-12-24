import{S as Jt,i as Nt,s as Et,V as It,W as jt,X as z,h as r,d as K,t as j,a as J,I as pt,Z as Bt,_ as Zt,C as zt,$ as Kt,D as Qt,l as c,n as a,m as Q,u as s,A as _,v as h,c as X,w as p,J as Lt,p as Xt,k as G,o as Gt}from"./index-BozUHKR0.js";import{F as Yt}from"./FieldsQueryParam-BRUGZH-z.js";function qt(n,l,o){const i=n.slice();return i[5]=l[o],i}function Ft(n,l,o){const i=n.slice();return i[5]=l[o],i}function Ht(n,l){let o,i=l[5].code+"",f,g,d,b;function k(){return l[4](l[5])}return{key:n,first:null,c(){o=s("button"),f=_(i),g=h(),p(o,"class","tab-item"),G(o,"active",l[1]===l[5].code),this.first=o},m(v,A){c(v,o,A),a(o,f),a(o,g),d||(b=Gt(o,"click",k),d=!0)},p(v,A){l=v,A&4&&i!==(i=l[5].code+"")&&pt(f,i),A&6&&G(o,"active",l[1]===l[5].code)},d(v){v&&r(o),d=!1,b()}}}function Vt(n,l){let o,i,f,g;return i=new jt({props:{content:l[5].body}}),{key:n,first:null,c(){o=s("div"),X(i.$$.fragment),f=h(),p(o,"class","tab-item"),G(o,"active",l[1]===l[5].code),this.first=o},m(d,b){c(d,o,b),Q(i,o,null),a(o,f),g=!0},p(d,b){l=d;const k={};b&4&&(k.content=l[5].body),i.$set(k),(!g||b&6)&&G(o,"active",l[1]===l[5].code)},i(d){g||(J(i.$$.fragment,d),g=!0)},o(d){j(i.$$.fragment,d),g=!1},d(d){d&&r(o),K(i)}}}function xt(n){let l,o,i=n[0].name+"",f,g,d,b,k,v,A,W,Y,O,N,bt,E,P,mt,x,I=n[0].name+"",tt,ft,et,R,at,U,lt,B,ot,S,st,gt,L,y,nt,_t,it,kt,m,vt,D,$t,wt,At,rt,Ot,ct,St,yt,Ct,dt,Dt,Tt,T,ut,q,ht,C,F,w=[],Mt=new Map,Wt,H,$=[],Pt=new Map,M;v=new It({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${n[3]}');

        ...

        // OAuth2 authentication with a single realtime call.
        //
        // Make sure to register ${n[3]}/api/oauth2-redirect as redirect url.
        const authData = await pb.collection('${n[0].name}').authWithOAuth2({ provider: 'google' });

        // OR authenticate with manual OAuth2 code exchange
        // const authData = await pb.collection('${n[0].name}').authWithOAuth2Code(...);

        // after the above you can also access the auth data from the authStore
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';
        import 'package:url_launcher/url_launcher.dart';

        final pb = PocketBase('${n[3]}');

        ...

        // OAuth2 authentication with a single realtime call.
        //
        // Make sure to register ${n[3]}/api/oauth2-redirect as redirect url.
        final authData = await pb.collection('${n[0].name}').authWithOAuth2('google', (url) async {
          await launchUrl(url);
        });

        // OR authenticate with manual OAuth2 code exchange
        // final authData = await pb.collection('${n[0].name}').authWithOAuth2Code(...);

        // after the above you can also access the auth data from the authStore
        print(pb.authStore.isValid);
        print(pb.authStore.token);
        print(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `}}),D=new jt({props:{content:"?expand=relField1,relField2.subRelField"}}),T=new Yt({props:{prefix:"record."}});let Z=z(n[2]);const Rt=t=>t[5].code;for(let t=0;t<Z.length;t+=1){let e=Ft(n,Z,t),u=Rt(e);Mt.set(u,w[t]=Ht(u,e))}let V=z(n[2]);const Ut=t=>t[5].code;for(let t=0;t<V.length;t+=1){let e=qt(n,V,t),u=Ut(e);Pt.set(u,$[t]=Vt(u,e))}return{c(){l=s("h3"),o=_("Вход через OAuth2 ("),f=_(i),g=_(")"),d=h(),b=s("div"),b.innerHTML=`<p>Аутентификация через OAuth2‑провайдера. Возвращает новый auth‑токен и данные записи.</p> <p>Подробности смотри в
        <a href="https://pocketbase.io/docs/authentication#authenticate-with-oauth2" target="_blank" rel="noopener noreferrer">документации по интеграции OAuth2
        </a>.</p>`,k=h(),X(v.$$.fragment),A=h(),W=s("h6"),W.textContent="Детали API",Y=h(),O=s("div"),N=s("strong"),N.textContent="POST",bt=h(),E=s("div"),P=s("p"),mt=_("/api/collections/"),x=s("strong"),tt=_(I),ft=_("/auth-with-oauth2"),et=h(),R=s("div"),R.textContent="Параметры тела",at=h(),U=s("table"),U.innerHTML=`<thead><tr><th>Параметр</th> <th>Тип</th> <th width="50%">Описание</th></tr></thead> <tbody><tr><td><div class="inline-flex"><span class="label label-success">Обязательно</span> <span>provider</span></div></td> <td><span class="label">String</span></td> <td>Имя OAuth2‑провайдера (например, &quot;google&quot;).</td></tr> <tr><td><div class="inline-flex"><span class="label label-success">Обязательно</span> <span>code</span></div></td> <td><span class="label">String</span></td> <td>Authorization code, который вернулся из первого запроса.</td></tr> <tr><td><div class="inline-flex"><span class="label label-success">Обязательно</span> <span>codeVerifier</span></div></td> <td><span class="label">String</span></td> <td>code verifier, который отправлялся в первом запросе как часть code_challenge.</td></tr> <tr><td><div class="inline-flex"><span class="label label-success">Обязательно</span> <span>redirectURL</span></div></td> <td><span class="label">String</span></td> <td>redirect url, который отправлялся в первом запросе.</td></tr> <tr><td><div class="inline-flex"><span class="label label-warning">Опционально</span> <span>createData</span></div></td> <td><span class="label">Object</span></td> <td><p>Опциональные данные, которые будут использованы при создании auth‑записи при OAuth2 sign‑up.</p> <p>Созданная auth‑запись должна проходить те же требования и валидации, что и в обычном
                    <strong>create</strong>.
                    <br/> <em>Данные могут быть только в <code>json</code>, то есть <code>multipart/form-data</code> и
                        загрузка файлов сейчас не поддерживаются во время OAuth2 sign‑up.</em></p></td></tr></tbody>`,lt=h(),B=s("div"),B.textContent="Параметры запроса",ot=h(),S=s("table"),st=s("thead"),st.innerHTML='<tr><th>Параметр</th> <th>Тип</th> <th width="60%">Описание</th></tr>',gt=h(),L=s("tbody"),y=s("tr"),nt=s("td"),nt.textContent="expand",_t=h(),it=s("td"),it.innerHTML='<span class="label">String</span>',kt=h(),m=s("td"),vt=_(`Автоматически раскрывает связи записи. Например:
                `),X(D.$$.fragment),$t=_(`
                Поддерживает вложенность до 6 уровней. `),wt=s("br"),At=_(`
                Раскрытые связи будут добавлены к записи в поле
                `),rt=s("code"),rt.textContent="expand",Ot=_(" property (eg. "),ct=s("code"),ct.textContent='"expand": {"relField1": {...}, ...}',St=_(`).
                `),yt=s("br"),Ct=_(`
                Будут раскрыты только те связи, на которые у пользователя запроса есть права `),dt=s("strong"),dt.textContent="view",Dt=_("."),Tt=h(),X(T.$$.fragment),ut=h(),q=s("div"),q.textContent="Ответы",ht=h(),C=s("div"),F=s("div");for(let t=0;t<w.length;t+=1)w[t].c();Wt=h(),H=s("div");for(let t=0;t<$.length;t+=1)$[t].c();p(l,"class","m-b-sm"),p(b,"class","content txt-lg m-b-sm"),p(W,"class","m-b-xs"),p(N,"class","label label-primary"),p(E,"class","content"),p(O,"class","alert alert-success"),p(R,"class","section-title"),p(U,"class","table-compact table-border m-b-base"),p(B,"class","section-title"),p(S,"class","table-compact table-border m-b-base"),p(q,"class","section-title"),p(F,"class","tabs-header compact combined left"),p(H,"class","tabs-content"),p(C,"class","tabs")},m(t,e){c(t,l,e),a(l,o),a(l,f),a(l,g),c(t,d,e),c(t,b,e),c(t,k,e),Q(v,t,e),c(t,A,e),c(t,W,e),c(t,Y,e),c(t,O,e),a(O,N),a(O,bt),a(O,E),a(E,P),a(P,mt),a(P,x),a(x,tt),a(P,ft),c(t,et,e),c(t,R,e),c(t,at,e),c(t,U,e),c(t,lt,e),c(t,B,e),c(t,ot,e),c(t,S,e),a(S,st),a(S,gt),a(S,L),a(L,y),a(y,nt),a(y,_t),a(y,it),a(y,kt),a(y,m),a(m,vt),Q(D,m,null),a(m,$t),a(m,wt),a(m,At),a(m,rt),a(m,Ot),a(m,ct),a(m,St),a(m,yt),a(m,Ct),a(m,dt),a(m,Dt),a(L,Tt),Q(T,L,null),c(t,ut,e),c(t,q,e),c(t,ht,e),c(t,C,e),a(C,F);for(let u=0;u<w.length;u+=1)w[u]&&w[u].m(F,null);a(C,Wt),a(C,H);for(let u=0;u<$.length;u+=1)$[u]&&$[u].m(H,null);M=!0},p(t,[e]){(!M||e&1)&&i!==(i=t[0].name+"")&&pt(f,i);const u={};e&9&&(u.js=`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${t[3]}');

        ...

        // OAuth2 authentication with a single realtime call.
        //
        // Make sure to register ${t[3]}/api/oauth2-redirect as redirect url.
        const authData = await pb.collection('${t[0].name}').authWithOAuth2({ provider: 'google' });

        // OR authenticate with manual OAuth2 code exchange
        // const authData = await pb.collection('${t[0].name}').authWithOAuth2Code(...);

        // after the above you can also access the auth data from the authStore
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `),e&9&&(u.dart=`
        import 'package:pocketbase/pocketbase.dart';
        import 'package:url_launcher/url_launcher.dart';

        final pb = PocketBase('${t[3]}');

        ...

        // OAuth2 authentication with a single realtime call.
        //
        // Make sure to register ${t[3]}/api/oauth2-redirect as redirect url.
        final authData = await pb.collection('${t[0].name}').authWithOAuth2('google', (url) async {
          await launchUrl(url);
        });

        // OR authenticate with manual OAuth2 code exchange
        // final authData = await pb.collection('${t[0].name}').authWithOAuth2Code(...);

        // after the above you can also access the auth data from the authStore
        print(pb.authStore.isValid);
        print(pb.authStore.token);
        print(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `),v.$set(u),(!M||e&1)&&I!==(I=t[0].name+"")&&pt(tt,I),e&6&&(Z=z(t[2]),w=Bt(w,e,Rt,1,t,Z,Mt,F,Zt,Ht,null,Ft)),e&6&&(V=z(t[2]),zt(),$=Bt($,e,Ut,1,t,V,Pt,H,Kt,Vt,null,qt),Qt())},i(t){if(!M){J(v.$$.fragment,t),J(D.$$.fragment,t),J(T.$$.fragment,t);for(let e=0;e<V.length;e+=1)J($[e]);M=!0}},o(t){j(v.$$.fragment,t),j(D.$$.fragment,t),j(T.$$.fragment,t);for(let e=0;e<$.length;e+=1)j($[e]);M=!1},d(t){t&&(r(l),r(d),r(b),r(k),r(A),r(W),r(Y),r(O),r(et),r(R),r(at),r(U),r(lt),r(B),r(ot),r(S),r(ut),r(q),r(ht),r(C)),K(v,t),K(D),K(T);for(let e=0;e<w.length;e+=1)w[e].d();for(let e=0;e<$.length;e+=1)$[e].d()}}}function te(n,l,o){let i,{collection:f}=l,g=200,d=[];const b=k=>o(1,g=k.code);return n.$$set=k=>{"collection"in k&&o(0,f=k.collection)},n.$$.update=()=>{n.$$.dirty&1&&o(2,d=[{code:200,body:JSON.stringify({token:"JWT_AUTH_TOKEN",record:Lt.dummyCollectionRecord(f),meta:{id:"abc123",name:"John Doe",username:"john.doe",email:"test@example.com",avatarURL:"https://example.com/avatar.png",accessToken:"...",refreshToken:"...",expiry:"2022-01-01 10:00:00.123Z",isNew:!1,rawUser:{}}},null,2)},{code:400,body:`
                {
                  "status": 400,
                  "message": "An error occurred while submitting the form.",
                  "data": {
                    "provider": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
                }
            `}])},o(3,i=Lt.getApiExampleUrl(Xt.baseURL)),[f,g,d,i,b]}class le extends Jt{constructor(l){super(),Nt(this,l,te,xt,Et,{collection:0})}}export{le as default};
