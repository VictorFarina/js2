<template>

<div to="/product" class="card-container">
  <div class="product-cards">
    <div class="card-info">

      <router-link :to="{ 
        name:'ProductPage' , 
        params: {id :item._id} }"> 
        
        <img :src="item.img" alt="#">
      </router-link>

      
      
        <h3>{{item.name}}</h3>
        <small>{{item.desc}}</small>
        <p>{{item.price}}</p>
       
        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptatibus?</small>


        <div class="card-buttons">   
          <i @click="addToCart({product:item,quantity:1})" class="fas fa-shopping-bag"></i>        
        </div>

    </div>
  </div>
</div>

</template>

<script>
import { mapActions,mapGetters } from 'vuex'
//-----IMPORTS----------------------------------------

//-----EXPORTS----------------------------------------
export default {

    name:'ProductCard',
    props:['item'],

    methods: {
    //  add(){
    ...mapActions(['getThisProduct','addToCart'])
  },
  computed: {
    ...mapGetters(['product']) 
  },

  created () {
    this.getThisProduct(this.id)
  }
}
//----------------------------------------------------
</script>
<style scoped>



*  { 
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}



 
.card-container {
  display:flex;
  flex: 1;
  width:300px;
}

.card-info img{
  height: 300px;
}

.product-cards {
  min-width: 33.33%;
  border-radius: 25px;
  min-width:300px;
  min-height:500px;
  gap: 5rem;
  max-height: 30rem;
  margin:auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
}



.product-cards :hover {

  cursor: pointer;
  background-image: 
        linear-gradient(to right, rgba(255, 0, 0, 0.164) , rgba(255, 255, 0, 0.219));
  
}

.logga {
    position:absolute;
    top:35%;
    left:35%;
}


</style>