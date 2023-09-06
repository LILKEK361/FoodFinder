<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script lang="ts">
	import {getFoodRequestApi, getFood} from "$lib/codeAssets/Food.ts";
	import {onMount} from "svelte";
    import {writable} from "svelte/store";
    import FoodCard from "$lib/FoodCard.svelte";
    let input : any;
    const foodOptions  = writable([])
    const FoodSearch = writable([])


    async function  searchFood () {
        const w =  getFood(getFoodRequestApi($FoodSearch))

        foodOptions.set([...$foodOptions, ...(await w).hints])
        console.log(Object.entries($foodOptions))

    }
    function addToList(food : string){
        if(input !==  ""){
            FoodSearch.set([...$FoodSearch, food])

            console.log(FoodSearch)
            input = ""
        }
    }

</script>


<div class="h-[100vh] w-[100vw]">
    <!---Searchbar --->
    <div class="h-[15vh] w-full bg-blue-950">
        <input bind:value={input} type="text" placeholder="Enter your food ingredients: "  class="text-black">
        <button on:click={addToList(input)} placeholder="Enter">{"Add Food"}</button>
        <button on:click={searchFood} placeholder="Enter">{"Search Food"}</button>
        <button on:click={searchFood} placeholder="Enter">{"Search Food"}</button>
        <p>Ingredientslist:  {$FoodSearch}</p>
    </div>
    <!-- Fooddisplay -->
    <div>
        {#each Object.entries($foodOptions) as FoodObject}
            <p>{FoodObject[1].food.label}</p>
            <FoodCard name={FoodObject[1].food.label} pic={FoodObject[1].food.image}/>
        {/each}
    </div>

</div>
