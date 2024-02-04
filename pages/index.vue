<template>
  <Menu />
  <main
    class="mx-auto max-w-7xl w-full flex justify-center items-start min-h-screen lg:p-8 md:p-8 p-4 font-primary relative"
  >
    <Index />
    <ButtonToggleMenu />
  </main>
</template>

<script setup>
import ButtonToggleMenu from "~/components/main/ButtonToggleMenu.vue";
import Index from "~/components/main/Index.vue";
import Menu from "~/components/main/Menu.vue";
import { useOpen } from "~/composables/useMenu";

useHead({
  title: "Huan - Home",
  meta: [
    {
      name: "description",
      content: "My portfolio in Nuxt js by Huan whit love",
    },
  ],
});
const open = useOpen();
provide("openMenu", open);
</script>

<style>
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
