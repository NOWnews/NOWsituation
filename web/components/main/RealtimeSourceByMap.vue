<template>
  <div class="content-column">
    <div class="title">即時流量來源</div>
    <div class="full-height">
      <table class="table">
        <tr>
          <td class="map">
            <div id="world-map"></div>
          </td>
          <td class="detail">
            <div v-for="index in [0, 1, 2, 3, 4, 5, 6, 7]">
              {{ index + 1 }}
              {{ countryData[index] && countryData[index][0] }}
              {{ countryData[index] && countryData[index][1] }}%
            </div>
          </td>
        </tr>
      </table>
      <div id="world-map"></div>
    </div>
  </div>
</template>

<script>

import { thousandthWithMaigcNumber } from '../../lib/filter';
export default {
  created () {
    // 在 MainView.vue 宣告了
    // google.charts.load('45', {'mapsApiKey': 'AIzaSyCPjNkHszcMWAuHbOu5bGa91ilHDHpPQSU', 'packages':['geochart']});
    google.charts.setOnLoadCallback(this.drawRegionsMap);

  },
  filters: {
    thousandthWithMaigcNumber,
  },
  methods: {
    drawRegionsMap () {
      let dataValue = this.countryData.slice();
      dataValue.unshift(['Country', 'PageView']);
      let data = google.visualization.arrayToDataTable(dataValue);
      let options = {
        backgroundColor: '#12225C',
        legend: 'none',
        colorAxis: {colors: ['#66cccc', '#3055a2']},
        tooltip: {
          trigger: 'selection',
        },
      };

      if (!this.chart) {
        this.chart = new google.visualization.GeoChart(document.getElementById('world-map'));
      }

      this.chart.draw(data, options);

    }
  },
  props: {
    countryData: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    }
  },
  data () {
    return {
      chart: null
    }
  },
  watch: {
    countryData: 'drawRegionsMap',
  }
}
</script>

<style lang="scss" scoped>
.title {
  background: #78B720;
}
.full-height {
  overflow: hidden;
}

table.table {
  td.map {
    border-right: none;
    width: 60%;
    max-width: 60%;
    #world-map {
      width: 31vw;
      height: 34vh;
    }
  }
  td.detail {
    width: 40%;
    div {
      font-size: 130%;
      padding: 2.5% 0;
    }
  }
}

@media screen and (min-width: 400px) and (max-width: 800px) {
  table.table {
    td.map {
      vertical-align: top;
      padding-top: 3%;
      #world-map {
        width: 27vw;
        height: 30vh;
      }
    }
    td.detail > div{
        font-size: 110%;
        padding: 0.7% 0;
    }
  }
}
@media screen and (min-width: 400px) and (max-width: 600px) {
  table.table td.detail > div {
    font-size: 9px;
    padding: 0.5% 0;
  }

}

</style>
