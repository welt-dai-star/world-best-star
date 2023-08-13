import { defineStore } from "pinia";
import {Spine} from "pixi-spine";

export const useResourceStore = defineStore({
  id: "resourceStore",
  state: ()=> ({
    spineMap: {} as {[key:string]: Spine},

  }),
  getters: {
    getSpineMap(state) {
      return state.spineMap;
    },
  },
  actions: {
    addSpineToMap(spineId:string, spineData: Spine) {
      this.spineMap[spineId] = spineData;
    },
    loadSpineById(spineId:string) :Spine{
      return this.spineMap[spineId];
    },
  },
});