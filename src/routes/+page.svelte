<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script lang="ts">
	import {getFoodRequestApi, getFood, getRecipe, getRecipeRequestApi } from "$lib/codeAssets/Food.ts";
	import {onMount} from "svelte";
    import {writable} from "svelte/store";
    import FoodCard from "$lib/FoodCard.svelte";
    import IngredientsContainer from "$lib/IngredientsContainer.svelte";

    let input : any;
    const foodOptions  = writable([])
    const FoodSearch = writable([])

    //Api fetch for Food
    async function  searchFood () {
        
        const w =  getRecipe(getRecipeRequestApi($FoodSearch))
        console.log(w)
        foodOptions.set([...(await w).hits])
      
        

    }

    //Add to ingredient list
    function addToList(food : string){
        if(input !==  ""){
            if(!$FoodSearch.includes(food)){
                FoodSearch.set([...$FoodSearch, food])

                console.log(FoodSearch)
                input = ""
            }else{
                alert("Ingredient already in list")
                input = ""
            }
        }
    }

    //Delete from Ingredient list
    function deleteIngrident(ingredient:string) {
        $FoodSearch.splice($FoodSearch.indexOf(ingredient), 1)
        FoodSearch.set([...$FoodSearch])
    }

    const createChunks = (FoodArray : Array<any>) : Array<any> =>{
        
        FoodArray = FoodArray.map( (Element) => {return Element})
        
        
        let allChunks : any[] = [];
        
        for(var i = 0; i < FoodArray.length; i+=4){
            allChunks.push( FoodArray.slice(i, i+4))
        }
        console.log(allChunks);
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
            <IngredientsContainer ingredient={"Delete"} deleted={() =>  {FoodSearch.set([])}} />
        </div>
    </div>
    <!-- Fooddisplay -->
        {#each createChunks($foodOptions) as FoodChunk}
            <div class="flex justify-between">
                {#each FoodChunk as Food }
                <FoodCard
                        name={Food.recipe.label}
                        pic={Food.recipe.image}
                        cal={Math.round(Food.recipe.calories)}
                        dishType={Food.recipe.dishType}
                        Fullrecipe={Food.recipe.url}
                />
                {/each}
            </div>
        {/each}
    <div>

    </div>

</div>
