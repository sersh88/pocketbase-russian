<script>
    import tooltip from "@/actions/tooltip";
    import Field from "@/components/base/Field.svelte";
    import SchemaField from "@/components/collections/schema/SchemaField.svelte";

    export let field;
    export let key = "";
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
                placeholder="По умолчанию: ~5MB"
            />
        </Field>

        <Field class="form-field form-field-toggle" name="fields.{key}.convertURLs" let:uniqueId>
            <input type="checkbox" id={uniqueId} bind:checked={field.convertURLs} />
            <label for={uniqueId}>
                <span class="txt">Убирать домен из URL</span>
                <i
                    class="ri-information-line link-hint"
                    use:tooltip={{
                        text: `Это может помочь сделать контент редактора более переносимым между окружениями: не придётся заменять локальный base URL.`,
                    }}
                />
            </label>
        </Field>
    </svelte:fragment>
</SchemaField>
