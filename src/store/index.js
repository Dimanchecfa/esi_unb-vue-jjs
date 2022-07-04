import { createStore } from 'vuex'
import axios from 'axios'



axios.defaults.baseURL = 'https://api-dimanche.herokuapp.com/api/auth'

const instance = axios.create({
    baseUrl : 'https://api-dimanche.herokuapp.com/api/auth'
}

 
);
let user = localStorage.getItem('user');
if(!user){
    user =
        {
            user_id : -1,
            token : '',
        };
}else{
  
   axios.defaults.headers.common['Authorization'] = user.token;

}

const store = createStore
({
    state: 
    {
        status : '',
        user : user,
      
    },
    mutations :{
        setStatus : function(state, status){
            state.status = status;

        },
        logUser : function(state, user){
            axios.defaults.headers.common['Authorization'] = user.token;
            localStorage.setItem('user', JSON.stringify(user));
            state.user = user;
        },
        userInfos : function(state, userInfos){
            state.userInfos = userInfos;

        },
    },
    actions: 
    {
        login: ({ commit }, userInfos) =>
        {
            commit('setStatus', 'loading');

            return new Promise((resolve , reject) => {
               
           axios.post('https://api-dimanche.herokuapp.com/api/auth/login' ,userInfos)
            .then(function (response) {

                
                commit('setStatus', '');
                commit('logUser', response.data);
                resolve(response);
               
            })
            .catch(function (error) {
               commit('setStatus', 'error_loggin');
                reject(error);
              
            });

                
            }) 
            
        },
        createAccount: ({ commit }, userInfos) =>
        {
            commit('setStatus', 'loading');
            return new Promise((resolve , reject) => {
                commit;
           axios.post('https://api-dimanche.herokuapp.com/api/auth/register',userInfos)
            .then(function (response) {
                commit('setStatus', 'created');
                resolve(response);
                
            })
            .catch(function (error) {
               commit('setStatus', 'error_created');
                reject(error);
                console.log(error);
            });

                
            }) 
            
        },
        getUser : ({ commit }) => {
             axios.post('https://api-dimanche.herokuapp.com/api/auth/me')
            .then(function (response) {
                commit('userInfos', response.data.data);
              
                
            })
            .catch(function () {
              
                
            });


        }
        // {

    }

});



export default store;
