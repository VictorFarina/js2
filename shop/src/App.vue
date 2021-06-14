<template>

<div>
    <Navbar/>
      <div class="bg">
      <router-view/>
      </div>
    <Footer/>
</div>
 
  
 
</template>

<script>

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { mapActions } from 'vuex'

export default {
  name:'Home',
  components:{
    Navbar,
    Footer
    },

    methods:{ 
      ...mapActions(['getProducts'])
    },

    created() {
      this.getProducts()
    }
}

</script>


<style>

body{
  font-family:'Montserrat', sans-serif;
}

.bg {
  min-height: 100vh;
}



</style>