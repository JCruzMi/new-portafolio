<template>
  <section
    class="w-full flex items-center flex-none flex-col flex-nowrap justify-start h-min overflow-hidden relative gap-3 text-white/80"
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
              class="h-full w-full absolute left-0 top-0 right-0 bottom-0 bg-black/40 z-0"
            ></div>
            <h1
              class="inside text-3xl md:text-6xl font-bold text-text uppercase w-full text-center z-10"
            >
              Juan David Cruz
              <p class="text-2xl text-white/90">Frontend Developer</p>
            </h1>
          </div></Zcard
        >
      </div>
      <div
        class="box p-4 borderBox bg-surface min-h-[208px] items-end order-3 self-start hover:bg-surface transition-colors duration-300 rounded-xl flex flex-col gap-2 h-full justify-start justify-self-start relative w-full overflow-hidden"
      >
        <div class="p-0 flex gap-4 items-center w-full">
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
          class="w-full flex-col gap-4 text-white text-6xl flex justify-center items-center"
        >
          <p class="h-full cursor-default">Hablemos</p>
          <a
            class="btn bg-background text-white text-xl py-6 h-auto font-bold rounded-full hover:bg-background lowercase"
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
        <div class="flex flex-col gap-3 relative w-full h-full">
          <div
            class="flex w-full font-semibold text-white min-h-[60px] h-[60px] max-h-[60px] flex-row gap-3"
          >
            <div
              class="flex text-center borderBox w-full h-full transition-colors duration-300 rounded-xl hover:bg-surface bg-surface justify-center border-2-center cursor-pointer items-center p-0 overflow-hidden"
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
            class="flex borderBox flex-col w-full h-full hover:bg-surface transition-colors duration-300 rounded-xl bg-surface p-3 overflow-hidden"
          >
            <div class="pb-2 flex gap-4 items-center w-full">
              <p class="uppercase cursor-default">Proyectos</p>
            </div>
            <Swiper />
            <NuxtLink to="/projects" ariaCurrentValue="ver todos los proyectos">
              <div
                class="btn bg-background hover:bg-background rounded-full text-white w-full mt-4"
              >
                Ver todo
              </div></NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
    <div
      class="boxButton w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-3 h-full justify-center justify-self-start relative"
    >
      <div
        class="bg-surface borderBox flex-col order-1 col-span-2 justify-between lg:col-span-3 min-h-[208px] w-full rounded-xl flex p-4"
      >
        <div class="pb-2 flex gap-4 items-center w-full">
          <p class="uppercase cursor-default">Experiencia</p>
        </div>
        <SwiperExp />
        <NuxtLink to="/experience" ariaCurrentValue="ver toda la experiencia">
          <div
            class="btn bg-background hover:bg-background rounded-full text-white w-full mt-4"
          >
            Ver todo
          </div>
        </NuxtLink>
      </div>
      <div
        class="md:order-3 borderBox flex-col order-3 col-span-1 bg-surface min-h-[208px] w-full hover:bg-surface rounded-xl flex p-4"
      >
        <div class="pb-2 flex gap-4 items-center w-full">
          <p class="uppercase cursor-default">Redes</p>
        </div>
        <div
          class="flex w-full h-full flex-col justify-center items-center gap-8"
        >
          <a
            href="https://www.linkedin.com/in/juan-david-cruz-huan/"
            target="_blank"
            class="p-2 borderBox hover:border-success rounded-lg"
            aria-label="Linkedin"
          >
            <Icon icon="bx:bxl-linkedin" class="w-16 h-16 text-white" />
          </a>
          <a
            href="https://github.com/JCruzMi"
            target="_blank"
            class="p-2 borderBox hover:border-success rounded-lg"
            aria-label="Github"
          >
            <Icon icon="mdi:github" class="w-16 h-16 text-white" />
          </a>
        </div>
      </div>
      <div
        class="md:order-2 col-span-1 lg:col-span-2 lg:order-3 order-2 bg-surface borderBox min-h-[208px] w-full hover:bg-surface rounded-xl flex items-center justify-start p-4 md:p-10"
      >
        <div class="flex gap-2 text-white flex-col cursor-default w-full">
          <div class="flex flex-row justify-start gap-1 w-auto text-2xl">
            <div
              class="w-auto flex-col text-2xl font-normal gap-4 flex justify-start items-start"
            >
              <div class="p-0 bg-success rounded-full">
                <Icon
                  icon="material-symbols-light:check-small-rounded"
                  class="w-24 h-24 text-background"
                />
              </div>
              <div class="text-6xl font-bold">
                <Numbers :maxValue="3" />
              </div>
              proyectos
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
