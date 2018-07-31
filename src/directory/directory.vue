<template>
  <div style="text-align: center">
    <el-table :data="tableData" style="width: 30%;font-size: large;margin-left: 35%;border: 2px solid red;" stripe>
      <el-table-column prop="chapter" label="章节" width="180"></el-table-column>
      <el-table-column prop="description" label="描述" width="180"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'directory',
    data() {
      return {
        tableData: [
          {chapter: '2', description: '数据绑定'},
          {chapter: '3', description: '数据绑定'},
          {chapter: '4', description: '数据绑定'},
          {chapter: '5', description: '数据绑定'},

        ]
      }
    }
  }
</script>
