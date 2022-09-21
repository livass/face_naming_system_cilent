<template>

<div>
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

</div>
</template>

<script>
export default {
  data() {
    return {
      fullscreenLoading: false,
      filelist:[],
      headers: {
        aa: "bb"
      },
      data:{
        aa:"cc"
      },
      licenseImageUrl:''
      
    };
  },
  methods:{
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
  }
}


</script>

