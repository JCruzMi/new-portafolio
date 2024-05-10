<template>
  <swiper
    class="swiper h-auto w-full"
    :slides-per-view="1"
    :modules="modules"
    :space-between="20"
    :loop="false"
    :centered-slides="true"
    :keyboard="{ enabled: false }"
    :pagination="{ type: 'progressbar' }"
    :grab-cursor="true"
    :effect="'creative'"
    :autoplay="{
      delay: 2500,
      pauseOnMouseEnter: true,
    }"
    :creative-effect="effects[1]"
  >
    <template v-for="project in othersList" :key="project.name">
      <swiper-slide class="w-full h-full group text-white relative rounded-xl">
        <Card class="overflow-hidden">
          <div class="overflow-hidden h-[40px]">
            <div
              class="text-lg font-semibold flex w-full justify-between text-white"
            >
              <h2 class="">{{ project.name }}</h2>
              <a
                :href="project.link"
                target="_blank"
                :aria-label="project.name"
              >
                <Icon
                  icon="material-symbols-light:arrow-circle-right-outline-rounded"
                  class="w-10 h-10 text-white hover:text-success transition-all duration-300"
                />
              </a>
            </div>
          </div>
          <p class="text-white/80">
            {{ project.description }}
          </p>
          <div class="flex flex-row gap-3 py-2">
            <template v-for="tag in project.tags" :key="tag + project.name">
              <Tags :icon="tag" />
            </template>
          </div>
          <img
            :src="project.imageProject"
            :alt="project.name"
            class="image rounded-lg h-full w-full object-cover bg-no-repeat bg-center bg-cover aspect-video"
          />
        </Card>
      </swiper-slide>
    </template>
  </swiper>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Keyboard, EffectCreative, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/effect-creative";
import { Icon } from "@iconify/vue";
import Tags from "~/components/ui/Tags.vue";
import { useProjects } from "~/composables/useProjects";
import Card from "../ui/Card.vue";

const { othersList } = useProjects();

const modules = [Keyboard, EffectCreative, Autoplay, Pagination];

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
</script>
