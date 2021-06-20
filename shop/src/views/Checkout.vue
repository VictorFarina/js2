    <template>
        <form @submit.prevent="onSub" class="confirmation ">
            <Cart class="mt-5"/>
            <div class="d-flex">
                
            <button class="p-5 w-50 d btn-dark mx-cente">
                <h2>slutför köp</h2>
            </button>


            </div>

           



        </form>


</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import Cart from '../components/Cart'


export default { 
    components:{
        Cart
    },
    name:"Checkout",
    computed: {
        ...mapGetters(['cart','activeUser'])
    }, 
     methods: {

         ...mapActions(['addToOrders', 'clearCart']),

         onSub(){
            let userCart = this.cart
            this.addToOrders({userCart})
            .then 
          
         }
    }
}

</script>

<style scoped>

.confirmation {
    position: relative;
    width:40%;
    margin-top: 5rem;
    margin-left: auto;
    margin-right: auto;
}

</style>