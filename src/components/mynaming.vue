<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="date"
      label="时间"
      width="300">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="300">
    </el-table-column>
    <el-table-column
      prop="class"
      label="课程"
      width="300">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="300">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" size="small" type="primary" round plain>照片录入</el-button>
        <el-button size="small" type="primary" round plain>在线视频识别</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>

<script>
  export default {
    methods: {
      tableRowClassName({row, rowIndex}) {
        for(let i=0;i<=17;i++){
            if(i%2==0){
                if(rowIndex===i){
                    return 'success-row';
                }
            }
        }
        return '';
      }
    },
    data() {
      return {
        tableData: [{
            date:"9:35",
            name:"阮荣耀",
            class:"英语"
        },
        {
            date:"10:35",
            name:"阮荣耀",
            class:"数学"
        },
        {
            date:"11:35",
            name:"阮荣耀",
            class:"数学"
        },
        {
            date:"13:35",
            name:"阮荣耀",
            class:"程序编程"
        },
        {
            date:"14:35",
            name:"阮荣耀",
            class:"算法"
        },
        {
            date:"15:35",
            name:"阮荣耀",
            class:"体育"
        },
        ]
      }
    }
  }
</script>