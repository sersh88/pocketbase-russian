<script>
    import tooltip from "@/actions/tooltip";
    import Accordion from "@/components/base/Accordion.svelte";
    import Field from "@/components/base/Field.svelte";
    import MultipleValueInput from "@/components/base/MultipleValueInput.svelte";
    import ObjectSelect from "@/components/base/ObjectSelect.svelte";
    import { errors } from "@/stores/errors";
    import CommonHelper from "@/utils/CommonHelper";
    import { scale } from "svelte/transition";

    const commonProxyHeaders = ["X-Forwarded-For", "Fly-Client-IP", "CF-Connecting-IP"];

    export let formSettings;
    export let healthData;

    let initialSettingsHash = "";

    $: settingsHash = JSON.stringify(formSettings);

    $: if (initialSettingsHash != settingsHash) {
        initialSettingsHash = settingsHash;
    }

    $: hasChanges = initialSettingsHash != settingsHash;

    $: hasErrors = !CommonHelper.isEmpty($errors?.trustedProxy);

    $: isEnabled = !CommonHelper.isEmpty(formSettings.trustedProxy.headers);

    $: suggestedProxyHeaders = !healthData.possibleProxyHeader
        ? commonProxyHeaders
        : [healthData.possibleProxyHeader].concat(
              commonProxyHeaders.filter((h) => h != healthData.possibleProxyHeader),
          );

    function setHeader(val) {
        formSettings.trustedProxy.headers = [val];
    }

    const ipOptions = [
        { label: "Брать самый левый IP", value: true },
        { label: "Брать самый правый IP", value: false },
    ];
</script>

<Accordion single>
    <svelte:fragment slot="header">
        <div class="inline-flex">
            <i class="ri-route-line"></i>
            <span class="txt">Proxy заголовки для IP пользователя</span>
            {#if !isEnabled && healthData.possibleProxyHeader}
                <i
                    class="ri-alert-line txt-sm txt-warning"
                    use:tooltip={"Найден proxy-заголовок.\nРекомендуется добавить его в доверенные."}
                />
            {:else if isEnabled && !hasChanges && !formSettings.trustedProxy.headers.includes(healthData.possibleProxyHeader)}
                <i
                    class="ri-alert-line txt-sm txt-hint"
                    use:tooltip={"Настроенный proxy-заголовок не совпадает с обнаруженным."}
                />
            {/if}
        </div>

        <div class="flex-fill" />

        {#if isEnabled}
            <span class="label label-success">Включено</span>
        {:else}
            <span class="label">Выключено</span>
        {/if}

        {#if hasErrors}
            <i
                class="ri-error-warning-fill txt-danger"
                transition:scale={{ duration: 150, start: 0.7 }}
                use:tooltip={{ text: "Есть ошибки", position: "left" }}
            />
        {/if}
    </svelte:fragment>

    <div class="alert alert-info m-b-sm">
        <div class="content">
            <div class="inline-flex flex-gap-5">
                <span>IP пользователя (как определилось):</span>
                <strong>{healthData.realIP || "N/A"}</strong>
                <i
                    class="ri-information-line txt-sm link-hint"
                    use:tooltip={"Должен показывать твой реальный IP.\nЕсли нет — укажи правильный proxy‑заголовок."}
                />
            </div>
            <br />
            <div class="inline-flex flex-gap-5">
                <span>Найденный proxy‑заголовок:</span>
                <strong>{healthData.possibleProxyHeader || "N/A"}</strong>
            </div>
        </div>
    </div>

    <div class="content m-b-sm">
        <p>
            Когда PocketBase развёрнут на платформах типа Fly или доступен через прокси (например NGINX),
            запросы от разных пользователей будут приходить с одного и того же IP (это IP прокси, который ходит к
            твоему PocketBase).
        </p>
        <p>
            В этом случае, чтобы получить реальный IP пользователя (для rate limiting, логирования и т.д.),
            нужно корректно настроить прокси и указать ниже доверенные заголовки, из которых PocketBase может
            извлекать IP пользователя.
        </p>
        <p class="txt-bold">Чтобы избежать подмены (spoofing), рекомендуется:</p>
        <ul class="m-t-0 txt-bold">
            <li>использовать заголовки, которые контролируются только прокси и не могут вручную выставляться пользователями</li>
            <li>убедиться, что PocketBase доступен только через прокси</li>
        </ul>
        <p>Если PocketBase не за прокси — просто очисти поле с заголовками.</p>
    </div>

    <div class="grid grid-sm">
        <div class="col-lg-9">
            <Field class="form-field m-b-0" name="trustedProxy.headers" let:uniqueId>
                <label for={uniqueId}>Доверенные proxy‑заголовки для IP</label>
                <MultipleValueInput
                    id={uniqueId}
                    placeholder="Оставь пустым, чтобы отключить"
                    bind:value={formSettings.trustedProxy.headers}
                />
                <div class="form-field-addon">
                    <button
                        type="button"
                        class="btn btn-sm btn-hint btn-transparent btn-clear"
                        class:hidden={CommonHelper.isEmpty(formSettings.trustedProxy.headers)}
                        on:click={() => (formSettings.trustedProxy.headers = [])}
                    >
                        Очистить
                    </button>
                </div>
                <div class="help-block">
                    <p>
                        Список заголовков через запятую, например:
                        {#each suggestedProxyHeaders as header}
                            <button
                                type="button"
                                class="label label-sm link-primary txt-mono"
                                on:click={() => setHeader(header)}
                            >
                                {header}
                            </button>&nbsp;
                        {/each}
                    </p>
                </div>
            </Field>
        </div>
        <div class="col-lg-3">
            <Field class="form-field m-0" name="trustedProxy.useLeftmostIP" let:uniqueId>
                <label for={uniqueId}>
                    <span class="txt">Выбор IP приоритетности</span>
                    <i
                        class="ri-information-line link-hint"
                        use:tooltip={{
                            text: "Если прокси возвращает больше одного IP в значении заголовка. Обычно самый правый IP считается более надёжным, но это может зависеть от прокси.",
                            position: "right",
                        }}
                    />
                </label>
                <ObjectSelect
                    items={ipOptions}
                    bind:keyOfSelected={formSettings.trustedProxy.useLeftmostIP}
                />
            </Field>
        </div>
    </div>
</Accordion>
