<template>
  <div class="content-column">
    <div class="title">
    {{ pageIndex === 0 ? '同業即時頭條新聞' : '外送收錄百分比 (' + pageIndex +'/2)' }} </div>
    <div class="full-height">
      <table class="table" :class="{headline: pageIndex === 0, rss: pageIndex !== 0}">
        <tr v-for="index in [0, 1, 2, 3, 4, 5]">
          <th>
            <!-- 同業即時頭條新聞 -->
            <img :src="loadImg(headlineLogos[index])" v-show="pageIndex === 0"/>
            <!-- 外送收錄百分比輪播-->
            <img :src="loadImg(rssData[index + ((pageIndex - 1) * 6)][0])" v-if="pageIndex !== 0"/>
          </th>
          <td
            :cardData="(pageIndex === 0) ? ellipsisHeadline(headline[index].title, index) : rssData[index + ((pageIndex - 1) * 6)][1] + '%'"
            :class="['card', 'delay-' + (index + 1) ]">
            {{ (pageIndex === 0) ? ellipsisHeadline(headline[index].title, index) : rssData[index + ((pageIndex - 1) * 6)][1] + '%' }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { ellipsisHeadline } from '../../lib/filter';
const page = ['headline', 'rss1', 'rss2'];
export default {
  created () {
    window.setInterval(() => {
      if (this.pageIndex == 2) {
        this.pageIndex = 0;
        return;
      }
      this.pageIndex++
    },10000);
  },
  methods: {
    ellipsisHeadline,
    loadImg: (path) => {
      return require(`../../assets/image/${path}`);
    }
  },
  props: {
    headline: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    }
  },
  data () {
    return {
      pageIndex: 0,
      headlineLogos: [
        'ETtodayCIS.png',
        'apple.png',
        'LTN.jpg',
        'udn.png',
        'chinaTimes.png',
        'CNA.png',
      ],
      rssData: [
        ['google.png', 100],
        ['yahoo.png', 90],
        ['sina.png', 70],
        ['msn.png', 80],
        ['hinet.png', 85],
        ['taiwanMobile.png', 87],
        ['farEasTone.jpg', 45],
        ['cnYes.png', 65],
        ['taiwanCN.jpg', 100],
        ['baidu.png', 100],
        ['pchome.png', 100],
        ['line.png', 85],
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  background: #EF7E85;
}

table.table {
  th {
    background: #fff;
  }

  img {
    width: 100%;
  }

  &.headline td{
    color: #b897b9;
    vertical-align: top;
    padding-top: 1vh;
    &:after {
      padding-top: 1vh;
      padding-left: 1vw;
    }
  }

  &.rss td{
    font-size: 120%;
    vertical-align: top;
    padding-top: 2.5vh;
    padding-left: 2vw;
    &:after {
      padding-top: 2.5vh;
      padding-left: 2vw;
    }
  }
}

.card  {

  &.delay-1 {
    transition-delay: calc((18 + 1) * 0.3s);
  }
  &.delay-2 {
    transition-delay: calc((18 + 2) * 0.3s);
  }
  &.delay-3 {
    transition-delay: calc((18 + 3) * 0.3s);
  }
  &.delay-4 {
    transition-delay: calc((18 + 4) * 0.3s);
  }
  &.delay-5 {
    transition-delay: calc((18 + 5) * 0.3s);
  }
  &.delay-6 {
    transition-delay: calc((18 + 6) * 0.3s);
  }
}

@media screen and (min-width: 400px) and (max-width: 800px) {
  table.table {
    th {
      width: 20%;
    }
    &.headline  {
      td, td:after {
        padding: 0;
      }
    }
  }
}
</style>
