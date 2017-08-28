<template>
  <div class="content-column">
    <div class="title">各中心當日累積排名</div>
    <div class="full-height">
      <table class="table total-pageview-table">
        <tr v-for="index in [0, 1, 2, 3, 4]">
          <th>{{index + 1}}{{data[index].name}}</th>
          <td :cardData="thousandthWithMaigcNumberForPageView(data[index].allTotalPageViews)" :class="['card', 'delay-' + (index + 1) ]">
            {{data[index].allTotalPageViews | thousandthWithMaigcNumberForPageView}}
          </td>
          <th style="width: 25%" >{{index + 7}}{{data[index + 6].name}}</th>
          <td style="width: 15%" :cardData="thousandthWithMaigcNumberForPageView(data[index + 6].allTotalPageViews)" :class="['card', 'delay-' + (index + 1) ]">
            {{data[index + 5].allTotalPageViews | thousandthWithMaigcNumberForPageView}}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { thousandthWithMaigcNumberForPageView } from '../../lib/filter';
export default {
  filters: {
    thousandthWithMaigcNumberForPageView,
  },
  props: {
    data: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    }
  },
  methods: {
    thousandthWithMaigcNumberForPageView,
  }
}
</script>
<style scoped>
.title {
  background: #982FCF;
}
.card  {
  &.delay-1 {
    transition-delay: calc((5 + 1)* 0.3s);
  }
  &.delay-2 {
    transition-delay: calc((5 + 2)* 0.3s);
  }
  &.delay-3 {
    transition-delay: calc((5 + 3)* 0.3s);
  }
  &.delay-4 {
    transition-delay: calc((5 + 4)* 0.3s);
  }
  &.delay-5 {
    transition-delay: calc((5 + 5) * 0.3s);
  }
  &.delay-6 {
    transition-delay: calc((5 + 6) * 0.3s);
  }
  &.delay-7 {
    transition-delay: calc((5 + 7) * 0.3s);
  }
  &.delay-8 {
    transition-delay: calc((5 + 8) * 0.3s);
  }
}
</style>
