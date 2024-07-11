import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import i18n from './utils/i18n'
import '@/assets/style/fonts.css' //字体样式
import '@/assets/style/index.css' //字体样式


Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
