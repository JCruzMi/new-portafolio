<template>
  <swiper
    class="swiper h-auto w-full rounded-xl"
    :slides-per-view="1"
    :modules="modules"
    :space-between="20"
    :loop="false"
    :centered-slides="true"
    :keyboard="{ enabled: false }"
    :autoplay="{
      delay: 2500,
      pauseOnMouseEnter: true,
    }"
    :grab-cursor="true"
    :effect="'creative'"
    :creative-effect="effects[1]"
  >
    <template v-for="experience in experienceList" :key="experience.name">
      <swiper-slide
        class="w-full h-auto group text-white relative p-4 rounded-xl bg-background"
      >
        <div class="flex flex-col gap-4">
          <div class="flex gap-4 w-full items-center justify-between">
            <p class="font-semibold text-xl">{{ experience.name }}</p>
            <a target="_blank" :href="experience.link">
              <Icon
                icon="material-symbols-light:arrow-circle-right-outline-rounded"
                class="w-10 h-10 text-white hover:text-success transition-all duration-300"
              />
            </a>
          </div>
          <p>{{ experience.role }}</p>
          <ul v-for="description in experience.description" :key="description">
            <li>{{ description }}</li>
          </ul>
        </div>
      </swiper-slide>
    </template>
  </swiper>
</template>
<script setup>
import gsap from "gsap";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Keyboard, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/effect-creative";
import { Icon } from "@iconify/vue";
import { useExperience } from "~/composables/useExperience";

const { experienceList } = useExperience();

const modules = [Keyboard, EffectCreative, Autoplay];

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
