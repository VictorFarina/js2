<template>

  <div class="z-depth-3">

    <CartItemsCard v-for="item in cart" :key="item.product._id" :item="item" /> 

      <div class="total align-items-center justify-content-between">

          <router-link class="btn btn-dark"
          
            v-show="$route.name!=='Checkout'" v-if="loggedIn" to="/checkout">Slutför köp

          </router-link>
          
          <router-link  class="btn btn-dark"

            v-if="!loggedIn" to="/login">Logga in

          </router-link>

          <h3 v-if="cart.items <1" class="p-3">Total:{{cartTotal +' '+'sek'}}</h3>
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
.total{
  border:1px solid black;
  bottom: 20%;
  display: flex;
  width: 100%;
}
.total p {
  position: absolute; 
}
</style>
