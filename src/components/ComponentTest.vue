<template>
  <div>
    <cmt-box @func="loadComments" title="父亲组件给的标题"></cmt-box>
    <ul class="list-group">
      <li class="list-group-item" v-for="item in list" :key="item.id">
        <span class="badge">评论人： {{ item.user }}</span>
        {{ item.content }}
      </li>
    </ul>
  </div>
</template>
<script>
// 1. 导入 评论子组件
import CommnetBox from './component-test/CommnetBox'

export default {
  name: 'ComponentTest',
  data: function () {
    return {
      list: [
        {id: Date.now(), user: '李白', content: '天生我材必有用'},
        {id: Date.now(), user: '江小白', content: '劝君更尽一杯酒'},
        {id: Date.now(), user: '小马', content: '我姓马， 风吹草低见牛羊的马'}
      ]

    }
  },
  beforeCreate () { // 注意：这里不能调用 loadComments 方法，因为在执行这个钩子函数的时候，data 和 methods 都还没有被初始化好

  },
  created () {
    this.loadComments()
  },
  methods: {
    loadComments () { // 从本地的 localStorage 中，加载评论列表
      var list = JSON.parse(localStorage.getItem('cmts') || '[]')
      this.list = list
    }
  },
  components: {
    // 用来注册子组件的节点
    'cmt-box': CommnetBox
  }
}
</script>

<style scoped>

</style>
