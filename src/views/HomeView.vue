<template>
  <div class="home">
    <van-cell title="健康申报" is-link value="">
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <span class="title">健康申报</span>
        <span class="desc">填报健康承诺书</span>
      </template>
    </van-cell>

    <van-cell title="保密协议" is-link value="">
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <span class="title">保密协议</span>
        <span class="desc">签订保密协议</span>
      </template>
    </van-cell>

    <van-cell title="劳务费申报" is-link value="">
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <span class="title">劳务费申报</span>
        <span class="desc">面试产生的劳务费申报</span>
      </template>
    </van-cell>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Cell, CellGroup } from 'vant';

export default defineComponent({
  name: 'HomeView',
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
  },
});
</script>

<style lang="scss" scoped>
.home {
  .van-cell {
    align-items: center;
    :deep  .van-cell__title {
      padding-left: 2em;
      background: url(../assets/icon-shenbao.png) no-repeat left center;
      background-size: 1.5em auto;
    }
    &:nth-child(2) {
      :deep .van-cell__title {
        background-image: url(../assets/icon-security.png);
      }
    }
    &:nth-child(3) {
      :deep .van-cell__title {
        background-image: url(../assets/icon-laowufei.png);
      }
    }
  }
  .title {
    font-size: 16px;
    color: #101010;
  }
  .desc {
    color: #898989;
    display: block;
  }
}
</style>
