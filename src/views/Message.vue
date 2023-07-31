<script setup>
import { defineProps } from "vue";
defineProps({
  message: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="alert" :class="`alert-${message.type}`" role="alert">
    {{ message.value }}
  </div>
</template>

<style scoped></style>
