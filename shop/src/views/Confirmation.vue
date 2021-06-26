<template>


<div class="card pb-5">

        <div class="container w-50 mx-auto mt-5  mt-3 text-center border border-success alert alert-success">

            <h2 class="mt-5">
                Tack för din beställning {{activeUser.firstName}} !
            </h2>   
        
        </div>

    <div class="container w-50 mx-auto mt-5 text-center">
        <router-link class="btn btn-dark" to="/products">Fortsätt shoppa?</router-link>
        <button @click="logoutUser" class="btn btn-dark"> Logga ut </button>

    </div>

</div>




  
</template>

<script>

import {mapGetters,mapActions} from 'vuex'


export default {

    

    name:"Confirmation",

    components: {
    },
    computed: {
        ...mapGetters(['cart','activeUser'])
    }, 

     methods: {
         ...mapActions([ 'updateUser','logoutUser']),

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