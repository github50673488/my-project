<template>
  <div>
    <input type="button" value="跑起来" @click="run">
    <input type="button" value="停下来" @click="stop">
    <div v-cloak>{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: 'pmd',
  data () {
    return {
      msg: '跑马灯试一试',
      inteverlId: null
    }
  },
  destroyed () {
    if (this.inteverlId) {
      window.clearInterval(this.inteverlId)
      this.inteverlId = null
    }
  },
  methods: {
    // change: function () {
    change () {
      var firstchar = this.msg.substring(0, 1)
      this.msg = this.msg.substring(1) + firstchar
      console.log('msg', this.msg)
    },

    run: function () {
      if (!this.inteverlId) {
        this.inteverlId = window.setInterval(
          // () => {
          //     var firstchar = this.msg.substring(0, 1);
          //     this.msg = this.msg.substring(1) + firstchar;
          //     console.log("msg", this.msg);
          // }
          this.change
          , 1000
        )
      }
    },
    stop: function () {
      if (this.inteverlId) {
        window.clearInterval(this.inteverlId)
        this.inteverlId = null
      }
      console.log('stop')
    }
  }
}
</script>

<style scoped>

</style>
