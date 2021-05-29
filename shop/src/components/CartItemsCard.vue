<template>
    <div>
        <table class="row p-3 border-box shadow-sm">
                <small class="col-3">{{item.product.name}}</small>
                <div class="qty-input d-flex">

                <i type=button  @click="removeFromCart({product:item.product, quantity:1})" class="fas fa-minus-square"></i>

                <h3>{{item.quantity}}</h3>

                <i type=button  @click="addToCart({product:item.product, quantity:1})" class="fas fa-plus-square"></i>

                </div>
                <small class="col-3">{{item.quantity*item.product.price}}</small>
        </table>
    </div>
</template>

<script>

import { mapActions } from 'vuex'
export default {

     

   
    props:['item'],

    methods:{
        ...mapActions(['addToCart','removeFromCart'])       
    }
}
</script>
<style scoped>
.fas, .far {
padding: 3rem;
 color: blue;
}
.fas :hover {
    cursor:pointer;
}
.qty-input {
    justify-content: space-between;
    margin: auto;
    text-align: left;
}
.qty-input h3{
   margin-right: 3rem;
}
</style>