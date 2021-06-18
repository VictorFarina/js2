<template>

  <div class="cart">
    <CartItemsCard v-for="item in cart" :key="item.product._id" :item="item" /> 
      <div class="total align-items-center justify-content-around">
          
          <router-link class="btn btn-primary"
            v-show="$route.name!=='Checkout'" v-if="loggedIn" to="/checkout">CHECKOUT
          </router-link>

          <router-link  class="btn btn-primary"
            v-if="!loggedIn" to="/login">Login checkout
          </router-link>
              
          <h5>Total:{{cartTotal +' '+'sek'}}</h5>
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

.cart {
  z-index: 1000;
  background: rgb(255, 255, 255);
  width: 30rem;
  height: 1000px;
  position: absolute;
  right: 0%;
  top:030;
  
}

.total{
  position: absolute;
  border:1px solid black;
  bottom: 20%;
  display: flex;
  width: 100%;
}
.total p{
  position: absolute;
  
}





</style>
