<template>
  <div id="app">
    <!--    <img src="./assets/logo.png">-->

    <div class="alert alert-warning alert-dismissible" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span
        aria-hidden="true">&times;</span></button>
      bootstrapt 3.3.7 OK
    </div>

    <!-- Single button -->
    <!--    <div class="btn-group">-->
    <!--      <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"-->
    <!--              aria-expanded="false">-->
    <!--        Action <span class="caret"></span>-->
    <!--      </button>-->
    <!--      <ul class="dropdown-menu">-->
    <!--        <li><a href="#">Action</a></li>-->
    <!--        <li><a href="#">Another action</a></li>-->
    <!--        <li><a href="#">Something else here</a></li>-->
    <!--        <li role="separator" class="divider"></li>-->
    <!--        <li><a href="#">Separated link</a></li>-->
    <!--      </ul>-->
    <!--    </div>-->

    <!--    以上仅仅是为了测试bootstrap ↑-->

    <ul class="nav nav-pills">
      <!--      <li role="presentation" class="active"><a href="#">Home</a></li>-->
      <!--      <li role="presentation"><a href="#">Profile</a></li>-->
      <!--      <li role="presentation"><a href="#">Messages</a></li>-->

      <li role="presentation">
        <!--      tag="span"-->
        <router-link to="/code-template" class="nav-link">code-template</router-link>
      </li>
      <li role="presentation">
        <router-link to="/pao-ma-deng" class="nav-link">pao-ma-deng</router-link>
      </li>
      <li role="presentation">
        <router-link to="/calculator" class="nav-link">Calculator</router-link>
      </li>
      <li role="presentation">
        <router-link to="/brand-car-list" class="nav-link">品牌车列表</router-link>
      </li>
      <li role="presentation">
        <router-link to="/route-test" class="nav-link">路由测试</router-link>
      </li>
      <li role="presentation">
        <router-link to="/component-test" class="nav-link">父子组件交互测试</router-link>
      </li>
      <li role="presentation">
        <router-link to="/refs-test" class="nav-link">Refs测试</router-link>
      </li>
      <li role="presentation">
        <router-link to="/name-route-test" class="nav-link">命名路由经典布局</router-link>
      </li>
      <li role="presentation">
        <router-link to="/computed-test" class="nav-link">computed例子</router-link>
      </li>

    </ul>

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
  color: #0048ff;
  /*font-weight: 800;*/
  /*font-style: italic;*/
  /*font-size: 30px;*/
  /*text-decoration: underline;*/
  /*background-color: #879387;*/
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
