<template>
  <section
    class="w-full flex items-center flex-none flex-col flex-nowrap justify-start h-min overflow-hidden relative gap-3"
  >
    <div
      class="flex flex-col md:grid flex-none gap-3 grid-rows-[repeat(2,260px)] auto-rows-[260px] md:grid-cols-[repeat(2,minmax(200px,1fr))] lg:grid-cols-[repeat(3,minmax(200px,1fr))] overflow-hidden relative w-full h-min justify-center"
    >
      <div
        class="box bg-surface min-h-[208px] items-start order-3 self-start hover:bg-surface/5 transition-colors duration-300 rounded-xl flex flex-col gap-7 h-full justify-center justify-self-start p-10 relative w-full overflow-hidden"
      >
        Tecnologias - Vue/React
      </div>
      <div
        class="box mail min-h-[208px] order-4 lg:col-auto items-start self-start hover:mail transition-colors duration-300 rounded-xl flex flex-col gap-7 h-full justify-center justify-self-start p-10 relative w-full overflow-hidden"
      >
        <div class="w-full p-8 md:p-16">
          <Icon icon="bx:bxl-gmail" class="w-full h-full text-white" />
        </div>
      </div>
      <div
        class="box bg-surface min-h-[208px] lg:row-[auto_/_span_2] md:col-[auto_/_span_2] lg:col-auto order-2 h-full items-start self-start hover:bg-surface/5 transition-colors duration-300 rounded-xl flex flex-col gap-7 justify-center justify-self-start p-10 relative w-full overflow-hidden"
      >
        Proyectos
      </div>
      <div
        class="box bg-surface min-h-[208px] col-[auto_/_span_2] order-0 h-full items-start self-start hover:bg-surface/5 transition-colors duration-300 rounded-xl flex flex-col gap-7 justify-center justify-self-start p-10 relative w-full overflow-hidden"
      >
        <h1 class="text-3xl md:text-6xl font-bold text-text uppercase">
          Juan David Cruz
        </h1>
        <div class="absolute right-0 bottom-0 p-4 px-6 flex gap-4 items-center">
          <p>SOBRE MI</p>
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
        <div class="flex gap-2 text-white cursor-default">
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

const { currentTime } = useCurrentTime();

onMounted(() => {
  gsap.set(".box", {
    transformOrigin: "bottom",
    scaleY: 0,
  });
  gsap.to(".box", {
    duration: 1,
    scaleY: 1,
    opacity: 1,
    delay: 1,
    stagger: 0.2,
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
