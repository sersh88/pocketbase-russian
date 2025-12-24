<script>
    import PocketBase, { getTokenPayload } from "pocketbase";
    import ApiClient from "@/utils/ApiClient";
    import CommonHelper from "@/utils/CommonHelper";
    import FullPage from "@/components/base/FullPage.svelte";
    import Field from "@/components/base/Field.svelte";

    export let params;

    let newPassword = "";
    let newPasswordConfirm = "";
    let isLoading = false;
    let success = false;

    $: email = CommonHelper.getJWTPayload(params?.token).email || "";

    async function submit() {
        if (isLoading) {
            return;
        }

        isLoading = true;

        // init a custom client to avoid interfering with the superuser state
        const client = new PocketBase(import.meta.env.PB_BACKEND_URL);

        try {
            const payload = getTokenPayload(params?.token);
            await client
                .collection(payload.collectionId)
                .confirmPasswordReset(params?.token, newPassword, newPasswordConfirm);
            success = true;
        } catch (err) {
            ApiClient.error(err);
        }

        isLoading = false;
    }
</script>

<FullPage nobranding>
    {#if success}
        <div class="alert alert-success">
            <div class="icon"><i class="ri-checkbox-circle-line" /></div>
            <div class="content txt-bold">
                <p>Пароль пользователя успешно изменён.</p>
                <p>Теперь можешь войти с новым паролем.</p>
            </div>
        </div>

        <button type="button" class="btn btn-transparent btn-block" on:click={() => window.close()}>
            Закрыть
        </button>
    {:else}
        <form on:submit|preventDefault={submit}>
            <div class="content txt-center m-b-base">
                <h5>
                    Сброс пароля пользователя
                    {#if email}
                        для <strong>{email}</strong>
                    {/if}
                </h5>
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

            <button
                type="submit"
                class="btn btn-lg btn-block"
                class:btn-loading={isLoading}
                disabled={isLoading}
            >
                <span class="txt">Установить новый пароль</span>
            </button>
        </form>
    {/if}
</FullPage>
