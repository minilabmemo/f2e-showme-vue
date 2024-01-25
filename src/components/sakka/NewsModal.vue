<template>
  <AppModal>
    <div
      class="relative scroll-bar-no-show overflow-y-scroll h-full p-5"
      id="newsModal"
    >
      <section
        v-for="(item, index) in newsData"
        :key="index"
        :class="[
          'activity',
          'flex',
          index % 2 === 0 ? '' : 'flex-row-reverse',
          'relative',
          'z-10',
          index === 0 ? 'opacity-1' : 'opacity-0',
        ]"
        :id="`${index === 0 ? 'firstSection' : ''}`"
      >
        <div class="flex-1 flex flex-col">
          <div
            :class="`w-full flex flex-col ${
              index % 2 === 0 ? '' : 'items-end'
            }`"
          >
            <h2
              :class="`${
                matches ? 'text-[24px]' : 'w-2/3 text-[32px]'
              } text-blue-150 tracking-[10%] font-semibold`"
            >
              {{ item.title }}
            </h2>
            <div
              :class="`w-full flex relative ${
                index % 2 === 0 ? '' : 'justify-end'
              }`"
            >
              <div :class="`${matches ? '' : 'w-2/3'}`">
                <img :src="`${item.src} `" alt="a1_photo" />
              </div>

              <!-- Vue 中的条件渲染 -->
              <template v-if="!matches">
                <div
                  v-if="index % 2 === 0"
                  class="w-1/3 bg-red-150 h-[3px] top-1/2 left-2/3 absolute"
                >
                  <div
                    class="bg-red-250 w-[20px] h-[20px] rounded-[50%] absolute right-0 translate-x-1/2 -translate-y-1/2"
                  ></div>
                </div>
                <div
                  v-else
                  class="w-1/3 bg-red-150 h-[3px] top-1/2 left-0 absolute"
                >
                  <div
                    class="bg-red-250 w-[20px] h-[20px] rounded-[50%] absolute left-0 -translate-x-1/2 -translate-y-1/2"
                  ></div>
                </div>
              </template>
            </div>

            <div :class="`${matches ? '' : 'w-2/3'}`">
              <div class="text-red-250 leading-[225%] font-medium">
                {{ item.date }}
              </div>
              <div class="d">{{ item.desc }}</div>
            </div>
          </div>
        </div>

        <div v-if="!matches" class="flex-1"></div>
      </section>

      <div
        v-if="!matches"
        class="absolute bg-red-150 w-[3px] left-1/2 -translate-x-1/2 top-[50px] -bottom-[300px] z-0"
        ref="lineRef"
      >
        <div
          class="bg-red-250 w-[20px] h-[20px] rounded-[50%] absolute right-0 top-0 translate-x-1/2"
        ></div>
        <div
          class="bg-red-250 w-[20px] h-[20px] rounded-[50%] absolute right-0 bottom-0 translate-x-1/2"
        ></div>
      </div>
    </div>
  </AppModal>
</template>

<script setup lang="ts">
import AppModal from "@/components/AppModal.vue";
import { newsData } from "@/utils/newsData";
import { ref, onMounted } from "vue";
import { useMediaQuery } from "@vueuse/core";
const matches = useMediaQuery("(max-width: 768px)");

const lineRef = ref(null);

const handleScroll = () => {
  const modalElem = document.getElementById("newsModal");
  const sectionElement = document.getElementById("firstSection");

  if (modalElem && sectionElement) {
    const scrollTop = modalElem.scrollTop;
    const h = sectionElement.clientHeight;
    const num = Math.ceil(scrollTop / h + 1);

    const nextChild = document.querySelector(`.activity:nth-child(${num})`);
    if (num % 2 === 0) {
      nextChild?.classList.remove("right-move-out-animate");
      nextChild?.classList.add("right-move-in-animate");
    } else {
      nextChild?.classList.remove("left-move-out-animate");
      nextChild?.classList.add("left-move-in-animate");
    }

    for (let index = num + 1; index <= newsData.length; index++) {
      const hiddenChild = document.querySelector(
        `.activity:nth-child(${index})`
      );
      if (index % 2 === 0) {
        hiddenChild?.classList.replace(
          "right-move-in-animate",
          "right-move-out-animate"
        );
      } else {
        hiddenChild?.classList.replace(
          "left-move-in-animate",
          "left-move-out-animate"
        );
      }
    }

    if (lineRef.value) {
      lineRef.value.style.bottom = `-${scrollTop}px`;
    }
  }
};

onMounted(() => {
  const modalElem = document.getElementById("newsModal");

  if (modalElem) {
    modalElem.addEventListener("scroll", handleScroll);
  }

  return () => {
    if (modalElem) {
      modalElem.removeEventListener("scroll", handleScroll);
    }
  };
});
</script>
