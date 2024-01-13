import { ref } from "vue";
import experience from "~/statics/experience";

export const useExperience = () => {
  const experienceList = ref(experience);

  return {
    experienceList,
  };
};
