import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './Home.vue'
import Pokedex from './Pokedex.vue'

// there is also createWebHashHistory and createMemoryHistory

const router = createRouter({
  history: createWebHistory(),
  routes: [  
    { path: '/', component: Home }, 
    { path: '/pokedex', component: Pokedex  }
],
})

const app = createApp({})

app.use(router)
app.mount('#app')
