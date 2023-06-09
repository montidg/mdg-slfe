<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<style>    
    #content {
        height: 100vh;
        width: 100vw;
        padding-top: 0px;

        display: flex;
        flex-direction: column;
        align-items: center;

        overflow-y: auto;
    }
    
    :global(:root) {
        --dark-1: #2b2f36;
        --dark-2: #d8d8d8;

        --primary-1: #498aec;

        --light-1: #ffffff;
        --light-2: #f8f8f8;

        --red-1: rgb(192, 54, 54);
        --green-1: rgb(37, 201, 110);

        --border-1: solid var(--dark-2) 5px;
        font-family: 'Open Sans';
    }

    :global(a) {
        color: var(--green-1);
        text-decoration: none;
    }

</style>

<slot />
