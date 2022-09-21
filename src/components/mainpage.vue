<template>
    <el-container style="height: 650px; border: 1px solid #eee border-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="[]" default-active="activeIndex"
     :router="true"
    >
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>人脸点名识别</template>
        <el-menu-item-group>
          <el-menu-item index="faceimportrec" >人脸导入识别</el-menu-item>
          <el-menu-item index="onlinerec">视频在线识别</el-menu-item>
        </el-menu-item-group> 
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>学生点名管理</template>
        <el-menu-item-group>
          <el-menu-item index="rider_haveorder">学生信息查看</el-menu-item>
          <el-menu-item index="rider_runhave">润园打印店订单</el-menu-item>
          <el-menu-item index="rider_qinhave">沁园打印店订单</el-menu-item>
          <el-menu-item index="rider_zehave">泽园打印店订单</el-menu-item>
          <el-menu-item index="rider_chenghave">澄园打印店订单</el-menu-item>
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
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
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