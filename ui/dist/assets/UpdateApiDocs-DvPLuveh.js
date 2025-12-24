import{S as Tt,i as Mt,s as St,V as Ht,X as ae,W as $t,h as o,d as ge,t as me,a as ke,I as ee,Z as Ve,_ as bt,C as Lt,$ as Pt,D as Rt,l as r,n as i,m as we,u as a,A as k,v as u,c as Ce,w as h,J as ye,p as Ot,k as $e,o as Dt,H as te}from"./index-BozUHKR0.js";import{F as Ft}from"./FieldsQueryParam-BRUGZH-z.js";function _t(d,e,t){const n=d.slice();return n[10]=e[t],n}function mt(d,e,t){const n=d.slice();return n[10]=e[t],n}function kt(d,e,t){const n=d.slice();return n[15]=e[t],n}function yt(d){let e;return{c(){e=a("p"),e.innerHTML=`<em>Учти: при смене пароля все ранее выданные токены для текущей записи будут автоматически
                инвалидированы. Если хочешь, чтобы пользователь остался залогинен — после update придётся
                переавторизоваться вручную.</em>`},m(t,n){r(t,e,n)},d(t){t&&o(e)}}}function ht(d){let e;return{c(){e=a("p"),e.innerHTML="Нужен заголовок суперпользователя <code>Authorization:TOKEN</code>",h(e,"class","txt-hint txt-sm txt-right")},m(t,n){r(t,e,n)},d(t){t&&o(e)}}}function vt(d){let e,t,n,f,p,b,c,_,S,$,R,O,T,M,L,D,V,N,H,P,F,v,g,w;function z(m,C){var le,Q,ne;return C&1&&(_=null),_==null&&(_=!!((ne=(Q=(le=m[0])==null?void 0:le.fields)==null?void 0:Q.find(Wt))!=null&&ne.required)),_?Bt:qt}let K=z(d,-1),B=K(d);return{c(){e=a("tr"),e.innerHTML='<td colspan="3" class="txt-hint txt-bold">Поля, специфичные для auth</td>',t=u(),n=a("tr"),n.innerHTML=`<td><div class="inline-flex"><span class="label label-warning">Опционально</span> <span>email</span></div></td> <td><span class="label">String</span></td> <td>Email адрес auth‑записи.
                    <br/>
                    Это поле могут менять только суперпользователи или auth‑записи с доступом “Manage”.
                    <br/>
                    Обычные аккаунты могут менять email через “Request email change”.</td>`,f=u(),p=a("tr"),b=a("td"),c=a("div"),B.c(),S=u(),$=a("span"),$.textContent="emailVisibility",R=u(),O=a("td"),O.innerHTML='<span class="label">Boolean</span>',T=u(),M=a("td"),M.textContent="Показывать/скрывать email auth‑записи при получении данных записи.",L=u(),D=a("tr"),D.innerHTML=`<td><div class="inline-flex"><span class="label label-warning">Опционально</span> <span>oldPassword</span></div></td> <td><span class="label">String</span></td> <td>Старый пароль auth‑записи.
                    <br/>
                    Это поле нужно только при смене пароля. Суперпользователи и auth‑записи с доступом “Manage”
                    могут пропустить это поле.</td>`,V=u(),N=a("tr"),N.innerHTML='<td><div class="inline-flex"><span class="label label-warning">Опционально</span> <span>password</span></div></td> <td><span class="label">String</span></td> <td>Новый пароль auth‑записи.</td>',H=u(),P=a("tr"),P.innerHTML='<td><div class="inline-flex"><span class="label label-warning">Опционально</span> <span>passwordConfirm</span></div></td> <td><span class="label">String</span></td> <td>Подтверждение нового пароля auth‑записи.</td>',F=u(),v=a("tr"),v.innerHTML=`<td><div class="inline-flex"><span class="label label-warning">Опционально</span> <span>verified</span></div></td> <td><span class="label">Boolean</span></td> <td>Показывает, подтверждена auth‑запись или нет.
                    <br/>
                    Это поле могут менять только суперпользователи или auth‑записи с доступом “Manage”.</td>`,g=u(),w=a("tr"),w.innerHTML='<td colspan="3" class="txt-hint txt-bold">Остальные поля</td>',h(c,"class","inline-flex")},m(m,C){r(m,e,C),r(m,t,C),r(m,n,C),r(m,f,C),r(m,p,C),i(p,b),i(b,c),B.m(c,null),i(c,S),i(c,$),i(p,R),i(p,O),i(p,T),i(p,M),r(m,L,C),r(m,D,C),r(m,V,C),r(m,N,C),r(m,H,C),r(m,P,C),r(m,F,C),r(m,v,C),r(m,g,C),r(m,w,C)},p(m,C){K!==(K=z(m,C))&&(B.d(1),B=K(m),B&&(B.c(),B.m(c,S)))},d(m){m&&(o(e),o(t),o(n),o(f),o(p),o(L),o(D),o(V),o(N),o(H),o(P),o(F),o(v),o(g),o(w)),B.d()}}}function qt(d){let e;return{c(){e=a("span"),e.textContent="Опционально",h(e,"class","label label-warning")},m(t,n){r(t,e,n)},d(t){t&&o(e)}}}function Bt(d){let e;return{c(){e=a("span"),e.textContent="Обязательно",h(e,"class","label label-success")},m(t,n){r(t,e,n)},d(t){t&&o(e)}}}function At(d){let e;return{c(){e=a("span"),e.textContent="Опционально",h(e,"class","label label-warning")},m(t,n){r(t,e,n)},d(t){t&&o(e)}}}function Et(d){let e;return{c(){e=a("span"),e.textContent="Обязательно",h(e,"class","label label-success")},m(t,n){r(t,e,n)},d(t){t&&o(e)}}}function It(d){let e=d[15].maxSelect==1?"id":"ids",t,n;return{c(){t=k(e),n=k(" связанной записи.")},m(f,p){r(f,t,p),r(f,n,p)},p(f,p){p&32&&e!==(e=f[15].maxSelect==1?"id":"ids")&&ee(t,e)},d(f){f&&(o(t),o(n))}}}function Jt(d){let e,t,n,f,p;return{c(){e=k("Файловый объект."),t=a("br"),n=k(`
                        Укажи `),f=a("code"),f.textContent="null",p=k(", чтобы удалить уже загруженный(е) файл(ы).")},m(b,c){r(b,e,c),r(b,t,c),r(b,n,c),r(b,f,c),r(b,p,c)},p:te,d(b){b&&(o(e),o(t),o(n),o(f),o(p))}}}function Nt(d){let e,t;return{c(){e=a("code"),e.textContent='{"lon":x,"lat":y}',t=k(" объект.")},m(n,f){r(n,e,f),r(n,t,f)},p:te,d(n){n&&(o(e),o(t))}}}function Vt(d){let e;return{c(){e=k("URL адрес.")},m(t,n){r(t,e,n)},p:te,d(t){t&&o(e)}}}function Ut(d){let e;return{c(){e=k("Email адрес.")},m(t,n){r(t,e,n)},p:te,d(t){t&&o(e)}}}function jt(d){let e;return{c(){e=k("JSON‑массив или объект.")},m(t,n){r(t,e,n)},p:te,d(t){t&&o(e)}}}function zt(d){let e;return{c(){e=k("Числовое значение.")},m(t,n){r(t,e,n)},p:te,d(t){t&&o(e)}}}function Kt(d){let e;return{c(){e=k("Текстовое значение.")},m(t,n){r(t,e,n)},p:te,d(t){t&&o(e)}}}function gt(d,e){let t,n,f,p,b,c=e[15].name+"",_,S,$,R,O=ye.getFieldValueType(e[15])+"",T,M,L,D;function V(g,w){return g[15].required?Et:At}let N=V(e),H=N(e);function P(g,w){if(g[15].type==="text")return Kt;if(g[15].type==="number")return zt;if(g[15].type==="json")return jt;if(g[15].type==="email")return Ut;if(g[15].type==="url")return Vt;if(g[15].type==="geoPoint")return Nt;if(g[15].type==="file")return Jt;if(g[15].type==="relation")return It}let F=P(e),v=F&&F(e);return{key:d,first:null,c(){t=a("tr"),n=a("td"),f=a("div"),H.c(),p=u(),b=a("span"),_=k(c),S=u(),$=a("td"),R=a("span"),T=k(O),M=u(),L=a("td"),v&&v.c(),D=u(),h(f,"class","inline-flex"),h(R,"class","label"),this.first=t},m(g,w){r(g,t,w),i(t,n),i(n,f),H.m(f,null),i(f,p),i(f,b),i(b,_),i(t,S),i(t,$),i($,R),i(R,T),i(t,M),i(t,L),v&&v.m(L,null),i(t,D)},p(g,w){e=g,N!==(N=V(e))&&(H.d(1),H=N(e),H&&(H.c(),H.m(f,p))),w&32&&c!==(c=e[15].name+"")&&ee(_,c),w&32&&O!==(O=ye.getFieldValueType(e[15])+"")&&ee(T,O),F===(F=P(e))&&v?v.p(e,w):(v&&v.d(1),v=F&&F(e),v&&(v.c(),v.m(L,null)))},d(g){g&&o(t),H.d(),v&&v.d()}}}function wt(d,e){let t,n=e[10].code+"",f,p,b,c;function _(){return e[9](e[10])}return{key:d,first:null,c(){t=a("button"),f=k(n),p=u(),h(t,"class","tab-item"),$e(t,"active",e[2]===e[10].code),this.first=t},m(S,$){r(S,t,$),i(t,f),i(t,p),b||(c=Dt(t,"click",_),b=!0)},p(S,$){e=S,$&8&&n!==(n=e[10].code+"")&&ee(f,n),$&12&&$e(t,"active",e[2]===e[10].code)},d(S){S&&o(t),b=!1,c()}}}function Ct(d,e){let t,n,f,p;return n=new $t({props:{content:e[10].body}}),{key:d,first:null,c(){t=a("div"),Ce(n.$$.fragment),f=u(),h(t,"class","tab-item"),$e(t,"active",e[2]===e[10].code),this.first=t},m(b,c){r(b,t,c),we(n,t,null),i(t,f),p=!0},p(b,c){e=b;const _={};c&8&&(_.content=e[10].body),n.$set(_),(!p||c&12)&&$e(t,"active",e[2]===e[10].code)},i(b){p||(ke(n.$$.fragment,b),p=!0)},o(b){me(n.$$.fragment,b),p=!1},d(b){b&&o(t),ge(n)}}}function Qt(d){var ct,ft;let e,t,n=d[0].name+"",f,p,b,c,_,S,$,R=d[0].name+"",O,T,M,L,D,V,N,H,P,F,v,g,w,z,K,B,m,C,le,Q=d[0].name+"",ne,Ue,Te,je,Me,de,Se,oe,He,re,Le,W,Pe,ze,X,Re,U=[],Ke=new Map,Oe,ce,De,Y,Fe,Qe,fe,Z,qe,We,Be,Xe,A,Ye,ie,Ze,Ge,xe,Ae,et,Ee,tt,Ie,lt,nt,se,Je,ue,Ne,G,pe,j=[],it=new Map,st,be,E=[],at=new Map,x,I=d[1]&&yt();P=new Ht({props:{js:`
import PocketBase from 'pocketbase';

const pb = new PocketBase('${d[4]}');

...

// example update data
const data = ${JSON.stringify(d[7](d[0]),null,4)};

const record = await pb.collection('${(ct=d[0])==null?void 0:ct.name}').update('RECORD_ID', data);
    `,dart:`
import 'package:pocketbase/pocketbase.dart';

final pb = PocketBase('${d[4]}');

...

// example update body
final body = <String, dynamic>${JSON.stringify(d[7](d[0]),null,2)};

final record = await pb.collection('${(ft=d[0])==null?void 0:ft.name}').update('RECORD_ID', body: body);
    `}});let J=d[6]&&ht(),q=d[1]&&vt(d),he=ae(d[5]);const dt=l=>l[15].name;for(let l=0;l<he.length;l+=1){let s=kt(d,he,l),y=dt(s);Ke.set(y,U[l]=gt(y,s))}ie=new $t({props:{content:"?expand=relField1,relField2.subRelField21"}}),se=new Ft({});let ve=ae(d[3]);const ot=l=>l[10].code;for(let l=0;l<ve.length;l+=1){let s=mt(d,ve,l),y=ot(s);it.set(y,j[l]=wt(y,s))}let _e=ae(d[3]);const rt=l=>l[10].code;for(let l=0;l<_e.length;l+=1){let s=_t(d,_e,l),y=rt(s);at.set(y,E[l]=Ct(y,s))}return{c(){e=a("h3"),t=k("Обновление ("),f=k(n),p=k(")"),b=u(),c=a("div"),_=a("p"),S=k("Обновить одну запись "),$=a("strong"),O=k(R),T=k("."),M=u(),L=a("p"),L.innerHTML=`Параметры тела можно отправлять как <code>application/json</code> или
        <code>multipart/form-data</code>.`,D=u(),V=a("p"),V.innerHTML=`Загрузка файлов поддерживается только через <code>multipart/form-data</code>.
        <br/>
        Больше инфы и примеров — в подробной документации:
        <a href="https://pocketbase.io/docs/files-handling" target="_blank" rel="noopener noreferrer">Загрузка и обработка файлов
        </a>.`,N=u(),I&&I.c(),H=u(),Ce(P.$$.fragment),F=u(),v=a("h6"),v.textContent="Детали API",g=u(),w=a("div"),z=a("strong"),z.textContent="PATCH",K=u(),B=a("div"),m=a("p"),C=k("/api/collections/"),le=a("strong"),ne=k(Q),Ue=k("/records/"),Te=a("strong"),Te.textContent=":id",je=u(),J&&J.c(),Me=u(),de=a("div"),de.textContent="Path‑параметры",Se=u(),oe=a("table"),oe.innerHTML='<thead><tr><th>Параметр</th> <th>Тип</th> <th width="60%">Описание</th></tr></thead> <tbody><tr><td>id</td> <td><span class="label">String</span></td> <td>ID записи, которую надо обновить.</td></tr></tbody>',He=u(),re=a("div"),re.textContent="Параметры тела",Le=u(),W=a("table"),Pe=a("thead"),Pe.innerHTML='<tr><th>Параметр</th> <th>Тип</th> <th width="50%">Описание</th></tr>',ze=u(),X=a("tbody"),q&&q.c(),Re=u();for(let l=0;l<U.length;l+=1)U[l].c();Oe=u(),ce=a("div"),ce.textContent="Параметры запроса",De=u(),Y=a("table"),Fe=a("thead"),Fe.innerHTML='<tr><th>Параметр</th> <th>Тип</th> <th width="60%">Описание</th></tr>',Qe=u(),fe=a("tbody"),Z=a("tr"),qe=a("td"),qe.textContent="expand",We=u(),Be=a("td"),Be.innerHTML='<span class="label">String</span>',Xe=u(),A=a("td"),Ye=k(`Автоматически раскрывает связи при возврате обновлённой записи. Например:
                `),Ce(ie.$$.fragment),Ze=k(`
                Поддерживает вложенность до 6 уровней. `),Ge=a("br"),xe=k(`
                Раскрытые связи будут добавлены к записи в поле
                `),Ae=a("code"),Ae.textContent="expand",et=k(" property (eg. "),Ee=a("code"),Ee.textContent='"expand": {"relField1": {...}, ...}',tt=k(`). Only
                те связи, на которые у пользователя есть права `),Ie=a("strong"),Ie.textContent="view",lt=k(", будут раскрыты."),nt=u(),Ce(se.$$.fragment),Je=u(),ue=a("div"),ue.textContent="Ответы",Ne=u(),G=a("div"),pe=a("div");for(let l=0;l<j.length;l+=1)j[l].c();st=u(),be=a("div");for(let l=0;l<E.length;l+=1)E[l].c();h(e,"class","m-b-sm"),h(c,"class","content txt-lg m-b-sm"),h(v,"class","m-b-xs"),h(z,"class","label label-primary"),h(B,"class","content"),h(w,"class","alert alert-warning"),h(de,"class","section-title"),h(oe,"class","table-compact table-border m-b-base"),h(re,"class","section-title"),h(W,"class","table-compact table-border m-b-base"),h(ce,"class","section-title"),h(Y,"class","table-compact table-border m-b-lg"),h(ue,"class","section-title"),h(pe,"class","tabs-header compact combined left"),h(be,"class","tabs-content"),h(G,"class","tabs")},m(l,s){r(l,e,s),i(e,t),i(e,f),i(e,p),r(l,b,s),r(l,c,s),i(c,_),i(_,S),i(_,$),i($,O),i(_,T),i(c,M),i(c,L),i(c,D),i(c,V),i(c,N),I&&I.m(c,null),r(l,H,s),we(P,l,s),r(l,F,s),r(l,v,s),r(l,g,s),r(l,w,s),i(w,z),i(w,K),i(w,B),i(B,m),i(m,C),i(m,le),i(le,ne),i(m,Ue),i(m,Te),i(w,je),J&&J.m(w,null),r(l,Me,s),r(l,de,s),r(l,Se,s),r(l,oe,s),r(l,He,s),r(l,re,s),r(l,Le,s),r(l,W,s),i(W,Pe),i(W,ze),i(W,X),q&&q.m(X,null),i(X,Re);for(let y=0;y<U.length;y+=1)U[y]&&U[y].m(X,null);r(l,Oe,s),r(l,ce,s),r(l,De,s),r(l,Y,s),i(Y,Fe),i(Y,Qe),i(Y,fe),i(fe,Z),i(Z,qe),i(Z,We),i(Z,Be),i(Z,Xe),i(Z,A),i(A,Ye),we(ie,A,null),i(A,Ze),i(A,Ge),i(A,xe),i(A,Ae),i(A,et),i(A,Ee),i(A,tt),i(A,Ie),i(A,lt),i(fe,nt),we(se,fe,null),r(l,Je,s),r(l,ue,s),r(l,Ne,s),r(l,G,s),i(G,pe);for(let y=0;y<j.length;y+=1)j[y]&&j[y].m(pe,null);i(G,st),i(G,be);for(let y=0;y<E.length;y+=1)E[y]&&E[y].m(be,null);x=!0},p(l,[s]){var ut,pt;(!x||s&1)&&n!==(n=l[0].name+"")&&ee(f,n),(!x||s&1)&&R!==(R=l[0].name+"")&&ee(O,R),l[1]?I||(I=yt(),I.c(),I.m(c,null)):I&&(I.d(1),I=null);const y={};s&17&&(y.js=`
import PocketBase from 'pocketbase';

const pb = new PocketBase('${l[4]}');

...

// example update data
const data = ${JSON.stringify(l[7](l[0]),null,4)};

const record = await pb.collection('${(ut=l[0])==null?void 0:ut.name}').update('RECORD_ID', data);
    `),s&17&&(y.dart=`
import 'package:pocketbase/pocketbase.dart';

final pb = PocketBase('${l[4]}');

...

// example update body
final body = <String, dynamic>${JSON.stringify(l[7](l[0]),null,2)};

final record = await pb.collection('${(pt=l[0])==null?void 0:pt.name}').update('RECORD_ID', body: body);
    `),P.$set(y),(!x||s&1)&&Q!==(Q=l[0].name+"")&&ee(ne,Q),l[6]?J||(J=ht(),J.c(),J.m(w,null)):J&&(J.d(1),J=null),l[1]?q?q.p(l,s):(q=vt(l),q.c(),q.m(X,Re)):q&&(q.d(1),q=null),s&32&&(he=ae(l[5]),U=Ve(U,s,dt,1,l,he,Ke,X,bt,gt,null,kt)),s&12&&(ve=ae(l[3]),j=Ve(j,s,ot,1,l,ve,it,pe,bt,wt,null,mt)),s&12&&(_e=ae(l[3]),Lt(),E=Ve(E,s,rt,1,l,_e,at,be,Pt,Ct,null,_t),Rt())},i(l){if(!x){ke(P.$$.fragment,l),ke(ie.$$.fragment,l),ke(se.$$.fragment,l);for(let s=0;s<_e.length;s+=1)ke(E[s]);x=!0}},o(l){me(P.$$.fragment,l),me(ie.$$.fragment,l),me(se.$$.fragment,l);for(let s=0;s<E.length;s+=1)me(E[s]);x=!1},d(l){l&&(o(e),o(b),o(c),o(H),o(F),o(v),o(g),o(w),o(Me),o(de),o(Se),o(oe),o(He),o(re),o(Le),o(W),o(Oe),o(ce),o(De),o(Y),o(Je),o(ue),o(Ne),o(G)),I&&I.d(),ge(P,l),J&&J.d(),q&&q.d();for(let s=0;s<U.length;s+=1)U[s].d();ge(ie),ge(se);for(let s=0;s<j.length;s+=1)j[s].d();for(let s=0;s<E.length;s+=1)E[s].d()}}}const Wt=d=>d.name=="emailVisibility";function Xt(d,e,t){let n,f,p,b,c,{collection:_}=e,S=200,$=[];function R(T){let M=ye.dummyCollectionSchemaData(T,!0);return n&&(M.oldPassword="12345678",M.password="87654321",M.passwordConfirm="87654321",delete M.verified,delete M.email),M}const O=T=>t(2,S=T.code);return d.$$set=T=>{"collection"in T&&t(0,_=T.collection)},d.$$.update=()=>{var T,M,L;d.$$.dirty&1&&t(1,n=(_==null?void 0:_.type)==="auth"),d.$$.dirty&1&&t(6,f=(_==null?void 0:_.updateRule)===null),d.$$.dirty&2&&t(8,p=n?["id","password","verified","email","emailVisibility"]:["id"]),d.$$.dirty&257&&t(5,b=((T=_==null?void 0:_.fields)==null?void 0:T.filter(D=>!D.hidden&&D.type!="autodate"&&!p.includes(D.name)))||[]),d.$$.dirty&1&&t(3,$=[{code:200,body:JSON.stringify(ye.dummyCollectionRecord(_),null,2)},{code:400,body:`
                {
                  "status": 400,
                  "message": "Failed to update record.",
                  "data": {
                    "${(L=(M=_==null?void 0:_.fields)==null?void 0:M[0])==null?void 0:L.name}": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
                }
            `},{code:403,body:`
                {
                  "status": 403,
                  "message": "You are not allowed to perform this request.",
                  "data": {}
                }
            `},{code:404,body:`
                {
                  "status": 404,
                  "message": "The requested resource wasn't found.",
                  "data": {}
                }
            `}])},t(4,c=ye.getApiExampleUrl(Ot.baseURL)),[_,n,S,$,c,b,f,R,p,O]}class Gt extends Tt{constructor(e){super(),Mt(this,e,Xt,Qt,St,{collection:0})}}export{Gt as default};
