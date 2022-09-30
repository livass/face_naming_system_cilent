<template>
<div>
  <div id="link">
    <i class="el-icon-house"></i>
<el-link type="primary" href='#/login'>退出登录</el-link>
</div>
  <el-table
    :v-loading="loading"
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      fixed="left"
      prop="classid"
      label="课程代码号"
      width="200">
    </el-table-column>
    <el-table-column
      prop="class"
      label="课程名"
      width="500">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="300"
    >
      <template slot-scope="scope">
        <el-button @click="go_class(scope.$index,scope.row)" plain round type="primary" size="small">进入班级</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
var arr1=[];
// eslint-disable-next-line no-unused-vars
var arr2=[];
// eslint-disable-next-line no-unused-vars
export default {
    data() {
      return {
        tableData:[]
        //tableData 
}
},
created:function(){//获取work_name和获取work_code
    // `this` 指向 vm 实例
        this.loading=true
        this.$axios.post(this.GLOBAL.config_ip+'/get_classlist/',{
            token:localStorage.getItem("token"),
            usr:localStorage.getItem("usr")
        }).then((res)=>{
            localStorage.setItem("token",res.data.token)
            for(let i=0;i<res.data.class_list.length;i++)
                {
                    arr1[i]=res.data.class_list[i].classid
                }
                console.log(arr1)
            this.tableData=Array.from(res.data.class_list)
            this.loading=false
            })
},
methods:{
  //抢此订单
  go_class(index){
    
    alert(arr1[index])
    localStorage.setItem("classid",arr1[index])
    location.href=''
  },

  //表格颜色填充
  tableRowClassName({row, rowIndex}) {
    console.log(arr1.length)
        for(let i=0;i<=arr1.length;i++){
            if(i%2==0){
                if(rowIndex===i){
                    return 'success-row';
                }
            }
        }
        return '';
      }
}
}
</script>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>