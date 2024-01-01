import { ref } from "vue";
import projects from "~/statics/projects";

export const useProjects = () => {
  const projectList = ref(projects);

  return {
    projectList,
  };
};
