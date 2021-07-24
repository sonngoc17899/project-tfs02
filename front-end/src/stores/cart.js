import axios from "@/utils/axios";
import { ProductService } from "../services";

export default {
    namespaced: true,
    state: {
       cart: []
    },
    getters: {
       getCart(state){
           return state.cart;
       }
    },
    mutations: {
        SAVE_CART(state, data) {
            state.cart = data
        },
    },
    actions: {
        async addToCart(context, credentials) {
            const {data} = await ProductService.postCart(credentials)
            // await context.dispatch('actionLogin', data)
            context.commit('SAVE_CART',JSON.stringify(data));
        },
    },
    modules: {}
}
