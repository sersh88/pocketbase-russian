<script>
    import CodeBlock from "@/components/base/CodeBlock.svelte";
    import FieldsQueryParam from "@/components/collections/docs/FieldsQueryParam.svelte";
    import SdkTabs from "@/components/base/SdkTabs.svelte";
    import ApiClient from "@/utils/ApiClient";
    import CommonHelper from "@/utils/CommonHelper";

    export let collection;

    let responseTab = 200;
    let responses = [];
    let authMethods = {};
    let isLoading = false;

    $: backendAbsUrl = CommonHelper.getApiExampleUrl(ApiClient.baseURL);

    $: responses = [
        {
            code: 200,
            body: isLoading ? "..." : JSON.stringify(authMethods, null, 2),
        },
        {
            code: 404,
            body: `
                {
                  "status": 404,
                  "message": "Missing collection context.",
                  "data": {}
                }
            `,
        },
    ];

    listAuthMethods();

    async function listAuthMethods() {
        isLoading = true;
        try {
            authMethods = await ApiClient.collection(collection.name).listAuthMethods();
        } catch (err) {
            ApiClient.error(err);
        }
        isLoading = false;
    }
</script>

<h3 class="m-b-sm">Список способов входа ({collection.name})</h3>
<div class="content txt-lg m-b-sm">
    <p>Возвращает публичный список всех разрешённых способов входа для <strong>{collection.name}</strong>.</p>
</div>

<SdkTabs
    js={`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${backendAbsUrl}');

        ...

        const result = await pb.collection('${collection?.name}').listAuthMethods();
    `}
    dart={`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${backendAbsUrl}');

        ...

        final result = await pb.collection('${collection?.name}').listAuthMethods();
    `}
/>

<h6 class="m-b-xs">Детали API</h6>
<div class="alert alert-info">
    <strong class="label label-primary">GET</strong>
    <div class="content">
        <p>
            /api/collections/<strong>{collection.name}</strong>/auth-methods
        </p>
    </div>
</div>

<div class="section-title">Параметры запроса</div>
<table class="table-compact table-border m-b-base">
    <thead>
        <tr>
            <th>Параметр</th>
            <th>Тип</th>
            <th width="50%">Описание</th>
        </tr>
    </thead>
    <tbody>
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
