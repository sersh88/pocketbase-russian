import{S as Ct,i as Tt,s as St,V as Mt,X as de,W as $t,h as r,d as Ce,t as ve,a as he,I as se,Z as Je,_ as pt,C as qt,$ as Lt,D as Ht,l as c,n as i,m as Te,u as s,A as k,v as u,c as Se,w as g,J as ge,p as Pt,k as Me,o as Ft,L as Vt,H as fe}from"./index-BozUHKR0.js";import{F as Bt}from"./FieldsQueryParam-BRUGZH-z.js";function bt(a,e,t){const l=a.slice();return l[10]=e[t],l}function mt(a,e,t){const l=a.slice();return l[10]=e[t],l}function _t(a,e,t){const l=a.slice();return l[15]=e[t],l}function kt(a){let e;return{c(){e=s("p"),e.innerHTML="Нужен заголовок суперпользователя <code>Authorization:TOKEN</code>",g(e,"class","txt-hint txt-sm txt-right")},m(t,l){c(t,e,l)},d(t){t&&r(e)}}}function yt(a){let e,t,l,d,f,b,m,p,T,y,w,N,M,C,B,L,D,E,q,K,H,S,_,P,ee,W,I,oe,X,Y,Z;function ue(v,$){var J,Q,V;return $&1&&(b=null),b==null&&(b=!!((V=(Q=(J=v[0])==null?void 0:J.fields)==null?void 0:Q.find(Zt))!=null&&V.required)),b?Nt:Ot}let te=ue(a,-1),U=te(a);function G(v,$){var J,Q,V;return $&1&&(D=null),D==null&&(D=!!((V=(Q=(J=v[0])==null?void 0:J.fields)==null?void 0:Q.find(Yt))!=null&&V.required)),D?Jt:At}let x=G(a,-1),F=x(a);return{c(){e=s("tr"),e.innerHTML='<td colspan="3" class="txt-hint txt-bold">Поля, специфичные для auth</td>',t=u(),l=s("tr"),d=s("td"),f=s("div"),U.c(),m=u(),p=s("span"),p.textContent="email",T=u(),y=s("td"),y.innerHTML='<span class="label">String</span>',w=u(),N=s("td"),N.textContent="Email адрес auth‑записи.",M=u(),C=s("tr"),B=s("td"),L=s("div"),F.c(),E=u(),q=s("span"),q.textContent="emailVisibility",K=u(),H=s("td"),H.innerHTML='<span class="label">Boolean</span>',S=u(),_=s("td"),_.textContent="Показывать/скрывать email auth‑записи при получении данных записи.",P=u(),ee=s("tr"),ee.innerHTML='<td><div class="inline-flex"><span class="label label-success">Обязательно</span> <span>password</span></div></td> <td><span class="label">String</span></td> <td>Пароль auth‑записи.</td>',W=u(),I=s("tr"),I.innerHTML='<td><div class="inline-flex"><span class="label label-success">Обязательно</span> <span>passwordConfirm</span></div></td> <td><span class="label">String</span></td> <td>Подтверждение пароля auth‑записи.</td>',oe=u(),X=s("tr"),X.innerHTML=`<td><div class="inline-flex"><span class="label label-warning">Опционально</span> <span>verified</span></div></td> <td><span class="label">Boolean</span></td> <td>Показывает, подтверждена auth‑запись или нет.
                    <br/>
                    Это поле могут менять только суперпользователи или auth‑записи с доступом “Manage”.</td>`,Y=u(),Z=s("tr"),Z.innerHTML='<td colspan="3" class="txt-hint txt-bold">Остальные поля</td>',g(f,"class","inline-flex"),g(L,"class","inline-flex")},m(v,$){c(v,e,$),c(v,t,$),c(v,l,$),i(l,d),i(d,f),U.m(f,null),i(f,m),i(f,p),i(l,T),i(l,y),i(l,w),i(l,N),c(v,M,$),c(v,C,$),i(C,B),i(B,L),F.m(L,null),i(L,E),i(L,q),i(C,K),i(C,H),i(C,S),i(C,_),c(v,P,$),c(v,ee,$),c(v,W,$),c(v,I,$),c(v,oe,$),c(v,X,$),c(v,Y,$),c(v,Z,$)},p(v,$){te!==(te=ue(v,$))&&(U.d(1),U=te(v),U&&(U.c(),U.m(f,m))),x!==(x=G(v,$))&&(F.d(1),F=x(v),F&&(F.c(),F.m(L,E)))},d(v){v&&(r(e),r(t),r(l),r(M),r(C),r(P),r(ee),r(W),r(I),r(oe),r(X),r(Y),r(Z)),U.d(),F.d()}}}function Ot(a){let e;return{c(){e=s("span"),e.textContent="Опционально",g(e,"class","label label-warning")},m(t,l){c(t,e,l)},d(t){t&&r(e)}}}function Nt(a){let e;return{c(){e=s("span"),e.textContent="Обязательно",g(e,"class","label label-success")},m(t,l){c(t,e,l)},d(t){t&&r(e)}}}function At(a){let e;return{c(){e=s("span"),e.textContent="Опционально",g(e,"class","label label-warning")},m(t,l){c(t,e,l)},d(t){t&&r(e)}}}function Jt(a){let e;return{c(){e=s("span"),e.textContent="Обязательно",g(e,"class","label label-success")},m(t,l){c(t,e,l)},d(t){t&&r(e)}}}function Rt(a){let e;return{c(){e=s("span"),e.textContent="Обязательно",g(e,"class","label label-success")},m(t,l){c(t,e,l)},d(t){t&&r(e)}}}function jt(a){let e;return{c(){e=s("span"),e.textContent="Опционально",g(e,"class","label label-warning")},m(t,l){c(t,e,l)},d(t){t&&r(e)}}}function Et(a){let e=a[15].maxSelect===1?"id":"ids",t,l;return{c(){t=k(e),l=k(" связанной записи.")},m(d,f){c(d,t,f),c(d,l,f)},p(d,f){f&32&&e!==(e=d[15].maxSelect===1?"id":"ids")&&se(t,e)},d(d){d&&(r(t),r(l))}}}function Ut(a){let e,t,l,d,f,b,m,p,T;return{c(){e=k("Файловый объект."),t=s("br"),l=k(`
                        Укажи пустое значение (`),d=s("code"),d.textContent="null",f=k(", "),b=s("code"),b.textContent='""',m=k(" или "),p=s("code"),p.textContent="[]",T=k(`), чтобы
                        удалить уже загруженный(е) файл(ы).`)},m(y,w){c(y,e,w),c(y,t,w),c(y,l,w),c(y,d,w),c(y,f,w),c(y,b,w),c(y,m,w),c(y,p,w),c(y,T,w)},p:fe,d(y){y&&(r(e),r(t),r(l),r(d),r(f),r(b),r(m),r(p),r(T))}}}function Dt(a){let e,t;return{c(){e=s("code"),e.textContent='{"lon":x,"lat":y}',t=k(" объект.")},m(l,d){c(l,e,d),c(l,t,d)},p:fe,d(l){l&&(r(e),r(t))}}}function It(a){let e;return{c(){e=k("URL адрес.")},m(t,l){c(t,e,l)},p:fe,d(t){t&&r(e)}}}function zt(a){let e;return{c(){e=k("Email адрес.")},m(t,l){c(t,e,l)},p:fe,d(t){t&&r(e)}}}function Kt(a){let e;return{c(){e=k("JSON‑массив или объект.")},m(t,l){c(t,e,l)},p:fe,d(t){t&&r(e)}}}function Qt(a){let e;return{c(){e=k("Числовое значение.")},m(t,l){c(t,e,l)},p:fe,d(t){t&&r(e)}}}function Wt(a){let e,t,l=a[15].autogeneratePattern&&vt();return{c(){e=k(`Текстовое значение.
                        `),l&&l.c(),t=Vt()},m(d,f){c(d,e,f),l&&l.m(d,f),c(d,t,f)},p(d,f){d[15].autogeneratePattern?l||(l=vt(),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null)},d(d){d&&(r(e),r(t)),l&&l.d(d)}}}function vt(a){let e;return{c(){e=k("Автогенерируется, если не задано.")},m(t,l){c(t,e,l)},d(t){t&&r(e)}}}function ht(a,e){let t,l,d,f,b,m=e[15].name+"",p,T,y,w,N=ge.getFieldValueType(e[15])+"",M,C,B,L;function D(_,P){return!_[15].required||_[15].type=="text"&&_[15].autogeneratePattern?jt:Rt}let E=D(e),q=E(e);function K(_,P){if(_[15].type==="text")return Wt;if(_[15].type==="number")return Qt;if(_[15].type==="json")return Kt;if(_[15].type==="email")return zt;if(_[15].type==="url")return It;if(_[15].type==="geoPoint")return Dt;if(_[15].type==="file")return Ut;if(_[15].type==="relation")return Et}let H=K(e),S=H&&H(e);return{key:a,first:null,c(){t=s("tr"),l=s("td"),d=s("div"),q.c(),f=u(),b=s("span"),p=k(m),T=u(),y=s("td"),w=s("span"),M=k(N),C=u(),B=s("td"),S&&S.c(),L=u(),g(d,"class","inline-flex"),g(w,"class","label"),this.first=t},m(_,P){c(_,t,P),i(t,l),i(l,d),q.m(d,null),i(d,f),i(d,b),i(b,p),i(t,T),i(t,y),i(y,w),i(w,M),i(t,C),i(t,B),S&&S.m(B,null),i(t,L)},p(_,P){e=_,E!==(E=D(e))&&(q.d(1),q=E(e),q&&(q.c(),q.m(d,f))),P&32&&m!==(m=e[15].name+"")&&se(p,m),P&32&&N!==(N=ge.getFieldValueType(e[15])+"")&&se(M,N),H===(H=K(e))&&S?S.p(e,P):(S&&S.d(1),S=H&&H(e),S&&(S.c(),S.m(B,null)))},d(_){_&&r(t),q.d(),S&&S.d()}}}function gt(a,e){let t,l=e[10].code+"",d,f,b,m;function p(){return e[9](e[10])}return{key:a,first:null,c(){t=s("button"),d=k(l),f=u(),g(t,"class","tab-item"),Me(t,"active",e[2]===e[10].code),this.first=t},m(T,y){c(T,t,y),i(t,d),i(t,f),b||(m=Ft(t,"click",p),b=!0)},p(T,y){e=T,y&8&&l!==(l=e[10].code+"")&&se(d,l),y&12&&Me(t,"active",e[2]===e[10].code)},d(T){T&&r(t),b=!1,m()}}}function wt(a,e){let t,l,d,f;return l=new $t({props:{content:e[10].body}}),{key:a,first:null,c(){t=s("div"),Se(l.$$.fragment),d=u(),g(t,"class","tab-item"),Me(t,"active",e[2]===e[10].code),this.first=t},m(b,m){c(b,t,m),Te(l,t,null),i(t,d),f=!0},p(b,m){e=b;const p={};m&8&&(p.content=e[10].body),l.$set(p),(!f||m&12)&&Me(t,"active",e[2]===e[10].code)},i(b){f||(he(l.$$.fragment,b),f=!0)},o(b){ve(l.$$.fragment,b),f=!1},d(b){b&&r(t),Ce(l)}}}function Xt(a){var at,st,ot,rt;let e,t,l=a[0].name+"",d,f,b,m,p,T,y,w=a[0].name+"",N,M,C,B,L,D,E,q,K,H,S,_,P,ee,W,I,oe,X,Y=a[0].name+"",Z,ue,te,U,G,x,F,v,$,J,Q,V=[],Re=new Map,qe,pe,Le,le,He,je,be,ne,Pe,Ee,Fe,Ue,O,De,re,Ie,ze,Ke,Ve,Qe,Be,We,Xe,Ye,Oe,Ze,Ge,ce,Ne,me,Ae,ie,_e,z=[],xe=new Map,et,ke,R=[],tt=new Map,ae;q=new Mt({props:{js:`
import PocketBase from 'pocketbase';

const pb = new PocketBase('${a[4]}');

...

// example create data
const data = ${JSON.stringify(a[7](a[0]),null,4)};

const record = await pb.collection('${(at=a[0])==null?void 0:at.name}').create(data);
`+(a[1]?`
// (optional) send an email verification request
await pb.collection('${(st=a[0])==null?void 0:st.name}').requestVerification('test@example.com');
`:""),dart:`
import 'package:pocketbase/pocketbase.dart';

final pb = PocketBase('${a[4]}');

...

// example create body
final body = <String, dynamic>${JSON.stringify(a[7](a[0]),null,2)};

final record = await pb.collection('${(ot=a[0])==null?void 0:ot.name}').create(body: body);
`+(a[1]?`
// (optional) send an email verification request
await pb.collection('${(rt=a[0])==null?void 0:rt.name}').requestVerification('test@example.com');
`:"")}});let j=a[6]&&kt(),A=a[1]&&yt(a),we=de(a[5]);const lt=n=>n[15].name;for(let n=0;n<we.length;n+=1){let o=_t(a,we,n),h=lt(o);Re.set(h,V[n]=ht(h,o))}re=new $t({props:{content:"?expand=relField1,relField2.subRelField"}}),ce=new Bt({});let $e=de(a[3]);const nt=n=>n[10].code;for(let n=0;n<$e.length;n+=1){let o=mt(a,$e,n),h=nt(o);xe.set(h,z[n]=gt(h,o))}let ye=de(a[3]);const it=n=>n[10].code;for(let n=0;n<ye.length;n+=1){let o=bt(a,ye,n),h=it(o);tt.set(h,R[n]=wt(h,o))}return{c(){e=s("h3"),t=k("Создание ("),d=k(l),f=k(")"),b=u(),m=s("div"),p=s("p"),T=k("Создать новую запись "),y=s("strong"),N=k(w),M=k("."),C=u(),B=s("p"),B.innerHTML=`Параметры тела можно отправлять как <code>application/json</code> или
        <code>multipart/form-data</code>.`,L=u(),D=s("p"),D.innerHTML=`Загрузка файлов поддерживается только через <code>multipart/form-data</code>.
        <br/>
        Больше инфы и примеров — в подробной документации:
        <a href="https://pocketbase.io/docs/files-handling" target="_blank" rel="noopener noreferrer">Загрузка и обработка файлов
        </a>.`,E=u(),Se(q.$$.fragment),K=u(),H=s("h6"),H.textContent="Детали API",S=u(),_=s("div"),P=s("strong"),P.textContent="POST",ee=u(),W=s("div"),I=s("p"),oe=k("/api/collections/"),X=s("strong"),Z=k(Y),ue=k("/records"),te=u(),j&&j.c(),U=u(),G=s("div"),G.textContent="Параметры тела",x=u(),F=s("table"),v=s("thead"),v.innerHTML='<tr><th>Параметр</th> <th>Тип</th> <th width="50%">Описание</th></tr>',$=u(),J=s("tbody"),A&&A.c(),Q=u();for(let n=0;n<V.length;n+=1)V[n].c();qe=u(),pe=s("div"),pe.textContent="Параметры запроса",Le=u(),le=s("table"),He=s("thead"),He.innerHTML='<tr><th>Параметр</th> <th>Тип</th> <th width="60%">Описание</th></tr>',je=u(),be=s("tbody"),ne=s("tr"),Pe=s("td"),Pe.textContent="expand",Ee=u(),Fe=s("td"),Fe.innerHTML='<span class="label">String</span>',Ue=u(),O=s("td"),De=k(`Автоматически раскрывает связи при возврате созданной записи. Например:
                `),Se(re.$$.fragment),Ie=k(`
                Поддерживает вложенность до 6 уровней. `),ze=s("br"),Ke=k(`
                Раскрытые связи будут добавлены к записи в поле
                `),Ve=s("code"),Ve.textContent="expand",Qe=k(" property (eg. "),Be=s("code"),Be.textContent='"expand": {"relField1": {...}, ...}',We=k(`).
                `),Xe=s("br"),Ye=k(`
                Будут раскрыты только те связи, на которые у пользователя запроса есть права
                `),Oe=s("strong"),Oe.textContent="view",Ze=k("."),Ge=u(),Se(ce.$$.fragment),Ne=u(),me=s("div"),me.textContent="Ответы",Ae=u(),ie=s("div"),_e=s("div");for(let n=0;n<z.length;n+=1)z[n].c();et=u(),ke=s("div");for(let n=0;n<R.length;n+=1)R[n].c();g(e,"class","m-b-sm"),g(m,"class","content txt-lg m-b-sm"),g(H,"class","m-b-xs"),g(P,"class","label label-primary"),g(W,"class","content"),g(_,"class","alert alert-success"),g(G,"class","section-title"),g(F,"class","table-compact table-border m-b-base"),g(pe,"class","section-title"),g(le,"class","table-compact table-border m-b-base"),g(me,"class","section-title"),g(_e,"class","tabs-header compact combined left"),g(ke,"class","tabs-content"),g(ie,"class","tabs")},m(n,o){c(n,e,o),i(e,t),i(e,d),i(e,f),c(n,b,o),c(n,m,o),i(m,p),i(p,T),i(p,y),i(y,N),i(p,M),i(m,C),i(m,B),i(m,L),i(m,D),c(n,E,o),Te(q,n,o),c(n,K,o),c(n,H,o),c(n,S,o),c(n,_,o),i(_,P),i(_,ee),i(_,W),i(W,I),i(I,oe),i(I,X),i(X,Z),i(I,ue),i(_,te),j&&j.m(_,null),c(n,U,o),c(n,G,o),c(n,x,o),c(n,F,o),i(F,v),i(F,$),i(F,J),A&&A.m(J,null),i(J,Q);for(let h=0;h<V.length;h+=1)V[h]&&V[h].m(J,null);c(n,qe,o),c(n,pe,o),c(n,Le,o),c(n,le,o),i(le,He),i(le,je),i(le,be),i(be,ne),i(ne,Pe),i(ne,Ee),i(ne,Fe),i(ne,Ue),i(ne,O),i(O,De),Te(re,O,null),i(O,Ie),i(O,ze),i(O,Ke),i(O,Ve),i(O,Qe),i(O,Be),i(O,We),i(O,Xe),i(O,Ye),i(O,Oe),i(O,Ze),i(be,Ge),Te(ce,be,null),c(n,Ne,o),c(n,me,o),c(n,Ae,o),c(n,ie,o),i(ie,_e);for(let h=0;h<z.length;h+=1)z[h]&&z[h].m(_e,null);i(ie,et),i(ie,ke);for(let h=0;h<R.length;h+=1)R[h]&&R[h].m(ke,null);ae=!0},p(n,[o]){var ct,dt,ft,ut;(!ae||o&1)&&l!==(l=n[0].name+"")&&se(d,l),(!ae||o&1)&&w!==(w=n[0].name+"")&&se(N,w);const h={};o&19&&(h.js=`
import PocketBase from 'pocketbase';

const pb = new PocketBase('${n[4]}');

...

// example create data
const data = ${JSON.stringify(n[7](n[0]),null,4)};

const record = await pb.collection('${(ct=n[0])==null?void 0:ct.name}').create(data);
`+(n[1]?`
// (optional) send an email verification request
await pb.collection('${(dt=n[0])==null?void 0:dt.name}').requestVerification('test@example.com');
`:"")),o&19&&(h.dart=`
import 'package:pocketbase/pocketbase.dart';

final pb = PocketBase('${n[4]}');

...

// example create body
final body = <String, dynamic>${JSON.stringify(n[7](n[0]),null,2)};

final record = await pb.collection('${(ft=n[0])==null?void 0:ft.name}').create(body: body);
`+(n[1]?`
// (optional) send an email verification request
await pb.collection('${(ut=n[0])==null?void 0:ut.name}').requestVerification('test@example.com');
`:"")),q.$set(h),(!ae||o&1)&&Y!==(Y=n[0].name+"")&&se(Z,Y),n[6]?j||(j=kt(),j.c(),j.m(_,null)):j&&(j.d(1),j=null),n[1]?A?A.p(n,o):(A=yt(n),A.c(),A.m(J,Q)):A&&(A.d(1),A=null),o&32&&(we=de(n[5]),V=Je(V,o,lt,1,n,we,Re,J,pt,ht,null,_t)),o&12&&($e=de(n[3]),z=Je(z,o,nt,1,n,$e,xe,_e,pt,gt,null,mt)),o&12&&(ye=de(n[3]),qt(),R=Je(R,o,it,1,n,ye,tt,ke,Lt,wt,null,bt),Ht())},i(n){if(!ae){he(q.$$.fragment,n),he(re.$$.fragment,n),he(ce.$$.fragment,n);for(let o=0;o<ye.length;o+=1)he(R[o]);ae=!0}},o(n){ve(q.$$.fragment,n),ve(re.$$.fragment,n),ve(ce.$$.fragment,n);for(let o=0;o<R.length;o+=1)ve(R[o]);ae=!1},d(n){n&&(r(e),r(b),r(m),r(E),r(K),r(H),r(S),r(_),r(U),r(G),r(x),r(F),r(qe),r(pe),r(Le),r(le),r(Ne),r(me),r(Ae),r(ie)),Ce(q,n),j&&j.d(),A&&A.d();for(let o=0;o<V.length;o+=1)V[o].d();Ce(re),Ce(ce);for(let o=0;o<z.length;o+=1)z[o].d();for(let o=0;o<R.length;o+=1)R[o].d()}}}const Yt=a=>a.name=="emailVisibility",Zt=a=>a.name=="email";function Gt(a,e,t){let l,d,f,b,m,{collection:p}=e,T=200,y=[];function w(M){let C=ge.dummyCollectionSchemaData(M,!0);return l&&(C.password="12345678",C.passwordConfirm="12345678",delete C.verified),C}const N=M=>t(2,T=M.code);return a.$$set=M=>{"collection"in M&&t(0,p=M.collection)},a.$$.update=()=>{var M,C,B;a.$$.dirty&1&&t(1,l=p.type==="auth"),a.$$.dirty&1&&t(6,d=(p==null?void 0:p.createRule)===null),a.$$.dirty&2&&t(8,f=l?["password","verified","email","emailVisibility"]:[]),a.$$.dirty&257&&t(5,b=((M=p==null?void 0:p.fields)==null?void 0:M.filter(L=>!L.hidden&&L.type!="autodate"&&!f.includes(L.name)))||[]),a.$$.dirty&1&&t(3,y=[{code:200,body:JSON.stringify(ge.dummyCollectionRecord(p),null,2)},{code:400,body:`
                {
                  "status": 400,
                  "message": "Failed to create record.",
                  "data": {
                    "${(B=(C=p==null?void 0:p.fields)==null?void 0:C[0])==null?void 0:B.name}": {
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
            `}])},t(4,m=ge.getApiExampleUrl(Pt.baseURL)),[p,l,T,y,m,b,d,w,f,N]}class tl extends Ct{constructor(e){super(),Tt(this,e,Gt,Xt,St,{collection:0})}}export{tl as default};
