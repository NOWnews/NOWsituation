<template>
  <div :class="['content-column', 'full-height', types[pageIndex]]">
    <div class="title"> {{month}} 月{{name}}</div>
    <div class="flexbox full-height">
      <div class="box column-1 border">
        <chart :height="height" :width="width" :type="'pie'" :data="thisYearChart" :options="options"></chart>
        <div class="text-box">
          <div class="text-center"> {{ labels[0] }} </div>
          <div class="text-center"> {{ thisYearData[0] }} %</div>
        </div>
      </div>
      <div class="box column-1 border">
        <chart :height="height" :width="width" :type="'pie'" :data="thisMonthChart" :options="options"></chart>
        <div class="text-box">
          <div class="text-center"> {{ labels[1] }} </div>
          <div class="text-center"> {{ thisMonthData[0] }} %</div>
        </div>
      </div>
      <div class="box column-1 border">
        <chart :height="height" :width="width" :type="'pie'" :data="nextMonthChart" :options="options"></chart>
        <div class="text-box">
          <div class="text-center"> {{ labels[2] }} </div>
          <div class="text-center"> {{ nextMonthData[0] }} %</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { map as _map } from 'lodash'
  import Chart from 'vue-bulma-chartjs'
  import Vue from'vue';
  function getDefaultFormt() {
    return {
      labels: [null, null],
      datasets: [{
        data: "",
        backgroundColor: [],
        borderColor: ['#12225C', '#12225C'],
        borderWidth: 5,
      }]
    }
  }

  function formatData(revenueRate) {
    let result = _map(types, (type) => {
      const data = revenueRate[type];
      const { name } = data;

      let rateValues = _map(labels, (key) => {
        return parseInt(data[key], 10);
      });

      return {
        name,
        rateValues,
      };

    });
    return result;
  }
  export default {
    created () {
      setInterval(() => {
        // 取得資料
        let colors = ['#a08f16', '#58b431', '#dd9900', '#2271F8'];
        let item = this.originData[this.types[this.pageIndex]];
        let { name, thisYearAR, thisMonthAR, nextMonthAR } = item;
        this.name = name;

        let thisYear = parseInt(thisYearAR, 10);
        let thisMonth = parseInt(thisMonthAR, 10);
        let nextMonth = parseInt(nextMonthAR, 10);

        // 設定值
        Vue.set(this.pieColor, 0, colors[this.pageIndex]);
        Vue.set(this.thisYearData, 0, thisYear);
        Vue.set(this.thisYearData, 1, thisYear > 100 ? 0 : 100 - thisYear);
        Vue.set(this.thisMonthData, 0, thisMonth);
        Vue.set(this.thisMonthData, 1, thisMonth > 100 ? 0 : 100 - thisMonth);
        Vue.set(this.nextMonthData, 0, nextMonth);
        Vue.set(this.nextMonthData, 1, nextMonth > 100 ? 0 : 100 - nextMonth);

        // 處理三個輪播
        if (this.pageIndex == 3) {
          this.pageIndex = 0;
          return;
        }
        this.pageIndex++;
      }, 10000)
    },
    components: {
      Chart,
    },
    computed: {
      thisYearChart () {
        let defaultData = getDefaultFormt();
        defaultData.datasets[0].backgroundColor = this.pieColor;
        defaultData.datasets[0].data = this.thisYearData;
        return defaultData;
      },
      thisMonthChart () {
        let defaultData = getDefaultFormt();
        defaultData.datasets[0].backgroundColor = this.pieColor;
        defaultData.datasets[0].data = this.thisMonthData;
        return defaultData;
      },
      nextMonthChart () {
        let defaultData = getDefaultFormt();
        defaultData.datasets[0].backgroundColor = this.pieColor;
        defaultData.datasets[0].data = this.nextMonthData;
        return defaultData;
      }
    },
    data () {
      return {
        pageIndex: 0,
        types: ['total', 'salesTeam1', 'salesTeam2', 'authorizationAndDfp'],
        pieColor: ['#58FEE8', '#151DA0'],
        thisYearData: [0, 100],
        thisMonthData: [0, 100],
        nextMonthData: [0, 100],
        width: 100,
        height: 100,
        name: "",
        labels: ['今年度', '當月', '次月'],
        options: {
          tooltips: {
            enabled: false,
          },
          legend: {
            display: false,
          },
          responsive: true,
          borderWidth: 2,
        },
      }
    },
    props: {
      originData: {
        type: Object,
        required: true,
      },
      month: {
        type: Number,
      },
    },
  }
</script>

<style lang="scss" scoped>
  .column-1 {
    background: #12225C;
    padding: 0 3%;
  }
  .content-column.total {
    .title {
      background: #2271F8;
    }
    .chartjs {
      border-color: #2271F8;
    }
  }

  .content-column.salesTeam1 {
    .title {
      background: #a08f16;
    }
    .chartjs {
      border-color: #a08f16;
    }
  }

  .content-column.salesTeam2 {
    .title {
      background: #58b431;
    }
    .chartjs {
      border-color: #58b431;
    }
  }

  .content-column.authorizationAndDfp {
    .title {
      background: #dd9900;
    }
    .chartjs {
      border-color: #dd9900;
    }
  }

  .text-box {
    font-size: 110%;
    padding-top: 1vh;
  }
  .box {
    justify-content: center;
    align-items: center;;
  }
  canvas.chartjs {
    margin-top: 10%;
    border: 3px solid #58FEE8;
    border-radius: 50%;
  }

  @media screen and (min-width: 400px) and (max-width: 800px) {
    .text-box {
      font-size: 100%;
    }

    canvas.chartjs {
      border-width: 2px;
    }
  }

</style>
