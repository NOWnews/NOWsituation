<template>
  <div class="content-column">
    <div class="title">Alexa 排名</div>
    <div class="full-height">
      <table class="table realtime-table">
        <tr>
          <th>台灣</th>
          <td :cardData="data.countryRank"
            class="card delay-1">{{data.countryRank}}</td>
          <th>全球</th>
          <td :cardData="data.globalRank"
            class="card delay-1">{{data.globalRank}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.title {
  background: #3AA7F7;
}
table.table {
  th, td {
    width: 25%;
  }
}

.card  {
  &:after {
    padding-top: 2vh;
  }
  &.delay-1 {
    transition-delay: calc((27 + 1) * 0.3s);
  }
}
</style>
