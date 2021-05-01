<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inputClass {
  border-style: dashed;
  border-color: red;
}

[v-cloak] {
  display: none;
}

</style>

<template>
  <div>
    <span v-cloak v-show="isShow">{{ msg }}</span>
    <input v-if="isShow" v-model="msg" :class="{inputClass:isShow}" :title="msg" placeholder="edit me"
           @keyup.enter="onEnter($event,'mypara')">
    <input :style="styleObject" type="button" value="testBtn" @click="onClick">
    <ul>
      <li v-for="(item, index) in items" :key="item.message">
        {{ index }} - {{ item.message }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CodeTemplate',
  data () {
    return {
      msg: 'test msg',
      isShow: true,
      styleObject: {
        color: 'blue'
      },
      items: [
        {message: 'Foo'},
        {message: 'Bar'}
      ]
    }
  },
  methods: {
    onClick (e) {
      console.log(e.target.tagName)
      this.isShow = !this.isShow
    },
    onEnter (...arg) {
      alert(arg[1])
      console.log(arg[0])
    }
  }
}
</script>
