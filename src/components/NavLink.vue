<template>
  <li class="group mx-5">
    <a :href="href">{{ text }}</a>
    <div
      v-if="animate"
      class="w-0 group-hover:w-full transition-[width] duration-1000 ease-in-out bg-red-100 h-[5px]"
    ></div>
  </li>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps(["animate", "text", "href"]);
</script>
