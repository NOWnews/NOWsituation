<template>
  <div class="content-column">
    <div class="title">即時在線</div>
    <div class="full-height">
      <table class="table">
        <tr>
          <td class="card" :cardData="thousandthWithMaigcNumber(data)">
            {{ data | thousandthWithMaigcNumber }}
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
      type: Number,
      required: true,
      default() {
        return 0;
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
  background: #2D76F6;
}

table.table td {
  border: none;
  font-size: 2em;
  padding-left: 2vw;
  padding-top: 1vh;
  &:after {
    padding-left: 2vw;
    padding-top: 1vh;
  }
}
@media screen and (min-width: 400px) and (max-width: 800px) {
  table.table td {
    font-size: 1.5em;
    padding-top: 0;
    &:after {
      padding-top: 0;
    }
  }
}

</style>

