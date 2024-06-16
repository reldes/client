import { defineStore } from 'pinia';
import { router } from '@/router';
import api from '@/utils/helpers/api/api';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
    // @ts-ignore
    token: JSON.parse(localStorage.getItem('token')),
    // @ts-ignore
    user: JSON.parse(localStorage.getItem('user')),
    returnUrl: null
  }),
  actions: {
    async login(email: string, password: string) {
      const { access_token } = await api.auth.login({email: email, password: password});
      this.token = access_token;
      localStorage.setItem('token', JSON.stringify(access_token));
      const { user } = await api.auth.me();
      localStorage.setItem('user', JSON.stringify(user));
      await router.push('/dashboard');
    },
    async logout() {
      this.user = null;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      await api.auth.logout();
      await router.push('/auth/login');
    }
  }
});
