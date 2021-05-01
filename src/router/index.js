import Vue from 'vue'
import Router from 'vue-router'
import CodeTemplate from '@/components/CodeTemplate'
import PaoMaDeng from '@/components/PaoMaDeng'
import Calculator from '@/components/Calculator'
import BrandCarList from '@/components/BrandCarList'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/code-template'},
    {
      path: '/code-template',
      name: 'CodeTemplate--just a name?',
      component: CodeTemplate
    },
    {
      path: '/pao-ma-deng',
      name: 'pmd',
      component: PaoMaDeng
    },
    {
      path: '/calculator',
      name: 'Calculator',
      component: Calculator
    },
    {
      path: '/brand-car-list',
      name: 'BrandCarList',
      component: BrandCarList
    }

  ],
  linkActiveClass: 'btn btn-success'
})
