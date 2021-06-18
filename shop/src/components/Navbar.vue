<template>



  <!--Navbar -->
  <nav class="mb-1 navbar navbar-expand-lg navbar-dark bg-dark pt-2 d-print">
    <router-link class="nav-link active ml-5" to="/"><img src="../assets/shirtLogo.png" height="40px" alt=""/></router-link>

    <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
      <ul class="nav justify-content-center">
        <li class="nav-item active ml-5">
          <router-link class="nav-link active" to="/">Home</router-link>
        </li>
        <li class="nav-item active ml-5">
          <router-link class="nav-link active" to="/products"
            >Products</router-link
          >
        </li>
        <li class="nav-item active ml-5">
          <router-link class="nav-link active" to="/about">About us</router-link>
        </li>
      </ul>
    </div>
    <div class="row d-flex align-items-center">
       
          <li v-if="loggedIn">

          <router-link  class="nav-link" to="/checkout" @click="logout"><i class="fas fa-user"></i></router-link >

          </li>
        <li v-else>
          <router-link  class="nav-link col-3" to="/checkout"><p>LOGIN</p></router-link >
        </li>

        <button v-if="loggedIn" @click="logout">logout</button>

        
       

       
      

      
     



        <div class="dropdown" v-on:click="displayBlock=!displayBlock">
            <i class="fas fa-shopping-bag position-relative" type="button" >
                <span class="cart-counter">
                    {{cartCounter}}
                </span>
              </i>
          <div>

            <Cart v-if="displayBlock"/>

          </div>
          
        </div>

        

       
       
    
     

     
       
      


      


      


      

       



     
      

    




    </div>
    
    
  </nav>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

import Cart from "./Cart";



export default {

     data() {
        return {
          displayBlock:false

        }
      },

  


    


  

   



  name: "Navbar",
  components: {
    Cart,

  
  },

  

  computed: {
    ...mapGetters(["cartCounter","loggedIn"]),
  },

  methods:{

    ...mapActions(['logoutUser']),
    logout(){
      this.logoutUser()
    }


  }



}


</script>

<style>



body {
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.fa-shopping-bag{
  position: relative;
  color: #fff;
  font-size: 36px;
}

.cart-counter {
  font-family: 'Montserrat', sans-serif;
  font-style:oblique;
  font-size:18px;
  width: 50%;
  position: absolute;
  right: 40%;
  top: 50%;
  color: black;
}

.dropdown{
  position: relative;
  display: inline-block;

}

.dropdown-content {
  background: #fff;
  display: none;
  position: absolute;
  left:-30rem;
  z-index: 10;

}








.nav-link {
  color: #fff;
}






.bg-nav {
  background-color: rgb(26, 26, 26);
}
</style>