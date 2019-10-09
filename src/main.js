import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './promise.js'
import './registerServiceWorker'
import element from './element/element'
// import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import vuedraggable from 'vuedraggable'// 拖拽插件

// Vue.use(ElementUI)
Vue.use(element)
Vue.use(vuedraggable)
// import 'element-ui/lib/theme-chalk/index.css'
// import { Tag } from 'element-ui'

// Vue.component(Tag.name, Tag)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
