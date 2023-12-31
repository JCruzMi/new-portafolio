<template>
  <swiper
    class="swiper h-full w-full max-h-[208px] rounded-xl"
    :slides-per-view="1"
    :modules="modules"
    :space-between="30"
    :pagination="{ clickable: false }"
    :centered-slides="true"
    :keyboard="{ enabled: true }"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :grab-cursor="true"
    :effect="'creative'"
    :creative-effect="effects[1]"
  >
    <swiper-slide class="w-full h-full group text-white relative">
      <div
        class="w-full absolute bottom-0 bg-black/40 group-hover:h-full h-[0] transition-all"
      ></div>
      <img
        src="https://e1.pxfuel.com/desktop-wallpaper/685/319/desktop-wallpaper-japan-street-illustration-digital-art-japanese-city-anime.jpg"
        alt="picsum"
        class="w-full h-full object-cover rounded-xl z-10"
      />
      <div class="w-full h-full absolute inset-1">
        <div
          class="absolute left-4 -bottom-10 flex flex-col group-hover:bottom-4 transition-all"
        >
          <p class="font-semibold">HKAnime</p>
          <div class="text-sm flex flex-row flex-wrap gap-2">
            <Icon icon="devicon:vuejs" class="w-6 h-6 text-white" />
            <Icon icon="devicon:tailwindcss" class="w-6 h-6 text-white" />
            <Icon
              icon="vscode-icons:file-type-firebase"
              class="w-6 h-6 text-white"
            />
          </div>
        </div>
        <div
          class="absolute right-4 -bottom-10 group-hover:bottom-4 transition-all"
        >
          <Icon icon="mdi:github" class="w-6 h-6 text-white cursor-pointer" />
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="w-full h-full group text-white relative">
      <div
        class="w-full absolute bottom-0 bg-black/40 group-hover:h-full h-[0] transition-all"
      ></div>
      <img
        src="https://e1.pxfuel.com/desktop-wallpaper/685/319/desktop-wallpaper-japan-street-illustration-digital-art-japanese-city-anime.jpg"
        alt="picsum"
        class="w-full h-full object-cover rounded-xl z-10"
      />
      <div class="w-full h-full absolute inset-1">
        <div
          class="absolute left-4 -bottom-10 flex flex-col group-hover:bottom-4 transition-all"
        >
          <p class="font-semibold">HKAnime</p>
          <div class="text-sm flex flex-row flex-wrap gap-2">
            <Icon icon="devicon:vuejs" class="w-6 h-6 text-white" />
            <Icon icon="devicon:tailwindcss" class="w-6 h-6 text-white" />
            <Icon
              icon="vscode-icons:file-type-firebase"
              class="w-6 h-6 text-white"
            />
          </div>
        </div>
        <div
          class="absolute right-4 -bottom-10 group-hover:bottom-4 transition-all"
        >
          <Icon icon="mdi:github" class="w-6 h-6 text-white cursor-pointer" />
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="w-full h-full group text-white relative">
      <div
        class="w-full absolute bottom-0 bg-black/40 group-hover:h-full h-[0] transition-all"
      ></div>
      <img
        src="https://e1.pxfuel.com/desktop-wallpaper/685/319/desktop-wallpaper-japan-street-illustration-digital-art-japanese-city-anime.jpg"
        alt="picsum"
        class="w-full h-full object-cover rounded-xl z-10"
      />
      <div class="w-full h-full absolute inset-1">
        <div
          class="absolute left-4 -bottom-10 flex flex-col group-hover:bottom-4 transition-all"
        >
          <p class="font-semibold">HKAnime</p>
          <div class="text-sm flex flex-row flex-wrap gap-2">
            <Icon icon="devicon:vuejs" class="w-6 h-6 text-white" />
            <Icon icon="devicon:tailwindcss" class="w-6 h-6 text-white" />
            <Icon
              icon="vscode-icons:file-type-firebase"
              class="w-6 h-6 text-white"
            />
          </div>
        </div>
        <div
          class="absolute right-4 -bottom-10 group-hover:bottom-4 transition-all"
        >
          <Icon icon="mdi:github" class="w-6 h-6 text-white cursor-pointer" />
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script setup>
import gsap from "gsap";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Keyboard, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import "swiper/css/effect-creative";
import { Icon } from "@iconify/vue";

const modules = [Keyboard, EffectCreative];

const effects = [
  {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  {
    prev: {
      shadow: true,
      translate: ["-120%", 0, -500],
    },
    next: {
      shadow: true,
      translate: ["120%", 0, -500],
    },
  },
  {
    prev: {
      shadow: true,
      translate: ["-20%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  {
    prev: {
      shadow: true,
      translate: [0, 0, -800],
      rotate: [180, 0, 0],
    },
    next: {
      shadow: true,
      translate: [0, 0, -800],
      rotate: [-180, 0, 0],
    },
  },
  {
    prev: {
      shadow: true,
      translate: ["-125%", 0, -800],
      rotate: [0, 0, -90],
    },
    next: {
      shadow: true,
      translate: ["125%", 0, -800],
      rotate: [0, 0, 90],
    },
  },
  {
    prev: {
      shadow: true,
      origin: "left center",
      translate: ["-5%", 0, -200],
      rotate: [0, 100, 0],
    },
    next: {
      origin: "right center",
      translate: ["5%", 0, -200],
      rotate: [0, -100, 0],
    },
  },
];

onMounted(() => {
  gsap.set(".swiper", {
    transformOrigin: "left",
    scale: 1,
    opacity: 1,
    y: "300%",
  });
  gsap.to(".swiper", {
    duration: 0.5,
    scale: 1,
    y: 0,
    opacity: 1,
    delay: 0.5,
    ease: "power2.inOut",
  });
});
</script>
