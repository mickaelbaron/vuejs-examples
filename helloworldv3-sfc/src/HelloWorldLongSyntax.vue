<template>
  <div id="helloworld">
    <input v-model="value" type="text" />
    <p>{{ value }}</p>
  </div>
</template>

<script>
  import { createApp, ref } from 'vue'

  export default {
    setup() {
      const value = ref('HelloWorld')
      return {
        value
      }
    }
  }
</script>

<style>
#helloworld {
  text-align: center;
}
</style>
