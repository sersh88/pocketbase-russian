<script>
    import { link, replace } from "svelte-spa-router";
    import ApiClient from "@/utils/ApiClient";
    import CommonHelper from "@/utils/CommonHelper";
    import { addSuccessToast } from "@/stores/toasts";
    import FullPage from "@/components/base/FullPage.svelte";
    import Field from "@/components/base/Field.svelte";

    export let params;

    let newPassword = "";
    let newPasswordConfirm = "";
    let isLoading = false;

    $: email = CommonHelper.getJWTPayload(params?.token).email || "";

    async function submit() {
        if (isLoading) {
            return;
        }

        isLoading = true;

        try {
            await ApiClient.collection("_superusers").confirmPasswordReset(
                params?.token,
                newPassword,
                newPasswordConfirm,
            );
            addSuccessToast("Новый пароль суперпользователя успешно установлен.");
            replace("/");
        } catch (err) {
            ApiClient.error(err);
        }

        isLoading = false;
    }
</script>

<FullPage>
    <form class="m-b-base" on:submit|preventDefault={submit}>
        <div class="content txt-center m-b-sm">
            <h4 class="m-b-xs">
                Сброс пароля суперпользователя
                {#if email}
                    для <strong class="txt-nowrap">{email}</strong>
                {/if}
            </h4>
        </div>

        <Field class="form-field required" name="password" let:uniqueId>
            <label for={uniqueId}>Новый пароль</label>
            <!-- svelte-ignore a11y-autofocus -->
            <input type="password" id={uniqueId} required autofocus bind:value={newPassword} />
        </Field>

        <Field class="form-field required" name="passwordConfirm" let:uniqueId>
            <label for={uniqueId}>Подтверждение нового пароля</label>
            <input type="password" id={uniqueId} required bind:value={newPasswordConfirm} />
        </Field>

        <button type="submit" class="btn btn-lg btn-block" class:btn-loading={isLoading} disabled={isLoading}>
            <span class="txt">Установить новый пароль</span>
        </button>
    </form>

    <div class="content txt-center">
        <a href="/login" class="link-hint" use:link>Назад ко входу</a>
    </div>
</FullPage>
