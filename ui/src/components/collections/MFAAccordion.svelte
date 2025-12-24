<script>
    import { scale } from "svelte/transition";
    import CommonHelper from "@/utils/CommonHelper";
    import tooltip from "@/actions/tooltip";
    import { errors } from "@/stores/errors";
    import Accordion from "@/components/base/Accordion.svelte";
    import Field from "@/components/base/Field.svelte";
    import RuleField from "@/components/collections/RuleField.svelte";

    export let collection;

    $: hasErrors = !CommonHelper.isEmpty($errors?.mfa);
</script>

<Accordion single>
    <svelte:fragment slot="header">
        <div class="inline-flex">
            <i class="ri-shield-check-line"></i>
            <span class="txt">Многофакторная аутентификация (MFA)</span>
        </div>

        <div class="flex-fill" />

        {#if collection.mfa.enabled}
            <span class="label label-success">Включено</span>
        {:else}
            <span class="label">Отключено</span>
        {/if}

        {#if hasErrors}
            <i
                class="ri-error-warning-fill txt-danger"
                transition:scale={{ duration: 150, start: 0.7 }}
                use:tooltip={{ text: "Есть ошибки", position: "left" }}
            />
        {/if}
    </svelte:fragment>

    <div class="content m-b-sm">
        <p class="txt-bold">Фича экспериментальная и может поменяться в будущем.</p>
        <p>
            MFA требует, чтобы пользователь прошёл аутентификацию любыми 2 разными способами (otp,
            логин/пароль, oauth2) перед тем, как выдать auth-токен.
            <a
                href={import.meta.env.PB_MFA_DOCS}
                target="_blank"
                rel="noopener noreferrer"
                class="txt-sm link-hint"
                title="Подробнее"
            >
                <em>(Подробнее)</em>
            </a>.
        </p>
    </div>

    <div class="grid">
        <Field class="form-field form-field-toggle" name="mfa.enabled" let:uniqueId>
            <input type="checkbox" id={uniqueId} bind:checked={collection.mfa.enabled} />
            <label for={uniqueId}>
                <span class="txt">Включить</span>
            </label>
        </Field>

        <div class="content" class:fade={!collection.mfa.enabled}>
            <RuleField
                label="Правило MFA"
                formKey="mfa.rule"
                superuserToggle={false}
                disabled={!collection.mfa.enabled}
                placeholder="Оставь пустым, чтобы требовать MFA для всех"
                {collection}
                bind:rule={collection.mfa.rule}
            >
                <svelte:fragment>
                    <p>
                        Это необязательное правило можно использовать, чтобы включать/выключать MFA для
                        отдельных аккаунтов.
                    </p>
                    <p>
                        Например, чтобы требовать MFA только для аккаунтов с непустым email, задай:
                        <code>email != ''</code>.
                    </p>
                    <p>Оставь правило пустым, чтобы требовать MFA для всех.</p>
                </svelte:fragment>
            </RuleField>
        </div>
    </div>
</Accordion>
