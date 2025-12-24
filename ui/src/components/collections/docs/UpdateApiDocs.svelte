<script>
    import CodeBlock from "@/components/base/CodeBlock.svelte";
    import FieldsQueryParam from "@/components/collections/docs/FieldsQueryParam.svelte";
    import SdkTabs from "@/components/base/SdkTabs.svelte";
    import ApiClient from "@/utils/ApiClient";
    import CommonHelper from "@/utils/CommonHelper";

    export let collection;

    let responseTab = 200;
    let responses = [];

    $: isAuth = collection?.type === "auth";

    $: superusersOnly = collection?.updateRule === null;

    $: excludedTableFields = isAuth ? ["id", "password", "verified", "email", "emailVisibility"] : ["id"];

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
                  "message": "Failed to update record.",
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
        {
            code: 404,
            body: `
                {
                  "status": 404,
                  "message": "The requested resource wasn't found.",
                  "data": {}
                }
            `,
        },
    ];

    function getPayload(collection) {
        let payload = CommonHelper.dummyCollectionSchemaData(collection, true);

        if (isAuth) {
            payload.oldPassword = "12345678";
            payload.password = "87654321";
            payload.passwordConfirm = "87654321";
            delete payload.verified;
            delete payload.email;
        }

        return payload;
    }
</script>

<h3 class="m-b-sm">Обновление ({collection.name})</h3>
<div class="content txt-lg m-b-sm">
    <p>Обновить одну запись <strong>{collection.name}</strong>.</p>
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
    {#if isAuth}
        <p>
            <em>
                Учти: при смене пароля все ранее выданные токены для текущей записи будут автоматически
                инвалидированы. Если хочешь, чтобы пользователь остался залогинен — после update придётся
                переавторизоваться вручную.
            </em>
        </p>
    {/if}
</div>

<!-- prettier-ignore -->
<SdkTabs
    js={`
import PocketBase from 'pocketbase';

const pb = new PocketBase('${backendAbsUrl}');

...

// example update data
const data = ${JSON.stringify(getPayload(collection), null, 4)};

const record = await pb.collection('${collection?.name}').update('RECORD_ID', data);
    `}
    dart={`
import 'package:pocketbase/pocketbase.dart';

final pb = PocketBase('${backendAbsUrl}');

...

// example update body
final body = <String, dynamic>${JSON.stringify(getPayload(collection), null, 2)};

final record = await pb.collection('${collection?.name}').update('RECORD_ID', body: body);
    `}
/>

<h6 class="m-b-xs">Детали API</h6>
<div class="alert alert-warning">
    <strong class="label label-primary">PATCH</strong>
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
            <td>ID записи, которую надо обновить.</td>
        </tr>
    </tbody>
</table>

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
                        <span class="label label-warning">Опционально</span>
                        <span>email</span>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>
                    Email адрес auth‑записи.
                    <br />
                    Это поле могут менять только суперпользователи или auth‑записи с доступом “Manage”.
                    <br />
                    Обычные аккаунты могут менять email через “Request email change”.
                </td>
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
                        <span class="label label-warning">Опционально</span>
                        <span>oldPassword</span>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>
                    Старый пароль auth‑записи.
                    <br />
                    Это поле нужно только при смене пароля. Суперпользователи и auth‑записи с доступом “Manage”
                    могут пропустить это поле.
                </td>
            </tr>
            <tr>
                <td>
                    <div class="inline-flex">
                        <span class="label label-warning">Опционально</span>
                        <span>password</span>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>Новый пароль auth‑записи.</td>
            </tr>
            <tr>
                <td>
                    <div class="inline-flex">
                        <span class="label label-warning">Опционально</span>
                        <span>passwordConfirm</span>
                    </div>
                </td>
                <td>
                    <span class="label">String</span>
                </td>
                <td>Подтверждение нового пароля auth‑записи.</td>
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
                        {#if field.required}
                            <span class="label label-success">Обязательно</span>
                        {:else}
                            <span class="label label-warning">Опционально</span>
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
                        Укажи <code>null</code>, чтобы удалить уже загруженный(е) файл(ы).
                    {:else if field.type === "relation"}
                        {field.maxSelect == 1 ? "id" : "ids"} связанной записи.
                    {/if}
                </td>
            </tr>
        {/each}
    </tbody>
</table>

<div class="section-title">Параметры запроса</div>
<table class="table-compact table-border m-b-lg">
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
                Автоматически раскрывает связи при возврате обновлённой записи. Например:
                <CodeBlock content={`?expand=relField1,relField2.subRelField21`} />
                Поддерживает вложенность до 6 уровней. <br />
                Раскрытые связи будут добавлены к записи в поле
                <code>expand</code> property (eg. <code>{`"expand": {"relField1": {...}, ...}`}</code>). Only
                те связи, на которые у пользователя есть права <strong>view</strong>, будут раскрыты.
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
