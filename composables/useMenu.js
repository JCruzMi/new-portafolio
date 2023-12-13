import { ref } from "vue";

export const useOpen = () => {
  const open = ref(false);
  const toggle = () => {
    open.value = !open.value;
  };
  return {
    open,
    toggle,
  };
};
