<template>

  <div>
            <CartItemsCard v-for="item in cart" :key="item.product._id" :item="item" /> <!-- using the argument item  to grab every object in  cart[] and :key them with the id and den binding the item to the prop cartItem to use in chilcomponent -->
              <div class="container">

                  <h5 class="col-0">Total:{{cartTotal +' '+'sek'}}</h5>

                  <router-link v-show="$route.name!=='Checkout'" v-if="loggedIn" to="/checkout" class="btn-primary col-2 nav-link">CHECKOUT</router-link>

                  <router-link  v-if="!loggedIn" to="/checkout" 

                  class="btn-dark col-6 nav-link">CHECKOUT</router-link>

              </div>
  </div>

</template>
<script>

import CartItemsCard from './CartItemsCard'
import {mapGetters} from 'vuex'

export default {

  name:'Cart',
  components:{

    CartItemsCard
  },

  props:['item'],

  computed: 
  {
    ...mapGetters(['cart','cartTotal','loggedIn'])
  },

  methods:{


  }

    



}



</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.nav-link{
  color: #fff;
}


</style>
