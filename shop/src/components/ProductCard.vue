<template>

  <div>
    <div class="card-top position-relative">
      <img class="img1" :src="product.img" alt="#">
      <router-link :to="{name:'ProductPage', params: {id: product._id} }">  
        <h3 class="see-more btn btn-block position-absolute">view</h3>
      </router-link>

    </div>

    <div class="card-info">
        <!-- <i @click="addToCart({product:item,quantity:1})" type="button" class="fas fa-shopping-bag"></i>      -->
        <h5 class="block">{{product.name}}</h5>
        <small>{{product.desc}}</small>
        <p>{{product.price +' '+ 'sek'}}</p>
    </div>

      
      
    


      

    
  </div>


</template>

<script>
//-----IMPORTS----------------------------------------

//-----EXPORTS----------------------------------------
export default {

    name:'ProductCard',
    props:['product'],



  
  
}
//----------------------------------------------------
</script>
<style scoped>


body { 
  box-sizing: border-box;
  padding: 0;
  margin: 0;
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
.card-top :hover .see-more {
  
  opacity: 100%;
  transition: 0.1s;

}
.see-more{
  bottom: 0;
  z-index: 100;
  color: rgb(255, 255, 255);
  background-color: rgba(0, 0, 0, 0.76);
  opacity: 0;
}
.card-info {
  padding-top: 1rem;
  background-color: rgba(247, 247, 247, 0.623);
  position: relative;
}
.fa-shopping-bag {
  box-shadow: 1px 1px 1px 1px;
  color: rgb(0, 0, 0);
  font-size: 48px;
  position: absolute;
  text-align: center;
  align-self: center;
  height: 50px;
  width:50px;
  right:5%;
  top: -30%;
}










</style>