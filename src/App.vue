<template>
  <div id="app">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="400px"><Aside></Aside></el-aside>
        <el-container>
          <el-main>
            <!-- <img src="./assets/logo.png"> -->
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
export default {
  name: 'App',
  components: {
    Aside
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
