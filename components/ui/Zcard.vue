<script setup>
import { ref, computed } from "vue";
import { useMouseInElement } from "@vueuse/core";
const target = ref(null);

const props = defineProps({
  light: Boolean,
  class: String,
});

const { elementX, elementY, isOutside, elementHeight, elementWidth } =
  useMouseInElement(target);

const MAX_ROTATION = 10;
const rotateY = computed(() =>
  (
    (elementX.value / elementWidth.value) * MAX_ROTATION -
    MAX_ROTATION / 2
  ).toFixed(2)
);

const rotateX = computed(() =>
  (
    MAX_ROTATION / 2 -
    (elementY.value / elementHeight.value) * MAX_ROTATION
  ).toFixed(2)
);

// const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2)
const rotation = computed(() =>
  isOutside.value
    ? ""
    : `perspective(${elementWidth.value}px) rotateX(${rotateX.value}deg) rotateY(${rotateY.value}deg)`
);

const transition = computed(() =>
  isOutside.value ? "transform 0.5s ease" : "transform 0.25s ease-out"
);

// const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2)
const rotationLight = computed(() =>
  isOutside.value
    ? ""
    : `translate(${rotateY.value * -2}%, ${rotateX.value * 2}%)`
);
</script>
<template>
  <div class="w-full lg:p-4 relative group" :class="class" ref="target">
    <div class="w-full h-full p-1 card overflow-hidden">
      <span
        v-if="light"
        class="atropos-highlight transition-all ease-in-out group-hover:opacity-100"
      ></span>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.card {
  transform: v-bind(rotation);
  transition: v-bind(transition);
}

.atropos-highlight {
  position: absolute;
  pointer-events: none;
  transform: v-bind(rotationLight);
  transition: v-bind(transition);
  display: block;
  opacity: 0;
}

.atropos-highlight {
  left: -50%;
  top: -50%;
  width: 200%;
  height: 200%;
  background-image: radial-gradient(
    circle at 50%,
    rgba(255, 255, 255, 0.25),
    transparent 50%
  );
  z-index: 1;
}

</style>
