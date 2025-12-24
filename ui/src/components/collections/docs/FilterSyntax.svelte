<script>
    let expanded = false;

    function toggle() {
        expanded = !expanded;
    }
</script>

<button class="btn btn-sm btn-secondary m-t-10" on:click={toggle}>
    {#if expanded}
        <span class="txt">Скрыть детали</span>
        <i class="ri-arrow-up-s-line" />
    {:else}
        <span class="txt">Показать детали</span>
        <i class="ri-arrow-down-s-line" />
    {/if}
</button>

{#if expanded}
    <p>
        Синтаксис в целом такой:
        <code>
            <span class="txt-success">OPERAND</span>
            <span class="txt-danger">OPERATOR</span>
            <span class="txt-success">OPERAND</span></code
        >, where:
    </p>
    <ul>
        <li>
            <code class="txt-success">OPERAND</code> — это может быть поле (литерал), строка (в одинарных или
            двойных кавычках), число, null, true, false
        </li>
        <li>
            <code class="txt-danger">OPERATOR</code> — один из:
            <br />
            <ul>
                <li>
                    <code class="filter-op">{"="}</code>
                    <span class="txt">Равно</span>
                </li>
                <li>
                    <code class="filter-op">{"!="}</code>
                    <span class="txt">Не равно</span>
                </li>
                <li>
                    <code class="filter-op">{">"}</code>
                    <span class="txt">Больше</span>
                </li>
                <li>
                    <code class="filter-op">{">="}</code>
                    <span class="txt">Больше или равно</span>
                </li>
                <li>
                    <code class="filter-op">{"<"}</code>
                    <span class="txt">Меньше</span>
                </li>
                <li>
                    <code class="filter-op">{"<="}</code>
                    <span class="txt">Меньше или равно</span>
                </li>
                <li>
                    <code class="filter-op">{"~"}</code>
                    <span class="txt">
                        Like/Contains (если не указано — автоматически оборачивает правый строковый OPERAND в
                        "%", чтобы был wildcard‑поиск)
                    </span>
                </li>
                <li>
                    <code class="filter-op">{"!~"}</code>
                    <span class="txt">
                        NOT Like/Contains (если не указано — автоматически оборачивает правый строковый OPERAND
                        в "%", чтобы был wildcard‑поиск)
                    </span>
                </li>

                <li>
                    <code class="filter-op">{"?="}</code>
                    <em class="txt-hint">Any/At least one of</em>
                    <span class="txt">Равно</span>
                </li>
                <li>
                    <code class="filter-op">{"?!="}</code>
                    <em class="txt-hint">Any/At least one of</em>
                    <span class="txt">Не равно</span>
                </li>
                <li>
                    <code class="filter-op">{"?>"}</code>
                    <em class="txt-hint">Any/At least one of</em>
                    <span class="txt">Больше</span>
                </li>
                <li>
                    <code class="filter-op">{"?>="}</code>
                    <em class="txt-hint">Any/At least one of</em>
                    <span class="txt">Больше или равно</span>
                </li>
                <li>
                    <code class="filter-op">{"?<"}</code>
                    <em class="txt-hint">Any/At least one of</em>
                    <span class="txt">Меньше</span>
                </li>
                <li>
                    <code class="filter-op">{"?<="}</code>
                    <em class="txt-hint">Any/At least one of</em>
                    <span class="txt">Меньше или равно</span>
                </li>
                <li>
                    <code class="filter-op">{"?~"}</code>
                    <em class="txt-hint">Any/At least one of</em>
                    <span class="txt">
                        Like/Contains (если не указано — автоматически оборачивает правый строковый OPERAND в
                        "%", чтобы был wildcard‑поиск)
                    </span>
                </li>
                <li>
                    <code class="filter-op">{"?!~"}</code>
                    <em class="txt-hint">Any/At least one of</em>
                    <span class="txt">
                        NOT Like/Contains (если не указано — автоматически оборачивает правый строковый OPERAND
                        в "%", чтобы был wildcard‑поиск)
                    </span>
                </li>
            </ul>
        </li>
    </ul>

    <p>
        Чтобы группировать и комбинировать выражения, используй скобки
        <code>(...)</code>, <code>&&</code> (AND) and <code>||</code> (OR) tokens.
    </p>
{/if}

<style>
    .filter-op {
        display: inline-block;
        vertical-align: top;
        margin-right: 5px;
        width: 30px;
        text-align: center;
        padding-left: 0;
        padding-right: 0;
    }
</style>
