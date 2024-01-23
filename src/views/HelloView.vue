<template>
  123
  <HelloWorld msg="test" />
  <h1 class="h">輪播插件</h1>
  <AppSwiper :newsData="newsData" />
</template>

<script setup>
import HelloWorld from "@/components/HelloWorld.vue";
import AppSwiper from "@/components/AppSwiper.vue";
import { newsData } from "@/utils/newsData.ts";
</script>
