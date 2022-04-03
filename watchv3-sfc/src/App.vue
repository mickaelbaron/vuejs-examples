<script setup>
  import { ref, watch } from 'vue'

  const value = ref('')
  const message = ref('Parfait')
  watch(value, (newValue, oldValue) => {
    if (newValue.length > 10) {
      message.value = "Trop Grand"
    } else {
      message.value = "Parfait"
    }
  })
</script>

<template>
  <input v-model="value" type="text" />
  <p>{{ message }}</p>
</template>

<style/>
