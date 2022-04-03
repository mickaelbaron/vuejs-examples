<script setup>
  import { ref, watchEffect } from 'vue'

  const val1 = ref('')
  const val2 = ref('')
  const text = ref('')

  const stop = watchEffect(() => text.value = val1.value + " " + val2.value)

  function stopWatch() {
    stop()
  }
</script>

<template>
  <div id="app">
    <input v-model="val1" type="text" />
    <input v-model="val2" type="text" />
    <p>{{ text }}</p>
    <button @click="stopWatch()">Stop</button>
  </div>
</template>

<style/>
