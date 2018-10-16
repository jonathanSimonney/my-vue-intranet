import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import Home from './views/Home.vue'
import List from "./views/List";
import CollaboratorAdd from "./views/CollaboratorAdd";

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/list', component: List },
    { path: '/collaborator/add', component: CollaboratorAdd },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    routes // short for `routes: routes`
});

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
Vue.config.productionTip = false

new Vue({
    router,
  render: h => h(App)
}).$mount('#app')
