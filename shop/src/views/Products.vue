<template>
  <div class="container page">
    <div class="text-center">
      
        <div class="row grid">
            <ProductCard class="col-3" v-for="item in products" :key="item._id" :item="item"/> 
           <!-- forloop with argument that every item in the array products[] should be keyed with the _id and binded to the prop SelectedProduct so we can reach it in childcompnent ProductCard-->
        </div>
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




<style>

</style>