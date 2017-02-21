<template>
  <div class="full-height img-box">
    <div class="title">公司簡介</div>
    <div class='border full-height flexbox'>
      <a class="displayBlock" href="/">
        <img name="AboutNOWnews" :src="require('../../assets/video/NOWnews.gif')" />
      </a>
      <!-- 用電視盒的 Chrome 沒有辦法播放，可是 Android 可以 -->
      <!-- <video id="video" autobuffer autoplay loop name="AboutNOWnews">
        <source :src="require('../../assets/video/NOWnews.mp4')" type="video/mp4">
      </video> -->
    </div>
  </div>
</template>

<script>
export default {
  // 用電視盒的 Chrome 沒有辦法播放，可是 Android 可以
  //
  // mounted: function () {
  //   if(document.getElementById('video')){
  //     var video = document.getElementById('video');
  //     video.addEventListener('click',function(){
  //       video.play();
  //     },false);
  //   }
  // },
}
</script>

<style scoped>
.displayBlock {
  display: block;
}

.title {
  background: #27B3BC;
}

.flexbox {
    background: #000;
}
video, img {
  width: 100%;
  height: 100%;
}

.img-box {
    width: 100%;
}
</style>
