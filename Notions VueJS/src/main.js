import { createApp } from 'vue'
import App from './App.vue'



// Importer un framework CSS
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//ROUTING
import router from './Routes'


// BUS
export const MyBus = createApp(App);

// modifier pour router
createApp(App).use(router).mount('#app')
// createApp(App).mount('#app')
