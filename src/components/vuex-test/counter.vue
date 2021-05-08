<template>
  <div>
    <input type="button" value="减少" @click="remove">
    <input type="button" value="增加" @click="add">
    <br>
    <input type="text" v-model="$store.state.count">
  </div>
</template>

<script>
export default {
  name: 'counter',
  data () {
    return {
      // count: 0
    }
  },
  methods: {
    add () {
      // 千万不要这么用，不符合 vuex 的设计理念
      // this.$store.state.count++;
      console.log('this.$store', this.$store)
      this.$store.commit('increment')
    },
    remove () {
      this.$store.commit('subtract', {c: 3, d: 1})
    }
  },
  computed: {
    fullname: {
      // eslint-disable-next-line vue/return-in-computed-property
      get () {
      },
      set () {
      }
    }
  }
}
</script>

<style scoped>

</style>
