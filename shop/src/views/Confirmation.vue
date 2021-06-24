<template>

<div class="container w-50 mx-auto mt-5  mt-3 text-center border border-success">

    <h2 class="mt-5">
        Tack för din beställning {{activeUser.firstName}}!
    </h2>

    <ul>
        <li>
            {{this.activeUser.orders[0].order.date}}

        </li>
      
    </ul>

    


</div>


  
</template>

<script>

import {mapGetters,mapActions} from 'vuex'
// import LastOrder from '../components/LastOrder'


export default {

    

    name:"Confirmation",

    components: {
        // LastOrder
    },
    computed: {
        ...mapGetters(['cart','activeUser'])
    }, 

     methods: {
         ...mapActions([ 'updateUser']),

        // getLastOrder(){
        //       const latestOrder = this.activeUser.orders[0]
        //       return latestOrder
           


    },

    

    created () {
        this.updateUser()
    }

     

    

}
</script>

<style>

</style>