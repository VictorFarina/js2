    <template>
        <div class="confirmation ">
            <Cart class="mt-5"/>
            <div class="d-flex">
                
            <button @click="onSub" class="p-5 w-50 d btn-dark mx-cente">
                <h2>slutför köp</h2>
            </button>


            </div>

           



        </div>


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

         onSub() {
            // this.activeUser.orders.push(this.cart)          
            // console.log('after:', this.activeUser)
              this.addToOrders(this.cart)
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