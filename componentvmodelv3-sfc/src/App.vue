<script setup>
import { ref, reactive } from "vue";
import FormInput from "@/components/FormInput.vue";

const person = reactive({ name: "" });
</script>

<template>
  <FormInput v-model="person.name"></FormInput>
  <p>{{ person.name }}</p>
</template>

<style />
