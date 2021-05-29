<template>
<div class="confirmation row">
    <div class="card col-6">
        <Cart/>
    </div>

    <div class="bg-light col-6" >
        <div class="card row">
            <div class="card-body block">
                <p>Namn:</p>
                <h4 class="card-title">{{activeUser.firstName +' '+ activeUser.lastName}}</h4>
                <p>Address:</p>
                <h4 class="card-title">Sveavägen 54</h4>
                <button type="button" @click="addUserOrder" class="btn-success btn-block">VERIFIERA</button>
            </div>
        </div>
    </div>

    <div class="bg-light col-12 text-center">
        <h3>we accept:</h3>
        <i class="fab fa-cc-amex"></i>
        <i class="fab fa-cc-visa"></i>
        <i class="fab fa-cc-mastercard"></i>
    </div>    
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import Cart from '../components/Cart'
import store from '../store'

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
         addUserOrder(){
            let userCart = store.getters.cart
            this.addToOrders({userCart})
         }
    }
}

</script>

<style scoped>

.confirmation {
    max-width:70%;
    margin: auto;
}


</style>