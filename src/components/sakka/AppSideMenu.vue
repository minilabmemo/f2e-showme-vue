<template>
  <div v-if="matches">
    <div
      class="flex h-[30px] w-[30px] justify-center items-center fixed top-[30px] right-[20px] z-30"
      @click="toggleMenu"
    >
      <div
        class="before:bg-blue-150 before:w-[100%] before:h-[5px] before:absolute before:top-0 before:transition-all before:duration-1000 after:bg-blue-150 after:w-[100%] after:h-[5px] after:absolute after:bottom-0 after:transition-all after:duration-1000 h-[25px] w-[25px] relative"
        :class="{
          'before:top-1/2 before:-translate-y-1/2 before:rotate-[135deg] after:bottom-1/2 after:translate-y-1/2 after:rotate-[45deg]':
            isMeanOpen,
        }"
      >
        <div
          class="h-[5px] bg-blue-150 w-[100%] absolute top-1/2 -translate-y-1/2 transition-opacity"
          :class="{ 'opacity-0': isMeanOpen, 'opacity-100': !isMeanOpen }"
        ></div>
      </div>
    </div>

    <div
      @click="toggleMenu"
      class="h-full w-full fixed top-0 right-0 backdrop-blur-sm z-20"
      :class="{ block: isMeanOpen, hidden: !isMeanOpen }"
    ></div>

    <div
      class="h-full flex items-center justify-between bg-white fixed top-0 right-0 z-20 transition-[width] duration-1000"
      :class="{ 'w-[50vw]': isMeanOpen, 'w-0': !isMeanOpen }"
    >
      <div class="h-[90%] p-6">
        <nav class="text-blue-150 h-[50%] flex flex-col justify-between">
          <ul
            class="h-full flex flex-col justify-evenly text-2xl whitespace-nowrap"
          >
            <NavLink href="#about" text="關於薩卡" :animate="true" />
            <NavLink href="#policies" text="政策議題" :animate="true" />
            <NavLink href="#news" text="最新活動" :animate="true" />
            <NavLink href="#services" text="民眾服務" :animate="true" />
          </ul>
        </nav>
        <div class="h-[5px] bg-blue-150 my-5"></div>
        <div class="flex h-[30px]">
          <img :src="Facebook" alt="Facebook" />
          <img :src="Instagram" alt="Instagram" />
          <img :src="TwitterX" alt="TwitterX" />
          <img :src="YouTube" alt="YouTube" />
          <img :src="LINE" alt="LINE" />
        </div>
      </div>

      <div></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import NavLink from "./NavLink.vue";
import Facebook from "@/assets/images/Facebook.svg";
import Instagram from "@/assets/images/Instagram.svg";
import TwitterX from "@/assets/images/TwitterX.svg";
import YouTube from "@/assets/images/YouTube.svg";
import LINE from "@/assets/images/LINE.svg";
import { useMediaQuery } from "@vueuse/core";

const matches = useMediaQuery("(max-width: 768px)");
const isMeanOpen = ref(false);

const toggleMenu = () => {
  isMeanOpen.value = !isMeanOpen.value;
};
</script>
