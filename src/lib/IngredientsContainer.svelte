<script lang="ts">
    export let ingredient : string
    export let deleted;
</script>


<div class="w-[5rem] h-[1.5rem] ml-[0.5rem] bg-gray-200 text-center  text-black rounded-lg ">
    <p>{ingredient}<button on:click={deleted}>| X</button></p>
</div>