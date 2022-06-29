<template>

<div v-if="loading">
 <div class="flex justify-center items-center space-x-2">
  <div class="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-blue-600" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="
      spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
        text-purple-500
      " role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="
      spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
        text-green-500
      " role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-red-500" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="
      spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
        text-yellow-500
      " role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-blue-300" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-gray-300" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
</div>

    <!-- component -->
<div v-else>
  
     <h1 class="font-bold text-2xl text-gray-700 w-8/10 text-center">
      Liste des  secretaire
          </h1>
      <table class="min-w-full table-auto">
        <thead class="justify-between">
          <tr class="bg-gray-800">
           
            <th class="px-6 py-2">
              <span class="text-gray-300">Matricule</span>
            </th>
           
            <th class="px-6 py-2">
              <span class="text-gray-300">Nom</span>
            </th>

            <th class="px-6 py-2">
              <span class="text-gray-300">Prenom</span>
            </th>

            <th class="px-6 py-2">
              <span class="text-gray-300">Email</span>
            </th>
            <th class="px-6 py-2">
              <span class="text-gray-300">Action</span>
            </th>
          </tr>
        </thead>
        <tbody class="bg-gray-200">
          <tr :key="student.id" v-for="student in students" class="bg-white border-4 border-gray-200 text-center">
           
            <td class="px-2 py-2 text-center text-center">
              <span class="text-center  font-semibold">{{student.matricule}}</span>
            </td>
           
            <td class="px-2 text-center  font-semibold">
              <span class="text-center  font-semibold" >{{student.nom}}</span>
            </td>
           
            <td class="px-2 py-2 text-center text-center">
              <span class="text-center  font-semibold">{{student.prenom}}</span>
            </td>
            <td class="px-2 py-2 text-center text-center">
              <span class="text-center  font-semibold">{{student.email}}</span>
            </td>
           
             <td class="px-2 py-2 text-center flex space-x-2 ml-5">
             <button class="btn btn-danger btn-sm" @click="deleteProduct(student.id)">Delete</button> 
            </td>

           
          </tr>
         
          
        </tbody>
      </table>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'ListeE',
    data() {
      return{
          students:[],
          loading:true,
         
      }
    },
  methods :{
    getStudent() {
        axios
        .get('https://laravel-api-student.herokuapp.com/api/student')
        .then( (response)=> {
            this.students = response.data.data,
            this.loading = false
           
        })
        .catch( (error)=> {
            console.log(error.toJSON())
        })
        
    },
     deleteProduct() {
        axios.delete(`http://127.0.0.1:8000/api/student/${student.id}`)
             .then(response => {
                 console.log(response);
             })
             .catch(function (error) {
                console.log(error.response)
             })
    }
   
    },
    mounted() {
        this.getStudent();
        
    }

}

</script>