import { defineStore } from "pinia";


export const useConfigStore = defineStore({
  id: "config",
  state: () => ({
    cdn:"https://wds-1309483543.cos.ap-beijing.myqcloud.com/cdn",
    language: "chs" as "chs" | "cht" | "eng" | "jpn",
    page:"/",
  }),
  getters: {
    getLanguage(): "chs" | "cht" | "eng" | "jpn" {
      return this.language;
    },
    getPage(): string {
      return this.page;
    },
  },
  actions: {
    setLanguage(language: string) {
      if (language !== "chs" && language !== "cht" && language !== "jpn" && language !== "eng") {
        throw new Error("Invalid language");
      }
      this.language = language;
    },
    setPage(page: string) {
      this.page = page;
    },
  },
});