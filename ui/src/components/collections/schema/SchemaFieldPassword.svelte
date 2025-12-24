<script>
    import Field from "@/components/base/Field.svelte";
    import SchemaField from "@/components/collections/schema/SchemaField.svelte";
    import CommonHelper from "@/utils/CommonHelper";

    export let field;
    export let key = "";

    $: if (CommonHelper.isEmpty(field.id)) {
        loadDefaults();
    }

    function loadDefaults() {
        field.cost = 11;
    }
</script>

<SchemaField bind:field {key} on:rename on:remove on:duplicate {...$$restProps}>
    <svelte:fragment slot="options">
        <div class="grid grid-sm">
            <div class="col-sm-6">
                <Field class="form-field" name="fields.{key}.min" let:uniqueId>
                    <label for={uniqueId}>Мин. длина</label>
                    <input
                        type="number"
                        id={uniqueId}
                        step="1"
                        min="0"
                        placeholder="Без мин. лимита"
                        value={field.min || ""}
                        on:input={(e) => (field.min = e.target.value << 0)}
                    />
                </Field>
            </div>

            <div class="col-sm-6">
                <Field class="form-field" name="fields.{key}.max" let:uniqueId>
                    <label for={uniqueId}>Макс. длина</label>
                    <input
                        type="number"
                        id={uniqueId}
                        step="1"
                        placeholder="До 71 символа"
                        min={field.min || 0}
                        max="71"
                        value={field.max || ""}
                        on:input={(e) => (field.max = e.target.value << 0)}
                    />
                </Field>
            </div>

            <div class="col-sm-6">
                <Field class="form-field" name="fields.{key}.cost" let:uniqueId>
                    <label for={uniqueId}>Стоимость bcrypt</label>
                    <input
                        type="number"
                        id={uniqueId}
                        placeholder="По умолчанию: 10"
                        step="1"
                        min="6"
                        max="31"
                        value={field.cost || ""}
                        on:input={(e) => (field.cost = e.target.value << 0)}
                    />
                </Field>
            </div>

            <div class="col-sm-6">
                <Field class="form-field" name="fields.{key}.pattern" let:uniqueId>
                    <label for={uniqueId}>Паттерн валидации</label>
                    <input type="text" id={uniqueId} placeholder="например: ^\\w+$" bind:value={field.pattern} />
                </Field>
            </div>
        </div>
    </svelte:fragment>
</SchemaField>
