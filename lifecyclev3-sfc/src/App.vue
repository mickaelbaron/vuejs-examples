<script setup>
  import { createApp, ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

  console.log("before Create")
  const value = ref('HelloWorld')

  onBeforeMount(() => {
    console.log("Before Mount: " + value.value)
  })

  onMounted(() => {
    console.log("Mounted: " + value.value)
  })

  onBeforeUpdate(() => {
    console.log("Before Update: " + value.value)
  })

  onUpdated(() => {
    console.log("Updated: " + value.value)
  })

  onBeforeUnmount(() => {
    console.log("Before Umount: " + value.value)
  })

  onUnmounted(() => {
    console.log("Umounted: " + value.value)
  })

  console.log("after Created: " + value.value)
</script>

<template>
  <div id="app">
    <input v-model="value" type="text" />
    <p>{{ value }}</p>
    <p>Afficher la console</p>
  </div>
</template>

<style/>
