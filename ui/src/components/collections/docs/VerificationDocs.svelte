<script>
    import SdkTabs from "@/components/base/SdkTabs.svelte";
    import VerificationApiConfirmDocs from "@/components/collections/docs/VerificationApiConfirmDocs.svelte";
    import VerificationApiRequestDocs from "@/components/collections/docs/VerificationApiRequestDocs.svelte";
    import ApiClient from "@/utils/ApiClient";
    import CommonHelper from "@/utils/CommonHelper";

    export let collection;

    const apiTabs = [
        { title: "Запросить подтверждение", component: VerificationApiRequestDocs },
        { title: "Подтвердить", component: VerificationApiConfirmDocs },
    ];

    let activeApiTab = 0;

    $: backendAbsUrl = CommonHelper.getApiExampleUrl(ApiClient.baseURL);
</script>

<h3 class="m-b-sm">Подтверждение аккаунта ({collection.name})</h3>
<div class="content txt-lg m-b-sm">
    <p>Отправляет запрос на подтверждение аккаунта <strong>{collection.name}</strong>.</p>
</div>

<SdkTabs
    js={`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${backendAbsUrl}');

        ...

        await pb.collection('${collection?.name}').requestVerification('test@example.com');

        // ---
        // (optional) in your custom confirmation page:
        // ---

        await pb.collection('${collection?.name}').confirmVerification('VERIFICATION_TOKEN');
    `}
    dart={`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${backendAbsUrl}');

        ...

        await pb.collection('${collection?.name}').requestVerification('test@example.com');

        // ---
        // (optional) in your custom confirmation page:
        // ---

        await pb.collection('${collection?.name}').confirmVerification('VERIFICATION_TOKEN');
    `}
/>

<h6 class="m-b-xs">Детали API</h6>
<div class="tabs">
    <div class="tabs-header compact">
        {#each apiTabs as tab, i}
            <button class="tab-item" class:active={activeApiTab == i} on:click={() => (activeApiTab = i)}>
                <div class="txt">{tab.title}</div>
            </button>
        {/each}
    </div>
    <div class="tabs-content">
        {#each apiTabs as tab, i}
            <div class="tab-item" class:active={activeApiTab == i}>
                <svelte:component this={tab.component} {collection} />
            </div>
        {/each}
    </div>
</div>
