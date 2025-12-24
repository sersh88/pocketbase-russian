<script>
    import CodeBlock from "@/components/base/CodeBlock.svelte";
    import FieldsQueryParam from "@/components/collections/docs/FieldsQueryParam.svelte";
    import SdkTabs from "@/components/base/SdkTabs.svelte";
    import ApiClient from "@/utils/ApiClient";
    import CommonHelper from "@/utils/CommonHelper";

    export let collection;

    let responseTab = 200;
    let responses = [];

    $: backendAbsUrl = CommonHelper.getApiExampleUrl(ApiClient.baseURL);

    $: responses = [
        {
            code: 200,
            body: JSON.stringify(
                {
                    token: "JWT_TOKEN",
                    record: CommonHelper.dummyCollectionRecord(collection),
                },
                null,
                2,
            ),
        },
        {
            code: 401,
            body: `
                {
                  "status": 401,
                  "message": "The request requires valid record authorization token to be set.",
                  "data": {}
                }
            `,
        },
        {
            code: 403,
            body: `
                {
                  "status": 403,
                  "message": "The authorized record model is not allowed to perform this action.",
                  "data": {}
                }
            `,
        },
        {
            code: 404,
            body: `
                {
                  "status": 404,
                  "message": "Missing auth record context.",
                  "data": {}
                }
            `,
        },
    ];
</script>

<h3 class="m-b-sm">Обновление auth ({collection.name})</h3>
<div class="content txt-lg m-b-sm">
    <p>
        Возвращает новый auth‑ответ (token и данные записи) для
        <strong>уже аутентифицированной записи</strong>.
    </p>
    <p>
        Обычно этот метод вызывают при перезагрузке страницы/экрана, чтобы убедиться, что ранее сохранённые
        данные в <code>pb.authStore</code> всё ещё валидны и актуальны.
    </p>
</div>

<SdkTabs
    js={`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${backendAbsUrl}');

        ...

        const authData = await pb.collection('${collection?.name}').authRefresh();

        // after the above you can also access the refreshed auth data from the authStore
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.record.id);
    `}
    dart={`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${backendAbsUrl}');

        ...

        final authData = await pb.collection('${collection?.name}').authRefresh();

        // after the above you can also access the refreshed auth data from the authStore
        print(pb.authStore.isValid);
        print(pb.authStore.token);
        print(pb.authStore.record.id);
    `}
/>

<h6 class="m-b-xs">Детали API</h6>
<div class="alert alert-success">
    <strong class="label label-primary">POST</strong>
    <div class="content">
        <p>
            /api/collections/<strong>{collection.name}</strong>/auth-refresh
        </p>
    </div>
    <p class="txt-hint txt-sm txt-right">Нужен заголовок <code>Authorization:TOKEN</code></p>
</div>

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
        <FieldsQueryParam prefix="record." />
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
