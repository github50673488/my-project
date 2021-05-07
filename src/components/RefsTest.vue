<template>
  <div id="reftest">
    <input type="button" value="获取元素" @click="getElement" ref="mybtn">

    <h3 id="myh3" ref="myh3">哈哈哈， 今天天气太好了！！！</h3>

    <hr>

    <login ref="mylogin"></login>
  </div>
</template>

<script>

var login = {
  template: '<h1>登录组件</h1>',
  data () {
    return {
      msg: 'son msg'
    }
  },
  methods: {
    show () {
      console.log('调用了子组件的方法')
    }
  }
}

export default {
  name: 'RefsTest',
  data: function () {
    return {}
  },
  methods: {
    getElement () {
      // console.log(document.getElementById('myh3').innerText)

      //  ref  是 英文单词 【reference】   值类型 和 引用类型  referenceError
      console.log(this.$refs.myh3.innerText)
      console.log(this.$refs.mylogin.msg)
      this.$refs.mylogin.show()
    }
  },
  components: {
    login
  }
}
</script>

<style scoped>

</style>
