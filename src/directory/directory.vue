<template>
  <div style="text-align: center">
    <el-table :data="tableData" style="width: 30%;font-size: large;margin-left: 35%;" stripe @row-click="handleClick">
      <el-table-column prop="chapter" label="序号" width="180"></el-table-column>
      <el-table-column prop="description" label="内容" width="180"></el-table-column>
      <!--<el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        </template>
      </el-table-column>-->
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'directory',
    data() {
      return {
        tableData: [
          {chapter: '1', description: '数据绑定'},
          {chapter: '2', description: '指令'},
          {chapter: '3', description: '计算属性和侦听器'},
          {chapter: '4', description: '数据绑定'}
        ]
      }
    },
    methods: {
      handleClick(row) {
        let chapter = row.chapter;
        let name;
        switch (chapter) {
          case '1': {
            name = 'dataBind';
            break;
          }
          case '2': {
            name = 'command';
            break;
          }
          case '3': {
            name = 'computed';
            break;
          }
        }
        this.$router.push({
          name: name,
          params: {
            license: new Date().getTime()
          }
        });
      }
    }
  }
</script>
<style>

</style>
