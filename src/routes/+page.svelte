<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script lang="ts">
    import {getRecipe, getRecipeRequestApi} from "$lib/codeAssets/Food.ts";
    import {writable} from "svelte/store";
    import FoodCard from "$lib/FoodCard.svelte";
    import IngredientsContainer from "$lib/IngredientsContainer.svelte";

    let input: any;
    const foodOptions = writable([])
    const FoodSearch = writable([])
    const Extras = writable([])

    const ExtraOptions = {
        diet : "&diet=",
        cuisineType : "&cuisineType=",
        mealType : "&mealType=",


    }


    //Api fetch for Food
    async function searchFood() {

        const w = getRecipe(getRecipeRequestApi($FoodSearch))
        console.log(w)
        foodOptions.set([...(await w).hits])


    }

    //Add to ingredient list
    function addToList(food: string) {
        if (input !== "") {
            if (!$FoodSearch.includes(food)) {
                FoodSearch.set([...$FoodSearch, food])

                console.log(FoodSearch)
                input = ""
            } else {
                alert("Ingredient already in list")
                input = ""
            }
        }
    }

    //Delete from Ingredient list
    function deleteIngrident(ingredient: string) {
        $FoodSearch.splice($FoodSearch.indexOf(ingredient), 1)
        FoodSearch.set([...$FoodSearch])
    }

    const createChunks = (FoodArray: Array<any>): Array<any> => {

        FoodArray = FoodArray.map((Element) => {
            return Element
        })


        let allChunks: any[] = [];

        for (var i = 0; i < FoodArray.length; i += 4) {
            allChunks.push(FoodArray.slice(i, i + 4))
        }
        console.log(allChunks);
        return allChunks
    }

</script>


<div class="h-[100vh] w-[100vw]">
    <!---Searchbar --->
    <div class="h-[10vh] w-full bg-blue-950 flex justify-center items-center ">

        <!-- Extras -->
        <details class="dropdown ">
            <summary class="m-1 btn">Extra Options</summary>
            <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li>
                    <details class="dropdown ">
                        <summary class="m-1 btn">Extra Options</summary>
                        <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li>diet</li>
                            <li>3</li>
                        </ul>
                    </details>
                </li>
                <li>3</li>
            </ul>
        </details>

        <!-- Search -->
        <div class="flex justify-center w-[50%]">
            <input bind:value={input} class="text-black mr-[1rem]"
                   on:keydown={(keydown) => {if(keydown.code === "Enter"){addToList(input)}}}
                   placeholder="Enter your food ingredients: " type="text">
            <button class="mr-[1rem]" on:click={addToList(input)} placeholder="Enter">{"Add Food"}</button>
            <button class="mr-[1rem]" on:click={searchFood} placeholder="Enter">{"Search Food"}</button>
            <button on:click={searchFood} placeholder="Enter">{"Search Food"}</button>

        </div>
        <!-- All Ingredients -->
        <div class="flex w-[50%]"> Ingredients:
            {#each $FoodSearch as Ingredient}
                <IngredientsContainer
                        ingredient={Ingredient}
                        deleted={deleteIngrident}
                />
            {/each}
            <IngredientsContainer
                    customstyle="w-[6.5rem] h-[1.5rem] ml-[0.5rem] bg-gray-200 text-center  text-black rounded-lg"
                    deleted={() =>  {FoodSearch.set([])}}
                    ingredient={"Delete All"}
            />
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
