<template>
  <div class="content-column full-height">
    <div class="title"> {{month}} 月業績坐板凳</div>
    <div class="content-column full-height">
      <table class="table">
        <tr v-for="(item, index) in data">
          <td>
            <span class="index">{{ index +1 }}</span>
            <span class="news-title">{{ item }}</span>
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
        type: Array,
        required: true,
        default() {
          return ['', '', ''];
        }
      },
      month: {
        type: Number,
      }
    }
  }
</script>

<style lang="scss" scoped>
  .title {
    background: #F17C40;
  }

  table.table {
    font-size: 1.2em;
    span.index {
      padding: 0 1.2vw;
      font-size: 1.4em;
    }
  }
</style>
