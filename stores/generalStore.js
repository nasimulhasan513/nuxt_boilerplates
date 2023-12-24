import { defineStore } from 'pinia';
export const useGeneralStore = defineStore('generalStore', {
    state: () => ({
        isDarkMode: false,
    }),
    getters: {
        getIsDarkMode() {
            return this.isDarkMode;
        },
    },
    actions: {
        setIsDarkMode(value) {
            this.isDarkMode = value;
        },
    },
    persist: true,
});