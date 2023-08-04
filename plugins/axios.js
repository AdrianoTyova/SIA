// plugins/axios.js
import { defineNuxtPlugin } from '#app'
import { provide } from 'vue'
import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
  const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/todos' // Altere para a URL base da sua API
  });

  provide('axios', instance);
});
