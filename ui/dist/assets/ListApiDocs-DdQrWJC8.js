import{S as el,i as ll,s as sl,H as Ke,h as u,l as b,o as nl,u as e,v as s,L as ol,w as i,n as t,A as g,V as il,W as Le,X as ie,d as Gt,Y as al,t as xt,a as kt,I as ye,Z as ze,_ as cl,C as dl,$ as rl,D as pl,m as Qt,c as Vt,J as Pe,p as fl,k as Ae}from"./index-BozUHKR0.js";import{F as ml}from"./FieldsQueryParam-BRUGZH-z.js";function ul(c){let n,o,a;return{c(){n=e("span"),n.textContent="Показать детали",o=s(),a=e("i"),i(n,"class","txt"),i(a,"class","ri-arrow-down-s-line")},m(f,_){b(f,n,_),b(f,o,_),b(f,a,_)},d(f){f&&(u(n),u(o),u(a))}}}function bl(c){let n,o,a;return{c(){n=e("span"),n.textContent="Скрыть детали",o=s(),a=e("i"),i(n,"class","txt"),i(a,"class","ri-arrow-up-s-line")},m(f,_){b(f,n,_),b(f,o,_),b(f,a,_)},d(f){f&&(u(n),u(o),u(a))}}}function Ge(c){let n,o,a,f,_,p,m,x,h,C,r,Y,vt,Wt,E,Xt,H,at,R,Z,ae,U,J,ce,ct,yt,tt,Ft,de,dt,rt,et,S,Yt,Lt,k,lt,At,Zt,Pt,K,st,Rt,te,Tt,y,pt,Ot,re,ft,pe,M,Nt,nt,Et,F,mt,fe,z,St,ee,Dt,le,Ht,me,L,ut,ue,bt,be,I,_e,P,Mt,ot,It,G,_t,ge,B,Bt,v,qt,it,jt,he,Q,gt,$e,ht,Ce,Ut,we,q,Jt,xe,j,ke,$t,se,T,Ct,V,W,O,Kt,ne,X;return{c(){n=e("p"),n.innerHTML=`Синтаксис в целом такой:
        <code><span class="txt-success">OPERAND</span> <span class="txt-danger">OPERATOR</span> <span class="txt-success">OPERAND</span></code>, where:`,o=s(),a=e("ul"),f=e("li"),f.innerHTML=`<code class="txt-success">OPERAND</code> — это может быть поле (литерал), строка (в одинарных или
            двойных кавычках), число, null, true, false`,_=s(),p=e("li"),m=e("code"),m.textContent="OPERATOR",x=g(` — один из:
            `),h=e("br"),C=s(),r=e("ul"),Y=e("li"),vt=e("code"),vt.textContent="=",Wt=s(),E=e("span"),E.textContent="Равно",Xt=s(),H=e("li"),at=e("code"),at.textContent="!=",R=s(),Z=e("span"),Z.textContent="Не равно",ae=s(),U=e("li"),J=e("code"),J.textContent=">",ce=s(),ct=e("span"),ct.textContent="Больше",yt=s(),tt=e("li"),Ft=e("code"),Ft.textContent=">=",de=s(),dt=e("span"),dt.textContent="Больше или равно",rt=s(),et=e("li"),S=e("code"),S.textContent="<",Yt=s(),Lt=e("span"),Lt.textContent="Меньше",k=s(),lt=e("li"),At=e("code"),At.textContent="<=",Zt=s(),Pt=e("span"),Pt.textContent="Меньше или равно",K=s(),st=e("li"),Rt=e("code"),Rt.textContent="~",te=s(),Tt=e("span"),Tt.textContent=`Like/Contains (если не указано — автоматически оборачивает правый строковый OPERAND в
                        "%", чтобы был wildcard‑поиск)`,y=s(),pt=e("li"),Ot=e("code"),Ot.textContent="!~",re=s(),ft=e("span"),ft.textContent=`NOT Like/Contains (если не указано — автоматически оборачивает правый строковый OPERAND
                        в "%", чтобы был wildcard‑поиск)`,pe=s(),M=e("li"),Nt=e("code"),Nt.textContent="?=",nt=s(),Et=e("em"),Et.textContent="Any/At least one of",F=s(),mt=e("span"),mt.textContent="Равно",fe=s(),z=e("li"),St=e("code"),St.textContent="?!=",ee=s(),Dt=e("em"),Dt.textContent="Any/At least one of",le=s(),Ht=e("span"),Ht.textContent="Не равно",me=s(),L=e("li"),ut=e("code"),ut.textContent="?>",ue=s(),bt=e("em"),bt.textContent="Any/At least one of",be=s(),I=e("span"),I.textContent="Больше",_e=s(),P=e("li"),Mt=e("code"),Mt.textContent="?>=",ot=s(),It=e("em"),It.textContent="Any/At least one of",G=s(),_t=e("span"),_t.textContent="Больше или равно",ge=s(),B=e("li"),Bt=e("code"),Bt.textContent="?<",v=s(),qt=e("em"),qt.textContent="Any/At least one of",it=s(),jt=e("span"),jt.textContent="Меньше",he=s(),Q=e("li"),gt=e("code"),gt.textContent="?<=",$e=s(),ht=e("em"),ht.textContent="Any/At least one of",Ce=s(),Ut=e("span"),Ut.textContent="Меньше или равно",we=s(),q=e("li"),Jt=e("code"),Jt.textContent="?~",xe=s(),j=e("em"),j.textContent="Any/At least one of",ke=s(),$t=e("span"),$t.textContent=`Like/Contains (если не указано — автоматически оборачивает правый строковый OPERAND в
                        "%", чтобы был wildcard‑поиск)`,se=s(),T=e("li"),Ct=e("code"),Ct.textContent="?!~",V=s(),W=e("em"),W.textContent="Any/At least one of",O=s(),Kt=e("span"),Kt.textContent=`NOT Like/Contains (если не указано — автоматически оборачивает правый строковый OPERAND
                        в "%", чтобы был wildcard‑поиск)`,ne=s(),X=e("p"),X.innerHTML=`Чтобы группировать и комбинировать выражения, используй скобки
        <code>(...)</code>, <code>&amp;&amp;</code> (AND) and <code>||</code> (OR) tokens.`,i(m,"class","txt-danger"),i(vt,"class","filter-op svelte-1w7s5nw"),i(E,"class","txt"),i(at,"class","filter-op svelte-1w7s5nw"),i(Z,"class","txt"),i(J,"class","filter-op svelte-1w7s5nw"),i(ct,"class","txt"),i(Ft,"class","filter-op svelte-1w7s5nw"),i(dt,"class","txt"),i(S,"class","filter-op svelte-1w7s5nw"),i(Lt,"class","txt"),i(At,"class","filter-op svelte-1w7s5nw"),i(Pt,"class","txt"),i(Rt,"class","filter-op svelte-1w7s5nw"),i(Tt,"class","txt"),i(Ot,"class","filter-op svelte-1w7s5nw"),i(ft,"class","txt"),i(Nt,"class","filter-op svelte-1w7s5nw"),i(Et,"class","txt-hint"),i(mt,"class","txt"),i(St,"class","filter-op svelte-1w7s5nw"),i(Dt,"class","txt-hint"),i(Ht,"class","txt"),i(ut,"class","filter-op svelte-1w7s5nw"),i(bt,"class","txt-hint"),i(I,"class","txt"),i(Mt,"class","filter-op svelte-1w7s5nw"),i(It,"class","txt-hint"),i(_t,"class","txt"),i(Bt,"class","filter-op svelte-1w7s5nw"),i(qt,"class","txt-hint"),i(jt,"class","txt"),i(gt,"class","filter-op svelte-1w7s5nw"),i(ht,"class","txt-hint"),i(Ut,"class","txt"),i(Jt,"class","filter-op svelte-1w7s5nw"),i(j,"class","txt-hint"),i($t,"class","txt"),i(Ct,"class","filter-op svelte-1w7s5nw"),i(W,"class","txt-hint"),i(Kt,"class","txt")},m(w,wt){b(w,n,wt),b(w,o,wt),b(w,a,wt),t(a,f),t(a,_),t(a,p),t(p,m),t(p,x),t(p,h),t(p,C),t(p,r),t(r,Y),t(Y,vt),t(Y,Wt),t(Y,E),t(r,Xt),t(r,H),t(H,at),t(H,R),t(H,Z),t(r,ae),t(r,U),t(U,J),t(U,ce),t(U,ct),t(r,yt),t(r,tt),t(tt,Ft),t(tt,de),t(tt,dt),t(r,rt),t(r,et),t(et,S),t(et,Yt),t(et,Lt),t(r,k),t(r,lt),t(lt,At),t(lt,Zt),t(lt,Pt),t(r,K),t(r,st),t(st,Rt),t(st,te),t(st,Tt),t(r,y),t(r,pt),t(pt,Ot),t(pt,re),t(pt,ft),t(r,pe),t(r,M),t(M,Nt),t(M,nt),t(M,Et),t(M,F),t(M,mt),t(r,fe),t(r,z),t(z,St),t(z,ee),t(z,Dt),t(z,le),t(z,Ht),t(r,me),t(r,L),t(L,ut),t(L,ue),t(L,bt),t(L,be),t(L,I),t(r,_e),t(r,P),t(P,Mt),t(P,ot),t(P,It),t(P,G),t(P,_t),t(r,ge),t(r,B),t(B,Bt),t(B,v),t(B,qt),t(B,it),t(B,jt),t(r,he),t(r,Q),t(Q,gt),t(Q,$e),t(Q,ht),t(Q,Ce),t(Q,Ut),t(r,we),t(r,q),t(q,Jt),t(q,xe),t(q,j),t(q,ke),t(q,$t),t(r,se),t(r,T),t(T,Ct),t(T,V),t(T,W),t(T,O),t(T,Kt),b(w,ne,wt),b(w,X,wt)},d(w){w&&(u(n),u(o),u(a),u(ne),u(X))}}}function _l(c){let n,o,a,f,_;function p(C,r){return C[0]?bl:ul}let m=p(c),x=m(c),h=c[0]&&Ge();return{c(){n=e("button"),x.c(),o=s(),h&&h.c(),a=ol(),i(n,"class","btn btn-sm btn-secondary m-t-10")},m(C,r){b(C,n,r),x.m(n,null),b(C,o,r),h&&h.m(C,r),b(C,a,r),f||(_=nl(n,"click",c[1]),f=!0)},p(C,[r]){m!==(m=p(C))&&(x.d(1),x=m(C),x&&(x.c(),x.m(n,null))),C[0]?h||(h=Ge(),h.c(),h.m(a.parentNode,a)):h&&(h.d(1),h=null)},i:Ke,o:Ke,d(C){C&&(u(n),u(o),u(a)),x.d(),h&&h.d(C),f=!1,_()}}}function gl(c,n,o){let a=!1;function f(){o(0,a=!a)}return[a,f]}class hl extends el{constructor(n){super(),ll(this,n,gl,_l,sl,{})}}function Qe(c,n,o){const a=c.slice();return a[8]=n[o],a}function Ve(c,n,o){const a=c.slice();return a[8]=n[o],a}function We(c,n,o){const a=c.slice();return a[13]=n[o],a[15]=o,a}function Xe(c){let n;return{c(){n=e("p"),n.innerHTML="Нужен заголовок суперпользователя <code>Authorization:TOKEN</code>",i(n,"class","txt-hint txt-sm txt-right")},m(o,a){b(o,n,a)},d(o){o&&u(n)}}}function Ye(c){let n,o=c[13]+"",a,f=c[15]<c[4].length-1?", ":"",_;return{c(){n=e("code"),a=g(o),_=g(f)},m(p,m){b(p,n,m),t(n,a),b(p,_,m)},p(p,m){m&16&&o!==(o=p[13]+"")&&ye(a,o),m&16&&f!==(f=p[15]<p[4].length-1?", ":"")&&ye(_,f)},d(p){p&&(u(n),u(_))}}}function Ze(c,n){let o,a,f;function _(){return n[7](n[8])}return{key:c,first:null,c(){o=e("button"),o.textContent=`${n[8].code} `,i(o,"type","button"),i(o,"class","tab-item"),Ae(o,"active",n[2]===n[8].code),this.first=o},m(p,m){b(p,o,m),a||(f=nl(o,"click",_),a=!0)},p(p,m){n=p,m&36&&Ae(o,"active",n[2]===n[8].code)},d(p){p&&u(o),a=!1,f()}}}function tl(c,n){let o,a,f,_;return a=new Le({props:{content:n[8].body}}),{key:c,first:null,c(){o=e("div"),Vt(a.$$.fragment),f=s(),i(o,"class","tab-item"),Ae(o,"active",n[2]===n[8].code),this.first=o},m(p,m){b(p,o,m),Qt(a,o,null),t(o,f),_=!0},p(p,m){n=p,(!_||m&36)&&Ae(o,"active",n[2]===n[8].code)},i(p){_||(kt(a.$$.fragment,p),_=!0)},o(p){xt(a.$$.fragment,p),_=!1},d(p){p&&u(o),Gt(a)}}}function $l(c){var Oe,Ne,Ee,Se,De,He;let n,o,a=c[0].name+"",f,_,p,m,x,h,C,r=c[0].name+"",Y,vt,Wt,E,Xt,H,at,R,Z,ae,U,J,ce,ct,yt=c[0].name+"",tt,Ft,de,dt,rt,et,S,Yt,Lt,k,lt,At,Zt,Pt,K,st,Rt,te,Tt,y,pt,Ot,re,ft,pe,M,Nt,nt,Et,F,mt,fe,z,St,ee,Dt,le,Ht,me,L,ut,ue,bt,be,I,_e,P,Mt,ot,It,G,_t,ge,B,Bt,v,qt,it,jt,he,Q,gt,$e,ht,Ce,Ut,we,q,Jt,xe,j,ke,$t,se,T,Ct,V,W,O=[],Kt=new Map,ne,X,w=[],wt=new Map,zt;E=new il({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${c[3]}');

        ...

        // fetch a paginated records list
        const resultList = await pb.collection('${(Oe=c[0])==null?void 0:Oe.name}').getList(1, 50, {
            filter: 'someField1 != someField2',
        });

        // you can also fetch all records at once via getFullList
        const records = await pb.collection('${(Ne=c[0])==null?void 0:Ne.name}').getFullList({
            sort: '-someField',
        });

        // or fetch only the first record that matches the specified filter
        const record = await pb.collection('${(Ee=c[0])==null?void 0:Ee.name}').getFirstListItem('someField="test"', {
            expand: 'relField1,relField2.subRelField',
        });
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${c[3]}');

        ...

        // fetch a paginated records list
        final resultList = await pb.collection('${(Se=c[0])==null?void 0:Se.name}').getList(
          page: 1,
          perPage: 50,
          filter: 'someField1 != someField2',
        );

        // you can also fetch all records at once via getFullList
        final records = await pb.collection('${(De=c[0])==null?void 0:De.name}').getFullList(
          sort: '-someField',
        );

        // or fetch only the first record that matches the specified filter
        final record = await pb.collection('${(He=c[0])==null?void 0:He.name}').getFirstListItem(
          'someField="test"',
          expand: 'relField1,relField2.subRelField',
        );
    `}});let N=c[1]&&Xe();nt=new Le({props:{content:`
                        // DESC by created and ASC by id
                        ?sort=-created,id
                    `}});let oe=ie(c[4]),A=[];for(let l=0;l<oe.length;l+=1)A[l]=Ye(We(c,oe,l));P=new Le({props:{content:`
                        ?filter=(id='abc' && created>'2022-01-01')
                    `}}),ot=new hl({}),it=new Le({props:{content:"?expand=relField1,relField2.subRelField"}}),j=new ml({});let Fe=ie(c[5]);const Re=l=>l[8].code;for(let l=0;l<Fe.length;l+=1){let d=Ve(c,Fe,l),$=Re(d);Kt.set($,O[l]=Ze($,d))}let ve=ie(c[5]);const Te=l=>l[8].code;for(let l=0;l<ve.length;l+=1){let d=Qe(c,ve,l),$=Te(d);wt.set($,w[l]=tl($,d))}return{c(){n=e("h3"),o=g("Список/Поиск ("),f=g(a),_=g(")"),p=s(),m=e("div"),x=e("p"),h=g("Получить список записей "),C=e("strong"),Y=g(r),vt=g(" с пагинацией, сортировкой и фильтрацией."),Wt=s(),Vt(E.$$.fragment),Xt=s(),H=e("h6"),H.textContent="Детали API",at=s(),R=e("div"),Z=e("strong"),Z.textContent="GET",ae=s(),U=e("div"),J=e("p"),ce=g("/api/collections/"),ct=e("strong"),tt=g(yt),Ft=g("/records"),de=s(),N&&N.c(),dt=s(),rt=e("div"),rt.textContent="Параметры запроса",et=s(),S=e("table"),Yt=e("thead"),Yt.innerHTML='<tr><th>Параметр</th> <th>Тип</th> <th width="60%">Описание</th></tr>',Lt=s(),k=e("tbody"),lt=e("tr"),lt.innerHTML='<td>page</td> <td><span class="label">Number</span></td> <td>Номер страницы (aka offset) для пагинированного списка (по умолчанию: 1).</td>',At=s(),Zt=e("tr"),Zt.innerHTML='<td>perPage</td> <td><span class="label">Number</span></td> <td>Максимум записей на страницу (по умолчанию: 30).</td>',Pt=s(),K=e("tr"),st=e("td"),st.textContent="sort",Rt=s(),te=e("td"),te.innerHTML='<span class="label">String</span>',Tt=s(),y=e("td"),pt=g("Укажи поля сортировки. "),Ot=e("br"),re=g(`
                Добавь `),ft=e("code"),ft.textContent="-",pe=g(" / "),M=e("code"),M.textContent="+",Nt=g(` (по умолчанию) перед именем поля для DESC / ASC.
                Например:
                `),Vt(nt.$$.fragment),Et=s(),F=e("p"),mt=e("strong"),mt.textContent="Поддерживаемые поля сортировки записей:",fe=s(),z=e("br"),St=s(),ee=e("code"),ee.textContent="@random",Dt=g(`,
                    `),le=e("code"),le.textContent="@rowid",Ht=g(`,
                    `);for(let l=0;l<A.length;l+=1)A[l].c();me=s(),L=e("tr"),ut=e("td"),ut.textContent="filter",ue=s(),bt=e("td"),bt.innerHTML='<span class="label">String</span>',be=s(),I=e("td"),_e=g(`Фильтрует возвращаемые записи. Например:
                `),Vt(P.$$.fragment),Mt=s(),Vt(ot.$$.fragment),It=s(),G=e("tr"),_t=e("td"),_t.textContent="expand",ge=s(),B=e("td"),B.innerHTML='<span class="label">String</span>',Bt=s(),v=e("td"),qt=g(`Автоматически раскрывает связи записи. Например:
                `),Vt(it.$$.fragment),jt=g(`
                Поддерживает вложенность до 6 уровней. `),he=e("br"),Q=g(`
                Раскрытые связи будут добавлены к каждой записи в поле
                `),gt=e("code"),gt.textContent="expand",$e=g(" property (eg. "),ht=e("code"),ht.textContent='"expand": {"relField1": {...}, ...}',Ce=g(`).
                `),Ut=e("br"),we=g(`
                Будут раскрыты только те связи, на которые у пользователя запроса есть права `),q=e("strong"),q.textContent="view",Jt=g("."),xe=s(),Vt(j.$$.fragment),ke=s(),$t=e("tr"),$t.innerHTML=`<td id="query-page">skipTotal</td> <td><span class="label">Boolean</span></td> <td>Если включено — запрос подсчёта totals пропускается, а поля ответа <code>totalItems</code> и
                <code>totalPages</code> будут иметь значение <code>-1</code>.
                <br/>
                Это может сильно ускорить запросы, когда totals не нужны или используется cursor‑пагинация.
                <br/>
                Для оптимизации по умолчанию включено для методов SDK
                <code>getFirstListItem()</code>
                and
                <code>getFullList()</code>.</td>`,se=s(),T=e("div"),T.textContent="Ответы",Ct=s(),V=e("div"),W=e("div");for(let l=0;l<O.length;l+=1)O[l].c();ne=s(),X=e("div");for(let l=0;l<w.length;l+=1)w[l].c();i(n,"class","m-b-sm"),i(m,"class","content txt-lg m-b-sm"),i(H,"class","m-b-xs"),i(Z,"class","label label-primary"),i(U,"class","content"),i(R,"class","alert alert-info"),i(rt,"class","section-title"),i(S,"class","table-compact table-border m-b-base"),i(T,"class","section-title"),i(W,"class","tabs-header compact combined left"),i(X,"class","tabs-content"),i(V,"class","tabs")},m(l,d){b(l,n,d),t(n,o),t(n,f),t(n,_),b(l,p,d),b(l,m,d),t(m,x),t(x,h),t(x,C),t(C,Y),t(x,vt),b(l,Wt,d),Qt(E,l,d),b(l,Xt,d),b(l,H,d),b(l,at,d),b(l,R,d),t(R,Z),t(R,ae),t(R,U),t(U,J),t(J,ce),t(J,ct),t(ct,tt),t(J,Ft),t(R,de),N&&N.m(R,null),b(l,dt,d),b(l,rt,d),b(l,et,d),b(l,S,d),t(S,Yt),t(S,Lt),t(S,k),t(k,lt),t(k,At),t(k,Zt),t(k,Pt),t(k,K),t(K,st),t(K,Rt),t(K,te),t(K,Tt),t(K,y),t(y,pt),t(y,Ot),t(y,re),t(y,ft),t(y,pe),t(y,M),t(y,Nt),Qt(nt,y,null),t(y,Et),t(y,F),t(F,mt),t(F,fe),t(F,z),t(F,St),t(F,ee),t(F,Dt),t(F,le),t(F,Ht);for(let $=0;$<A.length;$+=1)A[$]&&A[$].m(F,null);t(k,me),t(k,L),t(L,ut),t(L,ue),t(L,bt),t(L,be),t(L,I),t(I,_e),Qt(P,I,null),t(I,Mt),Qt(ot,I,null),t(k,It),t(k,G),t(G,_t),t(G,ge),t(G,B),t(G,Bt),t(G,v),t(v,qt),Qt(it,v,null),t(v,jt),t(v,he),t(v,Q),t(v,gt),t(v,$e),t(v,ht),t(v,Ce),t(v,Ut),t(v,we),t(v,q),t(v,Jt),t(k,xe),Qt(j,k,null),t(k,ke),t(k,$t),b(l,se,d),b(l,T,d),b(l,Ct,d),b(l,V,d),t(V,W);for(let $=0;$<O.length;$+=1)O[$]&&O[$].m(W,null);t(V,ne),t(V,X);for(let $=0;$<w.length;$+=1)w[$]&&w[$].m(X,null);zt=!0},p(l,[d]){var Me,Ie,Be,qe,je,Ue;(!zt||d&1)&&a!==(a=l[0].name+"")&&ye(f,a),(!zt||d&1)&&r!==(r=l[0].name+"")&&ye(Y,r);const $={};if(d&9&&($.js=`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${l[3]}');

        ...

        // fetch a paginated records list
        const resultList = await pb.collection('${(Me=l[0])==null?void 0:Me.name}').getList(1, 50, {
            filter: 'someField1 != someField2',
        });

        // you can also fetch all records at once via getFullList
        const records = await pb.collection('${(Ie=l[0])==null?void 0:Ie.name}').getFullList({
            sort: '-someField',
        });

        // or fetch only the first record that matches the specified filter
        const record = await pb.collection('${(Be=l[0])==null?void 0:Be.name}').getFirstListItem('someField="test"', {
            expand: 'relField1,relField2.subRelField',
        });
    `),d&9&&($.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${l[3]}');

        ...

        // fetch a paginated records list
        final resultList = await pb.collection('${(qe=l[0])==null?void 0:qe.name}').getList(
          page: 1,
          perPage: 50,
          filter: 'someField1 != someField2',
        );

        // you can also fetch all records at once via getFullList
        final records = await pb.collection('${(je=l[0])==null?void 0:je.name}').getFullList(
          sort: '-someField',
        );

        // or fetch only the first record that matches the specified filter
        final record = await pb.collection('${(Ue=l[0])==null?void 0:Ue.name}').getFirstListItem(
          'someField="test"',
          expand: 'relField1,relField2.subRelField',
        );
    `),E.$set($),(!zt||d&1)&&yt!==(yt=l[0].name+"")&&ye(tt,yt),l[1]?N||(N=Xe(),N.c(),N.m(R,null)):N&&(N.d(1),N=null),d&16){oe=ie(l[4]);let D;for(D=0;D<oe.length;D+=1){const Je=We(l,oe,D);A[D]?A[D].p(Je,d):(A[D]=Ye(Je),A[D].c(),A[D].m(F,null))}for(;D<A.length;D+=1)A[D].d(1);A.length=oe.length}d&36&&(Fe=ie(l[5]),O=ze(O,d,Re,1,l,Fe,Kt,W,cl,Ze,null,Ve)),d&36&&(ve=ie(l[5]),dl(),w=ze(w,d,Te,1,l,ve,wt,X,rl,tl,null,Qe),pl())},i(l){if(!zt){kt(E.$$.fragment,l),kt(nt.$$.fragment,l),kt(P.$$.fragment,l),kt(ot.$$.fragment,l),kt(it.$$.fragment,l),kt(j.$$.fragment,l);for(let d=0;d<ve.length;d+=1)kt(w[d]);zt=!0}},o(l){xt(E.$$.fragment,l),xt(nt.$$.fragment,l),xt(P.$$.fragment,l),xt(ot.$$.fragment,l),xt(it.$$.fragment,l),xt(j.$$.fragment,l);for(let d=0;d<w.length;d+=1)xt(w[d]);zt=!1},d(l){l&&(u(n),u(p),u(m),u(Wt),u(Xt),u(H),u(at),u(R),u(dt),u(rt),u(et),u(S),u(se),u(T),u(Ct),u(V)),Gt(E,l),N&&N.d(),Gt(nt),al(A,l),Gt(P),Gt(ot),Gt(it),Gt(j);for(let d=0;d<O.length;d+=1)O[d].d();for(let d=0;d<w.length;d+=1)w[d].d()}}}function Cl(c,n,o){let a,f,_,p,{collection:m}=n,x=200,h=[];const C=r=>o(2,x=r.code);return c.$$set=r=>{"collection"in r&&o(0,m=r.collection)},c.$$.update=()=>{c.$$.dirty&1&&o(4,a=Pe.getAllCollectionIdentifiers(m)),c.$$.dirty&1&&o(1,f=(m==null?void 0:m.listRule)===null),c.$$.dirty&1&&o(6,p=Pe.dummyCollectionRecord(m)),c.$$.dirty&67&&m!=null&&m.id&&(h.push({code:200,body:JSON.stringify({page:1,perPage:30,totalPages:1,totalItems:2,items:[p,Object.assign({},p,{id:p.id+"2"})]},null,2)}),h.push({code:400,body:`
                {
                  "status": 400,
                  "message": "Something went wrong while processing your request. Invalid filter.",
                  "data": {}
                }
            `}),f&&h.push({code:403,body:`
                    {
                      "status": 403,
                      "message": "Only superusers can access this action.",
                      "data": {}
                    }
                `}))},o(3,_=Pe.getApiExampleUrl(fl.baseURL)),[m,f,x,_,a,h,p,C]}class kl extends el{constructor(n){super(),ll(this,n,Cl,$l,sl,{collection:0})}}export{kl as default};
