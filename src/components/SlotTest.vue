<template>
  <div class="slot-test">
    <say-to c="propety--aaa" pf="propety--bbb">
      <h1 slot="sf">slot-content--ccc</h1>
      <span slot="pg" v-color="'red'">slot-content--ddd</span>
    </say-to>
  </div>
</template>

<script>
// 1. 导入 评论子组件
import SayTo from './slot-test/SayTo'

export default {
  name: 'SlotTest',
  components: {
    // 用来注册子组件的节点
    'say-to': SayTo
  }
}
</script>

<style scoped>

</style>
