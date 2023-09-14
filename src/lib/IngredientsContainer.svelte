<script lang="ts">
    export let ingredient : string
    export let deleted;
    export let customstyle : string;
</script>


<div class={customstyle ? customstyle : "w-[5rem] h-[1.5rem] ml-[0.5rem] bg-gray-200 text-center border-2  text-black rounded-lg"}>
    <p>{ingredient}<button on:click={deleted}>| X</button></p>
</div>