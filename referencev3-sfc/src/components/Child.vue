<script setup>
  import { getCurrentInstance } from 'vue'
  const instance = getCurrentInstance()
  const tt = ref("")

  function callChild() {
    instance.proxy.$parent.callParent();
  }

  defineExpose({
    callChild
  })
</script>

<template>
  <div>Enfant</div>
</template>

<style/>
