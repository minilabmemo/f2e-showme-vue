<template>
  <div class="overflow-hidden" :style="{ backgroundImage: `url(${BG})` }">
    <section id="about" @click="toggleModal">
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
      <Title text="政策議題"></Title>

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
      <div class="self-end"><Title text="最新活動"></Title></div>
      <div
        class="carousel-bg rotate-[15deg] overflow-hidden self-center w-[120vw]"
      >
        <svg class="svg w-0 h-0">
          <clipPath id="triangle-path" clipPathUnits="objectBoundingBox">
            <path
              d="M0.496,0.991 C0.502,1,0.515,1,0.521,0.991 L1,0.029 C1,0.016,1,0,0.989,0 H0.019 C0.007,0,0,0.016,0.006,0.029 L0.496,0.991"
            ></path>
          </clipPath>
        </svg>
        <svg class="svg w-0 h-0">
          <clipPath
            id="triangle-path-reverse"
            clipPathUnits="objectBoundingBox"
          >
            <path
              d="M0.006,0.977 C0,0.989,0.007,1,0.019,1 L0.989,1 C1,1,1,0.988,1,0.977 L0.512,0.012 C0.507,0,0.492,0,0.486,0.012 L0.006,0.977"
            ></path>
          </clipPath>
        </svg>
        <div class="h-[100px] bg-blue-250"></div>
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
      ref="refService"
    >
      <Title text="民眾服務信箱"></Title>
      <div class="flex flex-col items-center py-[177px] relative">
        <!-- 其他內容 -->
      </div>
    </section>

    <OpenModal :visible="isModalVisible" @closeModal="closeModal">
      <div className=" scroll-bar-no-show overflow-y-auto h-full">
        <div className="flex flex-col items-center">
          <h1
            className="text-[32px] md:text-[48px] font-semibold text-blue-250"
          >
            薩卡的主張
          </h1>
          <div
            className="w-[90%] text-[20px] text-black-default leading-[225%] tracking-[6px] my-[32px]"
          >
            我堅信，藉由推動更完善的<span className="text-red-250">貓咪</span
            >福利和相關政策，更是間接地投資於台灣的未來。畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的<span
              className="text-red-250"
              >貓咪</span
            >福利政策，為台灣的 GDP 經濟帶來巨大效益。
            因此，我期望能在立法院內推進這些政策，確保每一隻<span
              className="text-red-250"
              >貓咪</span
            >都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻<span
              className="text-red-250"
              >貓咪</span
            >開始。
          </div>
        </div>

        <div className="flex justify-around flex-col md:flex-row">
          <div className="h"><img :src="about_sakka" alt="about_sakka" /></div>
          <div className="h">
            <h1
              className="text-[32px] md:text-[48px] font-semibold text-blue-250"
            >
              關於薩卡
            </h1>
            <div
              className="my-[46px] text-[24px] leading-[208%] tracking-[3.6px]"
            >
              <h3 className="text-red-250">經歷</h3>
              <div className="h">曾擔任「喵星宇宙」顧問</div>
              <div className="h">現任「喵喵大好」榮譽理事長</div>
              <div className="h">國立喵喵大學特聘講師及榮譽校友</div>
            </div>
            <div
              className="my-[46px] text-[24px] leading-[208%] tracking-[3.6px]"
            >
              <h3 className="text-red-250">學歷</h3>
              <div className="h">英國哈喵大學 / 喵行為學系博士畢業</div>
              <div className="h">國立喵喵大學 / 喵行為學系碩士畢業</div>
              <div className="h">國立喵喵大學 / 喵喵心理系學士畢業</div>
            </div>
          </div>
        </div>
        <div
          className="relative w-[10px]  font-noto text-gray-350 text-[85px] opacity-10 font-bold"
        >
          <div className="absolute -top-[50px] -translate-x-[200px] z-10">
            <div className="scale-x-[-1] whitespace-nowrap ">薩卡班甲魚</div>
            <div className="scale-x-[-1] ">Sacabambaspis</div>
            <div className="scale-x-[-1] whitespace-nowrap">
              サカバンバスピス
            </div>
          </div>
        </div>

        <div className="flex justify-around flex-col md:flex-row my-[32px]">
          <div
            className="flex-1 text-[20px] text-black-default leading-[225%] tracking-[6px]"
          >
            <h1
              className="text-[32px] md:text-[48px] font-semibold text-blue-250"
            >
              薩卡的起源
            </h1>
            <div className="my-[32px]">
              薩卡出生於澳洲附近的海域，隨著洋流去過很多地方，某天在躲避掠食者的攻擊時，努力的一躍跳上了岸，發現自己竟然可以在空氣中自由呼吸，於是薩卡開始了地面上的旅行。
              風和日麗的某個夏天，薩卡走進了貓咪咖啡廳，馬上就被許多<span
                className="text-cyan-150"
                >＼＼＼</span
              ><span className="text-yellow-250">世界上最可愛的生物們</span
              ><span className="text-cyan-150">／／／</span
              >包圍了，基於散播歡樂散播愛的理念，薩卡決定要將<span
                className="text-cyan-150"
                >＼＼＼</span
              ><span className="text-yellow-250">貓貓的可愛</span
              ><span className="text-cyan-150">／／／</span>發揚光大。
              「就從改善這個太平洋小島的貓貓權益開始吧！」於是薩卡戴上了貓耳，決心參選下一屆立委！
            </div>
          </div>
          <div className="flex-1">
            <img :src="sakka_detail" alt="sakka_detail" />
          </div>
        </div>
      </div>
    </OpenModal>
    <!-- <Modal v-if="aboutModal" SetModal="setAboutModal">

      <div>123</div>
    </Modal>

    <NewsModal v-if="newsModal" setNewsModal="setNewsModal" /> -->
  </div>
</template>

<script setup>
import { ref } from "vue";

// import NewsModal from './NewsModal.vue'; // 這裡假設 NewsModal 組件的路徑正確
// import Title from './Title.vue'; // 這裡假設 Title 組件的路徑正確
// import Slider from "vue-slick"; // 這裡假設你已經安裝了 vue-slick
import { newsData } from "@/utils/newsData.ts";
import BG from "@/assets/images/BG_top.png";
import banner from "@/assets/images/banner_click.png";
import title_bg from "@/assets/images/title_bg.svg";
import about_sakka from "@/assets/images/about_sakka.png";
import sakka_detail from "@/assets/images/sakka_detail.png";
const aboutModal = ref(false);
const newsModal = ref(false);
const title = ref(newsData[0].title);

import OpenModal from "@/components/OpenModal.vue";

// 使用 ref 定義狀態
const isModalVisible = ref(false);

// 定義 toggleModal 方法
const toggleModal = () => {
  isModalVisible.value = !isModalVisible.value;
  console.log(
    "🚀 ~ toggleModal ~  isModalVisible.value:",
    isModalVisible.value
  );
};

// 定義 closeModal 方法
const closeModal = () => {
  isModalVisible.value = false;
};
</script>
