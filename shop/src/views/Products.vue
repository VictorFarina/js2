<template>
    
        <div class="product-container">
            <ProductCard 
              v-for="product in products" :key="product._id" :product="product"/> 
        </div>
   
</template>

<script>
//-----IMPORTS--------------------------------------
import ProductCard from '../components/ProductCard'
import { mapGetters} from 'vuex'
//--------------------------------------------------

//-----EXPORTS--------------------------------------
export default {
  name:"Products",
  
  components: {

    ProductCard
  },
  computed: {
    ...mapGetters(['products'])
  }
}
//--------------------------------------------------
</script>




<style scoped>

.product-container {

  
  height: 100%;
  margin-top: 6rem;
  display: flex;
  flex-flow: wrap;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  /* row-gap: 0.4rem;
  column-gap: 0.4rem; */

}




</style>