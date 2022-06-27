<template>
   <!-- component -->
<!-- component -->
<div class="flex items-center justify-center ">
      <div class="bg-white rounded-2xl border-2 border-green-900 shadow-x1 p-8 max-w-lg ">
        <div class="flex flex-col items-center space-y-4">
          <h1 class="font-bold text-2xl text-gray-700 w-8/10 text-center">
       Formulaire d'Ajout de la secretaire
          </h1>
         
          <input
            type="text"
            placeholder="Name"
            class="border-2 rounded-lg w-full h-12 px-4"
          />
         
          <input
            type="text"
            placeholder="Email"
            class="border-2 rounded-lg w-full h-12 px-4"
          />
         
          <input
            type="text"
			value="password"
            placeholder="Mot de passe"
            class="border-2 rounded-lg w-full h-12 px-4"
			disabled
          />
         
         
          <button
            class="bg-gray-700 text-white rounded-md hover:bg-green-500 font-semibold px-4 py-3 w-full"
          >
           Ajouter
          </button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'AddSecretaire',
        
    }

</script>