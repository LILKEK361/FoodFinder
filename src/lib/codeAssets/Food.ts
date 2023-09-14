const FoodRequestApi = "https://api.edamam.com/api/food-database/v2/parser?app_id=825a1637&app_key=5eda8565e8c9ac9127281c6d01a79e64&ingr=Cheese&nutrition-type="

const key = "c4a96d537622d20a6ab4b54d2e8df40e"

export const getFoodRequestApi = (food: Array<string>) => {
    return `https://api.edamam.com/api/food-database/v2/parser?app_id=825a1637&app_key=5eda8565e8c9ac9127281c6d01a79e64&ingr=${food}&nutrition-type=cooking`
}

export const getRecipeRequestApi = (food: Array<string>) => {
    return `https://api.edamam.com/api/recipes/v2?type=public&q=${food}&app_id=0eeb2ed5&app_key=${key}&imageSize=REGULAR`
}

export async function getFood(api: string) {
    const request = await fetch(api,)
    const result = await request.json()

    return result
}

export async function getRecipe(api: string) {
    const request = await fetch(api)
    const result = await request.json()

    return result
}