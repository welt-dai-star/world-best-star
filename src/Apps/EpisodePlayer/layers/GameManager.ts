import {CharacterMotion, EpisodeUnit} from "../../../types/common";
import { useConfigStore } from "../../../store/config";
import * as Phaser from "phaser";
import * as spine from "@esotericsoftware/spine-phaser";


const configStore = useConfigStore();
export class EpisodeParser {
  constructor(episode: EpisodeUnit[]) {
    this.episode = episode;
    this.nowPlaying = 0;
    this.SpineHandle = ()=> {};
    this.TextHandle = ()=> {};
    this.BackgroundHandle = ()=> {};
    this.BGMHandle = ()=>{};
    this.SEHandle = ()=>{};
    this.VoiceHandle = ()=>{};
    this.EffectHandle = ()=>{};
    this.HistoryHandle = ()=>{};
  }

  private episode: EpisodeUnit[];
  private nowPlaying: number;
  private SpineHandle: (characterMotions: CharacterMotion[]) => void;
  private TextHandle: (speakerName: string, phrase: string, fontSize: string) => void;
  private BackgroundHandle: (backgroundImageFileName?: string, backgroundImageFileFadeType?: number, 
    fadeValue1?: number, fadeValue2?: number, fadeValue3?: number) => void;
  private BGMHandle: (bgmFileName?: string) => void;
  private SEHandle: (seFileName?: string) => void;
  private VoiceHandle: (voiceFileName?: string) => void;
  private EffectHandle: (windowEffect?: number, sceneCameraMasterId?: number) => void;
  private HistoryHandle: (speakerName: string, phrase: string, 
    fontSize: string, speakerIconId?: string) => void;
  
  public Read() {
    const cursorEpisode = this.episode[this.nowPlaying];
    this.TextHandle(cursorEpisode.speakerName, cursorEpisode.phrase, cursorEpisode.fontSize);
    this.SpineHandle(cursorEpisode.characterMotions);
    this.BackgroundHandle(cursorEpisode.backgroundImageFileName, cursorEpisode.backgroundImageFileFadeType, 
      cursorEpisode.fadeValue1, cursorEpisode.fadeValue2, cursorEpisode.fadeValue3);
    // from the same layer
    this.BGMHandle(cursorEpisode.bgmFileName);
    this.SEHandle(cursorEpisode.seFileName);
    this.VoiceHandle(cursorEpisode.voiceFileName);
    // end from the same layer
    this.EffectHandle(cursorEpisode.windowEffect, cursorEpisode.sceneCameraMasterId);
    this.HistoryHandle(cursorEpisode.speakerName, cursorEpisode.phrase, 
      cursorEpisode.fontSize, cursorEpisode.speakerIconId);
  }
}

async function downloadJSON(url: string) {
  return fetch(url).then(response => response.json());
}
const episodeJSON = await downloadJSON(configStore.getEpisodeUrlById("1040101")) as EpisodeUnit[];
console.log(episodeJSON);
class SceneConfig extends Phaser.Scene {
  width = 1920;
  height = 1080;
  loadSpine(spineId: number) {
    if (spineId === 0) {
      return ;
    }
    const url = `${configStore.getBaseUrl}/CharacterStands/${spineId}`;
    this.load.spineBinary(`${spineId}skel`, url + ".skel");
    this.load.spineAtlas(`${spineId}atlas`, url + ".atlas");
  }
  loadBackground(backgroundImageFileName: string) {
    const url = `${configStore.getBaseUrl}/webp/Background/${backgroundImageFileName}.webp`;
    this.load.image(`bg_${backgroundImageFileName}`, url);
  }
  preload() {
    for (const unit of episodeJSON) {
      if (unit.backgroundImageFileName) {
        this.loadBackground(unit.backgroundImageFileName);
        // console.log("Loading: " + "background_" + unit.backgroundImageFileName);
      }
      for (const cm of unit.characterMotions) {
        this.loadSpine(cm.spineId);
        // console.log("Loading: " + "spine_" + cm.spineId);
      }
    }
  }
  create() {
    const iroha = this.add.spine(this.width * 0.25, this.height, "40102skel", "40102atlas");
    iroha.scale = (this.height / 1080) * 0.7;
    iroha.animationState.setAnimation(0, "breath", true);
    iroha.animationState.setAnimation(1, "body/think", false);
    const mito = this.add.spine(this.width * 0.75, this.height, "40202skel", "40202atlas");
    mito.scale = (this.height / 1080) * 0.7;
    mito.animationState.setAnimation(0, "breath", true);
    mito.animationState.setAnimation(1, "body/think", false);
    const background = this.add.image(1920 / 2, 1080 / 2, "bg_40");
    background.width = this.width;
    background.height = this.height;
    background.setDepth(-1);
  }
}

const config = {
  type: Phaser.WEBGL,
  width: 1920,
  height: 1080,
  scene: SceneConfig,
  plugins: {
    scene: [
      { key: "spine.SpinePlugin", plugin: spine.SpinePlugin, mapping: "spine" },
    ],
  },
};

export const app = new Phaser.Game(config);
app.canvas.style.display = "none";
app.canvas.style.width = `${configStore.getAppWidth}px`;
app.canvas.style.height = `${configStore.getAppWidth * configStore.getRatio}px`;
