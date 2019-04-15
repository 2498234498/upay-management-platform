<template>
  <div class="navbar">
    <h3 class="title">upay后台管理</h3>
    <el-menu :default-active="$route.path" class="el-menu" mode="horizontal" router background-color="#3498db" text-color="#fff" active-text-color="#fff">
      <el-menu-item v-for="(item, index) in navbar" :key="index" :index="item.path">{{ item.meta.title }}</el-menu-item>
    </el-menu>
    <ul class="right-menu">
      <li>
        <el-dropdown class="dropdown">
          <span class="el-dropdown-link">
            <i class="iconfont icon-touxiang"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span class="username">admin</span>
        <span class="username-border"></span>
      </li>
      <li>
        <i class="iconfont icon-tongzhi"></i>
        <el-badge :value="12" class="msg"></el-badge>
        <span></span>
      </li>
      <li>
        <i class="iconfont icon-dianyuan"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  computed: {
    navbar () {
      return this.$router.options.routes.filter(item => item.path !== '/')
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 39px;
  width: 100%;
  display: flex;
  background: #3498db;
  border-bottom: 2px solid #2a7aaf;
  .title {
    font-size: 18px;
    color: #fff;
    font-weight: bolder;
    text-align: center;
    line-height: 39px;
    padding: 0 20px 0 20px;
  }
  .el-menu {
    height: 37px;
    flex: 1;
    border-bottom: none;
    .el-menu-item {
      height: 37px;
      line-height: 37px;
      font-size: 12px;
      font-weight: bolder;
      border-bottom: none;
    }
  }
  .right-menu {
    color: #fff;
    height: 37px;
    line-height: 37px;
    li {
      float: left;
      &:first-child {
        .dropdown {
          float: left;
          i {
            float: left;
            font-size: 24px;
            color: #fff;
            cursor: pointer;
          }
        }
        .username {
          float: left;
          color: #fff;
          font-size: 16px;
          margin-left: 10px;
        }
        .username-border {
          float: left;
          height: 20px;
          width: 1px;
          background: #2a7aaf;
          margin: 8px 15px 0 6px;
        }
      }
      &:nth-child(2) {
        i {
          float: left;
          font-size: 20px;
          cursor: pointer;
        }
        .msg {
          float: left;
          height: 37px;
        }
        span {
          float: left;
          height: 20px;
          width: 1px;
          background: #2a7aaf;
          margin: 8px 40px 0 20px;
        }
      }
      &:nth-child(3) {
        i {
          font-size: 20px;
          margin-right: 20px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
