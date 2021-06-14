<template>
    <div class="text-center">
        <div class="container">
            <ProductCard class="product-card" v-for="product in products" :key="product._id" :product="product"/> 
        </div>
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
  margin-top: 20rem;
  height: 100%;
  display: flex;
  width: 100%;
  margin: auto;
  flex-wrap: wrap;
  row-gap: 0.5rem;
  gap: 0.5rem;

}

.product-card {
  background:rgba(214, 189, 189, 0.349);
  width: 280px;
  height: 400px;
  margin: auto ;
  box-shadow: 1px 1px 1px 1px rgba(218, 215, 215, 0.329);
}


</style>