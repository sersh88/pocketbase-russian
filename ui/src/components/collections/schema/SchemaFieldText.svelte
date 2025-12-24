<script>
    import tooltip from "@/actions/tooltip";
    import Field from "@/components/base/Field.svelte";
    import SchemaField from "@/components/collections/schema/SchemaField.svelte";

    export let field;
    export let key = "";
</script>

<SchemaField bind:field {key} on:rename on:remove on:duplicate {...$$restProps}>
    <svelte:fragment slot="options">
        <div class="grid grid-sm">
            <div class="col-sm-6">
                <Field class="form-field" name="fields.{key}.min" let:uniqueId>
                    <label for={uniqueId}>
                        <span class="txt">Мин. длина</span>
                        <i
                            class="ri-information-line link-hint"
                            use:tooltip={"Очисти поле или поставь 0, чтобы убрать лимит."}
                        />
                    </label>
                    <input
                        type="number"
                        id={uniqueId}
                        step="1"
                        min="0"
                        max={Number.MAX_SAFE_INTEGER}
                        placeholder="Без мин. лимита"
                        value={field.min || ""}
                        on:input={(e) => (field.min = parseInt(e.target.value, 10))}
                    />
                </Field>
            </div>

            <div class="col-sm-6">
                <Field class="form-field" name="fields.{key}.max" let:uniqueId>
                    <label for={uniqueId}>
                        <span class="txt">Макс. длина</span>
                        <i
                            class="ri-information-line link-hint"
                            use:tooltip={"Очисти поле или поставь 0, чтобы вернуться к лимиту по умолчанию."}
                        />
                    </label>
                    <input
                        type="number"
                        id={uniqueId}
                        step="1"
                        placeholder="По умолчанию: 5000 символов"
                        min={field.min || 0}
                        max={Number.MAX_SAFE_INTEGER}
                        value={field.max || ""}
                        on:input={(e) => (field.max = parseInt(e.target.value, 10))}
                    />
                </Field>
            </div>

            <div class="col-sm-6">
                <Field class="form-field" name="fields.{key}.pattern" let:uniqueId>
                    <label for={uniqueId}>
                        <span class="txt">Паттерн валидации</span>
                        {#if field.primaryKey}
                            <i
                                class="ri-information-line link-hint"
                                use:tooltip={"У всех id записей есть запрещённые символы и уникальность без учёта регистра (ASCII) — дополнительно к твоему regex-паттерну."}
                            />
                        {/if}
                    </label>
                    <input type="text" id={uniqueId} bind:value={field.pattern} />
                    <div class="help-block">
                        <p>Пример: <code>{"^[a-z0-9]+$"}</code></p>
                    </div>
                </Field>
            </div>

            <div class="col-sm-6">
                <Field class="form-field" name="fields.{key}.autogeneratePattern" let:uniqueId>
                    <label for={uniqueId}>
                        <span class="txt">Паттерн автогенерации</span>
                        <i
                            class="ri-information-line link-hint"
                            use:tooltip={"Если при создании записи значение пустое — будет автогенерироваться текст по этому паттерну."}
                        />
                    </label>
                    <input type="text" id={uniqueId} bind:value={field.autogeneratePattern} />
                    <div class="help-block">
                        <p>Пример: <code>{"[a-z0-9]{30}"}</code></p>
                    </div>
                </Field>
            </div>
        </div>
    </svelte:fragment>
</SchemaField>
