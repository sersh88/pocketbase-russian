<script>
    import { createEventDispatcher, onDestroy } from "svelte";
    import ApiClient from "@/utils/ApiClient";
    import CommonHelper from "@/utils/CommonHelper";
    import { setErrors } from "@/stores/errors";
    import { addInfoToast, addSuccessToast } from "@/stores/toasts";
    import OverlayPanel from "@/components/base/OverlayPanel.svelte";
    import Field from "@/components/base/Field.svelte";

    const dispatch = createEventDispatcher();

    const formId = "backup_create_" + CommonHelper.randomString(5);

    let panel;
    let name = "";
    let isSubmitting = false;
    let submitTimeoutId;

    export function show(newName) {
        setErrors({});
        isSubmitting = false;
        name = newName || "";
        panel?.show();
    }

    export function hide() {
        return panel?.hide();
    }

    async function submit() {
        if (isSubmitting) {
            return;
        }

        isSubmitting = true;

        clearTimeout(submitTimeoutId);
        submitTimeoutId = setTimeout(() => {
            hide();
        }, 1500);

        try {
            await ApiClient.backups.create(name, { $cancelKey: formId });

            isSubmitting = false;

            hide();
            dispatch("submit");
            addSuccessToast("Бэкап успешно создан.");
        } catch (err) {
            if (!err.isAbort) {
                ApiClient.error(err);
            }
        }

        clearTimeout(submitTimeoutId);
        isSubmitting = false;
    }

    onDestroy(() => {
        clearTimeout(submitTimeoutId);
    });
</script>

<OverlayPanel
    bind:this={panel}
    class="backup-create-panel"
    beforeOpen={() => {
        if (isSubmitting) {
            addInfoToast("Бэкап уже создаётся, подожди.");
            return false;
        }

        return true;
    }}
    beforeHide={() => {
        if (isSubmitting) {
            addInfoToast("Бэкап уже запущен, но ему может понадобиться время. Можешь вернуться позже.", 4500);
        }

        return true;
    }}
    popup
    on:show
    on:hide
>
    <svelte:fragment slot="header">
        <h4 class="center txt-break">Создать новый бэкап</h4>
    </svelte:fragment>

    <div class="alert alert-info">
        <div class="icon">
            <i class="ri-information-line" />
        </div>
        <div class="content">
            <p>
                Учти: во время бэкапа параллельные запросы на запись могут падать — база временно “лочится”
                (обычно только на этапе генерации ZIP).
            </p>
            <p class="txt-bold">
                Если у тебя включено S3‑хранилище для загруженных файлов коллекций — их нужно бэкапить
                отдельно, потому что они не лежат локально и не попадут в итоговый архив!
            </p>
        </div>
    </div>

    <form id={formId} autocomplete="off" on:submit|preventDefault={submit}>
        <Field class="form-field m-0" name="name" let:uniqueId>
            <label for={uniqueId}>Имя бэкапа</label>
            <input
                type="text"
                id={uniqueId}
                placeholder={"Оставь пустым для авто‑генерации"}
                pattern="^[a-z0-9_-]+\.zip$"
                bind:value={name}
            />
            <em class="help-block">Формат: [a-z0-9_-].zip</em>
        </Field>
    </form>

    <svelte:fragment slot="footer">
        <button type="button" class="btn btn-transparent" on:click={hide} disabled={isSubmitting}>
            <span class="txt">Отмена</span>
        </button>
        <button
            type="submit"
            form={formId}
            class="btn btn-expanded"
            class:btn-loading={isSubmitting}
            disabled={isSubmitting}
        >
            <span class="txt">Запустить бэкап</span>
        </button>
    </svelte:fragment>
</OverlayPanel>
