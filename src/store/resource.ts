import { defineStore } from "pinia";
import { useConfigStore } from "./config";
import { Spine, SpineParser } from "pixi-spine";
import * as PIXI from "pixi.js";

SpineParser.registerLoaderPlugin();
const configStore = useConfigStore();

export const useResourceStore = defineStore({
  id: "resourceStore",
  state: () => ({
    spineMap: {} as { [key: string]: Spine },
    spriteMap: {} as { [key: string]: PIXI.Sprite },
    application: {} as PIXI.Application,
    preBackgroundId: "",
    startedMission: 0,
    finishedMission: 0,
    startedAnime: 0,
    finishedAnime: 0,
  }),
  getters: {
    // get map
    getSpineMap(state) {
      return state.spineMap;
    },
    getSpriteMap(state) {
      return state.spriteMap;
    },
    // get resourceId
    getPreBackgroundId(state) {
      return state.preBackgroundId;
    },
    // get status
    allMissionFinished(state) {
      return state.startedMission === state.finishedMission;
    },
    allAnimeFinished(state) {
      return state.startedAnime === state.finishedAnime;
    },
  },
  actions: {
    // set status
    AddMission() {
      this.startedMission++;
    },
    FinishMission() {
      this.finishedMission++;
    },
    ClearMission() {
      this.startedMission = 0;
      this.finishedMission = 0;
    },
    AddAnime() {
      this.startedAnime++;
    },
    FinishAnime() {
      this.finishedAnime++;
    },
    ClearAnime() {
      this.startedAnime = 0;
      this.finishedAnime = 0;
    },
    // load resource
    LoadSpineResource(spineId: string): Spine {
      this.AddMission();
      const url = `${configStore.getBaseUrl}/CharacterStands/${spineId}.skel`;
      if (this.spineMap[spineId]) {
        console.log(`Spine "${spineId}" already loaded`);
      } else {
        console.log(`Loading spine "${spineId}" resource from ${url}`);
        const loader = new PIXI.Loader();
        loader.add(spineId, url).load((_, resources) => {
          const spine = new Spine(resources[spineId].spineData!);
          this.spineMap[spineId] = spine;
          console.log(`Spine "${spineId}" loaded`);
          this.FinishMission();
          console.log(`All mission finished: ${this.allMissionFinished}`);
        });
      }
      return this.spineMap[spineId];
    },
    LoadBackgroundResource(backgroundId: string): PIXI.Sprite {
      this.AddMission();
      const url = `${configStore.getBaseUrl}/webp/Background/${backgroundId}.webp`;
      if (this.spriteMap[backgroundId]) {
        console.log(`Background "${backgroundId}" already loaded`);
      } else {
        console.log(`Loading background "${backgroundId}" resource from ${url}`);
        const loader = new PIXI.Loader();
        loader.add(backgroundId, url).load((_, resources) => {
          const sprite = new PIXI.Sprite(resources[backgroundId].texture!);
          sprite.width = window.innerWidth * 1.25 * window.devicePixelRatio;
          sprite.height = window.innerWidth * 1.25 * window.devicePixelRatio * configStore.getRatio;
          sprite.x = -sprite.width * 0.125;
          sprite.y = -sprite.height * 0.125;
          this.spriteMap[backgroundId] = sprite;
          console.log(`Sprite "${backgroundId}" loaded`);
          this.FinishMission();
          console.log(`All mission finished: ${this.allMissionFinished}`);
        });
      }
      return this.spriteMap[backgroundId];
    },
  },
});
