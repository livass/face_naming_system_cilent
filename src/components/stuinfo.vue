<template>
<div>
  
<el-row :gutter="20">
  <el-col :span="1"><div class="grid-content bg-purple">
     <el-button type="success" round plain>全部点名</el-button>
  </div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<div>
  <p>  </p>
</div>
  <el-table
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="date"
      label="日期"
      width="300">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="300">
    </el-table-column>
    <el-table-column
      prop="sex"
      label="性别"
      width="300">
    </el-table-column>
    <el-table-column
      prop="dorm"
      label="宿舍"
      width="300">
    </el-table-column>
    <el-table-column
      prop="student_number"
      label="学号"
      width="250">
    </el-table-column>
        <el-table-column
      fixed="right"
      label="操作"
      width="200">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">点名</el-button>
        <el-button type="text" size="small">人脸录入</el-button>
      </template>
    </el-table-column>
  </el-table>

//对话框
<el-dialog title="人脸点名" :visible.sync="dialogTableVisible">
  <el-row type="flex" class="row-bg">
  <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light"></div>文件上传</el-col>
  <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
</el-row>

<div>
     <p> </p>
</div>

<el-upload
  class="upload-demo"
  drag
  action="http://localhost:3000/uploadpic/"
  :headers="headers"
  :data="data"
  :file-list="filelist"
  :auto-upload="true"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :before-upload="beforeAvatarUpload"
  :on-success="handleAvatarSuccess"
  :on-error="handlerror"
  :limit="1"
  :on-progress="progress"
  list-type="picture"
  v-loading.fullscreen.lock="fullscreenLoading"
  >
  <img v-if="licenseImageUrl" :src="licenseImageUrl" alt="" width="350px"
                 height="170px">
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">将照片拖到此处，或<em>点击上传</em></div>
  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件,且不超过500kb</div>
  </el-upload>


<div>
     <p> </p>
</div>

<el-row type="flex" class="row-bg">
  <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light"></div>
  </el-col>
  <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
</el-row>
</el-dialog>
//

</div>

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
      beforeAvatarUpload(file){
      //图片上传认证
     
    },

    handlePreview(file){
      console.log(file)
    },

    handleRemove(file,filelist){
      this.$message({
					message: '成功移除！',
					type: 'alert'
				});
    },


    handleAvatarSuccess(res,file,fileList){
      
      if(res.code==0){
       this.$message({
					message: '上传成功！',
					type: 'success'
				});
      console.log(res)
      this.$confirm('是否上传进行人脸识别, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
          //axios交互
          this.$axios.post(this.GLOBAL.config_ip+'/facerec/',{
          name:res.name
        }).then((res1)=>{
          console.log(res1.data.result)
          if(res1.data.result==0){
            this.$message({
            type: 'success',
            message: '识别成功!'
          });
          loading.close();
          }

          else{
            this.$message({
            type: 'warning',
            message: '识别失败!'
          });
          loading.close();
          }

        }).catch(function(err){//失败
          this.$message({
            type: 'warning',
            message: '错误!'
          });
        })
        //axios交互
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消识别'
          });          
        });
      }
      
    },

    handlerror(err, file, fileList){
      
      this.$message({
					message: '上传失败！',
					type: 'error'
				});
				console.log(err);
      
    },


    progress(event, file, fileList){
      
    },
    handleClick(index){
      this.dialogTableVisible=true
    },
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 0) {
          return 'warning-row';
        } else if (rowIndex === 1) {
          return 'success-row';
        } else if (rowIndex === 2) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        } else if (rowIndex === 4) {
          return 'warning-row';
        } else if (rowIndex === 5) {
          return 'success-row';
        } else if (rowIndex === 6) {
          return 'warning-row';
        } else if (rowIndex === 7) {
          return 'success-row';
        } else if (rowIndex === 8) {
          return 'warning-row';
        } else if (rowIndex === 9) {
          return 'success-row';
        } else if (rowIndex === 10) {
          return 'warning-row';
        } else if (rowIndex === 11) {
          return 'success-row';
        } else if (rowIndex === 12) {
          return 'warning-row';
        } else if (rowIndex === 13) {
          return 'success-row';
        } else if (rowIndex === 14) {
          return 'warning-row';
        } else if (rowIndex === 15) {
          return 'success-row';
        } else if (rowIndex === 16) {
          return 'warning-row';
        } else if (rowIndex === 17) {
          return 'success-row';
        }
        return '';
      }
    },
    data() {
      return {
      dialogTableVisible:false,
      //上传
      fullscreenLoading: false,
      filelist:[],
      headers: {
        aa: "bb"
      },
      data:{
        aa:"cc"
      },
      licenseImageUrl:'',
      //上传
        tableData: [{
          date: '2022-2023第一学期',
          name: '阮荣耀',
          sex:'男',
          dorm:'泽园三站',
          student_number: 'MP2209113',
        }, {
          date: '2022-2023第一学期',
          name: '孙权',
          sex:'男',
          dorm:'泽园三站',
          student_number: 'MP2209114'
        }, {
          date: '2022-2023第一学期',
          name: '王猛',
          sex:'男',
          dorm:'泽园三站',
          student_number: 'MP2209115',
        }, {
          date: '2022-2023第一学期',
          name: '俞嘉雯',
          sex:'女',
          dorm:'泽园一站',
          student_number: 'MP2209116',
        },{
          date: '2022-2023第一学期',
          name: '梁琦玮',
          sex:'女',
          dorm:'泽园一站',
          student_number: 'MP2209117',
        },{
          date: '2022-2023第一学期',
          name: '杨博帆',
          sex:'男',
          dorm:'泽园三站',
          student_number: 'MP2209118',
          },{
          date: '2022-2023第一学期',
          name: '周艺轩',
          sex:'男',
          dorm:'泽园三站',
          student_number: 'MP2209119',
          },{
          date: '2022-2023第一学期',
          name: '孙勇',
          sex:'男',
          dorm:'泽园三站',
          student_number: 'MP2209120',
          },{
          date: '2022-2023第一学期',
          name: '周少杰',
          sex:'男',
          dorm:'泽园三站',
          student_number: 'MP2209121',
          },{
          date: '2022-2023第一学期',
          name: '陈坤林',
          sex:'女',
          dorm:'泽园一站',
          student_number: 'MP2209122',
          },{
          date: '2022-2023第一学期',
          name: '程纪元',
          sex:'男',
          dorm:'泽园三站',
          student_number: 'MP2209123',
          },{
          date: '2022-2023第一学期',
          name: '陈楠楠',
          sex:'女',
          dorm:'泽园一站',
          student_number: 'MP2209124',
          },{
          date: '2022-2023第一学期',
          name: '王定安',
          sex:'男',
          dorm:'泽园三站',
          student_number: 'MP2209125',
          },{
          date: '2022-2023第一学期',
          name: '戴然臣',
          sex:'男',
          dorm:'泽园三站',
          student_number: 'MP2209126',
          },{
          date: '2022-2023第一学期',
          name: '刘跨越',
          sex:'男',
          dorm:'泽园三站',
          student_number: 'MP2209127',
          },{
          date: '2022-2023第一学期',
          name: '张渭',
          sex:'男',
          dorm:'泽园三站',
          student_number: 'MP2209128',
          },{
          date: '2022-2023第一学期',
          name: '宁涛',
          sex:'男',
          dorm:'泽园三站',
          student_number: 'MP2209129',
        }]
      }
    }
    
  }
</script>