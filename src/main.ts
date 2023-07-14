import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import "element-plus/dist/index.css"
import ElementPlus from 'element-plus'
import router from './router'
// import datav from '../dist/vue3-datav-unit.js'
import datav from '../packages'

const app = createApp(App)
app.use(ElementPlus)
app.use(datav)
app.use(router)
app.mount('#app')
