<script setup>
  import { ref, provide } from 'vue'
  import Clock from '@/components/Clock.vue'

  const value = ref("HelloWorld")
  provide('message', value)
</script>

<template>
  <Clock></Clock>
  <div>
    <input v-model="value" type="text" />
  </div>
</template>

<style/>