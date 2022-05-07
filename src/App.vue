<template>
  <div class="example">{{ msg }}</div>
</template>

<script lang="ts">
export default {
  data () {
    return {
      msg: 'Hello world!'
    }
  }
}
</script>

<style scoped>
.example {
  color: red;
}
</style>