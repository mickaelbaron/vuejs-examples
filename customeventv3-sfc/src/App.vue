<script setup>
  import { ref } from 'vue'
  import Clock from '@/components/Clock.vue'

  const value = ref("HelloWorld")

  function saveClock(currentClock) {
    value.value = currentClock;
  }
</script>

<template>
  <Clock @save-clock="saveClock($event)"></Clock>
  <input v-model="value" type="text" />
  <p>{{ value }}</p>
</template>

<style/>