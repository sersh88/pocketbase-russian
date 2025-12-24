<script>
    import { slide } from "svelte/transition";
    import ApiClient from "@/utils/ApiClient";
    import CommonHelper from "@/utils/CommonHelper";
    import { pageTitle } from "@/stores/app";
    import { setErrors } from "@/stores/errors";
    import { removeAllToasts, addSuccessToast } from "@/stores/toasts";
    import tooltip from "@/actions/tooltip";
    import PageWrapper from "@/components/base/PageWrapper.svelte";
    import SettingsSidebar from "@/components/settings/SettingsSidebar.svelte";
    import S3Fields from "@/components/settings/S3Fields.svelte";

    $pageTitle = "Хранилище файлов";

    const testRequestKey = "s3_test_request";

    let originalFormSettings = {};
    let formSettings = {};
    let isLoading = false;
    let isSaving = false;
    let isTesting = false;
    let testError = null;

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
            ApiClient.cancelRequest(testRequestKey);
            const settings = await ApiClient.settings.update(CommonHelper.filterRedactedProps(formSettings));
            setErrors({});

            await init(settings);

            removeAllToasts();

            addSuccessToast("Настройки хранилища успешно сохранены.");
        } catch (err) {
            ApiClient.error(err);
        }

        isSaving = false;
    }

    async function init(settings = {}) {
        formSettings = {
            s3: settings?.s3 || {},
        };

        originalFormSettings = JSON.parse(JSON.stringify(formSettings));
    }

    async function reset() {
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
                <p>По умолчанию PocketBase хранит загруженные файлы в локальной файловой системе.</p>
                <p>
                    Если на диске мало места — можно подключить S3‑совместимое хранилище.
                </p>
            </div>

            {#if isLoading}
                <div class="loader" />
            {:else}
                <S3Fields
                    toggleLabel="Использовать S3 хранилище"
                    originalConfig={originalFormSettings.s3}
                    bind:config={formSettings.s3}
                    bind:isTesting
                    bind:testError
                >
                    {#if originalFormSettings.s3?.enabled != formSettings.s3.enabled}
                        <div transition:slide={{ duration: 150 }}>
                            <div class="alert alert-warning m-0">
                                <div class="icon">
                                    <i class="ri-error-warning-line" />
                                </div>
                                <div class="content">
                                    Если у тебя уже есть загруженные файлы — их нужно будет перенести вручную из
                                    <strong>
                                        {originalFormSettings.s3?.enabled
                                            ? "S3‑хранилища"
                                            : "локальной файловой системы"}
                                    </strong>
                                    в
                                    <strong
                                        >{formSettings.s3.enabled
                                            ? "S3‑хранилище"
                                            : "локальную файловую систему"}</strong
                                    >.
                                    <br />
                                    Могут помочь разные CLI‑утилиты, например:
                                    <a
                                        href="https://github.com/rclone/rclone"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="txt-bold"
                                    >
                                        rclone
                                    </a>,
                                    <a
                                        href="https://github.com/peak/s5cmd"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="txt-bold"
                                    >
                                        s5cmd
                                    </a>, etc.
                                </div>
                            </div>
                            <div class="clearfix m-t-base" />
                        </div>
                    {/if}
                </S3Fields>

                <div class="flex">
                    <div class="flex-fill" />

                    {#if formSettings.s3?.enabled && !hasChanges && !isSaving}
                        {#if isTesting}
                            <span class="loader loader-sm" />
                        {:else if testError}
                            <div
                                class="label label-sm label-warning entrance-right"
                                use:tooltip={testError.data?.message}
                            >
                                <i class="ri-error-warning-line txt-warning" />
                                <span class="txt">Не удалось подключиться к S3</span>
                            </div>
                        {:else}
                            <div class="label label-sm label-success entrance-right">
                                <i class="ri-checkbox-circle-line txt-success" />
                                <span class="txt">S3 подключено</span>
                            </div>
                        {/if}
                    {/if}

                    {#if hasChanges}
                        <button
                            type="button"
                            class="btn btn-transparent btn-hint"
                            disabled={isSaving}
                            on:click={() => reset()}
                        >
                            <span class="txt">Сбросить</span>
                        </button>
                    {/if}

                    <button
                        type="submit"
                        class="btn btn-expanded"
                        class:btn-loading={isSaving}
                        disabled={!hasChanges || isSaving}
                        on:click={() => save()}
                    >
                        <span class="txt">Сохранить изменения</span>
                    </button>
                </div>
            {/if}
        </form>
    </div>
</PageWrapper>
