<template>
  <div>
    <el-table :data="tableData"
              style="width: 100%;font-size: large;"
              border
              stripe>
      <el-table-column align="left" prop="chapter" label="序号" minWidth="100px"></el-table-column>
      <el-table-column align="left" prop="description" label="内容" minWidth="180px"></el-table-column>
      <el-table-column align="left" label="操作" minWidth="100px">
        <template slot-scope="scope">
          <el-button
            @click="handleClick(scope.row)"
            type="text"
            size="small">查看</el-button>
        </template>
      </el-table-column>
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
          {chapter: '998', description: 'GOJS画图初探'},
          {chapter: '999', description: 'PROMISE用法与前端xlsx组件上传文件的组合使用'}
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
          case '998': {
            name = 'gojs';
            break;
          }
          case '999': {
            name = 'promiseAndFileUpload';
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
