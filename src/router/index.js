import Vue from 'vue'
import Router from 'vue-router'
import CodeTemplate from '@/components/CodeTemplate'
import PaoMaDeng from '@/components/PaoMaDeng'
import Calculator from '@/components/Calculator'
import BrandCarList from '@/components/BrandCarList'
import RouterTest from '@/components/RouterTest'
import Account from '@/components/router-test/Account'
import NewsList from '@/components/router-test/NewsList'
import ComponentTest from '@/components/ComponentTest'

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
    },
    {
      path: '/route-test',
      name: 'RouterTest',
      component: RouterTest,
      children: [// children 属性，实现路由规则的嵌套
        {
          path: 'account',
          name: 'Account',
          component: Account
        },
        {
          path: 'newslist',
          name: 'NewsList',
          component: NewsList
        }
      ]
    },
    {
      path: '/component-test',
      name: 'ComponentTest',
      component: ComponentTest
    }

  ],
  linkActiveClass: 'btn btn-success'
})
