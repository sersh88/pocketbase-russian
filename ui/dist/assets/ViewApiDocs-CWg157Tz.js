import{S as lt,i as st,s as nt,V as at,W as tt,X as Q,h as d,d as W,t as J,a as N,I as ve,Z as Ke,_ as ot,C as it,$ as dt,D as rt,l as r,n as l,m as X,u as a,A as _,v as b,c as Z,w as m,J as Qe,p as ct,k as Y,o as pt}from"./index-BozUHKR0.js";import{F as ut}from"./FieldsQueryParam-BRUGZH-z.js";function We(o,s,n){const i=o.slice();return i[6]=s[n],i}function Xe(o,s,n){const i=o.slice();return i[6]=s[n],i}function Ze(o){let s;return{c(){s=a("p"),s.innerHTML="Нужен заголовок суперпользователя <code>Authorization:TOKEN</code>",m(s,"class","txt-hint txt-sm txt-right")},m(n,i){r(n,s,i)},d(n){n&&d(s)}}}function Ye(o,s){let n,i,v;function p(){return s[5](s[6])}return{key:o,first:null,c(){n=a("button"),n.textContent=`${s[6].code} `,m(n,"class","tab-item"),Y(n,"active",s[2]===s[6].code),this.first=n},m(c,f){r(c,n,f),i||(v=pt(n,"click",p),i=!0)},p(c,f){s=c,f&20&&Y(n,"active",s[2]===s[6].code)},d(c){c&&d(n),i=!1,v()}}}function et(o,s){let n,i,v,p;return i=new tt({props:{content:s[6].body}}),{key:o,first:null,c(){n=a("div"),Z(i.$$.fragment),v=b(),m(n,"class","tab-item"),Y(n,"active",s[2]===s[6].code),this.first=n},m(c,f){r(c,n,f),X(i,n,null),l(n,v),p=!0},p(c,f){s=c,(!p||f&20)&&Y(n,"active",s[2]===s[6].code)},i(c){p||(N(i.$$.fragment,c),p=!0)},o(c){J(i.$$.fragment,c),p=!1},d(c){c&&d(n),W(i)}}}function ft(o){var Ve,xe;let s,n,i=o[0].name+"",v,p,c,f,C,w,ee,V=o[0].name+"",te,$e,le,F,se,I,ne,$,x,ye,z,T,Ce,ae,G=o[0].name+"",oe,we,ie,Fe,de,A,re,M,ce,S,pe,R,ue,Re,H,O,fe,Oe,be,De,h,Pe,B,Te,Be,Ee,me,Ie,_e,Ae,Me,Se,he,He,Le,E,ke,L,ge,D,q,y=[],qe=new Map,Ue,U,k=[],je=new Map,P;F=new at({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${o[3]}');

        ...

        const record = await pb.collection('${(Ve=o[0])==null?void 0:Ve.name}').getOne('RECORD_ID', {
            expand: 'relField1,relField2.subRelField',
        });
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${o[3]}');

        ...

        final record = await pb.collection('${(xe=o[0])==null?void 0:xe.name}').getOne('RECORD_ID',
          expand: 'relField1,relField2.subRelField',
        );
    `}});let g=o[1]&&Ze();B=new tt({props:{content:"?expand=relField1,relField2.subRelField"}}),E=new ut({});let K=Q(o[4]);const Je=e=>e[6].code;for(let e=0;e<K.length;e+=1){let t=Xe(o,K,e),u=Je(t);qe.set(u,y[e]=Ye(u,t))}let j=Q(o[4]);const Ne=e=>e[6].code;for(let e=0;e<j.length;e+=1){let t=We(o,j,e),u=Ne(t);je.set(u,k[e]=et(u,t))}return{c(){s=a("h3"),n=_("Просмотр ("),v=_(i),p=_(")"),c=b(),f=a("div"),C=a("p"),w=_("Получить одну запись "),ee=a("strong"),te=_(V),$e=_("."),le=b(),Z(F.$$.fragment),se=b(),I=a("h6"),I.textContent="Детали API",ne=b(),$=a("div"),x=a("strong"),x.textContent="GET",ye=b(),z=a("div"),T=a("p"),Ce=_("/api/collections/"),ae=a("strong"),oe=_(G),we=_("/records/"),ie=a("strong"),ie.textContent=":id",Fe=b(),g&&g.c(),de=b(),A=a("div"),A.textContent="Path‑параметры",re=b(),M=a("table"),M.innerHTML='<thead><tr><th>Параметр</th> <th>Тип</th> <th width="60%">Описание</th></tr></thead> <tbody><tr><td>id</td> <td><span class="label">String</span></td> <td>ID записи, которую надо получить.</td></tr></tbody>',ce=b(),S=a("div"),S.textContent="Параметры запроса",pe=b(),R=a("table"),ue=a("thead"),ue.innerHTML='<tr><th>Параметр</th> <th>Тип</th> <th width="60%">Описание</th></tr>',Re=b(),H=a("tbody"),O=a("tr"),fe=a("td"),fe.textContent="expand",Oe=b(),be=a("td"),be.innerHTML='<span class="label">String</span>',De=b(),h=a("td"),Pe=_(`Автоматически раскрывает связи записи. Например:
                `),Z(B.$$.fragment),Te=_(`
                Поддерживает вложенность до 6 уровней. `),Be=a("br"),Ee=_(`
                Раскрытые связи будут добавлены к записи в поле
                `),me=a("code"),me.textContent="expand",Ie=_(" property (eg. "),_e=a("code"),_e.textContent='"expand": {"relField1": {...}, ...}',Ae=_(`).
                `),Me=a("br"),Se=_(`
                Будут раскрыты только те связи, на которые у пользователя запроса есть права `),he=a("strong"),he.textContent="view",He=_("."),Le=b(),Z(E.$$.fragment),ke=b(),L=a("div"),L.textContent="Ответы",ge=b(),D=a("div"),q=a("div");for(let e=0;e<y.length;e+=1)y[e].c();Ue=b(),U=a("div");for(let e=0;e<k.length;e+=1)k[e].c();m(s,"class","m-b-sm"),m(f,"class","content txt-lg m-b-sm"),m(I,"class","m-b-xs"),m(x,"class","label label-primary"),m(z,"class","content"),m($,"class","alert alert-info"),m(A,"class","section-title"),m(M,"class","table-compact table-border m-b-base"),m(S,"class","section-title"),m(R,"class","table-compact table-border m-b-base"),m(L,"class","section-title"),m(q,"class","tabs-header compact combined left"),m(U,"class","tabs-content"),m(D,"class","tabs")},m(e,t){r(e,s,t),l(s,n),l(s,v),l(s,p),r(e,c,t),r(e,f,t),l(f,C),l(C,w),l(C,ee),l(ee,te),l(C,$e),r(e,le,t),X(F,e,t),r(e,se,t),r(e,I,t),r(e,ne,t),r(e,$,t),l($,x),l($,ye),l($,z),l(z,T),l(T,Ce),l(T,ae),l(ae,oe),l(T,we),l(T,ie),l($,Fe),g&&g.m($,null),r(e,de,t),r(e,A,t),r(e,re,t),r(e,M,t),r(e,ce,t),r(e,S,t),r(e,pe,t),r(e,R,t),l(R,ue),l(R,Re),l(R,H),l(H,O),l(O,fe),l(O,Oe),l(O,be),l(O,De),l(O,h),l(h,Pe),X(B,h,null),l(h,Te),l(h,Be),l(h,Ee),l(h,me),l(h,Ie),l(h,_e),l(h,Ae),l(h,Me),l(h,Se),l(h,he),l(h,He),l(H,Le),X(E,H,null),r(e,ke,t),r(e,L,t),r(e,ge,t),r(e,D,t),l(D,q);for(let u=0;u<y.length;u+=1)y[u]&&y[u].m(q,null);l(D,Ue),l(D,U);for(let u=0;u<k.length;u+=1)k[u]&&k[u].m(U,null);P=!0},p(e,[t]){var ze,Ge;(!P||t&1)&&i!==(i=e[0].name+"")&&ve(v,i),(!P||t&1)&&V!==(V=e[0].name+"")&&ve(te,V);const u={};t&9&&(u.js=`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e[3]}');

        ...

        const record = await pb.collection('${(ze=e[0])==null?void 0:ze.name}').getOne('RECORD_ID', {
            expand: 'relField1,relField2.subRelField',
        });
    `),t&9&&(u.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e[3]}');

        ...

        final record = await pb.collection('${(Ge=e[0])==null?void 0:Ge.name}').getOne('RECORD_ID',
          expand: 'relField1,relField2.subRelField',
        );
    `),F.$set(u),(!P||t&1)&&G!==(G=e[0].name+"")&&ve(oe,G),e[1]?g||(g=Ze(),g.c(),g.m($,null)):g&&(g.d(1),g=null),t&20&&(K=Q(e[4]),y=Ke(y,t,Je,1,e,K,qe,q,ot,Ye,null,Xe)),t&20&&(j=Q(e[4]),it(),k=Ke(k,t,Ne,1,e,j,je,U,dt,et,null,We),rt())},i(e){if(!P){N(F.$$.fragment,e),N(B.$$.fragment,e),N(E.$$.fragment,e);for(let t=0;t<j.length;t+=1)N(k[t]);P=!0}},o(e){J(F.$$.fragment,e),J(B.$$.fragment,e),J(E.$$.fragment,e);for(let t=0;t<k.length;t+=1)J(k[t]);P=!1},d(e){e&&(d(s),d(c),d(f),d(le),d(se),d(I),d(ne),d($),d(de),d(A),d(re),d(M),d(ce),d(S),d(pe),d(R),d(ke),d(L),d(ge),d(D)),W(F,e),g&&g.d(),W(B),W(E);for(let t=0;t<y.length;t+=1)y[t].d();for(let t=0;t<k.length;t+=1)k[t].d()}}}function bt(o,s,n){let i,v,{collection:p}=s,c=200,f=[];const C=w=>n(2,c=w.code);return o.$$set=w=>{"collection"in w&&n(0,p=w.collection)},o.$$.update=()=>{o.$$.dirty&1&&n(1,i=(p==null?void 0:p.viewRule)===null),o.$$.dirty&3&&p!=null&&p.id&&(f.push({code:200,body:JSON.stringify(Qe.dummyCollectionRecord(p),null,2)}),i&&f.push({code:403,body:`
                    {
                      "status": 403,
                      "message": "Only superusers can access this action.",
                      "data": {}
                    }
                `}),f.push({code:404,body:`
                {
                  "status": 404,
                  "message": "The requested resource wasn't found.",
                  "data": {}
                }
            `}))},n(3,v=Qe.getApiExampleUrl(ct.baseURL)),[p,i,c,v,f,C]}class ht extends lt{constructor(s){super(),st(this,s,bt,ft,nt,{collection:0})}}export{ht as default};
