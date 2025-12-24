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
                    token: "JWT_AUTH_TOKEN",
                    record: CommonHelper.dummyCollectionRecord(collection),
                    meta: {
                        id: "abc123",
                        name: "John Doe",
                        username: "john.doe",
                        email: "test@example.com",
                        avatarURL: "https://example.com/avatar.png",
                        accessToken: "...",
                        refreshToken: "...",
                        expiry: "2022-01-01 10:00:00.123Z",
                        isNew: false,
                        rawUser: {},
                    },
                },
                null,
                2,
            ),
        },
        {
            code: 400,
            body: `
                {
                  "status": 400,
                  "message": "An error occurred while submitting the form.",
                  "data": {
                    "provider": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
                }
            `,
        },
    ];
</script>

<h3 class="m-b-sm">Вход через OAuth2 ({collection.name})</h3>
<div class="content txt-lg m-b-sm">
    <p>Аутентификация через OAuth2‑провайдера. Возвращает новый auth‑токен и данные записи.</p>
    <p>
        Подробности смотри в
        <a href={import.meta.env.PB_OAUTH2_EXAMPLE} target="_blank" rel="noopener noreferrer">
            документации по интеграции OAuth2
        </a>.
    </p>
</div>

<SdkTabs
    js={`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${backendAbsUrl}');

        ...

        // OAuth2 authentication with a single realtime call.
        //
        // Make sure to register ${backendAbsUrl}/api/oauth2-redirect as redirect url.
        const authData = await pb.collection('${collection.name}').authWithOAuth2({ provider: 'google' });

        // OR authenticate with manual OAuth2 code exchange
        // const authData = await pb.collection('${collection.name}').authWithOAuth2Code(...);

        // after the above you can also access the auth data from the authStore
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `}
    dart={`
        import 'package:pocketbase/pocketbase.dart';
        import 'package:url_launcher/url_launcher.dart';

        final pb = PocketBase('${backendAbsUrl}');

        ...

        // OAuth2 authentication with a single realtime call.
        //
        // Make sure to register ${backendAbsUrl}/api/oauth2-redirect as redirect url.
        final authData = await pb.collection('${collection.name}').authWithOAuth2('google', (url) async {
          await launchUrl(url);
        });

        // OR authenticate with manual OAuth2 code exchange
        // final authData = await pb.collection('${collection.name}').authWithOAuth2Code(...);

        // after the above you can also access the auth data from the authStore
        print(pb.authStore.isValid);
        print(pb.authStore.token);
        print(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `}
/>

<h6 class="m-b-xs">Детали API</h6>
<div class="alert alert-success">
    <strong class="label label-primary">POST</strong>
    <div class="content">
        <p>
            /api/collections/<strong>{collection.name}</strong>/auth-with-oauth2
        </p>
    </div>
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
        <tr>
            <td>
                <div class="inline-flex">
                    <span class="label label-success">Обязательно</span>
                    <span>provider</span>
                </div>
            </td>
            <td>
                <span class="label">String</span>
            </td>
            <td>Имя OAuth2‑провайдера (например, "google").</td>
        </tr>
        <tr>
            <td>
                <div class="inline-flex">
                    <span class="label label-success">Обязательно</span>
                    <span>code</span>
                </div>
            </td>
            <td>
                <span class="label">String</span>
            </td>
            <td>Authorization code, который вернулся из первого запроса.</td>
        </tr>
        <tr>
            <td>
                <div class="inline-flex">
                    <span class="label label-success">Обязательно</span>
                    <span>codeVerifier</span>
                </div>
            </td>
            <td>
                <span class="label">String</span>
            </td>
            <td>code verifier, который отправлялся в первом запросе как часть code_challenge.</td>
        </tr>
        <tr>
            <td>
                <div class="inline-flex">
                    <span class="label label-success">Обязательно</span>
                    <span>redirectURL</span>
                </div>
            </td>
            <td>
                <span class="label">String</span>
            </td>
            <td>redirect url, который отправлялся в первом запросе.</td>
        </tr>
        <tr>
            <td>
                <div class="inline-flex">
                    <span class="label label-warning">Опционально</span>
                    <span>createData</span>
                </div>
            </td>
            <td>
                <span class="label">Object</span>
            </td>
            <td>
                <p>Опциональные данные, которые будут использованы при создании auth‑записи при OAuth2 sign‑up.</p>
                <p>
                    Созданная auth‑запись должна проходить те же требования и валидации, что и в обычном
                    <strong>create</strong>.
                    <br />
                    <em>
                        Данные могут быть только в <code>json</code>, то есть <code>multipart/form-data</code> и
                        загрузка файлов сейчас не поддерживаются во время OAuth2 sign‑up.
                    </em>
                </p>
            </td>
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
