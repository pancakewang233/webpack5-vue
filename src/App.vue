<template>
<div class="app">
  <h1 class="example">{{ name }}</h1>
  <img src="../static/nature.jpg" alt="backImg">
</div>
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

<style scoped lang="scss">
.app{
  .example{
    color: blue;
  }
  img{
    height: 200px;
    width: 200px;
  }
}
</style>