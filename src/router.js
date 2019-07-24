import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home';
import ListTeam from '@/components/ListTeam'
import ListPlayer from '@/components/ListPlayer'
import ListManager from '@/components/ListManager'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/team/list',
      name: 'listTeam',
      component: ListTeam
    }, {
      path: '/player/list',
      name: 'listPlayer',
      component: ListPlayer
    }, {
      path: '/manager/list',
      name: 'listManager',
      component: ListManager
    },

    {
      path: '/helloword',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ],
  mode: 'history'
})
