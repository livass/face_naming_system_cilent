<template>
    <el-container style="height: 650px; border: 1px solid #eee border-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="[]" default-active="activeIndex"
     :router="true"
    >
    <el-submenu index="1">
        <template slot="title"><i class="el-icon-picture"></i>信息录入</template>
        <el-menu-item-group>
          <el-menu-item index="faceimportrec" >人脸录入</el-menu-item>
          <el-menu-item index="faceimportrec2">人脸更新</el-menu-item>
          <el-menu-item index="onlinerec">视频录入</el-menu-item>
        </el-menu-item-group> 
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-info"></i>信息查看</template>
        <el-menu-item-group>
          <el-menu-item index="mynaming" >我的点名</el-menu-item>
          <el-menu-item index="namerec">签到记录</el-menu-item>
        </el-menu-item-group> 
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-menu"></i>系统相关</template>
        <el-menu-item-group>
          <el-menu-item index="stutext">系统说明</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>录入</el-dropdown-item>
          <el-dropdown-item>识别</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>南京审计大学</span>
    </el-header>
    
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>



<script>
  export default {
    data() {
      return {
      }
    },
    mounted(){            
      this.activeIndex = this.$route.path.substring(1,this.$route.path.length);  
  }
    
    
  };
</script>





<style>
  .el-header {
    background-color: #d1dae6;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: rgb(55, 55, 55);
  }
</style>