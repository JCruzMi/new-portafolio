<template>
  <section
    class="w-full flex items-center flex-none flex-col flex-nowrap justify-start h-min overflow-hidden relative gap-3"
  >
    <div
      class="flex flex-col md:grid flex-none gap-3 grid-rows-[repeat(2,260px)] auto-rows-[260px] md:grid-cols-[repeat(2,minmax(200px,1fr))] lg:grid-cols-[repeat(3,minmax(200px,1fr))] overflow-hidden relative w-full h-min justify-center"
    >
      <div
        class="box min-h-[208px] col-[auto_/_span_2] order-0 h-full items-start self-start rounded-xl flex gap-3 flex-nowrap flex-row justify-center justify-self-start relative w-full overflow-hidden"
      >
        <Zcard :light="false" :class="'!p-0 h-full'">
          <div
            class="cursor-default w-full bg-cover bg-center bg-no-repeat bg-[url('https://e1.pxfuel.com/desktop-wallpaper/270/660/desktop-wallpaper-urban-japan-japanese-retro-street-art-purple.jpg')] h-full flex min-h-[208px] items-center justify-start relative box bg-surface overflow-hidden rounded-xl hover:bg-surface transition-colors duration-300 p-10"
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
        <div
          class="arrow borderBox justify-center items-center hidden max-w-[80px] min-h-[208px] cursor-pointer w-0 h-full box bg-surface overflow-hidden rounded-xl hover:bg-surface transition-colors duration-300"
        >
          <Icon
            icon="material-symbols:arrow-forward-ios"
            class="w-10 h-10 text-white"
          />
        </div>
      </div>
      <div
        class="box p-4 borderBox bg-surface min-h-[208px] items-end order-3 self-start hover:bg-surface transition-colors duration-300 rounded-xl flex flex-col gap-2 h-full justify-start justify-self-start relative w-full overflow-hidden"
      >
        <div class="p-0 flex gap-4 items-center w-full">
          <p class="uppercase cursor-default">Tecnologías</p>
        </div>
        <div class="px-4 h-full flex-col gap-4 flex justify-center">
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
          >
            <p>juan.murato.cruz@gmail.com</p>
          </a>
        </div>
      </div>
      <div
        class="box min-h-[208px] lg:row-[auto_/_span_2] md:col-[auto_/_span_2] lg:col-auto order-2 h-full items-start self-start flex flex-col gap-3 justify-start justify-self-start relative w-full overflow-hidden"
      >
        <div class="flex flex-col gap-3 relative w-full h-full">
          <div
            class="download flex w-full font-semibold text-white h-0 flex-row gap-3"
          >
            <div
              class="flex text-center borderBox w-full h-full transition-colors duration-300 rounded-xl hover:bg-surface bg-surface justify-center border-2-center cursor-pointer items-center p-0 overflow-hidden"
            >
              <a target="_blank" href="./docs/CV_Juan.pdf" class="w-full"
                >Descargar CV</a
              >
            </div>
            <div
              @click="toggle"
              class="max-w-[60px] borderBox min-w-[60px] flex text-center w-full h-full transition-colors duration-300 rounded-xl hover:bg-surface bg-surface justify-center border-2-center cursor-pointer items-center p-0 overflow-hidden"
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
            <div class="btn bg-background rounded-full w-full mt-4">
              Ver todos
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="boxButton w-full grid grid-cols-2 lg:grid-cols-4 gap-3 h-full justify-center justify-self-start relative"
    >
      <div
        class="bg-surface text-white min-h-[208px] w-full rounded-xl flex p-10"
      >
        <Icon icon="mdi:github" class="w-full h-full" />
      </div>
      <div
        class="insta text-white min-h-[208px] w-full hover:insta rounded-xl flex p-10"
      >
        <Icon icon="fe:instagram" class="w-full h-full" />
      </div>
      <div
        class="bg-[#0E76A8] text-white min-h-[208px] w-full hover:bg-[#0E76A8] rounded-xl flex p-10"
      >
        <Icon icon="bx:bxl-linkedin" class="w-full h-full" />
      </div>
      <div
        class="bg-surface borderBox min-h-[208px] w-full hover:bg-surface rounded-xl flex items-center justify-start p-10"
      >
        <div class="flex gap-2 text-white flex-col cursor-default">
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
                <Numbers :maxValue="10" />
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

  gsap.to(".arrow", {
    duration: 0.5,
    delay: 0.5,
    display: "flex",
    opacity: 1,
    width: "60px",
    minWidth: "60px",
    ease: "power2.inOut",
  });

  gsap.to(".download", {
    duration: 0.5,
    delay: 0.5,
    display: "flex",
    opacity: 1,
    height: "60px",
    minHeight: "60px",
    ease: "power2.inOut",
  });
});
</script>

<style>
.gradient-border {
  position: relative;
  border-radius: 0.5rem;
  backdrop-filter: blur(10px);
  width: 100%;
}

.gradient-border::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 0.5rem;
  padding: 2px;
  width: 100%;
  background-size: 400% auto;
  background-position: 0 0;
  opacity: 0.5;
  transition: background-position 0.3s ease-in-out, opacity 0.2s ease-in-out;
  mask: linear-gradient(#ffffff95 0 0);

  z-index: -1;
}
.gradient-border:hover::before {
  opacity: 1;
}

.insta {
  background: linear-gradient(
    45deg,
    #405de6,
    #5851db,
    #833ab4,
    #c13584,
    #e1306c,
    #fd1d1d
  );
}

.mail {
  background: rgb(227, 123, 70);
  background: linear-gradient(
    315deg,
    rgba(227, 123, 70, 1) 3%,
    rgba(198, 51, 92, 1) 44%,
    rgba(86, 50, 139, 1) 85%
  );
}
</style>
