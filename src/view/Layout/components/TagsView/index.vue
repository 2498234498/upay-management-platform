<template>
  <div class="tagTitle">
    <h3 class="navbarTitle">{{ navbarTitle }}</h3>
    <ul class="sidebarTitle">
      <li></li>
      <li>{{ sidebarTitle }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tagsView',
  computed: {
    sidebarTitle () {
      let sidebar = this.$router.options.routes.filter(
        item => this.$route.path.indexOf(item.path) !== -1 && item.path !== '/'
      )
      let path = this.$route.path.split('/')
      let sidebarTitle = ''
      sidebar[0].children.forEach(item => {
        if (item.path === path[path.length - 1]) {
          sidebarTitle = item.meta.title
        }
      })
      return sidebarTitle || sidebar[0].children[0].meta.title
    },
    navbarTitle () {
      let sidebar = this.$router.options.routes.filter(
        item => this.$route.path.indexOf(item.path) !== -1 && item.path !== '/'
      )
      return sidebar[0].meta.title
    }
  }
}
</script>

<style lang='scss' scoped>
.tagTitle {
  height: 50px;
  width: 100%;
  background: #f3f3f3;
  border-bottom: 1px solid #e4e4e4;
  .navbarTitle {
    height: 50px;
    width: 200px;
    float: left;
    line-height: 50px;
    text-align: center;
    font-weight: 100;
    font-size: 14px;
    color: #999999;
    border-right: 1px solid #e4e4e4;
  }
  .sidebarTitle {
    height: 50px;
    width: calc(100% - 200px);
    line-height: 50px;
    float: left;
    font-size: 14px;
    color: #999999;
    li {
      float: left;
      &:first-child {
        height: 18px;
        width: 5px;
        background: #1abc9c;
        margin-top: 16px;
        margin-right: 6px;
      }
    }
  }
}
</style>
