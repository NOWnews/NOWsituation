<template>
  <div id="container" class="content-column"
    v-bind:style="{'max-height': '95vh', 'height': '95vh'}">
    <div class="flexbox full-height column-2 row-1">
      <div class="column-2">
        <RevenueRate :originData="revenueRate" :month="month"/>
      </div>
      <div class="column-3 flexbox">
        <div class="column-1">
          <Top3Salesperson v-show="isTopSales" :data="topSales" :month="month"/>
          <BackSeat3Salesperson v-show="!isTopSales" :data="backSeatSales" :month="month"/>
        </div>
        <div class="column-2">
          <Top3News :data="top3News"/>
        </div>
      </div>
    </div>
    <div class="flexbox full-height column-3 row-2">
      <div class="column-2">
        <AnnounceBoard :data="annoucneMessages"/>
      </div>
      <div class="column-3 flexbox">
        <AboutNowNews />
      </div>
    </div>
    <LoginView v-show="!isLogged" />
  </div>
</template>

<script>
  import Cookies from 'js-cookie';
  import { values as _values } from 'lodash';
  import { sitiuationChannel } from '../lib/pusher';
  import LoginView from './LoginView.vue';
  import {
    RevenueRate,
    AnnounceBoard,
    Top3Salesperson,
    BackSeat3Salesperson,
    Top3News,
    AboutNowNews,
  } from '../components/about';


  export default {
    created() {
      window.setInterval(() => {
        this.isTopSales = !this.isTopSales;
      }, 10000);

      function onChange({ adminApi, top3News}) {
        this.top3News = top3News;
        if (!adminApi) { return };
        let { annoucneMessages, achievementRate, month, topSales } = adminApi;
        let messages = ['暫無'] ;

        if (annoucneMessages && annoucneMessages.trim() !== "") {
          messages = annoucneMessages.split(',');
        }
        this.revenueRate = achievementRate;
        this.annoucneMessages = messages;
        this.month = parseInt(month);
        this.topSales = _values(topSales) || [];
      }

      sitiuationChannel.bind('sitiuationData', onChange.bind(this));

    },
    components: {
      LoginView,
      RevenueRate,
      AnnounceBoard,
      Top3Salesperson,
      BackSeat3Salesperson,
      Top3News,
      AboutNowNews,
    },
    data () {
      return {
        isLogged: (Cookies.get("isLogged") === 'true'),
        isTopSales: true,
        annoucneMessages: ['暫無'],
        top3News: ['--', '--', '--'],
        topSales: [{
          name: '---',
          img: 'dist/default-img.png',
        },{
          name: '---',
          img: 'dist/default-img.png',
        },{
          name: '---',
          img: 'dist/default-img.png',
        }],
        backSeatSales: ['---', '---', '---'],
        month: 0,
        revenueRate: {
          total: {
            name: "總業績達成率",
            year: "",
            month: "",
            thisYearAR: 0,
            thisMonthAR: 0,
            nextMonthAR: 0
          },
          salesTeam1: {
            name: "業務一部達成率",
            year: "",
            month: "",
            thisYearAR: 0,
            thisMonthAR: 0,
            nextMonthAR: 0
          },
          salesTeam2: {
            name: "業務二部達成率",
            year: "",
            month: "",
            thisYearAR: 0,
            thisMonthAR: 0,
            nextMonthAR: 0
          },
          authorizationAndDfp: {
            name: "聯播網 + 授權",
            year: "",
            month: "",
            thisYearAR: 0,
            thisMonthAR: 0,
            nextMonthAR: 0
          },
        },
      }
    }
  }
</script>

<style lang="scss">
  @import '../assets/style/basic';
</style>
<style lang="scss" scoped>
.row-1 {
  height: 45%;
  weight: 100%;
}
.row-2 {
  height: 65%;
  align-content:stretch;
}
</style>
