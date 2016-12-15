<template>
  <div class="content-column">
    <div class="title">熱門新聞 Top 10</div>
    <div class="full-height">
      <table class="table">
        <tr v-for="index in [0, 1, 2, 3, 4]">
          <th>{{ isFirstPage ? index + 1 : index + 5 + 1 }}</th>
          <td :cardData="isFirstPage ? ellipsisTop10(data[index]) : ellipsisTop10(data[index + 5])"
            :class="['card', 'delay-' + (index + 1) ]">
            {{ (isFirstPage ? data[index] : data[index + 5]) | ellipsisTop10}}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { ellipsisTop10 } from '../../lib/filter';
export default {
  filters: {
    ellipsisTop10,
  },
  mounted() {
    window.setInterval(() => {
      this.isFirstPage = !this.isFirstPage;
    }, 10000);
  },
  data() {
    return {
      isFirstPage: true
    }
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
    ellipsisTop10,
  }
}
</script>

<style lang="scss" scoped>

.title {
  background: #ED7D41;
}

table.table {
  overflow: hidden;
  th {
    font-size: 1.4em;
    text-align: center;
    width: 20%;
  }
  td {
    color: #9E8C82;
    width: 80%;
    vertical-align: top;
    padding-top: 1vh;
    padding-left: 1vw;
    &:after {
      padding-top: 1vh;
      padding-left: 1vw;

    }
  }
}

.card  {
  &.delay-1 {
    transition-delay: calc((13 + 1) * 0.3s);
  }
  &.delay-2 {
    transition-delay: calc((13 + 2) * 0.3s);
  }
  &.delay-3 {
    transition-delay: calc((13 + 3) * 0.3s);
  }
  &.delay-4 {
    transition-delay: calc((13 + 4) * 0.3s);
  }
  &.delay-5 {
    transition-delay: calc((13 + 5) * 0.3s);
  }
}

@media screen and (min-width: 400px) and (max-width: 800px) {
  table.table {
    th {
      font-size: 1em;
      width: 15%;
    }
    td, td:after {
      line-height: 100%;
      padding: 0;
    }
  }
}
</style>
