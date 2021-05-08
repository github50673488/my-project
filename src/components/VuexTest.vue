<template>
  <div>
    <h1>vuextest</h1>
    <hr>

    <counter></counter>
    <hr>
    <amount></amount>

  </div>
</template>

<script>
import counter from '../components/vuex-test/amount'
import amount from '../components/vuex-test/counter'

export default {
  name: 'VuexTest',
  data () {
    return {}
  },
  components: {
    counter,
    amount
  }
}
</script>

<style scoped>

</style>
