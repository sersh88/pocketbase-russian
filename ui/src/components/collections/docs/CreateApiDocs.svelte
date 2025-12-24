<script>
    import CodeBlock from "@/components/base/CodeBlock.svelte";
    import FieldsQueryParam from "@/components/collections/docs/FieldsQueryParam.svelte";
    import SdkTabs from "@/components/base/SdkTabs.svelte";
    import ApiClient from "@/utils/ApiClient";
    import CommonHelper from "@/utils/CommonHelper";

    export let collection;

    let responseTab = 200;
    let responses = [];

    $: isAuth = collection.type === "auth";

    $: superusersOnly = collection?.createRule === null;

    $: excludedTableFields = isAuth ? ["password", "verified", "email", "emailVisibility"] : [];

    $: tableFields =
        collection?.fields?.filter((f) => {
            return !f.hidden && f.type != "autodate" && !excludedTableFields.includes(f.name);
        }) || [];

    $: backendAbsUrl = CommonHelper.getApiExampleUrl(ApiClient.baseURL);

    $: responses = [
        {
            code: 200,
            body: JSON.stringify(CommonHelper.dummyCollectionRecord(collection), null, 2),
        },
        {
            code: 400,
            body: `
                {
                  "status": 400,
                  "message": "Failed to create record.",
                  "data": {
                    "${collection?.fields?.[0]?.name}": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
                }
            `,
        },
        {
            code: 403,
            body: `
                {
                  "status": 403,
                  "message": "You are not allowed to perform this request.",
                  "data": {}
                }
            `,
        },
    ];

    function getPayload(collection) {
        let payload = CommonHelper.dummyCollectionSchemaData(collection, true);

        if (isAuth) {
            payload.password = "12345678";
            payload.passwordConfirm = "12345678";
            delete payload.verified;
        }

        return payload;
    }
</script>

<h3 class="m-b-sm">Создание ({collection.name})</h3>
<div class="content txt-lg m-b-sm">
    <p>Создать новую запись <strong>{collection.name}</strong>.</p>
    <p>
        Параметры тела можно отправлять как <code>application/json</code> или
        <code>multipart/form-data</code>.
    </p>
    <p>
        Загрузка файлов поддерживается только через <code>multipart/form-data</code>.
        <br />
        Больше инфы и примеров — в подробной документации:
        <a href={import.meta.env.PB_FILE_UPLOAD_DOCS} target="_blank" rel="noopener noreferrer">
            Загрузка и обработка файлов
        </a>.
    </p>
</div>

<!-- prettier-ignore -->
<SdkTabs
    js={`
import PocketBase from 'pocketbase';

const pb = new PocketBase('${backendAbsUrl}');

...

// example create data
const data = ${JSON.stringify(getPayload(collection), null, 4)};

const record = await pb.collection('${collection?.name}').create(data);
` + (isAuth ?
`
// (optional) send an email verification request
await pb.collection('${collection?.name}').requestVerification('test@example.com');
` : ""
)}
    dart={`
import 'package:pocketbase/pocketbase.dart';

final pb = PocketBase('${backendAbsUrl}');

...

// example create body
final body = <String, dynamic>${JSON.stringify(getPayload(collection), null, 2)};

final record = await pb.collection('${collection?.name}').create(body: body);
` + (isAuth ?
`
// (optional) send an email verification request
await pb.collection('${collection?.name}').requestVerification('test@example.com');
` : ""
)}
/>

<h6 class="m-b-xs">Детали API</h6>
<div class="alert alert-success">
    <strong class="label label-primary">POST</strong>
    <div class="content">
        <p>
            /api/collections/<strong>{collection.name}</strong>/records
        </p>
    </div>
    {#if superusersOnly}
        <p class="txt-hint txt-sm txt-right">
            Нужен заголовок суперпользователя <code>Authorization:TOKEN</code>
        </p>
    {/if}
</div>

<div class="section-title">Параметры тела</div>
<table class="table-compact table-border m-b-base">
    <thead>
        <tr>
            <th>Параметр</th>
            <th>Тип</th>
            <th width="50%">Описание</th>
        </tr>
    </thead>
    <tbody>
        {#if isAuth}
            <tr>
                <td colspan="3" class="txt-hint txt-bold">Поля, специфичные для auth</td>
            </tr>
            <tr>
                <td>
                    <div class="inline-flex">
                        {#if collection?.fields?.find((f) => f.name == "email")?.required}
                            <span class="label label-success">Обязательно</span>
                        {:else}
                            <span class="label label-warning">Опционально</span>
                        {/if}
                        <span>email</span>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>Email адрес auth‑записи.</td>
            </tr>
            <tr>
                <td>
                    <div class="inline-flex">
                        {#if collection?.fields?.find((f) => f.name == "emailVisibility")?.required}
                            <span class="label label-success">Обязательно</span>
                        {:else}
                            <span class="label label-warning">Опционально</span>
                        {/if}
                        <span>emailVisibility</span>
                    </div>
                </td>
                <td>
                    <span class="label">Boolean</span>
                </td>
                <td>Показывать/скрывать email auth‑записи при получении данных записи.</td>
            </tr>
            <tr>
                <td>
                    <div class="inline-flex">
                        <span class="label label-success">Обязательно</span>
                        <span>password</span>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>Пароль auth‑записи.</td>
            </tr>
            <tr>
                <td>
                    <div class="inline-flex">
                        <span class="label label-success">Обязательно</span>
                        <span>passwordConfirm</span>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>Подтверждение пароля auth‑записи.</td>
            </tr>
            <tr>
                <td>
                    <div class="inline-flex">
                        <span class="label label-warning">Опционально</span>
                        <span>verified</span>
                    </div>
                </td>
                <td>
                    <span class="label">Boolean</span>
                </td>
                <td>
                    Показывает, подтверждена auth‑запись или нет.
                    <br />
                    Это поле могут менять только суперпользователи или auth‑записи с доступом “Manage”.
                </td>
            </tr>
            <tr>
                <td colspan="3" class="txt-hint txt-bold">Остальные поля</td>
            </tr>
        {/if}

        {#each tableFields as field (field.name)}
            <tr>
                <td>
                    <div class="inline-flex">
                        {#if !field.required || (field.type == "text" && field.autogeneratePattern)}
                            <span class="label label-warning">Опционально</span>
                        {:else}
                            <span class="label label-success">Обязательно</span>
                        {/if}
                        <span>{field.name}</span>
                    </div>
                </td>
                <td>
                    <span class="label">{CommonHelper.getFieldValueType(field)}</span>
                </td>
                <td>
                    {#if field.type === "text"}
                        Текстовое значение.
                        {#if field.autogeneratePattern}
                            Автогенерируется, если не задано.
                        {/if}
                    {:else if field.type === "number"}
                        Числовое значение.
                    {:else if field.type === "json"}
                        JSON‑массив или объект.
                    {:else if field.type === "email"}
                        Email адрес.
                    {:else if field.type === "url"}
                        URL адрес.
                    {:else if field.type === "geoPoint"}
                        <code>{`{"lon":x,"lat":y}`}</code> объект.
                    {:else if field.type === "file"}
                        Файловый объект.<br />
                        Укажи пустое значение (<code>null</code>, <code>""</code> или <code>[]</code>), чтобы
                        удалить уже загруженный(е) файл(ы).
                    {:else if field.type === "relation"}
                        {field.maxSelect === 1 ? "id" : "ids"} связанной записи.
                    {/if}
                </td>
            </tr>
        {/each}
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
                Автоматически раскрывает связи при возврате созданной записи. Например:
                <CodeBlock content={`?expand=relField1,relField2.subRelField`} />
                Поддерживает вложенность до 6 уровней. <br />
                Раскрытые связи будут добавлены к записи в поле
                <code>expand</code> property (eg. <code>{`"expand": {"relField1": {...}, ...}`}</code>).
                <br />
                Будут раскрыты только те связи, на которые у пользователя запроса есть права
                <strong>view</strong>.
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
