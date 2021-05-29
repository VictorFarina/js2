<template>
  <!--Navbar -->
  <nav class="mb-1 navbar navbar-expand-lg navbar-dark bg-dark pt-2 d-print">
    <router-link class="nav-link active ml-5" to="/"
      ><img src="../assets/shirtLogo.png" height="40px" alt=""
    /></router-link>
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
          <router-link  class="nav-link" to="/checkout"><i class="fas fa-user"></i></router-link >
          </li>
        <li v-else>
          <router-link  class="nav-link col-3" to="/checkout"><p>LOGIN</p></router-link >
        </li>

        <h4 class="qty">{{cartCounter}}</h4>
      <!-- Button trigger modal -->
      <div class="dropdown">
        <i
        class="fas fa-shopping-bag dropdown-toggle col-1"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        >
        </i>

      <div class="dropdown-menu col-4" aria-labelledby="dropdownMenuButton">
        
        <Cart/>
      </div>


      


      


      

       



     
      

    




    </div>
    
    </div>
  </nav>
</template>
<script>
import { mapGetters } from "vuex";

import Cart from "./Cart";



export default {

  name: "Navbar",
  components: {
    Cart,

  
  },

  

  computed: {
    ...mapGetters(["cartCounter","loggedIn"]),
  },

  methods:{

   

  
  
    
  }



}


</script>

<style>



* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.cart {
 min-width: 500px;

}



.dropdown-menu {
  position: absolute;
  left: -30rem;
}
.nav-link {
  color: #fff;
}

.dropdown-menu {
  min-width: 500px;
}
i {
  margin-right: 3rem;
  color: #fff;
}

.qty {
  color: white;
  margin-right: 1rem;
}

.bg-nav {
  background-color: rgb(26, 26, 26);
}
</style>