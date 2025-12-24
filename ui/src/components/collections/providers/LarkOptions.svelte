<script>
    import Field from "@/components/base/Field.svelte";
    import ObjectSelect from "@/components/base/ObjectSelect.svelte";

    export let config = {};

    const DOMAIN_FEISHU = "feishu.cn";
    const DOMAIN_LARKSUITE = "larksuite.com";

    const domainOptions = [
        { label: "Feishu (Китай)", value: DOMAIN_FEISHU },
        { label: "Lark (международный)", value: DOMAIN_LARKSUITE },
    ];

    let domain = DOMAIN_FEISHU;

    if (config.authURL?.includes(DOMAIN_LARKSUITE)) {
        domain = DOMAIN_LARKSUITE;
    }

    $: {
        config.authURL = `https://accounts.${domain}/open-apis/authen/v1/authorize`;
        config.tokenURL = `https://open.${domain}/open-apis/authen/v2/oauth/token`;
        config.userInfoURL = `https://open.${domain}/open-apis/authen/v1/user_info`;
    }
</script>

<Field class="form-field" let:uniqueId>
    <label for={uniqueId}>Сайт</label>
    <ObjectSelect id={uniqueId} items={domainOptions} bind:keyOfSelected={domain} />
</Field>

<div class="alert alert-info">
    <div class="icon">
        <i class="ri-information-line" />
    </div>
    <div class="content">
        Учти: у пользователя Lark будет использоваться <strong>Union ID</strong> для привязки к пользователю
        PocketBase (см.
        <a
            href="https://open.feishu.cn/document/platform-overveiw/basic-concepts/user-identity-introduction/introduction#3f2d4b63"
            target="_blank"
            rel="noopener noreferrer"
        >
            разные типы Lark ID
        </a>
        ).
    </div>
</div>
