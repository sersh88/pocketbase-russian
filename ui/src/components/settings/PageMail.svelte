<script>
    import tooltip from "@/actions/tooltip";
    import Field from "@/components/base/Field.svelte";
    import ObjectSelect from "@/components/base/ObjectSelect.svelte";
    import PageWrapper from "@/components/base/PageWrapper.svelte";
    import RedactedPasswordInput from "@/components/base/RedactedPasswordInput.svelte";
    import EmailTestPopup from "@/components/settings/EmailTestPopup.svelte";
    import SettingsSidebar from "@/components/settings/SettingsSidebar.svelte";
    import { pageTitle } from "@/stores/app";
    import { setErrors } from "@/stores/errors";
    import { addSuccessToast } from "@/stores/toasts";
    import ApiClient from "@/utils/ApiClient";
    import CommonHelper from "@/utils/CommonHelper";
    import { slide } from "svelte/transition";

    const tlsOptions = [
        { label: "Auto (StartTLS)", value: false },
        { label: "Always", value: true },
    ];

    const authMethods = [
        { label: "PLAIN (default)", value: "PLAIN" },
        { label: "LOGIN", value: "LOGIN" },
    ];

    $pageTitle = "Настройки почты";

    let testPopup;
    let originalFormSettings = {};
    let formSettings = {};
    let isLoading = false;
    let isSaving = false;
    let maskPassword = false;
    let showMoreOptions = false;

    $: initialHash = JSON.stringify(originalFormSettings);

    $: hasChanges = initialHash != JSON.stringify(formSettings);

    loadSettings();

    async function loadSettings() {
        isLoading = true;

        try {
            const settings = (await ApiClient.settings.getAll()) || {};
            init(settings);
        } catch (err) {
            ApiClient.error(err);
        }

        isLoading = false;
    }

    async function save() {
        if (isSaving || !hasChanges) {
            return;
        }

        isSaving = true;

        try {
            const settings = await ApiClient.settings.update(CommonHelper.filterRedactedProps(formSettings));
            init(settings);
            setErrors({});
            addSuccessToast("Настройки почты успешно сохранены.");
        } catch (err) {
            ApiClient.error(err);
        }

        isSaving = false;
    }

    function init(settings = {}) {
        formSettings = {
            meta: settings?.meta || {},
            smtp: settings?.smtp || {},
        };

        if (!formSettings.smtp.authMethod) {
            formSettings.smtp.authMethod = authMethods[0].value;
        }

        originalFormSettings = JSON.parse(JSON.stringify(formSettings));

        maskPassword = !!formSettings.smtp.username;
    }

    function reset() {
        formSettings = JSON.parse(JSON.stringify(originalFormSettings || {}));
    }
</script>

<SettingsSidebar />

<PageWrapper>
    <header class="page-header">
        <nav class="breadcrumbs">
            <div class="breadcrumb-item">Настройки</div>
            <div class="breadcrumb-item">{$pageTitle}</div>
        </nav>
    </header>

    <div class="wrapper">
        <form class="panel" autocomplete="off" on:submit|preventDefault={() => save()}>
            <div class="content txt-xl m-b-base">
                <p>Настрой общие параметры отправки писем.</p>
            </div>

            {#if isLoading}
                <div class="loader" />
            {:else}
                <div class="grid m-b-base">
                    <div class="col-lg-6">
                        <Field class="form-field required" name="meta.senderName" let:uniqueId>
                            <label for={uniqueId}>Имя отправителя</label>
                            <input
                                type="text"
                                id={uniqueId}
                                required
                                bind:value={formSettings.meta.senderName}
                            />
                        </Field>
                    </div>

                    <div class="col-lg-6">
                        <Field class="form-field required" name="meta.senderAddress" let:uniqueId>
                            <label for={uniqueId}>Адрес отправителя</label>
                            <input
                                type="email"
                                id={uniqueId}
                                required
                                bind:value={formSettings.meta.senderAddress}
                            />
                        </Field>
                    </div>
                </div>

                <Field class="form-field form-field-toggle m-b-sm" let:uniqueId>
                    <input type="checkbox" id={uniqueId} required bind:checked={formSettings.smtp.enabled} />
                    <label for={uniqueId}>
                        <span class="txt">Использовать SMTP сервер <strong>(рекомендуется)</strong></span>
                        <i
                            class="ri-information-line link-hint"
                            use:tooltip={{
                                text: 'По умолчанию PocketBase использует unix-команду \"sendmail\" для отправки писем. Для лучшей доставляемости писем рекомендуется использовать SMTP сервер.',
                                position: "top",
                            }}
                        />
                    </label>
                </Field>

                {#if formSettings.smtp.enabled}
                    <div transition:slide={{ duration: 150 }}>
                        <div class="grid">
                            <div class="col-lg-4">
                                <Field class="form-field required" name="smtp.host" let:uniqueId>
                                    <label for={uniqueId}>Хост SMTP сервера</label>
                                    <input
                                        type="text"
                                        id={uniqueId}
                                        required
                                        bind:value={formSettings.smtp.host}
                                    />
                                </Field>
                            </div>
                            <div class="col-lg-2">
                                <Field class="form-field required" name="smtp.port" let:uniqueId>
                                    <label for={uniqueId}>Порт</label>
                                    <input
                                        type="number"
                                        id={uniqueId}
                                        required
                                        bind:value={formSettings.smtp.port}
                                    />
                                </Field>
                            </div>
                            <div class="col-lg-3">
                                <Field class="form-field" name="smtp.username" let:uniqueId>
                                    <label for={uniqueId}>Логин</label>
                                    <input
                                        type="text"
                                        id={uniqueId}
                                        bind:value={formSettings.smtp.username}
                                    />
                                </Field>
                            </div>
                            <div class="col-lg-3">
                                <Field class="form-field" name="smtp.password" let:uniqueId>
                                    <label for={uniqueId}>Пароль</label>
                                    <RedactedPasswordInput
                                        id={uniqueId}
                                        bind:mask={maskPassword}
                                        bind:value={formSettings.smtp.password}
                                    />
                                </Field>
                            </div>
                        </div>

                        <button
                            type="button"
                            class="btn btn-sm btn-secondary m-t-sm m-b-sm"
                            on:click|preventDefault={() => {
                                showMoreOptions = !showMoreOptions;
                            }}
                        >
                            {#if showMoreOptions}
                                <span class="txt">Скрыть дополнительные настройки</span>
                                <i class="ri-arrow-up-s-line" />
                            {:else}
                                <span class="txt">Показать дополнительные настройки</span>
                                <i class="ri-arrow-down-s-line" />
                            {/if}
                        </button>

                        {#if showMoreOptions}
                            <div class="grid" transition:slide={{ duration: 150 }}>
                                <div class="col-lg-3">
                                    <Field class="form-field" name="smtp.tls" let:uniqueId>
                                        <label for={uniqueId}>TLS шифрование</label>
                                        <ObjectSelect
                                            id={uniqueId}
                                            items={tlsOptions}
                                            bind:keyOfSelected={formSettings.smtp.tls}
                                        />
                                    </Field>
                                </div>
                                <div class="col-lg-3">
                                    <Field class="form-field" name="smtp.authMethod" let:uniqueId>
                                        <label for={uniqueId}>Метод AUTH</label>
                                        <ObjectSelect
                                            id={uniqueId}
                                            items={authMethods}
                                            bind:keyOfSelected={formSettings.smtp.authMethod}
                                        />
                                    </Field>
                                </div>
                                <div class="col-lg-6">
                                    <Field class="form-field" name="smtp.localName" let:uniqueId>
                                        <label for={uniqueId}>
                                            <span class="txt">EHLO/HELO domain</span>
                                            <i
                                                class="ri-information-line link-hint"
                                                use:tooltip={{
                                                    text: "Некоторые SMTP серверы (например Gmail SMTP-relay) требуют корректное доменное имя на этапе EHLO/HELO и могут отклонять попытки использовать localhost.",
                                                    position: "top",
                                                }}
                                            />
                                        </label>
                                        <input
                                            type="text"
                                            id={uniqueId}
                                            placeholder="По умолчанию: localhost"
                                            bind:value={formSettings.smtp.localName}
                                        />
                                    </Field>
                                </div>
                                <div class="col-lg-12" />
                            </div>
                        {/if}
                    </div>
                {/if}

                <div class="flex">
                    <div class="flex-fill" />

                    {#if hasChanges}
                        <button
                            type="button"
                            class="btn btn-transparent btn-hint"
                            disabled={isSaving}
                            on:click={() => reset()}
                        >
                            <span class="txt">Отмена</span>
                        </button>
                        <button
                            type="submit"
                            class="btn btn-expanded"
                            class:btn-loading={isSaving}
                            disabled={!hasChanges || isSaving}
                            on:click={() => save()}
                        >
                            <span class="txt">Сохранить изменения</span>
                        </button>
                    {:else}
                        <button
                            type="button"
                            class="btn btn-expanded btn-outline"
                            on:click={() => testPopup?.show()}
                        >
                            <i class="ri-mail-check-line" />
                            <span class="txt">Отправить тестовое письмо</span>
                        </button>
                    {/if}
                </div>
            {/if}
        </form>
    </div>
</PageWrapper>

<EmailTestPopup bind:this={testPopup} />
