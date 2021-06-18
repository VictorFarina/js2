<template>

  <div class="product-card">
    <div class="card-top position-relative">
      <img class="img1" :src="product.img" alt="#">
      <router-link :to="{name:'ProductPage', params: {id: product._id} }">  
        <h3 class="see-more btn btn-block position-absolute">läs mer</h3>
      </router-link>

    </div>

    <div class="card-info">
        
        <p class="block">{{product.name}}</p>
        <small>{{product.short}}</small>
        <p>{{product.price +' '+ 'sek'}}</p>
        <button  @click="addToCart({product, quantity:1})" type="button" class="btn btn-block btn-light foont-weight-700 mb-5 bottom-0">LÄGG I KORGEN</button>     
       

    </div>

      
      
    


      

    
  </div>


</template>

<script>
import { mapActions } from 'vuex'
//-----IMPORTS----------------------------------------


//-----EXPORTS----------------------------------------
export default {

    name:'ProductCard',
    props:['product'],





    methods: {
      ...mapActions(['addToCart'])
      
    }



  
  
}
//----------------------------------------------------
</script>
<style scoped>


body { 
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.product-card {
  width: 500px;
  text-align: center;
  box-shadow: 1px 1px 1px 1px rgba(218, 215, 215, 0.329);
}


.card-top {

  margin-top: 2rem;
  min-height: 200px;
  max-height: 200px;


}
.card-top img{
  min-height: 100px;
  max-height: 200px;
}

.product-card :hover img{
  -webkit-transform: scale(1.1);
  transition: 0.5s;
}


.see-more{
  font-weight:bolder;
  bottom: 0;
  z-index: 100;

  color: rgb(255, 255, 255);
  background-color: rgba(0, 0, 0, 0);
  opacity: 0;
}

.product-card :hover .see-more {
  opacity: 100%;
  bottom: 30%;
  margin: auto;
  font-size: 30px;
  font-weight: bolder;
   background-color: rgb(0, 0, 0);

  transition: 0.3s ease;
    -webkit-transform: scale(.5);
    

  

}

.card-info {
  padding-top: 1rem;
  position: relative;
}










</style>