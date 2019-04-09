<template>
  <div class="layout">
    <navbar class="navbar"></navbar>
    <div class="app-wrapper">
      <sidebar class="sider-container"></sidebar>
      <div class="main-container">
        <tags-view></tags-view>
        <app-main></app-main>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import AppMain from './components/AppMain'
import TagsView from './components/TagsView'
export default {
  name: 'layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
    TagsView
  }
}
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
  width: 100%;
  .navbar {
    width: 100%;
  }
  .app-wrapper {
    width: 100%;
    height: 100%;
    .sider-container {
      height: 100%;
      width: 200px;
      // background: red;
      float: left;
    }
    .main-container {
      height: 100%;
      width: calc(100% - 200px);
      // background: #000;
      float: left;
    }
  }
}
</style>
