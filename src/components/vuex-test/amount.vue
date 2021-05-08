<template>
  <div>
    <!-- <h3>{{ $store.state.count }}</h3> -->
    <h3>{{ $store.getters.optCount }}</h3>

  </div>
</template>

<script>
export default {
  name: 'amount'
}
</script>

<style scoped>

</style>
