<template>
  <div
    class="menuBg opacity-0 w-full min-h-screen items-center justify-center bg-background fixed z-50 inset-0 md:p-10 font-primary text-white/80"
  >
    <div
      class="mx-auto max-w-7xl w-full h-full flex flex-col gap-3 justify-end items-end lg:p-8 md:p-8 p-4 overflow-hidden"
    >
      <div class="flex w-full justify-between items-center">
        <h2 class="text-3xl font-bold textName">Juan David Cruz</h2>
        <button
          @click="openNext"
          class="rounded-full p-2 bg-surface buttonClose"
          aria-label="menu"
        >
          <Icon
            icon="material-symbols:close-small-outline-rounded"
            class="text-white w-10 h-10"
          />
        </button>
      </div>
      <div
        class="menu flex flex-col uppercase text-[4vh] font-bold bg-surface items-center justify-center w-full h-full rounded-xl p-10 gap-6"
      >
        <div class="flex w-full relative pb-6 cursor-pointer group">
          <p
            class="textShow overflow-hidden group-hover:text-white transition-colors"
            @click="pushTo('/')"
          >
            Inicio
          </p>
          <div
            class="line absolute w-full h-[2px] bottom-0 left-0 bg-white/50 group-hover:bg-white transition-colors"
          ></div>
        </div>
        <div class="flex w-full relative pb-6 cursor-pointer group">
          <p
            class="textShow translate-x-0 overflow-hidden group-hover:text-white transition-colors"
            @click="pushTo('/projects')"
          >
            Proyectos
          </p>
          <div
            class="line absolute w-full h-[2px] bottom-0 left-0 bg-white/50 group-hover:bg-white transition-colors"
          ></div>
        </div>
        <div class="flex w-full relative pb-6 cursor-pointer group">
          <p
            @click="pushTo('/experience')"
            class="textShow overflow-hidden group-hover:text-white transition-colors"
          >
            Experiencia
          </p>
          <div
            class="line absolute w-full h-[2px] bottom-0 left-0 bg-white/50 group-hover:bg-white transition-colors"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import gsap from "gsap";
import { Icon } from "@iconify/vue";
const router = useRouter();

const { open, toggle } = inject("openMenu");

let tl;

onMounted(() => {
  gsap.set(".menuBg", {
    opacity: 1,
  });

  tl = gsap.timeline({
    delayed: 0,
    paused: true,
    reversed: true,
  });
  tl.from(".menuBg", {
    opacity: 1,
    transformOrigin: "top",
    scaleY: 0,
    duration: 0.5,
  });
  tl.from(".menu", {
    transformOrigin: "bottom",
    scaleY: 0,
    duration: 0.5,
  });
  tl.from(".buttonClose", {
    opacity: 0,
    duration: 0.2,
  });
  tl.from(".textName", {
    transformOrigin: "left",
    x: -300,
    duration: 0.15,
  });
  tl.from(".line", {
    scaleX: 0,
    transformOrigin: "left",
    duration: 0.15,
    stagger: 0.05,
  });
  tl.from(".textShow", {
    opacity: 0,
    ease: "power2.out",
    duration: 0.25,
    stagger: 0.15,
    transformOrigin: "bottom",
    y: 60,
  });
});

function openNext() {
  if (tl.reversed()) {
    tl.play();
  } else {
    tl.reverse();
  }
}

function pushTo(to) {
  toggle();
  setTimeout(() => {
    router.push({ path: to });
  }, 2400);
}

watch(open, () => {
  openNext();
});
</script>
