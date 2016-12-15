<template>
  <div class="content-column">
    <table class="full-height table">
        <tr>
          <td>
            {{ date }}
            <a href="/about">
              <span>{{ time }}</span>
            </a>
          </td>
        </tr>
      </table>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  created() {
    window.setInterval(() => {
      this.date = moment().format('YYYY.MM.DD');
      this.time = moment().format('HH:mm:ss');
    },1000);
  },
  data() {
    return {
      date: moment().format('YYYY.MM.DD'),
      time: moment().format('HH:mm:ss'),
    }
  }
}
</script>

<style lang="scss" scoped>
.content-column {
  background: #000;
  color: #26DFFE;
  text-align: center;
  td {
    font-size: 110%;
    a {
      text-decoration: none;
    }
    span {
      color: #26DFFE;
      font-size: 135%;
    }
  }

}
</style>
