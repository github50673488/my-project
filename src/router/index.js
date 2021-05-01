import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import list from '@/components/list'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/hello'},
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/list',
      name: 'list',
      component: list
    }
  ],
  linkActiveClass: 'myactive'
})
