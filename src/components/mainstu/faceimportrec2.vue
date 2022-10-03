<template>

<div>
<el-row type="flex" class="row-bg">
  <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light"></div>人脸更新</el-col>
  <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
</el-row>

<div>
     <p> </p>
</div>

<el-upload
  class="upload-demo"
  drag
  action="http://localhost:3000/uploadpic_test/"
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
        usr:localStorage.getItem("usr")
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
      }
      else{
        this.$message({
					message: '上传失败!',
					type: 'error'
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

