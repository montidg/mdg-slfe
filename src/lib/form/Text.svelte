<style>
    .main {
        width: 500px;
        height: 100px;
        border: none;

        background: var(--dark-2);
    }
</style>

<script>
    export let form = '';
</script>

<textarea class='main' bind:value={form}></textarea>