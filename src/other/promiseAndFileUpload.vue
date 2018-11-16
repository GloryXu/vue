<template>
  <div>
    <div style="border: 1px solid #ddd;text-align: left">
      项目需求，一个上传文件跑批的功能，文件中对应着每一个参数，同时要对文件进行校验，<br/>
      前端对文件大小有做2M的控制，但是也不想在后端进行校验，就想着在前端进行解析Excel文件，<br/>
      对于不合理的文件直接拒掉，省去了前端与后端的传输问题。<br/>
      此时，使用XLSX进行解析Excel文件，并作校验.
    </div>
    <br/><br/><br/>
    <div style="border: 1px solid #ddd;text-align: left">
      此demo的样例为当以下情况时才能校验通过，数字向后递增<br/>
      <img src="~@/assets/sample1.jpg"/>
    </div>
    <br/><br/><br/><br/><br/><br/>

    <el-upload
      style="display: inline; margin-left: 10px;margin-right: 10px;"
      action="#"
      ref="fileupload"
      :show-file-list="false"
      :http-request="upLoadChange"
      :before-upload="beforeUpload">
      <el-button size="small" type="primary">上传文件<i class="el-icon-upload el-icon--right"></i></el-button>
    </el-upload>
  </div>
</template>

<script>
import XLSX from 'xlsx'

export default {
  name: 'promiseAndFileUpload',

  data () {
    return {

    }
  },
  methods: {
    readExcel (file) { // 解析Excel
      let _this = this
      return new Promise(function (resolve, reject) {
        const reader = new FileReader()
        reader.onload = (e) => {
          try {
            // 以二进制流方式读取得到整份excel表格对象
            var data = e.target.result, workbook = XLSX.read(data, {type: 'binary'})
          } catch (e) {
            reject(e.message)
          }

          // 表格的表格范围，可用于判断表头是否数量是否正确
          var fromTo = ''
          // 遍历每张表读取
          for (var sheet in workbook.Sheets) {
            let sheetInfos = workbook.Sheets[sheet]
            let locations = []// A1,B1,C1...
            if (workbook.Sheets.hasOwnProperty(sheet)) {
              fromTo = sheetInfos['!ref']// A1:B5
              locations = _this.getLocationsKeys(fromTo)
            }

            for (let i = 0; i < locations.length; i++) {
              let value = sheetInfos[locations[i]].v

              if (value != i) {
                reject(locations[i] + '\'s parameter isn\'t ' + i)
              }
            }
            resolve(true)
          }
        }
        reader.readAsBinaryString(file)
      })
    },
    beforeUpload (file) {
      let _this = this
      return new Promise(function (resolve, reject) {
        _this.readExcel(file).then(result => {
          const isLt2M = file.size / 1024 / 1024 < 2
          if (!isLt2M) {
            _this.$message.error('文件大小不能超过2MB!')
          }
          if (isLt2M && result) {
            resolve('校验成功!')
          } else {
            reject(false)
          }
        }, error => {
          _this.$message.error(error)
          reject(false)
        })
      })
    },
    upLoadChange (content) {
      this.$message.success('文件上传成功!')
    },
    getLocationsKeys (range) { // A1:B5输出 A1,B1...
      let start = 0
      let end = 0
      if (range.indexOf(':') >= 0) {
        start = range.split(':')[0].charAt(0)
        end = range.split(':')[1].charAt(0)
      } else {
        start = range
        end = range
      }

      let result = []
      let startCharCode = start.charCodeAt(0)
      let endCharCode = end.charCodeAt(0)
      for (let i = startCharCode; i <= endCharCode; i++) {
        result.push(String.fromCharCode(i) + '1')
      }
      return result
    }
  }
}
</script>
