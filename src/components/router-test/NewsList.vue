<template>
  <div>
    <h4>我是新闻列表组件！</h4>
  </div>
</template>

<script>
export default {
  name: 'NewsList',
  created () { // 组件的生命周期钩子函数
    console.log(this.$route)
    console.log(this.$route.params.id)
    console.log(this.$route.params.name)
  }
}
</script>

<style scoped>

</style>
