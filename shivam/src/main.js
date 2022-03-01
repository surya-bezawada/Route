import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.css"
import vuelidate from vuelidate

//import axios from 'axios'
// import VueAxios from 'vue-axios'

createApp(App)
.use(router)
.mount('#app')
Vue.use(vuelidate)
// app.use(VueAxios, axios)

import "bootstrap/dist/js/bootstrap.js"

