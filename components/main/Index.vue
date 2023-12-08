<template>
  <section
    class="w-full flex items-center flex-none flex-col flex-nowrap justify-start h-min overflow-hidden relative gap-3"
  >
    <div
      class="flex flex-col md:grid flex-none gap-3 grid-rows-[repeat(2,260px)] auto-rows-[260px] md:grid-cols-[repeat(2,minmax(200px,1fr))] lg:grid-cols-[repeat(3,minmax(200px,1fr))] overflow-hidden relative w-full h-min justify-center"
    >
      <div
        class="box bg-surface min-h-[208px] items-start order-0 self-start hover:bg-surface/5 transition-colors duration-300 rounded-xl flex flex-col gap-7 h-full justify-center justify-self-start p-10 relative w-full overflow-hidden"
      >
        <h1 class="text-5xl font-bold text-text">
          Soy Juan, Desarrollador Web
        </h1>
      </div>
      <div
        class="box bg-surface min-h-[208px] order-1 lg:col-auto items-start self-start hover:bg-surface/5 transition-colors duration-300 rounded-xl flex flex-col gap-7 h-full justify-center justify-self-start p-10 relative w-full overflow-hidden"
      ></div>
      <div
        class="box bg-surface min-h-[208px] lg:row-[auto_/_span_2] md:col-[auto_/_span_2] lg:col-auto order-3 h-full items-start self-start hover:bg-surface/5 transition-colors duration-300 rounded-xl flex flex-col gap-7 justify-center justify-self-start p-10 relative w-full overflow-hidden"
      ></div>
      <div
        class="box bg-surface min-h-[208px] col-[auto_/_span_2] order-4 h-full items-start self-start hover:bg-surface/5 transition-colors duration-300 rounded-xl flex flex-col gap-7 justify-center justify-self-start p-10 relative w-full overflow-hidden"
      ></div>
    </div>
    <div
      class="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 h-full justify-center justify-self-start relative"
    >
      <div
        class="box bg-surface min-h-[208px] w-full hover:bg-surface/5 transition-colors duration-300 rounded-xl flex p-10"
      ></div>
      <div
        class="box bg-surface min-h-[208px] w-full hover:bg-surface/5 transition-colors duration-300 rounded-xl flex p-10"
      ></div>
      <div
        class="box bg-surface min-h-[208px] w-full hover:bg-surface/5 transition-colors duration-300 rounded-xl flex p-10"
      ></div>
      <div
        class="box bg-surface min-h-[208px] w-full hover:bg-surface/5 transition-colors duration-300 rounded-xl flex p-10"
      ></div>
    </div>
  </section>
</template>

<script setup>
import gsap from "gsap";

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

</style>
