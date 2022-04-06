<script setup>
import { store } from '../store.js'
const { state } = store()

</script>

<template>
  {{ state.message }}
</template>

<style/>
