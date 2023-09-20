<script lang="ts">
    export let buttonContent : String
    export let useFunction : any
    export let design : string
    export let entrie : Array<String>

</script>


<details class="dropdown ">
    <summary class="m-1 btn">{buttonContent}</summary>
    <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        {#each entrie as obj}
            <li>{obj}</li>
        {/each}
    </ul>
</details>