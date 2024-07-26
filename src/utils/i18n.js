// i18n.js
import Vue from 'vue';
import VueI18n from 'vue-i18n';
 
Vue.use(VueI18n);
 
const messages = {
  en: {
    message: {
      hello: 'Hello world',
    }
  },
  zh: {
    message: {
      hello: '你好世界',
    }
  }
};
 
const i18n = new VueI18n({
  locale: 'en', // 默认语言
  messages,
});
 
export default i18n;