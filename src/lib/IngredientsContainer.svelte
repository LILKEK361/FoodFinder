<script lang="ts">
    export let ingredient : string
    export let deleted;
</script>


<div class="w-[5%] h-[5%] bg-green-950 text-center ">
    <p>{ingredient}<button on:click={deleted}>X</button></p>
</div>