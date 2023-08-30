<script setup>
import { ref, reactive } from "vue";
import FormInput from "@/components/FormInput.vue";

const person = reactive({ name: "", city: "" });
</script>

<template>
  <FormInput v-model:name="person.name" v-model:city="person.city"></FormInput>
  <p>{{ person.name }} {{ person.city }}</p>
</template>

<style />
