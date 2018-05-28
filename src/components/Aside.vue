<template>
  <section>
    <el-menu
      default-active="home"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose" v-bind:router="true">
      <el-menu-item index="home">
        <i class="el-icon-menu"></i>
        <span slot="title">系统首页</span>
      </el-menu-item>

      <el-submenu index="device">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>设备管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title"></template>
          <el-menu-item index="device-1">设备列表</el-menu-item>
          <el-menu-item index="device-2">安装管理</el-menu-item>
          <el-menu-item index="device-2">验收管理</el-menu-item>
          <el-menu-item index="device-3">培训管理</el-menu-item>
          <el-menu-item index="device-3">档案管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-message"></i>
          <span>事件管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title"></template>
          <el-menu-item index="1-1">维修事件</el-menu-item>
          <el-menu-item index="maintancestatistics">保养事件</el-menu-item>
          <el-menu-item index="measurementstatistics">计量事件</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-tickets"></i>
          <span>报表统计</span>
        </template>
        <el-menu-item index="devicestatistics">设备统计</el-menu-item>
        <el-menu-item index="repairstatistics">维修统计</el-menu-item>
        <el-menu-item index="scrapequipmentstatistics">报废设备统计</el-menu-item>
        <el-menu-item index="repaircontji-3">效益分析</el-menu-item>
        <el-menu-item index="repaircontji-4">质量安全</el-menu-item>
        <el-menu-item index="repaircontji-5">医用气体</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
          <template slot="title">
          <i class="el-icon-setting"></i>
          <span>基础数据</span>
        </template>
        <el-menu-item index="basedata-1">
          设备类别
        </el-menu-item>
        <el-menu-item index="basedata-2">
          人员管理
        </el-menu-item>
      </el-submenu>
                <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>模版设计</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </section>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
