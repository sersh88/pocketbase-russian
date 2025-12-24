<script>
    import { onMount } from "svelte";
    import { pageTitle } from "@/stores/app";

    $pageTitle = "OAuth2: вход выполнен";

    onMount(() => {
        window.close();
    });
</script>

<div class="content txt-hint txt-center p-base">
    <h3 class="m-b-sm">Вход выполнен.</h3>
    <h5>Можешь закрыть это окно и вернуться в приложение.</h5>
</div>
