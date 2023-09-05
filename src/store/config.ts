import { defineStore } from "pinia";


export const useConfigStore = defineStore({
  id: "config",
  state: () => ({
    // global
    cdn: "https://wds-1309483543.cos.ap-beijing.myqcloud.com/cdn",
    language: "chs" as "chs" | "cht" | "eng" | "jpn",
    page: "/",
    ratio: 9 / 16,
    // game
    appWidth: window.innerWidth * 0.7,
    // dev
    exampleStart: true,
  }),
  getters: {
    // global
    getLanguage(): "chs" | "cht" | "eng" | "jpn" {
      return this.language;
    },
    getPage(): string {
      return this.page;
    },
    getBaseUrl(): string {
      return this.cdn;
    },
    getRatio(): number {
      return this.ratio;
    },
    // game
    getAppWidth(): number {
      return this.appWidth;
    },
    // dev
    getExampleState(): boolean {
      return this.exampleStart;
    },
  },
  actions: {
    setLanguage(language: string) {
      if (
        language !== "chs" &&
        language !== "cht" &&
        language !== "jpn" &&
        language !== "eng"
      ) {
        throw new Error("Invalid language");
      }
      this.language = language;
    },
    setPage(page: string) {
      this.page = page;
    },
    getSpineUrlById(spineId: number): string[] {
      return [
        `${this.cdn}/CharacterStands/${spineId}.skel`,
        `${this.cdn}/CharacterStands/${spineId}.atlas`,
      ];
    },
    getBackgroundUrlById(spineId: number): string[] {
      return [
        `${this.cdn}/CharacterStands/${spineId}.skel`,
        `${this.cdn}/CharacterStands/${spineId}.atlas`,
      ];
    },
    getEpisodeUrlById(EpisodeId: string): string {
      return `${this.cdn}/episode/${EpisodeId}.json`;
    },
  },
});