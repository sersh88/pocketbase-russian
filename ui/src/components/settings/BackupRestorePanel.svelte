<script>
    import ApiClient from "@/utils/ApiClient";
    import CommonHelper from "@/utils/CommonHelper";
    import { setErrors } from "@/stores/errors";
    import { addErrorToast } from "@/stores/toasts";
    import OverlayPanel from "@/components/base/OverlayPanel.svelte";
    import Field from "@/components/base/Field.svelte";
    import CopyIcon from "@/components/base/CopyIcon.svelte";
    import { onDestroy } from "svelte";

    const formId = "backup_restore_" + CommonHelper.randomString(5);

    let panel;
    let name = "";
    let nameConfirm = "";
    let isSubmitting = false;
    let reloadTimeoutId = null;

    $: canSubmit = nameConfirm != "" && name == nameConfirm;

    export function show(backupName) {
        setErrors({});
        nameConfirm = "";
        name = backupName;
        isSubmitting = false;
        panel?.show();
    }

    export function hide() {
        return panel?.hide();
    }

    async function submit() {
        if (!canSubmit || isSubmitting) {
            return;
        }

        clearTimeout(reloadTimeoutId);

        isSubmitting = true;

        try {
            await ApiClient.backups.restore(name);

            // optimistic restore page reload
            reloadTimeoutId = setTimeout(() => {
                window.location.reload();
            }, 2000);
        } catch (err) {
            clearTimeout(reloadTimeoutId);

            if (!err?.isAbort) {
                isSubmitting = false;
                addErrorToast(err.response?.message || err.message);
            }
        }
    }

    onDestroy(() => {
        clearTimeout(reloadTimeoutId);
    });
</script>

<OverlayPanel
    bind:this={panel}
    class="backup-restore-panel"
    overlayClose={!isSubmitting}
    escClose={!isSubmitting}
    beforeHide={() => !isSubmitting}
    popup
    on:show
    on:hide
>
    <svelte:fragment slot="header">
        <h4 class="popup-title txt-ellipsis">Восстановить <strong>{name}</strong></h4>
    </svelte:fragment>

    <div class="alert alert-danger">
        <div class="icon">
            <i class="ri-alert-line" />
        </div>
        <div class="content">
            <p class="txt-bold">Действуй осторожно и используй только проверенные бэкапы!</p>

            <p>Восстановление бэкапа — экспериментальная функция и работает только на UNIX‑системах.</p>
            <p>
                Восстановление попытается заменить текущую <code>pb_data</code> на версию из бэкапа и перезапустит
                процесс приложения.
            </p>
            <p>
                То есть при успехе все данные (включая настройки приложения, пользователей, суперпользователей и т.д.)
                будут заменены данными из бэкапа.
            </p>
            <p>
                Если бэкап невалидный (например, нет файла <code>data.db</code>) — ничего не произойдёт.
            </p>
            <p>Упрощённо процесс восстановления выглядит так:</p>
            <ol>
                <li>Заменяет текущую <code>pb_data</code> содержимым из бэкапа</li>
                <li>Перезапускает приложение</li>
                <li>Применяет недостающие миграции в восстановленной <code>pb_data</code></li>
                <li>Запускает сервер приложения как обычно</li>
            </ol>
        </div>
    </div>

    <div class="content m-b-xs">
        Введи имя бэкапа
        <div class="label">
            <span class="txt">{name}</span>
            <CopyIcon value={name} />
        </div>
        чтобы подтвердить:
    </div>

    <form id={formId} autocomplete="off" on:submit|preventDefault={submit}>
        <Field class="form-field required m-0" name="name" let:uniqueId>
            <label for={uniqueId}>Имя бэкапа</label>
            <input type="text" id={uniqueId} required bind:value={nameConfirm} />
        </Field>
    </form>

    <svelte:fragment slot="footer">
        <button type="button" class="btn btn-transparent" on:click={hide} disabled={isSubmitting}>
            Отмена
        </button>
        <button
            type="submit"
            form={formId}
            class="btn btn-expanded"
            class:btn-loading={isSubmitting}
            disabled={!canSubmit || isSubmitting}
        >
            <span class="txt">Восстановить бэкап</span>
        </button>
    </svelte:fragment>
</OverlayPanel>

<style>
    .popup-title {
        max-width: 80%;
    }
</style>
