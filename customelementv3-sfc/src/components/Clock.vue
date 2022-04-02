<script setup>
  import { ref } from 'vue'

  const clock = ref(new Date().toLocaleTimeString())
  
  setInterval(() => {
    computeClock();
  }, 1000);

  function computeClock() {
    clock.value = new Date().toLocaleTimeString();
  }
</script>

<template>
  <div>{{ clock }}</div>
</template>

<style/>
