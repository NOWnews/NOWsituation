<template>
  <div :class="['content-column', 'full-height', (item.type || 'total')]">
    <div class="title"> {{month}} 月{{ item.name }}</div>
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
  function getUIDefaultFormt() {
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

  export default {
    created () {
      setInterval(() => {
        // Pusher 資料還沒傳遞進來時，先不做任何事
        if (this.originData.length === 0) return;

        // 取得資料
        let colors = ['#dd9900', '#a08f16', '#58b431', '#58FEE8', '#dd3366', '#2271F8'];
        let item =this.originData[this.pageIndex];
        let { name, thisYearAR, thisMonthAR, nextMonthAR } = item;
        this.item = item;

        let thisYear = parseInt(thisYearAR, 10);
        let thisMonth = parseInt(thisMonthAR, 10);
        let nextMonth = parseInt(nextMonthAR, 10);

        // 設定值
        Vue.set(this.pieColor, 0, colors[this.pageIndex]);
        Vue.set(this.thisYearData, 0, thisYear);
        // 超過一百要歸零圖才會顯示完整的圓 (thisXXX >100 ? 0)
        Vue.set(this.thisYearData, 1, thisYear > 100 ? 0 : 100 - thisYear);
        Vue.set(this.thisMonthData, 0, thisMonth);
        Vue.set(this.thisMonthData, 1, thisMonth > 100 ? 0 : 100 - thisMonth);
        Vue.set(this.nextMonthData, 0, nextMonth);
        Vue.set(this.nextMonthData, 1, nextMonth > 100 ? 0 : 100 - nextMonth);

        // 處理六個輪播(index: 0-5)
        if (this.pageIndex === 5) {
          this.pageIndex = 0;
          return;
        }
        this.pageIndex++;
      }, 5000)
    },
    components: {
      Chart,
    },
    computed: {
      thisYearChart () {
        let defaultData = getUIDefaultFormt();
        defaultData.datasets[0].backgroundColor = this.pieColor;
        defaultData.datasets[0].data = this.thisYearData;
        return defaultData;
      },
      thisMonthChart () {
        let defaultData = getUIDefaultFormt();
        defaultData.datasets[0].backgroundColor = this.pieColor;
        defaultData.datasets[0].data = this.thisMonthData;
        return defaultData;
      },
      nextMonthChart () {
        let defaultData = getUIDefaultFormt();
        defaultData.datasets[0].backgroundColor = this.pieColor;
        defaultData.datasets[0].data = this.nextMonthData;
        return defaultData;
      }
    },
    data () {
      return {
        height: 100,
        item: {},
        labels: ['今年度', '當月', '次月'],
        nextMonthData: [0, 100],
        pageIndex: 0,
        pieColor: ['#dd9900', '#151DA0'],
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
        thisMonthData: [0, 100],
        thisYearData: [0, 100],
        width: 100,
      }
    },
    props: {
      originData: {
        type: Array,
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
      background: #dd9900;
    }
    .chartjs {
      border-color: #dd9900;
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
      background: #58FEE8;
    }
    .chartjs {
      border-color: #58FEE8;
    }
  }

  .content-column.localCenter {
    .title {
      background: #dd3366;
    }
    .chartjs {
      border-color: #dd3366;
    }
  }

  .content-column.project {
    .title {
      background: #2271F8;
    }
    .chartjs {
      border-color: #2271F8;
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
    border: 3px solid #dd9900;
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
