<script setup>
import { computed } from 'vue'

import Writable from './components/Writable.vue'
import Readable from './components/Readable.vue'
import { store } from './store.js'

const { state, setMessage } = store()

const message = computed({
  get() {
    return state.message
  },
  set(newValue) {
    setMessage(newValue)
  }
})

</script>

<template>
  <div><input v-model="message" type="text" />{{ message }}</div>
  <div><Writable></Writable><Readable></Readable></div>
</template>

<style/>
