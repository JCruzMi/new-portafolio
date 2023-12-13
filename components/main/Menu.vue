<template>
  <div class="menuBg w-full h-screen bg-background fixed z-50 inset-0 p-10">
    <div class="menu w-full h-full bg-surface rounded-lg">
      <button @click="closeNext">close</button>
    </div>
  </div>
</template>

<script setup>
import gsap from "gsap";

const { open, toggle } = inject("openMenu");

let tl;

onMounted(() => {
  tl = gsap.timeline({
    delayed: 0,
    paused: true,
    reversed: true,
  });
  tl.from(".menuBg", {
    transformOrigin: "top",
    scaleY: 0,
  });
  tl.from(".menu", {
    transformOrigin: "bottom",
    scaleY: 0,
  });
});

function openNext() {
  tl.play();
}

function closeNext() {
  tl.reverse();
  toggle();
}

watch(open, () => {
  if (open) {
    openNext();
  } else {
    closeNext();
  }
});
</script>
