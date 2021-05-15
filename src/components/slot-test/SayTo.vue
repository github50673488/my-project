<template>
  <div class="sayto">
    <div>中锋:{{ c }}</div>
    <div>大前锋:{{ pf }}</div>
    <div>小前锋:
      <slot name="sf"></slot>
    </div>
    <div>分位:
      <slot name="pg"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SayTo',
  props: ['c', 'pf']
}
</script>

<style scoped>

</style>
