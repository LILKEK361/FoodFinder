
const FoodRequestApi = "https://api.edamam.com/api/food-database/v2/parser?app_id=825a1637&app_key=5eda8565e8c9ac9127281c6d01a79e64&ingr=Cheese&nutrition-type="



export const getFoodRequestApi = (food : Array<string>) => {
    return `https://api.edamam.com/api/food-database/v2/parser?app_id=825a1637&app_key=5eda8565e8c9ac9127281c6d01a79e64&ingr=${food}&nutrition-type=cooking`
}

export async  function getFood(api : string){
    const request = await  fetch(api, )
    const result = await request.json()

    return result
}