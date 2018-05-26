<template>
  <section>
    这是Home，需要列出设备的资产类别饼图，人员维修量雷达图，医用气体管理
    <el-row>
      <el-col :span="12"><DeviceStatistics/></el-col>
      <el-col :span="12"><RepairStatistics/></el-col>
    </el-row>
  </section>
</template>
<script>
import DeviceStatistics from './DeviceStatistics'
import RepairStatistics from './RepairStatistics'

export default {
  components: {
    DeviceStatistics,
    RepairStatistics
  }
}
</script>
