<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script lang="ts">
	import {getFoodRequestApi, getFood} from "$lib/codeAssets/Food.ts";
	import {onMount} from "svelte";
    import {writable} from "svelte/store";
    let input : any;
    let foodOptions : any
    const FoodSearch : any = writable([])


    function searchFood () {
       foodOptions = getFood(getFoodRequestApi($FoodSearch))
        console.log(foodOptions)
    }
    function addToList(food : string){
        if(input !==  ""){
            $FoodSearch.push(food)
            $FoodSearch = $FoodSearch
            console.log(FoodSearch)
            input = ""
        }
    }

</script>


<div class="h-[100vh] w-[100vw]">

    <div class="h-[15vh] w-full bg-blue-950">
        <input bind:value={input} type="text" placeholder="Enter your food ingredients: "  class="text-black">
        <button on:click={addToList(input)} placeholder="Enter">{"Add Food"}</button>
        <button on:click={searchFood} placeholder="Enter">{"Search Food"}</button>
        <button on:click={searchFood} placeholder="Enter">{"Search Food"}</button>
        <p>Ingredientslist:  {$FoodSearch}</p>
    </div>

</div>
