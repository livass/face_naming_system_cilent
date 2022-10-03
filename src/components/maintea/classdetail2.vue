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
  <el-col :span="6"><div class="grid-content bg-purple">  </div></el-col>
  <el-col :span="6" :offset=15><div class="grid-content bg-purple">
    <el-button @click="recmore" round type="primary" size="small" plain>多脸认证</el-button>
</div></el-col>
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
      width="200">
    </el-table-column>
    <el-table-column
      prop="usrname"
      label="学生姓名"
      width="200">
    </el-table-column>
    <el-table-column
      prop="ifname"
      label="是否点名"
      width="200">
    </el-table-column>
    <el-table-column
      prop="ifrec"
      label="是否识别成功"
      width="200">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="300"
    >
      <template slot-scope="scope">
        <el-button @click="nameit(scope.$index,scope.row)" plain round type="primary" size="small">上传照片认证</el-button>
        <el-button @click="onlinerec(scope.$index,scope.row)" plain round type="primary" size="small">视频认证</el-button>

      </template>
    </el-table-column>
  </el-table>

<!-------------------------------------------上传照片对话框-------------------------------------------------------------------------------------->

<el-dialog title="上传人脸点名" :visible.sync="dialogTableVisible">
  <el-row type="flex" class="row-bg">
  <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light"></div>图片上传</el-col>
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
  <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
</el-row>
</el-dialog>

<!-----------------------------------------------------------------上传照片对话框--------------------------------------------------------------->

<!-----------------------------------------------------------------视频在线认证----------------------------------------------------------------->
<el-dialog title="视频在线人脸点名" :visible.sync="dialogTableVisible2">
<template>
  <div class="camera_outer">
    <video id="videoCamera" :width="videoWidth" :height="videoHeight" autoplay></video>
    <canvas style="display:none;" id="canvasCamera" :width="videoWidth" :height="videoHeight"></canvas>
    <div v-if="imgSrc" class="img_bg_camera">
      <p>效果预览</p>
      <img :src="imgSrc" alt class="tx_img" />
    </div>
    <div class="button">
      <el-button @click="getCompetence()">打开摄像头</el-button>
      <el-button @click="stopNavigator()">关闭摄像头</el-button>
      <el-button @click="setImage()">拍照</el-button>
    </div>
  </div>
</template>
    
</el-dialog>

<!-----------------------------------------------------------------视频在线认证----------------------------------------------------------------->



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
        dialogTableVisible:false,
        filelist:[],
        headers: {
        aa: "bb"
      },
      data:{
        stuusr:localStorage.getItem("stuusr")
      },
      licenseImageUrl:'',
    //----------------------------------
    //对话框2所需data---------------------------
      dialogTableVisible2:false,
      videoWidth: 250,
      videoHeight: 350,
      imgSrc: "",
      thisCancas: null,
      thisContext: null,
      thisVideo: null,
      openVideo:false
    //---------------------------------------
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
  //多脸识别
  recmore(){
    this.dialogTableVisible=true
  },
  //点名按钮事件
  nameit(index,row){
    localStorage.setItem("stuusr",arr1[index].usr)
    this.dialogTableVisible=true
  },
  //视频在线识别事件
  onlinerec(index,row){
    this.dialogTableVisible2=true
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

//选择周次-----------------------------------
   handleCommand(command) {
        localStorage.setItem("weekid",command)
        console.log(command)
        location. reload()
        location.href="#/classdetail2"
      },

//-------图片上传---------------------------------------------------------------------------------------------------------
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
          this.$axios.post(this.GLOBAL.config_ip+'/tearecbyusr/',{
          name:res.name,
          stuusr:localStorage.getItem("stuusr"),
          classid:localStorage.getItem("classid"),
          weekid:localStorage.getItem("weekid")
        }).then((res1)=>{
          console.log(res1.data.result)
          if(res1.data.code==0){
            this.$message({
            type: 'success',
            message: '识别成功!'
          });
          loading.close();
          location.reload()
          this.filelist=[],
          this.dialogTableVisible=false
          }

          else{
            this.$message({
            type: 'warning',
            message: '识别失败!'
          });
          loading.close();
          this.filelist=[],
          this.dialogTableVisible=false

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
//图片上传-----------------------------------------------------------------------------------------------------------
//视频在线
getCompetence() {
      var _this = this;
      _this.thisCancas = document.getElementById("canvasCamera");
      _this.thisContext = this.thisCancas.getContext("2d");
      _this.thisVideo = document.getElementById("videoCamera");
      _this.thisVideo.style.display = 'block';
      // 获取媒体属性，旧版本浏览器可能不支持mediaDevices，我们首先设置一个空对象
      if (navigator.mediaDevices === undefined) {
        navigator.mediaDevices = {};
      }
      // 一些浏览器实现了部分mediaDevices，我们不能只分配一个对象
      // 使用getUserMedia，因为它会覆盖现有的属性。
      // 这里，如果缺少getUserMedia属性，就添加它。
      if (navigator.mediaDevices.getUserMedia === undefined) {
        navigator.mediaDevices.getUserMedia = function(constraints) {
          // 首先获取现存的getUserMedia(如果存在)
          var getUserMedia =
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.getUserMedia;
          // 有些浏览器不支持，会返回错误信息
          // 保持接口一致
          if (!getUserMedia) {//不存在则报错
            return Promise.reject(
              new Error("getUserMedia is not implemented in this browser")
            );
          }
          // 否则，使用Promise将调用包装到旧的navigator.getUserMedia
          return new Promise(function(resolve, reject) {
            getUserMedia.call(navigator, constraints, resolve, reject);
          });
        };
      }
      var constraints = {
        audio: false,
        video: {
          width: this.videoWidth,
          height: this.videoHeight,
          transform: "scaleX(-1)"
        }
      };
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
          // 旧的浏览器可能没有srcObject
          if ("srcObject" in _this.thisVideo) {
            _this.thisVideo.srcObject = stream;
          } else {
            // 避免在新的浏览器中使用它，因为它正在被弃用。
            _this.thisVideo.src = window.URL.createObjectURL(stream);
          }
          _this.thisVideo.onloadedmetadata = function(e) {
            _this.thisVideo.play();
          };
        })
        .catch(err => {
          console.log(err);
        });
    },
    //  绘制图片（拍照功能）
	setImage() {
      var _this = this;
      // canvas画图
      _this.thisContext.drawImage(
        _this.thisVideo,
        0,
        0,
        _this.videoWidth,
        _this.videoHeight
      );
      // 获取图片base64链接
      var image = this.thisCancas.toDataURL("image/jpg");
      _this.imgSrc = image;//赋值并预览图片
    },
    // 关闭摄像头
    stopNavigator() {
      this.thisVideo.srcObject.getTracks()[0].stop();
    },
    // base64转文件，此处没用到
    dataURLtoFile(dataurl, filename) {
      var arr = dataurl.split(",");
      var mime = arr[0].match(/:(.*?);/)[1];
      var bstr = atob(arr[1]);
      var n = bstr.length;
      var u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, { type: mime });
    }
//视频在线
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