<template>
  <section
    class="min-h-screen bg-white flex justify-center items-center w-full"
  >
    <main class="bg-white h-[854px] flex w-full Outfit">
      <div
        class="max-w-[1366px] w-full flex md:flex-row flex-col gap-0 mx-auto h-full p-4"
      >
        <div
          class="max-w-[1006] w-full bg-white h-full relative rounded-tl-[56px] rounded-bl-[56px]"
        >
          <transition appear @before-enter="beforeEnterMask" @enter="enterMask">
            <div
              class="mask-index w-auto max-w-full h-full overflow-hidden relative inset-0 bg-no-repeat"
            >
              <div
                class="flex h-full justify-center items-center w-full absolute left-0 top-0 right-0 bottom-0 z-[0]"
              >
                <svg
                  width="899"
                  height="100%"
                  viewBox="0 0 899 732"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 207.595C0 194.34 10.7452 183.595 24 183.595H220.709C227.319 183.595 233.637 186.322 238.172 191.132L347.442 307.039C356.794 316.959 372.519 317.107 382.056 307.365L675.878 7.21128C680.393 2.59932 686.575 0 693.029 0H874.6C887.855 0 898.6 10.7452 898.6 24V101.757C898.6 108.128 896.067 114.237 891.559 118.739L592.404 417.478C587.904 421.972 581.804 424.496 575.445 424.496H505.595C484.451 424.496 473.639 449.858 488.279 465.114L758.411 746.602C762.7 751.071 765.095 757.026 765.095 763.22V825C765.095 838.255 754.35 849 741.095 849H580.013C573.589 849 567.433 846.424 562.922 841.85L6.90949 277.895C2.48203 273.404 0 267.352 0 261.045V207.595Z"
                    fill="#FFC01D"
                  />
                </svg>
              </div>
              <div
                class="flex justify-center items-center h-full w-full absolute left-0 top-0 right-0 bottom-0 z-[0]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="982"
                  height="785"
                  viewBox="0 0 982 785"
                  fill="none"
                >
                  <path
                    d="M982 643.7V140.8C982 91.5154 982 66.8731 972.408 48.0488C963.971 31.4906 950.509 18.0283 933.951 9.59143C915.126 7.62933e-06 890.484 7.62933e-06 841.2 7.62933e-06H787.619H706.659H627.212H548.522H466.805L102.837 0C66.9941 0 49.0725 0 35.3821 6.97558C23.3397 13.1115 13.549 22.9022 7.41308 34.9446C0.4375 48.635 0.4375 66.5566 0.437502 102.4L0.437506 275.629C0.437507 302.185 0.437507 315.463 3.99607 327.594C7.14726 338.335 12.319 348.377 19.2338 357.18C27.0427 367.122 37.8525 374.833 59.4721 390.254L84.8061 408.326L84.8069 408.326C98.4315 418.045 105.244 422.905 112.687 426.352C119.292 429.411 126.252 431.639 133.406 432.984C141.467 434.5 149.835 434.5 166.572 434.5H362.324C411.608 434.5 436.251 434.5 455.075 444.091C471.633 452.528 485.095 465.991 493.532 482.549C503.124 501.373 503.124 526.015 503.124 575.3V643.7C503.124 692.985 503.124 717.627 512.715 736.451C521.152 753.009 534.614 766.472 551.172 774.909C569.997 784.5 594.639 784.5 643.924 784.5H841.2C890.484 784.5 915.126 784.5 933.951 774.909C950.509 766.472 963.971 753.009 972.408 736.451C982 717.627 982 692.985 982 643.7Z"
                    fill="url(#pattern0)"
                  />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlink:href="#image0_104_153"
                        transform="matrix(0.00040006 0 0 0.000500553 0.076397 0.149393)"
                      />
                    </pattern>
                    <image
                      id="image0_104_153"
                      width="605"
                      height="572"
                      href="/images/logo.png"
                    />
                  </defs>
                </svg>
              </div>
              <div
                class="flex h-full w-full absolute left-0 top-0 right-0 bottom-0 z-[1]"
              >
                <div
                  class="bg-[url('/images/girl.png')] -scale-x-100 bg-no-repeat w-full h-full absolute -right-16 -top-0 z-10 bg-[left_bottom_-8rem]"
                ></div>
              </div>
              <transition
                appear
                @before-enter="beforeEnterMask"
                @enter="enterMask"
              >
                <div
                  class="flex h-full w-full absolute left-0 top-0 right-0 bottom-0 z-[1]"
                >
                  <div
                    class="bg-[url('/images/girl.png')] bg-no-repeat w-[981px] h-[784px] absolute top-0 right-0"
                  ></div></div
              ></transition>
            </div>
          </transition>
          <div
            class="absolute bottom-0 content-center h-1/2 left-0 w-full flex flex-col md:flex-row"
          >
            <div class="flex flex-col w-full px-8 mt-10 h-full">
              <div class="w-full justify-start flex">
                <img
                  src="/images/black.png"
                  alt="black"
                  class="max-w-[288px] h-auto"
                />
              </div>
              <div class="w-full justify-end flex">
                <img
                  src="/images/friday.png"
                  alt="black"
                  class="max-w-[259px] h-auto"
                />
              </div>
              <div class="flex flex-row gap-8 items-center justify-center">
                <div
                  class="h-[131px] bg-[#ededf2] rounded-full flex flex-col items-center justify-center"
                >
                  <p class="pt-[13px] px-[15px] text-[#8a8aaa]">Eng</p>
                  <div class="h-[20px] w-[1px] bg-[#8a8aaa]"></div>
                  <div
                    class="w-[57px] h-[60px] bg-white m-2 flex justify-center items-center rounded-full cursor-pointer hover:shadow-sm transition-all"
                  >
                    <Icon icon="mdi:translate" class="w-5 h-5 text-[#8a8aaa]" />
                  </div>
                </div>
                <p class="max-w-xs balance text-black">
                  The 1st Paper Perpetual Trading Competition on MultiversX
                </p>
                <div class="flex flex-row gap-4 text-black">
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
              class="flex w-full justify-center items-end md:pb-16 md:pl-4 h-full"
            >
              <button
                class="max-w-[424px] bg-[#9123ff] text-white rounded-[48px] shadow-sm text-[32px] font-semibold text-center px-[74px] md:px-[140px] py-[23px] md:py-[42px]"
              >
                Shop now
              </button>
            </div>
          </div>
          <div
            class="text-black font-medium absolute top-[28px] left-10 border-[2px] border-black items-center rounded-[24px] flex flex-row gap-[32px] px-[24px] py-[12px]"
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
            <p class="cursor-pointer hover:shadow-sm transition-all">
              Side-Event
            </p>
            <p class="cursor-pointer hover:shadow-sm transition-all">
              Sponsors
            </p>
          </div>
        </div>

        <div
          class="max-w-[360px] w-full relative bg-white rounded-tr-[56px] rounded-br-[56px] pr-2"
        >
          <div
            class="w-full bg-[#F5F5FC] relative rounded-b-[40px] rounded-t-[60px] mt-1"
          >
            <div
              class="w-auto h-[311px] shrink-0 text-[#8FFF5B] relative left-0 top-0 right-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="352"
                height="311"
                viewBox="0 0 360 311"
                fill="none"
              >
                <path
                  d="M0 76.8C0 49.9175 0 36.4762 5.23169 26.2085C9.83361 17.1767 17.1767 9.83361 26.2085 5.23169C36.4762 0 49.9175 0 76.8 0H283.2C310.083 0 323.524 0 333.792 5.23169C342.823 9.83361 350.166 17.1767 354.768 26.2085C360 36.4762 360 49.9175 360 76.8V169.7C360 196.583 360 210.024 354.768 220.292C350.166 229.323 342.823 236.666 333.792 241.268C323.524 246.5 310.083 246.5 283.2 246.5H261.656C261.595 246.5 261.565 246.5 261.537 246.5C241.162 246.523 223.022 259.408 216.289 278.638C216.28 278.664 216.27 278.693 216.25 278.75C216.23 278.807 216.22 278.836 216.211 278.862C209.478 298.092 191.338 310.977 170.963 311C170.935 311 170.905 311 170.844 311H76.8C49.9175 311 36.4762 311 26.2085 305.768C17.1767 301.166 9.83361 293.823 5.23169 284.792C0 274.524 0 261.083 0 234.2V76.8Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                class="absolute right-0 bottom-0"
                xmlns="http://www.w3.org/2000/svg"
                width="144"
                height="61"
                viewBox="0 0 144 61"
                fill="none"
              >
                <path
                  d="M19.2492 18.8555C24.6186 8.19125 35.4784 1.40315 47.4172 1.24878L113.305 0.39687C130.193 0.17852 144 13.8082 144 30.6972C144 47.433 130.433 61 113.697 61H8.70984C1.9905 61 -1.73536 53.2177 2.47806 47.9835L5.97142 43.6439C7.3863 41.8862 8.61131 39.9839 9.62601 37.9685L19.2492 18.8555Z"
                  fill="black"
                />
              </svg>
              <svg
                class="absolute right-10 bottom-4"
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

              <div class="flex flex-col gap-4 w-full p-8 absolute left-0 top-0">
                <div class="inline-flex flex-col gap-0 items-start">
                  <p class="text-[#5E9D40] text-base">Start</p>
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
                  <p class="text-[#5E9D40] text-base">End</p>
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
                      03:00 p.m
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="font-medium text-base text-black absolute left-0 bottom-0 px-8 py-6"
              >
                Timezone - UTC
              </div>
            </div>
            <div class="flex flex-col w-full gap-2 p-2">
              <div
                class="rounded-[32px] text-black bg-white inline-flex flex-col items-start gap-2 px-12 py-8"
              >
                <p class="font-medium">Total Event Discount Pool</p>
                <p class="text-6xl font-bold">$10.000+</p>
              </div>
              <div
                class="rounded-[32px] text-black bg-white inline-flex flex-col items-start gap-2 px-12 py-8 relative"
              >
                <div
                  class="w-12 h-12 rounded-full bg-black flex items-center justify-center absolute top-0 right-0 cursor-pointer hover:shadow-sm transition-all"
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
                  <p class="font-medium text-2xl">Discount Rules</p>
                </div>
              </div>
              <div
                class="rounded-[32px] text-black bg-white inline-flex flex-col items-start gap-2 px-12 py-8 relative"
              >
                <div
                  class="w-12 h-12 rounded-full bg-[#FFC01D] flex items-center justify-center absolute top-0 right-0 cursor-pointer hover:shadow-sm transition-all"
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
                  <p class="font-medium text-2xl">FAQ</p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex gap-4 text-black justify-between items-end text-xl font-bold pt-8 px-4"
          >
            <p>Today</p>
            <div class="flex flex-col justify-end w-auto text-2xl font-bold">
              <span class="w-full flex justify-end">{{
                new Date().getDate()
              }}</span>
              <span class="flex w-full justify-start text-3xl">{{
                mounth
              }}</span>
            </div>
            <div>
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
    </main>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import gsap from "gsap";
import VueNumberAnimation from "vue-number-animation";

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

const beforeEnterMask = (el) => {
  el.style.opacity = 1;
  el.style.transform = "scale(0.1)";
};

const enterMask = (el, done) => {
  gsap.to(el, {
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: "sine.out",
    onComplete: done,
  });
};
</script>

<style>
.Outfit {
  font-family: Outfit;
}

.mask-index {
  mask-image: url("/images/mask.png");
  mask-repeat: no-repeat;
}
</style>
