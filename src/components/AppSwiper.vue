<template>
  <svg class="svg w-0 h-0">
    <clipPath id="triangle-path" clipPathUnits="objectBoundingBox">
      <path
        d="M0.496,0.991 C0.502,1,0.515,1,0.521,0.991 L1,0.029 C1,0.016,1,0,0.989,0 H0.019 C0.007,0,0,0.016,0.006,0.029 L0.496,0.991"
      ></path>
    </clipPath>
  </svg>
  <svg class="svg w-0 h-0">
    <clipPath id="triangle-path-reverse" clipPathUnits="objectBoundingBox">
      <path
        d="M0.006,0.977 C0,0.989,0.007,1,0.019,1 L0.989,1 C1,1,1,0.988,1,0.977 L0.512,0.012 C0.507,0,0.492,0,0.486,0.012 L0.006,0.977"
      ></path>
    </clipPath>
  </svg>
  <swiper
    :width="1200"
    :slides-per-view="4"
    :slides-per-group="1"
    :space-between="10"
    :loop="true"
    :autoplay="{ delay: 3000, disableOnInteraction: true }"
    :modules="modules"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="(item, index) in newsData" :key="index">
      <div
        class="drop-shadow-[6px_6px_2px_rgba(61,61,61,0.7)] my-10 hover:scale-[1.1] w-[420px]"
        @mousemove="() => onMouseMove(item, index)"
      >
        <img
          v-if="item"
          :src="item.src"
          alt="news-image"
          class="grow-0 shrink-0 w-[420px] h-[400px] bg-cover bg-center"
          :class="{
            clipped: index % 2 === 0,
            'clipped-reverse': index % 2 !== 0,
          }"
        />
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  props: {
    newsData: {
      type: Array,
      required: false,
    },
    title: String,
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup(props, context) {
    const onSwiper = (swiper) => {
      // console.log(swiper);
    };
    const onSlideChange = () => {
      // console.log("slide change");
    };
    const onMouseMove = (v, i) => {
      context.emit("updateTitle", v.title);
    };
    return {
      onSwiper,
      onSlideChange,
      onMouseMove,
      modules: [Autoplay, Navigation, Pagination],
    };
  },
};
</script>
