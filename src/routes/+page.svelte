<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script lang="ts">
	import {getFoodRequestApi, getFood} from "$lib/codeAssets/Food.ts";
	import {onMount} from "svelte";
    import {writable} from "svelte/store";
    import FoodCard from "$lib/FoodCard.svelte";
    import IngredientsContainer from "$lib/IngredientsContainer.svelte";

    let input : any;
    const foodOptions  = writable([])
    const FoodSearch = writable([])

    //Api fetch for Food
    async function  searchFood () {
        const w =  getFood(getFoodRequestApi($FoodSearch))

        foodOptions.set([...$foodOptions, ...(await w).hints])
        console.log(Object.entries($foodOptions))

    }

    //Add to ingredient list
    function addToList(food : string){
        if(input !==  ""){
            FoodSearch.set([...$FoodSearch, food])

            console.log(FoodSearch)
            input = ""
        }
    }

    //Delete from Ingredient list
    function deleteIngrident(ingredient:string) {
        $FoodSearch.splice($FoodSearch.indexOf(ingredient), 1)
        FoodSearch.set([...$FoodSearch])
    }

    const createChunks = () : Array<any> =>{
        let allChunks : Array<any>;
        
        for(var i = 0; i < $FoodSearch.length; i+=4){
            let allChunks = $FoodSearch.slice(i, i+4)
        }

        return allChunks
    }

</script>


<div class="h-[100vh] w-[100vw]">
    <!---Searchbar --->
    <div class="h-[15vh] w-full bg-blue-950 flex justify-center items-center ">
        <div class="flex justify-center w-[50%]">        
            <input bind:value={input} type="text" placeholder="Enter your food ingredients: "  class="text-black mr-[1rem]">
            <button on:click={addToList(input)} placeholder="Enter" class="mr-[1rem]">{"Add Food"}</button>
            <button on:click={searchFood} placeholder="Enter" class="mr-[1rem]">{"Search Food"}</button>
            <button on:click={searchFood} placeholder="Enter">{"Search Food"}</button></div>
        <div class="flex w-[50%]"> Ingredients: 
            {#each $FoodSearch as Ingredient}
               <IngredientsContainer ingredient={Ingredient} deleted={deleteIngrident}/>
            {/each}
        </div>
    </div>
    <!-- Fooddisplay -->
    <div>{#each createChunks as chunk }
            {#each chunk  as FoodObject}
                <p>{FoodObject[1].food.label}</p>
                <FoodCard name={FoodObject[1].food.label} pic={FoodObject[1].food.image}/>
            {/each}
        {/each}
    </div>

</div>
