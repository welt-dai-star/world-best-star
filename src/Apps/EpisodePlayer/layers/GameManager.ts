import {CharacterMotion, EpisodeUnit} from "../../../types/common";
import { useResourceStore } from "../../../store/resource";
import * as PIXI from "pixi.js"
import { BackgroundHandle } from "./backgroundLayer";
export class EpisodeParser {
  constructor(episode: EpisodeUnit[]) {
    this.episode = episode;
    this.nowPlaying = 0;
    this.SpineHandle = ()=> {};
    this.TextHandle = ()=> {};
    this.BackgroundHandle = BackgroundHandle;
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
  public static LoadAllResource(EpisodeJSON: EpisodeUnit[]) {
    const resourceStore = useResourceStore();
    for (const unit of EpisodeJSON) {
      for (const motion of unit.characterMotions) {
        resourceStore.LoadSpineResource(motion.spineId.toString());
      } 
    }
  }
}

export function init() {
  const application = new PIXI.Application({
    width: window.innerWidth * window.devicePixelRatio,
    height: window.innerHeight * window.devicePixelRatio,
    backgroundColor: 0x00ff00,
  });
  application.view.style.width = `${window.innerWidth * 0.7}px`;
  application.view.style.height = `${window.innerHeight * 0.7}px`;
  document.getElementById("spine_layer")!.appendChild(application.view);
  return application;
}

export const app = init();
