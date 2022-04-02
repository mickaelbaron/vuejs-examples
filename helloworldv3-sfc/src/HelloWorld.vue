<script setup>
  import { ref } from 'vue'
  
  const value = ref('HelloWorld')
</script>

<template>
  <div id="helloworld">
    <input v-model="value" type="text" />
    <p>{{ value }}</p>
  </div>
</template>

<style>
#helloworld {
  text-align: center;
}
</style>
