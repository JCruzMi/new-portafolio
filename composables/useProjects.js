import { ref } from "vue";
import projects from "~/statics/projects";
import others from "~/statics/others";

export const useProjects = () => {
  const projectList = ref(projects);
  const othersList = ref(others);
  return {
    projectList,
    othersList,
  };
};
