<template>
  <section
    class="min-h-screen bg-white flex justify-center items-center w-full"
  >
    <main class="bg-white md:h-[854px] h-full flex w-full Outfit">
      <div
        class="max-w-[1366px] w-full flex md:flex-row flex-col gap-8 md:gap-0 mx-auto h-full md:p-4"
      >
        <div
          class="w-full bg-white overflow-hidden min-h-[90vh] md:min-h-fit h-full relative rounded-tl-[56px] rounded-bl-[56px]"
        >
          <div
            class="mask-index w-auto rounded-t-[56px] max-w-full lg:h-full ml-4 h-[50vh] lg:max-h-fit max-h-[50vh] overflow-hidden relative -inset-[1px] bg-no-repeat"
            ref="container"
          >
            <div
              class="h-full md:h-full justify-start items-start w-full absolute left-0 top-0"
              ref="bg1"
            >
              <img
                src="/images/backOrange.png"
                class="object-cover bg-no-repeat h-full"
              />
            </div>
            <div
              class="flex justify-start items-start h-full md:h-full w-full absolute left-0 top-28 right-0 bottom-0 z-0"
              ref="bg2"
            >
              <img
                src="/images/logo.png"
                class="object-cover bg-no-repeat h-auto max-w-[200px]"
              />
            </div>

            <div
              class="flex max-h-[596px] lg:max-h-[100vh] lg:h-full w-full absolute top-0 left-0 bottom-0 z-[1]"
              ref="image1"
            >
              <img
                src="/images/girl.png"
                alt="logo"
                class="max-h-[500px] lg:max-h-[150vh] w-auto absolute -scale-x-100 lg:-right-20 lg:-bottom-52 lg:left-auto -bottom-10 -right-8"
              />
            </div>
            <div
              class="flex h-full w-full absolute left-0 top-0 right-0 bottom-0"
            >
              <img
                src="/images/girl.png"
                alt="logo"
                class="max-h-[500px] lg:max-h-[150vh] w-auto absolute -left-10 lg:top-0 lg:bottom-auto top-auto -bottom-52"
                ref="image2"
              />
              <div
                class="w-1/2 pr-4 py-4 h-[100px] bg-white absolute left-0 bottom-0 z-0 rounded-tr-[50px] flex justify-end items-center"
              >
                <div class="lg:hidden w-full" ref="buttonD">
                  <button
                    class="w-full hover:scale-105 transition-all bg-[#9123ff] text-white rounded-[48px] shadow-sm text-lg font-semibold text-center px-10 py-5"
                  >
                    {{ languageSelect.shop }}
                  </button>
                  <div
                    class="absolute -bottom-6 left-0 right-0 bg-white h-3 z-30"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="absolute bottom-0 content-center h-max-[50vh] lg:h-1/2 left-0 w-full flex flex-col md:flex-row z-[1]"
          >
            <div class="flex flex-col w-full px-8 mt-10 h-auto">
              <div class="w-full justify-start flex mt-2">
                <img
                  src="/images/black.png"
                  alt="black"
                  class="md:max-w-[288px] max-w-[200px] h-auto"
                  ref="black"
                />
              </div>
              <div class="w-full justify-start ml-32 flex">
                <img
                  src="/images/friday.png"
                  alt="black"
                  class="md:max-w-[259px] max-w-[180px] h-auto"
                  ref="friday"
                />
              </div>
              <div
                class="grid grid-cols-3 lg:grid-cols-3 gap-4 items-center justify-center"
              >
                <div class="h-[131px] lg:col-span-1 col-span-1 -mt-10">
                  <div
                    class="bg-[#ededf2] rounded-full h-[133px] flex flex-col items-center w-[74px]"
                    ref="eng"
                  >
                    <p class="absolute top-[20px] px-[15px] text-[#8a8aaa]">
                      Eng
                    </p>
                    <p class="absolute bottom-[20px] px-[15px] text-[#8a8aaa]">
                      Es
                    </p>

                    <div
                      @click="lang = !lang"
                      :class="{ 'bottom-14': lang, 'bottom-0': !lang }"
                      class="w-[57px] absolute hover:scale-95 transition-all h-[60px] bg-white m-2 flex justify-center items-center rounded-full cursor-pointer hover:shadow-sm"
                    >
                      <Icon
                        icon="mdi:translate"
                        class="w-5 h-5 text-[#8a8aaa]"
                      />
                    </div>
                  </div>
                </div>
                <p
                  class="w-full balance text-black lg:col-span-1 col-span-2 h-full flex items-end justify-end text-right lg:text-left"
                  ref="text"
                >
                  {{ languageSelect.text }}
                </p>
                <div
                  ref="redes"
                  class="flex flex-row w-full gap-4 text-black lg:col-span-1 col-span-3 items-center justify-end"
                >
                  <Icon
                    icon="bi:discord"
                    class="w-6 h-6 cursor-pointer hover:shadow-sm transition-all"
                  />
                  <Icon
                    icon="bi:twitter-x"
                    class="w-6 h-6 cursor-pointer hover:shadow-sm transition-all"
                  />
                  <Icon
                    icon="bi:instagram"
                    class="w-6 h-6 cursor-pointer hover:shadow-sm transition-all"
                  />
                </div>
              </div>
            </div>
            <div
              class="hidden lg:flex w-full justify-center items-end md:pb-16 md:pl-4 h-full"
              ref="button"
            >
              <button
                class="max-w-[424px] hover:scale-105 transition-all bg-[#9123ff] text-white rounded-[48px] shadow-sm md:text-2xl xl:text-[32px] font-semibold text-center xl:px-[140px] md:px-[70px] py-[23px] md:py-[42px]"
              >
                {{ languageSelect.shop }}
              </button>
            </div>
          </div>
          <div
            class="z-10 text-black w-auto font-medium bg-white/20 backdrop-blur-sm absolute top-[28px] mx-4 md:mx-0 lg:left-10 border-[2px] border-black items-center rounded-[24px] flex flex-row gap-[32px] px-[24px] py-[12px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="30"
              viewBox="0 0 45 30"
              fill="none"
            >
              <path
                d="M12.469 4.11211L10.7888 11.1277L25.1738 5.26173L12.469 4.11211ZM10.6856 11.5994L8.48951 20.8111L22.4029 14.8861L10.6856 11.5994ZM7.67888 21.1648L4.77535 20.9732L9.0938 0L32.6463 2.72667V5.33542L17.937 10.6561L31.423 13.1175L30.2586 16.1242L0 24.4368L7.67888 21.1648Z"
                fill="black"
              />
              <path
                d="M29.4853 22.5283L40.8627 17.7367L30.2241 15.6365L29.4853 22.5283ZM29.4326 22.9927L28.7254 29.5891L25.2531 27.0983L28.0183 14.1483L30.9313 12.9874L44.5567 16.0797L45 18.7816L29.4326 22.9927Z"
                fill="black"
              />
              <path
                d="M21.0988 21.8944L21.7473 23.7103L24.3284 22.4003L25.82 15.3316L25.1455 14.0605L22.8887 15.0333L21.0988 21.8944ZM18.0379 23.6195L20.3077 13.1137L25.794 11.5443L28.5696 13.5806L26.7797 24.4236L20.9432 26.5248L18.0379 23.6195Z"
                fill="#9122FF"
              />
            </svg>
            <div class="flex gap-6" ref="nav">
              <NuxtLink to="/">
                <p class="cursor-pointer">
                  {{ languageSelect.header.home }}
                </p></NuxtLink
              >
              <p class="cursor-pointer">
                {{ languageSelect.header.sponsor }}
              </p>
            </div>
          </div>
        </div>

        <div
          class="scrollTrig w-full md:max-w-[360px] flex justify-start md:mb-0 mb-8 flex-col items-start relative bg-white overflow-hidden"
        >
          <div
            class="w-full flex flex-row flex-wrap md:flex-col md:max-w-[360px] bg-[#F5F5FC] relative rounded-b-[40px] rounded-t-[40px]"
          >
            <div
              class="w-full md:w-auto h-auto shrink-0 text-[#8FFF5B] relative left-0 top-0 right-0"
              ref="start"
            >
              <div class="relative">
                <svg
                  class=""
                  width="350"
                  height="304"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 360 311"
                  fill="none"
                >
                  <path
                    d="M0 76.8C0 49.9175 0 36.4762 5.23169 26.2085C9.83361 17.1767 17.1767 9.83361 26.2085 5.23169C36.4762 0 49.9175 0 76.8 0H283.2C310.083 0 323.524 0 333.792 5.23169C342.823 9.83361 350.166 17.1767 354.768 26.2085C360 36.4762 360 49.9175 360 76.8V169.7C360 196.583 360 210.024 354.768 220.292C350.166 229.323 342.823 236.666 333.792 241.268C323.524 246.5 310.083 246.5 283.2 246.5H261.656C261.595 246.5 261.565 246.5 261.537 246.5C241.162 246.523 223.022 259.408 216.289 278.638C216.28 278.664 216.27 278.693 216.25 278.75C216.23 278.807 216.22 278.836 216.211 278.862C209.478 298.092 191.338 310.977 170.963 311C170.935 311 170.905 311 170.844 311H76.8C49.9175 311 36.4762 311 26.2085 305.768C17.1767 301.166 9.83361 293.823 5.23169 284.792C0 274.524 0 261.083 0 234.2V76.8Z"
                    fill="currentColor"
                  />
                </svg>
                <svg
                  class="absolute right-3 bottom-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="130"
                  height="58"
                  viewBox="0 0 144 61"
                  fill="none"
                >
                  <path
                    d="M19.2492 18.8555C24.6186 8.19125 35.4784 1.40315 47.4172 1.24878L113.305 0.39687C130.193 0.17852 144 13.8082 144 30.6972C144 47.433 130.433 61 113.697 61H8.70984C1.9905 61 -1.73536 53.2177 2.47806 47.9835L5.97142 43.6439C7.3863 41.8862 8.61131 39.9839 9.62601 37.9685L19.2492 18.8555Z"
                    fill="black"
                  />
                </svg>
                <svg
                  class="absolute right-12 bottom-3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="58"
                  height="31"
                  viewBox="0 0 58 31"
                  fill="none"
                >
                  <path
                    d="M57.8596 25.6964C57.8596 22.7817 54.3372 21.3205 52.274 23.3792L50.881 24.7692C48.7857 26.8599 50.2664 30.4402 53.2265 30.4402C54.1611 30.4402 55.0524 30.0463 55.6817 29.3553L57.0065 27.9003C57.5554 27.2975 57.8596 26.5116 57.8596 25.6964Z"
                    fill="white"
                  />
                  <path
                    d="M57.8596 2.8161C57.8596 1.26081 56.5988 0 55.0435 0C54.2788 0 53.5469 0.311014 53.0161 0.861565L31.0329 23.664C28.5839 26.2042 30.3841 30.4402 33.9125 30.4402H39.3726C40.4161 30.4402 41.4182 30.0325 42.1652 29.304L56.6522 15.1774C57.4242 14.4245 57.8596 13.3919 57.8596 12.3136V2.8161Z"
                    fill="white"
                  />
                  <path
                    d="M41.2014 6.79503C43.6757 4.26192 41.881 0 38.3399 0H31.761C30.6921 0 29.6677 0.427795 28.9163 1.18796L6.73376 23.6282C4.23632 26.1546 6.02599 30.4402 9.57848 30.4402H16.4205C17.4977 30.4402 18.5293 30.0058 19.2819 29.2353L41.2014 6.79503Z"
                    fill="white"
                  />
                </svg>
                <div
                  class="font-medium text-base text-black absolute left-0 bottom-0 px-8 py-6 md:ml-0 ml-2"
                >
                  Timezone - UTC
                </div>
              </div>

              <div
                class="flex flex-col gap-4 w-full p-8 absolute left-0 top-0 right-0 bottom-0 bg-[#8FFF5B] rounded-[48px] h-[240px] mx-2 md:mx-0"
              >
                <div class="inline-flex flex-col gap-0 items-start">
                  <p class="text-[#5E9D40] text-base">
                    {{ languageSelect.start }}
                  </p>
                  <div
                    class="flex w-full items-center flex-row justify-between"
                  >
                    <div class="flex justify-start gap-1">
                      <p class="text-black text-3xl font-medium">Dic 3</p>
                      <p class="text-base text-[#5E9D40]">2023</p>
                    </div>
                    <div
                      class="flex text-black h-auto py-2 px-4 items-center gap-2 justify-center rounded-full border-black border-[1px]"
                    >
                      09:00 a.m
                    </div>
                  </div>
                </div>
                <div class="inline-flex flex-col gap-0 items-start">
                  <p class="text-[#5E9D40] text-base">
                    {{ languageSelect.end }}
                  </p>
                  <div
                    class="flex w-full items-center flex-row justify-between"
                  >
                    <div class="flex justify-start gap-1">
                      <p class="text-black text-3xl font-medium">Dic 5</p>
                      <p class="text-base text-[#5E9D40]">2023</p>
                    </div>
                    <div
                      class="flex text-black h-auto py-2 px-4 items-center gap-2 justify-center rounded-full border-black border-[1px]"
                    >
                      03:00 p.m
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col w-full gap-2 p-2">
              <div
                ref="stats"
                class="rounded-[32px] text-black bg-white inline-flex flex-col items-start gap-2 px-8 py-8"
              >
                <p class="font-medium">{{ languageSelect.total }}</p>
                <p class="text-6xl font-bold">{{ formatedNum }}+</p>
              </div>
              <div
                ref="rules"
                class="rounded-[32px] text-black bg-white inline-flex flex-col items-start gap-2 px-8 py-8 relative"
              >
                <div
                  class="w-12 h-12 hover:scale-105 rounded-full bg-black flex items-center justify-center absolute top-0 right-0 cursor-pointer hover:shadow-sm transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M10.8333 9.16667L17.6666 2.33334"
                      stroke="#fff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.3333 5.66666V1.66666H14.3333"
                      stroke="#fff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.66669 5H6.33335C3.00002 5 1.66669 6.33333 1.66669 9.66667V13.6667C1.66669 17 3.00002 18.3333 6.33335 18.3333H10.3334C13.6667 18.3333 15 17 15 13.6667V12.3333"
                      stroke="#fff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div class="inline-flex gap-4 items-center">
                  <Icon
                    icon="material-symbols-light:menu-book-outline"
                    class="w-7 h-7"
                  />
                  <p class="font-medium text-2xl">{{ languageSelect.rules }}</p>
                </div>
              </div>
              <div
                ref="faq"
                class="rounded-[32px] text-black bg-white inline-flex flex-col items-start gap-2 px-8 py-8 relative"
              >
                <div
                  class="w-12 hover:scale-105 h-12 rounded-full bg-[#FFC01D] flex items-center justify-center absolute top-0 right-0 cursor-pointer hover:shadow-sm transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M10.8333 9.16667L17.6666 2.33334"
                      stroke="#221533"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.3333 5.66666V1.66666H14.3333"
                      stroke="#221533"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.66669 5H6.33335C3.00002 5 1.66669 6.33333 1.66669 9.66667V13.6667C1.66669 17 3.00002 18.3333 6.33335 18.3333H10.3334C13.6667 18.3333 15 17 15 13.6667V12.3333"
                      stroke="#221533"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div class="inline-flex gap-4 items-center">
                  <Icon icon="fluent:trophy-28-regular" class="w-7 h-7" />
                  <p class="font-medium text-2xl">{{ languageSelect.faqs }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-center w-full">
            <div
              class="flex gap-4 max-w-[360px] text-black w-full justify-between items-end text-xl font-bold pt-8 px-4"
            >
              <p ref="today">Today</p>
              <div
                class="flex flex-col justify-end w-auto text-2xl font-bold"
                ref="day"
              >
                <span class="w-full flex justify-end">{{
                  new Date().getDate()
                }}</span>
                <span class="flex w-full justify-start text-3xl">{{
                  mounth
                }}</span>
              </div>
              <div ref="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="72"
                  height="68"
                  viewBox="0 0 72 68"
                  fill="none"
                >
                  <path
                    d="M0 19.5797C0 16.8529 2.21049 14.6424 4.93726 14.6424H13.8789C16.7825 14.6424 19.5575 15.8401 21.5493 17.9528C25.6568 22.3098 32.5641 22.3748 36.7528 18.0958L50.9054 3.63826C53.1832 1.31141 56.3021 0 59.5582 0H65.3689C68.8472 0 71.6668 2.81966 71.6668 6.29789C71.6668 7.96972 71.0021 9.57294 69.8191 10.7543L47.8376 32.7052C47.1002 33.4416 46.1007 33.8552 45.0586 33.8552C41.5936 33.8552 39.8218 38.0113 42.2209 40.5113L59.5076 58.5247C60.4776 59.5355 61.0193 60.8821 61.0193 62.2831C61.0193 65.2809 58.5891 67.7111 55.5913 67.7111H50.0477C47.1109 67.7111 44.2966 66.5337 42.2348 64.4423L1.42142 23.046C0.510608 22.1222 0 20.877 0 19.5797Z"
                    fill="black"
                  />
                  <path
                    d="M0 53.352C0 50.7459 2.1126 48.6333 4.71863 48.6333H10.6418C13.5247 48.6333 16.2842 49.803 18.289 51.8746L26.1593 60.0072C26.9794 60.8547 27.4379 61.9878 27.4379 63.1672C27.4379 65.6767 25.4035 67.7111 22.894 67.7111H16.349C13.2381 67.7111 10.2704 66.4044 8.1698 64.1099L1.23819 56.5382C0.441742 55.6682 0 54.5315 0 53.352Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import gsap from "gsap";
import language from "@/public/lang";

const container = ref(null);
const image1 = ref(null);
const image2 = ref(null);
const bg1 = ref(null);
const bg2 = ref(null);
const friday = ref(null);
const black = ref(null);
const button = ref(null);
const buttonD = ref(null);
const nav = ref(null);

const eng = ref(null);
const text = ref(null);
const redes = ref(null);

// Sección 2

const start = ref(null);
const stats = ref(null);
const rules = ref(null);
const faq = ref(null);
const today = ref(null);
const day = ref(null);
const icon = ref(null);

const lang = ref(false);
const languageSelect = computed(() => {
  return lang.value ? language.es : language.en;
});

const data = reactive({
  num: 0,
  maxNum: 0,
});

const month_names_short = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const mounth = ref(month_names_short[new Date().getMonth()]);

function increaseCount() {
  data.num = 10000;
}

watch(data, (newValue, oldValue) => {
  gsap.to(data, {
    duration: 0.5,
    maxNum: newValue.num,
    ease: "none",
  });
});

const formatedNum = computed(() => {
  let pesos = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });
  return pesos.format(Math.round(data.maxNum));
});

watch(lang, () => {
  languageSelect.value = lang.value ? language.es : language.en;
});

increaseCount();

onMounted(() => {
  gsap.from(container.value, {
    scale: 0,
    opacity: 1,
    ease: "power2.out",
    duration: 1.4,
  });

  gsap.from(image1.value, {
    opacity: 1,
    x: 1000,
    duration: 1.4,
    y: 0,
    ease: "power2.out",
    delay: 0,
  });

  gsap.from(image2.value, {
    opacity: 1,
    x: -600,
    y: -400,
    duration: 1.4,
    ease: "power2.out",
    delay: 0,
  });

  gsap.from(bg1.value, {
    opacity: 1,
    scale: 1,
    x: 300,
    y: 300,
    duration: 1.4,
    transform: "rotate(90deg)",
    ease: "power2.out",
    delay: 0,
  });

  gsap.from(bg2.value, {
    opacity: 1,
    x: 1400,
    y: 100,
    duration: 1.4,
    transform: "rotate(-90deg)",
    ease: "power2.out",
    delay: 0,
  });

  gsap.from(black.value, {
    opacity: 1,
    scale: 1,
    x: 300,
    y: "-50vh",
    duration: 1.4,
    transform: "rotate(-25deg)",
    ease: "power2.out",
  });

  gsap.from(friday.value, {
    opacity: 1,
    x: -300,
    y: 10,
    duration: 1.4,
    transform: "rotate(45deg)",
    ease: "power2.out",
    delay: 0,
  });

  gsap.from(button.value, {
    opacity: 1,
    x: 0,
    y: 300,
    duration: 1.4,
    ease: "expo.inOut",
    delay: 0,
  });

  gsap.from(nav.value, {
    opacity: 0,
    width: 0,
    x: -100,
    duration: 1.4,
    ease: "expo.inOut",
    delay: 0,
  });

  gsap.from(buttonD.value, {
    opacity: 1,
    x: -300,
    y: 0,
    duration: 1.4,
    ease: "expo.inOut",
    delay: 0,
  });

  gsap.from(eng.value, {
    opacity: 1,
    x: 0,
    y: 300,
    duration: 1.4,
    ease: "expo.inOut",
    delay: 0,
  });
  gsap.from(text.value, {
    opacity: 1,
    x: 0,
    y: 300,
    duration: 1.4,
    ease: "expo.inOut",
    delay: 0.1,
  });
  gsap.from(redes.value, {
    opacity: 1,
    x: 0,
    y: 300,
    duration: 1.4,
    ease: "expo.inOut",
    delay: 0.2,
  });
});

onMounted(() => {
  const tl = gsap.timeline({
    delayed: 0,
    paused: true,
  });
  tl.from(start.value, {
    opacity: 1,
    x: 600,
    duration: 0.2,
    y: 0,
    ease: "power2.out",
  });
  tl.from(stats.value, {
    opacity: 1,
    x: 600,
    duration: 0.4,
    y: 0,
    ease: "power2.out",
  });
  tl.from(rules.value, {
    opacity: 1,
    x: 600,
    duration: 0.4,
    y: 0,
    ease: "power2.out",
  });
  tl.from(faq.value, {
    opacity: 1,
    x: 600,
    duration: 0.4,
    y: 0,
    ease: "power2.out",
  });
  tl.from(today.value, {
    opacity: 1,
    x: 0,
    duration: 0.2,
    y: 300,
    ease: "power2.out",
  });
  tl.from(day.value, {
    opacity: 1,
    x: 0,
    duration: 0.2,
    y: 300,
    ease: "power2.out",
  });
  tl.from(icon.value, {
    opacity: 1,
    x: 0,
    duration: 0.2,
    y: 300,
    ease: "power2.out",
  });

  tl.play();
});
</script>

<style scoped>
.Outfit {
  font-family: Outfit;
}

.mask-index {
  mask-image: url("/images/mask.png");
  mask-repeat: no-repeat;
}

@media (max-width: 1024px) {
  .mask-index {
    mask-image: none;
    mask-repeat: no-repeat;
  }
}
</style>
