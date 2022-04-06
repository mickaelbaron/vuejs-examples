<script setup>
  import { ref, defineProps } from 'vue'

  const clock = ref(new Date().toLocaleTimeString())
  
  const props = defineProps({ message: String })

  setInterval(() => {
    computeClock();
  }, 1000);

  function computeClock() {
    clock.value = new Date().toLocaleTimeString();
  }
</script>

<template>
  <div>{{ clock }} {{ message }}</div>
</template>

<style/>
