<template>
  <div
    v-if="visible"
    class="bg-white p-8 md:p-10 fixed bottom-animate left-1/2 -translate-x-1/2 w-[90vw] md:w-[80vw] max-w-[1280px] h-[80vh] rounded-t-[80px]"
  >
    <div
      class="absolute right-[40px] w-[30px] md:w-[43px] z-10 cursor-pointer"
      @click="closeModal"
    >
      <img src="@/assets/images/X.svg" alt="close" />
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";
const props = defineProps(["visible"]);
const emit = defineEmits(["response"]);
const closeModal = () => {
  emit("closeModal");
};
</script>
