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
import RefsTest from '@/components/RefsTest'
import NameRouteTest from '@/components/NameRouteTest'

import Header from '@/components/name-router-test/Header'
import LeftBox from '@/components/name-router-test/Left'
import MainBox from '@/components/name-router-test/MainBox'
import ComputedTest from '@/components/ComputedTest'

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
          path: 'account', // 和link里头的url要写清楚不同， 这里的路由定义可不要写斜线哦!!
          name: 'Account',
          component: Account
        },
        {
          path: 'newslist/:id/:name', // 和link里头的url要写清楚不同， 这里的路由定义可不要写斜线哦!!注意，如果浏览器 地址 只有 /login/12，是匹配不到这个路由而显示 login的！
          name: 'NewsList',
          component: NewsList
        }
      ]
    },
    {
      path: '/component-test',
      name: 'ComponentTest',
      component: ComponentTest
    },
    {
      path: '/refs-test',
      name: 'RefsTest',
      component: RefsTest
    },
    {
      path: '/computed-test',
      name: 'ComputedTest',
      component: ComputedTest
    },

    {
      path: '/name-route-test',
      name: 'NameRouteTest',
      component: NameRouteTest,
      children: [// children 属性，实现路由规则的嵌套
        {
          path: '',
          components: {
            'default': Header,
            'left': LeftBox,
            'main': MainBox
          }
        }
      ]
    }
  ],
  linkActiveClass: 'btn btn-success'
})
