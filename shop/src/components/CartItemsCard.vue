<template>
                <table class="shopping-cart">
                    <img class="cart-img" :src="item.product.img" height="50px">
                    
                    <span class="item-name col-3">{{item.product.name}}</span>

                    <div class="item-quantity justify-content-end col-5">
                         <i class="fas fa-minus-square col-1"  
                        @click.stop="removeFromCart({product:item.product, quantity:1})"> 
                        </i>
                        <h4 class="col-1">{{item.quantity}}</h4>              
                        <i class="fas fa-plus-square col-1" 
                         @click.stop="addToCart({product:item.product, quantity:1})" type=button>
                        </i>

                        <h4 class="col-1">{{item.quantity*item.product.price}}</h4>
                    </div>
                    
                   
                    
                </table>
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
    align-items: center;
    display: flex;
    font-size: 40px;
    height: 100px;
    border-bottom: 1px black solid;

}
.shopping-cart img{
    width: 80px;
    height: 80%;
    align-self: left;
}
.shopping-cart i{
    color: rgb(0, 0, 0);
    font-size: 30px;
    
  
}

i :hover {
    cursor:pointer;
}

.item-quantity{
    position: relative;
    margin-left: 2rem;
    margin-right: 1rem;
    margin-top: auto;
    margin-bottom: auto;
    width: 70%;
    justify-content: space-between;
    text-align:center;
    display: flex;
    gap: 3rem;
   
}
.item-name{
    font-size: 12px;
}

.fas fa-minus-square{
    position: absolute;
    left: 0%;
}







</style>