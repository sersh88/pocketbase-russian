<script>
    import tooltip from "@/actions/tooltip";
    import RuleField from "@/components/collections/RuleField.svelte";
    import CommonHelper from "@/utils/CommonHelper";
    import { slide } from "svelte/transition";

    export let collection;

    $: fieldNames = CommonHelper.getAllCollectionIdentifiers(collection);

    $: hiddenFieldNames = collection.fields?.filter((f) => f.hidden).map((f) => f.name);

    let showFiltersInfo = false;

    let showExtraRules = collection.manageRule !== null || collection.authRule !== "";
</script>

<div class="block m-b-sm handle">
    <div class="flex txt-sm txt-hint m-b-5">
        <p>
            Все правила используют
            <a href={import.meta.env.PB_RULES_SYNTAX_DOCS} target="_blank" rel="noopener noreferrer">
                синтаксис фильтров и операторы PocketBase
            </a>.
        </p>
        <button
            type="button"
            class="expand-handle txt-sm txt-bold txt-nowrap link-hint"
            on:click={() => (showFiltersInfo = !showFiltersInfo)}
        >
            {showFiltersInfo ? "Скрыть доступные поля" : "Показать доступные поля"}
        </button>
    </div>

    {#if showFiltersInfo}
        <div transition:slide={{ duration: 150 }}>
            <div class="alert alert-warning m-0">
                <div class="content">
                    <p class="m-b-0">Доступны такие поля записи:</p>
                    <div class="inline-flex flex-gap-5">
                        {#each fieldNames as name}
                            {#if !hiddenFieldNames.includes(name)}
                                <code>{name}</code>
                            {/if}
                        {/each}
                    </div>

                    <hr class="m-t-10 m-b-5" />

                    <p class="m-b-0">
                        Поля запроса можно получить через специальный фильтр <em>@request</em>:
                    </p>
                    <div class="inline-flex flex-gap-5">
                        <code>@request.headers.*</code>
                        <code>@request.query.*</code>
                        <code>@request.body.*</code>
                        <code>@request.auth.*</code>
                    </div>

                    <hr class="m-t-10 m-b-5" />

                    <p class="m-b-0">
                        Ещё можно добавлять ограничения и обращаться к другим коллекциям через фильтр
                        <em>@collection</em>:
                    </p>
                    <div class="inline-flex flex-gap-5">
                        <code>@collection.ANY_COLLECTION_NAME.*</code>
                    </div>

                    <hr class="m-t-10 m-b-5" />

                    <p>
                        Пример правила:
                        <br />
                        <code>@request.auth.id != "" && created > "2022-01-01 00:00:00"</code>
                    </p>
                </div>
            </div>
        </div>
    {/if}
</div>

<RuleField label="Правило списка/поиска" formKey="listRule" {collection} bind:rule={collection.listRule} />

<RuleField label="Правило просмотра" formKey="viewRule" {collection} bind:rule={collection.viewRule} />

{#if collection?.type !== "view"}
    <RuleField label="Правило создания" formKey="createRule" {collection} bind:rule={collection.createRule}>
        <svelte:fragment slot="afterLabel" let:isSuperuserOnly>
            {#if !isSuperuserOnly}
                <i
                    class="ri-information-line link-hint"
                    use:tooltip={{
                        text: `Основные поля записи содержат значения, которые будут вставлены в базу данных.`,
                        position: "top",
                    }}
                />
            {/if}
        </svelte:fragment>
    </RuleField>

    <RuleField label="Правило обновления" formKey="updateRule" {collection} bind:rule={collection.updateRule}>
        <svelte:fragment slot="afterLabel" let:isSuperuserOnly>
            {#if !isSuperuserOnly}
                <i
                    class="ri-information-line link-hint"
                    use:tooltip={{
                        text: `Основные поля записи содержат старые/текущие значения.\nЧтобы обратиться к новым отправленным значениям, используй @request.body.*`,
                        position: "top",
                    }}
                />
            {/if}
        </svelte:fragment>
    </RuleField>

    <RuleField label="Правило удаления" formKey="deleteRule" {collection} bind:rule={collection.deleteRule} />
{/if}

{#if collection?.type === "auth"}
    <hr />

    <button
        type="button"
        class="btn btn-sm m-b-sm {showExtraRules ? 'btn-secondary' : 'btn-hint btn-transparent'}"
        on:click={() => {
            showExtraRules = !showExtraRules;
        }}
    >
        <strong class="txt">Доп. правила для auth-коллекции</strong>
        {#if showExtraRules}
            <i class="ri-arrow-up-s-line txt-sm" />
        {:else}
            <i class="ri-arrow-down-s-line txt-sm" />
        {/if}
    </button>

    {#if showExtraRules}
        <div class="block" transition:slide={{ duration: 150 }}>
            <RuleField
                label="Правило аутентификации"
                formKey="authRule"
                placeholder=""
                {collection}
                bind:rule={collection.authRule}
            >
                <svelte:fragment>
                    <p>
                        Это правило выполняется каждый раз перед аутентификацией и позволяет ограничить,
                        кто вообще может входить.
                    </p>
                    <p>
                        Например, чтобы пускать только подтверждённых пользователей, задай:
                        <code>verified = true</code>.
                    </p>
                    <p>Оставь пустым, чтобы вход был доступен всем, у кого есть аккаунт.</p>
                    <p>Чтобы полностью отключить вход, можно поставить «Только суперпользователи».</p>
                </svelte:fragment>
            </RuleField>

            <RuleField
                label="Правило управления"
                formKey="manageRule"
                placeholder=""
                required={collection.manageRule !== null}
                {collection}
                bind:rule={collection.manageRule}
            >
                <svelte:fragment>
                    <p>
                        Это правило выполняется дополнительно к API-правилам <code>create</code> и
                        <code>update</code>.
                    </p>
                    <p>
                        Оно включает “суперпользовательские” права для полного управления auth-записью(ями):
                        например, менять пароль без ввода старого, напрямую переключать verified, менять email
                        и т.д.
                    </p>
                </svelte:fragment>
            </RuleField>
        </div>
    {/if}
{/if}
