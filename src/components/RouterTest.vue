<template>
  <div>
    <h3>路由测试组件</h3>
    <!-- 路由链接 -->
    <router-link to="/route-test/account?id=10&name=zs" class="nav-link">1--显示账号组件</router-link>
    <router-link to="/route-test/newslist/12/liu" class="nav-link">2--新闻列表组件</router-link>
    <hr>

    <!-- 路由的容器 但是注意！！这里要匹配在Routter路由里头的子路由！如果不这么做，account或者newslist 不会安装预想的显示在下面的router-view 里头 ，而是找到 App。vue里头的 router-view-->
    <router-view/>
  </div>

</template>

<script>
export default {
  name: 'RouterTest',
  created () { // 组件的生命周期钩子函数
    console.log(this.$route)
  },
  watch: {
    '$route.path': function (newVal, oldVal) {
      // console.log(newVal + ' --- ' + oldVal)
      if (newVal.includes('newslist')) {
        console.log('新闻列表组件')
      } else {
        console.log('显示账号组件')
      }
    }
  }
}
</script>

<style scoped>

</style>
