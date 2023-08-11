import { defineStore } from "pinia";


export const useConfigStore = defineStore({
  id: "config",
  state: () => ({
    language: "chs" as "chs" | "cht" | "eng" | "jpn",
  }),
  getters: {
    getLanguage(): "chs" | "cht" | "eng" | "jpn" {
      return this.language;
    },
  },
  actions: {
    setLanguage(language: string) {
      if (language !== "chs" && language !== "cht" && language !== "jpn" && language !== "eng") {
        throw new Error("Invalid language");
      }
      this.language = language;
    },
  },
});