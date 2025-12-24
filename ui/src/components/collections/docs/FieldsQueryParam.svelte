<script>
    import CodeBlock from "@/components/base/CodeBlock.svelte";

    export let prefix = ""; // examples prefix (eg. "record.")
</script>

<tr>
    <td id="query-page">fields</td>
    <td>
        <span class="label">String</span>
    </td>
    <td>
        <p>
            Строка со списком полей (через запятую), которые нужно вернуть в JSON-ответе
            <em>(по умолчанию возвращаются все поля)</em>. Например:
            <CodeBlock content="?fields=*,{prefix}expand.relField.name" />
        </p>
        <p>
            <code>*</code> выбирает все ключи на конкретном уровне вложенности.
        </p>
        <p>Также поддерживаются такие модификаторы полей:</p>
        <ul>
            <li>
                <code>:excerpt(maxLength, withEllipsis?)</code>
                <br />
                Возвращает короткую plain text версию строкового значения поля.
                <br />
                Например:
                <code>?fields=*,{prefix}description:excerpt(200,true)</code>
            </li>
        </ul>
    </td>
</tr>
