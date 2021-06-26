    <template>
        <form @submit.prevent="onSub" class="confirmation">
            <Cart class="mt-5"/>
            <div class="d-flex">

                <button type="submit" class="btn btn-block p-5 w-50 d btn-dark btn-block mx-center" v-show="cartCounter > 0">
                        slutför köp
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

            console.log(order)

            this.addToOrders(order)
            this.clearCart()
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