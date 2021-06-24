// import axios from '@/axios'
export default {

  state: {

    cart: [], //<---array to fill with objects from products[]

  },

  getters: {
    cart: state => state.cart, 
    //<---------access to---cart[]-------in state 
    cartCounter: state => {
      let counter = 0
      state.cart.forEach( item => {
        counter += item.quantity
      })
      return counter
    },

    cartTotal: (state) => {
      let price = 0;
      if (state.cart.length !== 0) {
        state.cart.forEach((item) => {
          price += item.product.price * item.quantity;
        })
      }
      return price;
    }

  },

  mutations: {

    ADD_TO_CART: (state, { product, quantity }) => {

      let exists = state.cart.find(item => item.product._id === product._id)
      if (exists) {
        exists.quantity += quantity
        return
      }

      state.cart.push({product, quantity})
      //pushing in new object in to cart, with the properties product and quantity
    }, 

    REMOVE_FROM_CART:(state ,{ product, quantity }) => {

      let exists = state.cart.find(item => item.product._id === product._id)
      if(exists) {

        exists.quantity -= quantity
        return

      } else
      {
        console.log('cant delete mote');
      }
    },

    CLEAR_CART: (state) => {
      state.cart = [];

    }

  },

  actions: {

      addToCart: ({commit}, {product,quantity}) => {
        commit('ADD_TO_CART', {
          product,
          quantity
        })
      },

      removeFromCart:({ commit },{ product, quantity }) => {
        commit('REMOVE_FROM_CART', {
          product,
          quantity
        })
      },   

      clearCart: ({ commit }) => {
        commit("CLEAR_CART");
      },


  }




}