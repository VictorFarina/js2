<template>

  <div class="product-page">
    <div class="details-card">
      <div class="product-info">
        <h3>{{product.name}}</h3>
        <h5>{{product.desc}}</h5>
        <h3>{{product.price}}sek</h3>
        <button class="btn btn-primary block" 
         @click="addToCart({product, quantity:1})"
        >ADD TO CHART</button>
      </div>
      <div>
        <img :src="product.img">
      </div>
    </div>

    
      


        
    
          
  </div>
</template>

<script>
//----IMPORTS-----------------------------------------------------------------------
import { mapActions,mapGetters} from 'vuex'
//----EXPORTS-----------------------------------------------------------------------
export default {
  name:'ProductPage',
  props:['id'], 
  
  methods: {
    ...mapActions(['getThisProduct','resetToNull','addToCart']),
  },

  computed: {
    ...mapGetters(['product']) 
  },

  created() {
    this.getThisProduct(this.id) 
    
  },

  destroyed() {
    this.resetToNull()
  }

  
}
//-------------------------------------------------------------------------------
</script> 

<style scoped>

.card-content {
  margin-top: 5rem;
  
}

.card-content img {
  display: block;
  margin: auto;
}


.product-info{
  text-align: center;
  margin-top: 5rem;
  margin-left: 2rem;
}


.details-card {  
  margin-top:4rem;
  text-align: center; 
  border: 1px black solid;
  display: flex;
  flex: row;
  width: 80%;
  height: 50rem;
  margin: auto;

}






</style>