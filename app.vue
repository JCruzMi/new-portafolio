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
  ogTitle: "Huan",
  ogDescription: "Mi portafolio web con Nuxt js",
  ogImage: "/images/portfolio/screen.webp",
  ogUrl: "huan.dev",
  twitterTitle: "Huan",
  twitterDescription: "Mi portafolio web con Nuxt js",
  twitterImage: "/images/portfolio/screen.webp",
  twitterCard: "summary",
});
</script>

<template>
  <NuxtPage />
</template>

<style></style>
