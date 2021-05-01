<template>
  <div id="app">
    <!--    <img src="./assets/logo.png">-->

    <!--        <div class="alert alert-primary" role="alert">-->
    <!--          bootstrap is OK-->
    <!--        </div>-->

    <!--    <div class="dropdown">-->
    <!--      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"-->
    <!--              aria-expanded="false">-->
    <!--        Dropdown button-->
    <!--      </button>-->
    <!--      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">-->
    <!--        <a class="dropdown-item" href="#">Action</a>-->
    <!--        <a class="dropdown-item" href="#">Another action</a>-->
    <!--        <a class="dropdown-item" href="#">Something else here</a>-->
    <!--      </div>-->
    <!--    </div>-->

<!--    以上仅仅是为了测试bootstrap ↑-->

    <nav class="nav nav-pills">
      <!--      tag="span"-->
      <router-link to="/code-template" class="nav-link">code-template</router-link>
      <router-link to="/pao-ma-deng" class="nav-link">pao-ma-deng</router-link>
      <router-link to="/calculator" class="nav-link">Calculator</router-link>
    </nav>

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
