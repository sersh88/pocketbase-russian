<script>
    import Field from "@/components/base/Field.svelte";
    import SchemaField from "@/components/collections/schema/SchemaField.svelte";
    import { slide } from "svelte/transition";

    export let field;
    export let key = "";

    let showInfo = false;
</script>

<SchemaField bind:field {key} on:rename on:remove on:duplicate {...$$restProps}>
    <svelte:fragment slot="options">
        <Field class="form-field m-b-sm" name="fields.{key}.maxSize" let:uniqueId>
            <label for={uniqueId}>Макс. размер <small>(байты)</small></label>
            <input
                type="number"
                id={uniqueId}
                step="1"
                min="0"
                max={Number.MAX_SAFE_INTEGER}
                value={field.maxSize || ""}
                on:input={(e) => (field.maxSize = parseInt(e.target.value, 10))}
                placeholder="По умолчанию: ~1MB"
            />
        </Field>

        <button
            type="button"
            class="btn btn-sm {showInfo ? 'btn-secondary' : 'btn-hint btn-transparent'}"
            on:click={() => {
                showInfo = !showInfo;
            }}
        >
            <strong class="txt">Нормализация строковых значений</strong>
            {#if showInfo}
                <i class="ri-arrow-up-s-line txt-sm" />
            {:else}
                <i class="ri-arrow-down-s-line txt-sm" />
            {/if}
        </button>
        {#if showInfo}
            <div class="block" transition:slide={{ duration: 150 }}>
                <div class="alert alert-warning m-b-0 m-t-10">
                    <div class="content">
                        Чтобы одинаково поддерживать запросы <code>application/json</code> и
                        <code>multipart/form-data</code>, применяются такие правила нормализации, если поле
                        <code>json</code> приходит как <strong>обычная строка</strong>:
                        <ul>
                            <li>"true" конвертируется в json <code>true</code></li>
                            <li>"false" конвертируется в json <code>false</code></li>
                            <li>"null" конвертируется в json <code>null</code></li>
                            <li>"[1,2,3]" конвертируется в json <code>[1,2,3]</code></li>
                            <li>
                                {'"{"a":1,"b":2}"'} конвертируется в json <code>{'{"a":1,"b":2}'}</code>
                            </li>
                            <li>числовые строки конвертируются в json number</li>
                            <li>строки в двойных кавычках остаются как есть (без нормализации)</li>
                            <li>любая другая строка (включая пустую) оборачивается в двойные кавычки</li>
                        </ul>
                        Если хочешь избежать нормализации строк — оборачивай данные в объект, например:
                        <code>{'{"data": anything}'}</code>
                    </div>
                </div>
            </div>
        {/if}
    </svelte:fragment>
</SchemaField>
