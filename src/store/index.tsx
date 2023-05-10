import { create } from "zustand";

export const useUserStore = create((set) => ({
  // State
  user: {},
  repos: [],
  //   Actions
  setUserInfo: (info: any) => set(() => ({ user: info })),
  setUserToken: (infoWithToken: any) => set(() => ({ user: infoWithToken })),
  setUserProjects: (infoWithProjects: any) =>
    set(() => ({ user: infoWithProjects })),
  setRepos: (repos: any) => set(() => ({ repos: repos })),
  //   setUserToken: () => set((state:any) => ({ user: state})),
  //   setUserPrjects: () => set((state:any) => ({ user: state})),
}));
