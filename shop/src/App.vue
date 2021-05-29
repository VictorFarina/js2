<template>

<div>
    <Navbar/>
    <router-view/>
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

</style>