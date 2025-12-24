<script>
    import { createEventDispatcher } from "svelte";
    import ApiClient from "@/utils/ApiClient";
    import CommonHelper from "@/utils/CommonHelper";
    import { addSuccessToast } from "@/stores/toasts";
    import { setErrors } from "@/stores/errors";
    import tooltip from "@/actions/tooltip";
    import OverlayPanel from "@/components/base/OverlayPanel.svelte";
    import Field from "@/components/base/Field.svelte";

    const dispatch = createEventDispatcher();

    const formId = "apple_secret_" + CommonHelper.randomString(5);

    const maxDuration = 15777000; // 6 months

    let panel;
    let clientId;
    let teamId;
    let keyId;
    let privateKey;
    let duration;
    let isSubmitting = false;

    $: canSubmit = true;

    export function show(config = {}) {
        clientId = config.clientId || "";
        teamId = config.teamId || "";
        keyId = config.keyId || "";
        privateKey = config.privateKey || "";
        duration = config.duration || maxDuration;

        setErrors({}); // reset any previous errors

        panel?.show();
    }

    export function hide() {
        return panel?.hide();
    }

    async function submit() {
        isSubmitting = true;

        try {
            const result = await ApiClient.settings.generateAppleClientSecret(
                clientId,
                teamId,
                keyId,
                privateKey.trim(),
                duration,
            );

            isSubmitting = false;

            addSuccessToast("Client secret успешно сгенерирован.");

            dispatch("submit", result);

            panel?.hide();
        } catch (err) {
            ApiClient.error(err);
        }

        isSubmitting = false;
    }
</script>

<OverlayPanel
    bind:this={panel}
    overlayClose={!isSubmitting}
    escClose={!isSubmitting}
    beforeHide={() => !isSubmitting}
    popup
    on:show
    on:hide
>
    <svelte:fragment slot="header">
        <h4 class="center txt-break">Сгенерировать Apple client secret</h4>
    </svelte:fragment>

    <form id={formId} autocomplete="off" on:submit|preventDefault={() => submit()}>
        <div class="grid">
            <div class="col-lg-6">
                <Field class="form-field required" name="clientId" let:uniqueId>
                    <label for={uniqueId}>Client ID</label>
                    <input type="text" id={uniqueId} bind:value={clientId} required />
                </Field>
            </div>
            <div class="col-lg-6">
                <Field class="form-field required" name="teamId" let:uniqueId>
                    <label for={uniqueId}>Team ID</label>
                    <input type="text" id={uniqueId} bind:value={teamId} required />
                </Field>
            </div>
            <div class="col-lg-6">
                <Field class="form-field required" name="keyId" let:uniqueId>
                    <label for={uniqueId}>Key ID</label>
                    <input type="text" id={uniqueId} bind:value={keyId} required />
                </Field>
            </div>
            <div class="col-lg-6">
                <Field class="form-field required" name="duration" let:uniqueId>
                    <label for={uniqueId}>
                        <span class="txt">Срок (в секундах)</span>
                        <i
                            class="ri-information-line link-hint"
                            use:tooltip={{
                                text: `Макс ${maxDuration} секунд (~${
                                    (maxDuration / (60 * 60 * 24 * 30)) << 0
                                } months).`,
                                position: "top",
                            }}
                        />
                    </label>
                    <input type="number" id={uniqueId} max={maxDuration} bind:value={duration} required />
                </Field>
            </div>

            <Field class="form-field required" name="privateKey" let:uniqueId>
                <label for={uniqueId}>Приватный ключ</label>
                <textarea
                    id={uniqueId}
                    required
                    rows="8"
                    placeholder={"-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----"}
                    bind:value={privateKey}
                />
                <div class="help-block">
                    Ключ не сохраняется на сервере и используется только для генерации подписанного JWT.
                </div>
            </Field>
        </div>
    </form>

    <svelte:fragment slot="footer">
        <button type="button" class="btn btn-transparent" on:click={hide} disabled={isSubmitting}
            >Закрыть</button
        >
        <button
            type="submit"
            form={formId}
            class="btn btn-expanded"
            class:btn-loading={isSubmitting}
            disabled={!canSubmit || isSubmitting}
        >
            <i class="ri-key-line" />
            <span class="txt">Сгенерировать и установить секрет</span>
        </button>
    </svelte:fragment>
</OverlayPanel>
