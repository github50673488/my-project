<style scoped>

</style>

<template>
  <div>
    <input type="number" min="1" max="10" v-model="n1" list="defaultNumbers">
    <datalist id="defaultNumbers">
      <option v-for="item in 10" :value="item" :key="item"></option>
    </datalist>
    <select v-model="operator">
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="*">*</option>
      <option value="/">/</option>
    </select>
    <input type="number" min="1" max="10" v-model="n2" list="defaultNumbers">
    <input type="button" value="=" @click="cal">
    <span>{{ result }}</span>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data () {
    return {
      result: 3,
      n1: '1',
      n2: '2',
      operator: '+'
    }
  },

  methods: {
    cal () {
      let n1 = parseInt(this.n1)
      let n2 = parseInt(this.n2)
      if (!Number.isInteger(n1) || !Number.isInteger(n2)) {
        alert('正しい入力してください')
        return
      }
      // eslint-disable-next-line no-eval
      eval('this.result =n1 ' + this.operator + ' n2')
    }
  }
}
</script>
