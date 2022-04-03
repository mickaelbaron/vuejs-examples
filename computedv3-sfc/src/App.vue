<script setup>
  import { ref, computed } from 'vue'

  const value = ref('HelloWorld')
  const messageLength = computed(() => value.value.length)
</script>

<template>
  <input v-model="value" type="text"/>
  <p>{{ value }}</p>
  <p>Longueur {{ messageLength }}</p>
</template>

<style/>
