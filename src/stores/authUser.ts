import { defineStore } from 'pinia';


const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

export const useUsersStore = defineStore({
  id: 'Authuser',
  state: () => ({
    users: {}
  }),
  actions: {
    async getAll() {
      
    }
  }
});
