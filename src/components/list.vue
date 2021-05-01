<template>
  <ul>
    <li v-for="item in items" :key="item.msg">
      {{ item.msg }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      items: [
        {msg: 'liao'},
        {msg: 'yue'},
        {msg: 'qiang'}
      ]
    }
  }
}
</script>

<style scoped>

</style>
