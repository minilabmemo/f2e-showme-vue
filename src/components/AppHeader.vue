<template>
  <div class="flex items-center h-[135px]">
    <header
      ref="hRef"
      class="transition-[height] fixed top-0 left-1/2 -translate-x-1/2 z-10 w-full max-w-screen-3xl flex items-center justify-between px-[60px] bg-white text-blue-150 font-semibold fill-white drop-shadow-default"
    >
      <div class="logo w-[142px]">
        <img :src="require('@/assets/images/logo.svg')" alt="Facebook" />
      </div>
      <nav class="m-auto hidden md:block">
        <ul class="flex justify-between text-2xl xl:text-[32px]">
          <li class="group mx-5">
            <a href="#about">關於薩卡</a>
            <div
              class="w-0 group-hover:w-full transition-[width] duration-1000 ease-in-out bg-red-100 h-[5px]"
            ></div>
          </li>
          <li class="group mx-5">
            <a href="#policies">政策議題</a>
            <div
              class="w-0 group-hover:w-full transition-[width] duration-1000 ease-in-out bg-red-100 h-[5px]"
            ></div>
          </li>
          <!-- <NavLink href={'#about'} text={'關於薩卡'} animate={true}></NavLink>
            <NavLink href={'#policies'} text={'政策議題'} animate={true}></NavLink>
            <NavLink href={'#news'} text={'最新活動'} animate={true}></NavLink>
            <NavLink href={'#services'} text={'民眾服務'} animate={true}></NavLink> -->
        </ul>
      </nav>
      <div class="w-[250px] h-[30px] items-center xl:h-[40px] hidden md:flex">
        <img :src="require('@/assets/images/Facebook.svg')" alt="Facebook" />
        <img :src="require('@/assets/images/Instagram.svg')" alt="Facebook" />
        <img :src="require('@/assets/images/TwitterX.svg')" alt="Facebook" />
        <img :src="require('@/assets/images/YouTube.svg')" alt="Facebook" />
        <img :src="require('@/assets/images/LINE.svg')" alt="Facebook" />
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppHeader",
  props: {
    msg: String,
  },
});
</script>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const hRef = ref(null);

const handleScroll = () => {
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  if (scrollY > 100) {
    if (hRef.value) {
      hRef.value.style.transition = ".5s";
      hRef.value.style.height = "100px";
    }
  } else {
    if (hRef.value) {
      hRef.value.style.transition = "0s";
      hRef.value.style.height = "135px";
    }
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
