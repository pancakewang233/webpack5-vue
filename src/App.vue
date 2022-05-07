<template>
  <h1 class="example">{{ name }}</h1>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    const name = "Hello Webpack5 Vue3";
    return {
      name,
    };
  },
});
</script>

<style scoped>
.example{
  color: blue;
}
</style>