import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './Home.vue'
import Pokedex from './Pokedex.vue'
import Guesser from './Guesser.vue'
import { createStore } from 'vuex'

//create new store instance
const store = createStore({
  state() {
    return {
      points: 0,
    };
  },
  mutations: {
    incrementPoints(state) {
      state.points++;
    },
  },
});

// there is also createWebHashHistory and createMemoryHistory

const router = createRouter({
  history: createWebHistory(),
  routes: [  
    { path: '/', component: Home }, 
    { path: '/pokedex', component: Pokedex  },
    { path: '/guesser', component: Guesser  }
],
})

const app = createApp({})

app.use(router)
app.mount('#app')
