<template>
  <div id="login-view">
    <div id="login-box">
      <h1>NOWnews 戰情系統</h1>
      <p>
        <label>
          帳號
          <input v-model="account" name="date" type="text">
        </label>
      </p>
      <p>
        <label>
          密碼
          <input v-model="password" type="password" />
        </label>
      </p>
      <div>
        <button v-on:click="onSubmit">送出</button>
      </div>
    </div>
  </div>
</template>

<script>
  import Cookies from 'js-cookie';
  export default {
    data () {
      return {
        account: "admin@nownews.com",
        password: "",
      }
    },
    methods: {
      onSubmit () {
        if (this.account === "admin@nownews.com" && this.password === "12345678") {
          Cookies.set('isLogged', true);
          location.reload(true);
          return;
        }
        alert("輸入的帳密錯誤，請再試一次");
        return;
      }
    }
  }
</script>

<style lang="scss" scoped>
  #login-view {
    background: #12225C;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    #login-box {
      text-align: center;
      margin: 30vh auto;
      width: 80%;
    }
    input {
      width: 85%;
    }
    button {
      background: white;
      width:  100%;
    }
  }
</style>
