<script>
    import Form from '$lib/form/Form.svelte';
    import StyleWrap from '$lib/style/Style.svelte';
</script>
<StyleWrap>
    <h1>Library Test</h1>
    <Form
        data={[
            {
                "type": "text",
                "key": "Broadcast to the world!",
                "name": "data"
            }
        ]}
    />
</StyleWrap>
