<template>
  <div class="EchartPractice">
    <div id="main"></div>
  </div>
</template>

<script>
  export default {
    name: "EchartPractice",
    methods:{
      drawChart() {
        let myEchart = this.$echarts.init(document.getElementById("main"));
        let option = {
          title:{
            text:"点名情况"
          },
          tooltip:{},
          legend:{
            data:["人数"]
          },
          xAxis:{
            data: ["高级程序编程","java","python"]
          },
          yAxis:{},
          series:[{
            name:'人数',
            type:"bar",
            data:[50,60,45]
          }]
        };
        myEchart.setOption(option);
      }
    },
    mounted() {
      this.drawChart();
    }
  }
</script>

<style scoped>
  #main {
    width: 600px;
    height:400px;
    margin: auto;
    margin-top: 100px
  }
</style>
