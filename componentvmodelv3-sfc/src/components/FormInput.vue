<script setup>
import { ref } from "vue";

defineProps({ modelValue: String });
defineEmits(["update:modelValue"]);
</script>

<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style />
