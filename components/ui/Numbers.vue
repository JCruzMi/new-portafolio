<template>
  {{ formatedNum }}
</template>

<script setup>
import gsap from "gsap";

const props = defineProps({
  maxValue: Number,
});

const data = reactive({
  num: 0,
  maxNum: 0,
});

function increaseCount() {
  data.num = props.maxValue;
}

watch(data, (newValue, oldValue) => {
  gsap.to(data, {
    duration: 0.5,
    delay: 1,
    maxNum: newValue.num,
    ease: "none",
  });
});

const formatedNum = computed(() => {
  return Math.round(data.maxNum);
});

increaseCount();
</script>
