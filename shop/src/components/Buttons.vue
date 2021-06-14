<template>

<button  @click="addToCart({product, quantity:1})" class="btn btn-primary">
    ADD TO CART
</button>

</template>
<script>
import { mapActions } from 'vuex'
export default {
    name:'Button',
    props:['product'],
    data(){
        return{
            quantity:1
        }
    },

    methods:{
        ...mapActions(['addToCart'])
    }


}


</script>



<style>



</style>