<script setup>
useHead({
  htmlAttrs: {
    lang: "es",
  },
  link: [
    {
      rel: "icon",
      type: "image/svg",
      href: "/favicon.svg",
    },
  ],
});

useSeoMeta({
  ogTitle: "Huan | Desarrollador Web Responsive",
  ogDescription:
    "Soy Juan desarrollador Frontend, manejo diseño responsivo y optimización de rendimiento web.",
  ogImage: "/images/portfolio/screen.webp",
  ogUrl: "huan.dev",
  twitterTitle: "Huan | Desarrollador Web Responsive",
  twitterDescription:
    "Soy Juan desarrollador Frontend, manejo diseño responsivo y optimización de rendimiento web.",
  twitterImage: "/images/portfolio/screen.webp",
  twitterCard: "Hi",
});
</script>

<template>
  <NuxtPage />
</template>

<style></style>
