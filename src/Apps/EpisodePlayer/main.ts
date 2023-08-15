import * as PIXI from "pixi.js";
import { useConfigStore } from "../../store/config";


const configStore = useConfigStore();

function layerInit(app: PIXI.Application) {
  const backgroundLayer = new PIXI.Container();
  backgroundLayer.name = "backgroundLayer";
  app.stage.addChildAt(backgroundLayer, 0);
  const spineLayer = new PIXI.Container();
  spineLayer.name = "spineLayer";
  app.stage.addChildAt(spineLayer, 1);
  const textLayer = new PIXI.Container();
  textLayer.name = "textLayer";
  app.stage.addChildAt(textLayer, 2);
  const effectLayer = new PIXI.Container();
  effectLayer.name = "effectLayer";
  app.stage.addChildAt(effectLayer, 3);
  const historyLayer = new PIXI.Container();
  historyLayer.name = "historyLayer";
  app.stage.addChildAt(historyLayer, 4);
  const uiLayer = new PIXI.Container();
  uiLayer.name = "uiLayer";
  app.stage.addChildAt(uiLayer, 5);
  const debugLayer = new PIXI.Container();
  debugLayer.name = "debugLayer";
  app.stage.addChildAt(debugLayer, 6);
}

function appInit() {
  const application = new PIXI.Application({
    width: window.innerWidth * window.devicePixelRatio,
    height: window.innerWidth * window.devicePixelRatio * configStore.getRatio,
    backgroundColor: 0x0,
  });
  application.view.style.width = `${window.innerWidth * 0.7}px`;
  application.view.style.height = `${window.innerWidth * 0.7 * configStore.getRatio}px`;
  return application;
}

export const app = init();

export function init() {
  const application = appInit();
  layerInit(application);
  return application;
}
