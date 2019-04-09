<template>
  <div>
    <el-menu :default-active="$route.path" router>
      <el-menu-item v-for="(item, index) in sidebar[0].children" :key="index" :index="`${item.path ? sidebar[0].path + '/' + item.path : sidebar[0].path}`">{{ item.meta.title }}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  computed: {
    sidebar () {
      return this.$router.options.routes.filter(item => this.$route.path.indexOf(item.path) !== -1)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
