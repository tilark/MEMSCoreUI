<template>
  <section>
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <td colspan="4" align="center" class="biaoti" height="60">医疗设备保养提醒</td>
        </tr>
        <tr align="center">
          <th>
          </th>
          <td text-align="center">一级保养</td>
          <td text-align="center">二级保养</td>
          <td text-align="center">三级保养</td>
        </tr>
      </thead>
      <tbody>
        <tr class="danger">
          <td>一个月内</td>
          <td>23</td>
          <td>45</td>
          <td>60</td>
        </tr>
        <tr class="warning">
          <td>两个月内</td>
          <td>23</td>
          <td>45</td>
          <td>60</td>
        </tr>
        <tr class="info">
          <td>三个月内</td>
          <td>23</td>
          <td>45</td>
          <td>60</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<style>
.biaoti{
  font-family: 微软雅黑;
  font-size: 26px;
  font-weight: bold;
  border-bottom:1px dashed #CCCCCC;
  color: #255e95;
}
</style>
