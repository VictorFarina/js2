<template>
    
        <div class="container row">
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
  name:'Products',
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

.container {
  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;
  height: 100%;
  display: flex;
  flex-flow: wrap;
  gap:0.3rem;

}




</style>