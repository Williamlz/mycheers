import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login.vue'
import home from '../components/home.vue'
import novel_home from '../components/novel/novel_home.vue'
import game_home from '../components/game/game_home.vue'
import wait_answer from '../components/wait_answer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'login',
      path: '/login',
      component:login
      
    },
    {
      name: 'home',
      path: '/home',
      component:home
    },
    {
      name: 'novel_home',
      path: '/novel/novel_home',
      component:novel_home
    }
    
  ]
})
