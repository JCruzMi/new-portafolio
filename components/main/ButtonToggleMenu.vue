<template>
  <div
    class="buttonToggleMenu lg:mx-10 md:m-8 m-4 fixed bottom-0 right-0 borderBox max-w-[60px] min-w-[60px] max-h-[60px] min-h-[60px] flex text-center w-full h-full transition-colors duration-300 rounded-full hover:bg-surface bg-surface justify-center border-2-center cursor-pointer items-center p-0 overflow-hidden"
    @click="scrollTop"
  >
    <Icon icon="solar:map-arrow-up-bold" class="w-8 h-8 text-white" />
  </div>
</template>

<script setup>
import gsap from "gsap";
import { Icon } from "@iconify/vue";
import { onMounted } from "vue";
import { handleScroll, scrolling } from "~/composables/useNavbar";

let tl;

onMounted(() => {
  tl = tl = gsap.timeline({
    delayed: 0,
    paused: true,
    reversed: true,
  });
  tl.from(".buttonToggleMenu", {
    duration: 0.3,
    y: 300,
  });
});

onMounted(() => {
  document.addEventListener("scroll", handleScroll);
});

// onUnmounted(() => {
//   document.removeEventListener("scroll", handleScroll);
// });

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

watch(scrolling, () => {
  if (scrolling.down) {
    tl.play();
  } else {
    tl.reverse();
  }
});
</script>

<style lang="scss" scoped></style>
