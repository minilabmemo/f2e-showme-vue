<template>
  <div class="overflow-hidden" :style="{ backgroundImage: `url(${BG})` }">
    <section id="about" @click="toggleAboutModal">
      <div class="relative">
        <img :src="banner" alt="banner" />
      </div>
      <div
        class="border-y-4 border-pink-default bg-white flex flex-nowrap overflow-hidden py-3 font-bold"
      >
        <div
          class="text whitespace-nowrap text-3xl text-pink-default animate-marquee"
        >
          立委候選人請支持貓黨 1 號＼＼喵薩卡／／立委候選人請支持貓黨 1
          號＼＼喵薩卡／／立委候選人請支持貓黨 1 號＼＼喵薩卡／／
        </div>
        <div
          class="text whitespace-nowrap text-3xl text-pink-default animate-marquee"
        >
          立委候選人請支持貓黨 1 號＼＼喵薩卡／／立委候選人請支持貓黨 1
          號＼＼喵薩卡／／立委候選人請支持貓黨 1 號＼＼喵薩卡／／
        </div>
      </div>
    </section>

    <section
      id="policies"
      class="relative flex flex-col items-center justify-center py-[50px] md:block md:px-[63px] md:py-[177px]"
    >
      <AppTitle text="政策議題"></AppTitle>

      <div class="flex flex-col items-center p-10">
        <h2 class="text-[32px] font-semibold text-red-250 m-[22px]">
          我們的訴求
        </h2>
        <div class="text-2xl font-medium text-black-default leading-[50px]">
          讓庫拉皮卡下船！
        </div>
        <div class="text-2xl font-medium text-black-default leading-[50px]">
          不讓貓貓過重，過重也是一種虐待！
        </div>
        <div class="text-2xl font-medium text-black-default leading-[50px]">
          為毛孩子謀福利！推動寵物醫療保障方案。
        </div>
        <div class="text-2xl font-medium text-black-default leading-[50px]">
          打造休閒天堂！推廣寵物休閒與娛樂場所。
        </div>
        <div class="text-2xl font-medium text-black-default leading-[50px]">
          推廣寵物飼養教育，讓愛更加專業。
        </div>
      </div>
    </section>

    <section id="news" class="relative flex flex-col w-full justify-center">
      <div class="self-end"><AppTitle text="最新活動"></AppTitle></div>
      <div
        class="carousel-bg rotate-[15deg] overflow-hidden self-center w-[120vw]"
      >
        <AppSwiper
          :newsData="newsData"
          :title="title"
          @updateTitle="updateTitle"
        />
      </div>
      <div
        class="font-semibold text-blue-150 relative -translate-x-4 h-[300px]"
      >
        <div
          class="text-[24px] md:text-[32px] absolute top-0 px-[30px] z-10 flex flex-col justify-center items-start w-[1091px] h-[230px] gap1 md:gap-3"
        >
          {{ title }}
          <button
            class="bg-blue-150 rounded-[30px] py-[1px] px-[21px] self-start md:self-center md:ml-[50px]"
            @click="toggleNewsModal"
          >
            <span
              class="text-xl md:text-2xl leading-[40px] font-semibold text-white"
            >
              暸解更多</span
            >
          </button>
        </div>
        <div class="h-[230px] absolute top-0 left-0">
          <img :src="title_bg" alt="title_bg" class="w-full h-full" />
        </div>
      </div>
    </section>

    <section
      id="services"
      class="h-[1080px] flex flex-col justify-center px-[63px] py-[177px]"
      ref="targetService"
    >
      <AppTitle text="民眾服務信箱"></AppTitle>

      <div class="flex flex-col items-center py-[177px] relative">
        <div class="w-[1328px] h-[493px] absolute top-0 left-0">
          <img :src="plane_path" alt="plane_path" />
        </div>
        <div
          class="w-[226px] h-[111px] absolute plane top-0 left-0"
          :class="{ fly: ttargetServiceIsVisible }"
        >
          <img :src="plane" alt="plane" />
        </div>
        <div
          class="absolute top-[50%] flex flex-col justify-center items-center"
        >
          <h2 class="text-[32px] font-semibold text-red-250 m-[22px]">
            您的聲音，我們的行動！
          </h2>
          <div class="text-2xl font-medium text-black-default leading-[50px]">
            親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到您的建議。
          </div>
          <div class="text-2xl font-medium text-black-default leading-[50px]">
            分享您的想法，一同為我們的未來打造更美好！！
          </div>
        </div>
      </div>
    </section>

    <AppModal v-if="isAboutModalVisible" @closeModal="closeAboutModal">
      <div class="scroll-bar-no-show overflow-y-auto h-full">
        <div class="flex flex-col items-center">
          <h1 class="text-[32px] md:text-[48px] font-semibold text-blue-250">
            薩卡的主張
          </h1>
          <div
            class="w-[90%] text-[20px] text-black-default leading-[225%] tracking-[6px] my-[32px]"
          >
            我堅信，藉由推動更完善的<span class="text-red-250">貓咪</span
            >福利和相關政策，更是間接地投資於台灣的未來。畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的<span
              class="text-red-250"
              >貓咪</span
            >福利政策，為台灣的 GDP 經濟帶來巨大效益。
            因此，我期望能在立法院內推進這些政策，確保每一隻<span
              class="text-red-250"
              >貓咪</span
            >都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻<span
              class="text-red-250"
              >貓咪</span
            >開始。
          </div>
        </div>

        <div class="flex justify-around flex-col md:flex-row">
          <div class="h"><img :src="about_sakka" alt="about_sakka" /></div>
          <div class="h">
            <h1 class="text-[32px] md:text-[48px] font-semibold text-blue-250">
              關於薩卡
            </h1>
            <div class="my-[46px] text-[24px] leading-[208%] tracking-[3.6px]">
              <h3 class="text-red-250">經歷</h3>
              <div class="h">曾擔任「喵星宇宙」顧問</div>
              <div class="h">現任「喵喵大好」榮譽理事長</div>
              <div class="h">國立喵喵大學特聘講師及榮譽校友</div>
            </div>
            <div class="my-[46px] text-[24px] leading-[208%] tracking-[3.6px]">
              <h3 class="text-red-250">學歷</h3>
              <div class="h">英國哈喵大學 / 喵行為學系博士畢業</div>
              <div class="h">國立喵喵大學 / 喵行為學系碩士畢業</div>
              <div class="h">國立喵喵大學 / 喵喵心理系學士畢業</div>
            </div>
          </div>
        </div>
        <div
          class="relative w-[10px] font-noto text-gray-350 text-[85px] opacity-10 font-bold"
        >
          <div class="absolute -top-[50px] -translate-x-[200px] z-10">
            <div class="scale-x-[-1] whitespace-nowrap">薩卡班甲魚</div>
            <div class="scale-x-[-1]">Sacabambaspis</div>
            <div class="scale-x-[-1] whitespace-nowrap">サカバンバスピス</div>
          </div>
        </div>

        <div class="flex justify-around flex-col md:flex-row my-[32px]">
          <div
            class="flex-1 text-[20px] text-black-default leading-[225%] tracking-[6px]"
          >
            <h1 class="text-[32px] md:text-[48px] font-semibold text-blue-250">
              薩卡的起源
            </h1>
            <div class="my-[32px]">
              薩卡出生於澳洲附近的海域，隨著洋流去過很多地方，某天在躲避掠食者的攻擊時，努力的一躍跳上了岸，發現自己竟然可以在空氣中自由呼吸，於是薩卡開始了地面上的旅行。
              風和日麗的某個夏天，薩卡走進了貓咪咖啡廳，馬上就被許多<span
                class="text-cyan-150"
                >＼＼＼</span
              ><span class="text-yellow-250">世界上最可愛的生物們</span
              ><span class="text-cyan-150">／／／</span
              >包圍了，基於散播歡樂散播愛的理念，薩卡決定要將<span
                class="text-cyan-150"
                >＼＼＼</span
              ><span class="text-yellow-250">貓貓的可愛</span
              ><span class="text-cyan-150">／／／</span>發揚光大。
              「就從改善這個太平洋小島的貓貓權益開始吧！」於是薩卡戴上了貓耳，決心參選下一屆立委！
            </div>
          </div>
          <div class="flex-1">
            <img :src="sakka_detail" alt="sakka_detail" />
          </div>
        </div>
      </div>
    </AppModal>

    <NewsModal v-if="isNewsModalVisible" @closeModal="closeNewsModal" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import AppTitle from "@/components/sakka/AppTitle.vue";
import AppSwiper from "@/components/AppSwiper.vue";
import { newsData } from "@/utils/newsData.ts";
import BG from "@/assets/images/BG_top.png";
import banner from "@/assets/images/banner_click.png";
import title_bg from "@/assets/images/title_bg.svg";
import about_sakka from "@/assets/images/about_sakka.png";
import sakka_detail from "@/assets/images/sakka_detail.png";
import plane from "@/assets/images/plane.png";
import plane_path from "@/assets/images/plane_path.svg";

const title = ref(newsData[0].title);
function updateTitle(newTitle) {
  title.value = newTitle;
}
import AppModal from "@/components/AppModal.vue";
import NewsModal from "@/components/sakka/NewsModal.vue";
const isAboutModalVisible = ref(false);
const toggleAboutModal = () => {
  isAboutModalVisible.value = !isAboutModalVisible.value;
  console.log(
    "🚀 ~ toggleAboutModal ~  isAboutModalVisible.value :",
    isAboutModalVisible.value
  );
};
const closeAboutModal = () => {
  isAboutModalVisible.value = false;
};

const isNewsModalVisible = ref(false);
const toggleNewsModal = () => {
  isNewsModalVisible.value = !isNewsModalVisible.value;
};
const closeNewsModal = () => {
  isNewsModalVisible.value = false;
};

import { useIntersectionObserver } from "@vueuse/core";
const targetService = ref(null);
const ttargetServiceIsVisible = ref(false);
const { stop } = useIntersectionObserver(
  targetService,
  ([{ isIntersecting }], observerElement) => {
    ttargetServiceIsVisible.value = isIntersecting;
  }
);
</script>
