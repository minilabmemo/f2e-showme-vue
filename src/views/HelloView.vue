<template>
  123
  <HelloWorld msg="test" />
  <h1 class="h">輪播插件</h1>
  <AppSwiper :newsData="newsData" :title="title" @updateTitle="updateTitle" />
  <h2>{{ title }}</h2>
</template>

<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import AppSwiper from "@/components/AppSwiper.vue";
import { newsData } from "@/utils/newsData";
import { ref } from "vue";
const title = ref("");
function updateTitle(newTitle: string) {
  title.value = newTitle;
}
</script>
