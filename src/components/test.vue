<template>
  <div class="wrap">我叫{{ userInfo.name }}，今年{{ userInfo.age }}岁</div>
  <div class="wrap">外部props: {{ data?.value }}</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface IData {
  userInfo: {
    name: string;
    age: number;
  };
}

export default defineComponent({
  props: {
    data: { type: Object as PropType<{ key: string; value: string | number }> },
  },

  data() {
    return {
      userInfo: {
        name: '章三',
        age: 12,
      },
    } as IData;
  },
});
</script>

<style lang="less" scoped>
.wrap {
  font-size: 24px;
  width: 375px;
  height: 375px;
  background-color: red;
}
</style>
