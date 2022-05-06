<template>
  <van-button type="primary">主要按钮</van-button>
</template>

<script lang="ts">
import { Button } from 'vant';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    [Button.name]: Button
  },
});
</script>