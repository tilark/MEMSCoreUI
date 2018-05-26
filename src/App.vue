<template>
  <div id="app">
    <el-container>
      <el-header><Header /></el-header>
      <el-container>
        <el-aside width="250px"><Aside></Aside></el-aside>
        <el-container>
          <el-main >
            <router-view/>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>

  </div>
</template>

<script>
import Aside from './components/Aside.vue'
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    Aside,
    Header
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  /* margin-top: 60px; */
}
</style>
