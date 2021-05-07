<template>
  <div id="name-route-test">

    <router-view></router-view>
    <div class="container">
      <router-view name="left"></router-view>
      <router-view name="main"></router-view>
    </div>

  </div>
</template>

<script>
export default {
  name: 'NameRouterTest'
}
</script>

<style scoped>
.header {
  background-color: orange;
  height: 80px;
}

h1 {
  margin: 0px;
  padding: 0px;
  font-size: 16px;
}

.container {
  margin: 0px;
  padding: 0px;
  display: flex;
  width: 100%;
  height: 600px;
}

.left {
  background-color: lightgreen;
  flex: 2;
}

.main {
  background-color: lightpink;
  flex: 8;
}
</style>
