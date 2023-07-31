<script setup>
//import { RouterLink, RouterView } from 'vue-router'
import { computed } from "vue";
import { useRoute } from "vue-router";

import LayoutContent from "@/layouts/LayoutContent.vue";
import LayoutBlank from "@/layouts/LayoutBlank.vue";

const route = useRoute();

const layoutResolver = computed(() => {
  if (route.meta.layout === "content") {
    return LayoutContent;
  } else {
    return LayoutBlank;
  }
});
</script>

<template>
  <component :is="layoutResolver">
    <router-view />
  </component>
</template>

<style scoped></style>
