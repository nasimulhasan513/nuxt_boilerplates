import axios from "axios";

export default defineNuxtPlugin((NuxtApp) => {
  // axios.defaults.baseURL = "https://api.v2.e-testpaper.com/api/v1/"
  axios.defaults.baseURL = "http://localhost:3200/api/v1/";

  return {
    provide: {
      axios: axios,
    },
  };
});
