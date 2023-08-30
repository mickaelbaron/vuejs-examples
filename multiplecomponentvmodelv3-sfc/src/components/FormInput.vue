<script setup>
import { ref } from "vue";

defineProps({ name: String, city: String });
defineEmits(["update:name", "update:city"]);
</script>

<template>
  <input :value="name" @input="$emit('update:name', $event.target.value)" />
  <input :value="city" @input="$emit('update:city', $event.target.value)" />
</template>

<style />
