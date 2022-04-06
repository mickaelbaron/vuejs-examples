<script setup>
import { store } from '../store.js'
const { state } = store()
</script>

<template>
  <input v-model="state.message" type="text" />
</template>

<style/>
