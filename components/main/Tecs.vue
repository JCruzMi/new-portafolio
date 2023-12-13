<template>
  <div class="flex flex-row flex-wrap gap-4 items-center justify-center">
    <div class="tooltip tooltip-primary" data-tip="Vue js">
      <Icon icon="devicon:vuejs" class="w-10 h-10 icon" />
    </div>
    <div class="tooltip tooltip-primary" data-tip="Nuxt js">
      <Icon icon="devicon:nuxtjs" class="w-10 h-10 icon" />
    </div>
    <div class="tooltip tooltip-primary" data-tip="React js">
      <Icon icon="devicon:react" class="w-10 h-10 icon" />
    </div>
    <div class="tooltip tooltip-primary" data-tip="Next js">
      <Icon icon="devicon:nextjs" class="w-10 h-10 icon" />
    </div>
    <div class="tooltip tooltip-primary" data-tip="Astro js">
      <Icon icon="devicon:astro" class="w-10 h-10 icon" />
    </div>
    <div class="tooltip tooltip-primary" data-tip="HTML5">
      <Icon icon="devicon:html5" class="w-10 h-10 icon" />
    </div>
    <div class="tooltip tooltip-primary" data-tip="CSS3">
      <Icon icon="devicon:css3" class="w-10 h-10 icon" />
    </div>
    <div class="tooltip tooltip-primary" data-tip="JavaScript">
      <Icon icon="devicon:javascript" class="w-10 h-10 icon" />
    </div>
    <div class="tooltip tooltip-primary" data-tip="TypeScript">
      <Icon icon="devicon:typescript" class="w-10 h-10 icon" />
    </div>
    <div class="tooltip tooltip-primary" data-tip="Firebase">
      <Icon icon="vscode-icons:file-type-firebase" class="w-10 h-10 icon" />
    </div>
    <div class="tooltip tooltip-primary" data-tip="GitHub">
      <Icon icon="mdi:github" class="w-10 h-10 icon text-white" />
    </div>
    <div class="tooltip tooltip-primary" data-tip="Tailwind">
      <Icon icon="devicon:tailwindcss" class="w-10 h-10 icon" />
    </div>
    <div class="tooltip tooltip-primary" data-tip="Figma">
      <Icon icon="devicon:figma" class="w-10 h-10 icon" />
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import gsap from "gsap";

onMounted(() => {
  gsap.set(".icon", {
    transformOrigin: "top",
    scale: 0,
  });
  gsap.to(".icon", {
    duration: 0.5,
    scale: 1,
    opacity: 1,
    delay: 0.5,
    stagger: 0.02,
    ease: "power2.inOut",
  });
});
</script>
