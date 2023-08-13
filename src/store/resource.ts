import { defineStore } from "pinia";
import { useConfigStore } from "./config";
import {Spine, SpineParser} from "pixi-spine";
import * as PIXI from "pixi.js";

SpineParser.registerLoaderPlugin();
const configStore = useConfigStore();

export const useResourceStore = defineStore({
  id: "resourceStore",
  state: ()=> ({
    spineMap: {} as {[key:string]: Spine},
    startedMission: 0,
    finishedMission: 0,
  }),
  getters: {
    getSpineMap(state) {
      return state.spineMap;
    },
    allMissionFinished(state) {
      return state.startedMission === state.finishedMission;
    },
  },
  actions: {
    addMission() {
      this.startedMission++;
    },
    finishMission() {
      this.finishedMission++;
    },
    LoadSpineResource(spineId: string): Spine{
      this.addMission();
      const url = `${configStore.getBaseUrl}/CharacterStands/${spineId}.skel`;
      if (this.spineMap[spineId]) {
        console.log(`Spine "${spineId}" already loaded`);
        return this.spineMap[spineId];
      }
      console.log(`Loading spine "${spineId}" resource from ${url}`);
      const loader = new PIXI.Loader();
      loader.add(spineId, url).load((_, resources) => {
        const spine = new Spine(resources[spineId].spineData!);
        this.spineMap[spineId] = spine;
        console.log(`Spine "${spineId}" loaded`);
        this.finishMission();
        console.log(`All mission finished: ${this.allMissionFinished}`);
      });
      return this.spineMap[spineId];
    },

  },
});