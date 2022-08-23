<script>
    let buttonText = 'Button'

    function handleClick() {
        buttonText = 'Button Clicked'
    }
</script>

<button on:click="{handleClick}">{buttonText}</button>

<style lang="scss">

</style>