import ApiService from '@/services/ApiService';
import axios from '../utils/axios'
const AuthService = {
    getAuthUser(credentials) {
        // console.log(credentials)
        return axios.get(`/profile/${credentials}`)
    },
    async loginForm(credentials) {
        return await ApiService.post('auth/login', credentials)
    },
    logout() {
        return ApiService.post('auth/logout');
    },

    async signUp(data) {
        return await ApiService.post('users', data)
    },

    forgotPassword(email) {
        return ApiService.post('user/forgot-password', email);
    },

    resetPassword(token, password, password_confirmation) {
        return ApiService.update(`user/reset-password/${token}`, { password, password_confirmation });
    },

    verificationEmail(token) {
        return ApiService.post(`user/verification-email/${token}`)
    }
}

export default AuthService;
