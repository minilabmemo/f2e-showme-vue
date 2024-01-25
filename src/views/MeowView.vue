<template>
  <div className="bg bg-slate-100 font-inter">
    <div className="3xl:container m-auto ">
      <AppHeader />
      <AppContent />
      <AppFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppContent from "@/components/sakka/AppContent.vue";
import AppHeader from "@/components/sakka/AppHeader.vue";
import AppFooter from "@/components/sakka/AppFooter.vue";

export default defineComponent({
  name: "AboutView",
  components: {
    AppHeader,
    AppContent,
    AppFooter,
  },
});
</script>
