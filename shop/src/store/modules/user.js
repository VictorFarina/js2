import axios from '@/axios'
import router from '@/router'

export default {

    state: {
        loggedIn: false,
        activeUser:{
        }
    },
  
    getters: {
        loggedIn: state => state.loggedIn,
        activeUser: state=> state.activeUser
    },

    mutations: {
        LOGIN_USER: (state, data) => {
            state.loggedIn = true
            state.activeUser = data
        }, 
        LOGOUT_USER: state => {
            state.loggedIn = false
            console.log(state.loggedIn);
        },  
    },

    actions: {

            register: async ({ dispatch }, _user) => { 
                await axios.post('users/register', _user)  
                        const user = {
                        email:    _user.email, 
                        password: _user.password                  
                        }
                            dispatch('login',user) 
        
        },

           
        login: ({commit}, user, route ) => {
            axios.post('users/login', user)
            .then( res => {
               if(res.status === 200) {
                   commit('LOGIN_USER', { ...res.data.user, token: user.token })  

                   if (route) {
                    router.push(route)   
                   } else  {
                       router.push('/products')                                
                 }   
               }
           })
        },
          logoutUser: ({commit}) => {commit('LOGOUT_USER')},

            addToOrders: ({ commit }, {userCart})  => {
                axios.patch('users/addorder/', userCart)
                .then(res => {
                    if(res.status===200) {
                        commit('LOGOUT_USER')  
                    .catch( err => {
                        console.log(err)
                    })
                }
            })
            }

            





    }
  }      

    
            
        





                        
                 
 
            

    