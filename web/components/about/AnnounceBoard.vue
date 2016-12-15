<template>
  <div class="full-height">
    <div class="title">佈告欄</div>
    <div class="border full-height">
      <ul>
        <li v-for="message in data">{{ message }}</li>
      </ul>
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
          return ['暫無']
        }
      }
    }
  }
</script>

<style scoped>
  .title {
    background: #6C0CDD;
  }
  li {
    font-size: 120%;
    margin-bottom: 3%;
    margin-right: 3%;
  }

  .border.full-height {
    background: #12225C;
  }
</style>
