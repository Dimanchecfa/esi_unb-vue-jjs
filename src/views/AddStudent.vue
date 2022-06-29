<template>
  <!-- component -->
  <!-- component -->
  <div class="flex items-center justify-center ">
    <div class="bg-white rounded-2xl border-2 border-green-900 shadow-x1 p-8 max-w-lg ">
      <div class="flex flex-col items-center space-y-4">
        <h1 class="font-bold text-2xl text-gray-700 w-8/10 text-center">
          Formulaire d'Ajout d'un Etudiant
        </h1>

        <form class="space-y-4" @submit.prevent="addStudent">
          
          <input type="text" placeholder="Matricule" class="border-2 rounded-lg w-full h-12 px-4" v-model="matricule" />

          <input type="text" placeholder="Nom" class="border-2 rounded-lg w-full h-12 px-4" v-model="nom"/>

          <input type="text" placeholder="Prenom" class="border-2 rounded-lg w-full h-12 px-4" v-model="prenom"/>

          <input type="Email" placeholder="Email" class="border-2 rounded-lg w-full h-12 px-4" v-model="email"/>
          <!-- <input class="form-control
          border-2 rounded-lg w-full h-12 px-4
    block
    w-full
    px-4
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border-4 border-solid border-gray-600
    rounded-lg
    
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile"> -->



          <button type="submit"
            class="bg-gray-700 text-white rounded-md hover:bg-green-500 font-semibold px-4 py-3 w-full">
            Ajouter
          </button>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'AddStudent',
  data() {
    return {
      matricule: '',
      nom: '',
      prenom: '',
      email: '',
    };
  },
  methods: {
    addStudent() {
     
      axios.post('https://laravel-api-student.herokuapp.com/api/student',{


        'matricule': this.matricule,
        'nom': this.nom,
        'prenom': this.prenom,
        'email': this.email,
      })
        .then(response => {
        
           this.$router.push({path:'/etudiants'});
        })
        .catch(error => {
          console.log(error);
        });
        
    },
  },
  

}

</script>