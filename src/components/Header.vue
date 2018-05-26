<template>
  <section>
  <el-menu mode="horizontal" background-color="#20a0ff" text-color="#fff">
    <el-menu-item index="1" class="brand">医疗设备管理系统</el-menu-item>
    <!-- <h3 class="brand">医疗设备管理系统</h3> -->
    <el-submenu index="2" class="userinfo">
      <template slot="title"><img src="../assets/user.png" /> 刘某某</template>
      <el-menu-item index="2-1">我的消息</el-menu-item>
      <el-menu-item index="2-2">设置</el-menu-item>
      <el-menu-item index="2-3">退出登录</el-menu-item>
    </el-submenu>
  </el-menu>
  </section>
</template>
<script>
export default {
  data () {
    return {
      sysUserAvatar: '../assets/user.png'
    }
  }
}
</script>
<style scoped>
.brand {
  margin-left: 20px;
  font-size: 30px;
  letter-spacing: 2px;
}
.userinfo {
  float: right;
}
img {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin: 10px 0px 10px 10px;
  float: right;
}
</style>
