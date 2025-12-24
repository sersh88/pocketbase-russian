<script>
    import Toggler from "@/components/base/Toggler.svelte";
    import CommonHelper from "@/utils/CommonHelper";
    import { createEventDispatcher } from "svelte";

    let classes = "";
    export { classes as class }; // export reserved keyword

    const dispatch = createEventDispatcher();

    const types = [
        {
            label: "Текст",
            value: "text",
            icon: CommonHelper.getFieldTypeIcon("text"),
        },
        {
            label: "Редактор",
            value: "editor",
            icon: CommonHelper.getFieldTypeIcon("editor"),
        },
        {
            label: "Число",
            value: "number",
            icon: CommonHelper.getFieldTypeIcon("number"),
        },
        {
            label: "Да/Нет",
            value: "bool",
            icon: CommonHelper.getFieldTypeIcon("bool"),
        },
        {
            label: "Email",
            value: "email",
            icon: CommonHelper.getFieldTypeIcon("email"),
        },
        {
            label: "URL",
            value: "url",
            icon: CommonHelper.getFieldTypeIcon("url"),
        },
        {
            label: "Дата/время",
            value: "date",
            icon: CommonHelper.getFieldTypeIcon("date"),
        },
        {
            label: "Автодата",
            value: "autodate",
            icon: CommonHelper.getFieldTypeIcon("autodate"),
        },
        {
            label: "Выбор",
            value: "select",
            icon: CommonHelper.getFieldTypeIcon("select"),
        },
        {
            label: "Файл",
            value: "file",
            icon: CommonHelper.getFieldTypeIcon("file"),
        },
        {
            label: "Связь",
            value: "relation",
            icon: CommonHelper.getFieldTypeIcon("relation"),
        },
        {
            label: "JSON",
            value: "json",
            icon: CommonHelper.getFieldTypeIcon("json"),
        },
        {
            label: "Гео-точка",
            value: "geoPoint",
            icon: CommonHelper.getFieldTypeIcon("geoPoint"),
        },
        // {
        //     label: "Password",
        //     value: "password",
        //     icon: CommonHelper.getFieldTypeIcon("password"),
        // },
    ];

    function select(fieldType) {
        dispatch("select", fieldType);
    }
</script>

<div tabindex="0" role="button" class="field-types-btn {classes}">
    <i class="ri-add-line" aria-hidden="true" />
    <div class="txt">Новое поле</div>
    <Toggler class="dropdown field-types-dropdown">
        {#each types as item}
            <button type="button" role="menuitem" class="dropdown-item" on:click={() => select(item.value)}>
                <i class="icon {item.icon}" aria-hidden="true" />
                <span class="txt">{item.label}</span>
            </button>
        {/each}
    </Toggler>
</div>

<style lang="scss">
    .field-types-btn.active {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
    :global(.field-types-dropdown) {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        max-width: none;
        padding: 10px;
        margin-top: 2px;
        border: 0;
        box-shadow: 0px 0px 0px 2px var(--primaryColor);
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        .dropdown-item {
            width: 25%;
        }
    }
</style>
