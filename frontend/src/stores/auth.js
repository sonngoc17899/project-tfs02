import {AuthService} from '@/services';
import {ProductService} from "@/services";


export default {
    namespaced: true,
    state: {
        authUser: null,
        accessToken: null,
        cart: [],
    },
    getters: {
        authUser(state) {
            return state.authUser
        },
        isAuthenticated(state) {
            return Boolean(state.authUser);
        },
        getCart(state){
            return state.cart;
        }
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.accessToken = token
        },
        SAVE_AUTH_USER(state, data) {
            state.authUser = data
        },
        LOGIN(state, {user = true, access_token}) {
            state.authUser = user;
            state.accessToken = access_token;
        },
        SAVE_CART(state, data) {
            state.cart = data
        },
    },
    actions: {
        ACTION_LOGOUT({commit}) {
            commit('SET_TOKEN', null)
            commit('SAVE_AUTH_USER', null)
            localStorage.clear()
        },
        async login(context, credentials) {
            const {data} = await AuthService.login(credentials.network)
            await context.dispatch('actionLogin', data)
        },
        async loginForm(context, credentials) {
            const {data} = await AuthService.loginForm(credentials)
            await context.dispatch('actionLogin', data)
        },
        async actionLogin(context, data) {
            const email = localStorage.getItem('email')
            if (data) {
                localStorage.setItem('accessToken', data)
                context.commit('LOGIN', data);
                await context.dispatch('ACTION_SAVE_AUTH_USER', email);
            }
        },
        async ACTION_SAVE_AUTH_USER(context, credentials) {
            if (localStorage.getItem('accessToken')) {
                const {data} = await AuthService.getAuthUser(credentials);
                if (data) {
                    localStorage.setItem('userInfo', JSON.stringify(data));
                    context.commit('SAVE_AUTH_USER', data);
                    await context.dispatch('getCart',data.ID)
                }
                return data;
            }
        },
        async getCart(context, credentials){
            const {data} = await ProductService.getCart(credentials);
            if(data){
                console.log(data)
               context.commit('SAVE_CART',data);
            }
            return data;
        },
        async addToCart(context, credentials) {
            const {data} = await ProductService.postCart(credentials)
            if(data){
                await context.dispatch('getCart',credentials.user_id)
            }
            return data;
        },
        async removeCart(context, credentials){
            const {data} = await ProductService.deleteCart(credentials.id)
            if(data){
                await context.dispatch('getCart',credentials.user)
            }
            return data;
        },
        logout(context) {
            // return AuthService.logout().then(() => {
                context.dispatch('ACTION_LOGOUT')
            // })
        },

        async signUp(context, credentials) {
            const {data} = await AuthService.signUp(credentials)
            // await context.dispatch('actionLogin', data)
            return data
        }

    },
    modules: {}
}
