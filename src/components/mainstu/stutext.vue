<template>
<el-row >
    <p><font size="6">文档说明</font><br/>
       一、<b>环境配置</b><br/>
       1、<b>Nodejs环境配置及安装</b><br/>
       （1）官网下载地址：http://nodejs.cn/download/，根据自己电脑选择32位还是64位<br/>
       <img src="../../assets/1.png" alt="官网下载图" width="350" height="200"><br/>
       （2）进行安装，Next直到安装结束<br/>
       （3）检查Nodejs运行路径是否正确<br/>
       <img src="../../assets/2.png" alt="查看Nodejs路径图" width="350" height="200"><br/>
       （4）Win+R CMD窗口 查看当前Nodejs及npm版本号(npm是绑定Nodejs一起安装的)<br/>
       <img src="../../assets/3.png" alt="查看Nodejs版本图" width="350" height="200"><br/>
       （5）当前Nodejs及npm版本号一定要是匹配的，要注意版本号的匹配（推荐使用低等级的版本）<br/>
       <img src="../../assets/4.png" alt="Nodejs版本是否匹配" width="350" height="200"><br/>
    </p>
    <el-button type="success" @click="back"> 退出登录</el-button >
    </el-row >



</template>

<script>
export default {
  data() {
    return {
      user: '',
      password: ''
    };
  },
  methods:{
    back:function(){
        location.href='#/login'
    }
  }
}
</script>