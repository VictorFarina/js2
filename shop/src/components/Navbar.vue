<template>
  <nav class="mb-1 navbar navbar-expand-lg navbar-dark pt-2 d-print">
    <router-link class="nav-link active ml-5" to="/"><img src="@/assets/barbero.png" height="100px" alt=""/></router-link>
    <h4>papito.se</h4>
    <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
      <ul class="nav justify-content-center">
        <li class="nav-item active ml-5">
          <router-link class="nav-link active" to="/">Home</router-link>
        </li>
        <li class="nav-item active ml-5">
          <router-link class="nav-link active" to="/products"
            >Produkter</router-link
          >
        </li>
        <li class="nav-item active ml-5">
          <router-link class="nav-link active" to="/about">About us</router-link>
        </li>
      </ul>
    </div>
    <div class="row d-flex align-items-center">
          <li v-if="loggedIn">
          <router-link  class="nav-link" to="/checkout" 
          @click="logout"><i class="fas fa-user"></i></router-link>
          </li>
        <li v-else>
          <router-link  class="nav-link col-3" to="/checkout"><p>LOGIN</p></router-link >
        </li>
        <button v-if="loggedIn" @click="logout">logout</button>
        <div class="dropdown mr-5" v-on:click="displayBlock=!displayBlock">
            <i class="fas fa-shopping-bag position-relative" type="button" >
                <span class="cart-counter">
                    {{cartCounter}}
                </span>
              </i>
          <div class="mini-cart">
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
  color: rgb(0, 0, 0);
  font-size: 36px;
}
.cart-counter {
  font-family: 'Montserrat', sans-serif;
  font-style:oblique;
  font-size:18px;
  width: 50%;
  margin: auto;
  position: absolute;
  right: 40%;
  top: 50%;
  color: rgb(255, 255, 255);
}
.nav-link {
  color: rgb(0, 0, 0);
}
.bg-nav {
  background-color: rgb(26, 26, 26);
}
.mini-cart {
  z-index: 1000;
  background: rgb(255, 255, 255);
  width: 700px;
  position: absolute;
  right: 90%;
  top:60%; 
}
</style>