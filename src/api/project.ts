import { db } from "../../firebase";
import { USER } from "@/constants/user";
import { type Project } from "@/types";

export const createProject = (dataForm: any, projects: Array<Project>) => {
  const projectsLegacy = projects?.length ? projects : [];
  return new Promise((resolve, reject) => {
    db.collection("users")
      .doc(USER.ID)
      .update({ projects: [...projectsLegacy, dataForm] })
      .then(() => {
        resolve([...projectsLegacy, dataForm]);
      })
      .catch((error: any) => {
        console.log(error);
        reject(error);
      });
  });
};

export const getProjects = () => {
  return new Promise((resolve, reject) => {
    db.collection("users")
      .doc(USER.ID)
      .get()
      .then((response: any) => {
        console.log("Sheeesh", response);
        resolve(response?.data()?.projects);
      })
      .catch((error: any) => {
        console.log(error);
        reject(error);
      });
  });
};

export const getProjectById = (owner_id: any, project_id: any) => {
  return new Promise((resolve, reject) => {
    db.collection("users")
      .doc(owner_id)
      .get()
      .then((response: any) => {
        const projects = response?.data()?.projects;
        const project = projects?.filter(
          (p: any) => p.project_id === project_id
        );
        resolve(project?.at(0));
      })
      .catch((error: any) => {
        console.log(error);
        reject(error);
      });
  });
};
