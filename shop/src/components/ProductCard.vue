<template>
      <div class="product-card col-3 mb-4">       
        <div class="card collection-card">

<!--IMG----------------------------------------------->             

            <div class="view zoom">               
              <router-link :to="{ name:'ProductPage' , params: {id :item._id} }"> <!-- route link to component with name ProductPage -->
                                      <!--  defining prop ^as Item_Id^to use in child component productPage-->
                <img class="card-img-top product-img" 
                :src="item.img" alt="..."> <!-- refering to the object in array wich was defined as prop: ["product"] in parent -->
                <p class="see-more position-absolute">see more</p>
              </router-link>
            </div>
<!--NAME----------------------------------------------------> 
          <div class="card-body">
              <p>{{item.name}}</p> <!-- refering to the object in array wich was defined as prop: ["product"] in parent -->
              <small class="grey-text">{{item.desc}}</small>
               
<!--PRICE------------------------------------------>     
            <h5 class="font-weight-bold blue-text mb-0">
              <strong>{{item.price}}</strong> <!-- refering to the object in array wich was defined as prop: ["product"] in parent -->
            </h5>
<!---------------------------------------------------->                
 <!--BUTTON-------------------------------------------->  
<div class="row">
          <button class="btn-block btn-dark" 
            @click="addToCart({product:item, quantity:1})">
              BUY
          </button>                  
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

  // created () {
  //   this.getThisProduct(this.id)
  // }
}
//----------------------------------------------------
</script>
<style scoped>
.see-more{
  width: 100%;
 box-shadow: 1 1 1 1;
  top: 50%;
  opacity:0%;
}
.zoom:hover .product-img{
  opacity:20%;
  transition: 3s;
}
.zoom:hover .see-more{
  opacity:100%;
  transition:1s;
}
.logga {
    position:absolute;
    top:35%;
    left:35%;
}
</style>