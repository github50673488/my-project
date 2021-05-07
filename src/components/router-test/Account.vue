<template>
  <div>
    <h4>我是账号组件！</h4>
  </div>
</template>

<script>
export default {
  name: 'Account',
  created () { // 组件的生命周期钩子函数
    console.log(this.$route)
    console.log(this.$route.query.id)
    console.log(this.$route.query.name)
  }
}
</script>

<style scoped>

</style>
