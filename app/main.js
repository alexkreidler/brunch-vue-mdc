import Vue from 'vue'
import App from './App'
import router from './router'
import "vueify/lib/insert-css" // required for .vue file <style> tags

Vue.config.productionTip = false

// Setup Material Design components
import VueMdcAdapter from 'vue-mdc-adapter'
Vue.use(VueMdcAdapter)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
