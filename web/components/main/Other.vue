<template>
  <div class="content-column">
    <div class="title">各社群粉絲數</div>
    <div class="full-height border content">
      <div>Line:
        <span :cardData="thousandth(data.line)"
          class="card delay-1">{{data.line | thousandth }}</span> 人
      </div>
      <div>facebook:
        <span :cardData="thousandth(data.facebook)"
          class="card delay-2">{{data.facebook | thousandth }}</span> 人
      </div>
      <div>微博:
        <span :cardData="thousandth(data.weibo)"
          class="card delay-3">{{data.weibo | thousandth }}</span> 人
      </div>
    </div>
  </div>
</template>

<script>
import { thousandth } from '../../lib/filter';
export default {
  filters: {
    thousandth,
  },
  props: {
    data: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    }
  },
  methods: {
    thousandth,
  },

}
</script>

<style lang="scss" scoped>
.title {
  background: #B35415;
}

.content {
  font-size: 110%;
  background: #12225C;
  padding-top: 2%;
  padding-left: 2vw;
  div {
    line-height: 3vh;
  }
  span {
    color: #78B720;
  }
}

.card  {
  display: inline-block;
  &.delay-1 {
    transition-delay: calc((28 + 1) * 0.3s);
  }
  &.delay-2 {
    transition-delay: calc((28 + 2) * 0.3s);
  }
  &.delay-3 {
    transition-delay: calc((28 + 3) * 0.3s);
  }
}

@media screen and (min-width: 400px) and (max-width: 800px) {
  .content {
    padding-top: 0;
    div {
      line-height: 100%;
    }
  }

}
@media screen and (min-width: 400px) and (max-width: 600px) {
  .content {
    padding-top: 0;
    div {
      font-size: 9px;
      line-height: 100%;
    }
  }

}
</style>
