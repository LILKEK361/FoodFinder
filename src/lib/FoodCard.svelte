<script lang="ts">

    export let  name : string;
    export let pic : string;
    export let cal : number; 
    export let dishType : string;

    export let Fullrecipe : string;

    document.getElementById("");

</script>

<div class="w-[15vw] h-[35vh] rounded-xl bg-blue-950 m-[5rem] ">
   
    <h1 class="text-center m-[0.5rem]">{name}</h1>
    <div class="w-[full] h-[10rem] flex justify-center">
        <img class="w-[10rem] h-[10rem] m-[0.35rem] absolute left-[]" src={pic} alt="Picture of dish" />
    </div>
    <div class="w-[full] h-[5rem] mt-[1rem] text-center">

        <p>Dish Type: {dishType}</p>
        <p>Calories: {cal}</p>
        <a href={Fullrecipe}>Go to Full Recipe</a>
    </div>


</div>