<template>

  <div to="/product">

    <div class="card-top position-relative">
      <router-link :to="{ 
        name:'ProductPage' , 
        params: {id :item._id} }"> 
        <img 
        @mouseenter="item.img = item.img3"

        @mouseleave="item.img3 = item.img"
        class="img1"
        :src="item.img" 
        alt="#">
     
        <h3 class="see-more btn btn-block position-absolute">quick view</h3>
        
         

      </router-link>

     

    </div>

    <div class="card-info">
        <!-- <i @click="addToCart({product:item,quantity:1})" type="button" class="fas fa-shopping-bag"></i>      -->
        <h5 class="block">{{item.name}}</h5>
        <small>{{item.desc}}</small>
        <p>{{item.price +' '+ 'sek'}}</p>
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