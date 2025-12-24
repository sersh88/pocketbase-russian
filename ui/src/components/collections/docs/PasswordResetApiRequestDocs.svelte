<script>
    import CodeBlock from "@/components/base/CodeBlock.svelte";

    export let collection;

    let responseTab = 204;
    let responses = [];

    $: responses = [
        {
            code: 204,
            body: "null",
        },
        {
            code: 400,
            body: `
                {
                  "status": 400,
                  "message": "An error occurred while validating the submitted data.",
                  "data": {
                    "email": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
                }
            `,
        },
    ];
</script>

<div class="alert alert-success">
    <strong class="label label-primary">POST</strong>
    <div class="content">
        <p>
            /api/collections/<strong>{collection.name}</strong>/request-password-reset
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
                    <span>email</span>
                </div>
            </td>
            <td>
                <span class="label">String</span>
            </td>
            <td>Email auth‑записи, на который отправить запрос сброса пароля (если запись существует).</td>
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
