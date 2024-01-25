<template>
  <div className="bg bg-slate-100 font-inter">
    <div className="3xl:container m-auto ">
      <AppSideMenu />
      <AppHeader />
      <AppContent />
      <AppFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppContent from "@/components/sakka/AppContent.vue";
import AppHeader from "@/components/sakka/AppHeader.vue";
import AppFooter from "@/components/sakka/AppFooter.vue";
import AppSideMenu from "@/components/sakka/AppSideMenu.vue";
</script>
