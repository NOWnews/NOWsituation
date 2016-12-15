<template>
  <div class="content-column">
    <div class="title">即時流量來源</div>
    <div class="full-height">
      <table class="table realtime-table">
        <tr v-for="(trafficType, index) in data">
          <th>{{ trafficType.type }}</th>
          <td :class="['card', 'padding-left', 'delay-' + (index + 1) ]"
            :cardData="thousandthWithMaigcNumber(trafficType.value)">
            {{ trafficType.value | thousandthWithMaigcNumber}}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { thousandthWithMaigcNumber } from '../../lib/filter';
export default {
  filters: {
    thousandthWithMaigcNumber,
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
    thousandthWithMaigcNumber,
  }
}
</script>

<style lang="scss" scoped>
.title {
  background: #B06BF8;
}

.card  {
  &.delay-1 {
    transition-delay: calc(1 * 0.3s);
  }
  &.delay-2 {
    transition-delay: calc(2 * 0.3s);
  }
  &.delay-3 {
    transition-delay: calc(3 * 0.3s);
  }
  &.delay-4 {
    transition-delay: calc(4 * 0.3s);
  }
  &.delay-5 {
    transition-delay: calc(5 * 0.3s);
  }
}

@media screen and (min-width: 400px) and (max-width: 800px) {
  table.table td {
    font-size: 1.3em;
    &:after {
      font-size: 1.3em;
    }
  }
}
</style>
