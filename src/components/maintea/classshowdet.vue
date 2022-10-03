<template>
<div>
  <el-row :gutter="20">
  <el-col :span="2"><div class="grid-content bg-purple">
    <el-dropdown @command="handleCommand">
    <span class="el-dropdown-link">
      选择第几周<i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="1">第一周</el-dropdown-item>
      <el-dropdown-item command="2">第二周</el-dropdown-item>
      <el-dropdown-item command="3">第三周</el-dropdown-item>
      <el-dropdown-item command="4">第四周</el-dropdown-item>
      <el-dropdown-item command="6">第五周</el-dropdown-item>
    </el-dropdown-menu>
    </el-dropdown>
  </div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">

  </div></el-col>
  <el-col :span="6" :offset=14><div class="grid-content bg-purple">
</div></el-col>
</el-row>
<div>
  <p>  </p>
</div>
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
      prop="ifname"
      label="是否点名"
      width="330">
    </el-table-column>
    <el-table-column
      prop="ifrec"
      label="是否签到"
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
        isdisabled:false
        //command:
        //tableData 
}
},
created:function(){//获取work_name和获取work_code
    // `this` 指向 vm 实例
        this.loading=true
        this.$axios.post(this.GLOBAL.config_ip+'/getstuby_cw2',{
            token:localStorage.getItem("token"),
            classid:localStorage.getItem("classid"),
            weekid:localStorage.getItem("weekid")
        }).then((res)=>{
            localStorage.setItem("token",res.data.token)
            for(let i=0;i<res.data.stu_list.length;i++)
                {
                    arr1[i]=res.data.stu_list[i]
                }
                console.log(arr1)
            this.tableData=Array.from(res.data.stu_list)
            this.loading=false
            })
},
methods:{
  //点名
  nameit(index,row){
    let usr=arr1[index].usr
    let classid=localStorage.getItem("classid")
    let weekid=localStorage.getItem("weekid")
    let usrname=arr1[index].usrname
    this.$axios.post(this.GLOBAL.config_ip+'/teanamebyusr/',{
      token:localStorage.getItem("token"),
      usr:usr,
      classid:classid,
      weekid:weekid,
      usrname:usrname
    }).then((res)=>{
      if(res.data.code==0){
        this.$message({
            message: '已发布点名！',
            type: 'success'
          });
        location.reload()
      }
    })
  },

  nameitall(){
    this.isdisabled=true
    alert("aaa")
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
      },
    
   handleCommand(command) {
        localStorage.setItem("weekid",command)
        console.log(command)
        location. reload()
        location.href="#/classshowdet"
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

  .el-dropdown-link {
    cursor: pointer;
    color: rgb(247, 247, 247);
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>