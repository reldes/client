import request from '@/utils/helpers/api/request'

export default {
    me: () => request.get('auth/me'),
    login: (payload: object) => request.post('auth/login', payload),
    logout: () => request.post('auth/logout')
}