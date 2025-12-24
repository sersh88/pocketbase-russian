import{S as St,i as At,s as Lt,V as Mt,W as It,X as Q,h as r,d as Te,t as Y,a as x,I as jt,Z as Pt,_ as Nt,C as Ut,$ as Jt,D as zt,l as m,n as t,m as qe,E as Gt,G as Kt,u as a,A as _,v as i,c as Pe,w as b,J as Ft,p as Wt,k as ee,o as Vt}from"./index-BozUHKR0.js";function Et(s,o,n){const c=s.slice();return c[6]=o[n],c}function Ot(s,o,n){const c=s.slice();return c[6]=o[n],c}function Bt(s,o){let n,c,$;function h(){return o[5](o[6])}return{key:s,first:null,c(){n=a("button"),n.textContent=`${o[6].code} `,b(n,"class","tab-item"),ee(n,"active",o[1]===o[6].code),this.first=n},m(d,f){m(d,n,f),c||($=Vt(n,"click",h),c=!0)},p(d,f){o=d,f&10&&ee(n,"active",o[1]===o[6].code)},d(d){d&&r(n),c=!1,$()}}}function Ht(s,o){let n,c,$,h;return c=new It({props:{content:o[6].body}}),{key:s,first:null,c(){n=a("div"),Pe(c.$$.fragment),$=i(),b(n,"class","tab-item"),ee(n,"active",o[1]===o[6].code),this.first=n},m(d,f){m(d,n,f),qe(c,n,null),t(n,$),h=!0},p(d,f){o=d,(!h||f&10)&&ee(n,"active",o[1]===o[6].code)},i(d){h||(x(c.$$.fragment,d),h=!0)},o(d){Y(c.$$.fragment,d),h=!1},d(d){d&&r(n),Te(c)}}}function Xt(s){var ut,pt,bt,ft,ht,_t,$t,kt;let o,n,c=s[0].name+"",$,h,d,f,F,C,U,Fe,P,E,Ee,O,Oe,Be,te,le,w,ae,B,se,H,oe,I,ne,J,ie,R,ce,He,de,S,z,Ie,k,G,Se,re,Ae,v,K,Le,me,Me,W,je,ue,Ne,g,Ue,pe,Je,ze,Ge,V,Ke,X,We,be,Ve,fe,Xe,he,Ze,u,_e,Qe,$e,Ye,ke,xe,ye,et,Ce,tt,De,lt,at,st,ve,ot,T,ge,A,we,q,L,D=[],nt=new Map,it,M,y=[],ct=new Map,j,Re,dt;w=new Mt({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${s[2]}');

        ...

        const batch = pb.createBatch();

        batch.collection('${(ut=s[0])==null?void 0:ut.name}').create({ ... });
        batch.collection('${(pt=s[0])==null?void 0:pt.name}').update('RECORD_ID', { ... });
        batch.collection('${(bt=s[0])==null?void 0:bt.name}').delete('RECORD_ID');
        batch.collection('${(ft=s[0])==null?void 0:ft.name}').upsert({ ... });

        const result = await batch.send();
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${s[2]}');

        ...

        final batch = pb.createBatch();

        batch.collection('${(ht=s[0])==null?void 0:ht.name}').create(body: { ... });
        batch.collection('${(_t=s[0])==null?void 0:_t.name}').update('RECORD_ID', body: { ... });
        batch.collection('${($t=s[0])==null?void 0:$t.name}').delete('RECORD_ID');
        batch.collection('${(kt=s[0])==null?void 0:kt.name}').upsert(body: { ... });

        final result = await batch.send();
    `}}),T=new It({props:{language:"javascript",content:`
                            const formData = new FormData();

                            formData.append("@jsonPayload", JSON.stringify({
                                requests: [
                                    {
                                        method: "POST",
                                        url: "/api/collections/${s[0].name}/records?fields=id",
                                        body: { someField: "test1" }
                                    },
                                    {
                                        method: "PATCH",
                                        url: "/api/collections/${s[0].name}/records/RECORD_ID",
                                        body: { someField: "test2" }
                                    }
                                ]
                            }))

                            // file for the first request
                            formData.append("requests.0.someFileField", new File(...))

                            // file for the second request
                            formData.append("requests.1.someFileField", new File(...))
                        `}});let Z=Q(s[3]);const rt=e=>e[6].code;for(let e=0;e<Z.length;e+=1){let l=Ot(s,Z,e),p=rt(l);nt.set(p,D[e]=Bt(p,l))}let N=Q(s[3]);const mt=e=>e[6].code;for(let e=0;e<N.length;e+=1){let l=Et(s,N,e),p=mt(l);ct.set(p,y[e]=Ht(p,l))}return{c(){o=a("h3"),n=_("Пакетные create/update/upsert/delete ("),$=_(c),h=_(")"),d=i(),f=a("div"),f.innerHTML="<p>Пакетные и транзакционные create/update/upsert/delete для нескольких записей одним запросом.</p>",F=i(),C=a("div"),U=a("div"),U.innerHTML='<i class="ri-error-warning-line"></i>',Fe=i(),P=a("div"),E=a("p"),Ee=_(`Batch Web API нужно явно включить и настроить в
            `),O=a("a"),O.textContent="Dashboard settings",Oe=_("."),Be=i(),te=a("p"),te.innerHTML=`Так как этот эндпоинт обрабатывает запросы в одной транзакции БД, он может просадить
            производительность приложения, если использовать без головы и нормальной конфигурации
            <em>(лучше ставить небольшие лимиты на обработку/размер тела, избегать больших загрузок файлов по
                медленным S3‑сетям и кастомных хуков, которые общаются с медленными внешними API)</em>.`,le=i(),Pe(w.$$.fragment),ae=i(),B=a("h6"),B.textContent="Детали API",se=i(),H=a("div"),H.innerHTML='<strong class="label label-primary">POST</strong> <div class="content">/api/batch</div>',oe=i(),I=a("div"),I.textContent="Параметры тела",ne=i(),J=a("p"),J.innerHTML=`Параметры тела можно отправлять как <em>application/json</em> или <em>multipart/form-data</em>.
    <br/>
    Загрузка файлов поддерживается только через <em>multipart/form-data</em> (подробнее — ниже).`,ie=i(),R=a("table"),ce=a("thead"),ce.innerHTML='<tr><th>Параметр</th> <th width="80%">Описание</th></tr>',He=i(),de=a("tbody"),S=a("tr"),z=a("td"),z.innerHTML='<div class="flex txt-nowrap"><span class="label label-success">Обязательно</span> <span>requests</span></div>',Ie=i(),k=a("td"),G=a("span"),G.textContent="Array<Request>",Se=_(` - List of the requests to process.

                `),re=a("p"),re.textContent="Поддерживаемые batch‑действия:",Ae=i(),v=a("ul"),K=a("li"),Le=_("создание записи — "),me=a("code"),me.textContent="POST /api/collections/{collection}/records",Me=i(),W=a("li"),je=_(`обновление записи —
                        `),ue=a("code"),ue.textContent="PATCH /api/collections/{collection}/records/{id}",Ne=i(),g=a("li"),Ue=_("upsert записи — "),pe=a("code"),pe.textContent="PUT /api/collections/{collection}/records",Je=i(),ze=a("br"),Ge=i(),V=a("small"),V.innerHTML='(the body must have <code class="txt-sm">id</code> field)',Ke=i(),X=a("li"),We=_(`удаление записи —
                        `),be=a("code"),be.textContent="DELETE /api/collections/{collection}/records/{id}",Ve=i(),fe=a("p"),fe.textContent="Каждый элемент batch Request содержит такие поля:",Xe=i(),he=a("ul"),he.innerHTML=`<li><code>url path</code> <em>(could include query parameters)</em></li> <li><code>method</code> <em>(GET, POST, PUT, PATCH, DELETE)</em></li> <li><code>headers</code> <br/> <em>(custom per-request <code>Authorization</code> header is not supported at the moment,
                            aka. all batch requests have the same auth state)</em></li> <li><code>body</code></li>`,Ze=i(),u=a("p"),_e=a("strong"),_e.textContent="Важно!",Qe=_(` Когда batch‑запрос отправляется как
                    `),$e=a("code"),$e.textContent="multipart/form-data",Ye=_(`, the regular batch action fields are expected to be
                    submitted as serailized json under the `),ke=a("code"),ke.textContent="@jsonPayload",xe=_(` field and file keys need
                    to follow the pattern `),ye=a("code"),ye.textContent="requests.N.fileField",et=_(` or
                    `),Ce=a("code"),Ce.textContent="requests[N].fileField",tt=i(),De=a("em"),De.textContent=`(this is usually handled transparently by the SDKs when their specific object notation
                        is used)
                    `,lt=_(`.
                    `),at=a("br"),st=_(`
                    Если не используешь SDK или хочешь собрать `),ve=a("code"),ve.textContent="FormData",ot=_(` вручную — это может
                    выглядеть примерно так:
                    `),Pe(T.$$.fragment),ge=i(),A=a("div"),A.textContent="Ответы",we=i(),q=a("div"),L=a("div");for(let e=0;e<D.length;e+=1)D[e].c();it=i(),M=a("div");for(let e=0;e<y.length;e+=1)y[e].c();b(o,"class","m-b-sm"),b(f,"class","content txt-lg m-b-sm"),b(U,"class","icon"),b(O,"href","/settings"),b(P,"class","content"),b(C,"class","alert alert-warning"),b(B,"class","m-b-xs"),b(H,"class","api-route alert alert-success"),b(I,"class","section-title"),b(z,"valign","top"),b(G,"class","label"),b(V,"class","txt-hint"),b(R,"class","table-compact table-border m-t-xs m-b-base"),b(A,"class","section-title"),b(L,"class","tabs-header compact combined left"),b(M,"class","tabs-content"),b(q,"class","tabs")},m(e,l){m(e,o,l),t(o,n),t(o,$),t(o,h),m(e,d,l),m(e,f,l),m(e,F,l),m(e,C,l),t(C,U),t(C,Fe),t(C,P),t(P,E),t(E,Ee),t(E,O),t(E,Oe),t(P,Be),t(P,te),m(e,le,l),qe(w,e,l),m(e,ae,l),m(e,B,l),m(e,se,l),m(e,H,l),m(e,oe,l),m(e,I,l),m(e,ne,l),m(e,J,l),m(e,ie,l),m(e,R,l),t(R,ce),t(R,He),t(R,de),t(de,S),t(S,z),t(S,Ie),t(S,k),t(k,G),t(k,Se),t(k,re),t(k,Ae),t(k,v),t(v,K),t(K,Le),t(K,me),t(v,Me),t(v,W),t(W,je),t(W,ue),t(v,Ne),t(v,g),t(g,Ue),t(g,pe),t(g,Je),t(g,ze),t(g,Ge),t(g,V),t(v,Ke),t(v,X),t(X,We),t(X,be),t(k,Ve),t(k,fe),t(k,Xe),t(k,he),t(k,Ze),t(k,u),t(u,_e),t(u,Qe),t(u,$e),t(u,Ye),t(u,ke),t(u,xe),t(u,ye),t(u,et),t(u,Ce),t(u,tt),t(u,De),t(u,lt),t(u,at),t(u,st),t(u,ve),t(u,ot),qe(T,u,null),m(e,ge,l),m(e,A,l),m(e,we,l),m(e,q,l),t(q,L);for(let p=0;p<D.length;p+=1)D[p]&&D[p].m(L,null);t(q,it),t(q,M);for(let p=0;p<y.length;p+=1)y[p]&&y[p].m(M,null);j=!0,Re||(dt=Gt(Kt.call(null,O)),Re=!0)},p(e,[l]){var Ct,Dt,vt,gt,wt,Rt,Tt,qt;(!j||l&1)&&c!==(c=e[0].name+"")&&jt($,c);const p={};l&5&&(p.js=`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e[2]}');

        ...

        const batch = pb.createBatch();

        batch.collection('${(Ct=e[0])==null?void 0:Ct.name}').create({ ... });
        batch.collection('${(Dt=e[0])==null?void 0:Dt.name}').update('RECORD_ID', { ... });
        batch.collection('${(vt=e[0])==null?void 0:vt.name}').delete('RECORD_ID');
        batch.collection('${(gt=e[0])==null?void 0:gt.name}').upsert({ ... });

        const result = await batch.send();
    `),l&5&&(p.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e[2]}');

        ...

        final batch = pb.createBatch();

        batch.collection('${(wt=e[0])==null?void 0:wt.name}').create(body: { ... });
        batch.collection('${(Rt=e[0])==null?void 0:Rt.name}').update('RECORD_ID', body: { ... });
        batch.collection('${(Tt=e[0])==null?void 0:Tt.name}').delete('RECORD_ID');
        batch.collection('${(qt=e[0])==null?void 0:qt.name}').upsert(body: { ... });

        final result = await batch.send();
    `),w.$set(p);const yt={};l&1&&(yt.content=`
                            const formData = new FormData();

                            formData.append("@jsonPayload", JSON.stringify({
                                requests: [
                                    {
                                        method: "POST",
                                        url: "/api/collections/${e[0].name}/records?fields=id",
                                        body: { someField: "test1" }
                                    },
                                    {
                                        method: "PATCH",
                                        url: "/api/collections/${e[0].name}/records/RECORD_ID",
                                        body: { someField: "test2" }
                                    }
                                ]
                            }))

                            // file for the first request
                            formData.append("requests.0.someFileField", new File(...))

                            // file for the second request
                            formData.append("requests.1.someFileField", new File(...))
                        `),T.$set(yt),l&10&&(Z=Q(e[3]),D=Pt(D,l,rt,1,e,Z,nt,L,Nt,Bt,null,Ot)),l&10&&(N=Q(e[3]),Ut(),y=Pt(y,l,mt,1,e,N,ct,M,Jt,Ht,null,Et),zt())},i(e){if(!j){x(w.$$.fragment,e),x(T.$$.fragment,e);for(let l=0;l<N.length;l+=1)x(y[l]);j=!0}},o(e){Y(w.$$.fragment,e),Y(T.$$.fragment,e);for(let l=0;l<y.length;l+=1)Y(y[l]);j=!1},d(e){e&&(r(o),r(d),r(f),r(F),r(C),r(le),r(ae),r(B),r(se),r(H),r(oe),r(I),r(ne),r(J),r(ie),r(R),r(ge),r(A),r(we),r(q)),Te(w,e),Te(T);for(let l=0;l<D.length;l+=1)D[l].d();for(let l=0;l<y.length;l+=1)y[l].d();Re=!1,dt()}}}function Zt(s,o,n){let c,$,{collection:h}=o,d=200,f=[];const F=C=>n(1,d=C.code);return s.$$set=C=>{"collection"in C&&n(0,h=C.collection)},s.$$.update=()=>{s.$$.dirty&1&&n(4,$=Ft.dummyCollectionRecord(h)),s.$$.dirty&17&&h!=null&&h.id&&(f.push({code:200,body:JSON.stringify([{status:200,body:$},{status:200,body:Object.assign({},$,{id:$.id+"2"})}],null,2)}),f.push({code:400,body:`
                {
                  "status": 400,
                  "message": "Batch transaction failed.",
                  "data": {
                    "requests": {
                      "1": {
                        "code": "batch_request_failed",
                        "message": "Batch request failed.",
                        "response": {
                          "status": 400,
                          "message": "Failed to create record.",
                          "data": {
                            "id": {
                              "code": "validation_min_text_constraint",
                              "message": "Must be at least 3 character(s).",
                              "params": { "min": 3 }
                            }
                          }
                        }
                      }
                    }
                  }
                }
            `}),f.push({code:403,body:`
                {
                  "status": 403,
                  "message": "Batch requests are not allowed.",
                  "data": {}
                }
            `}))},n(2,c=Ft.getApiExampleUrl(Wt.baseURL)),[h,d,c,f,$,F]}class Yt extends St{constructor(o){super(),At(this,o,Zt,Xt,Lt,{collection:0})}}export{Yt as default};
