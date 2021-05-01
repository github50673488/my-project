<template>
  <div>
    <span v-show="isShow" v-cloak>{{ msg }}</span>
    <input v-model="msg" placeholder="edit me" v-if="isShow" :title="msg" :class="{inputClass:isShow}"
           @keyup.enter="onEnter($event,'mypara')">
    <input type="button" value="testBtn" @click="onClick" :style="styleObject">
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
