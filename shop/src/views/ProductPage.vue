<template>
    <div class="details-card row col-lg-8 col-sm-12 mx-auto mt-5 pb-5 z-depth-1">
      <img class="prod-img align-text-"
      :src="product.img">

      <div class="product-info col-lg-6 col-sd">
        
        <h3>{{product.name}}</h3>
        <small>{{product.short}}</small>
        <h3 class="text-danger">{{product.price}}sek</h3>
         <button class="btn btn-dark block fw-bold" 
         @click="addToCart({product, quantity:1})"
        >Lägg i korgen</button>
        <br>
        <br>
        <small>{{product.desc}}</small>


       
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


/* .details-card {  
  margin-top:10rem;
  margin-left:auto;
  margin-right:auto;

  box-shadow: 1px 1px 1px 1px rgba(51, 51, 51, 0.076);
  display: flex;
  flex: row;
} */

.prod-img {
  height: 300px;
  
}

.card-content img {
  display: block;
  margin: auto;
}


.product-info{
  text-align: left;
  margin-left: 2rem;
}









</style>