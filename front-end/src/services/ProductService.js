import ApiService from '@/services/ApiService';

const ProductService = {
    async getAllProduct(){
        await ApiService.get('/products');
    },
    async getProductDetail(credentials){
        await ApiService.get(`/products/${credentials}`);
    },
    async postCart(credentials){
        await ApiService.post('/orders',credentials);
    },
}

export default ProductService;