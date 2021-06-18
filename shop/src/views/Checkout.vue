<template>
<form @submit.prevent="onSub" class="confirmation" >
    <div class="cart">

   

        <Cart/>

    </div>
      
</form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import Cart from '../components/Cart'


export default {
   
    components:{
        Cart
        
    },
    name:"Checkout",
    computed: {
        ...mapGetters(['cart','activeUser'])
    }, 
     methods: {

         ...mapActions(['addToOrders']),

         onSub(){
            let userCart = this.cart
            this.addToOrders({userCart})
         }
    }
}

</script>

<style scoped>

.confirmation {
    display: flex;
    width:90%;
    margin: auto;
    margin: auto;
}

.cart{
    position: absolute;
    height: 30px;
    
    top: 30%;
    left: 50%;
    margin:auto;
   
}




</style>