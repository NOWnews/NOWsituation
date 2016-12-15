<template>
  <div class="content-column">
    <div class="title">TA 輪廓</div>
    <div class="full-height">
      <table class="table">
        <tr>
          <td class="male-column" rowspan="4"
          v-bind:style="{'width':data.male * 30 /100 + '%'}">
            <div>男</div>
            {{data.male}}%
          </td>
          <td class="female-column" rowspan="4"
          v-bind:style="{'width':data.female * 30 /100 + '%'}">
            <div>女</div>
            {{data.female}}%
          </td>
          <th colspan="2">年齡層 (歲)</th>
          <th colspan="2">年齡層 (歲)</th>
        </tr>
        <tr v-for="index in [0,1,2]">
          <th>{{ data.ageBracket[index].type }}</th>
          <td :class="['card', 'delay-' + (index + 1)]"
            :cardData="data.ageBracket[index].value + '%'">
            {{ data.ageBracket[index].value }}%
          </td>
          <th>{{ data.ageBracket[index + 3].type }}</th>
          <td :class="['card', 'delay-' + (index + 1)]"
            :cardData="data.ageBracket[index + 3].value + '%'">
            {{ data.ageBracket[index + 3].value }}%
          </td>
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
        return {
          male: 0,
          female: 0,
          ageRange: [
          ]
        };
      },
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  background: #0D198E;
}

table.table {
  font-size: 120%;
  th {
    background: #0C1637;
    text-align: center;
    width: 18%;
  }
  td {
    text-align: center;
    width: 17%;
    &.male-column {
      background: #76CECF;
    }
    &.female-column {
      background: #DC6B7D;
    }
  }

}

.card  {
  &:after {
    height: 3.5vh;
    padding-top: 2vh;
  }
  &.delay-1 {
    transition-delay: calc((24 + 1) * 0.3s);
  }
  &.delay-2 {
    transition-delay: calc((24 + 2) * 0.3s);
  }
  &.delay-3 {
    transition-delay: calc((24 + 3) * 0.3s);
  }
}


@media screen and (min-width: 400px) and (max-width: 800px) {
  table.table {
    th {
      font-size: 12px;
    }
  }

  .card {
    padding: 0;
    &:after {
      padding: 3px 0;
    }
  }
}
</style>
