<template>
  <div className="bg bg-slate-100 font-inter">
    <div className="3xl:container m-auto ">
      <AppHeader />
      <AppContent />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppContent from "@/components/AppContent.vue";
import AppHeader from "@/components/AppHeader.vue";

export default defineComponent({
  name: "AboutView",
  components: {
    AppHeader,
    AppContent,
  },
});
</script>
