import { createApp } from 'vue'
import App from './App.vue'
import firstVue from './components/firstVue.vue'
import router from './routes'
const app = createApp(App)
app.component("firstVue",firstVue)
app.use(router)
app.mount("#app")
