<template>
  <section>
    <el-row :gutter="20">
      <el-col :span="12"><DeviceStatistics/></el-col>
      <el-col :span="12"><RepairStatistics/></el-col>
      <el-col :span="12"><MaintanceStatistics/></el-col>
      <el-col :span="12"><MeasurementStatistics/></el-col>
      <el-col :span="24">这是Home，需要列出设备的资产类别饼图，人员维修量雷达图，医用气体管理</el-col>
    </el-row>
  </section>
</template>
<script>
import DeviceStatistics from './DeviceStatistics'
import RepairStatistics from './RepairStatistics'
import MaintanceStatistics from './MaintanceStatistics'
import MeasurementStatistics from './MeasurementStatistics'
export default {
  components: {
    DeviceStatistics,
    RepairStatistics,
    MaintanceStatistics,
    MeasurementStatistics
  }
}
</script>
