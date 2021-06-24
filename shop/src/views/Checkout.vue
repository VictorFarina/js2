    <template>
        <div class="confirmation ">
            <Cart class="mt-5"/>
            <div class="d-flex">
                
           

            <router-link to="/confirmation">
                <button v-show="cartCounter > 0"  @click="onSub"  class="p-5 w-50 d btn-dark mx-cente">
                    <h2>slutför köp</h2>
                </button>
            </router-link>        


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
        ...mapGetters(['cart','activeUser','cartCounter','cartTotal'])
    }, 
     methods: {
         ...mapActions(['addToOrders', 'clearCart']),
         onSub() {
            // this.activeUser.orders.push(this.cart)          
            // console.log('after:', this.activeUser)
            let order = {
                date:Date(),
                order:this.cart,
                totalPrice:this.cartTotal

            } 
            
            
            this.addToOrders(order)
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