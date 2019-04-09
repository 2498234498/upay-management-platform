<template>
  <div class="navbar">
    <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" router>
      <el-menu-item v-for="(item, index) in navbar" :key="index" :index="item.path">{{ item.meta.title }}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  computed: {
    navbar () {
      return this.$router.options.routes
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
