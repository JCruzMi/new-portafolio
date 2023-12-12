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
        <div
          class="bg-black w-full h-full flex min-h-[208px] items-center justify-start relative box bg-surface overflow-hidden rounded-xl hover:bg-surface/5 transition-colors duration-300 p-10"
        >
          <h1 class="inside text-3xl md:text-6xl font-bold text-text uppercase">
            Juan David Cruz
          </h1>
          <div
            class="absolute right-0 bottom-0 p-4 px-6 flex gap-4 items-center"
          >
            <p>SOBRE MI</p>
          </div>
        </div>
        <div
          class="test justify-center items-center hidden min-h-[208px] cursor-pointer w-0 h-full box bg-surface overflow-hidden rounded-xl hover:bg-surface/5 transition-colors duration-300"
        >
          <Icon
            icon="material-symbols:arrow-forward-ios"
            class="w-10 h-10 text-white"
          />
        </div>
      </div>
      <div
        class="box bg-surface min-h-[208px] items-end order-3 self-start hover:bg-surface/5 transition-colors duration-300 rounded-xl flex flex-col gap-7 h-full justify-center justify-self-start p-10 relative w-full overflow-hidden"
      >
        <div class="flex flex-row flex-wrap gap-4 items-center justify-center">
          <Icon icon="devicon:vuejs" class="w-10 h-10" />
          <Icon icon="devicon:nuxtjs" class="w-10 h-10" />
          <Icon icon="devicon:react" class="w-10 h-10" />
          <Icon icon="devicon:nextjs" class="w-10 h-10" />
          <Icon icon="devicon:astro" class="w-10 h-10" />
          <Icon icon="devicon:html5" class="w-10 h-10" />
          <Icon icon="devicon:css3" class="w-10 h-10" />
          <Icon icon="devicon:javascript" class="w-10 h-10" />
          <Icon icon="devicon:typescript" class="w-10 h-10" />
          <Icon icon="vscode-icons:file-type-firebase" class="w-10 h-10" />
          <Icon icon="devicon:github" class="w-10 h-10" />
          <Icon icon="devicon:tailwindcss" class="w-10 h-10" />
          <Icon icon="devicon:figma" class="w-10 h-10" />
        </div>
        <div class="absolute right-0 bottom-0 p-4 px-6 flex gap-4 items-center">
          <p class="uppercase">Tecnologías</p>
        </div>
      </div>
      <div
        class="box mail min-h-[208px] order-4 lg:col-auto items-start self-start hover:mail transition-colors duration-300 rounded-xl flex flex-col gap-7 h-full justify-center justify-self-start p-10 relative w-full overflow-hidden"
      >
        <div class="w-full p-8 md:p-16">
          <Icon icon="ic:round-email" class="w-full h-full text-white" />
        </div>
      </div>
      <div
        class="box bg-surface min-h-[208px] lg:row-[auto_/_span_2] md:col-[auto_/_span_2] lg:col-auto order-2 h-full items-start self-start hover:bg-surface/5 transition-colors duration-300 rounded-xl flex flex-col gap-7 justify-start justify-self-start p-10 relative w-full overflow-hidden"
      >
        <div class="flex w-full h-full">
          <Swiper />
        </div>
        <div class="absolute right-0 bottom-0 p-4 px-6 flex gap-4 items-center">
          <p class="uppercase">Proyectos</p>
        </div>
      </div>
    </div>
    <div
      class="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 h-full justify-center justify-self-start relative"
    >
      <div
        class="box bg-[#161b22] text-white min-h-[208px] w-full hover:[#161b22] transition-colors duration-300 rounded-xl flex p-10"
      >
        <Icon icon="mdi:github" class="w-full h-full" />
      </div>
      <div
        class="box insta text-white min-h-[208px] w-full hover:insta transition-colors duration-300 rounded-xl flex p-10"
      >
        <Icon icon="fe:instagram" class="w-full h-full" />
      </div>
      <div
        class="box bg-[#0E76A8] text-white min-h-[208px] w-full hover:bg-[#0E76A8] transition-colors duration-300 rounded-xl flex p-10"
      >
        <Icon icon="bx:bxl-linkedin" class="w-full h-full" />
      </div>
      <div
        class="box bg-surface min-h-[208px] w-full hover:bg-surface/5 transition-colors duration-300 rounded-xl flex items-center justify-center p-10"
      >
        <div class="flex gap-2 text-white flex-col cursor-default">
          <div
            class="flex flex-row justify-start gap-1 w-auto text-2xl font-bold"
          >
            <span class="w-auto text-6xl flex justify-end items-end">{{
              formatedNum
            }}</span>
            <span class="flex w-full justify-start items-end text-2xl">{{
              mounth
            }}</span>
          </div>
          <p class="text-3xl md:text-6xl font-bold">
            {{ currentTime.toLocaleTimeString().slice(0, -5) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import gsap from "gsap";
import { useCurrentTime } from "@/composables/useCurrentTime";
import { Icon } from "@iconify/vue";
import Swiper from "@/components/main/Swiper.vue";

const { currentTime } = useCurrentTime();

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

const data = reactive({
  num: 0,
  maxNum: 0,
});

function increaseCount() {
  data.num = new Date().getDate();
}

watch(data, (newValue, oldValue) => {
  gsap.to(data, {
    duration: 0.5,
    delay: 2,
    maxNum: newValue.num,
    ease: "none",
  });
});

const formatedNum = computed(() => {
  return Math.round(data.maxNum);
});

increaseCount();

onMounted(() => {
  gsap.set(".box", {
    transformOrigin: "bottom",
    scaleY: 0,
  });
  gsap.to(".box", {
    duration: 1,
    scaleY: 1,
    opacity: 1,
    delay: 0,
    stagger: 0.2,
    ease: "power2.inOut",
  });

  gsap.set(".inside", {
    transformOrigin: "left",
    scaleX: 0,
    opacity: 0,
    x: "-100%",
  });
  gsap.to(".inside", {
    duration: 1,
    scaleX: 1,
    x: 0,
    opacity: 1,
    delay: 2,
    ease: "power2.inOut",
  });

  gsap.to(".test", {
    duration: 1,
    delay: 2,
    display: "flex",
    opacity: 1,
    width: "80px",
    ease: "power2.inOut",
  });
});
</script>

<style>
.gradient-border {
  position: relative;
  border-radius: 0.5rem;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  width: 100%;
}
@media (prefers-color-scheme: light) {
  .gradient-border::before {
    background: linear-gradient(
      90deg,
      #e2e2e2 0%,
      #e2e2e2 25%,
      #00dc82 50%,
      #36e4da 75%,
      #0047e1 100%
    );
  }
}
@media (prefers-color-scheme: dark) {
  .gradient-border::before {
    background: linear-gradient(
      90deg,
      #303030 0%,
      #303030 25%,
      #00dc82 50%,
      #36e4da 75%,
      #0047e1 100%
    );
  }
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
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  z-index: -1;
}
.gradient-border:hover::before {
  background-position: -50% 0;
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
