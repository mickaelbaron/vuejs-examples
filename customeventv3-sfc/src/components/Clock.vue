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
  <button v-on:click="$emit('save-clock', clock)">{{clock}}</button>
</template>

<style/>
