<script setup>
  import { ref } from 'vue'
  import Child from '@/components/Child.vue'

  const refChild = ref(null)
  const value = ref("")

  function callParent() {
    value.value = "Hello"
  }

  defineExpose({
    callParent
  })
</script>

<template>
  <Child ref="refChild"></Child>
  <button @click="refChild.callChild()">Go</button>
  {{ value }}
</template>

<style/>