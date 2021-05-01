<template>
  <div id="app">
    <!--    <img src="./assets/logo.png">-->
    <!--    <div class="alert alert-primary" role="alert">-->
    <!--      bootstrap is OK-->
    <!--    </div>-->
    <!--    <a href="#/hello">hello</a>-->
    <!--    <a href="#/list">list</a>-->
    <router-link to="/hello" tag="span">hello</router-link>
    <router-link to="/list">list</router-link>

    <transition mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/*.router-link-active,*/
.myactive {
  color: red;
  font-weight: 800;
  font-style: italic;
  font-size: 30px;
  text-decoration: underline;
  background-color: #879387;
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(140px);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

</style>
