<template>
<div>
  <el-row :gutter="20">
  <el-col :span="2"><div class="grid-content bg-purple">
  </div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">  </div></el-col>
  <el-col :span="6" :offset=15><div class="grid-content bg-purple"></div></el-col>
</el-row>
<div>
  <p>  </p>
</div>
<div id="link">
    <i class="el-icon-house"></i>
<el-link type="success" href='#/login'>退出登录</el-link>
</div>
  <el-table
    :v-loading="loading"
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      fixed="left"
      prop="usr"
      label="学号"
      width="300">
    </el-table-column>
    <el-table-column
      prop="usrname"
      label="学生姓名"
      width="300">
    </el-table-column>
    <el-table-column
      prop="classid"
      label="班级号"
      width="330">
    </el-table-column>
    <el-table-column
      prop="weekid"
      label="周次"
      width="350">
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
        tableData:[],
        fullscreenLoading: false,
        //对话框1所需data---------------------------
      }
},
created:function(){//获取work_name和获取work_code
    // `this` 指向 vm 实例
        this.loading=true
        this.$axios.post(this.GLOBAL.config_ip+'/stugetrec',{
            token:localStorage.getItem("token"),
            usr:localStorage.getItem("usr")
        }).then((res)=>{
            localStorage.setItem("token",res.data.token)
            for(let i=0;i<res.data.name_list.length;i++)
                {
                    arr1[i]=res.data.name_list[i]
                }
            console.log(arr1)
            this.tableData=Array.from(res.data.name_list)
            this.loading=false
            })
},
methods:{
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
      },

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

  .el-dropdown-link {
    cursor: pointer;
    color: rgb(247, 247, 247);
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>