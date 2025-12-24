<script>
    import ApiClient from "@/utils/ApiClient";
    import CommonHelper from "@/utils/CommonHelper";
    import CodeBlock from "@/components/base/CodeBlock.svelte";
    import SdkTabs from "@/components/base/SdkTabs.svelte";
    import FieldsQueryParam from "@/components/collections/docs/FieldsQueryParam.svelte";

    export let collection;

    let responseTab = 200;
    let responses = [];

    $: superusersOnly = collection?.viewRule === null;

    $: backendAbsUrl = CommonHelper.getApiExampleUrl(ApiClient.baseURL);

    $: if (collection?.id) {
        responses.push({
            code: 200,
            body: JSON.stringify(CommonHelper.dummyCollectionRecord(collection), null, 2),
        });

        if (superusersOnly) {
            responses.push({
                code: 403,
                body: `
                    {
                      "status": 403,
                      "message": "Only superusers can access this action.",
                      "data": {}
                    }
                `,
            });
        }

        responses.push({
            code: 404,
            body: `
                {
                  "status": 404,
                  "message": "The requested resource wasn't found.",
                  "data": {}
                }
            `,
        });
    }
</script>

<h3 class="m-b-sm">Просмотр ({collection.name})</h3>
<div class="content txt-lg m-b-sm">
    <p>Получить одну запись <strong>{collection.name}</strong>.</p>
</div>

<SdkTabs
    js={`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${backendAbsUrl}');

        ...

        const record = await pb.collection('${collection?.name}').getOne('RECORD_ID', {
            expand: 'relField1,relField2.subRelField',
        });
    `}
    dart={`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${backendAbsUrl}');

        ...

        final record = await pb.collection('${collection?.name}').getOne('RECORD_ID',
          expand: 'relField1,relField2.subRelField',
        );
    `}
/>

<h6 class="m-b-xs">Детали API</h6>
<div class="alert alert-info">
    <strong class="label label-primary">GET</strong>
    <div class="content">
        <p>
            /api/collections/<strong>{collection.name}</strong>/records/<strong>:id</strong>
        </p>
    </div>
    {#if superusersOnly}
        <p class="txt-hint txt-sm txt-right">Нужен заголовок суперпользователя <code>Authorization:TOKEN</code></p>
    {/if}
</div>

<div class="section-title">Path‑параметры</div>
<table class="table-compact table-border m-b-base">
    <thead>
        <tr>
            <th>Параметр</th>
            <th>Тип</th>
            <th width="60%">Описание</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>id</td>
            <td>
                <span class="label">String</span>
            </td>
            <td>ID записи, которую надо получить.</td>
        </tr>
    </tbody>
</table>

<div class="section-title">Параметры запроса</div>
<table class="table-compact table-border m-b-base">
    <thead>
        <tr>
            <th>Параметр</th>
            <th>Тип</th>
            <th width="60%">Описание</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>expand</td>
            <td>
                <span class="label">String</span>
            </td>
            <td>
                Автоматически раскрывает связи записи. Например:
                <CodeBlock content={`?expand=relField1,relField2.subRelField`} />
                Поддерживает вложенность до 6 уровней. <br />
                Раскрытые связи будут добавлены к записи в поле
                <code>expand</code> property (eg. <code>{`"expand": {"relField1": {...}, ...}`}</code>).
                <br />
                Будут раскрыты только те связи, на которые у пользователя запроса есть права <strong>view</strong>.
            </td>
        </tr>
        <FieldsQueryParam />
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
