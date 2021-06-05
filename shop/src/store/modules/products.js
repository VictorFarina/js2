import axios from '@/axios'

export default {

    state: {
        products: [], //<---- array to fill with objects from database trough axios
        product: null, //<----changing value  selected product when entering productPage,reset back to null if going back.
    },
    getters: {
        products: state => state.products, //<-access to---products[]---in state
        product: state => state.product, //<---access to---product------in state
    },
    
    mutations: {
        SET_PRODUCTS: (state, products) => {
            state.products = products
        },
        SET_PRODUCT: (state, product) => {
            state.product = product //
        },
        RESET_TO_NULL: state => { //<-----reset product value back to null when going back from productPage
            state.product = null
        },
    },
    actions: {

        getProducts: async ({commit}) => {
            const res = await axios.get('/products')
            commit('SET_PRODUCTS', res.data)
        },
        getThisProduct: async ({commit}, id) => {
            const res = await axios.get('/products' + '/' + id)
            commit('SET_PRODUCT', res.data)
            
        },

        resetToNull: ({commit}) => { //<------------commiting to RESET_TO_NULL in mutations
            commit('RESET_TO_NULL')

        },
    }
}