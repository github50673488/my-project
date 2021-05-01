<template>
  <div>

    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">添加品牌</h3>
      </div>
      <div class="panel-body form-inline">
        <label>
          Id:
          <input type="text" class="form-control" v-model="id">
        </label>

        <label>
          Name:
          <input type="text" class="form-control" v-model="name" @keyup.f2="add">
        </label>

        <!-- 在Vue中，使用事件绑定机制，为元素指定处理函数的时候，如果加了小括号，就可以给函数传参了 -->
        <input type="button" value="添加" class="btn btn-primary" @click="add()">

        <label>
          搜索名称关键字：
          <input type="text" class="form-control" v-model="keywords" id="search" v-focus v-color="'green'"
                 v-fontweight="300" v-fontsize="20">
        </label>
      </div>
    </div>

    <table class="table table-bordered table-hover table-striped">
      <thead class="thead-dark">
      <tr>
        <th>编码</th>
        <th>车名</th>
        <th>登录时间</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in search(keywords)" :key="item.id">
        <td>{{ item.id }}</td>
        <td v-text="item.name"></td>

        <!--        问题，私有过滤器没问题，全局过滤器的话，一刷新还是原来的值没过滤不知道为什么
        解决 https://blog.csdn.net/weixin_42554191/article/details/105460860
        -->
        <td>{{ item.ctime | dateFormat('yyyy年MM月dd日 hh:mm:ss') }}</td>
        <!--        <td>{{ item.ctime | dateFormat_private() }}</td>-->

        <td>
          <a href="" @click.prevent="del(item.id)">删除</a>
        </td>
      </tr>
      </tbody>
    </table>

  </div>

</template>

<script>

export default {
  name: 'BrandCarList',
  data () {
    return {
      id: '',
      name: '',
      keywords: '', // 搜索的关键字
      list: [
        {id: 1, name: '奔驰', ctime: new Date()},
        {id: 2, name: '宝马', ctime: new Date()}
      ]
    }
  },

  methods: {
    add () { // 添加的方法
      var car = {id: this.id, name: this.name, ctime: new Date()}
      this.list.push(car)
      this.id = this.name = ''
    },
    del (id) { // 根据Id删除数据
      var index = this.list.findIndex(item => {
        if (item.id === id) {
          return true
        }
      })

      // console.log(index)
      this.list.splice(index, 1)
    },
    search (keywords) { // 根据关键字，进行数据的搜索
      return this.list.filter(item => {
        if (item.name.includes(keywords)) {
          return item
        }
      })

      // return newList
    }

  },

  filters: { // 定义私有过滤器    过滤器有两个 条件  【过滤器名称 和 处理函数】
    // 过滤器调用的时候，采用的是就近原则，如果私有过滤器和全局过滤器名称一致了，这时候 优先调用私有过滤器
    dateFormat_private: function (dateStr, pattern = '') {
      // 根据给定的时间字符串，得到特定的时间
      var dt = new Date(dateStr)

      //   yyyy-mm-dd
      var y = dt.getFullYear()
      var m = (dt.getMonth() + 1).toString().padStart(2, '0')
      var d = dt.getDate().toString().padStart(2, '0')

      if (pattern.toLowerCase() === 'yyyy-mm-dd') {
        return `${y}-${m}-${d}`
      } else {
        var hh = dt.getHours().toString().padStart(2, '0')
        var mm = dt.getMinutes().toString().padStart(2, '0')
        var ss = dt.getSeconds().toString().padStart(2, '0')

        return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
      }
    }
  },
  directives: { // 自定义私有指令
    'fontweight': { // 设置字体粗细的
      bind: function (el, binding) {
        el.style.fontWeight = binding.value
      }
    },
    'fontsize': function (el, binding) { // 注意：这个 function 等同于 把 代码写到了 bind 和 update 中去!!!!
      el.style.fontSize = parseInt(binding.value) + 'px'
    }
  }

}
// document.getElementById('abccc').focus()
</script>

<style scoped>

</style>
