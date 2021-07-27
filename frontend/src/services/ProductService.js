import ApiService from '@/services/ApiService';

const ProductService = {
    async getAllProduct(){
        return await ApiService.get('/products');
    },
    async getProductDetail(credentials){
        return await ApiService.get(`/products/${credentials}`);
    },
    async postCart(credentials){
        return await ApiService.post('/orders',credentials);
    },
    async getCart(credentials){
        return await ApiService.get(`/orders/${credentials}`)
    },
    async deleteCart(credentials){
        return await ApiService.delete(`/orders/${credentials}`)
    }
}

export default ProductService;