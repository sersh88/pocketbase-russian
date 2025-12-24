<script>
    import { slide } from "svelte/transition";
    import tooltip from "@/actions/tooltip";
    import Field from "@/components/base/Field.svelte";
    import ObjectSelect from "@/components/base/ObjectSelect.svelte";
    import MultipleValueInput from "@/components/base/MultipleValueInput.svelte";
    import CommonHelper from "@/utils/CommonHelper";

    export let key = "";
    export let config = {};

    const userInfoOptions = [
        { label: "User info URL", value: true },
        { label: "ID Token", value: false },
    ];

    let hasUserInfoURL = !!config.userInfoURL;

    if (CommonHelper.isEmpty(config.pkce)) {
        config.pkce = true;
    }

    if (!config.displayName) {
        config.displayName = "OIDC";
    }

    if (!config.extra) {
        config.extra = {};
        hasUserInfoURL = true;
    }

    $: if (typeof hasUserInfoURL !== undefined) {
        refreshUserInfoState();
    }

    function refreshUserInfoState() {
        if (!hasUserInfoURL) {
            config.userInfoURL = "";
            config.extra = config.extra || {};
        } else {
            config.extra = {};
        }
    }
</script>

<Field class="form-field required" name="{key}.displayName" let:uniqueId>
    <label for={uniqueId}>Отображаемое имя</label>
    <input type="text" id={uniqueId} bind:value={config.displayName} required />
</Field>

<div class="section-title">Эндпоинты</div>

<Field class="form-field required" name="{key}.authURL" let:uniqueId>
    <label for={uniqueId}>Auth URL</label>
    <input type="url" id={uniqueId} bind:value={config.authURL} required />
</Field>

<Field class="form-field required" name="{key}.tokenURL" let:uniqueId>
    <label for={uniqueId}>Token URL</label>
    <input type="url" id={uniqueId} bind:value={config.tokenURL} required />
</Field>

<Field class="form-field m-b-xs" let:uniqueId>
    <label for={uniqueId}>Брать user info из</label>
    <ObjectSelect id={uniqueId} items={userInfoOptions} bind:keyOfSelected={hasUserInfoURL} />
</Field>

<div class="sub-panel m-b-base">
    {#if hasUserInfoURL}
        <div class="content" transition:slide={{ delay: 10, duration: 150 }}>
            <Field class="form-field required" name="{key}.userInfoURL" let:uniqueId>
                <label for={uniqueId}>User info URL</label>
                <input type="url" id={uniqueId} bind:value={config.userInfoURL} required />
            </Field>
        </div>
    {:else}
        <div class="content" transition:slide={{ delay: 10, duration: 150 }}>
            <p class="txt-hint txt-sm m-b-xs">
                <em>
                    Оба поля считаются необязательными, потому что распарсенный <code>id_token</code> —
                    это прямой результат доверенного ответа code→token.
                </em>
            </p>
            <Field class="form-field m-b-xs" name="{key}.extra.jwksURL" let:uniqueId>
                <label for={uniqueId}>
                    <span class="txt">JWKS verification URL</span>
                    <i
                        class="ri-information-line link-hint"
                        use:tooltip={{
                            text: "URL публичных ключей для проверки токена.",
                            position: "top",
                        }}
                    />
                </label>
                <input type="url" id={uniqueId} bind:value={config.extra.jwksURL} />
            </Field>
            <Field class="form-field" name="{key}.extra.issuers" let:uniqueId>
                <label for={uniqueId}>
                    <span class="txt">Issuers</span>
                    <i
                        class="ri-information-line link-hint"
                        use:tooltip={{
                            text: "Список допустимых значений для проверки claim `iss` (через запятую).",
                            position: "top",
                        }}
                    />
                </label>
                <MultipleValueInput id={uniqueId} bind:value={config.extra.issuers} />
            </Field>
        </div>
    {/if}
</div>

<Field class="form-field" name="{key}.pkce" let:uniqueId>
    <input type="checkbox" id={uniqueId} bind:checked={config.pkce} />
    <label for={uniqueId}>
        <span class="txt">Поддерживать PKCE</span>
        <i
            class="ri-information-line link-hint"
            use:tooltip={{
                text: "Обычно можно держать включённым всегда: большинство провайдеров просто игнорят лишние query-параметры, если PKCE не поддерживают.",
                position: "right",
            }}
        />
    </label>
</Field>
