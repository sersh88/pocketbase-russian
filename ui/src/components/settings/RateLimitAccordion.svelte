<script>
    import { scale } from "svelte/transition";
    import tooltip from "@/actions/tooltip";
    import CommonHelper from "@/utils/CommonHelper";
    import Accordion from "@/components/base/Accordion.svelte";
    import Field from "@/components/base/Field.svelte";
    import AutocompleteInput from "@/components/base/AutocompleteInput.svelte";
    import ObjectSelect from "@/components/base/ObjectSelect.svelte";
    import OverlayPanel from "@/components/base/OverlayPanel.svelte";
    import { errors, setErrors, removeError } from "@/stores/errors";
    import { collections, loadCollections } from "@/stores/collections";

    export let formSettings;

    const audienceOptions = [
        { value: "", label: "Все" },
        { value: "@guest", label: "Только гости" },
        { value: "@auth", label: "Только авторизованные" },
    ];

    const basePredefinedTags = [
        { value: "*:list" },
        { value: "*:view" },
        { value: "*:create" },
        { value: "*:update" },
        { value: "*:delete" },
        { value: "*:file", description: "для эндпоинта скачивания файлов" },
        { value: "*:listAuthMethods" },
        { value: "*:authRefresh" },
        { value: "*:auth", description: "для всех auth-методов" },
        { value: "*:authWithPassword" },
        { value: "*:authWithOAuth2" },
        { value: "*:authWithOTP" },
        { value: "*:requestOTP" },
        { value: "*:requestPasswordReset" },
        { value: "*:confirmPasswordReset" },
        { value: "*:requestVerification" },
        { value: "*:confirmVerification" },
        { value: "*:requestEmailChange" },
        { value: "*:confirmEmailChange" },
    ];

    let predefinedTags = basePredefinedTags;

    let formatInfoPanel;

    $: hasErrors = !CommonHelper.isEmpty($errors?.rateLimits);

    loadPredefinedTags();

    async function loadPredefinedTags() {
        await loadCollections();

        predefinedTags = [];

        for (let collection of $collections) {
            if (collection.system) {
                continue;
            }

            predefinedTags.push({ value: collection.name + ":list" });
            predefinedTags.push({ value: collection.name + ":view" });

            if (collection.type != "view") {
                predefinedTags.push({ value: collection.name + ":create" });
                predefinedTags.push({ value: collection.name + ":update" });
                predefinedTags.push({ value: collection.name + ":delete" });
            }

            if (collection.type == "auth") {
                predefinedTags.push({ value: collection.name + ":listAuthMethods" });
                predefinedTags.push({ value: collection.name + ":authRefresh" });
                predefinedTags.push({ value: collection.name + ":auth" });
                predefinedTags.push({ value: collection.name + ":authWithPassword" });
                predefinedTags.push({ value: collection.name + ":authWithOAuth2" });
                predefinedTags.push({ value: collection.name + ":authWithOTP" });
                predefinedTags.push({ value: collection.name + ":requestOTP" });
                predefinedTags.push({ value: collection.name + ":requestPasswordReset" });
                predefinedTags.push({ value: collection.name + ":confirmPasswordReset" });
                predefinedTags.push({ value: collection.name + ":requestVerification" });
                predefinedTags.push({ value: collection.name + ":confirmVerification" });
                predefinedTags.push({ value: collection.name + ":requestEmailChange" });
                predefinedTags.push({ value: collection.name + ":confirmEmailChange" });
            }

            if (collection.fields.find((f) => f.type == "file")) {
                predefinedTags.push({ value: collection.name + ":file" });
            }
        }

        predefinedTags = predefinedTags.concat(basePredefinedTags);
    }

    function newRule() {
        setErrors({}); // reset

        if (!Array.isArray(formSettings.rateLimits.rules)) {
            formSettings.rateLimits.rules = [];
        }

        formSettings.rateLimits.rules.push({
            label: "",
            maxRequests: 300,
            duration: 10,
            audience: "",
        });

        formSettings.rateLimits.rules = formSettings.rateLimits.rules;

        if (formSettings.rateLimits.rules.length == 1) {
            formSettings.rateLimits.enabled = true;
        }
    }

    function removeRule(i) {
        setErrors({}); // reset

        formSettings.rateLimits.rules.splice(i, 1);
        formSettings.rateLimits.rules = formSettings.rateLimits.rules;

        if (!formSettings.rateLimits.rules.length) {
            formSettings.rateLimits.enabled = false;
        }
    }
</script>

<Accordion single>
    <svelte:fragment slot="header">
        <div class="inline-flex">
            <i class="ri-pulse-fill"></i>
            <span class="txt">Лимиты запросов</span>
        </div>

        <div class="flex-fill" />

        {#if hasErrors}
            <i
                class="ri-error-warning-fill txt-danger"
                transition:scale={{ duration: 150, start: 0.7 }}
                use:tooltip={{ text: "Есть ошибки", position: "left" }}
            />
        {/if}

        {#if formSettings.rateLimits.enabled}
            <span class="label label-success">Включено</span>
        {:else}
            <span class="label">Отключено</span>
        {/if}
    </svelte:fragment>

    <Field class="form-field form-field-toggle m-b-xs" name="rateLimits.enabled" let:uniqueId>
        <input type="checkbox" id={uniqueId} bind:checked={formSettings.rateLimits.enabled} />
        <label for={uniqueId}>Включить <small class="txt-hint">(экспериментально)</small></label>
    </Field>

    {#if !CommonHelper.isEmpty(formSettings.rateLimits.rules)}
        <table class="rate-limit-table">
            <thead>
                <tr>
                    <th class="col-label">Метка лимита</th>
                    <th class="col-requests">Макс. запросов<br /><small>(на IP)</small></th>
                    <th class="col-duration">Интервал<br /><small>(в секундах)</small></th>
                    <th class="col-audience">Кто попадает под лимит</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {#each formSettings.rateLimits.rules || [] as rule, i}
                    <tr class="rate-limit-row">
                        <td class="col-label">
                            <Field class="form-field" name={"rateLimits.rules." + i + ".label"} inlineError>
                                <AutocompleteInput
                                    required
                                    placeholder="тег (users:create) или путь (/api/)"
                                    options={predefinedTags}
                                    bind:value={rule.label}
                                />
                            </Field>
                        </td>
                        <td class="col-requests">
                            <Field
                                class="form-field"
                                name={"rateLimits.rules." + i + ".maxRequests"}
                                inlineError
                            >
                                <input
                                    type="number"
                                    required
                                    placeholder="Макс. запросов*"
                                    min="1"
                                    step="1"
                                    bind:value={rule.maxRequests}
                                />
                            </Field>
                        </td>
                        <td class="col-duration">
                            <Field
                                class="form-field"
                                name={"rateLimits.rules." + i + ".duration"}
                                inlineError
                            >
                                <input
                                    type="number"
                                    required
                                    placeholder="Интервал*"
                                    min="1"
                                    step="1"
                                    bind:value={rule.duration}
                                />
                            </Field>
                        </td>
                        <td class="col-audience">
                            <Field
                                class="form-field"
                                name={"rateLimits.rules." + i + ".audience"}
                                inlineError
                            >
                                <ObjectSelect
                                    items={audienceOptions}
                                    bind:keyOfSelected={rule.audience}
                                    on:change={() => {
                                        removeError("rateLimits.rules." + i); // reset rule errors
                                    }}
                                />
                            </Field>
                        </td>
                        <td class="col-action">
                            <button
                                type="button"
                                title="Удалить правило"
                                aria-label="Удалить правило"
                                class="btn btn-xs btn-circle btn-hint btn-transparent"
                                on:click={() => removeRule(i)}
                            >
                                <i class="ri-close-line"></i>
                            </button>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    {/if}

    <div class="flex m-t-sm">
        <button
            type="button"
            class="btn btn-sm btn-secondary m-r-auto"
            class:btn-danger={$errors?.rateLimits?.rules?.message}
            on:click={() => newRule()}
        >
            <i class="ri-add-line"></i>
            <span class="txt">Добавить правило лимита</span>
        </button>

        <button type="button" class="txt-nowrap txt-sm link-hint" on:click={() => formatInfoPanel?.show()}>
            <em>Подробнее про правила лимитов</em>
        </button>
    </div>
</Accordion>

<OverlayPanel bind:this={formatInfoPanel}>
    <svelte:fragment slot="header">
        <h4 class="center txt-break">Формат метки лимита</h4>
    </svelte:fragment>

    <p>Правила лимитов применяются в таком порядке (останавливается на первом совпадении):</p>
    <ol>
        <li>exact tag (e.g. <code>users:create</code>)</li>
        <li>wildcard tag (e.g. <code>*:create</code>)</li>
        <li>METHOD + exact path (e.g. <code>POST /a/b</code>)</li>
        <li>METHOD + prefix path (e.g. <code>POST /a/b<strong>/</strong></code>)</li>
        <li>exact path (e.g. <code>/a/b</code>)</li>
        <li>prefix path (e.g. <code>/a/b<strong>/</strong></code>)</li>
    </ol>
    <p>
        Если есть несколько правил с одной и той же меткой, но разной аудиторией (например, "guest" vs
        "auth"), будет учитываться только правило, которое подходит по аудитории.
    </p>

    <hr class="m-t-xs m-b-xs" />

    <p>Метка лимита может быть в одном из форматов:</p>
    <ul>
        <li class="m-b-sm">
            <code>[METHOD ]/my/path</code> - full exact route match (
            <strong>должно быть без слэша на конце</strong>; "METHOD" — опционально).
            <br /> For example:
            <ul class="m-0">
                <li class="m-0">
                    <code>/hello</code> - matches <code>GET /hello</code>, <code>POST /hello</code>, etc.
                </li>
                <li class="m-0">
                    <code>POST /hello</code> - matches only <code>POST /hello</code>
                </li>
            </ul>
        </li>
        <li class="m-b-sm">
            <code>[METHOD ]/my/prefix<strong>/</strong></code> - path prefix (
            <strong>должно заканчиваться слэшем;</strong>
            "METHOD" is optional). For example:
            <ul class="m-0">
                <li class="m-0">
                    <code>/hello/</code> - matches <code>GET /hello</code>,
                    <code>POST /hello/a/b/c</code>, etc.
                </li>
                <li class="m-0">
                    <code>POST /hello/</code> - matches <code>POST /hello</code>,
                    <code>POST /hello/a/b/c</code>, etc.
                </li>
            </ul>
        </li>
        <li>
            <code>collectionName:predefinedTag</code> — для конкретного действия одной коллекции. Чтобы
            применить ко всем коллекциям, используй wildcard <code>*</code>. Например:
            <code>posts:create</code>, <code>users:listAuthMethods</code>, <code>*:auth</code>.
            <br />
            Предопределённые теги коллекций (<em>должно быть автодополнение, когда начнёшь печатать</em>):
            <ul>
                {#each basePredefinedTags as tag}
                    <li class="m-0">
                        {tag.value.replace("*:", ":")}
                        {#if tag.description}
                            <em class="txt-hint">({tag.description})</em>
                        {/if}
                    </li>
                {/each}
            </ul>
        </li>
    </ul>

    <svelte:fragment slot="footer">
        <button type="button" class="btn btn-transparent" on:click={() => formatInfoPanel?.hide()}>
            Закрыть
        </button>
    </svelte:fragment>
</OverlayPanel>
