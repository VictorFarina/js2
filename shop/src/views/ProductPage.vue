<template>
<div class="product-page">

   <div class="row">
            <div class="col-6">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum dolor a alias pariatur recusandae beatae ad quo autem natus, praesentium, quae at deleniti voluptas saepe, quas aperiam sunt ducimus commodi?</p>
            </div>
            <div v-if="product" class="container my-5 py-5 z-depth-1 row d-flex col-6">
      <section class="text-center">

          
        
        <div>



        
    <!--IMAGE--------------------------------------------------->  
          <div class="col-md-6 col-sd-1">
            <img :src="product.img" alt="">
          </div>

    <!--NAME--------------------------------------------------->  
          <div class="col-md-6 col-sd-1 text-md-left text-sd-center">
            <h2 class="h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4">
              <strong>{{product.name}}</strong>
            </h2>
            <span class="badge badge-dark product mb-4 ml-xl-0 ml-4">{{product.desc}}</span>

    <!--PRICE--------------------------------------------------->  
            <h3 class="h3-responsive text-center text-md-left mb-5 ml-xl-0 ml-4">
              <span class="blue-text font-weight-bold">
                <strong>{{product.price}}</strong>
              </span>
              <span class="grey-text">
                <small>
                  <small>  SEK</small>
                </small>
              </span>
            </h3>


           


    <!--BUTTON-------------------------------------------->    

            <button  @click="addToCart({product, quantity})" class="btn btn-dark btn-block">
                ADD TO CART
            </button>            
          
    <!---------------------------------------------------->  

          </div>
        </div>
      </section>
    </div> 

    <div v-else>

      <div class="spinner-border justify-content-center" role="status">
          <span class="visually-hidden">Loading...</span>
      </div>

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

  data(){
    return{
      quantity:1 //defining value on the second parameter in addToCart()
    } 
  },
  
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
<style>

.product-page{
  width:90%;
  margin:auto;
  

  
}

img{
  max-height: 400px;
}


</style>