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

  export default {
    created() {
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

        this.ta.female = Math.round(gender.female * 1.4);
        this.ta.male = 100 - this.ta.female;
        // 為了讓比例約為 66 : 34
        // this.ta.male = gender.male;
        // this.ta.female = gender.female;
        this.ta.ageBracket = ageBracket;
        Cookies.set('ta', this.ta);

        this.totalPageView = totalPageView.categories;
        this.headline = allNewsHaedlines;
        this.alexa = alexa;
        if (adminApi) {
          this.other = adminApi.fans;
        }

        this.deviceRate = deviceRate;

        /*
          22:00 - 12:30 mobile x2
          14:30 - 17:30 mobile x2

          代表以下區間為正常值
          12:31 - 14:30
          17:31 - 22:00
        */
        const date = new Date()
        const h = date.getHours();
        const min = date.getMinutes();
        if (
            (h === 12 && min > 30) || (h === 13) || (h === 14 && min <= 30) ||
            (h === 17 && min > 30) || (h > 17 && h <= 22)
        ) {
          // 流量尖峰時間，不需要加乘
          return;
        }
        this.deviceRate.mobile = parseInt(deviceRate.mobile) * 2;


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
