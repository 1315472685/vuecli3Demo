<template>
  <div class="element">
    <div class="header">
      <el-tag>标签一</el-tag>
      <el-tag type="success">标签二</el-tag>
      <el-tag type="info">标签三</el-tag>
      <el-tag type="warning">标签四</el-tag>
      <el-tag type="danger">标签五{{value2}}</el-tag>
      <hr />
      <el-select v-model="value2" clearable placeholder="请选择">
        <el-option label="黄金糕1" value="1"></el-option>
        <el-option label="黄金糕2" value="2"></el-option>
        <el-option label="黄金糕3" value="3"></el-option>
        <el-option label="黄金糕4" value="4"></el-option>
      </el-select>
    </div>
  </div>
</template>
<script>
export default {
  name: 'elementVue',
  data () {
    return {
      options: [
        {
          value: '1',
          label: '黄金糕'
        },
        {
          value: '2',
          label: '双皮奶'
        },
        {
          value: '3',
          label: '蚵仔煎'
        },
        {
          value: '4',
          label: '龙须面'
        },
        {
          value: '5',
          label: '北京烤鸭'
        }
      ],
      value2: '1'
    }
  },
  created () {
    let a = { options: 1, value2: 0, c: 33 };
    ({ ...this._data } = { ...a })
    console.log(this._data)
  }
}
</script>
