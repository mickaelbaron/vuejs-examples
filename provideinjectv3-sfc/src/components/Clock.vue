<script setup>
  import { ref } from 'vue'
  import ClockDisplay from './ClockDisplay.vue'

  const clock = ref(new Date().toLocaleTimeString())

  setInterval(() => {
    computeClock();
  }, 1000);

  function computeClock() {
    clock.value = new Date().toLocaleTimeString();
  }
</script>

<template>
  {{ clock }} <ClockDisplay></ClockDisplay>
</template>

<style/>
