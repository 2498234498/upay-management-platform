<template>
  <div class="sidebar">
    <el-menu :default-active="$route.path" router text-color="#333333" active-text-color="#48c9b0" background-color="#f2f2f2">
      <el-menu-item v-for="(item, index) in sidebar[0].children" :key="index" :index="`${item.path ? sidebar[0].path + '/' + item.path : sidebar[0].path}`">{{ item.meta.title }}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  computed: {
    sidebar () {
      let sidebar = this.$router.options.routes.filter(item => item.path !== '/')
      return sidebar.filter(item => this.$route.path.indexOf(item.path) !== -1)
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  .el-menu-item {
    text-align: center;
    border-bottom: 1px solid #e4e4e4;
  }
}
</style>
