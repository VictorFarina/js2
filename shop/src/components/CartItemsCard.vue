<template>
    <div>
        <table class="d-flex">
               
                <div class="qty-input li-item row position-relative">
                    <img class="col-2 cart-img" :src="item.product.img" scale="20px" >
                    <i class="fas fa-minus-square col-1" type=button  @click="removeFromCart({product:item.product, quantity:1})"></i>
                    <num type=num min=1 class="col-1">{{item.quantity}}</num>
                    <i class="fas fa-plus-square col-1" type=button  @click="addToCart({product:item.product, quantity:1})"></i>
                    <p class="col-1">{{item.quantity*item.product.price}}</p>
                </div>
                
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
i :hover {
    cursor:pointer;
}
.qty-input {
    background: #fff;
    
    text-align:start;
    padding: 2rem;
    display: inline-flex;
    height: 1rem;
    vertical-align:middle;
    margin-top: bottom;
    width: 100%;
}

.qty-input i{
    padding-top:0
    ;
}

.cart-img{
    
    columns: 2;
    position: absolute;
    top: 20%;
    left: 1%;

    

}

</style>