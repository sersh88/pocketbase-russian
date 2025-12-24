<script>
    import { link } from "svelte-spa-router";
    import ApiClient from "@/utils/ApiClient";
    import CommonHelper from "@/utils/CommonHelper";
    import CodeBlock from "@/components/base/CodeBlock.svelte";
    import SdkTabs from "@/components/base/SdkTabs.svelte";

    export let collection;

    let responseTab = 200;
    let responses = [];

    $: backendAbsUrl = CommonHelper.getApiExampleUrl(ApiClient.baseURL);

    $: dummyRecord = CommonHelper.dummyCollectionRecord(collection);

    $: if (collection?.id) {
        responses.push({
            code: 200,
            body: JSON.stringify(
                [
                    {
                        status: 200,
                        body: dummyRecord,
                    },
                    {
                        status: 200,
                        body: Object.assign({}, dummyRecord, { id: dummyRecord.id + "2" }),
                    },
                ],
                null,
                2,
            ),
        });

        responses.push({
            code: 400,
            body: `
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
            `,
        });

        responses.push({
            code: 403,
            body: `
                {
                  "status": 403,
                  "message": "Batch requests are not allowed.",
                  "data": {}
                }
            `,
        });
    }
</script>

<h3 class="m-b-sm">Пакетные create/update/upsert/delete ({collection.name})</h3>
<div class="content txt-lg m-b-sm">
    <p>Пакетные и транзакционные create/update/upsert/delete для нескольких записей одним запросом.</p>
</div>

<div class="alert alert-warning">
    <div class="icon">
        <i class="ri-error-warning-line" />
    </div>
    <div class="content">
        <p>
            Batch Web API нужно явно включить и настроить в
            <a href="/settings" use:link>Dashboard settings</a>.
        </p>
        <p>
            Так как этот эндпоинт обрабатывает запросы в одной транзакции БД, он может просадить
            производительность приложения, если использовать без головы и нормальной конфигурации
            <em
                >(лучше ставить небольшие лимиты на обработку/размер тела, избегать больших загрузок файлов по
                медленным S3‑сетям и кастомных хуков, которые общаются с медленными внешними API)</em
            >.
        </p>
    </div>
</div>

<SdkTabs
    js={`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${backendAbsUrl}');

        ...

        const batch = pb.createBatch();

        batch.collection('${collection?.name}').create({ ... });
        batch.collection('${collection?.name}').update('RECORD_ID', { ... });
        batch.collection('${collection?.name}').delete('RECORD_ID');
        batch.collection('${collection?.name}').upsert({ ... });

        const result = await batch.send();
    `}
    dart={`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${backendAbsUrl}');

        ...

        final batch = pb.createBatch();

        batch.collection('${collection?.name}').create(body: { ... });
        batch.collection('${collection?.name}').update('RECORD_ID', body: { ... });
        batch.collection('${collection?.name}').delete('RECORD_ID');
        batch.collection('${collection?.name}').upsert(body: { ... });

        final result = await batch.send();
    `}
/>

<h6 class="m-b-xs">Детали API</h6>
<div class="api-route alert alert-success">
    <strong class="label label-primary">POST</strong>
    <div class="content">/api/batch</div>
</div>

<div class="section-title">Параметры тела</div>
<p>
    Параметры тела можно отправлять как <em>application/json</em> или <em>multipart/form-data</em>.
    <br />
    Загрузка файлов поддерживается только через <em>multipart/form-data</em> (подробнее — ниже).
</p>
<table class="table-compact table-border m-t-xs m-b-base">
    <thead>
        <tr>
            <th>Параметр</th>
            <th width="80%">Описание</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td valign="top">
                <div class="flex txt-nowrap">
                    <span class="label label-success">Обязательно</span>
                    <span>requests</span>
                </div>
            </td>
            <td>
                <span class="label">{`Array<Request>`}</span> - List of the requests to process.

                <p>Поддерживаемые batch‑действия:</p>
                <ul>
                    <li>создание записи — <code>POST /api/collections/{`{collection}`}/records</code></li>
                    <li>
                        обновление записи —
                        <code>PATCH /api/collections/{`{collection}`}/records/{`{id}`}</code>
                    </li>
                    <li>
                        upsert записи — <code>PUT /api/collections/{`{collection}`}/records</code>
                        <br />
                        <small class="txt-hint">
                            (the body must have <code class="txt-sm">id</code> field)
                        </small>
                    </li>
                    <li>
                        удаление записи —
                        <code>DELETE /api/collections/{`{collection}`}/records/{`{id}`}</code>
                    </li>
                </ul>
                <p>Каждый элемент batch Request содержит такие поля:</p>
                <ul>
                    <li><code>url path</code> <em>(could include query parameters)</em></li>
                    <li><code>method</code> <em>(GET, POST, PUT, PATCH, DELETE)</em></li>
                    <li>
                        <code>headers</code>
                        <br />
                        <em>
                            (custom per-request <code>Authorization</code> header is not supported at the moment,
                            aka. all batch requests have the same auth state)
                        </em>
                    </li>
                    <li><code>body</code></li>
                </ul>
                <p>
                    <strong>Важно!</strong> Когда batch‑запрос отправляется как
                    <code>multipart/form-data</code>, the regular batch action fields are expected to be
                    submitted as serailized json under the <code>@jsonPayload</code> field and file keys need
                    to follow the pattern <code>requests.N.fileField</code> or
                    <code>requests[N].fileField</code>
                    <em>
                        (this is usually handled transparently by the SDKs when their specific object notation
                        is used)
                    </em>.
                    <br />
                    Если не используешь SDK или хочешь собрать <code>FormData</code> вручную — это может
                    выглядеть примерно так:
                    <CodeBlock
                        language="javascript"
                        content={`
                            const formData = new FormData();

                            formData.append("@jsonPayload", JSON.stringify({
                                requests: [
                                    {
                                        method: "POST",
                                        url: "/api/collections/${collection.name}/records?fields=id",
                                        body: { someField: "test1" }
                                    },
                                    {
                                        method: "PATCH",
                                        url: "/api/collections/${collection.name}/records/RECORD_ID",
                                        body: { someField: "test2" }
                                    }
                                ]
                            }))

                            // file for the first request
                            formData.append("requests.0.someFileField", new File(...))

                            // file for the second request
                            formData.append("requests.1.someFileField", new File(...))
                        `}
                    />
                </p>
            </td>
        </tr>
    </tbody>
</table>

<div class="section-title">Ответы</div>
<div class="tabs">
    <div class="tabs-header compact combined left">
        {#each responses as response (response.code)}
            <button
                class="tab-item"
                class:active={responseTab === response.code}
                on:click={() => (responseTab = response.code)}
            >
                {response.code}
            </button>
        {/each}
    </div>
    <div class="tabs-content">
        {#each responses as response (response.code)}
            <div class="tab-item" class:active={responseTab === response.code}>
                <CodeBlock content={response.body} />
            </div>
        {/each}
    </div>
</div>
