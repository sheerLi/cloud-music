<template>
  <div>发现页面{{ count }}</div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  components: {},
  setup() {
    const count = ref(1);

    onMounted(() => {
      setTimeout(() => {
        count.value = 2;
      }, 1000);
    });

    return {
      count,
    };
  },
});
</script>
