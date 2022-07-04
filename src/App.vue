<template>
 
<div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" v-if="nonConnecter">
  <div class="max-w-md w-full space-y-8 block p-6 rounded-lg shadow-lg bg-white max-w-md border-4 border-gray-400">
    <div>
      <img class="mx-auto h-11 w-auto" src="./assets/img/nazi.png" alt="Workflow">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 underline" v-if="mode =='login'">CONNEXION</h2>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 underline" v-else>INSCRIPTION</h2>
      <p class="mt-2 text-center text-sm text-gray-600" v-if="mode == 'login'">
        Tu n'a pas de compte ?
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500" @click="switchToCreateAccount()"> s'inscrire </a>
      </p>
      <p class="mt-2 text-center text-sm text-gray-600" v-else>
        Tu as deja un compte ?
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500" @click="switchToLogin()">se connecter</a>
      </p>
    </div>
    
    <form>
      <div class="grid grid-cols-2 gap-4"  v-if="mode =='create'">
        <div class="form-group mb-6">
          <input type="text" class="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
            aria-describedby="emailHelp123" placeholder="nom" v-model="nom">
        </div>
        <div class="form-group mb-6">
          <input type="text" class="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
            aria-describedby="emailHelp124" placeholder="prenom" v-model="prenom">
        </div>
      </div>
      <div class="form-group mb-6">
        <input type="email" class="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
          placeholder="Email address" v-model="email">
      </div>
      <div class="form-group mb-6">
        <input type="password" class="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126"
          placeholder="Password" v-model="password">
      </div>
       <div class="form-group form-check text-center mb-6" v-if=" mode == 'login' && status == 'error_loggin'">
        <p class="text-red-500 text-sm">
          Email ou mot de passe incorrect
        </p>
      </div> 
       <div class="form-group form-check text-center mb-6" v-if=" mode == 'create' && status == 'error_created'">
        <p class="text-red-500 text-sm">
         Cet email existe déja
        </p>
      </div> 
      <button type="button"  @click="login()" class="
        w-full
        px-6
        py-2.5
        bg-blue-600
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-blue-700 hover:shadow-lg
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-blue-800 active:shadow-lg
        disabled:bg-blue-200 disabled:shadow-lg 
        disabled:cursor-not-allowed
        transition
        duration-150
        ease-in-out" v-if="mode =='login'" :disabled="!validateFields" >
        <span v-if="status == 'loading'">
          
            <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
         
        </span>
        <span v-else>Connexion</span>
        </button>

      <button type="button" class="
        w-full
        px-6
        py-2.5
        bg-blue-600
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-blue-700 hover:shadow-lg
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-blue-800 active:shadow-lg
        disabled:bg-blue-200 disabled:shadow-lg
        disabled:cursor-not-allowed
        transition
        duration-150
        ease-in-out" v-else :disabled="!validateFields" @click="createAccount()" >
          <span v-if="status == 'loading'">
          
            <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
         
          </span>
          <span v-else>INSCRIPTION</span>
        </button>
    </form>

  </div>
</div>

  <div class="relative min-h-full bg-green" v-if="connecter">
    <nav class=" bg-green-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class=" flex items-center justify-between h-16">
          <div class=" flex items-center">
            <div class="flex-shrink-0">
              <img class="h-11 w-11" src="./assets/img/nazi.png" alt="Workflow" @click="deconnexion()">
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              
              <router-link to="/" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Acceuil</router-link>
              <router-link to="/AddSecretaire" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-sm "> Ajouter Secretaire </router-link>
              <router-link to="/secretaire" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-sm "> Liste des Secretaires </router-link>
              <router-link to="/addStudent" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-sm "> Ajouter Etudiant </router-link>
              <router-link to="/etudiants" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-sm "> Listes Etudiant </router-link>

               
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">


              <!-- Profile dropdown -->
              <div class="ml-3 relative">
                <div>
                  <button type="button"
                    class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span class="sr-only">Open user menu</span>
                    <img class="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="">
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div class="md:hidden" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <router-link to="/" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Acceuil</router-link>
              <router-link to="/AddSecretaire" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-sm "> Ajouter Secretaire </router-link>
              <router-link to="/secretaire" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-sm "> Liste des Secretaires </router-link>
              <router-link to="/addStudent" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-sm "> Ajouter Etudiant </router-link>
              <router-link to="/etudiants" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-sm "> Listes Etudiant </router-link>
        </div>
        <div class="pt-4 pb-3 border-t border-gray-700">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="">
            </div>
            <div class="ml-3">
              <div class="text-base font-medium leading-none text-white">Tom Cook</div>
              <div class="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
            </div>
            <button type="button"
              class="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span class="sr-only">View notifications</span>
              <!-- Heroicon name: outline/bell -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
          </div>
          <div class="mt-3 px-2 space-y-1">
            <a href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Your
              Profile</a>

            <a href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Settings</a>

            <a 
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700" @click="logout()">Sign
              out</a>
          </div>
        </div>
      </div>
    </nav>


   
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="px-4 py-6 sm:px-0">
          <div class="rounded-lg h-96">

            <router-view></router-view>
          </div>
        </div>
        <!-- /End replace -->
      </div>
    </main>
  </div>



</template>
<script>
import { mapState } from 'vuex'
export default {

  name: 'App',
  data() {
      return{
          nonConnecter:true,
          connecter:false,
          mode:'login',
          nom:'',
          prenom: '',
          email:'',
          password:'',
         
      }
    },
    computed: {
      validateFields: function() {
        if(this.mode == 'create')
        {
            if(this.nom !='' && this.prenom !='' && this.email !='' && this.password !=''){
              return true;
            }else{
              return false;
            }
        }else
        {
          if(this.email !='' && this.password !='')
          {
            return true;
          }else{

            return false;

          }
        }
        
      },
      
      ...mapState(['status']),
    },
    methods: {
      switchToCreateAccount() {
        this.mode = 'create'
      },
      switchToLogin() {
        this.mode = 'login'
      },
   
      login() {
       this.$store.dispatch('login',{
        
          
          email:this.email,
          password:this.password
        })
        .then((response)=>{
          console.log(response)
            this.connecter = true;
            this.nonConnecter = false;
            this.$router.push('/')
            
          
        })
        .catch((error)=>{
         console.log(error)
        })
        
      },
      createAccount() {
       this.$store.dispatch('createAccount',{
          nom:this.nom,
          prenom:this.prenom,
          email:this.email,
          password:this.password
        })
        .then((response)=>{
          console.log(response)
          this.mode = 'login';
        })
        .catch((error)=>{
          console.log(error)
        })
        
      },
    },
    mounted() {
      if(this.$store.state.user.user_id != -1)
      {
        this.connecter = true;
        this.nonConnecter = false;
      }
      this.$store.dispatch('getUser')

    
       
        
       }
     
      
     
   

}

</script>

<style>
@import './assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}
</style>
