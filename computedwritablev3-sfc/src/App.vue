<script setup>
  import { ref, computed } from 'vue'

  const value = ref('HelloWorld')
  const writableValue = computed({
    get() {
      return value.value;
    },
    set(newValue) {
      if (newValue.length <= 10) {
        value.value = newValue;
      }
    }
  })
</script>

<template>
  <input v-model="writableValue" type="text"/>
  <p>{{ value }}</p>
</template>

<style/>
