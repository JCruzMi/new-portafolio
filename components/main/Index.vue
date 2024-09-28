<template>
  <section
    class="relative flex flex-col items-center justify-start flex-none w-full gap-3 overflow-hidden flex-nowrap h-min text-white/80"
  >
    <div
      class="flex flex-col md:grid flex-none gap-3 grid-rows-[repeat(2,260px)] auto-rows-[260px] md:grid-cols-[repeat(2,minmax(200px,1fr))] lg:grid-cols-[repeat(3,minmax(200px,1fr))] overflow-hidden relative w-full h-min justify-center"
    >
      <div
        class="box min-h-[208px] col-[auto_/_span_2] order-0 h-full items-start self-start rounded-xl flex gap-3 flex-nowrap flex-row justify-center justify-self-start relative w-full overflow-hidden"
      >
        <Zcard :light="false" :class="'!p-0 h-full'">
          <div
            class="cursor-default w-full bg-cover bg-center bg-no-repeat bg-[url('/images/portfolio/bgJp.webp')] h-full flex min-h-[208px] items-center justify-start relative box bg-surface overflow-hidden rounded-xl hover:bg-surface transition-colors duration-300 p-10"
          >
            <div
              class="absolute top-0 bottom-0 left-0 right-0 z-0 w-full h-full bg-black/40"
            ></div>
            <h1
              class="z-10 w-full text-3xl font-bold text-center uppercase inside sm:text-4xl md:text-6xl text-text"
            >
              Juan David Cruz
              <p class="text-xl md:text-2xl text-success">Frontend Developer</p>
            </h1>
          </div></Zcard
        >
      </div>
      <div
        class="box p-4 borderBox bg-surface min-h-[208px] items-end order-3 self-start hover:bg-surface transition-colors duration-300 rounded-xl flex flex-col gap-2 h-full justify-start justify-self-start relative w-full overflow-hidden"
      >
        <div class="flex items-center w-full gap-4 p-0">
          <p class="uppercase cursor-default">Tecnologías</p>
        </div>
        <div
          class="px-4 h-full flex-col gap-4 flex justify-center min-h-[128px]"
        >
          <Tecs />
        </div>
      </div>
      <div
        class="box borderBox bg-surface min-h-[208px] max-h-[260px] order-4 lg:col-auto items-start self-start transition-colors duration-300 rounded-xl flex flex-col gap-7 h-full justify-center justify-self-start relative w-full overflow-hidden"
      >
        <div
          class="flex flex-col items-center justify-between w-full h-full gap-4 p-3"
        >
          <p class="w-full h-auto text-left uppercase cursor-default">
            Contáctame
          </p>
          <p class="h-auto text-6xl text-white cursor-default">Hablemos</p>
          <a
            class="w-full h-auto py-6 text-lg font-bold text-white lowercase btn bg-background sm:text-xl rounded-xl hover:bg-background"
            href="mailto:juan.murato.cruz@gmail.com"
            target="_blank"
            rel="noopener"
            aria-label="correo"
          >
            <p>juan.murato.cruz@gmail.com</p>
          </a>
        </div>
      </div>
      <div
        class="box max-h-[538px] lg:row-[auto_/_span_2] md:row-span-2 lg:col-auto md:order-3 order-2 lg:order-2 h-full items-start self-start flex flex-col gap-3 justify-start justify-self-start relative w-full overflow-hidden"
      >
        <div class="relative flex flex-col w-full h-full gap-3">
          <div
            class="flex w-full font-semibold text-white min-h-[60px] h-[60px] max-h-[60px] flex-row gap-3"
          >
            <div
              class="flex items-center justify-center w-full h-full p-0 overflow-hidden text-center transition-colors duration-300 cursor-pointer borderBox rounded-xl hover:bg-surface bg-surface border-2-center"
            >
              <a
                target="_blank"
                href="./docs/CV_Juan.pdf"
                class="w-full"
                aria-label="CV"
                >Descargar CV</a
              >
            </div>
            <div
              @click="toggle"
              class="max-w-[60px] borderBox max-h-[60px] min-w-[60px] flex text-center w-full h-full transition-colors duration-300 rounded-xl hover:bg-surface bg-surface justify-center border-2-center cursor-pointer items-center p-0 overflow-hidden"
            >
              <Icon icon="ph:list-bold" class="w-8 h-8" />
            </div>
          </div>
          <div
            class="flex flex-col w-full h-full p-3 overflow-hidden transition-colors duration-300 borderBox hover:bg-surface rounded-xl bg-surface"
          >
            <div class="flex items-center w-full gap-4 pb-2">
              <h2 class="uppercase cursor-default">Proyectos</h2>
            </div>
            <Swiper />
            <NuxtLink to="/projects" ariaCurrentValue="ver todos los proyectos">
              <div
                class="w-full mt-4 text-white btn bg-background hover:bg-background rounded-xl"
              >
                Ver todo
              </div></NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
    <div
      class="relative grid justify-center w-full h-full grid-cols-2 gap-3 boxButton md:grid-cols-2 lg:grid-cols-6 justify-self-start"
    >
      <div
        class="bg-surface borderBox flex-col order-1 col-span-2 justify-between lg:col-span-3 min-h-[208px] w-full rounded-xl flex p-4"
      >
        <div class="flex items-center w-full gap-4 pb-2">
          <h2 class="uppercase cursor-default">Experiencia</h2>
        </div>
        <SwiperExp />
        <NuxtLink to="/experience" ariaCurrentValue="ver toda la experiencia">
          <div
            class="w-full mt-4 text-white btn bg-background hover:bg-background rounded-xl"
          >
            Ver todo
          </div>
        </NuxtLink>
      </div>
      <div
        class="md:order-3 borderBox flex-col order-3 col-span-1 bg-surface min-h-[208px] w-full hover:bg-surface rounded-xl flex p-4"
      >
        <div class="flex items-center w-full gap-4 pb-2">
          <p class="uppercase cursor-default">Redes</p>
        </div>
        <div
          class="flex flex-col items-center justify-center w-full h-full gap-8"
        >
          <a
            href="https://www.linkedin.com/in/juan-david-cruz-huan/"
            target="_blank"
            class="p-2 borderBox hover:border-success rounded-xl"
            aria-label="Linkedin"
          >
            <Icon icon="bx:bxl-linkedin" class="w-16 h-16 text-white" />
          </a>
          <a
            href="https://github.com/JCruzMi"
            target="_blank"
            class="p-2 borderBox hover:border-success rounded-xl"
            aria-label="Github"
          >
            <Icon icon="mdi:github" class="w-16 h-16 text-white" />
          </a>
        </div>
      </div>
      <div
        class="flex items-center justify-start order-2 w-full h-full col-span-1md:order-2 lg:col-span-2 lg:order-3"
      >
        <div class="flex flex-col w-full h-full gap-2 cursor-default">
          <div
            class="flex flex-row justify-start w-full h-full gap-1 p-4 rounded-xl bg-surface borderBox hover:bg-surface"
          >
            <div
              class="flex flex-col items-start justify-start w-full gap-4 font-normal"
            >
              <div class="flex items-center w-full gap-4 pb-2">
                <h2 class="uppercase cursor-default">Estado</h2>
              </div>
              <p
                class="w-full p-2 text-lg text-center md:text-2xl borderBox hover:border-success rounded-xl text-success"
              >
                Trabajando
              </p>
            </div>
          </div>
          <div
            class="flex flex-row justify-start w-full h-full gap-1 p-4 text-2xl md:p-10 bg-surface borderBox hover:bg-surface rounded-xl"
          >
            <div
              class="flex flex-col items-center justify-center w-auto gap-4 text-2xl font-normal"
            >
              <div class="flex flex-row gap-4 text-3xl font-bold md:text-6xl">
                <Numbers :maxValue="4" />
                <p class="text-lg md:text-3xl">proyectos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import gsap from "gsap";
import { Icon } from "@iconify/vue";
import Swiper from "@/components/main/Swiper.vue";
import SwiperExp from "@/components/main/SwiperExp.vue";
import Tecs from "./Tecs.vue";
import Zcard from "../ui/Zcard.vue";
import Numbers from "../ui/Numbers.vue";
const { toggle } = inject("openMenu");

onMounted(() => {
  gsap.set(".box", {
    transformOrigin: "top",
    scaleY: 0,
  });
  gsap.to(".box", {
    duration: 0.5,
    scaleY: 1,
    opacity: 1,
    delay: 0,
    stagger: 0,
    ease: "power2.inOut",
  });
  gsap.set(".boxButton", {
    transformOrigin: "top",
    scaleY: 0,
  });
  gsap.to(".boxButton", {
    duration: 0.5,
    scaleY: 1,
    opacity: 1,
    delay: 0.5,
    stagger: 0,
    ease: "power2.inOut",
  });

  gsap.set(".inside", {
    transformOrigin: "left",
    scaleX: 0,
    opacity: 0,
    x: "-100%",
  });
  gsap.to(".inside", {
    duration: 0.5,
    scaleX: 1,
    x: 0,
    opacity: 1,
    delay: 0.5,
    ease: "power2.inOut",
  });
});
</script>

<style></style>
