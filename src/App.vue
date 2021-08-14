<template>
  <Test :data="{ key: 'a', value: 'test' }" />
</template>

<script>
import { Test } from './components';
export default {
  components: {
    Test,
  },
};
</script>

<style lang="less" scoped></style>
