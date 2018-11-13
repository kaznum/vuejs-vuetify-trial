import 'babel-polyfill';
import Vue from 'vue';

import './plugins/vuetify';
import Vuetify from 'vuetify';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(Vuetify, {
    theme: {
        primary: '#ff0000',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c'
    }
});

new Vue({
    render: h => h(App)
}).$mount('#app');
