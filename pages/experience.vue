<template>
  <Menu />
  <main
    class="mx-auto max-w-7xl w-full flex justify-center items-start min-h-screen lg:p-8 md:p-8 p-4 font-primary"
  >
    <section class="w-full flex flex-col md:grid md:grid-cols-2 relative gap-3">
      <header class="box flex w-full justify-between col-span-2 items-center gap-3">
        <Card class="min-h-[60px] max-h-[60px] flex justify-center items-center">
          <h1 class="text-xl font-bold text-white text-center">Experiencia</h1>
        </Card>
        <div
          @click="open.toggle"
          class="z-10 max-w-[60px] borderBox min-w-[60px] min-h-[60px] max-h-[60px] flex text-center w-full h-full transition-colors duration-300 rounded-xl hover:bg-surface bg-surface justify-center border-2-center cursor-pointer items-center p-0 overflow-hidden"
        >
          <Icon icon="ph:list-bold" class="w-8 h-8 text-white" />
        </div>
      </header>
      <!-- <div class="box col-span-2 text-white">
        <Card class="overflow-hidden h-auto !min-h-0">
          <h2 class="font-bold">En Búsqueda de más experiencia</h2>

          <p class="mt-2 max-w-screen-sm text-sm text-white/80">
            Actualmente me encuentro en búsqueda de nuevas oportunidades laborales.
          </p>

          <div
            class="w-full flex-col gap-0 mt-4 text-white flex justify-start items-start"
          >
            <a
              class="btn bg-background text-white text-lg py-3 px-6 h-auto font-bold rounded-full hover:bg-background lowercase"
              href="mailto:juan.murato.cruz@gmail.com"
              target="_blank"
              rel="noopener"
              aria-label="correo"
            >
              <p>juan.murato.cruz@gmail.com</p>
            </a>
          </div>
        </Card>
      </div> -->
      <template v-for="experience in experienceList" :key="experience">
        <div class="box col-span-2 text-white">
          <Card class="overflow-hidden h-auto !min-h-0 w-full">
            <h2 class="font-bold w-full flex justify-between">
              {{ experience.name }}
              <a target="_blank" :href="experience.link" :aria-label="experience.name">
                <Icon
                  icon="material-symbols-light:arrow-circle-right-outline-rounded"
                  class="w-10 h-10 text-white hover:text-success transition-all duration-300"
                />
              </a>
            </h2>
            <h3 class="font-semibold w-full flex justify-between">
              {{ experience.role }}
            </h3>

            <template v-for="description in experience.description" :key="description">
              <p class="mt-0 max-w-screen-sm text-sm text-white/80">{{ description }}.</p>
            </template>
            <span class="mt-1 block text-sm font-semibold">{{ experience.time }}</span>
          </Card>
        </div>
      </template>
    </section>
    <ButtonToggleMenu />
  </main>
</template>

<script setup>
import gsap from "gsap";
import Card from "~/components/ui/Card.vue";
import { Icon } from "@iconify/vue";
import Menu from "~/components/main/Menu.vue";
import { useOpen } from "~/composables/useMenu";
import ButtonToggleMenu from "~/components/main/ButtonToggleMenu.vue";

useSeoMeta({
  ogTitle: "Huan | Experiencia",
  ogDescription: "Descubre dónde he trabajado de forma rápida y ordenadamente.",
  ogImage: "/images/portfolio/screen.webp",
  twitterTitle: "Huan | Experiencia",
  twitterDescription: "Descubre dónde he trabajado de forma rápida y ordenadamente.",
  twitterImage: "/images/portfolio/screen.webp",
});

useHead({
  title: "Huan | Experiencia",
  meta: [
    {
      name: "description",
      content: "Toda mi experiencia laboral en una vista",
    },
  ],
});
const open = useOpen();
provide("openMenu", open);

const { experienceList } = useExperience();

let tl;
onMounted(() => {
  tl = gsap.timeline({
    delayed: 0,
    paused: true,
    reversed: true,
  });
  tl.set(".box", {
    transformOrigin: "top",
    scaleY: 0,
  });
  tl.to(".box", {
    duration: 0.5,
    scaleY: 1,
    opacity: 1,
    delay: 0,
    ease: "power2.inOut",
    stagger: 0.25,
  });
  tl.play();
});

onUnmounted(() => {
  tl.revert();
});
</script>

<style scoped></style>
