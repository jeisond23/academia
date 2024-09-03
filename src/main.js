import { createApp } from 'vue'
import router from './router'
import './assets/css/boot.css'
import './assets/css/fonts-icones.css'
import './assets/css/magnific-popup.css'
import './assets/css/style.css'
import './assets/js/jquery.js'
import './assets/js/scripts.js'
import './assets/js/jquery.magnific-popup.min.js'
import App from './App.vue'

createApp(App)
    .use(router)
.mount('#app')
