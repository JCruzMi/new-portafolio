<template>
  <Menu />
  <main
    class="mx-auto max-w-7xl w-full flex justify-center items-start min-h-screen lg:p-8 md:p-8 p-4 font-primary"
  >
    <section class="w-full flex flex-col md:grid md:grid-cols-2 relative gap-3">
      <header
        class="box flex w-full justify-between col-span-2 items-center gap-3"
      >
        <Card
          class="min-h-[60px] max-h-[60px] flex justify-center items-center"
        >
          <h1 class="text-xl font-bold text-white text-center">Proyectos</h1>
        </Card>
        <div
          @click="open.toggle"
          class="z-10 max-w-[60px] borderBox min-w-[60px] min-h-[60px] max-h-[60px] flex text-center w-full h-full transition-colors duration-300 rounded-xl hover:bg-surface bg-surface justify-center border-2-center cursor-pointer items-center p-0 overflow-hidden"
        >
          <Icon icon="ph:list-bold" class="w-8 h-8 text-white" />
        </div>
      </header>
      <template v-for="project in projectList" :key="project.name">
        <div class="box">
          <Card class="overflow-hidden">
            <div class="overflow-hidden h-[40px]">
              <div
                class="text-lg font-semibold flex w-full justify-between text-white"
              >
                <h3 class="">{{ project.name }}</h3>
                <a
                  :href="project.link"
                  target="_blank"
                  :aria-label="project.name"
                >
                  <Icon
                    icon="material-symbols-light:arrow-circle-right-outline-rounded"
                    class="w-10 h-10 text-white hover:text-success transition-all duration-300"
                  />
                </a>
              </div>
            </div>
            <p class="text-white">
              {{ project.description }}
            </p>
            <div class="flex flex-row gap-3 py-2">
              <template v-for="tag in project.tags" :key="tag + project.name">
                <Tags :icon="tag" />
              </template>
            </div>
            <img
              :src="project.imageProject"
              :alt="project.name"
              class="image rounded-lg h-full w-full object-cover bg-no-repeat bg-center bg-cover aspect-video"
            />
          </Card>
        </div>
      </template>
      <template v-for="project in othersList" :key="project.name">
        <div class="box">
          <Card class="overflow-hidden">
            <div class="overflow-hidden h-[40px]">
              <div
                class="text-lg font-semibold flex w-full justify-between text-white"
              >
                <h3 class="">{{ project.name }}</h3>
                <a
                  :href="project.link"
                  target="_blank"
                  :aria-label="project.name"
                >
                  <Icon
                    icon="material-symbols-light:arrow-circle-right-outline-rounded"
                    class="w-10 h-10 text-white hover:text-success transition-all duration-300"
                  />
                </a>
              </div>
            </div>
            <p class="text-white">
              {{ project.description }}
            </p>
            <div class="flex flex-row gap-3 py-2">
              <template v-for="tag in project.tags" :key="tag + project.name">
                <Tags :icon="tag" />
              </template>
            </div>
            <img
              :src="project.imageProject"
              :alt="project.name"
              class="image rounded-lg h-full w-full object-cover bg-no-repeat bg-center bg-cover aspect-video"
            />
          </Card>
        </div>
      </template>
    </section>
    <ButtonToggleMenu />
  </main>
</template>

<script setup>
import gsap from "gsap";
import Card from "~/components/ui/Card.vue";
import Tags from "~/components/ui/Tags.vue";
import { Icon } from "@iconify/vue";
import Menu from "~/components/main/Menu.vue";
import { useOpen } from "~/composables/useMenu";
import ButtonToggleMenu from "~/components/main/ButtonToggleMenu.vue";

useHead({
  title: "Huan - Proyectos",
  meta: [
    {
      name: "Proyectos",
      content:
        "Proyectos en los que participe o que hice con fines más que educativos",
    },
  ],
});
const open = useOpen();
provide("openMenu", open);

const { projectList, othersList } = useProjects();

let tl;
onMounted(() => {
  tl = gsap.timeline({
    delayed: 0,
    paused: true,
    reversed: true,
  });
  tl.set(".box", {
    transformOrigin: "top",
    scaleY: 0,
  });
  tl.to(".box", {
    duration: 0.5,
    scaleY: 1,
    opacity: 1,
    delay: 0,
    ease: "power2.inOut",
    stagger: 0.25,
  });
  tl.play();
});

onUnmounted(() => {
  tl.revert();
});
</script>

<style scoped></style>
