<template>
  <main
    class="mx-auto max-w-5xl w-full flex justify-center items-center min-h-screen lg:p-12 md:p-8 p-4"
  >
    <section
      class="w-full flex items-center flex-none flex-col flex-nowrap justify-start h-min overflow-hidden relative gap-3"
    >
      <div
        class="flex flex-col md:grid flex-none gap-3 grid-rows-[repeat(2,260px)] auto-rows-[260px] md:grid-cols-[repeat(2,minmax(200px,1fr))] lg:grid-cols-[repeat(3,minmax(200px,1fr))] overflow-hidden relative w-full h-min justify-center"
      >
        <div
          class="gradient-border min-h-[208px] items-start order-0 self-start bg-gay-900 rounded-3xl flex flex-col gap-7 h-full justify-center justify-self-start p-10 relative w-full overflow-hidden"
        ></div>
        <div
          class="gradient-border min-h-[208px] order-1 lg:col-auto items-start self-start bg-gay-900 rounded-3xl flex flex-col gap-7 h-full justify-center justify-self-start p-10 relative w-full overflow-hidden"
        ></div>
        <div
          class="gradient-border min-h-[208px] lg:row-[auto_/_span_2] md:col-[auto_/_span_2] lg:col-auto order-3 h-full items-start self-start bg-gay-900 rounded-3xl flex flex-col gap-7 justify-center justify-self-start p-10 relative w-full overflow-hidden"
        ></div>
        <div
          class="gradient-border min-h-[208px] col-[auto_/_span_2] order-4 h-full items-start self-start bg-gay-900 rounded-3xl flex flex-col gap-7 justify-center justify-self-start p-10 relative w-full overflow-hidden"
        ></div>
      </div>
      <div
        class="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 h-full justify-center justify-self-start relative"
      >
        <div
          class="gradient-border min-h-[208px] w-full bg-gay-[#000] rounded-3xl flex p-10"
        ></div>
        <div
          class="gradient-border min-h-[208px] w-full bg-gay-900 rounded-3xl flex p-10"
        ></div>
        <div
          class="gradient-border min-h-[208px] w-full bg-gay-900 rounded-3xl flex p-10"
        ></div>
        <div
          class="gradient-border min-h-[208px] w-full bg-gay-900 rounded-3xl flex p-10"
        ></div>
      </div>
    </section>
  </main>
</template>

<script setup>
import gsap from "gsap";

onMounted(() => {
  gsap.from(".gradient-border", {
    duration: 1,
    scale: 0.5,
    opacity: 0,
    delay: 0,
    stagger: 0.2,
    ease: "back.inOut",
    force3D: true,
  });
});
</script>

<style>
body {
  background-color: #090909;
}

.gradient-border {
  position: relative;
  border-radius: 0.5rem;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  width: 100%;
}
@media (prefers-color-scheme: light) {
  .gradient-border {
    background-color: rgba(255, 255, 255, 0.3);
  }
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
  .gradient-border {
    background-color: rgba(20, 20, 20, 0.3);
  }
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
