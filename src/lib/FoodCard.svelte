<script lang="ts">

    export let  name : string;
    export let pic : string;

    document.getElementById("");

</script>

<div class="w-[15vw] h-[35vh] rounded-xl bg-green-700 m-[5rem] flex justify-center">
   <div>
    <h1 class="text-center m-[0.5rem]">{name}</h1>
    <img class="w-[10rem] h-[10rem] m-[0.35rem]" src={pic} alt="Picture of dish" />
   </div>
    
</div>