<script>
    export let data = [
        {
            "type": "slider"
        }
    ];
    export let form = {};
    export let route = '/';
    export let next = '/';

    import Slider from './Slider.svelte';
    import Text from './Text.svelte';
    import LineInput from './LineInput.svelte';

    $: if (form.submit === true) { 
        form.submit = -1;
        main();
    }

    let status = '';

    async function main() {
        let data = await fetch(route, {
            "method": "POST",
            "body": JSON.stringify(form)
        }).then(x => x.json());

        status = data.success;

        if (status == 'next') await success(data);
    }

    async function success(data) {
        status = '';
        if (data.data) {
            window.location.href = `${next}&data=${data.data}`;
        } else {
            window.location.href = next;
        }
        
    }


    $: if (data[data.length - 1].name != 'submit') {
        data.push(
            {
                "type": "slider",
                "key": "Submit changes",
                "name": "submit"
            }
        );
    }

    $: if (form.submit === -1) {
        setTimeout(() => form.submit = false, 300);
    }
    

</script>

<style>
    .form {
        display: grid;
        width: min(500px,100vw);
        grid-template-columns: 1fr 1fr;
        justify-content: center;
        align-items: center;
        text-align: left;
    }

    .form .text, .form .input {
        margin: 15px;
        margin-left: 0;
    }

    .form .input {
        display: flex;
        justify-content: flex-end;
    }

    .tspan {
        grid-column: span 2;
        display: grid;
    }
</style>

<p>
    {status}
</p>

<div class='form'>
    {#each data as slider}
        <div class='text {slider.type == 'text' ? 'tspan' : ''}'>{slider.key}</div>
        <div class='input {slider.type == 'text' ? 'tspan' : ''}'>
            {#if slider.type == 'slider'} 
                <Slider bind:form={form[slider.name]}></Slider>
            {:else if slider.type == 'text'}
                <Text bind:form={form[slider.name]}></Text>
            {:else if slider.type == 'line'}
                <LineInput bind:form={form[slider.name]}></LineInput>
            {/if}
        </div>
    {/each}

</div>