// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import Resource from 'vue-resource'

import * as filters from './Filters/'

Vue.use(Resource)

// 遍历所有导出的过滤器并添加到全局过滤器
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

// 使用  Vue.directive() 定义全局的指令  v-focus
// 其中：参数1 ： 指令的名称，注意，在定义的时候，指令的名称前面，不需要加 v- 前缀,
// 但是： 在调用的时候，必须 在指令名称前 加上 v- 前缀来进行调用
//  参数2： 是一个对象，这个对象身上，有一些指令相关的函数，这些函数可以在特定的阶段，执行相关的操作
Vue.directive('focus', {
  bind: function (el) { // 每当指令绑定到元素上的时候，会立即执行这个 bind 函数，只执行一次
    // 注意： 在每个 函数中，第一个参数，永远是 el ，表示 被绑定了指令的那个元素，这个 el 参数，是一个原生的JS对象
    // 在元素 刚绑定了指令的时候，还没有 插入到 DOM中去，这时候，调用 focus 方法没有作用
    //  因为，一个元素，只有插入DOM之后，才能获取焦点
    // el.focus()
  },
  inserted: function (el) { // inserted 表示元素 插入到DOM中的时候，会执行 inserted 函数【触发1次】
    el.focus()
    // 和JS行为有关的操作，最好在 inserted 中去执行，放置 JS行为不生效
  },
  updated: function (el) { // 当VNode更新的时候，会执行 updated， 可能会触发多次

  }
})

// 自定义一个 设置字体颜色的 指令
Vue.directive('color', {
  // 样式，只要通过指令绑定给了元素，不管这个元素有没有被插入到页面中去，这个元素肯定有了一个内联的样式
  // 将来元素肯定会显示到页面中，这时候，浏览器的渲染引擎必然会解析样式，应用给这个元素
  bind: function (el, binding) {
    // el.style.color = 'red'
    // console.log(binding.name)
    // 和样式相关的操作，一般都可以在 bind 执行

    // console.log(binding.value)
    // console.log(binding.expression)

    el.style.color = binding.value
  }
})

Vue.config.productionTip = false
Vue.config.keyCodes.f2 = 113

// 如果我们通过全局配置了，请求的数据接口 根域名，则 ，在每次单独发起 http 请求的时候，请求的 url 路径，应该以相对路径开头，前面不能带 /  ，否则 不会启用根路径做拼接；
Vue.http.options.root = 'http://api.cms.liulongbin.top/'
// 全局启用 emulateJSON 选项
Vue.http.options.emulateJSON = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
