<template>

  <div class="product-page">
    <div class="details-card">

        <div class="card-content" style="width: 50%; float:left">
          <img :src="product.img" alt="">          
        </div>
        <div class="product-info" style="width: 50%; float:right" >
            <h5>{{ product.desc }}</h5>
            <h3>{{ product.name }}</h3>
            <p>{{ product.price }}</p> 
            <button class="btn btn-dark justify-content-space-between" @click="addToCart({product,quantity:1})"> Lägg till i kundvagn</button>
            <br>
            <br>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem laboriosam debitis veniam amet! Nostrum alias facere dignissimos necessitatibus temporibus.</h4>
           
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
  props:['id'], //<-----the prop defined in the parent

  
  
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
  
  margin-top: 3rem;
}


.details-card {   
  border: 1px black solid;
  display: flex;
  flex: row;
  width: 80%;
  height: 50rem;
  margin: auto;

}






</style>