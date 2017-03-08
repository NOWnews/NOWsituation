<template>
  <div id="container" :class="{flipped: isFlip}"
    v-bind:style="{'max-height': '99vh', 'height': '99vh'}">
    <div class="main-1 content-column">
      <div class="column-1 flexbox">
        <TimeBlock class="column-2"/>
        <OnlineUser class="column-3" :data="onlineUser"/>
      </div>
      <RealtimeByTrafficType class="column-3" :data="realtimeByTrafficType"/>
      <TotalPageView  class="column-5" :data="totalPageView"/>
    </div>
    <div class="main-2 content-column">
      <Top10News class="column-4" :data="top10News"/>
      <HeadlineAndRSS class="column-5" :headline="headline"/>
    </div>
    <div class="main-3 content-column">
      <TA :data="ta" class="column-2"/>
      <RealtimeSourceByMap :countryData="country" class="column-3"/>
      <div class="flexbox column-2">
        <DeviceRate :deviceData="deviceRate" class="column-1"/>
        <div class="column-2 content-column">
          <Alexa :data="alexa" class="column-3"/>
          <Other :data="other" class="column-4"/>
        </div>
      </div>
    </div>
    <LoginView v-show="!isLogged" />
  </div>
</template>

<script>
  import Cookies from 'js-cookie';
  import { sitiuationChannel } from '../lib/pusher';
  import LoginView from './LoginView.vue';
  import {
    OnlineUser,
    RealtimeByTrafficType,
    TotalPageView,
    Top10News,
    HeadlineAndRSS,
    TA,
    TimeBlock,
    RealtimeSourceByMap,
    DeviceRate,
    Alexa,
    Other,
  } from '../components/main';

  import { setDeviceRate, setSexRate } from '../lib/process';

  export default {
    created() {
      google.charts.load('45', {'mapsApiKey': 'AIzaSyCPjNkHszcMWAuHbOu5bGa91ilHDHpPQSU', 'packages':['geochart', 'corechart']});

      function onChange(data) {
        this.isFlip = !this.isFlip;

        let {
          alexa, allNewsHaedlines, adminApi, totalPageView, country,
          deviceRate, onlineUser, trafficType, top10News, gender,
          ageBracket,
        } = data;

        this.country = country;
        this.onlineUser = onlineUser;
        this.realtimeByTrafficType = trafficType;
        this.top10News = top10News;
        this.alexa = alexa;

        setSexRate(this.ta, gender.female);
        setDeviceRate(this, deviceRate);

        this.ta.ageBracket = ageBracket;
        Cookies.set('ta', this.ta);


        if (totalPageView && totalPageView.length > 0) {
          this.totalPageView = totalPageView;
        }

        if (allNewsHaedlines && allNewsHaedlines.length > 0) {
          this.headline = allNewsHaedlines;
        }

        if (adminApi) {
          this.other = adminApi.fans;
        }

      }

      sitiuationChannel.bind('sitiuationData', onChange.bind(this));
    },
    components: {
      LoginView,
      OnlineUser,
      RealtimeByTrafficType,
      TotalPageView,
      Top10News,
      HeadlineAndRSS,
      TA,
      TimeBlock,
      RealtimeSourceByMap,
      DeviceRate,
      Alexa,
      Other,
    },
    data () {
      function getTa() {
        let ta = Cookies.getJSON('ta');
        if (ta) { return ta };
        return {
            male: 0,
            female: 0,
            ageBracket: [
              {type: '18-24', value: 0},
              {type: '25-34', value: 0},
              {type: '35-44', value: 0},
              {type: '45-54', value: 0},
              {type: '55-64', value: 0},
              {type: '65+', value: 0},
            ],
          }
        }
      return {
        isLogged: (Cookies.get("isLogged") === 'true'),
        isFlip: false,
        onlineUser: 0,
        realtimeByTrafficType: [
          {type: '直接', value: 0},
          {type: '自然', value: 0},
          {type: '社交', value: 0},
          {type: '參照', value: 0},
          {type: '其他', value: 0},
        ],
        totalPageView: [
          {name: '', allTotalPageViews: 0},
          {name: '', allTotalPageViews: 0},
          {name: '', allTotalPageViews: 0},
          {name: '', allTotalPageViews: 0},
          {name: '', allTotalPageViews: 0},
          {name: '', allTotalPageViews: 0},
          {name: '', allTotalPageViews: 0},
          {name: '', allTotalPageViews: 0},
          {name: '', allTotalPageViews: 0},
          {name: '', allTotalPageViews: 0},
          {name: '', allTotalPageViews: 0},
          {name: '', allTotalPageViews: 0},
          {name: '', allTotalPageViews: 0},
          {name: '', allTotalPageViews: 0},
          {name: '', allTotalPageViews: 0},
          {name: '', allTotalPageViews: 0},
        ],
        top10News: [
          '',
          '',
          '',
          '',
          '',
        ],
        headline: [
          {name: '東森新聞雲', title: ''},
          {name: '蘋果日報', title: ''},
          {name: '自由電子報', title: ''},
          {name: '聯合新聞網', title: ''},
          {name: '中時電子報', title: ''},
          {name: '中央社', title: ''},
        ],
        ta: getTa(),
        deviceRate: {
          desktop: 0,
          tablet: 0,
          mobile: 0
        },
        alexa: {
          countryRank: 0,
          globalRank: 0,
        },
        other: {
          line: 0,
          facebook: 0,
          weibo: 0,
        },
        country: [],
      }
    }
  }
</script>

<style lang="scss">
  @import '../assets/style/basic';
</style>
