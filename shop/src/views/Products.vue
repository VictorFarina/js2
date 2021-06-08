<template>
  
    <div class="text-center">
      
        <div class="container">
            <ProductCard class="product-card" v-for="item in products" :key="item._id" :item="item"/> 
           <!-- forloop with argument that every item in the array products[] should be keyed with the _id and binded to the prop SelectedProduct so we can reach it in childcompnent ProductCard-->
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
  height: 100%;
  display: flex;
  width: 100%;
  margin: auto;
  flex-wrap: wrap;
  row-gap: 0.5rem;
  gap: 0.5rem;
}

.product-card {
  background:#fff;
  width: 280px;
  margin: auto ;
  box-shadow: 1px 1px 1px 1px rgba(218, 215, 215, 0.329);
}


</style>