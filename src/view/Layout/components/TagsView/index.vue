<template>
  <div class="tagTitle">{{ tagTitle }}</div>
</template>

<script>
export default {
  name: 'tagsView',
  computed: {
    tagTitle () {
      let sidebar = this.$router.options.routes.filter(item => this.$route.path.indexOf(item.path) !== -1)
      let path = this.$route.path.split('/')
      let tagTitle = ''
      sidebar[0].children.forEach(item => {
        if (item.path === path[path.length - 1]) {
          tagTitle = item.meta.title
        }
      })
      return tagTitle || sidebar[0].children[0].meta.title
    }
  }
}
</script>

<style lang='scss' scoped>
.tagTitle {
  border: 1px solid red;
}
</style>
