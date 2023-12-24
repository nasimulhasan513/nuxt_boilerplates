import axios from "axios";

export default defineNuxtPlugin((NuxtApp) => {
  axios.defaults.baseURL = process.env.API_URL;

  return {
    provide: {
      axios: axios,
    },
  };
});
