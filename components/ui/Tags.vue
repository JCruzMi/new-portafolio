<template>
  <Icon :icon="icon" class="w-6 h-6 text-white" />
</template>

<script setup>
import { Icon } from "@iconify/vue";

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
});
</script>

<style></style>
