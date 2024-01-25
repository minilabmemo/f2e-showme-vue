<template>
  <div class="flex flex-col items-center w-[300px]">
    <h1 class="text-5xl font-noto font-semibold text-blue-250 h-[70px]">
      {{ text }}
    </h1>
    <div class="line h-[16px] w-[97px] bg-gray-150 mt-2"></div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps(["text"]);
</script>
