<template>
  <div class="query-bar">
    <label>{{ label }}</label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'QueryBar',
  props: {
    label: '' // 名称
  }
}
</script>

<style lang="scss" scoped>
.query-bar {
  float: left;
  margin: 10px 0 10px 10px;
}
</style>
