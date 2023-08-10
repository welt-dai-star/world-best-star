import { defineStore } from "pinia";


const characterMotionExcel = {
    "facialExpressionMasterId":{},
    "headMotionMasterId": {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: []
    },
    "headDirectionMasterId":{
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
    },
    "bodyMotionMasterId": {
        1: [],
        2: [],
        3: [],
        4: ["body/sad"],
        5: [],
        6: [],
        7: ["body/think"],
        8: ["body/unique1"],
        9: ["body/unique2"],
        10: ["body/unique3"],
        11: ["body/unique4"],
        12: ["body/unique5"],
        13: ["body/unique6"],
        14: ["body/unique7"],
        15: ["body/unique8"],
        16: ["body/unique9"],
        17: ["body/unique10"],
        18: ["body/unique11"],
        19: ["body/unique12"],
        20: ["body/unique13"],
        21: ["body/unique14"],
        22: ["body/unique15"],
        23: ["body/unique16"],
        24: ["body/unique17"],
        25: ["body/unique18"],
        26: ["body/unique19"],
        27: ["body/unique20"],
        28: ["body/unique21"]
    },
    "lipSyncMasterId": {
        1: ["mouth/normal"],
        2: [],
        3: [],
        4: ["mouth/sad"],
        5: [],
    },
}


export const usingMainStore = defineStore({
    id: "mainStore",
    state: () => ({
        count: 0,
    }),
    getters: {
        doubleCount() {
            return this.count * 2;
        },
    },
    actions: {
        increment() {
            this.count++;
        },
    },
});

