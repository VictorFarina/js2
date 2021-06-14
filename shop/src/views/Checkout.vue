<template>
<form @submit.prevent="onSub" class="confirmation">
    <div class="card  col-6">
        <Cart/>
    </div>

    <div class="bg-light col-6" >
        <div class="card row">
            <div class="card-body block">
                <p>Namn:</p>
                <h4 class="card-title">{{activeUser.firstName +' '+ activeUser.lastName}}</h4>
               
                <button type="submit" class="btn-success btn-block">VERIFIERA</button>
            </div>
        </div>
    </div>

    <div class="bg-light col-12 text-center">
        <h3>we accept:</h3>
        <i class="fab fa-cc-amex"></i>
        <i class="fab fa-cc-visa"></i>
        <i class="fab fa-cc-mastercard"></i>
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
}


</style>