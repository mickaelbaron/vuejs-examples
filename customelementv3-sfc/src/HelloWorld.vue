<script setup>
  import { ref } from 'vue'
  import Clock from '@/components/Clock.vue'

  const value = ref("HelloWorld")
</script>

<template>
  <Clock/>
  <input v-model="value" type="text" />
  <p>{{ value }}</p>
</template>

<style/>