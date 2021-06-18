<template>

                <div class="shopping-cart">


                    <img class="cart-img" :src="item.product.img" height="100px" >

                    <div class="d-flex align-items-center justify-content-around w-100 ">
                          <i class="fas fa-minus-square" type=button  
                        @click="removeFromCart({product:item.product, quantity:1})"> 
                    </i>

                    <num type=num>{{item.quantity}}</num>

                    <i class="fas fa-plus-square" 
                         @click="addToCart({product:item.product, quantity:1})" type=button>
                    </i>

                    <small>{{item.quantity*item.product.price}}</small>

                    </div>
                   
                  

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





.shopping-cart{
    
    text-align: center;
    z-index: 100;
    display: flex;
    width: 500px;
    font-size: 40px;
    column-gap: 2rem;
}
.shopping-cart img{
    margin-left: 2rem;
}
.shopping-cart i{
    font-size: 20px;
    color: rgb(4, 0, 255);
    
  
}

i :hover {
    cursor:pointer;
}







</style>