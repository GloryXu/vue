<template>
  <div style="text-align: center">
    <el-table :data="tableData" style="width: 30%;font-size: large;margin-left: 35%;" stripe @row-click="handleClick">
      <el-table-column prop="chapter" label="章节" width="180"></el-table-column>
      <el-table-column prop="description" label="描述" width="180"></el-table-column>
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
          {chapter: '2', description: '数据绑定'},
          {chapter: '3', description: '数据绑定'},
          {chapter: '4', description: '数据绑定'},
          {chapter: '5', description: '数据绑定'}
        ]
      }
    },
    methods: {
      handleClick(row) {
        let chapter = row.chapter;
        let name;
        switch (chapter) {
          case '2': {
            name = 'dataBind';
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
