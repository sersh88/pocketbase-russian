<script>
    import { onMount } from "svelte";
    import { pageTitle } from "@/stores/app";

    $pageTitle = "OAuth2: ошибка входа";

    onMount(() => {
        window.close();
    });
</script>

<div class="content txt-hint txt-center p-base">
    <h3 class="m-b-sm">Вход не удался.</h3>
    <h5>Можешь закрыть это окно и вернуться в приложение, чтобы попробовать ещё раз.</h5>
</div>
