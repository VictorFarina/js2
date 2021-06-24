<template>
          <li>{{order.date}}</li>


  
</template>

<script>
import { mapActions, mapGetters } from 'vuex'


export default {

    data(){
         let lastOrder= [ this.activeUser.orders[0]]
         console.log(lastOrder)
        
        

    },

  

    name: "LastOrder",

    computed: {
        ...mapGetters(['activeUser'])
    },
    methods: {
        ...mapActions(['updateUser']),
        

    
    },

   
       
    

}
</script>

<style>

</style>