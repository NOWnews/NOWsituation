<template>
  <div id="container" class="content-column">
    <div class="flexbox column-1">
      <div>
        <h2>日期</h2>
        <input v-model="date" name="date" type="month">
      </div>
    </div>
    <div class="flexbox column-1">
      <div class="column-1" v-for="item in achievementRate">
        <h2> {{ item.name }}</h2>
        <p>今年
          <input v-model="item.thisYearAR" type="number" />
        </p>
        <p>本月
          <input v-model="item.thisMonthAR" type="number" />
        </p>
        <p>次月
          <input v-model="item.nextMonthAR" type="number" />
        </p>
      </div>
    </div>
    <div class="flexbox column-1">
      <div class="column-2">
        <h2>業績前三名</h2>
        <p>Top1
          <input v-model="topSales.top1.name" type="text" />
          <input v-model="topSales.top1.img" type="text" />
        </p>
        <p>Top2
          <input v-model="topSales.top2.name" type="text" />
          <input v-model="topSales.top2.img" type="text" />
        </p>
        <p>Top3
          <input v-model="topSales.top3.name" type="text" />
          <input v-model="topSales.top3.img" type="text" />
        </p>
      </div>
      <div class="column-1">
        <h2>業績坐板凳</h2>
        <p>Top1
          <input v-model="backSeatSales.back1" type="text" />
        </p>
        <p>Top2
          <input v-model="backSeatSales.back2" type="text" />
        </p>
        <p>Top3
          <input v-model="backSeatSales.back3" type="text" />
        </p>
      </div>
      <div id="announce-borad" class="column-2">
        <h2>佈告欄 <span>(請於間隔處使用「,」分隔不同資訊)</span></h2>
        <textarea v-model="annoucneMessages" rows="5"/>
        </textarea>
      </div>
      <div class="column-1">
        <h2>粉絲團人數</h2>
        <p>Line
          <input v-model="fans.line" type="number" />
        </p>
        <p>臉書微博目前用爬蟲抓取粉絲資料</p>
<!--         <p>臉書
          <input v-model="fans.facebook" type="number" />
        </p>
        <p>微博
          <input v-model="fans.weibo" type="number" /> -->
        </p>
      </div>
    </div>
    <div id="submit-box" class="flexbox column-1">
      <button v-on:click="onSubmit">送出</button>
    </div>
    <LoginView v-show="!isLogged" />
  </div>
</template>

<script>
import Cookies from 'js-cookie';
import _ from 'lodash';
import moment from 'moment';
import fetchival from 'fetchival';
import LoginView from './LoginView.vue';
import { apiServer } from '../../config';
const url = `${apiServer}/admin`;


export default {
  beforeCreate () {
    fetchival(url).get()
    .then(({ achievementRate, annoucneMessages, topSales, backSeatSales, fans, year, month }) => {
      if (year && month) {
        this.date = `${year}-${month}`;
        this.achievementRate = achievementRate;
        this.topSales = topSales;
        this.backSeatSales = backSeatSales;
        this.fans = fans;
        this.annoucneMessages = annoucneMessages;
      }
    })
    .catch((err) => {
      console.error(err)
    });
  },
  components: {
    LoginView,
  },
  data () {
    return {
      isLogged: (Cookies.get("isLogged") === 'true'),
      date: moment().subtract(1, 'months').format('YYYY-MM'),
      achievementRate: {
        total: {
          name: "總業績達成率",
          thisYearAR: 0,
          thisMonthAR: 0,
          nextMonthAR: 0,
        },
        salesTeam1: {
          name: "業務一部達成率",
          year: "2016",
          thisYearAR: 0,
          thisMonthAR: 0,
          nextMonthAR: 0,
        },
        salesTeam2: {
          name: "業務二部達成率",
          thisYearAR: 0,
          thisMonthAR: 0,
          nextMonthAR: 0,
        },
        authorizationAndDfp: {
          name: "聯播網 + 授權",
          thisYearAR: 0,
          thisMonthAR: 0,
          nextMonthAR: 0,
        }
      },
      annoucneMessages: "",
      topSales: {
        name: "業績前三名",
        top1: {
          name: "---",
          img: "---"
        },
        top2: {
          name: "---",
          img: "---"
        },
        top3: {
          name: "---",
          img: "---"
        },
      },
      backSeatSales: {
        name: "業績坐板凳",
        back1: "---",
        back2: "---",
        back3: "---"
      },
      fans: {
        line: 0,
        facebook: 0,
        weibo: 0,
      },
    };
  },
  methods: {
    onSubmit () {
      let dateArray = this.date.split("-");
      let year = dateArray[0], month = dateArray[1];
      let { top1, top2, top3 } = this.topSales;
      let { back1, back2, back3 } = this.backSeatSales;
      let { line, facebook, weibo } = this.fans;
      let achievementRate = {};

      _.forEach(this.achievementRate, (value, key) => {
        let { name, thisYearAR, thisMonthAR, nextMonthAR} = value;
        achievementRate[key] = {
          name,
          year,
          month,
          thisYearAR,
          thisMonthAR,
          nextMonthAR,
        }
      });

      fetchival(url).post({
        annoucneMessages: this.annoucneMessages,
        year,
        month,
        achievementRate,
        topSales: {
          top1,
          top2,
          top3,
        },
        backSeatSales: {
          back1,
          back2,
          back3,
        },
        fans: { line, facebook, weibo },
      })
      .then((json) => {
        alert('Update Success!');
      })
      .catch((err) => {
        console.error(err);
      });

    },
  }
}
</script>
<style lang="scss" scoped>
  #container {
    background: #122000;
  }
  #announce-borad {
    span {
      color: red;
      font-size: 75%;
    }
    textarea {
      width: 95%;
    }
  }
  #submit-box {
    margin-top: 3%;
    button {
      height: 50px;
      width: 100%;
    }
  }

</style>
