<script>
    import tooltip from "@/actions/tooltip";
    import Field from "@/components/base/Field.svelte";
    import MultipleValueInput from "@/components/base/MultipleValueInput.svelte";
    import SchemaField from "@/components/collections/schema/SchemaField.svelte";
    import CommonHelper from "@/utils/CommonHelper";

    export let field;
    export let key = "";
</script>

<SchemaField bind:field {key} on:rename on:remove on:duplicate {...$$restProps}>
    <svelte:fragment slot="options">
        <div class="grid grid-sm">
            <div class="col-sm-6">
                <Field class="form-field" name="fields.{key}.exceptDomains" let:uniqueId>
                    <label for={uniqueId}>
                        <span class="txt">Кроме доменов</span>
                        <i
                            class="ri-information-line link-hint"
                            use:tooltip={{
                                text: 'Список доменов, которые НЕЛЬЗЯ использовать.\nЭто поле отключено, если задано «Только домены».',
                                position: "top",
                            }}
                        />
                    </label>
                    <MultipleValueInput
                        id={uniqueId}
                        disabled={!CommonHelper.isEmpty(field.onlyDomains)}
                        bind:value={field.exceptDomains}
                    />
                    <div class="help-block">Разделяй запятой.</div>
                </Field>
            </div>

            <div class="col-sm-6">
                <Field class="form-field" name="fields.{key}.onlyDomains" let:uniqueId>
                    <label for="{uniqueId}.onlyDomains">
                        <span class="txt">Только домены</span>
                        <i
                            class="ri-information-line link-hint"
                            use:tooltip={{
                                text: 'Список доменов, которые МОЖНО использовать.\nЭто поле отключено, если задано «Кроме доменов».',
                                position: "top",
                            }}
                        />
                    </label>
                    <MultipleValueInput
                        id="{uniqueId}.onlyDomains"
                        disabled={!CommonHelper.isEmpty(field.exceptDomains)}
                        bind:value={field.onlyDomains}
                    />
                    <div class="help-block">Разделяй запятой.</div>
                </Field>
            </div>
        </div>
    </svelte:fragment>
</SchemaField>
