<template>
  <div class="content-column">
    <div class="title">使用裝置比例</div>
    <div class="full-height border">
      <div id="piechart"></div>
    </div>
  </div>
</template>

<script>

export default {
  created () {
    // 在 MainView.vue 宣告
    // google.charts.load('45', {'packages':['corechart']});
    google.charts.setOnLoadCallback(this.drawDeviceChart);
  },
  methods: {
    drawDeviceChart () {
      let dataValue = [
        ['Device', 'User'],
        ['手機', parseInt(this.deviceData.mobile, 10) * 7],
        ['桌機', parseInt(this.deviceData.desktop, 10) * 7],
        ['平板', parseInt(this.deviceData.tablet, 10) * 7]
      ];
      let data = google.visualization.arrayToDataTable(dataValue);

      var options = {
        backgroundColor: '#12225C',
        legend: {
          alignment: 'end',
          textStyle: {
            color: '#fff',
            bold: true
          },
          position: 'labeled'
        },
        chartArea:{
          width:'90%',
          height:'60%'
        },
        pieSliceText: 'none',
        tooltip: {
          trigger: 'focus'
        },
        slices: {
          0: {color: '#4AC8D0'},
          1: {color: '#F1D15D'},
          2: {color: '#E48744'}
        }
      };

      if (!this.chart) {
        this.chart = new google.visualization.PieChart(document.getElementById('piechart'));
      }
      this.chart.draw(data, options);
    }
  },
  props: {
    deviceData: {
      type: Object,
      required: true,
      default() {
        return {
          desktop: 0,
          tablet: 0,
          mobile: 0
        };
      },
    }
  },
  data () {
    return {
      chart: null
    }
  },
  watch: {
    deviceData: 'drawDeviceChart',
  }
}

</script>

<style lang="scss" scoped>
#piechart {
  width: 100%;
  height: 100%;
  background: #12225C;
}
.title {
  background: #E84927;
}
</style>
